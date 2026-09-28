import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { collectSite } from '../collectors/index.mjs';
import { classifyPage, parseRobots } from '../collectors/crawler.mjs';
import { safetyReason } from '../collectors/shared.mjs';
import { startFixture } from '../fixtures/site.mjs';
import { validateSchema } from '../orchestration/core.mjs';
import { createServer } from 'node:http';
import { boundedTimeout, launchCollector,installReadOnlyBrowserGuard, scrollForRender } from '../collectors/browser.mjs';

const readJson = async path => JSON.parse(await readFile(path, 'utf8'));

test('redirect guard keeps source cookies and authorization away from a second local origin', {timeout:30_000},async()=>{
 const received=[];const destination=createServer((req,res)=>{received.push({path:req.url,cookie:req.headers.cookie||null,authorization:req.headers.authorization||null});if(req.url==='/asset.svg'){res.setHeader('Content-Type','image/svg+xml');res.end('<svg xmlns="http://www.w3.org/2000/svg" width="2" height="2"/>');return;}res.end('EXTERNAL');});
 await new Promise(resolve=>destination.listen(0,'127.0.0.2',resolve));
 let sourceCookie=null;const source=createServer((req,res)=>{
  if(req.url==='/'){res.setHeader('Set-Cookie','secret=fixture-token; Path=/');res.setHeader('Content-Type','text/html');res.end(`<img src="http://127.0.0.2:${destination.address().port}/asset.svg"><script>fetch("/start").catch(()=>{});fetch("/safe").catch(()=>{})</script>`);return;}
  if(req.url==='/start'){sourceCookie=req.headers.cookie||null;res.writeHead(302,{Location:`http://127.0.0.2:${destination.address().port}/landing`});res.end();return;}
  res.end('SAFE');
 });
 await new Promise(resolve=>source.listen(0,'127.0.0.1',resolve));const target=`http://127.0.0.1:${source.address().port}`;const browser=await launchCollector();
 try{const context=await browser.newContext({serviceWorkers:'block',extraHTTPHeaders:{Authorization:'Bearer fixture-secret'}});const blocked=[];await installReadOnlyBrowserGuard({context,origin:target,onBlocked:item=>blocked.push(item)});const page=await context.newPage();await page.goto(target,{waitUntil:'load'});await page.waitForTimeout(350);assert.match(sourceCookie||'',/secret=fixture-token/);assert.deepEqual(received.map(x=>x.path),['/asset.svg']);assert.equal(received[0].cookie,null);assert.equal(received[0].authorization,null);assert.ok(blocked.some(x=>x.reason.includes('cross-origin credential boundary')&&x.url.includes('127.0.0.2')));await context.close();}
 finally{await browser.close();await new Promise(resolve=>source.close(resolve));await new Promise(resolve=>destination.close(resolve));}
});

test('safety and page classification cover dangerous actions and named products', () => {
  assert.equal(boundedTimeout(0, 25_000, 1_000, 60_000), 25_000);
  assert.equal(boundedTimeout(-1, 8_000, 500, 20_000), 500);
  assert.equal(boundedTimeout(999_999, 8_000, 500, 20_000), 20_000);
  assert.match(safetyReason('https://example.test/?action=delete'), /mutating/);
  assert.match(safetyReason('https://example.test/cart/add?sku=1'), /mutating/);
  assert.match(safetyReason('https://example.test/checkout/place-order'), /mutating/);
  assert.match(safetyReason('https://example.test/contact', 'POST'), /unsafe method/);
  assert.equal(safetyReason('https://example.test/blog/post/example-article'), null);
  assert.equal(safetyReason('https://example.test/blog/post/how-to-read-this'), null);
  assert.equal(safetyReason('https://example.test/cart'), null);
  for (const slug of ['glucare-plus', 'vien-an-duong', 'dovital']) assert.equal(classifyPage(`https://example.test/${slug}`), 'product_detail');
  const rules = parseRobots('User-agent: *\nDisallow: /private\nAllow: /private/public\nCrawl-delay: 1');
  assert.equal(rules.allows('https://example.test/private/x'), false);
  assert.equal(rules.allows('https://example.test/private/public'), true);
  assert.equal(rules.crawlDelayMs, 1000);
});

