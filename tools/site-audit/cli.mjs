import fs from 'node:fs/promises';import path from 'node:path';
import {auditRoot,readJSON,writeJSON,newAudit,loadRun,collect,createAgentPackets,reportRun,compareRuns} from './orchestration/pipeline.mjs';
const [mode='help',...args]=process.argv.slice(2);const opts={};for(let i=0;i<args.length;i++){if(!args[i].startsWith('--'))continue;const [k,v]=args[i].slice(2).split('=');opts[k]=v??(args[i+1]&&!args[i+1].startsWith('--')?args[++i]:true);}
try{
 if(mode==='help'){console.log('Modes: discovery collect personas analyze review report full validate regression. Options: --target URL --environment production --max-pages 25 --resume RUN_ID --allow-real-order=false. Personas/analyze create live-agent packets; the Codex session executes them and deposits reviewed outputs, after which full resumes automatically. Raw safety cannot be overridden.');}
 else if(mode==='regression'){const before=await readJSON(path.join(auditRoot,'runs',opts.before,'review/findings.accepted.json'));const after=await readJSON(path.join(auditRoot,'runs',opts.after,'review/findings.accepted.json'));const result=compareRuns(before,after);const file=path.join(auditRoot,'runs',opts.after,'review','regression-'+opts.before+'.json');await writeJSON(file,result);console.log(JSON.stringify({file,result},null,2));}
 else{
  if(opts['allow-real-order']!==undefined&&String(opts['allow-real-order'])!=='false')throw Error('Real orders are never allowed');
  if(!['discovery','collect','personas','analyze','review','report','full','validate'].includes(mode))throw Error('Unknown mode '+mode);
  let config=await readJSON(path.join(auditRoot,'config/audit.json'));if(opts.target)config.target=opts.target;if(opts.environment)config.environment=opts.environment;if(opts['max-pages'])config.maxPages=Number(opts['max-pages']);
  if(!Number.isInteger(config.maxPages)||config.maxPages<1||config.maxPages>100)throw Error('max-pages must be 1..100');
  const run=opts.resume?await loadRun(opts.resume):await newAudit(config,opts['run-id']);if(opts.resume){config=await readJSON(path.join(run.runDir,'config.json'));if(opts.target&&opts.target!==config.target)throw Error('Resume target mismatch');}
  console.log(JSON.stringify({RUN_ID:run.manifest.RUN_ID,runDir:run.runDir,mode}));
  if(['discovery','collect','full'].includes(mode))await collect(run.runDir,config,mode==='discovery');
  if(['personas','analyze','full'].includes(mode)){await createAgentPackets(run.runDir);console.log('Agent packets ready; live Codex multi-agent execution required. This message is not an analysis-complete claim.');}
  if(['review','report','validate'].includes(mode))console.log(await reportRun(run.runDir));
  if(mode==='full'){try{await fs.access(path.join(run.runDir,'review/reviewer-verdict.json'));console.log(await reportRun(run.runDir));}catch(e){if(e.code!=='ENOENT')throw e;console.log('Status: awaiting live agent stages. Current session continues automatically through personas, specialists, technical diagnosis, reviewers and planner.');}}
 }
}catch(e){console.error(e.stack||e);process.exitCode=1;}
