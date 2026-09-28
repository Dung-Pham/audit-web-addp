import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import {
  assertSafeRequest, compareRuns, createRun, deduplicateFindings, resolveContradictions,
  resumeRun, reviewFindings, saveStage, validateBacklog, validateConsistency,
  validateEvidence, validateSchema
} from '../orchestration/core.mjs';

const baseUrl = 'https://fixture.example/';
const evidence = (id = 'EVD-1', artifact = 'evidence/html/page.html') => ({
  evidence_id: id, url: baseUrl, page_type: 'homepage', collector: 'raw-http',
  type: 'html', viewport: null, artifact, raw_fact: { title: 'Fixture' },
  observed_at: '2026-09-27T00:00:00.000Z'
});
const finding = (id = 'FND-1', overrides = {}) => ({
  finding_id: id, title: 'Missing title', area: 'SEO', page: baseUrl,
  page_type: 'homepage', source_requirement_ids: ['REQ-1'], source: 'checklist',
  finding_type: 'deterministic', observation: 'The title is absent.',
  evidence_ids: ['EVD-1'], impact: { user: null, business: null, seo: 'Search result lacks a title.', technical: null },
  severity: 'medium', confidence: 0.94, suggested_direction: 'Add a descriptive title.', unknowns: [],
  review: {status:'accepted',supported:true,provenance:'independent_evidence_review',reviewer_role:'evidence_reviewer',reviewer_id:'fixture-reviewer',reason:'Fixture verdict',evidence_ids_reviewed:['EVD-1'],supported_facts:['Fixture evidence inspected'],observation_reviewed:'The title is absent.',page_reviewed:baseUrl,source_requirement_ids_reviewed:['REQ-1']},
  ...overrides
});
const task = (id = 'TASK-1', overrides = {}) => ({
  task_id: id, finding_ids: ['FND-1'], title: 'Add title', objective: 'Make the page identifiable',
  current_problem: 'The title is absent', target_state: 'The page has a descriptive title',
  recommended_changes: ['Add title'], affected_urls: [baseUrl], implementation_area: ['CMS/content'],
  developer_investigation: [], dependencies: [], priority: 'P2', effort: 'S',
  acceptance_criteria: ['A descriptive title is present'], automated_verification: ['Check HTML title'],
  manual_verification: [], risks: [], status: 'planned', ...overrides
});
const manifest = { target: baseUrl, environment: 'fixture', checklist_hash: 'abc', config_hash: 'def' };

async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'audit-core-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const runDir = path.join(root, 'RUN-1');
  await mkdir(path.join(runDir, 'evidence', 'html'), { recursive: true });
  await writeFile(path.join(runDir, 'evidence', 'html', 'page.html'), '<title>Fixture</title>');
  return { root, runDir };
}

test('all contract schemas accept their required shapes and reject malformed data', () => {
  assert.equal(validateSchema('evidence', evidence()).valid, true);
  assert.equal(validateSchema('finding', finding()).valid, true);
  assert.equal(validateSchema('journey', { persona: 'visitor', goal: 'read', entry_url: baseUrl, steps: [], clicks: 0, pages_visited: [], blockers: [], confusion_points: [], positive_signals: [], completion_status: 'partial', evidence_ids: [] }).valid, true);
  assert.equal(validateSchema('page', { url: baseUrl, page_type: 'homepage', discovered_from: [], http_status: 200, canonical: null, indexability: null, importance: 'high' }).valid, true);
  assert.equal(validateSchema('backlog', task()).valid, true);
  assert.equal(validateSchema('technical-diagnostic', { finding_id: 'FND-1', observed_problem: 'No title', confirmed_external_facts: ['HTML title absent'], probable_technical_causes: [], developer_investigation: [], implementation_area: ['CMS/content'], confidence: 0.8 }).valid, true);
  assert.equal(validateSchema('finding', finding('FND-2', { confidence: 1.1 })).valid, false);
  assert.equal(validateSchema('backlog', task('TASK-2', { status: 'done' })).valid, false);
  assert.throws(() => validateSchema('missing', {}), /Unknown schema/);
});

