import fs from 'node:fs/promises';
import path from 'node:path';
const d=path.resolve('tools/site-audit/runs/20260927T180655Z-85e584');
const read=async p=>JSON.parse(await fs.readFile(path.join(d,p),'utf8'));
const write=async(p,x)=>fs.writeFile(path.join(d,p),JSON.stringify(x,null,2)+'\n');
const candidates=await read('review/candidate-findings.json');
const verdicts=await read('review/independent-final-review.json');
const supplemental=await read('review/independent-render-impact-review.json');
const accepted=await read('review/findings.accepted.json');
const manual=await read('review/findings.manual-review.json');
const rejected=await read('review/findings.rejected.json');
const old=await read('review/evidence-decisions.json');
const map=new Map(old.map(x=>[x.finding_id,x]));
const allVerdicts=new Map(verdicts.verdicts.map(v=>[v.finding_id,v]));
for(const v of supplemental.verdicts) allVerdicts.set(v.finding_id,v);
for(const f of [...manual,...rejected]){
 const base=candidates.find(x=>x.finding_id===f.finding_id);
 const v=allVerdicts.get(f.finding_id);
 if(!base||!v) continue;
 map.set(f.finding_id,{finding_id:f.finding_id,status:f.status==='rejected'?'rejected':'manual_review',supported:f.status==='rejected'?false:null,reason:f.reason||v.reason||v.rationale,reviewer_role:'evidence_reviewer',reviewer_id:v===allVerdicts.get(f.finding_id)&&supplemental.verdicts.some(z=>z.finding_id===f.finding_id)?supplemental.reviewer.identity:verdicts.reviewer.id,evidence_ids_reviewed:[...new Set([...(v.reviewed_evidence_ids||[]),...(f.reviewed_evidence_ids||[])])],supported_facts:[v.reason||v.rationale||f.reason],observation_reviewed:base.observation,page_reviewed:base.page,source_requirement_ids_reviewed:base.source_requirement_ids});
}
const decisions=[...map.values()];
await write('review/evidence-decisions.json',decisions);
const rv=await read('review/reviewer-verdict.json');
rv.reviewed_candidates=decisions.length;rv.accepted=accepted.length;rv.manual_review=manual.length;rv.rejected=rejected.length;rv.blocked=(await read('review/findings.blocked.json')).length;
await write('review/reviewer-verdict.json',rv);
const m=await read('manifest.json');m.stage_status.evidence_review={...m.stage_status.evidence_review,reviewed_candidates:decisions.length,accepted_before_dedup:accepted.length,rejected:rejected.length,manual_review:manual.length,blocked:rv.blocked};await write('manifest.json',m);
console.log(JSON.stringify({decisions:decisions.length,accepted:accepted.length,manual:manual.length,rejected:rejected.length},null,2));
