"""Read-only OOXML extraction. Does not edit or recalculate the source workbook."""
from pathlib import Path
import zipfile, xml.etree.ElementTree as ET, json, hashlib, sys
sys.stdout.reconfigure(encoding='utf-8')

ROOT = Path(__file__).resolve().parents[2]
source = next((ROOT / 'docs/audit-prompts').glob('*.xlsx'))
ns = {'m':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
with zipfile.ZipFile(source) as z:
    shared=[]
    if 'xl/sharedStrings.xml' in z.namelist():
        shared=[''.join(si.itertext()) for si in ET.fromstring(z.read('xl/sharedStrings.xml'))]
    rels={r.attrib['Id']:r.attrib['Target'] for r in ET.fromstring(z.read('xl/_rels/workbook.xml.rels'))}
    sheets=[]
    for sh in ET.fromstring(z.read('xl/workbook.xml')).find('m:sheets',ns):
        target=rels[sh.attrib['{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id']]
        target=target.lstrip('/') if target.startswith('/') else 'xl/'+target
        xml=ET.fromstring(z.read(target)); rows=[]
        for row in xml.findall('.//m:sheetData/m:row',ns):
            cells=[]
            for c in row:
                v=c.find('m:v',ns); t=c.attrib.get('t'); text=v.text if v is not None else ''
                if t=='s': text=shared[int(text)]
                elif t=='inlineStr': text=''.join(c.find('m:is',ns).itertext())
                if text not in ('',None): cells.append({'cell':c.attrib['r'],'text':text,'type':t or 'n'})
            if cells: rows.append({'row':int(row.attrib['r']),'cells':cells})
        sheets.append({'name':sh.attrib['name'],'rows':rows,'merged_cells':[x.attrib['ref'] for x in xml.findall('.//m:mergeCell',ns)]})
data={'source':str(source),'source_sha256':hashlib.sha256(source.read_bytes()).hexdigest(),'authorization':'User approved Excel as authoritative source and exact extraction in this session.','sheets':sheets}
out=ROOT/'tools/site-audit/checklist'; out.mkdir(parents=True,exist_ok=True)
(out/'workbook.extracted.json').write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
lines=['# Authoritative checklist extracted from '+source.name,'# Cell contents below are preserved verbatim. Cell references and headings are extraction metadata.','']
for sheet in sheets:
    lines.append('## SHEET: '+sheet['name'])
    for row in sheet['rows']:
        for c in row['cells']: lines.extend(['['+sheet['name']+'!'+c['cell']+']',c['text']])
    lines.append('')
(ROOT/'Checklist.txt').write_text('\n'.join(lines),encoding='utf-8',newline='\n')
print(json.dumps({'sheets':len(sheets),'nonempty_cells':sum(len(r['cells']) for s in sheets for r in s['rows']),'source_sha256':data['source_sha256']},ensure_ascii=False))