test('localhost discovery and Chrome collection are read-only, complete, and resumable', { timeout: 120_000 }, async t => {
  const fixture = await startFixture();
  const runDir = await mkdtemp(join(tmpdir(), 'site-audit-collector-'));
  t.after(async () => {
    await fixture.close();
    if (resolve(runDir).startsWith(resolve(tmpdir()) + '\\')) await rm(runDir, { recursive: true, force: true });
  });
  const config = { maxPages: 6, maxDepth: 2, requestDelayMs: 0, settleMs: 100, browserExecutable: 'C:/Program Files/Google/Chrome/Application/chrome.exe' };
  const discoveryOnly = await collectSite({ target: fixture.target, runDir, config, discoveryOnly: true });
  assert.equal(discoveryOnly.evidence.filter(e => e.collector !== 'discovery').length, 0);
  assert.ok(discoveryOnly.pages.some(p => p.page_type === 'homepage'));
  assert.ok(discoveryOnly.pages.some(p => p.page_type === 'product_detail'));
  assert.ok(discoveryOnly.pages.every(p => p.url.startsWith(fixture.target)));
  const discovery = await readJson(join(runDir, 'inventory', 'discovery.json'));
  assert.equal(discovery.sitemap.some(s => s.kind === 'sitemapindex'), true);
  assert.equal(discovery.sitemap.some(s => s.kind === 'urlset'), true);
  const sourceEvidence = discoveryOnly.evidence.filter(e => e.collector === 'discovery');
  assert.equal(sourceEvidence.filter(e => e.type === 'robots_txt').length, 1);
  assert.equal(sourceEvidence.filter(e => e.type === 'sitemap_xml').length, 2);
  for (const item of sourceEvidence) {
    assert.equal(validateSchema('evidence', item).valid, true);
    assert.ok((await stat(join(runDir, item.artifact))).size > 0);
  }
  assert.ok(discovery.blocked.some(b => /robots/.test(b.reason)));
  assert.ok(discovery.blocked.some(b => /Unsafe redirect/.test(b.reason)));

  const result = await collectSite({ target: fixture.target, runDir, config });
  assert.equal(result.pages.length, discoveryOnly.pages.length);
  assert.equal(result.summary.collected, result.pages.length);
  assert.equal(new Set(result.evidence.map(e => e.evidence_id)).size, result.evidence.length);
  assert.ok(result.evidence.some(e => e.type === 'raw_html'));
  assert.ok(result.evidence.some(e => e.type === 'rendered_html' && e.viewport === 'mobile'));
  assert.ok(result.evidence.some(e => e.type === 'stabilized_full_screenshot' && e.viewport === 'desktop'));
  assert.ok(result.evidence.some(e => e.type === 'initial_viewport_screenshot' && e.viewport === 'mobile'));
  assert.ok(result.evidence.some(e => e.type === 'render_stabilization'));
  assert.ok(result.evidence.some(e => e.type === 'accessibility'));
  for (const item of result.evidence) {
    assert.equal(validateSchema('evidence', item).valid, true);
    assert.ok(item.evidence_id.startsWith('EVD-'));
    assert.ok(item.observed_at);
    assert.ok((await stat(join(runDir, ...item.artifact.split('/')))).size >= 0);
  }
  const homeDomEvidence = result.evidence.find(e => e.url === fixture.target && e.type === 'visible_controls' && e.viewport === 'desktop');
  assert.ok(homeDomEvidence);
  const homeDom = await readJson(join(runDir, homeDomEvidence.artifact));
  assert.ok(homeDom.visible_text.includes('Welcome'));
  assert.ok(homeDom.buttons.some(b => b.text === 'Buy' && b.rectangle.width > 0 && b.typography.font_size && b.colors.background_color));
  assert.ok(homeDom.forms.some(f => f.method.toLowerCase() === 'post'));
  const networkEvidence = result.evidence.find(e => e.url === fixture.target && e.type === 'network_log' && e.viewport === 'desktop');
  const network = await readJson(join(runDir, networkEvidence.artifact));
  assert.ok(network.some(x => x.kind === 'blocked' && x.method === 'POST' && x.audit_induced));
  assert.ok(network.some(x => x.kind === 'blocked' && x.reason === 'mutating GET endpoint'));
  assert.ok(network.some(x => x.kind === 'blocked' && /telemetry/.test(x.reason)));
  const perfEvidence = result.evidence.find(e => e.type === 'lab_metrics');
  const perf = await readJson(join(runDir, perfEvidence.artifact));
  assert.equal(perf.source, 'LAB');
  assert.equal(perf.inp.available, false);
  assert.equal(perf.field.available, false);
  assert.equal(perf.lighthouse_scores.available, false);
  assert.equal(typeof perf.request_count, 'number');
  assert.equal(fixture.requests.some(r => r.method !== 'GET' || ['/private', '/cart/add', '/checkout/place-order'].includes(r.path) || r.search.includes('action=')), false);

  const requestCount = fixture.requests.length;
  const resumed = await collectSite({ target: fixture.target, runDir, config });
  assert.equal(resumed.evidence.length, result.evidence.length);
  assert.equal(fixture.requests.length, requestCount);
  assert.deepEqual(await readJson(join(runDir, 'evidence', 'index.json')), resumed.evidence);
});

