import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { planFindings } from './planner.mjs';

export { planFindings } from './planner.mjs';

const list = value => Array.isArray(value) ? value : value && typeof value === 'object' ? Object.values(value) : [];
const str = value => value === null || value === undefined ? '' : String(value);
const uniq = value => [...new Set((Array.isArray(value) ? value : value ? [value] : []).map(str).filter(Boolean))];
const safe = value => str(value).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ').trim();
const text = value => safe(value) || 'Unknown / not recorded';
const bullets = values => values.length ? values.map(v => `- ${v}`).join('\n') : '- Unknown / not recorded.';
const heading = (n, title) => `## ${n}. ${title}\n\n`;
const empty = 'No accepted finding is mapped to this section. This does not establish compliance; coverage or expert review may still be incomplete.';
const allIds = item => uniq(item?.source_requirement_ids);
const evIds = item => uniq(item?.evidence_ids);
const serialize = value => JSON.stringify(value ?? null, null, 2);
const reportHeader = (title, manifest) => `# ${title}\n\n**Run ID:** ${text(manifest?.RUN_ID || manifest?.run_id)}  \n**Date:** ${text(manifest?.timestamp || manifest?.date)}  \n**Target:** ${text(manifest?.target)}\n\n`;

function requirementId(value) { return value?.id || value?.requirement_id || value?.source_requirement_id; }
function requirementRows(requirements) {
  return list(requirements?.requirements || requirements).filter(r => r && requirementId(r));
}
function coverageRows(checks) { return list(checks?.checks || checks?.coverage || checks).filter(Boolean); }
function markdownTable(headers, rows) {
  return `| ${headers.join(' | ')} |\n| ${headers.map(() => '---').join(' | ')} |\n${rows.map(row => `| ${row.map(text).join(' | ')} |`).join('\n') || `| ${headers.map(() => '—').join(' | ')} |`}`;
}
function evidenceMap(evidence) { return new Map(list(evidence?.evidence || evidence).filter(e => e?.evidence_id).map(e => [e.evidence_id, e])); }
function findingDetail(f, reqById, evidenceById, diagnostic, taskByFinding) {
  const reqs = allIds(f);
  const evidences = evIds(f);
  const lines = [
    `### ${text(f.finding_id)} — ${text(f.title)}`,
    '',
    `**Classification:** ${text(f.severity)} severity; ${text(f.finding_type)}; confidence ${f.confidence === undefined ? 'unknown' : f.confidence}; source ${f.source === 'checklist' ? 'checklist' : 'best_practice'}.`,
    `**Affected page:** ${text(f.page)} (${text(f.page_type)}).`,
    `**FACT — observation:** ${text(f.observation)}`,
    `**Evidence:** ${evidences.length ? evidences.map(id => `${id}${evidenceById.has(id) ? ` (${text(evidenceById.get(id).artifact || evidenceById.get(id).type)})` : ' (unresolved)'}`).join(', ') : 'None recorded.'}`,
    `**Requirement links:** ${reqs.length ? reqs.map(id => `${id}${reqById.has(id) ? ` — source ${text(reqById.get(id).source_location || reqById.get(id).source_ref || reqById.get(id).source)}; original checklist text: ${text(reqById.get(id).original_text || reqById.get(id).requirement)}; strategic objective source text: ${text(reqById.get(id).strategic_objective_original_text)}` : ' (unresolved)'}`).join('; ') : 'No checklist requirement linked; best-practice finding.'}`,
    `**Planned task(s):** ${taskByFinding.get(f.finding_id)?.join(', ') || 'None recorded.'}`,
    `**ANALYSIS — impact:** ${['user', 'business', 'seo', 'technical'].map(k => `${k}: ${text(f.impact?.[k])}`).join('; ')}.`,
    `**RECOMMENDATION — direction:** ${text(f.suggested_direction)}.`,
    `**Unknowns:** ${uniq(f.unknowns).length ? uniq(f.unknowns).map(safe).join('; ') : 'None recorded.'}`
  ];
  if (diagnostic) lines.push(
    `**CONFIRMED EXTERNAL FACTS:** ${uniq(diagnostic.confirmed_external_facts).length ? uniq(diagnostic.confirmed_external_facts).map(safe).join('; ') : 'None recorded.'}`,
    `**PROBABLE CAUSES (unverified):** ${uniq(diagnostic.probable_technical_causes).length ? uniq(diagnostic.probable_technical_causes).map(safe).join('; ') : 'None recorded.'}`,
    `**DEVELOPER INVESTIGATION:** ${uniq(diagnostic.developer_investigation).length ? uniq(diagnostic.developer_investigation).map(safe).join('; ') : 'None recorded.'}`
  );
  return lines.join('\n\n');
}
const areaTerms = f => [f.area, f.page_type, ...(Array.isArray(f.origins) ? f.origins : [])].map(str).join(' ').toLowerCase();
const sectionMap = [
  ['UX/UI', /ux|ui|design|visual|accessibility|responsive|mobile|navigation|readability/],
  ['Conversion', /conversion|cta|funnel|lead|cart|checkout/],
  ['Brand', /brand|company|trust/],
  ['Homepage', /home|homepage/],
  ['PDP', /pdp|product.detail|product_detail/],
  ['Landing pages', /landing|product.landing|product_landing/],
  ['News/content', /article|news|content|blog/],
  ['Health/E-E-A-T/trust', /health|medical|claim|eeat|e-e-a-t|trust/],
  ['Technical SEO', /seo|crawl|index|canonical|meta|robots|sitemap/],
  ['GEO/AEO', /geo|aeo|answer|machine.read/],
  ['Structured data', /schema|structured/],
  ['Performance', /performance|speed|lcp|cls|ttfb/],
  ['Analytics', /analytic|tracking|tag|pixel|ga4|gtm/],
  ['Cart/Checkout', /cart|checkout|commerce/],
  ['KiotViet externally observable behavior', /kiotviet|integration/],
  ['External technical diagnostics', /technical|javascript|server|cdn|api/],
  ['Cross-site consistency', /consistency|duplicate|cross.site/]
];
function matchedFindings(title, findings) {
  const matcher = sectionMap.find(([name]) => name === title)?.[1];
  return matcher ? findings.filter(f => matcher.test(areaTerms(f))) : [];
}
function sectionFindings(title, findings, reqById, evidenceById, diagById, taskByFinding) {
  const matches = matchedFindings(title, findings);
  return matches.length ? matches.map(f => findingDetail(f, reqById, evidenceById, diagById.get(f.finding_id), taskByFinding)).join('\n\n') : empty;
}
function scope(manifest, pages, requirements) {
  const models = manifest?.effective_models ?? manifest?.models;
  const routing = manifest?.routing_status ?? manifest?.model_routing?.status ?? manifest?.routing;
  const limitations = uniq(manifest?.limitations);
  return bullets([
    `Target: ${text(manifest?.target)}; environment: ${text(manifest?.environment)}; run: ${text(manifest?.RUN_ID || manifest?.run_id)}.`,
    `Recorded page inventory: ${pages.length}; normalized requirements: ${requirements.length}.`,
    `Viewports: ${manifest?.viewports || manifest?.viewport ? safe(serialize(manifest.viewports || manifest.viewport)) : 'not recorded'}.`,
    `Effective models: ${models ? safe(serialize(models)) : 'not verified / not recorded'}. Routing status: ${routing ? safe(serialize(routing)) : 'not verified / not recorded'}.`,
    'External black-box assessment only. Internal source, backend configuration, private analytics, and order completion cannot be confirmed from public observations.',
    ...limitations.map(l => `Runtime/model limitation: ${safe(l)}.`)
  ]);
}
function auditReport(ctx) {
  const { manifest, pages, evidence, requirements, checks, journeys, accepted, manualReview, blocked, diagnostics, backlog } = ctx;
  const reqById = new Map(requirements.map(r => [requirementId(r), r]));
  const evidenceById = evidenceMap(evidence);
  const diagById = new Map(diagnostics.filter(d => d?.finding_id).map(d => [d.finding_id, d]));
  const taskByFinding = new Map(accepted.map(f => [f.finding_id, backlog.filter(t => t.finding_ids.includes(f.finding_id)).map(t => t.task_id)]));
  const sections = [];
  const put = (title, body) => sections.push(`${heading(sections.length + 1, title)}${body || 'Unknown / not recorded.'}`);
  put('Executive Summary', bullets([
    `${accepted.length} accepted findings; ${backlog.length} planned tasks; ${manualReview.length} manual-review items; ${blocked.length} blocked items.`,
    accepted.length ? `Severity: ${['critical','high','medium','low'].map(s => `${s} ${accepted.filter(f => f.severity === s).length}`).join(', ')}.` : 'No accepted findings recorded; this is not a clean bill of health.',
    'Conclusions below use accepted evidence-linked findings. Unverified areas remain explicit.'
  ]));
  put('Scope', scope(manifest, pages, requirements));
  put('Methodology', bullets([
    'Public-page discovery and read-only external collection feed persona journeys and independent specialist candidates.',
    'Evidence and contradiction review determine accepted findings; only accepted findings feed this report and planning backlog.',
    'FACT records public observations, ANALYSIS states interpreted impact, and RECOMMENDATION identifies a proposed direction.',
    'Performance values are laboratory measurements unless an independently identified field-data source is explicitly recorded. No lab measurement is presented as field experience.'
  ]));
  put('Coverage', checks.length ? markdownTable(['Requirement', 'Method', 'Status', 'Observation', 'Evidence'], checks.map(c => [c.requirement_id || c.id, uniq(c.verification_methods || c.method).join(', '), c.status || c.result, c.observation, uniq(c.evidence_ids).join(', ')])) : 'Coverage checks were not provided. Requirement verification status is unknown.');
  put('Inventory', pages.length ? markdownTable(['URL', 'Type', 'HTTP', 'Indexability', 'Importance'], pages.map(p => [p.url, p.page_type, p.http_status, p.indexability, p.importance])) : 'No page inventory was provided; discovery coverage is unknown.');
  put('Checklist compliance', requirements.length ? markdownTable(['Requirement', 'Original checklist text', 'Strategic objective source text', 'Source reference', 'Verification', 'Check status', 'Accepted findings'], requirements.map(r => {
    const id = requirementId(r); return [id, r.original_text || r.requirement, r.strategic_objective_original_text, r.source_location || r.source_ref || r.source_reference || r.source, uniq(r.verification_methods).join(', '), checks.filter(c => (c.requirement_id || c.id) === id).map(c => c.status || c.result).join(', ') || 'not checked', accepted.filter(f => allIds(f).includes(id)).map(f => f.finding_id).join(', ') || 'No accepted finding; compliance unknown'];
  })) : 'No normalized requirements were supplied; checklist compliance is unknown.');
  put('Persona journeys', journeys.length ? journeys.map(j => `### ${text(j.persona)} — ${text(j.goal)}\n\nEntry: ${text(j.entry_url)}. Status: ${text(j.completion_status)}. Clicks: ${j.clicks ?? 'unknown'}. Pages: ${uniq(j.pages_visited).map(safe).join(', ') || 'unknown'}. Evidence: ${evIds(j).join(', ') || 'none recorded'}.\n\nBlockers: ${uniq(j.blockers).map(safe).join('; ') || 'none recorded'}. Confusion: ${uniq(j.confusion_points).map(safe).join('; ') || 'none recorded'}. Positive signals: ${uniq(j.positive_signals).map(safe).join('; ') || 'none recorded'}.`).join('\n\n') : 'No persona journeys were supplied; journey completion and friction are unknown.');
  for (const title of sectionMap.map(([name]) => name)) {
    if (title === 'External technical diagnostics') {
      const diagnosed = accepted.filter(f => diagById.has(f.finding_id));
      put(title, diagnosed.length ? diagnosed.map(f => findingDetail(f, reqById, evidenceById, diagById.get(f.finding_id), taskByFinding)).join('\n\n') : 'No external technical diagnostic was supplied for an accepted finding. Internal causes remain unknown.');
    } else put(title, sectionFindings(title, accepted, reqById, evidenceById, diagById, taskByFinding));
  }
  put('Findings by severity', accepted.length ? ['critical','high','medium','low'].map(s => `### ${s}\n\n${accepted.filter(f => f.severity === s).map(f => `- ${f.finding_id}: ${safe(f.title)} — evidence ${evIds(f).join(', ') || 'unrecorded'}; requirements ${allIds(f).join(', ') || 'best practice'}`).join('\n') || 'None.'}`).join('\n\n') : 'No accepted findings. Review completeness and coverage remain unknown.');
  put('Unknown/blocked', bullets([
    ...manualReview.map(x => `Manual review: ${text(x.finding_id || x.id || x.title)} — ${text(x.reason || x.review_reason || x.observation)}.`),
    ...blocked.map(x => `Blocked: ${text(x.finding_id || x.id || x.stage || x.title)} — ${text(x.reason || x.message)}.`),
    ...accepted.flatMap(f => uniq(f.unknowns).map(u => `${f.finding_id}: ${safe(u)}.`)),
    ...(manualReview.length || blocked.length ? [] : ['No manual-review or blocked entries supplied; unknowns may be incomplete.'])
  ]));
  put('Evidence appendix', evidenceById.size ? markdownTable(['ID', 'URL', 'Collector/type', 'Artifact', 'Observed at', 'Accepted finding links'], [...evidenceById.values()].map(e => [e.evidence_id, e.url, `${safe(e.collector)} / ${safe(e.type)}`, e.artifact, e.observed_at, accepted.filter(f => evIds(f).includes(e.evidence_id)).map(f => f.finding_id).join(', ')])) : 'No evidence index was supplied.');
  return `${reportHeader('Audit Report', manifest)}${sections.join('\n\n')}\n`;
}

