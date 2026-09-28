import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs/promises';import path from 'node:path';
import {root,parseChecklist,normalizeChecklist} from '../checklist/normalize.mjs';
const raw=JSON.parse(await fs.readFile(path.join(root,'tools/site-audit/checklist/workbook.extracted.json'),'utf8'));
const txt=await fs.readFile(path.join(root,'Checklist.txt'),'utf8');
test('all 17 business rows and original cell texts preserved, unique stable IDs',()=>{const req=normalizeChecklist(raw,txt);assert.equal(req.length,17);assert.equal(new Set(req.map(r=>r.id)).size,17);for(const r of req){assert.equal(r.source,'checklist');const cell=raw.sheets[0].rows.find(x=>x.row===r.source_row).cells.find(c=>c.cell.startsWith('C'));assert.equal(r.original_text,cell.text);assert.ok(r.clauses.length);assert.ok(r.verification_methods.length);assert.ok(r.source_location);}});
test('all source cells extracted including strategic objectives and headings',()=>{const cells=parseChecklist(txt);for(const s of raw.sheets)for(const r of s.rows)for(const c of r.cells)assert.equal(cells.find(x=>x.sheet===s.name&&x.cell===c.cell)?.text,c.text);});
test('normalization rejects silent requirement mutation',()=>assert.throws(()=>normalizeChecklist(raw,txt.replace('85+','90+')),/Extraction differs/));
test('normalization rejects a newly appended unmapped source cell',()=>assert.throws(()=>normalizeChecklist(raw,txt+'\n[Trang tính1!E27]\nNew business criterion'),/cell count|Unmapped source cell/));
