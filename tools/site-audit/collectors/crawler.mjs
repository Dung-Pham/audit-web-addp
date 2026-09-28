import { load } from 'cheerio';
import { join } from 'node:path';
import { access } from 'node:fs/promises';
import { artifact, atomicJson, assertReadOnly, evidenceFor, hash, inspectedUrl, json, normalizeUrl, safetyReason } from './shared.mjs';

const USER_AGENT = 'SiteAuditReadOnly/1.0';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function ruleRegex(pattern) {
  const end = pattern.endsWith('$');
  const text = (end ? pattern.slice(0, -1) : pattern)
    .split('*').map(s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('.*');
  return new RegExp(`^${text}${end ? '$' : ''}`);
}

export function parseRobots(content, agent = USER_AGENT) {
  const groups = [];
  const sitemaps = [];
  let current = null;
  let lastWasAgent = false;
  for (const original of content.split(/\r?\n/)) {
    const line = original.split('#', 1)[0].trim();
    const match = /^([\w-]+)\s*:\s*(.*)$/.exec(line);
    if (!match) continue;
    const key = match[1].toLowerCase(), value = match[2].trim();
    if (key === 'sitemap') { if (value) sitemaps.push(value); continue; }
    if (key === 'user-agent') {
      if (!current || !lastWasAgent) { current = { agents: [], rules: [], crawlDelayMs: null }; groups.push(current); }
      current.agents.push(value.toLowerCase());
      lastWasAgent = true;
      continue;
    }
    if (!current) continue;
    lastWasAgent = false;
    if ((key === 'allow' || key === 'disallow') && value) current.rules.push({ allow: key === 'allow', path: value, re: ruleRegex(value), length: value.replace(/\*/g, '').replace(/\$$/, '').length });
    if (key === 'crawl-delay' && Number.isFinite(Number(value))) current.crawlDelayMs = Math.min(30_000, Math.max(0, Number(value) * 1000));
  }
  const name = agent.toLowerCase();
  const scores = groups.map(g => Math.max(...g.agents.map(a => a === '*' ? 0 : name.includes(a) ? a.length : -1)));
  const best = Math.max(-1, ...scores);
  const selected = groups.filter((_, i) => scores[i] === best && best >= 0);
  const rules = selected.flatMap(g => g.rules);
  const crawlDelayMs = Math.max(0, ...selected.map(g => g.crawlDelayMs ?? 0));
  return {
    sitemaps, crawlDelayMs,
    allows(url) {
      const path = new URL(url).pathname + new URL(url).search;
      const matches = rules.filter(r => r.re.test(path)).sort((a, b) => b.length - a.length || Number(b.allow) - Number(a.allow));
      return matches.length === 0 || matches[0].allow;
    },
    rules: selected.flatMap(g => g.rules.map(({ allow, path }) => ({ allow, path })))
  };
}

export function classifyPage(url, html = '') {
  const u = new URL(url), path = u.pathname.toLowerCase();
  if (path === '/' || path === '') return 'homepage';
  if (/\bcheckout\b/.test(path)) return 'checkout';
  if (/\bcart\b/.test(path)) return 'cart';
  if (u.searchParams.has('q') || /\bsearch\b/.test(path)) return 'search';
  if (/\b(contact|lien-he)\b/.test(path)) return 'contact';
  if (/\b(about|gioi-thieu|company|ve-chung-toi)\b/.test(path)) return 'company/about';
  if (/\b(policy|privacy|terms|chinh-sach|doi-tra|shipping|giao-hang)\b/.test(path)) return 'policy';
  const $ = load(html);
  const types = $('script[type="application/ld+json"]').map((_, el) => $(el).html()).get().join(' ');
  if (/"@type"\s*:\s*"Product"/i.test(types) || /\b(glucare[\/_-]?plus|vien[\/_-]?an[\/_-]?duong|vi[eê]n[\/_-]?an[\/_-]?[dđ]ường|dovital)\b/i.test(decodeURI(path)) || /\b(product|san-pham)\b/.test(path) && !/\b(category|danh-muc|collections?)\b/.test(path)) return 'product_detail';
  if (/"@type"\s*:\s*"(?:Article|BlogPosting|NewsArticle)"/i.test(types)) return 'article';
  if (/\b(category|danh-muc|collections?)\b/.test(path)) return 'category';
  if (/\b(landing|campaign|khuyen-mai)\b/.test(path)) return 'product_landing';
  if (/\b(blog|news|tin-tuc|kien-thuc)\b/.test(path)) return path.split('/').filter(Boolean).length > 1 ? 'article' : 'article_listing';
  return 'other';
}

function importance(type) {
  return ['homepage', 'product_detail', 'checkout', 'cart'].includes(type) ? 'critical' :
    ['category', 'product_landing', 'contact', 'policy'].includes(type) ? 'high' : 'normal';
}

function matchesFilter(url, filters = []) {
  return filters.some(filter => {
    try { return new RegExp(filter).test(url); } catch { return url.includes(filter); }
  });
}

export async function discover({ target, runDir, config = {} }) {
  const root = normalizeUrl(target, target);
  if (!root) throw new Error('Target must be an HTTP(S) URL');
  assertReadOnly(root);
  const origin = new URL(root).origin;
  const maxPages = Math.max(1, Math.min(25, Number(config.maxPages ?? 25)));
  const maxDepth = Math.max(0, Math.min(8, Number(config.maxDepth ?? 3)));
  const maxCandidates = Math.max(maxPages, Math.min(500, maxPages * 12));
  const maxFetch = Math.min(120, maxCandidates);
  const configKey = hash(JSON.stringify({ root, maxPages, maxDepth, priorityUrls: config.priorityUrls ?? [], exclude: config.exclude ?? [], include: config.include ?? [], representativeSampling: config.representativeSampling !== false }));
  const baseDelay = Math.max(0, Number(config.requestDelayMs ?? 500));
  const blocked = [];
  const discoveryPath = join(runDir, 'inventory', 'discovery.json');
  const pagesPath = join(runDir, 'inventory', 'pages.json');
  const evidencePath = join(runDir, 'evidence', 'index.json');
  async function recordDocument(url, type, body, rawFact, existingArtifact = null) {
    const relative = existingArtifact ?? `evidence/discovery/${type === 'robots_txt' ? 'robots' : `sitemap-${hash(url)}`}.${type === 'robots_txt' ? 'txt' : 'xml'}`;
    if (!existingArtifact) await artifact(runDir, relative, body);
    const entry = evidenceFor({ url, pageType: 'sitewide', collector: 'discovery', type, artifact: relative, rawFact });
    const indexed = await json(evidencePath, []);
    const at = indexed.findIndex(x => x.evidence_id === entry.evidence_id);
    if (at >= 0) indexed[at] = existingArtifact ? indexed[at] : entry;
    else indexed.push(entry);
    await atomicJson(evidencePath, indexed);
    return relative;
  }
  async function readBounded(response, limit) {
    const reader = response.body?.getReader();
    const chunks = []; let size = 0;
    if (reader) while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.length;
      if (size > limit) { await reader.cancel(); throw new Error('Response exceeds discovery byte limit'); }
      chunks.push(value);
    }
    return Buffer.concat(chunks).toString('utf8');
  }
  const previous = await json(discoveryPath, null);
  if (previous?.complete && previous.target === root && previous.config?.key === configKey) {
    const documents = [previous.robots, ...(previous.sitemap ?? [])].filter(x => x?.artifact);
    const existing = await Promise.all(documents.map(async x => { try { await access(join(runDir, ...x.artifact.split('/'))); return true; } catch { return false; } }));
    if (previous.robots?.artifact && existing.every(Boolean)) {
      for (const document of documents) await recordDocument(document.url, document === previous.robots ? 'robots_txt' : document.status === 200 ? 'sitemap_xml' : 'sitemap_http_response', '', { status: document.status, bytes: document.bytes ?? null, kind: document.kind ?? null, discovered: document.discovered ?? null }, document.artifact);
      return { pages: await json(pagesPath, []), discovery: previous, blocked: previous.blocked ?? [] };
    }
  }
  let lastRequest = 0;
  async function safeFetch(url, limit = 2_000_000) {
    assertReadOnly(url);
    if (new URL(url).origin !== origin) throw new Error('Cross-origin discovery blocked');
    let current = url;
    const redirects = [];
    for (let n = 0; n < 5; n++) {
      const delay = Math.max(baseDelay, robots.crawlDelayMs);
      await sleep(Math.max(0, delay - (Date.now() - lastRequest)));
      lastRequest = Date.now();
      const response = await fetch(current, { method: 'GET', redirect: 'manual', signal: AbortSignal.timeout(15_000), headers: { 'User-Agent': USER_AGENT, Accept: 'text/html,application/xml,text/xml;q=0.9,*/*;q=0.5' } });
      if (response.status >= 300 && response.status < 400 && response.headers.get('location')) {
        const redirected = inspectedUrl(response.headers.get('location'), current);
        if (!redirected || safetyReason(redirected)) throw new Error('Unsafe redirect blocked');
        const next = normalizeUrl(redirected, current, { keepSearch: true });
        if (!next || new URL(next).origin !== origin || safetyReason(next) || !robots.allows(next)) throw new Error('Unsafe redirect blocked');
        redirects.push({ from: current, to: next, status: response.status });
        current = next;
        continue;
      }
      return { response, body: await readBounded(response, limit), finalUrl: current, redirects };
    }
    throw new Error('Too many redirects');
  }

  let robotsText = '', robotsStatus = null, robotsArtifact = null, robots = { allows: () => true, crawlDelayMs: 0, sitemaps: [], rules: [] };
  const robotsUrl = new URL('/robots.txt', origin).href;
  try {
    // robots is fetched before rules are known. A missing robots.txt allows crawling;
    // server errors fail closed because policy cannot be determined.
    const response = await fetch(robotsUrl, { method: 'GET', redirect: 'error', signal: AbortSignal.timeout(15_000), headers: { 'User-Agent': USER_AGENT } });
    robotsStatus = response.status;
    robotsText = await readBounded(response, 1_000_000);
    robotsArtifact = await recordDocument(robotsUrl, 'robots_txt', robotsText, { status: robotsStatus, bytes: Buffer.byteLength(robotsText), available: response.ok });
    if (response.status >= 500) throw new Error(`robots.txt status ${response.status}`);
    if (!response.ok) robotsText = '';
    robots = parseRobots(robotsText);
    lastRequest = Date.now();
  } catch (error) {
    blocked.push({ url: robotsUrl, reason: `Robots unavailable: ${error.message}` });
    const discovery = { target: root, complete: false, status: 'blocked', robots: { url: robotsUrl, status: robotsStatus, text: robotsText, artifact: robotsArtifact, rules: [], crawlDelayMs: 0 }, sitemap: [], blocked, candidates: [], fetched: 0, config: { maxPages, maxDepth, key: configKey } };
    await atomicJson(discoveryPath, discovery); await atomicJson(pagesPath, []);
    return { pages: [], discovery, blocked };
  }
  const candidates = new Map();
  function add(input, from, depth = 0, priority = 0) {
    const original = inspectedUrl(input, root);
    if (!original || safetyReason(original)) {
      if (original) blocked.push({ url: original, reason: 'Mutating GET URL' });
      return;
    }
    const url = normalizeUrl(input, root, { keepSearch: from === 'priority' });
    if (!url || new URL(url).origin !== origin || candidates.size >= maxCandidates) return;
    if (safetyReason(url)) { blocked.push({ url, reason: 'Mutating GET URL' }); return; }
    if (!robots.allows(url)) { blocked.push({ url, reason: 'Disallowed by robots.txt' }); return; }
    if (matchesFilter(url, config.exclude) || config.include?.length && !matchesFilter(url, config.include) && url !== root) return;
    if (/\.(?:jpe?g|png|gif|webp|svg|pdf|zip|css|js|xml|json|mp4|webm|woff2?)(?:$|\?)/i.test(new URL(url).pathname)) return;
    if (!candidates.has(url)) candidates.set(url, { url, depth, priority, discovered_from: [from], fetched: false, page_type: classifyPage(url) });
    else {
      const item = candidates.get(url);
      if (!item.discovered_from.includes(from)) item.discovered_from.push(from);
      item.priority = Math.max(item.priority, priority);
      item.depth = Math.min(item.depth, depth);
    }
  }
  add(root, 'target', 0, 100);
  for (const url of config.priorityUrls ?? []) add(url, 'priority', 0, 90);

  const sitemap = [];
  const sitemapQueue = [...new Set([...robots.sitemaps, new URL('/sitemap.xml', origin).href])];
  const visitedSitemaps = new Set();
  while (sitemapQueue.length && visitedSitemaps.size < 12 && candidates.size < maxCandidates) {
    const proposed = inspectedUrl(sitemapQueue.shift(), root);
    if (!proposed || safetyReason(proposed)) continue;
    const sitemapUrl = normalizeUrl(proposed, root, { keepSearch: true });
    if (!sitemapUrl || visitedSitemaps.has(sitemapUrl) || new URL(sitemapUrl).origin !== origin || !robots.allows(sitemapUrl) || safetyReason(sitemapUrl)) continue;
    visitedSitemaps.add(sitemapUrl);
    try {
      const { response, body } = await safeFetch(sitemapUrl, 4_000_000);
      const path = await recordDocument(sitemapUrl, response.ok ? 'sitemap_xml' : 'sitemap_http_response', body, { status: response.status, bytes: Buffer.byteLength(body) });
      if (!response.ok) { sitemap.push({ url: sitemapUrl, status: response.status, artifact: path, bytes: Buffer.byteLength(body) }); continue; }
      const $ = load(body, { xmlMode: true });
      const indexes = $('sitemapindex > sitemap > loc').map((_, el) => $(el).text().trim()).get();
      const urls = $('urlset > url > loc').map((_, el) => $(el).text().trim()).get();
      sitemap.push({ url: sitemapUrl, status: response.status, kind: indexes.length ? 'sitemapindex' : 'urlset', discovered: indexes.length || urls.length, artifact: path, bytes: Buffer.byteLength(body) });
      for (const child of indexes.slice(0, 50)) if (!visitedSitemaps.has(child)) sitemapQueue.push(child);
      for (const child of urls) { add(child, `sitemap:${sitemapUrl}`, 1, 15); if (candidates.size >= maxCandidates) break; }
    } catch (error) { sitemap.push({ url: sitemapUrl, error: error.message }); }
  }

  let fetched = 0;
  while (fetched < maxFetch) {
    const pending = [...candidates.values()].filter(c => !c.fetched && c.depth <= maxDepth)
      .sort((a, b) => b.priority - a.priority || a.depth - b.depth || a.url.localeCompare(b.url));
    if (!pending.length) break;
    const candidate = pending[0]; candidate.fetched = true; fetched++;
    try {
      const { response, body, finalUrl, redirects } = await safeFetch(candidate.url);
      candidate.http_status = response.status;
      candidate.final_url = finalUrl;
      candidate.redirects = redirects;
      candidate.content_type = response.headers.get('content-type');
      if (!response.ok || !/html/i.test(candidate.content_type ?? '')) continue;
      const $ = load(body);
      candidate.page_type = classifyPage(finalUrl, body);
      candidate.canonical = $('link[rel="canonical"]').first().attr('href') ? normalizeUrl($('link[rel="canonical"]').first().attr('href'), finalUrl) : null;
      candidate.indexability = /noindex/i.test(($('meta[name="robots"]').attr('content') ?? '') + ' ' + (response.headers.get('x-robots-tag') ?? '')) ? 'noindex' : 'indexable_or_unknown';
      const links = $('a[href]').map((_, el) => $(el).attr('href')).get().slice(0, 300);
      for (const href of links) add(href, `link:${candidate.url}`, candidate.depth + 1, candidate.depth === 0 ? 25 : 5);
    } catch (error) { candidate.error = error.message; blocked.push({ url: candidate.url, reason: error.message }); }
    if (fetched % 5 === 0) await atomicJson(discoveryPath, { target: root, complete: false, robots: { url: robotsUrl, status: robotsStatus, text: robotsText, artifact: robotsArtifact, rules: robots.rules, crawlDelayMs: robots.crawlDelayMs }, sitemap, blocked, candidates: [...candidates.values()], fetched, config: { maxPages, maxDepth, key: configKey } });
  }
  const successful = [...candidates.values()].filter(c => c.http_status >= 200 && c.http_status < 400 && /html/i.test(c.content_type ?? ''));
  const selected = [];
  const sorted = successful.sort((a, b) => b.priority - a.priority || a.depth - b.depth || a.url.localeCompare(b.url));
  if (config.representativeSampling !== false) {
    const types = new Set();
    for (const c of sorted) if (!types.has(c.page_type)) { selected.push(c); types.add(c.page_type); }
  }
  for (const c of sorted) if (selected.length < maxPages && !selected.includes(c)) selected.push(c);
  const priorPages = await json(pagesPath, []);
  const priorByUrl = new Map(priorPages.map(p => [p.url, p]));
  const pages = selected.slice(0, maxPages).map(c => ({
    ...priorByUrl.get(c.url), url: c.url, page_type: c.page_type,
    discovered_from: c.discovered_from, http_status: c.http_status,
    canonical: c.canonical ?? null, indexability: c.indexability ?? null,
    importance: importance(c.page_type), final_url: c.final_url, redirects: c.redirects ?? []
  }));
  const discovery = { target: root, complete: true, status: 'complete', robots: { url: robotsUrl, status: robotsStatus, text: robotsText, artifact: robotsArtifact, rules: robots.rules, crawlDelayMs: robots.crawlDelayMs }, sitemap, blocked, candidates: [...candidates.values()], fetched, selected: pages.map(p => p.url), config: { maxPages, maxDepth, key: configKey } };
  await atomicJson(discoveryPath, discovery);
  await atomicJson(pagesPath, pages);
  return { pages, discovery, blocked };
}
