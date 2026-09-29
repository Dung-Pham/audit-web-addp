// Supplemental, read-only visual recapture. Never submit or click commerce controls.
import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const out = path.dirname(new URL(import.meta.url).pathname).replace(/^\/(?:[A-Za-z]:)/, m => m.slice(1));
const plans = [
  {code:'HOME',type:'homepage',url:'https://addp.vn/',desktop:[['S01','Header + hero',0],['S02','Product gateway','Khám Phá Các Dòng Sản Phẩm ADDP'],['S03','Consultation','Form Tư vấn'],['S04','Footer','FOOTER']],mobile:[['S01','Header + hero',0],['S02','Product gateway','Khám Phá Các Dòng Sản Phẩm ADDP'],['S03','Consultation','Form Tư vấn']]},
  {code:'GLU',type:'sales_landing',url:'https://addp.vn/sua-hat-glucare-plus',desktop:[['S01','Hero',0],['S02','USP','Không lactose'],['S03','Featured products','Sản phẩm nổi bật ADDP'],['S04A','Inside tin start','Khám phá bên trong lon'],['S04B','Nuts group','Hạt sen'],['S04C','Botanicals','Quả Nhàu'],['S04D','Micronutrients','Canxi'],['S05','Audience','Giải pháp dinh dưỡng dành cho'],['S06A','Product list start','Danh sách sản phẩm ADDP'],['S06B','Product list middle',4200],['S07','Mixing guide','Pha đúng cách'],['S08','Temperature note','Lưu ý quan trọng'],['S09','Daily habit CTA','Bắt đầu chăm sóc'],['S10','Trial offer','Trải Nghiệm Glucare Plus'],['S11','Trial registration','Đăng ký nhận gói dùng thử'],['S12','Footer','FOOTER']],mobile:[['S01','Hero',0],['S02','USP','Không lactose'],['S04','Inside tin','Khám phá bên trong lon'],['S05','Audience','Giải pháp dinh dưỡng dành cho'],['S07','Mixing guide','Pha đúng cách'],['S10','Trial offer','Trải Nghiệm Glucare Plus'],['S11','Trial registration','Đăng ký nhận gói dùng thử']]},
  {code:'DOV',type:'sales_landing',url:'https://addp.vn/sui-dovital',desktop:[['S01','Hero',0],['S02','Benefit statement','Bộ Đôi Sủi'],['S03','Two lines','MultiVitamin Health'],['S04','Care message','Chăm Sóc Cơ Thể'],['S05','Featured products','Sản phẩm nổi bật'],['S06','Ingredients intro','Thành phần dược liệu tự nhiên'],['S07','Multivitamin facts','MultiVitamin Health'],['S08','Liver-support facts','Viên Sủi Mát Gan Dovital'],['S09','Transition CTA','Bắt Đầu Hành Trình'],['S10A','Product list start','Danh Sách Sản Phẩm'],['S10B','Product list middle',6800],['S10C','Product list end',9000],['S11','Usage','Hướng Dẫn Sử Dụng'],['S12','Final message','Một Viên Sủi Nhỏ'],['S13','Footer','FOOTER']],mobile:[['S01','Hero',0],['S02','Benefit','Bộ Đôi Sủi'],['S05','Products','Sản phẩm nổi bật'],['S06','Ingredients','Thành phần dược liệu tự nhiên'],['S10','Product list','Danh Sách Sản Phẩm'],['S11','Usage','Hướng Dẫn Sử Dụng'],['S12','Final CTA','Một Viên Sủi Nhỏ']]},
  {code:'VAD',type:'sales_landing',url:'https://addp.vn/vien-an-duong',desktop:[['S01','Hero',0],['S02','Three promises','Chiết xuất 10/1'],['S03','Long-term message','Không hứa hẹn phép màu'],['S04','Featured product','Sản Phẩm Nổi Bật'],['S05A','Ingredients intro','Sức mạnh từ thiên nhiên'],['S05B','Ingredients middle',2850],['S05C','Ingredients end',3250],['S06','Usage','Liều dùng chuẩn khoa học'],['S07A','Product list start','Danh sách sản phẩm'],['S07B','Product list middle',4900],['S07C','Product list end',5550],['S08','Warnings','Khuyến cáo sử dụng'],['S09','Final CTA','Đồng Hành Cùng Bạn'],['S10','Footer','FOOTER']],mobile:[['S01','Hero',0],['S02','Three promises','Chiết xuất 10/1'],['S03','Long-term message','Không hứa hẹn phép màu'],['S05','Ingredients','Sức mạnh từ thiên nhiên'],['S06','Usage','Liều dùng chuẩn khoa học'],['S07','Product list','Danh sách sản phẩm'],['S08','Warnings','Khuyến cáo sử dụng'],['S09','Final CTA','Đồng Hành Cùng Bạn']]},
  {code:'PDP',type:'product_detail',url:'https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html',desktop:[['S01','Product purchase',0],['S02','Quick overview',600],['S03','Details and tabs',1000],['S04','Footer','FOOTER']],mobile:[['S01','Product image',0],['S02','Price and CTA',700],['S03','Details',1600]]},
  {code:'CAT',type:'product_listing',url:'https://addp.vn/sua-dinh-duong.html',desktop:[['S01','Heading and categories',0],['S02','Filter and grid',500],['S03','Cards and footer',1300]],mobile:[['S01','Heading and category',0],['S02','Cards and price',500],['S03','More cards',1100]]},
  {code:'BLOG',type:'article_listing',url:'https://addp.vn/blog/category/suc-khoe-tieu-duong',desktop:[['S01','Heading and first articles',0],['S02','Article cards and sidebar',900],['S03','Later articles',1800]],mobile:[['S01','Heading and first card',0],['S02','Article cards',700],['S03','Later cards',1500]]},
  {code:'ART',type:'article_detail',url:'https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong',desktop:[['S01','Title and infographic',0],['S02','Opening and importance',850],['S03','Diagnostic criteria',2000],['S04','Tests and advice',3500],['S05','Ending and related',5700]],mobile:[['S01','Title and infographic',0],['S02','Opening answer',700],['S03','Body',1600],['S04','Ending',4500]]},
];

