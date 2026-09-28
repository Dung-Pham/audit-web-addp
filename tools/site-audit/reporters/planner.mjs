const asList = value => Array.isArray(value) ? value.filter(v => v !== null && v !== undefined && v !== '') : value === null || value === undefined || value === '' ? [] : [value];
const strings = value => [...new Set(asList(value).map(v => String(v).trim()).filter(Boolean))];
const clean = value => typeof value === 'string' ? value.trim() : '';
const choice = (value, allowed, fallback) => allowed.includes(value) ? value : fallback;
const isAccepted = finding => {
  const decisions = [finding?.status, finding?.review_status, finding?.review?.status].filter(Boolean);
  return !decisions.some(value => ['rejected', 'needs_manual_review', 'manual_review', 'blocked'].includes(value)) && (!finding?.review_status || finding.review_status === 'accepted');
};

/** Create implementation tasks solely from findings that have already passed review. */
export function planFindings(accepted, diagnostics = []) {
  if (!Array.isArray(accepted) || !Array.isArray(diagnostics)) throw new TypeError('accepted and diagnostics must be arrays');
  const seen = new Set();
  const findings = accepted.filter(finding => {
    if (!finding || !isAccepted(finding) || !clean(finding.finding_id) || seen.has(finding.finding_id)) return false;
    seen.add(finding.finding_id);
    return true;
  });
  const idToTask = new Map(findings.map((finding, index) => [finding.finding_id, `TASK-${String(index + 1).padStart(3, '0')}`]));
  const diagByFinding = new Map(diagnostics.filter(d => d && idToTask.has(d.finding_id)).map(d => [d.finding_id, d]));

  return findings.map(finding => {
    const d = diagByFinding.get(finding.finding_id) || {};
    const diagnosticPlanning = d.planning && typeof d.planning === 'object' && !Array.isArray(d.planning) ? d.planning : {};
    const findingPlanning = finding.planning && typeof finding.planning === 'object' && !Array.isArray(finding.planning) ? finding.planning : {};
    const p = { ...diagnosticPlanning, ...findingPlanning };
    const observation = clean(finding.observation) || clean(d.observed_problem) || clean(finding.title);
    const direction = clean(finding.suggested_direction);
    const url = clean(finding.page);
    const scope = strings(p.affected_urls ?? [url, ...asList(finding.affected_urls)]).filter(v => /^https?:\/\//i.test(v));
    const investigation = strings(p.developer_investigation ?? d.developer_investigation);
    const changes = strings(p.recommended_changes ?? (direction ? [direction] : []));
    const acceptance = strings(p.acceptance_criteria);
    const automatic = strings(p.automated_verification);
    const manual = strings(p.manual_verification);
    const dependencyRefs = strings(p.dependencies);
    const dependencies = dependencyRefs.map(ref => idToTask.get(ref) || ref).filter(ref => ref !== idToTask.get(finding.finding_id));
    for (const ref of dependencies) {
      if (![...idToTask.values()].includes(ref)) throw new Error(`Unknown dependency ${ref} for ${finding.finding_id}`);
    }
    const task = {
      task_id: idToTask.get(finding.finding_id),
      finding_ids: [finding.finding_id],
      title: clean(p.title) || `Address: ${clean(finding.title) || finding.finding_id}`,
      objective: clean(p.objective) || `Address accepted finding ${finding.finding_id}: ${clean(finding.title) || observation}`,
      current_problem: clean(p.current_problem) || observation,
      target_state: clean(p.target_state) || (direction ? `The observed problem is addressed through: ${direction}` : `The observed problem in ${finding.finding_id} is resolved on the affected public pages.`),
      recommended_changes: changes,
      affected_urls: scope,
      implementation_area: strings(p.implementation_area ?? d.implementation_area),
      developer_investigation: investigation,
      dependencies: [...new Set(dependencies)],
      priority: choice(p.priority, ['P0', 'P1', 'P2', 'P3'], ({ critical: 'P0', high: 'P1', medium: 'P2', low: 'P3' })[finding.severity] || 'P2'),
      effort: choice(p.effort, ['S', 'M', 'L', 'XL'], 'M'),
      acceptance_criteria: acceptance.length ? acceptance : [`The observable problem described by ${finding.finding_id} is absent on the affected URL(s) under the recorded audit conditions.`, `Evidence for ${finding.finding_id} is re-collected and reviewed against its linked requirement(s).`],
      automated_verification: automatic.length ? automatic : [`Repeat the applicable external collector check for ${finding.finding_id} and compare with evidence ${strings(finding.evidence_ids).join(', ') || '(unavailable)'}.`],
      manual_verification: manual.length ? manual : [`Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for ${finding.finding_id}.`],
      risks: strings([...(p.risks === undefined ? asList(finding.unknowns) : asList(p.risks)), ...(!p.effort ? ['Effort is provisional until developer investigation.'] : []), ...(!p.priority ? ['Priority is inferred from finding severity; confirm business sequencing.'] : [])]),
      status: 'planned',
      source_requirement_ids: strings(finding.source_requirement_ids),
      evidence_ids: strings(finding.evidence_ids),
      source: finding.source === 'checklist' ? 'checklist' : 'best_practice',
      diagnostic: {
        observed_external_facts: strings(d.confirmed_external_facts),
        probable_technical_causes: strings(d.probable_technical_causes),
        developer_investigation: investigation
      }
    };
    return task;
  }).map((task, _, tasks) => {
    const byId = new Map(tasks.map(t => [t.task_id, t]));
    const visited = new Set();
    const active = new Set();
    const visit = id => {
      if (active.has(id)) throw new Error(`Cyclic dependency involving ${id}`);
      if (visited.has(id)) return;
      active.add(id);
      for (const dependency of byId.get(id).dependencies) visit(dependency);
      active.delete(id);
      visited.add(id);
    };
    visit(task.task_id);
    return task;
  });
}
