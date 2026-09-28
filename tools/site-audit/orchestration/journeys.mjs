import fs from 'node:fs/promises';import path from 'node:path';
import {launchCollector,installReadOnlyBrowserGuard}from'../collectors/browser.mjs';import {safetyReason,evidenceFor}from'../collectors/shared.mjs';import {parseRobots}from'../collectors/crawler.mjs';import{readJSON,writeJSON,assertProductionReady}from'./pipeline.mjs';
const profiles=[
 {persona:'first_time',goal:'Understand ADDP, find its company information and principal product route.',patterns:[/gioi-thieu|ve-chung-toi|about/i,/glucare|vien-an-duong|dovital|san-pham/i]},
 {persona:'high_intent',goal:'Find a principal product and inspect the route toward cart/checkout without mutation.',patterns:[/glucare|vien-an-duong|dovital/i,/checkout\/cart|gio-hang|\/cart\/?$/i,/checkout|thanh-toan/i]},
 {persona:'research',goal:'Read named product information, then company and policy material.',patterns:[/glucare|vien-an-duong|dovital/i,/gioi-thieu|about|ve-chung-toi/i,/chinh-sach|doi-tra|policy|privacy/i]},
 {persona:'mobile',goal:'Navigate to a product and inspect reading/commerce controls at 390px width.',patterns:[/glucare|vien-an-duong|dovital|san-pham/i,/gio-hang|checkout\/cart|\/cart\/?$/i]}
];
export async function runJourneys(runDir){
 const config=await readJSON(path.join(runDir,'config.json'));await assertProductionReady(config);const pages=await readJSON(path.join(runDir,'inventory/pages.json'));const evidence=await readJSON(path.join(runDir,'evidence/index.json'));const discovery=await readJSON(path.join(runDir,'inventory/discovery.json'));const robots=parseRobots(discovery.robots.text);const origin=new URL(config.target).origin;
 const browser=await launchCollector(config);const journeys=[];
 try{for(const profile of profiles){
 const mobile=profile.persona==='mobile';const viewport=mobile?{width:390,height:844}:{width:1440,height:1000};const context=await browser.newContext({viewport,isMobile:mobile,hasTouch:mobile,serviceWorkers:'block',acceptDownloads:false});const log=[];
 await installReadOnlyBrowserGuard({context,origin,robotsAllows:url=>robots.allows(url),onBlocked:item=>log.push({status:'blocked_by_audit',...item})});
 const page=await context.newPage();page.on('dialog',d=>d.dismiss().catch(()=>{}));page.on('download',d=>d.cancel().catch(()=>{}));
 const journey={persona:profile.persona,goal:profile.goal,entry_url:config.target,steps:[],clicks:0,pages_visited:[],blockers:[],confusion_points:[],positive_signals:[],completion_status:'partial',evidence_ids:[],method:'Executed deterministic browsing policy, then interpreted by the separately dispatched persona agent. Observed clicks only; no commerce mutation.'};
 async function snapshot(action,extra={}){const n=journey.steps.length;const rel=`evidence/journeys/${profile.persona}-${n}.json`;const state=await page.evaluate(()=>({url:location.href,title:document.title,text:document.body.innerText,headings:[...document.querySelectorAll('h1,h2,h3')].map(e=>e.innerText),links:[...document.querySelectorAll('a[href]')].map((e,index)=>({index,href:e.href,text:e.innerText,visible:e.getBoundingClientRect().width>0&&e.getBoundingClientRect().height>0&&getComputedStyle(e).visibility!=='hidden'})),forms:[...document.forms].map(f=>({action:f.action,method:f.method,controls:[...f.elements].map(e=>({tag:e.tagName,name:e.name,type:e.type,required:e.required,placeholder:e.placeholder}))})),dimensions:{width:innerWidth,scroll_width:document.documentElement.scrollWidth}}));
 await writeJSON(path.join(runDir,rel),{action,...extra,viewport,state,network_guard:log});const e=evidenceFor({url:page.url(),pageType:pages.find(p=>p.url===page.url())?.page_type||'other',collector:'persona-'+profile.persona,type:'journey',viewport:mobile?'mobile':'desktop',artifact:rel,rawFact:{action,...extra,title:state.title}});evidence.push(e);journey.evidence_ids.push(e.evidence_id); // Step-specific IDs prevent repeated-page collisions.
 e.evidence_id+='-'+n;
 journey.evidence_ids[journey.evidence_ids.length-1]=e.evidence_id;
 const shot=`evidence/journeys/${profile.persona}-${n}.png`;await page.screenshot({path:path.join(runDir,shot),fullPage:false,animations:'disabled'});const se={...e,evidence_id:e.evidence_id+'-SHOT',type:'screenshot',artifact:shot,raw_fact:{viewport}};evidence.push(se);journey.evidence_ids.push(se.evidence_id);
 journey.steps.push({step:n+1,action,url:page.url(),...extra,evidence_ids:[e.evidence_id,se.evidence_id]});journey.pages_visited.push(page.url());return state;}
 try{
 await page.goto(config.target,{waitUntil:'domcontentloaded',timeout:30000});await page.waitForTimeout(800);let state=await snapshot('Open homepage');let completed=0;
 for(const pattern of profile.patterns){
 const usable=state.links.filter(l=>l.visible&&new URL(l.href).origin===origin&&!safetyReason(l.href)&&robots.allows(l.href)&&pattern.test(l.href)&&!journey.pages_visited.includes(l.href));const link=usable[0];
 if(link){try{await page.locator('a[href]').nth(link.index).click({timeout:5000,noWaitAfter:true});journey.clicks++;await page.waitForLoadState('domcontentloaded',{timeout:10000}).catch(()=>{});await page.waitForTimeout(700);state=await snapshot('Click visible link',{label:link.text,href:link.href});completed++;}catch(e){journey.blockers.push('Visible link interaction could not be completed: '+e.message.split('\n')[0]);}}
 else {const fallback=pages.find(p=>pattern.test(p.url)&&!journey.pages_visited.includes(p.url)&&!safetyReason(p.url)&&robots.allows(p.url));if(fallback){journey.confusion_points.push('No matching visible link was located at this step; inspected a URL already discovered in the public inventory.');await page.goto(fallback.url,{waitUntil:'domcontentloaded',timeout:30000});await page.waitForTimeout(700);state=await snapshot('Navigate to previously discovered public URL',{href:fallback.url,click_counted:false});completed++;}else journey.blockers.push('No safe reachable URL in collected scope for journey goal pattern '+pattern.source);}
 }
 if(['high_intent','mobile'].includes(profile.persona))journey.blockers.push('Add-to-cart, order submission and downstream confirmation intentionally not executed in production read-only mode.');
 journey.completion_status=completed===profile.patterns.length&&!journey.blockers.length?'complete':'partial';journey.positive_signals.push(`Read ${new Set(journey.pages_visited).size} distinct page(s) through ${journey.clicks} observed link click(s).`);
 }catch(e){journey.completion_status='blocked';journey.blockers.push(e.message);}finally{await context.close();}
 journey.pages_visited=[...new Set(journey.pages_visited)];journeys.push(journey);await writeJSON(path.join(runDir,'analyses/personas/journeys.json'),journeys);await writeJSON(path.join(runDir,'evidence/index.json'),evidence);console.log('Journey '+profile.persona+': '+journey.completion_status+', clicks '+journey.clicks);
 }}finally{await browser.close();}return journeys;
}
if(process.argv[1]?.replace(/\\/g,'/').endsWith('/orchestration/journeys.mjs')){const runDir=path.resolve(process.argv[2]);console.log(await runJourneys(runDir));}
