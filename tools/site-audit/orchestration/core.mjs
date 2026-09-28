import Ajv from 'ajv';
import { readFileSync } from 'node:fs';
import { mkdir, readFile, realpath, rename, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';

const schemaDir = fileURLToPath(new URL('../schemas/', import.meta.url));
const schemaNames = ['evidence', 'finding', 'journey', 'page', 'backlog', 'manifest', 'technical-diagnostic'];
const ajv = new Ajv({ allErrors: true, strict: false });
ajv.addFormat('uri', value => { try { return Boolean(new URL(value)); } catch { return false; } });
ajv.addFormat('date-time', value => typeof value === 'string' && !Number.isNaN(Date.parse(value)) && /T.*(?:Z|[+-]\d\d:\d\d)$/.test(value));
const validators = new Map(schemaNames.map(name => [name, ajv.compile(JSON.parse(readFileSync(path.join(schemaDir, `${name}.schema.json`), 'utf8')))]));
const stageLocks = new Map();

export function validateSchema(name, data) {
  const validator = validators.get(name);
  if (!validator) throw new Error(`Unknown schema: ${name}`);
  const valid = Boolean(validator(data));
  return { valid, errors: valid ? [] : validator.errors.map(error => `${error.instancePath || '/'} ${error.message}`) };
}

const unique = values => [...new Set(values.filter(value => value !== undefined && value !== null))];
const asArray = value => Array.isArray(value) ? value : [];
const textKey = value => String(value ?? '').normalize('NFKC').trim().toLowerCase().replace(/\s+/g, ' ');
const isWithin = (root, target) => target !== root && target.startsWith(root + path.sep);

async function artifactError(evidence, runDir) {
  if (typeof evidence?.artifact !== 'string' || !evidence.artifact) return null;
  const artifact = evidence.artifact;
  if (path.isAbsolute(artifact) || /^[A-Za-z]:/.test(artifact) || artifact.includes('\\')) return `artifact must be a relative run path: ${artifact}`;
  const root = await realpath(runDir).catch(() => null);
  if (!root) return `run directory does not exist: ${runDir}`;
  const resolved = path.resolve(root, artifact);
  if (!isWithin(root, resolved)) return `artifact escapes run directory: ${artifact}`;
  const actual = await realpath(resolved).catch(() => null);
  if (!actual) return `artifact does not exist: ${artifact}`;
  if (!isWithin(root, actual)) return `artifact resolves outside run directory: ${artifact}`;
  const info = await stat(actual).catch(() => null);
  if (!info?.isFile()) return `artifact is not a regular file: ${artifact}`;
  return null;
}

export async function validateEvidence(evidence, runDir) {
  const errors = [];
  if (!Array.isArray(evidence)) return ['evidence must be an array'];
  const seen = new Set();
  for (const [index, item] of evidence.entries()) {
    const result = validateSchema('evidence', item);
    errors.push(...result.errors.map(error => `evidence[${index}] ${error}`));
    if (item?.evidence_id) {
      if (seen.has(item.evidence_id)) errors.push(`duplicate evidence_id: ${item.evidence_id}`);
      seen.add(item.evidence_id);
    }
    if (item?.artifact === null || item?.artifact === undefined || item?.artifact === '') {
      errors.push(`evidence[${index}] artifact required for type ${item.type}`);
    }
    const artifact = await artifactError(item, runDir);
    if (artifact) errors.push(`evidence[${index}] ${artifact}`);
  }
  return errors;
}

function reviewerDecision(finding) {
  const raw = finding?.review;
  const status = typeof raw === 'string' ? raw : raw?.status ?? raw?.decision ?? raw?.verdict;
  const supported = typeof raw === 'object' ? raw?.supported ?? raw?.supports_observation ?? raw?.evidence_supports_observation : undefined;
  const reason = typeof raw === 'object' ? raw?.reason : undefined;
  return { status, supported, reason, provenance: raw?.provenance, reviewer_role: raw?.reviewer_role, reviewer_id:raw?.reviewer_id, evidence_ids_reviewed:raw?.evidence_ids_reviewed, supported_facts:raw?.supported_facts, observation_reviewed:raw?.observation_reviewed, source_requirement_ids_reviewed:raw?.source_requirement_ids_reviewed, page_reviewed:raw?.page_reviewed };
}

function requirementIds(requirements) {
  return new Set(asArray(requirements).map(requirement => typeof requirement === 'string' ? requirement : requirement?.id).filter(Boolean));
}

function unobservableInternalClaim(value) {
  const claim=String(value||'');
  if (/\b(?:app\/code|vendor\/|database table|internal module|source file|server config|\.php\b)\b/i.test(claim)) return true;
  if (/kiot\s?viet/i.test(claim) && /\b(?:receives?|syncs?|synchroni[sz]es?|transfers?|every order|all orders|confirmed|proven)\b|đồng bộ|tự động chuyển|đơn hàng đã/i.test(claim) && !/unverified|unknown|not observed|chưa xác minh|không xác nhận/i.test(claim)) return true;
  if (/\b(?:backend|database)\b/i.test(claim) && /\b(?:confirmed|definitely|proven|works|stores|receives|writes)\b/i.test(claim)) return true;
  return false;
}

function findingDecision(finding, evidenceIds, reqIds, { requireIndependentReview = false } = {}) {
  const reasons = validateSchema('finding', finding).errors;
  const refs = asArray(finding?.evidence_ids);
  const reqs = asArray(finding?.source_requirement_ids);
  const verdict = reviewerDecision(finding);
  if (!refs.length) reasons.push('finding has no evidence');
  for (const id of refs) if (!evidenceIds.has(id)) reasons.push(`unknown or invalid evidence_id: ${id}`);
  if (finding?.source === 'checklist' && !reqs.length) reasons.push('checklist finding has no requirement reference');
  if (finding?.source === 'best_practice' && reqs.length) reasons.push('best_practice finding must not claim checklist requirements');
  for (const id of reqs) if (!reqIds.has(id)) reasons.push(`unknown requirement_id: ${id}`);
  if (reasons.length) return { status: 'rejected', reasons };
  if (unobservableInternalClaim(finding?.observation)) return {status:'manual_review',reasons:['Internal or order-integration outcome is not externally confirmed by this read-only audit']};
  if (requireIndependentReview && (verdict.provenance !== 'independent_evidence_review' || verdict.reviewer_role !== 'evidence_reviewer' || verdict.status !== 'accepted' || verdict.supported !== true)) {
    if (verdict.status === 'blocked') return { status: 'blocked', reasons: [verdict.reason || 'independent reviewer blocked finding'] };
    if (verdict.status === 'rejected' || verdict.supported === false) return { status: 'rejected', reasons: [verdict.reason || 'independent reviewer rejected support'] };
    return { status: 'manual_review', reasons: ['Independent evidence reviewer acceptance and explicit support are required'] };
  }
  if (requireIndependentReview && (!verdict.reviewer_id || !String(verdict.reason||'').trim() || !asArray(verdict.supported_facts).length || refs.some(id=>!asArray(verdict.evidence_ids_reviewed).includes(id)))) return {status:'manual_review',reasons:['Reviewer identity, reason, supporting facts and every examined evidence ID are required']};
  if (requireIndependentReview && (verdict.observation_reviewed!==finding.observation || verdict.page_reviewed!==finding.page || reqs.length!==asArray(verdict.source_requirement_ids_reviewed).length || reqs.some(id=>!asArray(verdict.source_requirement_ids_reviewed).includes(id)))) return {status:'manual_review',reasons:['Independent decision does not match the exact observed claim, page and requirement references']};
  if (['rejected', 'reject'].includes(verdict.status) || verdict.supported === false) return { status: 'rejected', reasons: [verdict.reason || 'reviewer found observation unsupported'] };
  if (verdict.status === 'blocked') return { status: 'blocked', reasons: [verdict.reason || 'reviewer blocked finding'] };
  if (['needs_manual_review', 'manual_review', 'manual'].includes(verdict.status)) return { status: 'manual_review', reasons: [verdict.reason || 'reviewer requested manual review'] };
  if (finding.confidence < 0.7) return { status: 'manual_review', reasons: ['confidence below 0.70'] };
  if (['heuristic', 'content_review'].includes(finding.finding_type) && verdict.status !== 'accepted') return { status: 'manual_review', reasons: ['interpretive claim requires explicit reviewer acceptance'] };
  if (verdict.status && verdict.status !== 'accepted') return { status: 'manual_review', reasons: [`unknown reviewer verdict: ${verdict.status}`] };
  return { status: 'accepted', reasons: [verdict.reason || (verdict.status === 'accepted' ? 'reviewer accepted supported evidence' : 'deterministic evidence and references validated')] };
}

async function writeJsonAtomic(file, data) {
  const temporary = `${file}.${randomUUID()}.tmp`;
  await writeFile(temporary, JSON.stringify(data, null, 2) + '\n', { flag: 'wx' });
  try { await rename(temporary, file); }
  catch (error) { throw error; }
}

export async function reviewFindings(candidates, evidence, requirements, runDir, independentDecisions = []) {
  if (!Array.isArray(candidates)) throw new TypeError('candidates must be an array');
  if (!Array.isArray(independentDecisions)) throw new TypeError('independentDecisions must be an array');
  const evidenceErrors = await validateEvidence(evidence, runDir);
  const invalidEvidenceIds = new Set();
  for (const error of evidenceErrors) {
    const match = /^evidence\[(\d+)\]/.exec(error);
    if (match && evidence[Number(match[1])]?.evidence_id) invalidEvidenceIds.add(evidence[Number(match[1])].evidence_id);
    const duplicate = /^duplicate evidence_id: (.+)$/.exec(error);
    if (duplicate) invalidEvidenceIds.add(duplicate[1]);
  }
  const evidenceIds = new Set(asArray(evidence).map(item => item?.evidence_id).filter(id => id && !invalidEvidenceIds.has(id)));
  const reqIds = requirementIds(requirements);
  const result = { accepted: [], rejected: [], manual_review: [], blocked: [] };
  const seen = new Set();
  const decisionMap = new Map(independentDecisions.map(d => [d.finding_id,d]));
  for (const candidate of candidates) {
    const external = decisionMap.get(candidate?.finding_id);
    // Candidate-supplied verdicts are untrusted. Only this separate reviewer input
    // can make an observation accepted.
    const reviewed = {...candidate};
    delete reviewed.review; delete reviewed.reviewer_verdict; delete reviewed.reviewer_decision; delete reviewed.review_status;
    if (external) reviewed.review = {status:external.status,supported:external.supported===true,reason:external.reason||'',provenance:'independent_evidence_review',reviewer_role:external.reviewer_role||null,reviewer_id:external.reviewer_id||null,reviewed_at:external.reviewed_at||new Date().toISOString(),evidence_ids_reviewed:external.evidence_ids_reviewed||[],supported_facts:external.supported_facts||[],observation_reviewed:external.observation_reviewed,page_reviewed:external.page_reviewed,source_requirement_ids_reviewed:external.source_requirement_ids_reviewed||[]};
    const decision = findingDecision(reviewed, evidenceIds, reqIds, {requireIndependentReview:true});
    if (candidate?.finding_id && seen.has(candidate.finding_id)) {
      decision.status = 'rejected';
      decision.reasons.push(`duplicate finding_id: ${candidate.finding_id}`);
    }
    if (candidate?.finding_id) seen.add(candidate.finding_id);
    result[decision.status].push({ ...reviewed, review_status: decision.status === 'manual_review' ? 'needs_manual_review' : decision.status, review_reasons: decision.reasons });
  }
  if (runDir) {
    const reviewDir = path.join(runDir, 'review');
    await mkdir(reviewDir, { recursive: true });
    await writeJsonAtomic(path.join(reviewDir, 'findings.accepted.json'), result.accepted);
    await writeJsonAtomic(path.join(reviewDir, 'findings.rejected.json'), result.rejected);
    await writeJsonAtomic(path.join(reviewDir, 'findings.manual-review.json'), result.manual_review);
    await writeJsonAtomic(path.join(reviewDir, 'findings.blocked.json'), result.blocked);
  }
  return result;
}

export function deduplicateFindings(findings) {
  const merged = new Map();
  for (const finding of asArray(findings)) {
    const key = finding.duplicate_key || [finding.area, finding.title, finding.observation].map(textKey).join('|');
    if (!merged.has(key)) {
      merged.set(key, { ...finding, evidence_ids: unique(asArray(finding.evidence_ids)), source_requirement_ids: unique(asArray(finding.source_requirement_ids)), affected_urls: unique([...asArray(finding.affected_urls), finding.page]), origins: unique([...asArray(finding.origins), finding.origin, finding.finding_id]) });
      continue;
    }
    const first = merged.get(key);
    first.evidence_ids = unique([...asArray(first.evidence_ids), ...asArray(finding.evidence_ids)]);
    first.source_requirement_ids = unique([...asArray(first.source_requirement_ids), ...asArray(finding.source_requirement_ids)]);
    first.affected_urls = unique([...asArray(first.affected_urls), ...asArray(finding.affected_urls), finding.page]);
    first.origins = unique([...asArray(first.origins), ...asArray(finding.origins), finding.origin, finding.finding_id]);
    if (first.source_requirement_ids.length) first.source = 'checklist';
    const order = { low: 1, medium: 2, high: 3, critical: 4 };
    if ((order[finding.severity] || 0) > (order[first.severity] || 0)) first.severity = finding.severity;
    first.confidence = Math.max(first.confidence ?? 0, finding.confidence ?? 0);
  }
  return [...merged.values()];
}

export function resolveContradictions(findings) {
  const list = asArray(findings).map(finding => ({ ...finding }));
  const contradictions = [];
  const pairs = new Set();
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      const a = list[i], b = list[j];
      const explicit = asArray(a.contradicts ?? a.contradicts_finding_ids).includes(b.finding_id) || asArray(b.contradicts ?? b.contradicts_finding_ids).includes(a.finding_id);
      const claim = a.claim_key && a.claim_key === b.claim_key && a.claim_value !== undefined && b.claim_value !== undefined && a.claim_value !== b.claim_value;
      if (!explicit && !claim) continue;
      const pair = [a.finding_id, b.finding_id].sort().join('|');
      if (pairs.has(pair)) continue;
      pairs.add(pair);
      const evidence_ids = unique([...asArray(a.evidence_ids), ...asArray(b.evidence_ids)]);
      contradictions.push({ finding_ids: [a.finding_id, b.finding_id], evidence_ids, status: 'needs_manual_review', reason: 'Conflicting claims require raw-evidence review' });
      for (const finding of [a, b]) {
        finding.review_status = 'needs_manual_review';
        finding.review_reasons = unique([...asArray(finding.review_reasons), `Contradicts ${finding === a ? b.finding_id : a.finding_id}`]);
      }
    }
  }
  return { findings: list, contradictions };
}