test('render stabilization loads static assets, scrolls real lazy content, handles failures, and captures afterward', { timeout: 45_000 }, async t => {
  const fixture = await startFixture();
  const runDir = await mkdtemp(join(tmpdir(), 'site-audit-render-stabilization-'));
  t.after(async () => {
    await fixture.close();
    if (resolve(runDir).startsWith(resolve(tmpdir()) + '\\')) await rm(runDir, { recursive: true, force: true });
  });
  const started = Date.now();
  const target = new URL('/render-stabilization', fixture.target).href;
  const result = await collectSite({ target, runDir, config: {
    maxPages: 1, maxDepth: 0, requestDelayMs: 0, settleMs: 10,
    renderAssetTimeoutMs: 2_000, animationSettleTimeoutMs: 1_000,
    scrollPauseMs: 40, maxScrollIterations: 30,
    browserExecutable: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    viewports: [{ name: 'desktop', width: 900, height: 600 }]
  } });
  assert.ok(Date.now() - started < 30_000, 'failed assets must not create an unbounded wait');
  const paths = fixture.requests.map(request => request.path);
  for (const required of ['/assets/delayed.css', '/assets/delayed.woff2', '/assets/delayed-image.svg', '/assets/missing.png', '/assets/invalid-image.png', '/assets/ajax-post.js']) assert.ok(paths.includes(required), `${required} was not loaded`);
  assert.equal(fixture.requests.some(request => request.method !== 'GET'), false);
  const stabilizationEvidence = result.evidence.find(item => item.type === 'render_stabilization');
  assert.ok(stabilizationEvidence);
  const state = await readJson(join(runDir, stabilizationEvidence.artifact));
  assert.equal(result.pages[0].collection_status, 'partial');
  assert.equal(state.render_complete, false);
  assert.ok(state.render_reason_codes.includes('render_partial_visible_asset_failure'));
  assert.ok(state.resource_health.failed_resources >= 1);
  assert.equal(state.audit_induced_scroll, true);
  assert.equal(state.scroll.reached_bottom, true);
  assert.equal(state.scroll.height_increased, true);
  assert.equal(state.scroll.returned_to_top, true);
  assert.ok(state.after_scroll.reveal_markers >= 1, 'IntersectionObserver reveal did not run');
  assert.ok(state.after_scroll.dynamic_height_markers >= 1, 'dynamic document growth did not run');
  assert.ok(state.after_scroll.stylesheets.some(sheet => sheet.href?.includes('/assets/delayed.css') && sheet.rule_count > 0));
  assert.ok(state.post_scroll_assets.images.complete >= 1, 'lazy image did not settle');
  assert.equal(state.image_diagnostics.images_declared_at_start >= 3, true, 'predeclared lazy images must be inventoried before scrolling');
  assert.ok(state.image_diagnostics.image_state_transitions.some(item => item.final.src?.endsWith('/assets/delayed-image.svg') && item.transitions.includes('pending_to_loaded')), 'predeclared lazy image transition was not captured');
  assert.ok(state.scroll.samples.some(sample => sample.relevant_dom_mutation_count > 0), 'material observer reveal/dynamic-height mutations were not recorded');
  assert.ok(state.scroll.samples.every(sample => Number.isFinite(sample.distance_to_bottom) && Number.isFinite(sample.budget_remaining_ms)), 'compact per-step render diagnostics are incomplete');
  assert.ok(state.scroll.final_settle_reserve_ms > 0 && state.scroll.height_tolerance_px === 2, 'v3 bottom settlement contract missing');
  assert.ok(Number.isFinite(state.scroll.final_position.remaining_pixels), 'final bottom position diagnostics missing');
  assert.ok(state.scroll.final_stability.historical_material_mutations > 0, 'render history mutations missing');
  assert.equal(state.scroll.final_stability.final_window_material_mutations, 0, 'historical scroll mutations leaked into final window');
  assert.ok(state.post_scroll_assets.fonts.failed >= 1, 'HTTP 200 invalid font was not recorded as a decode failure');
  assert.ok(state.post_scroll_assets.images.failed >= 2, '404 and HTTP 200 invalid images were not recorded');
  assert.ok(state.after_scroll.images.some(image => image.src?.endsWith('/assets/invalid-image.png') && image.failed));
  assert.ok(state.decode_failures.fonts >= 1 && state.decode_failures.images >= 2);
  assert.ok(state.failed_resources.some(item => item.url.endsWith('/assets/missing.png') && item.status === 404));
  assert.ok(state.failed_visible_assets.some(item => item.url.endsWith('/assets/missing.png') && item.tag === 'img'), 'failed rendered image must have URL/type diagnostics');
  assert.equal(state.final_capture_after_stabilization, true);
  assert.ok(state.scroll.samples.some(sample => sample.assets?.images.discovered_after_start >= 0));
  for (const type of ['initial_viewport_screenshot', 'initial_full_screenshot', 'stabilized_viewport_screenshot', 'stabilized_full_screenshot']) assert.ok(result.evidence.some(item => item.type === type));
  const finalShot = result.evidence.find(item => item.type === 'stabilized_full_screenshot');
  const initialShot = result.evidence.find(item => item.type === 'initial_full_screenshot');
  assert.equal(initialShot.raw_fact.capture_phase, 'first_viewport');
  assert.equal(finalShot.raw_fact.capture_phase, 'scroll_stabilized');
  assert.equal(finalShot.raw_fact.captured_after_stabilization, true);
  assert.equal(finalShot.raw_fact.stabilization_evidence_id, stabilizationEvidence.evidence_id);
  assert.notDeepEqual(await readFile(join(runDir, initialShot.artifact)), await readFile(join(runDir, finalShot.artifact)), 'stabilized fixture screenshot should reflect post-scroll rendering');
  const perf = await readJson(join(runDir, result.evidence.find(item => item.type === 'lab_metrics').artifact));
  assert.equal(perf.capture_phase, 'performance_clean_load');
  assert.equal(perf.synthetic_scroll_before_measurement, false);
  assert.equal(result.evidence.find(item => item.type === 'lab_metrics').raw_fact.synthetic_scroll_before_measurement, false);
  const requestsBeforeResume = fixture.requests.length;
  const resumedPartial = await collectSite({ target, runDir, config: {
    maxPages: 1, maxDepth: 0, requestDelayMs: 0, settleMs: 10,
    renderAssetTimeoutMs: 2_000, animationSettleTimeoutMs: 1_000,
    scrollPauseMs: 40, maxScrollIterations: 30,
    browserExecutable: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    viewports: [{ name: 'desktop', width: 900, height: 600 }]
  } });
  assert.equal(resumedPartial.pages[0].collection_status, 'partial');
  assert.equal(fixture.requests.length, requestsBeforeResume, 'current-version partial evidence should be reused without another site request');
  const network = await readJson(join(runDir, result.evidence.find(item => item.type === 'network_log').artifact));
  assert.ok(network.some(item => item.kind === 'response' && item.url.includes('/assets/delayed.css?v=1') && item.status === 200), 'robots-disallowed stylesheet was not allowed as a render asset');
  assert.ok(network.some(item => item.kind === 'response' && item.url.endsWith('/assets/ajax-post.js') && item.status === 200), 'static action-named script was incorrectly blocked');

  // Simulate a pre-stabilization run and verify its screenshot/index remain
  // reviewable while the page is recollected under the new render version.
  const pagesPath = join(runDir, 'inventory', 'pages.json');
  const pages = await readJson(pagesPath);
  delete pages[0].render_collection_version;
  await writeFile(pagesPath, JSON.stringify(pages, null, 2));
  const indexPath = join(runDir, 'evidence', 'index.json');
  const index = await readJson(indexPath);
  const historical = { ...index.find(item => item.type === 'initial_full_screenshot'), evidence_id: 'EVD-HISTORICAL-RENDER', collector: 'screenshot', type: 'full_screenshot' };
  const historicalBytes = await readFile(join(runDir, historical.artifact));
  index.push(historical);
  await writeFile(indexPath, JSON.stringify(index, null, 2));
  const recollected = await collectSite({ target, runDir, config: {
    maxPages: 1, maxDepth: 0, requestDelayMs: 0, settleMs: 10,
    renderAssetTimeoutMs: 2_000, animationSettleTimeoutMs: 1_000,
    scrollPauseMs: 40, maxScrollIterations: 30,
    browserExecutable: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    viewports: [{ name: 'desktop', width: 700, height: 600 }]
  } });
  assert.ok(recollected.evidence.some(item => item.type === 'provisional_evidence_index'));
  const provisionalShot = recollected.evidence.find(item => item.type === 'provisional_full_screenshot' && item.raw_fact.original_evidence_id === historical.evidence_id);
  assert.ok(provisionalShot?.raw_fact.unsuitable_for_visual_conclusions);
  assert.equal(provisionalShot.raw_fact.archived_immutable_copy, true);
  assert.ok(await stat(join(runDir, 'evidence', 'index.provisional-before-render-stabilization.json')));
  assert.deepEqual(await readFile(join(runDir, provisionalShot.artifact)), historicalBytes, 'archived historical screenshot bytes changed during recollection');
  assert.notDeepEqual(await readFile(join(runDir, historical.artifact)), historicalBytes, 'collision regression did not produce different new screenshot bytes');

  const cappedPages = await readJson(pagesPath);
  delete cappedPages[0].render_collection_version;
  await writeFile(pagesPath, JSON.stringify(cappedPages, null, 2));
  const capped = await collectSite({ target, runDir, config: {
    maxPages: 1, maxDepth: 0, requestDelayMs: 0, settleMs: 10,
    renderAssetTimeoutMs: 2_000, animationSettleTimeoutMs: 1_000,
    scrollPauseMs: 40, maxScrollIterations: 1,
    browserExecutable: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    viewports: [{ name: 'desktop', width: 900, height: 600 }]
  } });
  const cappedState = await readJson(join(runDir, capped.evidence.find(item => item.type === 'render_stabilization').artifact));
  assert.equal(cappedState.scroll.reached_bottom, false);
  assert.equal(cappedState.render_complete, false);
  assert.equal(capped.pages[0].collection_status, 'partial');
  assert.equal(capped.summary.status, 'partial');
});

