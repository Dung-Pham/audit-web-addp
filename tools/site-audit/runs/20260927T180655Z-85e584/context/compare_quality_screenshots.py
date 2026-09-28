import json, pathlib, sys
import numpy as np
from PIL import Image, ImageChops
run=pathlib.Path(sys.argv[1])
summary_paths=list((run/'evidence').glob('quality-remediation-*/summary.json'))
if len(summary_paths)!=1: raise SystemExit(f'expected one summary, found {len(summary_paths)}')
sp=summary_paths[0]; data=json.loads(sp.read_text(encoding='utf-8'))
index=json.loads((run/'evidence/index.json').read_text(encoding='utf-8'))
by={(e['url'],e.get('viewport'),e['type']):e for e in index}

def compare(oldp,newp):
    a=Image.open(run/oldp).convert('RGB'); b=Image.open(run/newp).convert('RGB')
    orig=(a.size,b.size)
    def reduce(im):
        h=max(1,round(im.height*256/im.width));return im.resize((256,h),Image.Resampling.BILINEAR)
    a,b=reduce(a),reduce(b); H=max(a.height,b.height)
    ca=Image.new('RGB',(256,H),'white');cb=Image.new('RGB',(256,H),'white');ca.paste(a,(0,0));cb.paste(b,(0,0))
    aa=np.asarray(ca,dtype=np.int16);bb=np.asarray(cb,dtype=np.int16);delta=np.abs(aa-bb)
    changed=float(np.any(delta>15,axis=2).mean()*100);mean=float(delta.mean());size_change=max(abs(orig[0][0]-orig[1][0])/max(1,orig[0][0]),abs(orig[0][1]-orig[1][1])/max(1,orig[0][1]))*100
    return {'old_dimensions':list(orig[0]),'new_dimensions':list(orig[1]),'downscaled_pixels_over_15_percent':round(changed,3),'mean_channel_difference':round(mean,3),'dimension_delta_percent':round(size_change,3),'material':bool(changed>2 or mean>=1.5 or size_change>=1)}
comps=[]
for c in data['captures']:
    u,v=c['url'],c['viewport']; newv=c.get('screenshots',{}).get('viewport');newf=c.get('screenshots',{}).get('full')
    for typ,newp in [('initial_viewport_screenshot',newv),('initial_full_screenshot',newf)]:
        old=by.get((u,v,typ))
        if old and newp:
            try: comps.append({'url':u,'viewport':v,'capture_type':typ,'comparison':compare(old['artifact'],newp)})
            except Exception as e: comps.append({'url':u,'viewport':v,'capture_type':typ,'error':str(e)})

def is_asset(url,kind):
    s=url.lower().split('?',1)[0]
    ext={'stylesheet':('.css',),'font':('.woff','.woff2','.ttf','.otf','.eot'),'image':('.jpg','.jpeg','.png','.gif','.webp','.avif','.svg','.ico'),'script':('.js','.mjs')}[kind]
    return any(s.endswith(x) for x in ext)
actual=[];blocked=[]
for c in data['captures']:
    seen=set()
    for f in c.get('failed_resources',[]):
        k=(f.get('url'),f.get('method'))
        if f.get('blocked_by_audit'):
            if k not in seen: blocked.append(f);seen.add(k)
            continue
        if any(x.get('blocked_by_audit') and (x.get('url'),x.get('method'))==k for x in c.get('failed_resources',[])): continue
        if k in seen: continue
        actual.append(f);seen.add(k)
counts={kind:sum(is_asset(f.get('url') or '',kind) for f in actual) for kind in ['stylesheet','font','image','script']}
unique_by={kind:sorted({f.get('url') for f in actual if is_asset(f.get('url') or '',kind)}) for kind in counts}
material=[x for x in comps if x.get('comparison',{}).get('material')]
material_pages=sorted({x['url'] for x in material})
data['pixel_comparison']={'method':'PIL RGB images reduced to 256px wide, white-padded to equal height; material if >2% pixels have channel delta >15, mean channel delta >=1.5, or original dimension delta >=1%.','comparisons':len(comps),'errors':[x for x in comps if 'error' in x],'material_comparison_count':len(material),'materially_changed_pages':material_pages,'material_comparisons':material}
data['remaining_actual_failed_resource_occurrences']=counts
data['remaining_actual_failed_resource_urls']=unique_by
data['audit_blocked_resource_occurrences']=len(blocked)
data['audit_blocked_resource_urls']=sorted({f.get('url') for f in blocked})
data['remaining_partial_pages']=sum(x.get('status')!='render_complete' for x in data['pages_recollected'])
data['render_complete_pages']=len(data['pages_recollected'])-data['remaining_partial_pages']
data['pages_with_scroll_triggered_content_confirmed']=data.get('pages_with_scroll_signals',[])
data['render_complete_assessment']='No page promoted: screenshots exist after bounded full-document scrolling, but audit-blocked requests and residual resource/image failures remain.'
sp.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps({'comparisons':len(comps),'materialComparisons':len(material),'materialPages':material_pages,'failedOccurrences':counts,'failedUniqueUrls':unique_by,'auditBlockedOccurrences':len(blocked),'auditBlockedUrls':len(data['audit_blocked_resource_urls']),'pagesRecollected':data['pages_recollected_count'],'renderComplete':data['render_complete_pages'],'remainingPartial':data['remaining_partial_pages'],'scrollSignalPages':len(data['pages_with_scroll_triggered_content_confirmed'])},ensure_ascii=False,indent=2))
