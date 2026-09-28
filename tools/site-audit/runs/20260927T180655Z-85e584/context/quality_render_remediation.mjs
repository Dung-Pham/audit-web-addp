import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { launchCollector, installReadOnlyBrowserGuard } from '../../../collectors/browser.mjs';
import { evidenceFor, safetyReason } from '../../../collectors/shared.mjs';
import { parseRobots } from '../../../collectors/crawler.mjs';
import { assertProductionReady, readJSON, writeJSON, auditRoot } from '../../../orchestration/pipeline.mjs';

const runDir=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=rel=>readJSON(path.join(runDir,rel));
const write=async(rel,obj)=>writeJSON(path.join(runDir,rel),obj);
const bounded=async(promise,ms,label)=>{let t;try{return await Promise.race([promise,new Promise((_,reject)=>t=setTimeout(()=>reject(new Error(`${label} timed out after ${ms}ms`)),ms))]);}finally{clearTimeout(t);}};
const config=await read('config.json');await assertProductionReady(config);
const pages=await read('inventory/pages.json'),discovery=await read('inventory/discovery.json'),robots=parseRobots(discovery.robots?.text||''),origin=new URL(config.target).origin;
let index=await read('evidence/index.json');const byId=new Map(index.map(x=>[x.evidence_id,x]));
const started=new Date().toISOString().replace(/[:.]/g,'-');const baseDir=`evidence/quality-remediation-${started}`;
const report={run_id:path.basename(runDir),activity:'audit-induced render stabilization / scroll',started_at:new Date().toISOString(),selected_pages:pages.length,viewports:config.viewports.map(v=>v.name),pages_recollected:[],captures:[],limitations:['Read-only GET only; no forms or commerce controls activated.','Existing initial/current screenshots and evidence records were preserved.'],safety:{blocked_non_get_count:0,blocked_external_or_robots_count:0,forms_submitted:0,cart_mutations:0,orders:0,payments:0,account_actions:0,websocket_connections:0}};
const browser=await launchCollector(config);
try {
 for(const [pi,info] of pages.entries()){
  if(!info?.url||new URL(info.url).origin!==origin||safetyReason(info.url)||!robots.allows(info.url)){report.pages_recollected.push({url:info?.url,status:'blocked',reason:'unsafe, cross-origin, or robots disallowed'});continue;}
  console.log(`[quality-render] page ${pi+1}/${pages.length}: ${info.url}`);
  const pageResults=[];
  for(const vp of config.viewports){
   await new Promise(resolve=>setTimeout(resolve,Math.max(700,Number(config.requestDelayMs)||700)));
   const viewport={width:vp.width,height:vp.height},context=await browser.newContext({viewport,deviceScaleFactor:1,isMobile:vp.name==='mobile',hasTouch:vp.name==='mobile',serviceWorkers:'block',acceptDownloads:false});
   const blocked=[],failed=[],responses=[],consoleErrors=[],pageErrors=[];
   await installReadOnlyBrowserGuard({context,origin,robotsAllows:u=>robots.allows(u),onBlocked:item=>{blocked.push({...item,activity:'audit-induced render stabilization / scroll'});if(/method|mutating/i.test(item.reason||''))report.safety.blocked_non_get_count++;else report.safety.blocked_external_or_robots_count++;}});
   context.on('requestfailed',req=>failed.push({url:req.url(),method:req.method(),resource_type:req.resourceType(),error:req.failure()?.errorText||null}));
   context.on('response',res=>responses.push({url:res.url(),status:res.status(),method:res.request().method(),resource_type:res.request().resourceType(),content_type:res.headers()['content-type']||null}));
   context.on('page',p=>{p.on('dialog',d=>d.dismiss().catch(()=>{}));p.on('download',d=>d.cancel().catch(()=>{}));p.on('pageerror',e=>pageErrors.push({message:e.message,url:p.url()}));});
   context.on('console',msg=>{if(['error','warning'].includes(msg.type()))consoleErrors.push({type:msg.type(),text:msg.text().slice(0,800),url:msg.location()?.url||null});});
   const page=await context.newPage();page.setDefaultNavigationTimeout(25000);page.setDefaultTimeout(10000);let status=null,navError=null,scrollTimedOut=false;const milestones=[];let initial=null,finalState=null,scrollSignals=[];
   try{
    const response=await bounded(page.goto(info.url,{waitUntil:'domcontentloaded',timeout:25000}),28000,'DOMContentLoaded navigation');status=response?.status()??null;
    await bounded(page.evaluate(()=>document.fonts?.ready||Promise.resolve()),7000,'document.fonts.ready').catch(()=>{});
    await page.waitForTimeout(500);
    const snapshot=()=>page.evaluate(()=>{
     const entries=performance.getEntriesByType('resource');
     const imgs=[...document.images].map(i=>({src:i.currentSrc||i.src,complete:i.complete,naturalWidth:i.naturalWidth,naturalHeight:i.naturalHeight,loading:i.loading,visible:!!(i.getBoundingClientRect().width&&i.getBoundingClientRect().height)}));
     const links=[...document.querySelectorAll('link[rel="stylesheet"]')].map(l=>({href:l.href,disabled:l.disabled,media:l.media,matched:!!l.sheet}));
     let cssRulesUnreadable=0;for(const l of document.querySelectorAll('link[rel="stylesheet"]'))try{void l.sheet?.cssRules?.length}catch{cssRulesUnreadable++}
     return {url:location.href,title:document.title,readyState:document.readyState,status:null,viewport:{width:innerWidth,height:innerHeight},documentHeight:document.documentElement.scrollHeight,bodyTextLength:document.body?.innerText?.length||0,headings:[...document.querySelectorAll('h1,h2,h3')].map(x=>x.innerText.trim()).filter(Boolean),images:imgs,stylesheets:links,cssRulesUnreadable,scripts:[...document.scripts].map(s=>({src:s.src||null,async:s.async,defer:s.defer,readyState:s.readyState||null})),fonts:{status:document.fonts?.status||'unknown',count:document.fonts?.size||0},resourceEntries:entries.map(e=>({name:e.name,initiatorType:e.initiatorType,duration:Math.round(e.duration),transferSize:e.transferSize||0})),forms:document.forms.length,visibleText:document.body?.innerText?.slice(0,3000)||''};
    });
    initial=await snapshot();initial.status=status;milestones.push({phase:'DOMContentLoaded + bounded font wait',height:initial.documentHeight,textLength:initial.bodyTextLength,imageCount:initial.images.length,pendingImages:initial.images.filter(i=>!i.complete).length});
    const waitImages=async()=>bounded(page.evaluate(async()=>{const imgs=[...document.images];await Promise.allSettled(imgs.map(img=>{if(img.complete)return Promise.resolve();return new Promise(resolve=>{const t=setTimeout(resolve,1400);img.addEventListener('load',()=>{clearTimeout(t);resolve()},{once:true});img.addEventListener('error',()=>{clearTimeout(t);resolve()},{once:true});});}));return imgs.map(i=>({src:i.currentSrc||i.src,complete:i.complete,naturalWidth:i.naturalWidth,naturalHeight:i.naturalHeight,loading:i.loading}));}),2000,'bounded image settling');
    await waitImages().catch(()=>{});
    const maxIterations=70,startedAt=Date.now();let previousHeight=initial.documentHeight,stableAtBottom=0,lastText=initial.bodyTextLength;
    for(let step=0;step<maxIterations;step++){
     if(Date.now()-startedAt>120000){scrollTimedOut=true;break;}
     const pos=await page.evaluate(()=>({y:scrollY,h:innerHeight,doc:document.documentElement.scrollHeight,text:document.body?.innerText?.length||0}));
     const target=Math.min(pos.y+Math.max(300,Math.floor(pos.h*.82)),Math.max(0,pos.doc-pos.h));
     await page.evaluate(y=>window.scrollTo({top:y,behavior:'instant'}),target);
     await page.waitForTimeout(420);
     await waitImages().catch(()=>{});
     const now=await page.evaluate(()=>({y:scrollY,doc:document.documentElement.scrollHeight,text:document.body?.innerText?.length||0,images:document.images.length,pending:[...document.images].filter(i=>!i.complete).length,failedImages:[...document.images].filter(i=>i.complete&&i.naturalWidth===0).length}));
     milestones.push({phase:'audit-induced render stabilization / scroll',step:step+1,scrollY:now.y,height:now.doc,textLength:now.text,imageCount:now.images,pendingImages:now.pending,failedImages:now.failedImages});
     if(now.doc>previousHeight||now.text>lastText||now.images>(milestones.at(-2)?.imageCount||0))scrollSignals.push({step:step+1,height:now.doc,textLength:now.text,imageCount:now.images});
     const atBottom=now.y+viewport.height>=now.doc-4;
     if(atBottom&&now.doc===previousHeight&&now.text===lastText)stableAtBottom++;else stableAtBottom=0;
     previousHeight=now.doc;lastText=now.text;
     if(atBottom&&stableAtBottom>=2)break;
     if(step===maxIterations-1)scrollTimedOut=true;
    }
    await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));await page.waitForTimeout(900);await waitImages().catch(()=>{});
    finalState=await snapshot();finalState.status=status;
   }catch(error){navError=error.message;try{finalState=await page.evaluate(()=>({url:location.href,title:document.title,readyState:document.readyState,documentHeight:document.documentElement?.scrollHeight||0,bodyTextLength:document.body?.innerText?.length||0}));}catch{}}
   const slug=crypto.createHash('sha256').update(info.url).digest('hex').slice(0,16),prefix=`${baseDir}/${slug}.${vp.name}`;
   const viewportArtifact=`${prefix}.postscroll.viewport.png`,fullArtifact=`${prefix}.postscroll.full.png`,recordArtifact=`${prefix}.record.json`;
   let viewportSaved=false,fullSaved=false;try{await bounded(page.screenshot({path:path.join(runDir,viewportArtifact),fullPage:false,animations:'disabled',timeout:15000}),17000,'viewport screenshot');viewportSaved=true;}catch(e){console.warn(`[quality-render] viewport screenshot failed ${info.url} ${vp.name}: ${e.message}`)}
   try{await bounded(page.screenshot({path:path.join(runDir,fullArtifact),fullPage:true,animations:'disabled',timeout:20000}),22000,'full-page screenshot');fullSaved=true;}catch(e){console.warn(`[quality-render] full screenshot failed ${info.url} ${vp.name}: ${e.message}`)}
   const failedRes=[...failed.filter(f=>f.method==='GET'),...blocked.map(b=>({url:b.url,method:b.method||'GET',resource_type:b.resource_type||null,error:b.reason,blocked_by_audit:true}))];
   const state={url:info.url,final_url:finalState?.url||null,http_status:status,viewport:vp.name,activity:'audit-induced render stabilization / scroll',navigation_error:navError,scroll_timed_out:scrollTimedOut,initial,final:finalState,scroll_milestones:milestones,scroll_triggered_change_signals:scrollSignals,failed_resources:failedRes,responses:responses.filter(x=>x.resource_type==='stylesheet'||x.resource_type==='font'||x.resource_type==='image'||x.resource_type==='script'),console_errors:consoleErrors,page_errors:pageErrors,screenshot_artifacts:{viewport:viewportSaved?viewportArtifact:null,full:fullSaved?fullArtifact:null},render_complete:!!(viewportSaved&&fullSaved&&!navError&&!scrollTimedOut&&failedRes.length===0&&finalState?.fonts?.status!=='loading'&&!(finalState?.images||[]).some(i=>!i.complete||i.naturalWidth===0)),remaining_failed_resource_counts:{stylesheet:failedRes.filter(x=>x.resource_type==='stylesheet'||/\.css(?:[?#]|$)/i.test(x.url||'')).length,font:failedRes.filter(x=>x.resource_type==='font'||/\.(?:woff2?|ttf|otf)(?:[?#]|$)/i.test(x.url||'')).length,image:failedRes.filter(x=>x.resource_type==='image'||/\.(?:png|jpe?g|gif|webp|svg)(?:[?#]|$)/i.test(x.url||'')).length,script:failedRes.filter(x=>x.resource_type==='script'||/\.js(?:[?#]|$)/i.test(x.url||'')).length}};
   await write(recordArtifact,state);
   const pageType=info.page_type||'other';
   const add=(type,artifact,rawFact)=>{if(!artifact)return;const item=evidenceFor({url:info.url,pageType,collector:'quality-remediation-scroll-v1',type,viewport:vp.name,artifact,rawFact:{activity:'audit-induced render stabilization / scroll',...rawFact}});byId.set(item.evidence_id,item);};
   add('render_remediation_record',recordArtifact,{http_status:status,render_complete:state.render_complete,scroll_timed_out:scrollTimedOut,failed_resource_count:failedRes.length,initial_height:initial?.documentHeight??null,final_height:finalState?.documentHeight??null,scroll_change_signals:scrollSignals.length});
   add('stabilized_postscroll_viewport_screenshot',viewportSaved?viewportArtifact:null,{captured_after_full_document_scroll:true,http_status:status});
   add('stabilized_postscroll_full_screenshot',fullSaved?fullArtifact:null,{captured_after_full_document_scroll:true,http_status:status,document_height:finalState?.documentHeight??null});
   index=[...byId.values()];await write('evidence/index.json',index);
   const cap={url:info.url,viewport:vp.name,http_status:status,render_complete:state.render_complete,scroll_timed_out:scrollTimedOut,initial_height:initial?.documentHeight??null,final_height:finalState?.documentHeight??null,scroll_change_signals:scrollSignals.length,failed_resources:failedRes,remaining_failed_resource_counts:state.remaining_failed_resource_counts,screenshots:state.screenshot_artifacts,record_artifact:recordArtifact};report.captures.push(cap);pageResults.push(cap);
   await context.close().catch(()=>{});
   console.log(`[quality-render] ${vp.name} ${state.render_complete?'complete':'partial'}; failures=${failedRes.length}; scrollSignals=${scrollSignals.length}; ${info.url}`);
  }
  report.pages_recollected.push({url:info.url,captures:pageResults.length,status:pageResults.every(x=>x.render_complete)?'render_complete':'partial'});
  await write(`${baseDir}/summary.progress.json`,report);
 }
}finally{await browser.close().catch(()=>{});}
const partial=report.pages_recollected.filter(x=>x.status!=='render_complete').length;
report.finished_at=new Date().toISOString();report.pages_recollected_count=report.pages_recollected.filter(x=>x.captures>0).length;report.render_complete_pages=pages.length-partial;report.remaining_partial_pages=partial;report.pages_with_scroll_signals=[...new Set(report.captures.filter(c=>c.scroll_change_signals>0).map(c=>c.url))];report.captures_with_material_dom_change=report.captures.filter(c=>Math.abs((c.final_height||0)-(c.initial_height||0))>Math.max(100,(c.initial_height||0)*.03)||c.scroll_change_signals>0).map(c=>({url:c.url,viewport:c.viewport,height_before:c.initial_height,height_after:c.final_height,scroll_signals:c.scroll_change_signals}));report.remaining_failed_resource_totals=report.captures.reduce((a,c)=>{for(const [k,v]of Object.entries(c.remaining_failed_resource_counts||{}))a[k]=(a[k]||0)+v;return a;},{});await write(`${baseDir}/summary.json`,report);
const manifest=await read('manifest.json');manifest.stage_status.render_quality_remediation={status:partial===pages.length?'partial':'complete_with_limitations',activity:report.activity,selected_pages:pages.length,pages_recollected:report.pages_recollected_count,render_complete_pages:report.render_complete_pages,remaining_partial_pages:partial,evidence_records:index.length,summary:`${baseDir}/summary.json`,updated_at:report.finished_at};await write('manifest.json',manifest);
console.log(JSON.stringify({summary:`${baseDir}/summary.json`,pages:pages.length,recollected:report.pages_recollected_count,renderComplete:report.render_complete_pages,partial,scrollTriggeredPages:report.pages_with_scroll_signals.length,resourceTotals:report.remaining_failed_resource_totals,evidence:index.length},null,2));