export function validateBacklog(tasks, accepted) {
  const errors = [];
  if (!Array.isArray(tasks)) return ['backlog must be an array'];
  const acceptedIds = new Set(asArray(accepted).map(item => item?.finding_id));
  const ids = new Set();
  for (const [index, task] of tasks.entries()) {
    errors.push(...validateSchema('backlog', task).errors.map(error => `backlog[${index}] ${error}`));
    if (ids.has(task?.task_id)) errors.push(`duplicate task_id: ${task.task_id}`);
    ids.add(task?.task_id);
    if ('likely_code_scope' in (task || {})) errors.push(`backlog[${index}] claims unavailable source code scope`);
    for (const findingId of asArray(task?.finding_ids)) if (!acceptedIds.has(findingId)) errors.push(`backlog[${index}] finding is not accepted: ${findingId}`);
  }
  const byId = new Map(tasks.map(task => [task?.task_id, task]));
  for (const task of tasks) for (const dependency of asArray(task?.dependencies)) {
    if (!byId.has(dependency)) errors.push(`unknown dependency: ${task.task_id} -> ${dependency}`);
    if (dependency === task.task_id) errors.push(`self dependency: ${task.task_id}`);
  }
  const visiting = new Set(), visited = new Set();
  function walk(id) {
    if (visiting.has(id)) { errors.push(`dependency cycle at ${id}`); return; }
    if (visited.has(id) || !byId.has(id)) return;
    visiting.add(id);
    for (const dependency of asArray(byId.get(id)?.dependencies)) walk(dependency);
    visiting.delete(id);
    visited.add(id);
  }
  for (const id of byId.keys()) walk(id);
  return unique(errors);
}