test('evidence validates IDs, artifact existence and containment including symlinks', async t => {
  const { root, runDir } = await fixture(t);
  assert.deepEqual(await validateEvidence([evidence()], runDir), []);
  assert.match((await validateEvidence([evidence(), evidence()], runDir)).join(' '), /duplicate evidence_id/);
  assert.match((await validateEvidence([evidence('EVD-2', 'evidence/html/missing.html')], runDir)).join(' '), /does not exist/);
  assert.match((await validateEvidence([evidence('EVD-2', '../outside.txt')], runDir)).join(' '), /escapes run directory/);
  assert.match((await validateEvidence([evidence('EVD-2', path.join(root, 'outside.txt'))], runDir)).join(' '), /relative run path/);
  const outside = path.join(root, 'outside.txt');
  await writeFile(outside, 'outside');
  await symlink(outside, path.join(runDir, 'evidence', 'html', 'link.html'));
  assert.match((await validateEvidence([evidence('EVD-2', 'evidence/html/link.html')], runDir)).join(' '), /outside run directory/);
  assert.match((await validateEvidence([evidence('EVD-2', null)], runDir)).join(' '), /artifact required/);
  assert.match((await validateEvidence([evidence('EVD-2', null)], runDir)).join(' '), /must be string/);
  assert.match((await validateEvidence([{...evidence('EVD-3', null),type:'raw_html'}], runDir)).join(' '), /artifact required/);
  assert.match((await validateEvidence([evidence('EVD-4', 'evidence/html')], runDir)).join(' '), /not a regular file/);
});

test('review rejects unsupported references, routes subjective claims and persists reasons', async t => {
  const { runDir } = await fixture(t);
  const candidates = [
    finding('FND-1'),
    finding('FND-2', { evidence_ids: [] }),
    finding('FND-3', { source_requirement_ids: ['REQ-MISSING'] }),
    finding('FND-4', { finding_type: 'heuristic' }),
    finding('FND-5', { finding_type: 'content_review', review: { status: 'accepted', reason: 'Reviewer checked the claim against the page.' } }),
    finding('FND-6', { review: { status: 'rejected', supported: false, reason: 'The screenshot shows the title.' } }),
    finding('FND-7', { confidence: 0.3 }),
    finding('FND-8', { review: { status: 'blocked', reason: 'Needs mobile capture.' } }),
    finding('FND-9', { source: 'best_practice', source_requirement_ids: [] }),
    finding('FND-10', { source: 'best_practice' })
  ];
  const decisions=[
    {finding_id:'FND-1',status:'accepted',supported:true,reason:'Verified fixture'},
    {finding_id:'FND-5',status:'accepted',supported:true,reason:'Reviewer checked the claim against the page.'},
    {finding_id:'FND-6',status:'rejected',supported:false,reason:'The screenshot shows the title.'},
    {finding_id:'FND-8',status:'blocked',supported:false,reason:'Needs mobile capture.'},
    {finding_id:'FND-9',status:'accepted',supported:true,reason:'Verified fixture'}
  ];
  const result = await reviewFindings(candidates, [evidence()], [{ id: 'REQ-1' }], runDir, decisions.map(d=>{const candidate=candidates.find(f=>f.finding_id===d.finding_id);return {...d,reviewer_role:'evidence_reviewer',reviewer_id:'fixture-reviewer',evidence_ids_reviewed:['EVD-1'],supported_facts:['Fixture artifact inspected'],observation_reviewed:candidate.observation,page_reviewed:candidate.page,source_requirement_ids_reviewed:candidate.source_requirement_ids};}));
  assert.deepEqual(result.accepted.map(item => item.finding_id), ['FND-1', 'FND-5', 'FND-9']);
  assert.deepEqual(result.rejected.map(item => item.finding_id), ['FND-2', 'FND-3', 'FND-6', 'FND-10']);
  assert.deepEqual(result.manual_review.map(item => item.finding_id), ['FND-4', 'FND-7']);
  assert.deepEqual(result.blocked.map(item => item.finding_id), ['FND-8']);
  const persisted = JSON.parse(await readFile(path.join(runDir, 'review', 'findings.rejected.json'), 'utf8'));
  assert.match(persisted.find(item => item.finding_id === 'FND-6').review_reasons[0], /screenshot/);
  const selfAccepted=await reviewFindings([finding('FND-SELF',{finding_type:'heuristic',review:{status:'accepted',supported:true}})],[evidence()],[{id:'REQ-1'}],runDir);
  assert.equal(selfAccepted.accepted.length,0);
  assert.equal(selfAccepted.manual_review.length,1);
  const internal=finding('FND-BACKEND',{observation:'KiotViet receives every order.'});
  const internalReview=await reviewFindings([internal],[evidence()],[{id:'REQ-1'}],runDir,[{finding_id:internal.finding_id,status:'accepted',supported:true,reason:'Claimed in candidate',reviewer_role:'evidence_reviewer',reviewer_id:'fixture-reviewer',evidence_ids_reviewed:['EVD-1'],supported_facts:['No externally observed transfer'],observation_reviewed:internal.observation,page_reviewed:internal.page,source_requirement_ids_reviewed:internal.source_requirement_ids}]);
  assert.equal(internalReview.accepted.length,0);
  assert.equal(internalReview.manual_review.length,1);
});