const planTitles = ['Objectives','Target state','Guiding principles','Target user journeys','Information architecture','Design system','Homepage','PDP','Landing pages','News/Knowledge Hub','Brand/trust','Content','Health-content governance','Company/Product data governance','SEO','GEO/AEO','Structured data','Performance','Analytics','Cart/Checkout','KiotViet/Integration','External Technical Remediation Plan','Developer Investigation List','Migration/index considerations','QA','Regression','Backlog','Dependency graph','Acceptance criteria'];
const planTerms = new Map([
  ['Target user journeys', /journey|conversion|funnel|checkout/], ['Information architecture', /navigation|architecture|sitemap/], ['Design system', /design|ui|ux|visual|responsive/],
  ['Homepage', /home/], ['PDP', /pdp|product.detail|product_detail/], ['Landing pages', /landing/], ['News/Knowledge Hub', /article|news|blog|knowledge/],
  ['Brand/trust', /brand|trust|company/], ['Content', /content|copy|article/], ['Health-content governance', /health|medical|claim|eeat|e-e-a-t/],
  ['Company/Product data governance', /company|product.data|catalog/], ['SEO', /seo|crawl|index|canonical/], ['GEO/AEO', /geo|aeo|answer/],
  ['Structured data', /schema|structured/], ['Performance', /performance|speed|lcp|cls/], ['Analytics', /analytic|tracking|gtm|ga4|pixel/],
  ['Cart/Checkout', /cart|checkout|commerce/], ['KiotViet/Integration', /kiotviet|integration/], ['External Technical Remediation Plan', /technical|server|cdn|javascript|api/],
  ['Migration/index considerations', /migration|redirect|index|canonical/]
]);
function taskSummary(t) { return `- **${t.task_id}** (${t.priority}, ${t.effort}): ${safe(t.title)}. Findings: ${t.finding_ids.join(', ')}; requirements: ${t.source_requirement_ids.join(', ') || 'best practice'}; evidence: ${t.evidence_ids.join(', ') || 'unrecorded'}.`; }
function taskDetail(t) {
  return `### ${t.task_id} — ${safe(t.title)}\n\n**Objective:** ${text(t.objective)}\n\n**Current problem (observed):** ${text(t.current_problem)}\n\n**Target state:** ${text(t.target_state)}\n\n**Recommended changes:**\n${bullets(t.recommended_changes.map(safe))}\n\n**Affected URLs:** ${t.affected_urls.map(safe).join(', ') || 'Not established externally.'}\n\n**Implementation area:** ${t.implementation_area.map(safe).join(', ') || 'Unknown; developer investigation required.'}\n\n**Developer investigation:**\n${bullets(t.developer_investigation.map(safe))}\n\n**Traceability:** accepted findings ${t.finding_ids.join(', ')}; ${t.source} requirements ${t.source_requirement_ids.join(', ') || 'none'}; evidence ${t.evidence_ids.join(', ') || 'none'}.\n\n**Priority/effort:** ${t.priority} / ${t.effort}. Dependencies: ${t.dependencies.join(', ') || 'none recorded'}.\n\n**Acceptance criteria:**\n${bullets(t.acceptance_criteria.map(safe))}\n\n**Automated verification:**\n${bullets(t.automated_verification.map(safe))}\n\n**Manual verification:**\n${bullets(t.manual_verification.map(safe))}\n\n**Risks/unknowns:** ${t.risks.map(safe).join('; ') || 'None recorded.'}\n\n**Diagnostic semantics:** confirmed external facts: ${t.diagnostic.observed_external_facts.map(safe).join('; ') || 'none recorded'}; probable causes (unverified): ${t.diagnostic.probable_technical_causes.map(safe).join('; ') || 'none recorded'}.`;
}
function improvementReport(ctx) {
  const { backlog, journeys, manualReview, blocked, manifest } = ctx;
  const sections = [];
  const put = (title, body) => sections.push(`${heading(sections.length + 1, title)}${body || 'Unknown / not established.'}`);
  put('Objectives', backlog.length ? bullets(backlog.map(t => `${t.task_id}: ${safe(t.objective)} (from ${t.finding_ids.join(', ')}).`)) : 'No accepted finding generated an objective.');
  put('Target state', backlog.length ? bullets(backlog.map(t => `${t.task_id}: ${safe(t.target_state)}.`)) : 'Target state is unknown without accepted findings.');
  put('Guiding principles', bullets(['Implement only evidence-linked changes in this backlog; investigate unverified technical causes before selecting an internal fix.', 'Keep checklist requirements separate from best-practice proposals.', 'Re-run external verification and manual review against each task’s acceptance criteria.', 'Preserve public URL and index signals when a change touches search visibility.']));
  for (const title of planTitles.slice(3, 23)) {
    if (title === 'Developer Investigation List') continue;
    const matcher = planTerms.get(title);
    const tasks = matcher ? backlog.filter(t => matcher.test(`${t.title} ${t.implementation_area.join(' ')} ${t.finding_ids.join(' ')}`.toLowerCase())) : [];
    let body = tasks.length ? tasks.map(taskSummary).join('\n') : 'No accepted task is mapped here. Target design or implementation detail remains unestablished.';
    if (title === 'Target user journeys') body += `\n\nRecorded journeys: ${journeys.length ? journeys.map(j => `${text(j.persona)} (${text(j.completion_status)})`).join(', ') : 'none; journey-specific target behavior remains to be defined from evidence.'}`;
    if (title === 'External Technical Remediation Plan') body += '\n\nProbable technical causes are hypotheses. Developers must verify them before implementation.';
    put(title, body);
  }
  put('Developer Investigation List', backlog.some(t => t.developer_investigation.length) ? bullets(backlog.flatMap(t => t.developer_investigation.map(v => `${t.task_id}: ${safe(v)}`))) : 'No developer investigation was specified by accepted finding metadata or diagnostics. Internal implementation remains unknown.');
  put('Migration/index considerations', backlog.filter(t => /migration|redirect|index|canonical|seo/i.test(`${t.title} ${t.implementation_area.join(' ')}`)).map(taskSummary).join('\n') || 'No accepted task establishes migration or index changes. Verify redirect/canonical/index signals if implementation later affects URLs.');
  put('QA', backlog.length ? bullets(backlog.map(t => `${t.task_id}: ${t.acceptance_criteria.map(safe).join('; ')}`)) : 'No accepted task exists for QA planning.');
  put('Regression', backlog.length ? bullets(backlog.map(t => `${t.task_id}: compare a subsequent read-only run on ${t.affected_urls.map(safe).join(', ') || 'affected pages'} with evidence ${t.evidence_ids.join(', ') || 'not recorded'}.`)) : 'No accepted finding baseline exists for regression comparison.');
  put('Backlog', backlog.length ? backlog.map(taskDetail).join('\n\n') : 'No implementation tasks; accepted findings were not supplied.');
  put('Dependency graph', backlog.length ? bullets(backlog.map(t => `${t.task_id}: ${t.dependencies.join(', ') || 'no recorded predecessors'}`)) : 'No dependency graph because the backlog is empty.');
  put('Acceptance criteria', backlog.length ? bullets(backlog.flatMap(t => t.acceptance_criteria.map(v => `${t.task_id}: ${safe(v)}`))) : 'No task acceptance criteria are available.');
  return `${reportHeader('Improvement Plan', manifest)}This plan reflects accepted findings only. Manual review: ${manualReview.length}; blocked: ${blocked.length}. No source file or module scope is asserted.\n\n${sections.join('\n\n')}\n`;
}
function executiveReport(ctx) {
  const { backlog, manualReview, blocked, accepted, manifest } = ctx;
  const workstreams = new Map();
  for (const task of backlog) for (const area of task.implementation_area.length ? task.implementation_area : ['Area to investigate']) {
    workstreams.set(area, [...(workstreams.get(area) || []), task.task_id]);
  }
  return `${reportHeader('Executive Plan', manifest)}## Workstreams\n\n${workstreams.size ? bullets([...workstreams].map(([area, ids]) => `${safe(area)}: ${ids.join(', ')}.`)) : 'No workstreams established from accepted findings.'}\n\n## P0/P1 priorities\n\n${backlog.filter(t => ['P0','P1'].includes(t.priority)).map(taskSummary).join('\n') || 'No accepted P0/P1 task.'}\n\n## Dependency summary\n\n${backlog.some(t => t.dependencies.length) ? bullets(backlog.filter(t => t.dependencies.length).map(t => `${t.task_id} depends on ${t.dependencies.join(', ')}.`)) : 'No dependencies were recorded.'}\n\n## Task counts\n\n${backlog.length} tasks from ${accepted.length} accepted findings: ${['P0','P1','P2','P3'].map(p => `${p} ${backlog.filter(t => t.priority === p).length}`).join(', ')}.\n\n## Blocked/manual review\n\n${manualReview.length} manual-review items; ${blocked.length} blocked items. These did not create tasks.\n\n## Target outcomes\n\n${backlog.length ? bullets(backlog.map(t => `${t.task_id}: ${safe(t.target_state)}; verify with ${t.acceptance_criteria.length} acceptance criterion/criteria.`)) : 'No evidence-backed target outcomes established.'}\n`;
}