const safetyKeys = {
  order: ['allow_real_order', 'AUDIT_ALLOW_REAL_ORDER'],
  payment: ['allow_payment', 'AUDIT_ALLOW_REAL_PAYMENT'],
  account: ['allow_account_creation', 'AUDIT_ALLOW_ACCOUNT_CREATION'],
  destructive: ['allow_destructive_actions', 'AUDIT_ALLOW_DESTRUCTIVE_ACTION']
};
const outcomeKeys = ['real_orders', 'real_payments', 'accounts_created', 'forms_submitted', 'website_changes'];
const forbiddenSourceKey = /^(?:likely_code_scope|source_scope|website_source_sha|website_git_sha|source_file|source_module|magento_module)$/i;

function validateSafety(manifest) {
  const errors = [];
  const flags = manifest?.safety_flags;
  for (const [kind, aliases] of Object.entries(safetyKeys)) {
    if (!aliases.some(key => flags?.[key] === false)) errors.push(`safety flag ${kind} must be explicitly false`);
    if (aliases.some(key => flags?.[key] === true)) errors.push(`safety flag ${kind} permits side effects`);
  }
  for (const [key, value] of Object.entries({ ...manifest, ...flags })) {
    if (/(?:allow|enable).*(?:order|payment|account|destruct|write|mutation)/i.test(key) && value === true) errors.push(`unsafe enabled flag: ${key}`);
  }
  for (const key of outcomeKeys) if (manifest?.safety_outcomes?.[key] !== 0) errors.push(`safety outcome ${key} must be zero`);
  if (manifest?.website_source_available !== undefined && manifest.website_source_available !== false) errors.push('website source availability is unsupported');
  for (const key of Object.keys(manifest || {})) if (forbiddenSourceKey.test(key)) errors.push(`unsupported source scope field: ${key}`);
  const routing = String(manifest?.routing_status ?? '').toLowerCase();
  if (/verified/.test(routing) && !/unverified/.test(routing)) errors.push('effective model routing is claimed verified without provenance');
  if (manifest?.effective_models !== null && manifest?.effective_models !== undefined) {
    const verification = manifest?.effective_model_verification;
    if (verification?.status !== 'verified' || !verification?.source || !verification?.artifact) errors.push('effective models claimed without verifiable provenance');
  }
  return errors;
}

