import { chromium } from 'playwright';
import path from 'node:path';
const out=path.dirname(new URL(import.meta.url).pathname).replace(/^\/(?:[A-Za-z]:)/,m=>m.slice(1));
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
const jobs=[
  {code:'GLU',url:'https://addp.vn/sua-hat-glucare-plus',targets:[['S05B','Khám phá bên trong lon','THIÊN DƯỢC'],['S05C','Khám phá bên trong lon','VITAMIN'],['S08','Pha đúng cách',null],['S11','Trải Nghiệm Glucare Plus',null]]},
  {code:'DOV',url:'https://addp.vn/sui-dovital',targets:[['S11','Danh Sách Sản Phẩm',null],['S12','Hướng Dẫn Sử Dụng',null],['S13','Một Viên Sủi Nhỏ',null]]},
  {code:'VAD',url:'https://addp.vn/vien-an-duong',targets:[['S09','Khuyến cáo sử dụng',null],['S10','Đồng Hành Cùng Bạn',null]]}
];
for(const job of jobs){
  const p=await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1});
  await p.goto(job.url,{waitUntil:'domcontentloaded',timeout:60000});await p.waitForTimeout(1200);
  // Scroll progressively to the end so lazy/reveal sections receive actual user-style scroll events.
  for(let i=0;i<35;i++){const before=await p.evaluate(()=>scrollY);await p.mouse.wheel(0,430);await p.waitForTimeout(260);const after=await p.evaluate(()=>scrollY);if(after<=before+2)break;}
  for(const[id,heading,tab]of job.targets){
    const loc=p.locator('h1,h2,h3,h4').filter({hasText:heading}).first();
    if(!await loc.count()){console.log('MISSING',job.code,id,heading);continue;}
    for(let i=0;i<25;i++){const rect=await loc.evaluate(e=>({top:e.getBoundingClientRect().top}));if(rect.top>100&&rect.top<500)break;const delta=Math.sign(rect.top-160)*Math.min(450,Math.abs(rect.top-160));if(Math.abs(delta)<5)break;await p.mouse.wheel(0,delta);await p.waitForTimeout(260);}
    if(tab){const btn=p.getByRole('button',{name:new RegExp(tab,'i')}).first();if(await btn.count())await btn.click({timeout:10000}).catch(()=>{});}
    await p.waitForTimeout(2200);
    const name=`${job.code}-${id}-DESKTOP.png`;await p.screenshot({path:path.join(out,name),fullPage:false});
    const state=await p.evaluate(()=>({y:scrollY,h:document.documentElement.scrollHeight}));console.log(name,JSON.stringify(state));
  }
  await p.close();
}
await browser.close();