export async function generateReports({ runDir, manifest = {}, pages = [], evidence = [], requirements = [], checks = [], journeys = [], accepted = [], manualReview = [], blocked = [], diagnostics = [], backlog } = {}) {
  if (!runDir) throw new TypeError('runDir is required');
  const approved = list(accepted).filter(f => f?.finding_id && ![f.status, f.review_status, f.review?.status].some(value => ['rejected', 'needs_manual_review', 'manual_review', 'blocked'].includes(value)) && (!f.review_status || f.review_status === 'accepted'));
  const tasks = backlog === undefined ? planFindings(approved, list(diagnostics)) : list(backlog);
  const approvedIds = new Set(approved.map(f => f.finding_id));
  for (const task of tasks) {
    if (!task?.finding_ids?.length || task.finding_ids.some(id => !approvedIds.has(id))) throw new Error(`Backlog task ${task?.task_id || '(unknown)'} references a finding that is not accepted`);
  }
  const ctx = { manifest, pages: list(pages), evidence, requirements: requirementRows(requirements), checks: coverageRows(checks), journeys: list(journeys), accepted: approved, manualReview: list(manualReview), blocked: list(blocked), diagnostics: list(diagnostics), backlog: tasks };
  const reportsDir = path.join(runDir, 'reports');
  const backlogDir = path.join(runDir, 'backlog');
  await Promise.all([mkdir(reportsDir, { recursive: true }), mkdir(backlogDir, { recursive: true })]);
  const dependencies = { tasks: ctx.backlog.map(t => ({ task_id: t.task_id, depends_on: t.dependencies })), edges: ctx.backlog.flatMap(t => t.dependencies.map(dep => ({ from: dep, to: t.task_id }))) };
  const files = {
    AUDIT_REPORT: path.join(reportsDir, 'AUDIT_REPORT.md'),
    IMPROVEMENT_PLAN: path.join(reportsDir, 'IMPROVEMENT_PLAN.md'),
    EXECUTIVE_PLAN: path.join(reportsDir, 'EXECUTIVE_PLAN.md'),
    IMPLEMENTATION_BACKLOG: path.join(backlogDir, 'IMPLEMENTATION_BACKLOG.json'),
    DEPENDENCIES: path.join(backlogDir, 'DEPENDENCIES.json')
  };
  await Promise.all([
    writeFile(files.AUDIT_REPORT, auditReport(ctx), 'utf8'),
    writeFile(files.IMPROVEMENT_PLAN, improvementReport(ctx), 'utf8'),
    writeFile(files.EXECUTIVE_PLAN, executiveReport(ctx), 'utf8'),
    writeFile(files.IMPLEMENTATION_BACKLOG, `${serialize(ctx.backlog)}\n`, 'utf8'),
    writeFile(files.DEPENDENCIES, `${serialize(dependencies)}\n`, 'utf8')
  ]);
  return { files, backlog: ctx.backlog, dependencies };
}