function checkRows(checks) {
  if (Array.isArray(checks)) return checks;
  return asArray(checks?.checks ?? checks?.coverage ?? checks?.checklist ?? checks?.requirements);
}

function validateDiagnostics(diagnostics, acceptedIds, evidenceIds) {
  const errors = [];
  for (const [index, diagnostic] of asArray(diagnostics).entries()) {
    errors.push(...validateSchema('technical-diagnostic', diagnostic).errors.map(error => `diagnostics[${index}] ${error}`));
    if (!acceptedIds.has(diagnostic?.finding_id)) errors.push(`diagnostics[${index}] finding is not accepted: ${diagnostic?.finding_id}`);
    for (const id of asArray(diagnostic?.evidence_ids)) if (!evidenceIds.has(id)) errors.push(`diagnostics[${index}] unknown evidence_id: ${id}`);
    for (const key of Object.keys(diagnostic || {})) if (forbiddenSourceKey.test(key)) errors.push(`diagnostics[${index}] unsupported source scope field: ${key}`);
    for (const fact of asArray(diagnostic?.confirmed_external_facts)) {
      if (unobservableInternalClaim(fact)) errors.push(`diagnostics[${index}] unsupported internal-source assertion in confirmed fact`);
    }
    const causes = asArray(diagnostic?.probable_technical_causes);
    if (causes.length && !asArray(diagnostic?.developer_investigation).length) errors.push(`diagnostics[${index}] probable causes require developer investigation`);
    for (const cause of causes) if (/\b(?:confirmed|proven|definitely|certainly)\b/i.test(cause)) errors.push(`diagnostics[${index}] probable cause is stated as confirmed`);
  }
  return errors;
}

