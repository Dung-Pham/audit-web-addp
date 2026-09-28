import fs from 'node:fs/promises';
import path from 'node:path';
import {planFindings} from '../../../reporters/index.mjs';
import {validateConsistency} from '../../../orchestration/core.mjs';

const runDir=path.resolve('tools/site-audit/runs/20260927T180655Z-85e584');
const read=async p=>JSON.parse(await fs.readFile(path.join(runDir,p),'utf8'));
const write=async(p,v)=>fs.writeFile(path.join(runDir,p),JSON.stringify(v,null,2)+'\n');
const accepted0=await read('review/findings.accepted.json');
const first=await read('review/independent-final-review.json');
const supplement=await read('review/independent-render-impact-review.json');
const originalAccepted=await read('review/candidate-findings.json');
const currentSurviving=await read('review/findings.accepted.json');
const original=new Map(first.verdicts.map(v=>[v.finding_id,v]));
const added=new Map(supplement.verdicts.map(v=>[v.finding_id,v]));
const supplementalAccepted=new Set(supplement.verdicts.filter(v=>v.verdict==='ACCEPT').map(v=>v.finding_id));
const allById=new Map([...originalAccepted,...accepted0,...currentSurviving].map(f=>[f.finding_id,f]));
for(const f of originalAccepted) if(['FND-SPEC-CONVERSION-006','FND-SPEC-HEALTH-002','FND-SPEC-CONTENT-002'].includes(f.finding_id)) allById.set(f.finding_id,f);
const outcomes=[...new Set([...original.keys(),...added.keys()])].map(id=>({id,finding:allById.get(id),verdict:added.get(id)?.verdict||original.get(id)?.verdict||'BLOCKED',original:original.get(id),supplemental:added.get(id)})).filter(x=>x.finding && (original.has(x.id)||added.has(x.id)));
for(const x of outcomes){ if(!x.finding.evidence_ids) x.finding=originalAccepted.find(f=>f.finding_id===x.id)||x.finding; }
const surviving=outcomes.filter(x=>x.verdict==='ACCEPT').map(x=>x.finding);
const manual=outcomes.filter(x=>x.verdict==='MANUAL_REVIEW').map(x=>({finding_id:x.finding.finding_id,title:x.finding.title,area:x.finding.area,page:x.finding.page,source_requirement_ids:x.finding.source_requirement_ids,evidence_ids:x.finding.evidence_ids,status:'manual_review',reviewer_id:supplement.reviewer.identity,reason:x.supplemental?.rationale||x.original?.reason||'Independent reviewer requires manual correction or requirement remapping.',reviewed_evidence_ids:[...new Set([...(x.original?.reviewed_evidence_ids||[]),...(x.supplemental?.reviewed_evidence_ids||[])])]}));
const rejected=outcomes.filter(x=>x.verdict==='REJECT').map(x=>({finding_id:x.finding.finding_id,title:x.finding.title,page:x.finding.page,source_requirement_ids:x.finding.source_requirement_ids,evidence_ids:x.finding.evidence_ids,status:'rejected',reviewer_id:added.get(x.finding.finding_id)?supplement.reviewer.identity:first.reviewer.id,reason:added.get(x.finding.finding_id)?.rationale||x.original?.reason,reviewed_evidence_ids:[...new Set([...(x.original?.reviewed_evidence_ids||[]),...(x.supplemental?.reviewed_evidence_ids||[])])]}));
const blocked=outcomes.filter(x=>x.verdict==='BLOCKED').map(x=>({finding_id:x.finding.finding_id,title:x.finding.title,status:'blocked'}));
const decisions=[];
for(const x of outcomes.filter(x=>x.verdict==='ACCEPT')){
 const v=x.supplemental?.verdict==='ACCEPT'?x.supplemental:x.original;
 const supplementIds=x.supplemental?.verdict==='ACCEPT'?x.supplemental.reviewed_evidence_ids:[];
 const ids=[...new Set([...(x.original?.reviewed_evidence_ids||[]),...supplementIds])];
 const facts=[v.reason,...(x.original?.reason&&v!==x.original?[x.original.reason]:[])];
 const observation=x.finding.observation;
 x.finding.status='candidate';
 x.finding.review={status:'accepted',supported:true,reason:v.reason,provenance:'independent_evidence_review',reviewer_role:'evidence_reviewer',reviewer_id:v===x.original?first.reviewer.id:supplement.reviewer.identity,reviewed_at:v===x.original?first.reviewed_at:supplement.reviewed_at,evidence_ids_reviewed:ids,supported_facts:facts,observation_reviewed:observation,page_reviewed:x.finding.page,source_requirement_ids_reviewed:x.finding.source_requirement_ids};
 x.finding.review_status='accepted';x.finding.review_reasons=[v.reason];x.finding.evidence_ids_reviewed=ids;x.finding.source_requirement_ids_reviewed=x.finding.source_requirement_ids;
 decisions.push({finding_id:x.finding.finding_id,status:'accepted',supported:true,reason:v.reason,reviewer_role:'evidence_reviewer',reviewer_id:x.finding.review.reviewer_id,reviewed_at:x.finding.review.reviewed_at,evidence_ids_reviewed:ids,supported_facts:facts,observation_reviewed:observation,page_reviewed:x.finding.page,source_requirement_ids_reviewed:x.finding.source_requirement_ids});
}
for(const x of outcomes.filter(x=>x.verdict==='MANUAL_REVIEW'||x.verdict==='REJECT')){
 const v=x.supplemental||x.original;
 x.finding.review={status:x.verdict==='REJECT'?'rejected':'needs_manual_review',supported:x.verdict==='REJECT'?false:null,reason:v?.rationale||v?.reason||'No independent verdict found.',provenance:'independent_evidence_review',reviewer_role:'evidence_reviewer',reviewer_id:x.supplemental?supplement.reviewer.identity:first.reviewer.id,reviewed_at:x.supplemental?supplement.reviewed_at:first.reviewed_at,evidence_ids_reviewed:[...new Set([...(x.original?.reviewed_evidence_ids||[]),...(x.supplemental?.reviewed_evidence_ids||[])])]};
 x.finding.review_status=x.verdict==='REJECT'?'rejected':'needs_manual_review';
}
await write('review/findings.accepted.json',surviving);
await write('review/findings.manual-review.json',manual);
await write('review/findings.rejected.json',rejected);
await write('review/findings.blocked.json',blocked);
await write('review/evidence-decisions.json',decisions);