test('render v3.1 reaches long mobile bottom after reserve threshold and separates final stability from history', { timeout: 30_000 }, async () => {
  const browser = await launchCollector();
  try {
    const context = await browser.newContext({ viewport: { width: 390, height: 300 } });
    const page = await context.newPage();
    await page.setContent(`<!doctype html><main><div style="height:6000px">long content</div><div id="bottom">bottom</div><script>const bottom=document.querySelector('#bottom');new IntersectionObserver(entries=>{if(entries[0].isIntersecting&&!window.done){window.done=true;const extra=document.createElement('div');extra.style.height='800px';extra.textContent='late reveal';document.body.append(extra)}}).observe(bottom)</script></main>`);
    const scroll = await scrollForRender(page, { pauseMs: 25, maxIterations: 40, totalBudgetMs: 6_000, finalSettleReserveMs: 5_000, stepStabilityTimeoutMs: 250, stabilitySampleMs: 25, stabilityConsecutiveSamples: 1 });
    assert.equal(scroll.reached_bottom, true);
    assert.equal(scroll.final_position.remaining_pixels <= 2, true);
    assert.equal(scroll.stop_reason, 'stable_bottom_passes');
    assert.ok(scroll.samples.some(sample => sample.entered_minimum_dwell_progress_mode), 'reserve threshold did not switch to bounded progress mode');
    assert.ok(scroll.final_stability.historical_material_mutations > 0);
    assert.equal(scroll.final_stability.final_window_material_mutations, 0);
    await context.close();
  } finally { await browser.close(); }
});