test('review cannot accept missing or invalid artifact-backed evidence', async t => {
  const { runDir } = await fixture(t);
  const result = await reviewFindings([finding()], [evidence('EVD-1', 'evidence/html/lost.html')], [{ id: 'REQ-1' }], runDir);
  assert.equal(result.accepted.length, 0);
  assert.match(result.rejected[0].review_reasons.join(' '), /invalid evidence_id/);
});

test('deduplication retains origins, evidence, requirements and affected URLs', () => {
  const second = finding('FND-2', { page: 'https://fixture.example/product', evidence_ids: ['EVD-2'], source_requirement_ids: ['REQ-2'], origin: 'conversion', severity: 'high' });
  const output = deduplicateFindings([finding('FND-1', { origin: 'seo' }), second]);
  assert.equal(output.length, 1);
  assert.deepEqual(output[0].evidence_ids, ['EVD-1', 'EVD-2']);
  assert.deepEqual(output[0].source_requirement_ids, ['REQ-1', 'REQ-2']);
  assert.deepEqual(output[0].affected_urls, [baseUrl, 'https://fixture.example/product']);
  assert.deepEqual(output[0].origins, ['seo', 'FND-1', 'conversion', 'FND-2']);
  assert.equal(output[0].severity, 'high');
});

test('contradictions stay unresolved and both claims require manual review', () => {
  const a = finding('FND-1', { claim_key: 'title-visible', claim_value: true, review_status: 'accepted' });
  const b = finding('FND-2', { claim_key: 'title-visible', claim_value: false, evidence_ids: ['EVD-2'] });
  const result = resolveContradictions([a, b]);
  assert.equal(result.contradictions.length, 1);
  assert.deepEqual(result.contradictions[0].evidence_ids, ['EVD-1', 'EVD-2']);
  assert.ok(result.findings.every(item => item.review_status === 'needs_manual_review'));
  assert.equal(a.review_status, 'accepted', 'original input remains intact');
});

test('backlog enforces accepted traceability and acyclic, existing dependencies', () => {
  assert.deepEqual(validateBacklog([task()], [finding()]), []);
  assert.match(validateBacklog([task()], []).join(' '), /not accepted/);
  assert.match(validateBacklog([task('TASK-1', { dependencies: ['TASK-9'] })], [finding()]).join(' '), /unknown dependency/);
  assert.match(validateBacklog([task('TASK-1', { dependencies: ['TASK-1'] })], [finding()]).join(' '), /self dependency/);
  const cycle = [task('TASK-1', { dependencies: ['TASK-2'] }), task('TASK-2', { dependencies: ['TASK-1'] })];
  assert.match(validateBacklog(cycle, [finding()]).join(' '), /dependency cycle/);
  assert.match(validateBacklog([task('TASK-1', { likely_code_scope: ['app/code'] })], [finding()]).join(' '), /unavailable source code/);
});

test('request guard permits read-only navigation and blocks mutation even with permissive config', () => {
  assert.equal(assertSafeRequest('https://fixture.example/search?q=vitamin', 'GET'), 'https://fixture.example/search?q=vitamin');
  assert.equal(assertSafeRequest('http://127.0.0.1:4000/cart', 'HEAD'), 'http://127.0.0.1:4000/cart');
  const accountLink = 'https://fixture.example/customer/account/login/referer/aHR0cHM6Ly9hZGRwLnZuLw~~/';
  const started = performance.now();
  assert.equal(assertSafeRequest(accountLink, 'GET'), accountLink);
  assert.ok(performance.now() - started < 1000, 'ordinary account link must not stall the guard');
  for (const [url, method] of [
    ['https://fixture.example/cart/add?id=1', 'GET'],
    ['https://fixture.example/cart?add-to-cart=1', 'GET'],
    ['https://fixture.example/checkout/place-order', 'GET'],
    ['https://fixture.example/checkout/confirm', 'GET'],
    ['https://fixture.example/checkout/', 'GET'],
    ['https://fixture.example/account/logout', 'GET'],
    ['https://fixture.example/account/register', 'GET'],
    ['https://fixture.example/customer/account/profile/pay', 'GET'],
    ['https://fixture.example/customer/account/profile%2Fpay', 'GET'],
    ['https://fixture.example/signup', 'GET'],
    ['https://fixture.example/newsletter/subscribe', 'GET'],
    ['https://fixture.example/product', 'POST'],
    ['javascript:alert(1)', 'GET']
  ]) assert.throws(() => assertSafeRequest(url, method), /Unsafe/);
  assert.throws(() => assertSafeRequest('https://fixture.example/', 'GET', { allowRealOrder: true }), /Unsafe request config/);
  assert.throws(() => assertSafeRequest('https://fixture.example/', 'GET', { safety_flags: { AUDIT_ALLOW_ACCOUNT_CREATION: true } }), /Unsafe request config/);
});

