// Sequential, read-only viewport captures for animated landing sections.
import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';
const out = path.dirname(new URL(import.meta.url).pathname).replace(/^\/(?:[A-Za-z]:)/, m => m.slice(1));
const urls=[['GLU','https://addp.vn/sua-hat-glucare-plus'],['DOV','https://addp.vn/sui-dovital'],['VAD','https://addp.vn/vien-an-duong']];
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
const records=[];
for(const [code,url] of urls)for(const mode of ['DESKTOP','MOBILE']){
  const viewport=mode==='DESKTOP'?{width:1440,height:1000}:{width:390,height:844};
  const context=await browser.newContext({viewport,deviceScaleFactor:1,isMobile:mode==='MOBILE',hasTouch:mode==='MOBILE'});
  const page=await context.newPage();
  await page.goto(url,{waitUntil:'domcontentloaded',timeout:60000});
  await page.waitForTimeout(1200);
  let last=-1;
  for(let i=0;i<60;i++){
    await page.waitForTimeout(550);
    const y=Math.round(await page.evaluate(()=>scrollY));
    if(y===last)break;
    const filename=`${code}-SCAN-${String(i).padStart(2,'0')}-${mode}.png`;
    await page.screenshot({path:path.join(out,filename),fullPage:false});
    const headings=await page.locator('h1,h2,h3,h4').evaluateAll(es=>es.filter(e=>{const r=e.getBoundingClientRect();return r.bottom>55&&r.top<innerHeight&&getComputedStyle(e).visibility!=='hidden'}).map(e=>(e.textContent||'').trim().replace(/\s+/g,' ').slice(0,90)).filter(Boolean));
    const rec={id:`SVR-${code}-SCAN-${String(i).padStart(2,'0')}-${mode}`,url,sectionId:'TO_MAP',mode,viewport:`${viewport.width}x${viewport.height}`,timestamp:new Date().toISOString(),scrollY:y,filename,headings,note:'SUPPLEMENTAL_VISUAL_RECAPTURE'};
    records.push(rec);console.log(filename,y,JSON.stringify(headings));
    last=y;
    await page.mouse.wheel(0,mode==='DESKTOP'?740:620);
  }
  await context.close();
}
await fs.writeFile(path.join(out,'scan-manifest.json'),JSON.stringify(records,null,2));
await browser.close();
