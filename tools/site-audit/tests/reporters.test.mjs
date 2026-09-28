import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { generateReports, planFindings } from '../reporters/index.mjs';

const finding = (id, overrides = {}) => ({
  finding_id: id,
  title: 'Product page has no visible delivery policy link',
  area: 'PDP conversion',
  page: 'https://fixture.test/product/a',
  page_type: 'product_detail',
  source_requirement_ids: ['REQ-DELIVERY'],
  source: 'checklist',
  finding_type: 'deterministic',
  observation: 'The sampled product page did not display a delivery policy link in the rendered viewport.',
  evidence_ids: ['EVD-1'],
  impact: { user: 'Delivery terms are hard to locate.', business: null, seo: null, technical: null },
  severity: 'high',
  confidence: 0.9,
  suggested_direction: 'Expose a delivery-policy link near the purchase information.',
  unknowns: ['Link presence below the sampled viewport was not assessed.'],
  ...overrides
});

test('planner uses accepted findings, approved specifics, and labeled diagnostics', () => {
  const approved = finding('FND-1', { planning: {
    title: 'Expose delivery terms on the product page',
    objective: 'Make delivery terms visible before purchase.',
    target_state: 'Visitors can open delivery terms from the product information area.',
    recommended_changes: ['Add a visible delivery-policy link near purchase information.'],
    acceptance_criteria: ['The sampled product page displays and opens the delivery-policy link.'],
    automated_verification: ['Check the rendered DOM for a policy link on the sampled URL.'],
    manual_verification: ['Open the link at desktop and mobile widths.'],
    implementation_area: ['PDP template'],
    effort: 'S'
  } });
  const tasks = planFindings([approved, finding('FND-REJECT', { status: 'rejected' })], [
    { finding_id: 'FND-1', confirmed_external_facts: ['No link was visible in sampled DOM.'], probable_technical_causes: ['Template omits a policy block.'], developer_investigation: ['Check content configuration for delivery policy.'], implementation_area: ['PDP template'] },
    { finding_id: 'FND-REJECT', probable_technical_causes: ['Unrelated hypothesis'] }
  ]);
  assert.equal(tasks.length, 1);
  assert.deepEqual(tasks[0].finding_ids, ['FND-1']);
  assert.deepEqual(tasks[0].source_requirement_ids, ['REQ-DELIVERY']);
  assert.deepEqual(tasks[0].evidence_ids, ['EVD-1']);
  assert.deepEqual(tasks[0].acceptance_criteria, ['The sampled product page displays and opens the delivery-policy link.']);
  assert.deepEqual(tasks[0].developer_investigation, ['Check content configuration for delivery policy.']);
  assert.deepEqual(tasks[0].diagnostic.probable_technical_causes, ['Template omits a policy block.']);
  assert.equal('likely_code_scope' in tasks[0], false);
  assert.equal(JSON.stringify(tasks).includes('Unrelated hypothesis'), false);
  const diagnosticPlan = planFindings([finding('FND-DIAG')], [{
    finding_id: 'FND-DIAG',
    planning: { acceptance_criteria: ['A delivery policy link is visible at mobile width.'], effort: 'L' }
  }])[0];
  assert.deepEqual(diagnosticPlan.acceptance_criteria, ['A delivery policy link is visible at mobile width.']);
  assert.equal(diagnosticPlan.effort, 'L');
});

test('planner resolves dependencies and rejects unknown or cyclic references', () => {
  const a = finding('FND-A', { planning: { dependencies: ['FND-B'] } });
  const b = finding('FND-B');
  assert.deepEqual(planFindings([a, b])[0].dependencies, ['TASK-002']);
  assert.throws(() => planFindings([finding('FND-X', { planning: { dependencies: ['TASK-999'] } })]), /Unknown dependency/);
  assert.throws(() => planFindings([a, finding('FND-B', { planning: { dependencies: ['FND-A'] } })]), /Cyclic dependency/);
});