test('run creation is exclusive, resume preserves state, and stage writes remain valid', async t => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'audit-runs-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const runDir = await createRun(root, 'RUN-1', manifest);
  await assert.rejects(createRun(root, 'RUN-1', manifest), /EEXIST/);
  await assert.rejects(createRun(root, '../escape', manifest), /Invalid RUN_ID/);
  await assert.rejects(createRun(root, 'RUN-2', { ...manifest, allow_real_order: true }), /Unsafe run flag/);
  const [first, second] = await Promise.all([saveStage(runDir, 'discovery', 'completed', { pages: 4 }), saveStage(runDir, 'collect', 'interrupted', { evidence: 7 })]);
  assert.equal(first.stage_status.discovery.pages, 4);
  assert.equal(second.stage_status.collect.evidence, 7);
  const resumed = await resumeRun(root, 'RUN-1');
  assert.equal(resumed.manifest.stage_status.discovery.status, 'completed');
  assert.equal(resumed.manifest.stage_status.collect.status, 'interrupted');
  assert.equal(resumed.manifest.safety_flags.allow_real_order, false);
  assert.equal((await readFile(path.join(runDir, 'manifest.json'), 'utf8')).includes('"RUN_ID": "RUN-1"'), true);
});

test('regression classifies fixed, improved, unchanged, regressed and new', () => {
  const before = [
    finding('FND-fixed', { severity: 'high' }),
    finding('FND-improved', { severity: 'high' }),
    finding('FND-unchanged', { severity: 'medium' }),
    finding('FND-regressed', { severity: 'low' })
  ];
  const after = [
    finding('FND-improved', { severity: 'low' }),
    finding('FND-unchanged', { severity: 'medium' }),
    finding('FND-regressed', { severity: 'critical' }),
    finding('FND-new', { severity: 'low' })
  ];
  const comparison = compareRuns(before, after);
  assert.deepEqual(comparison.map(item => item.status), ['fixed', 'improved', 'unchanged', 'regressed', 'new']);
  assert.equal(comparison[0].provisional, true);
  assert.match(comparison[0].interpretation, /unverified/);
  after.coverage = { 'FND-fixed': { recrawled: true, evidence_ids: ['EVD-recheck'] } };
  assert.equal(compareRuns(before, after)[0].provisional, false);
});

test('final consistency catches broken cross-artifact references', async t => {
  const { root, runDir } = await fixture(t);
  const goodManifest = { ...manifest, RUN_ID: 'RUN-1', timestamp: '2026-09-27T00:00:00.000Z', stage_status: {}, safety_flags: { allow_real_order: false, allow_payment: false, allow_account_creation: false, allow_destructive_actions: false }, safety_outcomes: { real_orders: 0, real_payments: 0, accounts_created: 0, forms_submitted: 0, website_changes: 0 }, effective_models: null, website_source_available: false };
  const input = { runDir, evidence: [evidence()], requirements: [{ id: 'REQ-1' }], accepted: [finding()], backlog: [task()], manifest: goodManifest, checks: [{ requirement_id: 'REQ-1', status: 'PASS', evidence_ids: ['EVD-1'] }] };
  assert.deepEqual(await validateConsistency(input), { valid: true, errors: [] });
  const broken = await validateConsistency({ ...input, evidence: [evidence('EVD-1', '../escape')], checks: [{ requirement_id: 'REQ-X', evidence_ids: ['EVD-X'] }], backlog: [task('TASK-1', { dependencies: ['TASK-X'] })] });
  assert.equal(broken.valid, false);
  assert.match(broken.errors.join(' '), /escapes run directory/);
  assert.match(broken.errors.join(' '), /unknown requirement_id/);
  assert.match(broken.errors.join(' '), /unknown dependency/);
  void root;
});

