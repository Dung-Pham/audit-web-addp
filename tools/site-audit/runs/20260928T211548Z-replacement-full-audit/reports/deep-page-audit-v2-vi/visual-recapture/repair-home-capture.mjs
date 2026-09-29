import { chromium } from 'playwright';
import path from 'node:path';
const out = path.dirname(new URL(import.meta.url).pathname).replace(/^\/(?:[A-Za-z]:)/, m => m.slice(1));
const browser = await chromium.launch({headless:true, executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
const p = await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1});
await p.goto('https://addp.vn/',{waitUntil:'domcontentloaded',timeout:60000});
await p.waitForTimeout(1500);
const loc=p.locator('h1,h2,h3').filter({hasText:'Khám Phá Các Dòng Sản Phẩm ADDP'}).first();
for(let i=0;i<30;i++){
  const top=await loc.evaluate(e=>e.getBoundingClientRect().top);
  if(top>90&&top<140)break;
  await p.mouse.wheel(0,Math.sign(top-115)*Math.min(400,Math.abs(top-115)));
  await p.waitForTimeout(300);
}
await p.waitForTimeout(2400);
await p.screenshot({path:path.join(out,'HOME-S02-DESKTOP.png'),fullPage:false});
console.log(JSON.stringify({url:p.url(),scrollY:await p.evaluate(()=>scrollY),timestamp:new Date().toISOString(),viewport:'1440x1000'}));
await browser.close();
