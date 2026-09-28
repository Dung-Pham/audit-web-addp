import fs from 'node:fs/promises';import path from 'node:path';import crypto from 'node:crypto';import {fileURLToPath} from 'node:url';
import {createRun,resumeRun,saveStage,validateConsistency,compareRuns} from './core.mjs';
import {collectSite} from '../collectors/index.mjs';
import {generateReports,planFindings} from '../reporters/index.mjs';
import {writeCoverageArtifacts} from './coverage.mjs';
import {preAnalysisCoverageGate} from './pre-analysis-coverage.mjs';
export const auditRoot=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
export async function readJSON(file,fallback){try{return JSON.parse(await fs.readFile(file,'utf8'));}catch(e){if(e.code==='ENOENT'&&fallback!==undefined)return fallback;throw e;}}
export async function writeJSON(file,data){await fs.mkdir(path.dirname(file),{recursive:true});await fs.writeFile(file,JSON.stringify(data,null,2));}
export const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
export async function frameworkHash(){const entries=[];for(const dir of ['collectors','orchestration','reporters','schemas','config','checklist']){for(const name of (await fs.readdir(path.join(auditRoot,dir))).sort()){if(!/\.(mjs|json)$/.test(name))continue;const p=path.join(auditRoot,dir,name);entries.push(dir+'/'+name+':'+hash(await fs.readFile(p)));}}return hash(entries.join('\n'));}
export async function assertProductionReady(config){
 const host=new URL(config.target).hostname;
 if(['localhost','127.0.0.1','::1'].includes(host))return;
 if(config.target!=='https://addp.vn/'||config.environment!=='production')throw Error('Production audit target/environment must match frozen gate');
 const gate=await fs.readFile(path.join(auditRoot,'SYSTEM_VALIDATION_REPORT.md'),'utf8').catch(()=> 'NOT_READY');
 if(!/^Status: READY_(FOR_AUDIT|WITH_LIMITATIONS)$/m.test(gate))throw Error('Production quality gate is not ready');
 const frozen=await readJSON(path.join(auditRoot,'runtime/PHASE_A_FROZEN.json'),null);
 if(!frozen||frozen.framework_hash!==await frameworkHash()||frozen.checklist_hash!==hash(await fs.readFile(path.join(auditRoot,'../../Checklist.txt'))))throw Error('Phase A build changed after freeze; repeat safety gate');
}
export async function newAudit(config,runId,runKind='audit'){
 const routing=await readJSON(path.join(auditRoot,'runtime/MODEL_ROUTING_EFFECTIVE.json'));
 await assertProductionReady(config);
 const manifest={RUN_ID:runId||new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d+Z$/,'Z')+'-'+crypto.randomBytes(3).toString('hex'),timestamp:new Date().toISOString(),target:config.target,environment:config.environment||'production',mode:'production_read_only',run_kind:runKind,requested_urls:config.requestedUrls||[],checklist_hash:hash(await fs.readFile(path.join(auditRoot,'../../Checklist.txt'))),config_hash:hash(JSON.stringify(config)),audit_framework_version:'1.0.0',audit_framework_hash:await frameworkHash(),website_source_available:false,tool_versions:{node:process.version,playwright:await readJSON(path.join(auditRoot,'node_modules/playwright/package.json')).then(x=>x.version),axe:await readJSON(path.join(auditRoot,'node_modules/axe-core/package.json')).then(x=>x.version),codex_cli:'0.158.0-alpha.2.1'},viewport:config.viewports,effective_models:null,routing_status:routing.model_routing_status,requested_routing:routing.tiers,stage_status:{},safety_flags:{AUDIT_MODE:'production_read_only',AUDIT_ALLOW_CART_MUTATION:false,AUDIT_ALLOW_REAL_ORDER:false,AUDIT_ALLOW_REAL_PAYMENT:false,AUDIT_ALLOW_DESTRUCTIVE_ACTION:false,AUDIT_ALLOW_ACCOUNT_CREATION:false},transaction_authorization:{mode:'disabled',allow_cart_mutation:false,allow_order:false,allow_payment:false,allow_account_creation:false,allow_destructive_action:false},safety_outcomes:{real_orders:0,real_payments:0,accounts_created:0,forms_submitted:0,website_changes:0},limitations:['No source, backend, analytics admin or KiotViet access.','Non-GET browser requests blocked and explicitly labelled audit induced.','Actual inference model metadata is not exposed.','No purchase/lead submission and no cart mutation.'],escalations:[]};
 const runDir=await createRun(path.join(auditRoot,'runs'),manifest.RUN_ID,manifest);await writeJSON(path.join(runDir,'config.json'),config);await writeJSON(path.join(runDir,'checklist.normalized.json'),await readJSON(path.join(auditRoot,'checklist/checklist.normalized.json')));return {runDir,manifest};
}
export async function loadRun(runId){const run=await resumeRun(path.join(auditRoot,'runs'),runId);await assertProductionReady(await readJSON(path.join(run.runDir,'config.json')));return run;}
export function classifyCollectionUsability(pages=[],evidence=[]){
 const evidenceByUrl=new Map();
 for(const item of evidence){if(!item?.url)continue;const list=evidenceByUrl.get(item.url)||[];list.push(item);evidenceByUrl.set(item.url,list);}
 const usablePages=pages.filter(page=>{
  if(!['complete','partial'].includes(page.collection_status)||!page.render_collection_version)return false;
  const related=evidenceByUrl.get(page.url)||[];
  return related.some(item=>item.type==='raw_html'&&item.raw_fact?.render_collection_version===page.render_collection_version)
   &&related.some(item=>item.type==='render_stabilization'&&item.raw_fact?.render_collection_version===page.render_collection_version)
   &&related.some(item=>item.type==='stabilized_full_screenshot'&&item.raw_fact?.render_collection_version===page.render_collection_version);
 });
 const complete=usablePages.filter(page=>page.collection_status==='complete').length;
 const partial=usablePages.filter(page=>page.collection_status==='partial').length;
 return{usable:usablePages.length,complete,partial,errors:pages.filter(page=>page.collection_status==='error').length,complete_with_limitations:partial>0};
}
export async function collect(runDir,config,discoveryOnly=false){
 await assertProductionReady(config);await saveStage(runDir,'discovery','running');
 try{
  const result=await collectSite({target:config.target,runDir,config,discoveryOnly});
  const usability=classifyCollectionUsability(result.pages,result.evidence);
  await writeJSON(path.join(runDir,'collection-summary.json'),{...(result.summary||{}),...usability});
  await writeJSON(path.join(runDir,'blocked.collection.json'),result.blocked||[]);
  if(result.pages.length===0){await saveStage(runDir,'discovery','blocked',{reason:'No usable HTML pages; cannot claim completed audit'});throw Error('Discovery returned zero usable pages');}
  await saveStage(runDir,'discovery','complete');
  if(!discoveryOnly){
   if(usability.usable===0){await saveStage(runDir,'deterministic_collection','blocked',{reason:'No usable page collection evidence'});throw Error('Collection has no usable page evidence');}
   await saveStage(runDir,'deterministic_collection','complete',usability);
  }
  return result;
 }catch(e){
  const manifest=await readJSON(path.join(runDir,'manifest.json'));
  if(manifest.stage_status.discovery?.status!=='blocked'&&manifest.stage_status.deterministic_collection?.status!=='blocked')await saveStage(runDir,'deterministic_collection','interrupted',{error:e.message});
  throw e;
 }
}
export async function createAgentPackets(runDir){
 const coverage=await preAnalysisCoverageGate(runDir);
 await writeJSON(path.join(runDir,'review/pre-analysis-coverage.json'),coverage);
 if(coverage.status!=='PRE_ANALYSIS_COVERAGE_PASSED'){
  await saveStage(runDir,'pre_analysis_coverage','failed',coverage);
  throw Error(`Pre-analysis coverage gate failed: ${coverage.failures.map(item=>item.code).join(', ')}`);
 }
 await saveStage(runDir,'pre_analysis_coverage','complete',coverage);
 const stages={personas:['first_time','high_intent','research','mobile'],specialists:['ux','conversion','brand','content','health_content','seo','geo_aeo','structured_data','performance','analytics','checkout']};
 for(const [stage,roles]of Object.entries(stages))for(const role of roles)await writeJSON(path.join(runDir,'agent-packets',stage,role+'.json'),{role,stage,runDir,allowed_inputs:['inventory/pages.json','evidence/index.json','checklist.normalized.json'],forbidden_inputs:stage==='specialists'?['other specialists conclusions']:[],output:`analyses/${stage}/${role}.json`,instructions:'Use raw evidence only. Submit candidate findings with evidence IDs, source requirement references, observation vs inference, limitations and status. Do not claim source-level causes. No production side effects. No invented journey clicks or measurements.'});
 return stages;
}
export async function reportRun(runDir){
 const accepted=await readJSON(path.join(runDir,'review/findings.accepted.json'));
 const verdict=await readJSON(path.join(runDir,'review/reviewer-verdict.json'));
 const decisions=await readJSON(path.join(runDir,'review/evidence-decisions.json'));
 if(verdict.status!=='complete'||!verdict.reviewer_id||!Number.isInteger(verdict.reviewed_candidates)||verdict.reviewed_candidates<1||!Array.isArray(decisions)||decisions.length!==verdict.reviewed_candidates)throw Error('Expert evidence review not complete or decisions are missing');
 const contradictions=await readJSON(path.join(runDir,'review/contradictions.json'));
 if(contradictions.status!=='complete')throw Error('Contradiction review not complete');
 const diagnostics=await readJSON(path.join(runDir,'analyses/technical-diagnostic/diagnostics.json'),[]);
 const backlog=await readJSON(path.join(runDir,'backlog/IMPLEMENTATION_BACKLOG.json'),null)||planFindings(accepted,diagnostics);
 const coverage=await writeCoverageArtifacts(runDir);const data={runDir,manifest:await readJSON(path.join(runDir,'manifest.json')),pages:await readJSON(path.join(runDir,'inventory/pages.json')),evidence:await readJSON(path.join(runDir,'evidence/index.json')),requirements:await readJSON(path.join(runDir,'checklist.normalized.json')),checks:await readJSON(path.join(runDir,'review/checklist-checks.json')),journeys:await readJSON(path.join(runDir,'analyses/personas/journeys.json')),accepted,manualReview:await readJSON(path.join(runDir,'review/findings.manual-review.json'),[]),blocked:await readJSON(path.join(runDir,'review/checks.blocked.json'),[]),diagnostics,backlog,coverage};
 await generateReports(data);await saveStage(runDir,'reports','complete');await saveStage(runDir,'master_planner','complete');data.manifest=await readJSON(path.join(runDir,'manifest.json'));const validation=await validateConsistency({...data,finalValidation:true});await writeJSON(path.join(runDir,'review/final-consistency.json'),validation);if(!validation.valid){await saveStage(runDir,'reports','failed',{reason:'Final consistency failed'});await saveStage(runDir,'master_planner','failed',{reason:'Final consistency failed'});await saveStage(runDir,'final_consistency','failed',{errors:validation.errors});throw Error('Final consistency failed: '+validation.errors.join('; '));}await saveStage(runDir,'final_consistency','complete');return {validation,backlog:backlog.length,accepted:accepted.length};
}
export {compareRuns};
