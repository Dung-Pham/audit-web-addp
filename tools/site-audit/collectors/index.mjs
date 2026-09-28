import { access, copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { collectPage, launchCollector, RENDER_COLLECTION_VERSION } from './browser.mjs';
import { classifyPage, discover, parseRobots } from './crawler.mjs';
import { atomicJson, assertReadOnly, evidenceFor, json, normalizeUrl } from './shared.mjs';

/** Collect public website evidence without interacting with forms or commerce actions. */
export async function collectSite({ target, runDir, config = {}, discoveryOnly = false }) {
  if (!target || !runDir) throw new Error('collectSite requires target and runDir');
  if (!['localhost','127.0.0.1','::1'].includes(new URL(target).hostname)) {
    const { assertProductionReady } = await import('../orchestration/pipeline.mjs');
    await assertProductionReady({ ...config, target, environment:config.environment||'production' });
  }
  const normalizedTarget = normalizeUrl(target, target);
  if (!normalizedTarget) throw new Error('Target must be an HTTP(S) URL');
  assertReadOnly(target);
  const host = new URL(target).hostname;
  if (!['localhost', '127.0.0.1', '::1'].includes(host)) {
    // Dynamic import avoids a static cycle: pipeline imports collectSite.
    // This gate runs before robots, sitemap, browser, or artifact access.
    const { assertProductionReady } = await import('../orchestration/pipeline.mjs');
    await assertProductionReady({ ...config, target });
  }
  const { pages, discovery, blocked: discoveryBlocked } = await discover({ target: normalizedTarget, runDir, config });
  const evidencePath = join(runDir, 'evidence', 'index.json');
  const blockedPath = join(runDir, 'evidence', 'blocked.json');
  const pagesPath = join(runDir, 'inventory', 'pages.json');
  const evidence = await json(evidencePath, []);
  const byId = new Map(evidence.map(item => [item.evidence_id, item]));
  const blockedByKey = new Map();
  for (const item of [...await json(blockedPath, []), ...discoveryBlocked]) blockedByKey.set(JSON.stringify([item.url, item.method, item.viewport, item.reason]), item);
  const blocked = () => [...blockedByKey.values()];
  const addBlocked = items => { for (const item of items) blockedByKey.set(JSON.stringify([item.url, item.method, item.viewport, item.reason]), item); };
  if (discoveryOnly || pages.length === 0) {
    if (pages.length === 0 && discovery.status !== 'blocked') addBlocked([{ url: target, reason: 'Discovery selected zero pages' }]);
    await atomicJson(evidencePath, [...byId.values()]);
    await atomicJson(blockedPath, blocked());
    const isBlocked = discovery.status === 'blocked' || pages.length === 0;
    if (isBlocked) console.warn(`[site-audit] Discovery blocked: ${blocked().map(x => x.reason).join('; ')}`);
    return { pages, evidence: [...byId.values()], blocked: blocked(), summary: { mode: discoveryOnly ? 'discovery' : 'collect', status: isBlocked ? 'blocked' : 'complete', reason: isBlocked ? blocked().map(x => x.reason).join('; ') : null, discovered: discovery.candidates?.length ?? 0, pages: pages.length, collected: pages.filter(p => p.collection_status === 'complete').length, evidence: byId.size, blocked: blocked().length } };
  }
  const needsRenderUpgrade = pages.some(page => page.render_collection_version !== RENDER_COLLECTION_VERSION);
  if (needsRenderUpgrade && evidence.some(item => item.collector !== 'discovery') && !evidence.some(item => item.type === 'provisional_evidence_index')) {
    const snapshotArtifact = 'evidence/index.provisional-before-render-stabilization.json';
    await atomicJson(join(runDir, ...snapshotArtifact.split('/')), evidence);
    const snapshot = evidenceFor({
      url: normalizedTarget, pageType: 'sitewide', collector: 'run-history', type: 'provisional_evidence_index', viewport: null,
      artifact: snapshotArtifact,
      rawFact: { evidence_status: 'provisional_before_render_stabilization', entries: evidence.length, reason: 'Prior browser evidence may have blocked render assets or missed scroll-triggered content' }
    });
    byId.set(snapshot.evidence_id, snapshot);
    for (const item of evidence.filter(entry => ['viewport_screenshot', 'full_screenshot'].includes(entry.type))) {
      const archivedArtifact = `evidence/provisional/${item.evidence_id}.png`;
      const archivedPath = join(runDir, ...archivedArtifact.split('/'));
      await mkdir(join(runDir, 'evidence', 'provisional'), { recursive: true });
      await copyFile(join(runDir, ...item.artifact.split('/')), archivedPath);
      const provisional = evidenceFor({
        url: item.url, pageType: item.page_type, collector: 'screenshot-provisional', type: `provisional_${item.type}`, viewport: item.viewport,
        artifact: archivedArtifact,
        rawFact: { ...item.raw_fact, evidence_status: 'provisional_before_render_stabilization', original_evidence_id: item.evidence_id, original_artifact: item.artifact, archived_immutable_copy: true, unsuitable_for_visual_conclusions: true }
      });
      provisional.observed_at = item.observed_at;
      byId.set(provisional.evidence_id, provisional);
    }
    // Persist the archive boundary before any new browser capture can write.
    await atomicJson(evidencePath, [...byId.values()]);
  }
  const robots = parseRobots(discovery.robots?.text ?? '');
  async function hasReusableEvidence(page) {
    if (!['complete', 'partial'].includes(page.collection_status) || page.render_collection_version !== RENDER_COLLECTION_VERSION) return false;
    const related = [...byId.values()].filter(e => e.url === page.url && e.raw_fact?.render_collection_version === RENDER_COLLECTION_VERSION);
    if (!related.some(e => e.type === 'raw_html')) return false;
    for (const viewport of config.viewports ?? []) {
      if (!related.some(e => e.type === 'render_stabilization' && e.viewport === viewport.name)) return false;
      if (!related.some(e => e.type === 'stabilized_full_screenshot' && e.viewport === viewport.name)) return false;
    }
    const artifacts = related.filter(e => typeof e.artifact === 'string' && e.artifact.length > 0);
    if (artifacts.length !== related.length || artifacts.length === 0) return false;
    return (await Promise.all(artifacts.map(async e => {
      try { await access(join(runDir, ...e.artifact.split('/'))); return true; } catch { return false; }
    }))).every(Boolean);
  }
  let browser;
  try {
    browser = await launchCollector(config);
    for (const [index, page] of pages.entries()) {
      if (await hasReusableEvidence(page)) continue;
      console.log(`[site-audit] Collecting ${index + 1}/${pages.length}: ${page.url}`);
      for (const item of [...byId.values()]) if (item.url === page.url && item.collector !== 'discovery' && item.raw_fact?.evidence_status !== 'provisional_before_render_stabilization') byId.delete(item.evidence_id);
      try {
        const result = await collectPage({ browser, pageInfo: page, runDir, target: normalizedTarget, config, robotsAllows: url => robots.allows(url) });
        for (const item of result.evidence) byId.set(item.evidence_id, item);
        addBlocked(result.blocked);
        page.collection_status = Object.values(result.browserResults).every(x => !x.error && x.render_status === 'stabilized') ? 'complete' : 'partial';
        page.browser = result.browserResults;
        page.render_collection_version = RENDER_COLLECTION_VERSION;
        page.http_status = result.raw.status;
        page.final_url = result.raw.final_url;
        page.collected_at = new Date().toISOString();
      } catch (error) {
        page.collection_status = 'error';
        page.collection_error = error.message;
        addBlocked([{ url: page.url, reason: error.message }]);
      }
      // Each page is a resumable checkpoint. IDs are deterministic, so a retry
      // replaces incomplete entries without duplicating evidence.
      await atomicJson(evidencePath, [...byId.values()]);
      await atomicJson(blockedPath, blocked());
      await atomicJson(pagesPath, pages);
      console.log(`[site-audit] ${index + 1}/${pages.length} ${page.collection_status}: ${page.url} (${byId.size} evidence)`);
    }
  } finally { await browser?.close(); }
  const complete = pages.filter(p => p.collection_status === 'complete').length;
  const partial = pages.filter(p => p.collection_status === 'partial').length;
  return { pages, evidence: [...byId.values()], blocked: blocked(), summary: { mode: 'collect', status: pages.every(p => p.collection_status === 'complete') ? 'complete' : 'partial', complete_with_limitations: partial > 0 && complete + partial === pages.length, discovered: discovery.candidates?.length ?? 0, pages: pages.length, collected: complete, usable: complete + partial, partial, errors: pages.filter(p => p.collection_status === 'error').length, evidence: byId.size, blocked: blocked().length } };
}

/** Smoke-only collection: robots plus the caller's explicit URLs, never sitemap/link discovery. */
export async function collectRequestedPages({ target, urls, runDir, config = {} }) {
  const origin = new URL(target).origin;
  if (!Array.isArray(urls) || !urls.length || urls.length > 3) throw new Error('Explicit smoke requires 1..3 URLs');
  if (urls.some(url => new URL(url).origin !== origin)) throw new Error('Explicit smoke URLs must be same-origin');
  for (const url of urls) assertReadOnly(url);
  const robotsUrl = new URL('/robots.txt', origin).href;
  const robotsResponse = await fetch(robotsUrl, { headers: { 'User-Agent': 'SiteAuditReadOnly/1.0' }, signal: AbortSignal.timeout(20_000) });
  if (!robotsResponse.ok) throw new Error(`Robots unavailable: robots.txt status ${robotsResponse.status}`);
  const robots = parseRobots(await robotsResponse.text());
  if (urls.some(url => !robots.allows(url))) throw new Error('Robots disallow one or more requested smoke URLs');
  const pages = urls.map(url => ({ url, requested_url: url, page_type: classifyPage(url), discovered_from: ['explicit_smoke_request'], http_status: null, canonical: null, indexability: null, importance: 'critical', selection_method: 'explicit_requested_urls' }));
  const evidencePath = join(runDir, 'evidence', 'index.json'), blockedPath = join(runDir, 'evidence', 'blocked.json'), pagesPath = join(runDir, 'inventory', 'pages.json');
  const byId = new Map((await json(evidencePath, [])).map(item => [item.evidence_id, item])); const blocked = [];
  await atomicJson(join(runDir, 'inventory', 'selection.json'), { run_kind: 'smoke', selection_method: 'explicit_requested_urls', requested_urls: urls, discovery_expansion: false, robots_url: robotsUrl });
  const browser = await launchCollector(config);
  try { for (const page of pages) {
    const result = await collectPage({ browser, pageInfo: page, runDir, target, config, robotsAllows: url => robots.allows(url) });
    result.evidence.forEach(item => byId.set(item.evidence_id, item)); blocked.push(...result.blocked);
    page.collection_status = Object.values(result.browserResults).every(item => !item.error && item.render_status === 'stabilized') ? 'complete' : 'partial'; page.browser = result.browserResults; page.render_collection_version = RENDER_COLLECTION_VERSION; page.http_status = result.raw.status; page.final_url = result.raw.final_url; page.collected_at = new Date().toISOString();
    await atomicJson(evidencePath, [...byId.values()]); await atomicJson(blockedPath, blocked); await atomicJson(pagesPath, pages);
  }} finally { await browser.close(); }
  const complete = pages.filter(page => page.collection_status === 'complete').length;
  return { pages, evidence: [...byId.values()], blocked, summary: { mode: 'explicit_urls_only', status: complete === pages.length ? 'complete' : 'partial', pages: pages.length, collected: complete, partial: pages.length - complete, usable: pages.length } };
}