async function validateFinalArtifacts(runDir) {
  const errors = [];
  if (!runDir) return ['final validation requires runDir'];
  const root = await realpath(runDir).catch(() => null);
  if (!root) return [`final validation run directory does not exist: ${runDir}`];
  for (const relative of [
    'reports/AUDIT_REPORT.md', 'reports/IMPROVEMENT_PLAN.md', 'reports/EXECUTIVE_PLAN.md',
    'backlog/IMPLEMENTATION_BACKLOG.json', 'backlog/DEPENDENCIES.json'
  ]) {
    const file = path.join(runDir, relative);
    const info = await stat(file).catch(() => null);
    if (!info?.isFile() || info.size === 0) errors.push(`missing or empty final artifact: ${relative}`);
    else if (!isWithin(root, await realpath(file))) errors.push(`final artifact escapes run directory: ${relative}`);
    else if (relative.endsWith('.json')) {
      try { JSON.parse(await readFile(file, 'utf8')); }
      catch { errors.push(`invalid final artifact JSON: ${relative}`); }
    }
  }
  return errors;
}

export async function validateConsistency({ runDir, pages, evidence, requirements, accepted, backlog, manifest, checks, diagnostics, finalValidation = false } = {}) {
  const errors = await validateEvidence(evidence, runDir);
  errors.push(...validateSchema('manifest', manifest).errors.map(error => `manifest ${error}`));
  errors.push(...validateSafety(manifest));
  const ids = new Set(asArray(evidence).map(item => item?.evidence_id));
  const reqIds = requirementIds(requirements);
  const requirementsById = new Map(asArray(requirements).map(r => [r?.id,r]));
  if (!Array.isArray(requirements)) errors.push('requirements must be an array');
  if (reqIds.size !== asArray(requirements).length) errors.push('requirement IDs must be present and unique');
  const findings = new Set();
  for (const [index, finding] of asArray(accepted).entries()) {
    const decision = findingDecision(finding, ids, reqIds, {requireIndependentReview:true});
    if (decision.status !== 'accepted') errors.push(`accepted[${index}] ${decision.reasons.join('; ')}`);
    if (findings.has(finding?.finding_id)) errors.push(`duplicate accepted finding_id: ${finding.finding_id}`);
    for (const key of Object.keys(finding || {})) if (forbiddenSourceKey.test(key)) errors.push(`accepted[${index}] unsupported source scope field: ${key}`);
    findings.add(finding?.finding_id);
  }
  errors.push(...validateBacklog(backlog, accepted));
  for (const [index, task] of asArray(backlog).entries()) for (const key of Object.keys(task || {})) if (forbiddenSourceKey.test(key)) errors.push(`backlog[${index}] unsupported source scope field: ${key}`);
  const covered = new Set(asArray(backlog).flatMap(task => asArray(task?.finding_ids)));
  for (const id of findings) if (!covered.has(id)) errors.push(`accepted finding has no backlog task: ${id}`);
  const rows = checkRows(checks);
  const checked = new Map();
  for (const [index, check] of rows.entries()) {
    const req = check?.requirement_id ?? check?.id;
    if (!req || !reqIds.has(req)) errors.push(`checks[${index}] unknown requirement_id: ${req}`);
    if (req) checked.set(req, (checked.get(req) ?? 0) + 1);
    for (const id of asArray(check?.evidence_ids)) if (!ids.has(id)) errors.push(`checks[${index}] unknown evidence_id: ${id}`);
    const status = String(check?.status ?? '').toLowerCase();
    if (!status) errors.push(`checks[${index}] missing status`);
    const subchecks = asArray(check?.subchecks ?? check?.checks);
    const originalClauses = asArray(requirementsById.get(req)?.clauses);
    if (originalClauses.length) {
      const seenClauses = new Set();
      for (const sub of subchecks) {
        if (!originalClauses.some(c => c.id === sub?.clause_id)) errors.push(`checks[${index}] unknown clause_id: ${sub?.clause_id}`);
        if (seenClauses.has(sub?.clause_id)) errors.push(`checks[${index}] duplicate clause_id: ${sub?.clause_id}`);
        seenClauses.add(sub?.clause_id);
        if (!String(sub?.status||'').trim()) errors.push(`checks[${index}] clause status missing: ${sub?.clause_id}`);
      }
      for (const clause of originalClauses) if (!seenClauses.has(clause.id)) errors.push(`checks[${index}] missing original clause: ${clause.id}`);
    }
    const blockedSubcheck = subchecks.some(subcheck => /^(?:blocked|manual|manual_review|needs_manual_review|unknown|unverified)$/i.test(String(subcheck?.status ?? subcheck)) || subcheck?.blocked === true || subcheck?.manual_review === true);
    if (status === 'pass' || status === 'passed') {
      if (blockedSubcheck || subchecks.some(sub => !/^(?:pass|passed)$/i.test(String(sub?.status??''))) || check?.blocked === true || check?.manual_review === true || /^(?:blocked|manual|manual_review|needs_manual_review)$/i.test(String(check?.review_status ?? ''))) errors.push(`checks[${index}] PASS contains blocked or manual subcheck`);
      if (!asArray(check?.evidence_ids).length) errors.push(`checks[${index}] PASS has no evidence`);
    }
  }
  for (const req of reqIds) if (!checked.has(req)) errors.push(`requirement has no check: ${req}`);
  for (const [req, count] of checked) if (count !== 1) errors.push(`requirement must have exactly one check: ${req} (${count})`);
  errors.push(...validateDiagnostics(diagnostics, findings, ids));
  if (manifest?.effective_models !== null && manifest?.effective_models !== undefined && manifest?.effective_model_verification?.artifact) {
    const provenanceError = await artifactError({ artifact: manifest.effective_model_verification.artifact }, runDir);
    if (provenanceError) errors.push(`effective model provenance ${provenanceError}`);
  }
  if (manifest?.RUN_ID && runDir && path.basename(path.resolve(runDir)) !== manifest.RUN_ID) errors.push('manifest RUN_ID does not match run directory');
  if (finalValidation) {
    if (!Array.isArray(pages) || pages.length === 0) errors.push('final validation requires nonempty audited pages');
    if (!Array.isArray(evidence) || evidence.length === 0) errors.push('final validation requires nonempty evidence');
    for (const stage of ['discovery','deterministic_collection','personas','specialists','external_diagnostic','evidence_review','contradiction_review','deduplication','reports','master_planner']) if (manifest?.stage_status?.[stage]?.status !== 'complete') errors.push(`required stage incomplete: ${stage}`);
    const decisionFile = path.join(runDir||'', 'review/evidence-decisions.json');
    const decisions = await readFile(decisionFile,'utf8').then(JSON.parse).catch(()=>null);
    if (!Array.isArray(decisions)) errors.push('independent evidence decisions artifact missing');
    else for (const finding of asArray(accepted)) {
      const d=decisions.find(x=>x.finding_id===finding.finding_id);
      if (d?.status!=='accepted'||d?.supported!==true||d?.reviewer_role!=='evidence_reviewer'||!d?.reviewer_id||!String(d?.reason||'').trim()||!asArray(d?.supported_facts).length||d?.observation_reviewed!==finding.observation||d?.page_reviewed!==finding.page||asArray(finding.source_requirement_ids).length!==asArray(d?.source_requirement_ids_reviewed).length||asArray(finding.source_requirement_ids).some(id=>!asArray(d?.source_requirement_ids_reviewed).includes(id))||asArray(finding.evidence_ids).some(id=>!asArray(d?.evidence_ids_reviewed).includes(id))) errors.push(`accepted finding lacks independent saved decision: ${finding.finding_id}`);
    }
  }
  if (finalValidation || checks?.final_validation === true || /^(complete|completed)$/i.test(String(manifest?.stage_status?.reports?.status ?? ''))) errors.push(...await validateFinalArtifacts(runDir));
  return { valid: errors.length === 0, errors: unique(errors) };
}