test('reports contain every required section, trace accepted issues, and exclude rejected issues from plans', async t => {
  const runDir = await mkdtemp(path.join(os.tmpdir(), 'audit-reporter-'));
  t.after(() => rm(runDir, { recursive: true, force: true }));
  const approved = finding('FND-1', { planning: { acceptance_criteria: ['A visible delivery policy link opens the policy page.'] } });
  const rejected = finding('FND-REJECT', { review_status: 'rejected', title: 'Rejected claim' });
  const requirements = Array.from({ length: 17 }, (_, i) => ({
    id: i === 0 ? 'REQ-DELIVERY' : `REQ-${i + 1}`,
    source: 'checklist',
    original_text: i === 0 ? 'Original delivery requirement.' : `Original checklist row ${i + 1}.`,
    strategic_objective_original_text: `Original strategic objective ${i + 1}.`,
    source_location: `Workbook row ${i + 1}`,
    verification_methods: ['browser inspection']
  }));
  const result = await generateReports({
    runDir,
    manifest: { RUN_ID: 'fixture-1', timestamp: '2026-01-01T00:00:00Z', target: 'https://fixture.test', environment: 'fixture', effective_models: { specialist: 'unverified' }, routing_status: 'supported_requested_models_unverified' },
    pages: [{ url: approved.page, page_type: 'product_detail', http_status: 200, indexability: 'unknown' }],
    evidence: [{ evidence_id: 'EVD-1', url: approved.page, collector: 'browser', type: 'dom', artifact: 'evidence/dom/a.html', observed_at: '2026-01-01T00:00:00Z' }],
    requirements,
    checks: [{ requirement_id: 'REQ-DELIVERY', status: 'failed', observation: 'No visible link in sampled viewport.', evidence_ids: ['EVD-1'] }],
    journeys: [{ persona: 'buyer', goal: 'Find delivery terms', entry_url: approved.page, completion_status: 'partial', clicks: 1, evidence_ids: ['EVD-1'], blockers: ['Terms not visible'] }],
    accepted: [approved, rejected],
    manualReview: [{ finding_id: 'FND-MANUAL', reason: 'Needs expert review' }],
    blocked: [{ stage: 'checkout', reason: 'Read-only boundary' }],
    diagnostics: [{ finding_id: 'FND-1', confirmed_external_facts: ['No link in sampled DOM'], probable_technical_causes: ['Template may omit link'], developer_investigation: ['Inspect PDP content settings'] }]
  });
  const [audit, plan, executive, backlog, dependencies] = await Promise.all([
    readFile(result.files.AUDIT_REPORT, 'utf8'), readFile(result.files.IMPROVEMENT_PLAN, 'utf8'), readFile(result.files.EXECUTIVE_PLAN, 'utf8'),
    readFile(result.files.IMPLEMENTATION_BACKLOG, 'utf8').then(JSON.parse), readFile(result.files.DEPENDENCIES, 'utf8').then(JSON.parse)
  ]);
  assert.equal((audit.match(/^## \d+\. /gm) || []).length, 27);
  assert.equal((plan.match(/^## \d+\. /gm) || []).length, 29);
  for (const report of [audit, plan, executive]) {
    assert.match(report, /Run ID:\*\* fixture-1/);
    assert.match(report, /Date:\*\* 2026-01-01T00:00:00Z/);
    assert.match(report, /Target:\*\* https:\/\/fixture\.test/);
  }
  for (const section of ['Checklist compliance', 'Persona journeys', 'KiotViet externally observable behavior', 'External technical diagnostics', 'Evidence appendix']) assert.match(audit, new RegExp(section));
  for (const section of ['Developer Investigation List', 'Dependency graph', 'Acceptance criteria']) assert.match(plan, new RegExp(section));
  assert.match(audit, /FND-1[\s\S]*EVD-1[\s\S]*REQ-DELIVERY/);
  assert.match(audit, /Planned task\(s\):\*\* TASK-001/);
  assert.match(audit, /PROBABLE CAUSES \(unverified\)/);
  assert.match(audit, /No link in sampled DOM/);
  assert.match(audit, /laboratory measurements/);
  assert.match(audit, /supported_requested_models_unverified/);
  for (let i = 1; i <= 17; i++) {
    assert.match(audit, new RegExp(i === 1 ? 'Original delivery requirement\\.' : `Original checklist row ${i}\\.`));
    assert.match(audit, new RegExp(`Original strategic objective ${i}\\.`));
    assert.match(audit, new RegExp(`Workbook row ${i}`));
  }
  assert.match(plan, /A visible delivery policy link opens the policy page/);
  assert.match(executive, /FND-1/);
  assert.equal(backlog.length, 1);
  assert.equal(backlog[0].finding_ids[0], 'FND-1');
  assert.deepEqual(dependencies.tasks, [{ task_id: 'TASK-001', depends_on: [] }]);
  assert.equal([audit, plan, executive, JSON.stringify(backlog)].some(value => value.includes('FND-REJECT')), false);
  assert.match(audit, /FND-MANUAL/);
  assert.match(audit, /Read-only boundary/);
});

test('provided backlog cannot introduce tasks for unaccepted findings', async t => {
  const runDir = await mkdtemp(path.join(os.tmpdir(), 'audit-reporter-'));
  t.after(() => rm(runDir, { recursive: true, force: true }));
  await assert.rejects(generateReports({ runDir, accepted: [finding('FND-1')], backlog: [{ task_id: 'TASK-X', finding_ids: ['FND-REJECT'] }] }), /not accepted/);
});