test('final consistency requires each requirement exactly once and forbids false PASS', async t => {
  const { runDir } = await fixture(t);
  const base = consistentInput(runDir);
  const missing = await validateConsistency({ ...base, requirements: [{ id: 'REQ-1' }, { id: 'REQ-2' }] });
  assert.match(missing.errors.join(' '), /requirement has no check: REQ-2/);
  const duplicate = await validateConsistency({ ...base, checks: [...base.checks, base.checks[0]] });
  assert.match(duplicate.errors.join(' '), /exactly one check/);
  const blocked = await validateConsistency({ ...base, checks: [{ requirement_id: 'REQ-1', status: 'PASS', evidence_ids: ['EVD-1'], subchecks: [{ status: 'blocked' }] }] });
  assert.match(blocked.errors.join(' '), /PASS contains blocked/);
  const manual = await validateConsistency({ ...base, checks: [{ requirement_id: 'REQ-1', status: 'PASS', evidence_ids: ['EVD-1'], subchecks: [{ status: 'needs_manual_review' }] }] });
  assert.match(manual.errors.join(' '), /PASS contains blocked/);
  const marked = await validateConsistency({ ...base, checks: [{ requirement_id: 'REQ-1', status: 'PASS', evidence_ids: ['EVD-1'], manual_review: true }] });
  assert.match(marked.errors.join(' '), /PASS contains blocked/);
  const noEvidence = await validateConsistency({ ...base, checks: [{ requirement_id: 'REQ-1', status: 'PASS', evidence_ids: [] }] });
  assert.match(noEvidence.errors.join(' '), /PASS has no evidence/);
});

test('final consistency requires every accepted finding in backlog', async t => {
  const { runDir } = await fixture(t);
  const base = consistentInput(runDir);
  const result = await validateConsistency({ ...base, accepted: [finding(), finding('FND-2')] });
  assert.match(result.errors.join(' '), /accepted finding has no backlog task: FND-2/);
});

test('final consistency requires explicit read-only flags and zero outcomes', async t => {
  const { runDir } = await fixture(t);
  const base = consistentInput(runDir);
  const missing = await validateConsistency({ ...base, manifest: { ...base.manifest, safety_flags: {} } });
  assert.match(missing.errors.join(' '), /safety flag order must be explicitly false/);
  const sideEffect = await validateConsistency({ ...base, manifest: { ...base.manifest, safety_outcomes: { ...base.manifest.safety_outcomes, forms_submitted: 1 } } });
  assert.match(sideEffect.errors.join(' '), /forms_submitted must be zero/);
  const enabled = await validateConsistency({ ...base, manifest: { ...base.manifest, safety_flags: { ...base.manifest.safety_flags, AUDIT_ALLOW_REAL_ORDER: true } } });
  assert.match(enabled.errors.join(' '), /permits side effects/);
});

test('final consistency rejects unsupported model and source claims', async t => {
  const { runDir } = await fixture(t);
  const base = consistentInput(runDir);
  const model = await validateConsistency({ ...base, manifest: { ...base.manifest, effective_models: { specialist: 'gpt-6-sol' } } });
  assert.match(model.errors.join(' '), /without verifiable provenance/);
  const bogusProvenance = await validateConsistency({ ...base, manifest: { ...base.manifest, effective_models: { specialist: 'gpt-6-sol' }, effective_model_verification: { status: 'verified', source: 'runtime', artifact: 'runtime/missing.json' } } });
  assert.match(bogusProvenance.errors.join(' '), /effective model provenance artifact does not exist/);
  const routing = await validateConsistency({ ...base, manifest: { ...base.manifest, routing_status: 'verified' } });
  assert.match(routing.errors.join(' '), /routing is claimed verified/);
  const source = await validateConsistency({ ...base, manifest: { ...base.manifest, website_source_available: true, website_source_sha: 'fake' } });
  assert.match(source.errors.join(' '), /website source availability is unsupported/);
  assert.match(source.errors.join(' '), /unsupported source scope field/);
});