const severityValue = { low: 1, medium: 2, high: 3, critical: 4 };
const regressionKey = finding => finding.regression_key || finding.finding_id || [finding.area, finding.title, finding.page].map(textKey).join('|');
export function compareRuns(beforeFindings, afterFindings) {
  const before = new Map(asArray(beforeFindings).map(finding => [regressionKey(finding), finding]));
  const after = new Map(asArray(afterFindings).map(finding => [regressionKey(finding), finding]));
  const results = [];
  for (const [key, oldFinding] of before) {
    const newFinding = after.get(key);
    let status = 'fixed';
    if (newFinding) {
      const prior = severityValue[oldFinding.severity] ?? 0;
      const current = severityValue[newFinding.severity] ?? 0;
      status = current < prior ? 'improved' : current > prior ? 'regressed' : 'unchanged';
    }
    const coverage = afterFindings?.coverage?.[key] ?? afterFindings?.coverage?.[oldFinding.finding_id];
    const provisional = status === 'fixed' && !(coverage?.recrawled === true && asArray(coverage.evidence_ids).length > 0);
    results.push({ key, finding_id: newFinding?.finding_id ?? oldFinding.finding_id, status, provisional, interpretation: provisional ? 'Issue absent from after findings; fix is unverified until the same scope is recrawled with evidence.' : null, before: oldFinding, after: newFinding ?? null });
  }
  for (const [key, finding] of after) if (!before.has(key)) results.push({ key, finding_id: finding.finding_id, status: 'new', before: null, after: finding });
  return results;
}