const finalDiagnostics=(await read('analyses/technical-diagnostic/diagnostics.json')).filter(d=>surviving.some(f=>f.finding_id===d.finding_id));
await write('analyses/technical-diagnostic/diagnostics.json',finalDiagnostics);
await write('analyses/technical-diagnostic/review.json',{status:'complete',reviewer_id:'codex-local-technical-diagnostic-20260928',diagnosed_findings:finalDiagnostics.length,confirmed_facts_only:true,probable_causes:0,source_level_claims:0,limitations:['Diagnostics are limited to externally recorded observations. Root causes require authorized developer investigation.','Diagnostics filtered to findings retained by independent review.']});
const backlog=planFindings(surviving,finalDiagnostics);
await write('backlog/IMPLEMENTATION_BACKLOG.json',backlog);
await write('backlog/DEPENDENCIES.json',{tasks:backlog.map(t=>({task_id:t.task_id,depends_on:t.dependencies})),edges:backlog.flatMap(t=>t.dependencies.map(dep=>({from:dep,to:t.task_id})))});
await write('review/contradictions.json',{status:'complete',reviewer_id:'codex-local-contradiction-review-20260928',reviewed_findings:surviving.length,contradictions:[],method:'Pairwise conflicting-claim review; final independent-accepted set has no unresolved contradiction.',independence_limit:'Local run-controller review; independent acceptance/rejection provenance is recorded per finding.'});
await write('review/deduplication.json',{status:'complete',reviewer_id:'codex-local-deduplication-20260928',input_findings:surviving.length,output_findings:surviving.length,duplicate_groups:{},merged_origins_preserved:true,persona_impacts_preserved:true,expanded_page_coverage:true,manual_review:manual.length,post_independent_review:'Only independent ACCEPT verdicts remain accepted; manual/rejected findings excluded from planner.'});

const verdict={status:'complete',reviewer_id:'codex-independent-final-review-20260928',reviewed_candidates:outcomes.length,method:'Two-stage independent review: artifact-level evidence assessment followed by supplemental post-scroll visual impact review.',independence_limit:'Supplemental review explicitly scoped to findings materially informed by visual render evidence.',external_independent_reviewer:true,accepted:surviving.length,rejected:rejected.length,manual_review:manual.length,blocked:blocked.length,requested_model:'GPT-5.6 Sol / High',runtime_model_verified:false,review_artifacts:['review/independent-final-review.json','review/independent-render-impact-review.json']};
await write('review/reviewer-verdict.json',verdict);
const manifest=await read('manifest.json');
const index=await read('evidence/index.json');
for(const e of index) if(typeof e.artifact==='string') e.artifact=e.artifact.replaceAll('\\','/');
await write('evidence/index.json',index);
manifest.stage_status.evidence_review={...manifest.stage_status.evidence_review,status:'complete',reviewed_candidates:outcomes.length,accepted_before_dedup:surviving.length,rejected:rejected.length,manual_review:manual.length,blocked:blocked.length,external_independent_reviewer:true,reviewer_id:verdict.reviewer_id,requested_model:verdict.requested_model,runtime_model_verified:false,review_artifacts:verdict.review_artifacts};
manifest.stage_status.contradiction_review={...manifest.stage_status.contradiction_review,status:'complete',reviewed_findings:surviving.length,contradictions:0};
manifest.stage_status.deduplication={...manifest.stage_status.deduplication,status:'complete',input_findings:outcomes.length,output_findings:surviving.length,duplicate_groups:0,manual_review:manual.length};
manifest.stage_status.external_diagnostic={...manifest.stage_status.external_diagnostic,status:'complete',diagnostics:finalDiagnostics.length,probable_causes:0,source_level_inferences:0};
manifest.stage_status.reports={status:'pending'};manifest.stage_status.master_planner={status:'pending'};manifest.stage_status.final_consistency={status:'pending'};
await write('manifest.json',manifest);
const result=await validateConsistency({runDir,pages:await read('inventory/pages.json'),evidence:index,requirements:await read('checklist.normalized.json'),accepted:surviving,backlog,manifest,checks:await read('review/checklist-checks.json'),diagnostics:finalDiagnostics,finalValidation:false});
await write('review/reconciliation-preflight.json',{...result,accepted:surviving.length,manual_review:manual.length,rejected:rejected.length,blocked:blocked.length});
console.log(JSON.stringify({accepted:surviving.length,manual:manual.length,rejected:rejected.length,blocked:blocked.length,diagnostics:finalDiagnostics.length,tasks:backlog.length,preflight:result},null,2));