test('final consistency validates external diagnostic semantics', async t => {
  const { runDir } = await fixture(t);
  const base = consistentInput(runDir);
  const diagnostic = { finding_id: 'FND-1', observed_problem: 'Missing title', confirmed_external_facts: ['The HTML title is absent'], probable_technical_causes: ['Template may omit title'], developer_investigation: ['Inspect title rendering'], implementation_area: ['CMS/content'], confidence: 0.8, evidence_ids: ['EVD-1'] };
  assert.equal((await validateConsistency({ ...base, manifest:{...base.manifest,stage_status:{...base.manifest.stage_status,reports:{status:'pending'}}}, diagnostics: [diagnostic] })).valid, true);
  const invalid = await validateConsistency({ ...base, diagnostics: [{ ...diagnostic, confirmed_external_facts: ['app/code/Module/Foo.php is broken'], probable_technical_causes: ['Confirmed template bug'], developer_investigation: [], likely_code_scope: ['app/code'] }] });
  assert.match(invalid.errors.join(' '), /unsupported internal-source assertion/);
  assert.match(invalid.errors.join(' '), /probable cause is stated as confirmed/);
  assert.match(invalid.errors.join(' '), /probable causes require developer investigation/);
  assert.match(invalid.errors.join(' '), /unsupported source scope field/);
  const internal=await validateConsistency({...base,diagnostics:[{...diagnostic,confirmed_external_facts:['KiotViet receives every order.']}]});
  assert.match(internal.errors.join(' '),/unsupported internal-source assertion/);
});

test('final validation requires populated report, plan and dependency artifacts', async t => {
  const { runDir } = await fixture(t);
  const base = consistentInput(runDir);
  const missing = await validateConsistency({ ...base, finalValidation: true });
  assert.match(missing.errors.join(' '), /AUDIT_REPORT.md/);
  assert.match(missing.errors.join(' '), /DEPENDENCIES.json/);
  for (const relative of ['reports/AUDIT_REPORT.md', 'reports/IMPROVEMENT_PLAN.md', 'reports/EXECUTIVE_PLAN.md', 'backlog/IMPLEMENTATION_BACKLOG.json', 'backlog/DEPENDENCIES.json']) {
    const file = path.join(runDir, relative);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, relative.endsWith('.json') ? '[]' : '# Fixture report');
  }
  await mkdir(path.join(runDir,'review'),{recursive:true});
  await writeFile(path.join(runDir,'review/evidence-decisions.json'),JSON.stringify([{finding_id:'FND-1',status:'accepted',supported:true,reviewer_role:'evidence_reviewer',reviewer_id:'fixture-reviewer',reason:'Fixture artifact inspected',evidence_ids_reviewed:['EVD-1'],supported_facts:['Title absent in fixture response'],observation_reviewed:'The title is absent.',page_reviewed:baseUrl,source_requirement_ids_reviewed:['REQ-1']} ]));
  assert.equal((await validateConsistency({ ...base, finalValidation: true })).valid, true);
  await writeFile(path.join(runDir, 'backlog', 'DEPENDENCIES.json'), '{broken');
  assert.match((await validateConsistency({ ...base, finalValidation: true })).errors.join(' '), /invalid final artifact JSON/);
  const outside = path.join(path.dirname(runDir), 'outside-report.md');
  await writeFile(outside, '# Outside');
  await rm(path.join(runDir, 'reports', 'AUDIT_REPORT.md'));
  await symlink(outside, path.join(runDir, 'reports', 'AUDIT_REPORT.md'));
  assert.match((await validateConsistency({ ...base, finalValidation: true })).errors.join(' '), /final artifact escapes run directory/);
});

function consistentInput(runDir) {
  const stages=Object.fromEntries(['discovery','deterministic_collection','personas','specialists','external_diagnostic','evidence_review','contradiction_review','deduplication','reports','master_planner'].map(s=>[s,{status:'complete'}]));
  return {
    runDir, pages:[{url:baseUrl,page_type:'homepage'}],evidence: [evidence()], requirements: [{ id: 'REQ-1' }], accepted: [finding()], backlog: [task()],
    manifest: {
      RUN_ID: path.basename(runDir), timestamp: '2026-09-27T00:00:00.000Z', target: baseUrl, environment: 'fixture',
      stage_status: stages, safety_flags: { allow_real_order: false, allow_payment: false, allow_account_creation: false, allow_destructive_actions: false },
      safety_outcomes: { real_orders: 0, real_payments: 0, accounts_created: 0, forms_submitted: 0, website_changes: 0 },
      effective_models: null, website_source_available: false
    },
    checks: [{ requirement_id: 'REQ-1', status: 'PASS', evidence_ids: ['EVD-1'] }]
  };
}