const browser = await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
const manifest=[];
for (const plan of plans) {
  for (const mode of ['desktop','mobile']) {
    const viewport = mode==='desktop'?{width:1440,height:1000}:{width:390,height:844};
    const context = await browser.newContext({viewport,deviceScaleFactor:1,isMobile:mode==='mobile',hasTouch:mode==='mobile'});
    const page=await context.newPage();
    try {
      await page.goto(plan.url,{waitUntil:'domcontentloaded',timeout:60000});
      await page.waitForTimeout(1000);
      const allHeadings=await page.locator('h1,h2,h3,h4').evaluateAll(es=>es.map(e=>({text:(e.textContent||'').trim().replace(/\s+/g,' '),y:Math.round(e.getBoundingClientRect().top+scrollY)})).filter(x=>x.text));
      for (const [id,name,anchor] of plan[mode]) {
        let target=0;
        if(anchor==='FOOTER') target=await page.locator('footer').first().evaluate(e=>Math.round(e.getBoundingClientRect().top+scrollY)).catch(()=>0);
        else if(typeof anchor==='number') target=anchor;
        else target=allHeadings.find(x=>x.text.toLowerCase().includes(anchor.toLowerCase()))?.y??0;
        target=Math.max(0,target-120);
        let current=await page.evaluate(()=>scrollY);
        for(let step=0;step<45 && current+100<target;step++){const before=current;const delta=Math.min(620,target-current);await page.mouse.wheel(0,delta);await page.waitForTimeout(130);current=await page.evaluate(()=>scrollY);if(current<=before+2)break;}
        if(current>target+200){for(let step=0;step<15 && current>target+150;step++){const before=current;await page.mouse.wheel(0,-Math.min(500,current-target));await page.waitForTimeout(130);current=await page.evaluate(()=>scrollY);if(current>=before-2)break;}}
        await page.waitForTimeout(850);
        const actual=await page.evaluate(()=>scrollY);
        const filename=`${plan.code}-${id}-${mode.toUpperCase()}.png`;
        const filepath=path.join(out,filename);
        let timestamp;
        try{timestamp=(await fs.stat(filepath)).mtime.toISOString();}catch{await page.screenshot({path:filepath,fullPage:false,animations:'allow'});timestamp=new Date().toISOString();}
        manifest.push({id:`SVR-${plan.code}-${id}-${mode.toUpperCase()}`,url:plan.url,pageType:plan.type,sectionId:`${plan.code}-${id}`,sectionName:name,viewport:`${viewport.width}x${viewport.height}`,mode,timestamp,scrollY:Math.round(actual),anchor,filename,note:'SUPPLEMENTAL_VISUAL_RECAPTURE'});
        console.log(filename,Math.round(actual));
      }
      await fs.writeFile(path.join(out,`${plan.code}-${mode}-headings.json`),JSON.stringify({url:plan.url,mode,headings:allHeadings},null,2));
    } catch(err){console.error('ERROR',plan.code,mode,String(err));}
    await context.close();
  }
}
await fs.writeFile(path.join(out,'capture-manifest.json'),JSON.stringify(manifest,null,2));
await browser.close();
