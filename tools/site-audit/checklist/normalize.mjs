import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
export const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../..');
export function parseChecklist(text){
  const matches=[...text.matchAll(/^\[([^\]\n]+)!([A-Z]+\d+)\]\r?\n/gm)];
  return matches.map((m,i)=>({sheet:m[1],cell:m[2],text:text.slice(m.index+m[0].length,i+1<matches.length?matches[i+1].index:text.length).replace(/\n$/,'').replace(/\n## SHEET:[\s\S]*$/,'')}));
}
const definitions={
6:{applies_to:['homepage','product_detail','product_landing'],methods:['visual review','computed colors'],agents:['brand','ux'],evidence:['screenshots','rendered DOM'],severity:'medium'},
7:{applies_to:['all'],methods:['computed typography at mobile viewport'],agents:['ux','persona_mobile'],evidence:['DOM styles','mobile screenshot'],severity:'high'},
8:{applies_to:['homepage','product_detail','product_landing'],methods:['named-product image inspection','visual review'],agents:['brand','content'],evidence:['screenshots','image dimensions'],severity:'medium'},
9:{applies_to:['homepage'],methods:['first viewport visual review'],agents:['ux','conversion'],evidence:['viewport screenshot','visible CTA bounding boxes'],severity:'high'},
10:{applies_to:['all'],methods:['CTA size/style inspection'],agents:['ux','conversion'],evidence:['mobile screenshot','computed styles'],severity:'high'},
12:{applies_to:['homepage'],methods:['mission/product links/social proof content review'],agents:['brand','content','conversion'],evidence:['rendered text','links','screenshots'],severity:'high'},
13:{applies_to:['product_detail','category'],methods:['PDP table/bullet/FAQ/review/offer inspection'],agents:['content','geo_aeo','checkout'],evidence:['rendered DOM','raw HTML','screenshots'],severity:'high'},
14:{applies_to:['product_landing'],methods:['three-tier landing review for each named product'],agents:['conversion','content'],evidence:['landing DOM','screenshots','public navigation'],severity:'high'},
15:{applies_to:['article','article_listing'],methods:['question headings/40-60 word answers/table/bullet/attribution review'],agents:['content','health_content','geo_aeo'],evidence:['raw HTML','visible text'],severity:'medium'},
17:{applies_to:['homepage','product_detail','product_landing'],methods:['parse JSON-LD','compare structured data with visible content'],agents:['structured_data','geo_aeo'],evidence:['JSON-LD','raw HTML','rendered text'],severity:'high'},
18:{applies_to:['all'],methods:['robots user-agent rule analysis'],agents:['seo','geo_aeo'],evidence:['robots.txt'],severity:'high'},
19:{applies_to:['all'],methods:['compare raw server HTML and rendered content'],agents:['seo','geo_aeo'],evidence:['raw HTML','rendered DOM'],severity:'high'},
21:{applies_to:['all'],methods:['mobile LAB measurement','PSI if available','overflow/image inspection'],agents:['performance','ux'],evidence:['LAB metrics','mobile screenshots'],severity:'high'},
22:{applies_to:['all','checkout'],methods:['public script/network/dataLayer inspection','manual successful-order event check'],agents:['analytics'],evidence:['network','public script identifiers','dataLayer'],severity:'high'},
23:{applies_to:['all'],methods:['HTTPS request','robots/sitemap parse','public title/meta extraction','manual backend configurability check'],agents:['seo','external_technical_diagnostic'],evidence:['HTTP response','robots/sitemap','metadata'],severity:'high'},
25:{applies_to:['checkout'],methods:['read-only checkout form inspection','manual guest order validation'],agents:['checkout','persona_high_intent'],evidence:['form controls','checkout screenshot'],severity:'high'},
26:{applies_to:['checkout'],methods:['read-only visible payment options','manual success/KiotViet integration test'],agents:['checkout','external_technical_diagnostic'],evidence:['checkout DOM','public network'],severity:'high'}
};
export function normalizeChecklist(extracted,text){
 const cells=parseChecklist(text), result=[];
 const expected=new Map(extracted.sheets.flatMap(s=>s.rows.flatMap(r=>r.cells.map(c=>[s.name+'!'+c.cell,c.text]))));
 if(cells.length!==expected.size)throw Error('Checklist cell count differs from authoritative workbook');
 for(const cell of cells){const key=cell.sheet+'!'+cell.cell;if(!expected.has(key))throw Error('Unmapped source cell '+key);if(expected.get(key)!==cell.text)throw Error('Extraction differs at '+key);}
 for(const sheet of extracted.sheets){let category='';
  for(const row of sheet.rows){const by=Object.fromEntries(row.cells.map(c=>[c.cell.replace(/\d/g,''),c]));
   if(by.A && /^[IVX]+$/.test(by.A.text)){category=by.B?.text||category;continue;}
   if(!by.C||row.row===4)continue;
   for(const c of row.cells){const got=cells.find(x=>x.sheet===sheet.name&&x.cell===c.cell);if(!got||got.text!==c.text)throw Error('Extraction differs at '+sheet.name+'!'+c.cell);}
   const d=definitions[row.row];if(!d)throw Error('Unmapped row '+row.row);
   const id='REQ-'+String(result.length+1).padStart(3,'0');
   result.push({id,source:'checklist',category,applies_to:d.applies_to,requirement:by.B.text,original_text:by.C.text,strategic_objective_original_text:by.D?.text||'',source_location:sheet.name+'!'+by.C.cell,source_row:row.row,source_cells:row.cells,verification_methods:d.methods,evidence_required:d.evidence,automation_level:'assisted',severity_default:d.severity,responsible_agents:d.agents,clauses:by.C.text.split('\n').filter(x=>x.trim()).map((t,i)=>({id:id+'-'+String(i+1).padStart(2,'0'),original_text:t})),report_section:d.agents[0]});
  }
 }return result;
}
export async function buildChecklist(){
 const extracted=JSON.parse(await fs.readFile(path.join(root,'tools/site-audit/checklist/workbook.extracted.json'),'utf8'));
 const text=await fs.readFile(path.join(root,'Checklist.txt'),'utf8'); const requirements=normalizeChecklist(extracted,text);
 const dest=path.join(root,'tools/site-audit/checklist');
 await fs.writeFile(path.join(dest,'checklist.normalized.json'),JSON.stringify(requirements,null,2));
 const coverage=requirements.map(r=>({requirement_id:r.id,original_text:r.original_text,source_location:r.source_location,verification_methods:r.verification_methods,agents:r.responsible_agents,evidence_required:r.evidence_required,report_section:r.report_section,clause_ids:r.clauses.map(c=>c.id)}));
 await fs.writeFile(path.join(dest,'coverage-matrix.json'),JSON.stringify(coverage,null,2));
 const validation={status:'PASS',requirements:requirements.length,clauses:requirements.reduce((n,r)=>n+r.clauses.length,0),source_cells:extracted.sheets.reduce((n,s)=>n+s.rows.reduce((m,r)=>m+r.cells.length,0),0),source_sha256:extracted.source_sha256,checklist_sha256:crypto.createHash('sha256').update(text).digest('hex'),original_text_preserved:true};
 await fs.writeFile(path.join(dest,'normalization-validation.json'),JSON.stringify(validation,null,2));return validation;
}
if(process.argv[1]===fileURLToPath(import.meta.url))console.log(await buildChecklist());