test('render v3.1 retains unstable-dom evidence for a material final-window mutation', { timeout: 30_000 }, async () => {
  const browser = await launchCollector();
  try {
    const context = await browser.newContext({ viewport: { width: 390, height: 300 } });
    const page = await context.newPage();
    await page.setContent(`<!doctype html><main><div style="height:1200px">content</div><p id="changing">0</p><script>let i=0;setInterval(()=>{const n=document.createElement('span');n.textContent=String(++i);document.querySelector('#changing').replaceChildren(n)},30)</script></main>`);
    const scroll = await scrollForRender(page, { pauseMs: 100, maxIterations: 12, totalBudgetMs: 3_000, finalSettleReserveMs: 1_000, stepStabilityTimeoutMs: 150, stabilitySampleMs: 25, stabilityConsecutiveSamples: 1, bottomPassCount: 2 });
    assert.ok(scroll.final_stability.final_window_material_mutations > 0);
    assert.ok(scroll.final_stability.final_mutation_signatures.some(signature => signature.type === 'childList' && signature.target_tag), 'bounded final mutation signature missing target detail');
    assert.ok(scroll.final_stability.final_sample_timeline.every(sample => Array.isArray(sample.reset_reasons) && typeof sample.material_mutation_delta === 'number'), 'stable reset diagnostics were not persisted');
    await context.close();
  } finally { await browser.close(); }
});