export function assertSafeRequest(url, method = 'GET', config = {}) {
  for (const [key, value] of Object.entries({ ...config, ...config?.safety_flags })) {
    if (/(?:allow|enable).*(?:order|payment|account|destruct|write|mutation)/i.test(key) && value === true) throw new Error(`Unsafe request config: ${key}`);
  }
  if (!['GET', 'HEAD'].includes(String(method).toUpperCase())) throw new Error(`Unsafe request method: ${method}`);
  let parsed;
  try { parsed = new URL(url); } catch { throw new Error(`Invalid request URL: ${url}`); }
  if (!['http:', 'https:'].includes(parsed.protocol) || parsed.username || parsed.password) throw new Error(`Unsafe request URL: ${url}`);
  let subject = `${parsed.pathname}${parsed.search}`;
  for (let i = 0; i < 3; i++) { try { subject = decodeURIComponent(subject); } catch { break; } }
  subject = subject.toLowerCase();
  const dangerousPath = /(?:^|\/)(?:admin|logout|register|signup|sign-up|subscribe|delete|remove|destroy|update|save|submit|commit|place[-_]?order|create[-_]?order|capture|refund|cancel|add(?:[-_]?to)?[-_]?cart|cart\/add|checkout\/process|payment\/process)(?:\/|\?|$)/;
  const dangerousQuery = /(?:[?&])(?:action|command|do|operation|add[-_]?to[-_]?cart|remove|delete|submit|checkout|purchase|order|payment)=([^&#]*)/g;
  if (dangerousPath.test(subject)) throw new Error(`Unsafe request endpoint: ${url}`);
  for (const match of subject.matchAll(dangerousQuery)) {
    if (!['action', 'command', 'do', 'operation'].includes(match[0].slice(1).split('=')[0]) || /add|remove|delete|save|submit|checkout|buy|purchase|order|pay|create|update|cancel|login|logout|register|subscribe/.test(match[1])) throw new Error(`Unsafe request action: ${url}`);
  }
  // Inspect path segments directly. A nested repeated regex here can take
  // exponential time on ordinary, non-mutating account URLs.
  const segments = subject.split('?', 1)[0].split('/').filter(Boolean);
  const transactionalRoot = /^(?:cart|checkout|account|orders?|payments?)$/;
  const transactionalAction = /^(?:add|submit|place|create|update|delete|remove|cancel|pay|confirm|complete|process|finalize|fulfill|execute|activate|authorize|capture)$/;
  let inTransactionalPath = false;
  if (segments.some(segment => {
    if (segment === 'checkout') return true; // Fail closed for all checkout routes.
    if (inTransactionalPath && transactionalAction.test(segment)) return true;
    if (transactionalRoot.test(segment)) inTransactionalPath = true;
    return false;
  })) {
    throw new Error(`Unsafe transactional endpoint: ${url}`);
  }
  return parsed.toString();
}

function safeRunId(runId) {
  if (typeof runId !== 'string' || !/^[A-Za-z0-9][A-Za-z0-9_-]{0,127}$/.test(runId)) throw new Error('Invalid RUN_ID');
  return runId;
}

function assertSafetyFlags(manifest) {
  const flags = { ...manifest?.safety_flags, allow_real_order: false, allow_payment: false, allow_account_creation: false, allow_destructive_actions: false };
  const dangerous = /(?:allow|enable).*(?:order|payment|account|destruct|write|mutation)/i;
  for (const [key, value] of Object.entries({ ...manifest, ...manifest?.safety_flags })) if (dangerous.test(key) && value === true) throw new Error(`Unsafe run flag: ${key}`);
  return flags;
}

export async function createRun(root, runId, manifest) {
  safeRunId(runId);
  if (!manifest || typeof manifest !== 'object') throw new TypeError('manifest must be an object');
  const normalized = { ...manifest, RUN_ID: runId, timestamp: manifest.timestamp ?? new Date().toISOString(), stage_status: manifest.stage_status ?? {}, safety_flags: assertSafetyFlags(manifest) };
  const result = validateSchema('manifest', normalized);
  if (!result.valid) throw new Error(`Invalid manifest: ${result.errors.join('; ')}`);
  await mkdir(root, { recursive: true });
  const runDir = path.join(root, runId);
  await mkdir(runDir);
  await writeJsonAtomic(path.join(runDir, 'manifest.json'), normalized);
  return runDir;
}

export async function resumeRun(root, runId) {
  safeRunId(runId);
  const runDir = path.join(root, runId);
  const manifest = JSON.parse(await readFile(path.join(runDir, 'manifest.json'), 'utf8'));
  if (manifest.RUN_ID !== runId) throw new Error('Manifest RUN_ID mismatch');
  const result = validateSchema('manifest', manifest);
  if (!result.valid) throw new Error(`Invalid manifest: ${result.errors.join('; ')}`);
  assertSafetyFlags(manifest);
  return { runDir, manifest };
}

export async function saveStage(runDir, stage, status, extra = {}) {
  if (typeof stage !== 'string' || !/^[A-Za-z][A-Za-z0-9_-]*$/.test(stage)) throw new Error('Invalid stage');
  if (typeof status !== 'string' || !status) throw new Error('Invalid stage status');
  if (!extra || typeof extra !== 'object' || Array.isArray(extra)) throw new Error('Invalid stage metadata');
  const operation = async () => {
    const file = path.join(runDir, 'manifest.json');
    const manifest = JSON.parse(await readFile(file, 'utf8'));
    if (path.basename(path.resolve(runDir)) !== manifest.RUN_ID) throw new Error('Manifest RUN_ID mismatch');
    assertSafetyFlags(manifest);
    manifest.stage_status = { ...manifest.stage_status, [stage]: { ...extra, status, updated_at: new Date().toISOString() } };
    await writeJsonAtomic(file, manifest);
    return manifest;
  };
  const previous = stageLocks.get(runDir) ?? Promise.resolve();
  const current = previous.catch(() => {}).then(operation);
  stageLocks.set(runDir, current);
  try { return await current; }
  finally { if (stageLocks.get(runDir) === current) stageLocks.delete(runDir); }
}