test('robots server failure blocks collection with explicit status and no page fetches', async t => {
  const fixture = await startFixture({ robotsStatus: 503 });
  const runDir = await mkdtemp(join(tmpdir(), 'site-audit-robots-'));
  t.after(async () => {
    await fixture.close();
    if (resolve(runDir).startsWith(resolve(tmpdir()) + '\\')) await rm(runDir, { recursive: true, force: true });
  });
  const result = await collectSite({ target: fixture.target, runDir, config: { requestDelayMs: 0 } });
  assert.equal(result.summary.status, 'blocked');
  assert.equal(result.pages.length, 0);
  assert.ok(result.blocked.some(x => /Robots unavailable/.test(x.reason)));
  assert.deepEqual(fixture.requests.map(x => x.path), ['/robots.txt']);
  assert.equal((await readJson(join(runDir, 'inventory', 'discovery.json'))).complete, false);
});

test('Chrome blocks script-initiated cross-origin navigation', { timeout: 30_000 }, async t => {
  const fixture = await startFixture();
  const runDir = await mkdtemp(join(tmpdir(), 'site-audit-navigation-'));
  t.after(async () => {
    await fixture.close();
    if (resolve(runDir).startsWith(resolve(tmpdir()) + '\\')) await rm(runDir, { recursive: true, force: true });
  });
  const result = await collectSite({ target: new URL('/browser-cross-origin', fixture.target).href, runDir, config: { maxPages: 1, maxDepth: 0, requestDelayMs: 0, settleMs: 350, browserExecutable: 'C:/Program Files/Google/Chrome/Application/chrome.exe', viewports: [{ name: 'desktop', width: 1000, height: 800 }] } });
  assert.equal(result.pages.length, 1);
  assert.ok(result.blocked.some(x => x.reason === 'cross-origin navigation blocked' && x.audit_induced));
  const log = result.evidence.find(x => x.type === 'network_log');
  assert.ok((await readJson(join(runDir, log.artifact))).some(x => x.kind === 'blocked' && x.reason === 'cross-origin navigation blocked'));
});

test('context guard blocks popup POST, unsafe redirect, WebSocket, and command query while allowing safe GET', { timeout: 30_000 }, async t => {
  const fixture = await startFixture();
  const runDir = await mkdtemp(join(tmpdir(), 'site-audit-boundary-'));
  t.after(async () => {
    await fixture.close();
    if (resolve(runDir).startsWith(resolve(tmpdir()) + '\\')) await rm(runDir, { recursive: true, force: true });
  });
  const target = new URL('/attack-browser', fixture.target).href;
  const result = await collectSite({ target, runDir, config: { maxPages: 1, maxDepth: 0, requestDelayMs: 0, settleMs: 800, browserExecutable: 'C:/Program Files/Google/Chrome/Application/chrome.exe', viewports: [{ name: 'desktop', width: 1000, height: 800 }] } });
  const reached = fixture.requests.map(x => x.path);
  assert.ok(reached.includes('/popup-attack'), 'popup fixture must execute');
  assert.ok(reached.includes('/start'), 'redirect source must be requested');
  assert.ok(reached.includes('/two-hop-start') && reached.includes('/two-hop-middle'), 'both safe redirect hops must be requested');
  assert.ok(reached.includes('/safe-get'), 'ordinary GET must work');
  assert.ok(reached.includes('/safe-final'), 'safe redirect must work');
  for (const path of ['/mutation', '/delete', '/endpoint', '/checkout/confirm', '/checkout/confirm.js', '/socket']) assert.equal(reached.includes(path), false, `${path} reached the server`);
  const reasons = result.blocked.map(x => x.reason);
  assert.ok(reasons.some(x => x === 'unsafe method POST'));
  assert.ok(reasons.some(x => x.startsWith('redirect blocked:')));
  assert.ok(result.blocked.some(x => x.redirected_from?.endsWith('/two-hop-middle') && x.url.endsWith('/delete')));
  assert.ok(reasons.some(x => x === 'mutating GET query'));
  assert.ok(reasons.some(x => x.includes('Unsafe transactional endpoint') && x.includes('/checkout/confirm')));
  assert.ok(reasons.some(x => x === 'websocket blocked'));
  // Guard-blocked mutation attempts are safety outcomes, not render failures.
  // The fixture's observable content and bounded render collection are complete.
  assert.equal(result.summary.status, 'complete');
  assert.equal(result.pages[0].collection_status, 'complete');
  assert.equal(result.pages[0].browser.desktop.render_status, 'stabilized');
  const network = await readJson(join(runDir, result.evidence.find(x => x.type === 'network_log').artifact));
  assert.ok(network.filter(x => x.kind === 'blocked').length >= 4);
  const consoleEvents = await readJson(join(runDir, result.evidence.find(x => x.type === 'console_log').artifact));
  assert.ok(consoleEvents.some(x => x.text.includes('popup marker') && x.page_url.endsWith('/popup-attack')));
});

test('direct collectSite API applies production gate before network or files', async () => {
  const runDir = join(tmpdir(), `site-audit-gate-${process.pid}-${Date.now()}`);
  await assert.rejects(
    collectSite({ target: 'https://example.invalid/', runDir, config: { environment: 'production' } }),
    /Production audit target\/environment must match frozen gate/
  );
  await assert.rejects(stat(runDir), { code: 'ENOENT' });
});

test('raw discovery rejects an unsafe second redirect hop', async t => {
  const fixture = await startFixture();
  const runDir = await mkdtemp(join(tmpdir(), 'site-audit-raw-redirect-'));
  t.after(async () => {
    await fixture.close();
    if (resolve(runDir).startsWith(resolve(tmpdir()) + '\\')) await rm(runDir, { recursive: true, force: true });
  });
  const target = new URL('/two-hop-start', fixture.target).href;
  const result = await collectSite({ target, runDir, config: { maxPages: 1, maxDepth: 0, requestDelayMs: 0 }, discoveryOnly: true });
  assert.equal(result.pages.length, 0);
  assert.equal(result.summary.status, 'blocked');
  assert.ok(result.blocked.some(x => /Unsafe redirect/.test(x.reason)));
  const reached = fixture.requests.map(x => x.path);
  assert.ok(reached.includes('/two-hop-start') && reached.includes('/two-hop-middle'));
  assert.equal(reached.includes('/delete'), false);
});
