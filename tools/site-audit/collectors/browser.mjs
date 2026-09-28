import { chromium } from 'playwright';
import axe from 'axe-core';
import { load } from 'cheerio';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { artifact, assertReadOnly, evidenceFor, hash, inspectedUrl, normalizeUrl, safetyReason } from './shared.mjs';

const telemetry = /(?:google-analytics\.com|googletagmanager\.com\/(?:g\/collect|gtm\.js)|doubleclick\.net|facebook\.com\/tr|connect\.facebook\.net|bat\.bing\.com|analytics|pixel|collect(?:\/|\?)|telemetry|hotjar|clarity\.ms|segment\.io|mixpanel|amplitude)/i;
const DEFAULT_VIEWPORTS = [{ name: 'desktop', width: 1440, height: 1000 }, { name: 'mobile', width: 390, height: 844 }];
export const RENDER_COLLECTION_VERSION = 'render-stabilized-v1';
export const boundedTimeout = (value, fallback, minimum, maximum) => Math.max(minimum, Math.min(maximum, Number(value) || fallback));

function isReadOnlyRenderAsset(url, method, resourceType) {
  if (!['GET', 'HEAD'].includes(String(method).toUpperCase())) return false;
  let parsed;
  try { parsed = new URL(url); } catch { return false; }
  if (!['http:', 'https:'].includes(parsed.protocol) || parsed.username || parsed.password) return false;
  // Resource type alone is insufficient: a mutating endpoint can be loaded
  // through a <script src> and still be classified as "script". Only a
  // concrete static-file extension receives the rendering exception.
  return ['stylesheet', 'font', 'image', 'script', 'media', 'xhr', 'fetch'].includes(resourceType) &&
    /\.(?:css|js|mjs|map|woff2?|ttf|otf|eot|jpe?g|png|gif|webp|avif|svg|ico)$/i.test(parsed.pathname);
}

function isExplicitStaticDirectory(url) {
  try { return /\/(?:pub\/)?(?:static(?:_custom)?|media|assets?|fonts?|images?|css|js|scripts?)(?:\/|$)/i.test(new URL(url).pathname); }
  catch { return false; }
}

export async function installReadOnlyBrowserGuard({ context, origin, robotsAllows = () => true, onBlocked = () => {} }) {
  const policy = (url, method, navigation, resourceType) => {
    const renderAsset = !navigation && isReadOnlyRenderAsset(url, method, resourceType);
    let parsed;
    try { parsed = new URL(url); } catch { return 'invalid request URL'; }
    if (!['http:', 'https:'].includes(parsed.protocol) || parsed.username || parsed.password) return 'unsupported URL';
    if (navigation && parsed.origin !== origin) return 'cross-origin navigation blocked';
    if (telemetry.test(url)) return 'telemetry blocked; audit-induced request';
    // Static GETs cannot mutate the site. Their JavaScript may attempt later
    // actions, but those requests are independently mediated by this guard.
    // Page-level robots rules must not strip CSS, fonts, images, or scripts
    // from a page that is otherwise allowed to be audited.
    const unsafe = safetyReason(url, method);
    // The narrow exception is for action words embedded in filenames inside
    // explicit static directories (for example ajax-post.js). Transactional
    // roots, action queries, and endpoint-like *.js paths remain blocked.
    if (unsafe && !(renderAsset && unsafe === 'mutating GET endpoint' && isExplicitStaticDirectory(url))) return unsafe;
    if (!renderAsset && parsed.origin === origin && !robotsAllows(url)) return 'robots disallow';
    return null;
  };
  await context.routeWebSocket(/.*/, async socket => {
    onBlocked({ url: socket.url(), method: 'WEBSOCKET', reason: 'websocket blocked', resource_type: 'websocket', audit_induced: true });
    await socket.close({ code: 1008, reason: 'Read-only audit' });
  });
  await context.route('**/*', async route => {
    const request = route.request();
    const url = request.url(), method = request.method(), navigation = request.isNavigationRequest(), resourceType = request.resourceType();
    const block = async (reason, destination = url, from = url) => {
      onBlocked({ url: destination, redirected_from: destination === url ? null : from, method, reason, resource_type: request.resourceType(), audit_induced: true });
      await route.abort('blockedbyclient');
    };
    const reason = policy(url, method, navigation, resourceType);
    if (reason) return block(reason);
    try {
      // Playwright routing is invoked only for the first URL of a redirect
      // chain, even after fulfilling an intermediate 302. Resolve the whole
      // chain here with automatic redirects disabled.
      let current = url;
      for (let hop = 0; hop < 6; hop++) {
        const options = { url: current, maxRedirects: 0, timeout: 20_000 };
        if (new URL(current).origin !== origin && isReadOnlyRenderAsset(current, method, resourceType)) {
          const headers = { ...request.headers() };
          // route.fetch inherits original request headers for omitted keys, so
          // explicitly blank credentials at a cross-origin asset boundary.
          for (const name of ['authorization', 'proxy-authorization', 'cookie']) headers[name] = '';
          options.headers = headers;
        }
        const response = await route.fetch(options);
        const location = response.headers()['location'];
        if (response.status() >= 300 && response.status() < 400 && location) {
          const next = inspectedUrl(location, current);
          if (next && new URL(next).origin !== new URL(current).origin) return block('redirect blocked: cross-origin credential boundary', next, current);
          const nextReason = next ? policy(next, method, navigation, resourceType) : 'invalid redirect URL';
          if (nextReason) return block(`redirect blocked: ${nextReason}`, next ?? location, current);
          current = next;
          continue;
        }
        await route.fulfill({ response });
        return;
      }
      await block('redirect blocked: too many hops', current, url);
    } catch (error) {
      await block(`request guard failure: ${error.message}`);
    }
  });
}

export function extractHtml(html, baseUrl) {
  const $ = load(html);
  const meta = name => $(`meta[name="${name}"], meta[property="${name}"]`).first().attr('content') ?? null;
  const httpUrl = value => {
    const resolved = value ? inspectedUrl(value, baseUrl) : null;
    return resolved && /^https?:/.test(resolved) ? resolved : null;
  };
  const canonical = $('link[rel="canonical"]').first().attr('href');
  const links = $('a[href]').map((_, el) => {
    const rawHref = $(el).attr('href'), href = httpUrl(rawHref);
    return href ? { href, raw_href: rawHref, text: $(el).text().trim().slice(0, 300), rel: $(el).attr('rel') ?? null } : null;
  }).get().filter(Boolean).slice(0, 1000);
  const schema = $('script[type="application/ld+json"]').map((_, el) => {
    const source = $(el).html() ?? '';
    try { return { valid: true, data: JSON.parse(source) }; }
    catch (error) { return { valid: false, error: error.message, source: source.slice(0, 2000) }; }
  }).get();
  return {
    title: $('title').first().text().trim() || null,
    meta_description: meta('description'), robots_meta: meta('robots'),
    canonical: httpUrl(canonical),
    hreflang: $('link[rel="alternate"][hreflang]').map((_, el) => ({ lang: $(el).attr('hreflang'), href: httpUrl($(el).attr('href')) })).get(),
    headings: $('h1,h2,h3,h4,h5,h6').map((_, el) => ({ level: Number(el.tagName.slice(1)), text: $(el).text().trim().slice(0, 500) })).get().slice(0, 500),
    images: $('img').map((_, el) => ({ src: httpUrl($(el).attr('src')), alt: $(el).attr('alt') ?? null, loading: $(el).attr('loading') ?? null })).get().slice(0, 1000),
    links, schema,
    scripts: $('script[src]').map((_, el) => httpUrl($(el).attr('src'))).get().filter(Boolean).slice(0, 500)
  };
}

async function rawGet(url, origin, allowed) {
  let current = url; const redirects = [];
  for (let i = 0; i < 5; i++) {
    assertReadOnly(current);
    if (new URL(current).origin !== origin || !allowed(current)) throw new Error('Raw request outside allowed crawl scope');
    const response = await fetch(current, { method: 'GET', redirect: 'manual', signal: AbortSignal.timeout(20_000), headers: { 'User-Agent': 'SiteAuditReadOnly/1.0', Accept: 'text/html' } });
    if (response.status >= 300 && response.status < 400 && response.headers.get('location')) {
      const redirected = inspectedUrl(response.headers.get('location'), current);
      if (!redirected || safetyReason(redirected)) throw new Error('Unsafe raw redirect');
      const next = normalizeUrl(redirected, current, { keepSearch: true });
      if (!next) throw new Error('Invalid redirect');
      redirects.push({ from: current, to: next, status: response.status });
      current = next;
      continue;
    }
    const contentLength = Number(response.headers.get('content-length') ?? 0);
    if (contentLength > 5_000_000) throw new Error('Raw HTML exceeds byte limit');
    const reader = response.body?.getReader(); let size = 0; const chunks = [];
    if (reader) while (true) {
      const { done, value } = await reader.read(); if (done) break;
      size += value.length;
      if (size > 5_000_000) { await reader.cancel(); throw new Error('Raw HTML exceeds byte limit'); }
      chunks.push(value);
    }
    return { url: current, status: response.status, headers: Object.fromEntries(response.headers), redirects, html: Buffer.concat(chunks).toString('utf8'), bytes: size };
  }
  throw new Error('Too many raw redirects');
}

const metricInit = () => {
  window.__auditMetrics = { lcp: null, cls: 0, lcpEntries: 0, clsEntries: 0 };
  try {
    new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        window.__auditMetrics.lcp = entry.startTime;
        window.__auditMetrics.lcpEntries++;
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });
  } catch {}
  try {
    new PerformanceObserver(list => {
      for (const entry of list.getEntries()) if (!entry.hadRecentInput) {
        window.__auditMetrics.cls += entry.value;
        window.__auditMetrics.clsEntries++;
      }
    }).observe({ type: 'layout-shift', buffered: true });
    window.__auditMetrics.clsSupported = true;
  } catch {}
};

async function renderState(page) {
  return page.evaluate(() => {
    const stylesheetState = [...document.styleSheets].map(sheet => {
      let rule_count = null, access = 'available';
      try { rule_count = sheet.cssRules?.length ?? null; }
      catch { access = 'cross_origin_or_restricted'; }
      return { href: sheet.href || null, disabled: sheet.disabled, media: sheet.media?.mediaText || null, rule_count, access };
    });
    const fontState = document.fonts ? {
      status: document.fonts.status,
      faces: [...document.fonts].map(font => ({ family: font.family, status: font.status, style: font.style, weight: font.weight }))
    } : { status: 'unsupported', faces: [] };
    const images = [...document.images].map(image => ({
      src: image.currentSrc || image.src || null, complete: image.complete,
      natural_width: image.naturalWidth, natural_height: image.naturalHeight,
      loading: image.loading || null, failed: image.complete && image.naturalWidth === 0
    }));
    const resources = performance.getEntriesByType('resource').map(entry => ({
      name: entry.name, initiator_type: entry.initiatorType, duration: entry.duration,
      transfer_size: entry.transferSize, encoded_body_size: entry.encodedBodySize,
      decoded_body_size: entry.decodedBodySize
    })).slice(0, 3000);
    const animations = document.getAnimations ? document.getAnimations({ subtree: true }).map(animation => ({
      play_state: animation.playState,
      current_time: Number.isFinite(Number(animation.currentTime)) ? Number(animation.currentTime) : null,
      end_time: Number.isFinite(Number(animation.effect?.getComputedTiming?.().endTime)) ? Number(animation.effect.getComputedTiming().endTime) : null
    })) : [];
    return {
      ready_state: document.readyState,
      stylesheets: stylesheetState,
      fonts: fontState,
      images,
      resources,
      animations: {
        total: animations.length,
        running: animations.filter(animation => animation.play_state === 'running').length,
        finite_running: animations.filter(animation => animation.play_state === 'running' && animation.end_time !== null).length
      },
      dimensions: { scroll_height: document.documentElement.scrollHeight, scroll_width: document.documentElement.scrollWidth, viewport_height: innerHeight, viewport_width: innerWidth },
      scroll_y: scrollY,
      reveal_markers: document.querySelectorAll('[data-revealed="true"],.revealed').length,
      dynamic_height_markers: document.querySelectorAll('#dynamic-height,[data-audit-dynamic-height]').length
    };
  });
}

export async function waitForRenderAssets(page, timeoutMs = 8_000) {
  const bounded = Math.max(250, Math.min(20_000, Number(timeoutMs) || 8_000));
  return page.evaluate(async timeout => {
    const started = performance.now();
    let timedOut = false;
    const deadline = new Promise(resolve => setTimeout(() => { timedOut = true; resolve('timeout'); }, timeout));
    const fontPromise = document.fonts?.ready ? document.fonts.ready.then(() => 'ready', () => 'failed') : Promise.resolve('unsupported');
    const imagesAtStart = [...document.images];
    const imagePromise = Promise.all(imagesAtStart.map(image => image.complete ? Promise.resolve() : new Promise(resolve => {
      image.addEventListener('load', resolve, { once: true });
      image.addEventListener('error', resolve, { once: true });
    })));
    const [fontResult, imageResult] = await Promise.all([
      Promise.race([fontPromise, deadline]),
      Promise.race([imagePromise.then(() => 'settled'), deadline])
    ]);
    const images = [...document.images];
    return {
      timeout_ms: timeout,
      duration_ms: Math.round(performance.now() - started),
      timed_out: timedOut || fontResult === 'timeout' || imageResult === 'timeout',
      fonts: { result: fontResult, status: document.fonts?.status ?? 'unsupported', total: document.fonts ? [...document.fonts].length : 0, failed: document.fonts ? [...document.fonts].filter(font => font.status === 'error').length : 0 },
      images: { discovered_at_start: imagesAtStart.length, discovered_at_end: images.length, complete: images.filter(image => image.complete && image.naturalWidth > 0).length, failed: images.filter(image => image.complete && image.naturalWidth === 0).length, pending: images.filter(image => !image.complete).length }
    };
  }, bounded);
}

export async function scrollForRender(page, { pauseMs = 180, maxIterations = 80 } = {}) {
  const pause = Math.max(25, Math.min(1_000, Number(pauseMs) || 180));
  const limit = Math.max(1, Math.min(160, Number(maxIterations) || 80));
  await page.evaluate(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }));
  const samples = [];
  let bottomPasses = 0;
  for (let iteration = 0; iteration < limit; iteration++) {
    const sample = await page.evaluate(() => {
      const root = document.documentElement;
      const height = Math.max(root.scrollHeight, document.body?.scrollHeight || 0);
      const before = scrollY;
      const maximum = Math.max(0, height - innerHeight);
      const next = Math.min(maximum, before + Math.max(1, Math.floor(innerHeight * 0.85)));
      window.scrollTo({ top: next, left: 0, behavior: 'instant' });
      return { iteration: 0, before, requested: next, height_before: height, viewport_height: innerHeight, at_bottom: next >= maximum };
    });
    await page.waitForTimeout(pause);
    const after = await page.evaluate(() => ({ scroll_y: scrollY, height_after: Math.max(document.documentElement.scrollHeight, document.body?.scrollHeight || 0), viewport_height: innerHeight }));
    sample.iteration = iteration + 1;
    Object.assign(sample, after);
    sample.height_increased = sample.height_after > sample.height_before;
    samples.push(sample);
    const atBottomNow = sample.scroll_y + sample.viewport_height >= sample.height_after - 2;
    bottomPasses = atBottomNow && !sample.height_increased ? bottomPasses + 1 : 0;
    if (bottomPasses >= 2) break;
  }
  const beforeReturn = await page.evaluate(() => ({ final_scroll_y: scrollY, final_height: Math.max(document.documentElement.scrollHeight, document.body?.scrollHeight || 0) }));
  await page.evaluate(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }));
  await page.waitForTimeout(pause);
  return {
    audit_induced: true,
    action: 'incremental read-only scroll for render stabilization',
    iterations: samples.length,
    max_iterations: limit,
    reached_bottom: samples.some(sample => sample.scroll_y + sample.viewport_height >= sample.height_after - 2),
    height_increased: samples.some(sample => sample.height_increased),
    initial_height: samples[0]?.height_before ?? beforeReturn.final_height,
    final_height: beforeReturn.final_height,
    returned_to_top: await page.evaluate(() => scrollY === 0),
    samples
  };
}

async function waitForAnimations(page, timeoutMs = 2_500) {
  const timeout = Math.max(100, Math.min(10_000, Number(timeoutMs) || 2_500));
  let timedOut = false;
  try {
    await page.waitForFunction(() => !document.getAnimations || document.getAnimations({ subtree: true }).every(animation => {
      const endTime = Number(animation.effect?.getComputedTiming?.().endTime);
      return animation.playState !== 'running' || !Number.isFinite(endTime);
    }), null, { timeout });
  } catch { timedOut = true; }
  const state = await page.evaluate(() => {
    const animations = document.getAnimations ? document.getAnimations({ subtree: true }) : [];
    return {
      total: animations.length,
      running: animations.filter(animation => animation.playState === 'running').length,
      finite_running: animations.filter(animation => animation.playState === 'running' && Number.isFinite(Number(animation.effect?.getComputedTiming?.().endTime))).length
    };
  });
  return { timeout_ms: timeout, timed_out: timedOut, ...state };
}

async function freezeAnimationsInPlace(page) {
  return page.evaluate(() => {
    const animations = document.getAnimations ? document.getAnimations({ subtree: true }) : [];
    let paused = 0;
    for (const animation of animations) if (animation.playState === 'running') {
      try { animation.pause(); paused++; } catch {}
    }
    return { method: 'Web Animations API pause at current time', paused, preserves_current_time: true };
  });
}

async function domState(page) {
  return page.evaluate(() => {
    const visible = el => {
      const style = getComputedStyle(el), rect = el.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) !== 0 && rect.width > 0 && rect.height > 0;
    };
    const state = el => {
      const style = getComputedStyle(el), rect = el.getBoundingClientRect();
      return ({
      tag: el.tagName.toLowerCase(), text: (el.innerText || el.textContent || '').trim().slice(0, 400),
      href: el.href || null, type: el.type || null, name: el.name || null,
      aria_label: el.getAttribute('aria-label'), role: el.getAttribute('role'),
      disabled: !!el.disabled || el.getAttribute('aria-disabled') === 'true',
      hidden: !visible(el), required: !!el.required,
      checked: 'checked' in el ? !!el.checked : null,
      placeholder: el.getAttribute('placeholder'),
      form_action: el.form?.action || null, form_method: el.form?.method || null,
      rectangle: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
      typography: { font_family: style.fontFamily, font_size: style.fontSize, font_weight: style.fontWeight, line_height: style.lineHeight, letter_spacing: style.letterSpacing },
      colors: { color: style.color, background_color: style.backgroundColor, border_color: style.borderColor }
    }); };
    return {
      visible_text: (document.body?.innerText || '').slice(0, 150_000),
      links: [...document.querySelectorAll('a[href]')].slice(0, 1000).map(state),
      buttons: [...document.querySelectorAll('button,input[type=button],input[type=submit],[role=button]')].slice(0, 500).map(state),
      forms: [...document.forms].slice(0, 100).map(form => ({ action: form.action, method: form.method, controls: [...form.elements].slice(0, 100).map(state) })),
      headings: [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].slice(0, 500).map(state),
      text_samples: [...document.querySelectorAll('p,li,blockquote')].filter(visible).slice(0, 200).map(state),
      overlays: [...document.querySelectorAll('[role=dialog],[aria-modal=true],.cookie-banner,[class*=cookie],[id*=cookie]')].slice(0, 50).filter(visible).map(state),
      data_layer_present: Array.isArray(window.dataLayer),
      data_layer_event_names: Array.isArray(window.dataLayer) ? window.dataLayer.slice(0, 200).map(x => x?.event).filter(x => typeof x === 'string') : [],
      dimensions: { scroll_width: document.documentElement.scrollWidth, scroll_height: document.documentElement.scrollHeight, viewport_width: innerWidth, viewport_height: innerHeight }
    };
  });
}

async function performanceState(page, network) {
  const browser = await page.evaluate(() => {
    const n = performance.getEntriesByType('navigation')[0];
    const resources = performance.getEntriesByType('resource');
    return {
      navigation: n ? { startTime: n.startTime, duration: n.duration, responseStart: n.responseStart, responseEnd: n.responseEnd, domContentLoadedEventEnd: n.domContentLoadedEventEnd, loadEventEnd: n.loadEventEnd, transferSize: n.transferSize, encodedBodySize: n.encodedBodySize, decodedBodySize: n.decodedBodySize, type: n.type } : null,
      resources: resources.slice(0, 2000).map(r => ({ name: r.name, initiatorType: r.initiatorType, duration: r.duration, transferSize: r.transferSize, encodedBodySize: r.encodedBodySize, renderBlockingStatus: r.renderBlockingStatus || null })),
      observed: window.__auditMetrics ?? null
    };
  });
  const completed = network.filter(x => x.kind === 'response');
  const knownHeaderBytes = completed.reduce((total, x) => total + (Number(x.content_length) || 0), 0);
  return {
    source: 'LAB', field: { available: false, reason: 'No real-user field data source configured' },
    lighthouse_scores: { available: false, reason: 'Lighthouse not run; no scores inferred' },
    inp: { available: false, reason: 'No trusted user interaction or field data during read-only collection' },
    lcp_ms: browser.observed?.lcp ?? null, cls: browser.observed?.clsSupported ? browser.observed.cls : null,
    ttfb_ms: browser.navigation?.responseStart ?? null,
    navigation: browser.navigation,
    request_count: completed.length,
    transfer: { known_response_content_length_bytes: knownHeaderBytes, browser_reported_transfer_bytes: (browser.navigation?.transferSize || 0) + browser.resources.reduce((a, r) => a + (r.transferSize || 0), 0), limitation: 'Header lengths and browser transferSize may omit compressed, cached, or cross-origin bytes' },
    render_blocking_resources: browser.resources.filter(r => r.renderBlockingStatus === 'blocking'),
    large_images: browser.resources.filter(r => /image|img/i.test(r.initiatorType) && r.encodedBodySize > 500_000),
    third_party_scripts: browser.resources.filter(r => r.initiatorType === 'script' && new URL(r.name).origin !== page.url().split('/').slice(0, 3).join('/')),
    resources: browser.resources,
    limitations: ['Single browser run per viewport', 'All browser requests were mediated by Playwright to inspect redirects; timing includes routing overhead', 'LCP and CLS are lab observations; CLS window may be incomplete', 'No interaction was performed']
  };
}

export async function launchCollector(config = {}) {
  return chromium.launch({ headless: true, executablePath: config.browserExecutable || 'C:/Program Files/Google/Chrome/Application/chrome.exe', args: ['--no-first-run', '--no-default-browser-check'] });
}

export async function collectPage({ browser, pageInfo, runDir, target, config = {}, robotsAllows = () => true }) {
  const url = pageInfo.url, origin = new URL(target).origin;
  const key = hash(url), revision = String(config.evidenceRevision || RENDER_COLLECTION_VERSION).replace(/[^a-z0-9_-]/gi, '_').slice(0, 40);
  const evidence = [], blocked = [];
  const add = (collector, type, viewport, file, rawFact) => {
    const entry = evidenceFor({ url, pageType: pageInfo.page_type, collector, type, viewport, artifact: file, rawFact: { ...rawFact, render_collection_version: RENDER_COLLECTION_VERSION } });
    evidence.push(entry);
    return entry;
  };
  const raw = await rawGet(url, origin, robotsAllows);
  const rawPath = `evidence/html/${key}.${revision}.raw.html`;
  await artifact(runDir, rawPath, raw.html);
  add('raw-http', 'raw_html', null, rawPath, { status: raw.status, final_url: raw.url, bytes: raw.bytes, redirects: raw.redirects });
  const rawSeo = { ...extractHtml(raw.html, raw.url), status: raw.status, headers: raw.headers, final_url: raw.url, redirects: raw.redirects };
  const rawSeoPath = `evidence/seo/${key}.${revision}.raw.json`;
  await artifact(runDir, rawSeoPath, JSON.stringify(rawSeo, null, 2));
  add('seo', 'raw_seo', null, rawSeoPath, { title: rawSeo.title, canonical: rawSeo.canonical, robots_meta: rawSeo.robots_meta, x_robots_tag: raw.headers['x-robots-tag'] ?? null });
  const viewports = config.viewports?.length ? config.viewports : DEFAULT_VIEWPORTS;
  const browserResults = {};
  for (const viewport of viewports) {
    const name = String(viewport.name).replace(/[^a-z0-9_-]/gi, '_').slice(0, 40);
    const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, deviceScaleFactor: 1, isMobile: name === 'mobile', hasTouch: name === 'mobile', acceptDownloads: false, serviceWorkers: 'block' });
    const network = [], consoleEvents = [];
    const incomplete = [];
    await installReadOnlyBrowserGuard({ context, origin, robotsAllows, onBlocked: item => {
      const marked = { ...item, viewport: name };
      blocked.push(marked); network.push({ kind: 'blocked', ...marked });
      if (item.reason.startsWith('request guard failure:')) incomplete.push(item.reason);
    } });
    context.on('console', message => { if (['error', 'warning'].includes(message.type())) consoleEvents.push({ type: message.type(), text: message.text(), location: message.location(), page_url: message.page()?.url() ?? null, audit_induced: blocked.some(b => message.text().includes(b.url)) }); });
    context.on('page', opened => {
      opened.on('pageerror', error => consoleEvents.push({ type: 'pageerror', text: error.message, page_url: opened.url(), audit_induced: false }));
      opened.on('dialog', dialog => dialog.dismiss().catch(() => {}));
      opened.on('download', download => download.cancel().catch(() => {}));
    });
    context.on('requestfailed', request => network.push({ kind: 'requestfailed', url: request.url(), method: request.method(), resource_type: request.resourceType(), failure: request.failure()?.errorText ?? null, audit_induced: blocked.some(b => b.url === request.url()) }));
    context.on('response', response => {
      const headers = response.headers();
      network.push({ kind: 'response', url: response.url(), status: response.status(), method: response.request().method(), resource_type: response.request().resourceType(), content_type: headers['content-type'] ?? null, content_length: headers['content-length'] ?? null, server_timing: headers['server-timing'] ?? null });
    });
    const page = await context.newPage();
    await page.addInitScript(metricInit);
    try {
      const navigationTimeout = boundedTimeout(config.navigationTimeoutMs, 25_000, 1_000, 60_000);
      const loadTimeout = boundedTimeout(config.loadTimeoutMs, 8_000, 500, 20_000);
      const response = await page.goto(raw.url, { waitUntil: 'domcontentloaded', timeout: navigationTimeout });
      let loadTimedOut = false;
      await page.waitForLoadState('load', { timeout: loadTimeout }).catch(() => { loadTimedOut = true; });
      await page.waitForTimeout(Math.max(0, Math.min(5_000, Number(config.settleMs ?? 500))));
      const initialAssets = await waitForRenderAssets(page, Number(config.renderAssetTimeoutMs ?? 8_000));
      const beforeScroll = await renderState(page);
      const capture = async (phase, mode, animationMode, extra = {}) => {
        const screenshotPath = `evidence/screenshots/${key}.${name}.${revision}.${phase}.${mode}.png`;
        try {
          await mkdir(join(runDir, 'evidence', 'screenshots'), { recursive: true });
          await page.screenshot({ path: join(runDir, ...screenshotPath.split('/')), fullPage: mode === 'full', animations: animationMode, timeout: 20_000 });
          return add('screenshot', `${phase}_${mode}_screenshot`, name, screenshotPath, {
            width: viewport.width, height: viewport.height, phase,
            audit_induced_scroll: phase === 'stabilized', animation_mode: animationMode,
            captured_after_stabilization: phase === 'stabilized', ...extra
          });
        } catch (error) {
          incomplete.push(`${phase} ${mode} screenshot unavailable`);
          blocked.push({ url, viewport: name, reason: `${phase} ${mode} screenshot unavailable: ${error.message}`, audit_induced: false });
          return null;
        }
      };
      await capture('initial', 'viewport', 'allow', { asset_wait_timed_out: initialAssets.timed_out });
      await capture('initial', 'full', 'allow', { asset_wait_timed_out: initialAssets.timed_out });
      const scroll = await scrollForRender(page, {
        pauseMs: Number(config.scrollPauseMs ?? 180),
        maxIterations: Number(config.maxScrollIterations ?? 80)
      });
      const postScrollAssets = await waitForRenderAssets(page, Number(config.renderAssetTimeoutMs ?? 8_000));
      const animations = await waitForAnimations(page, Number(config.animationSettleTimeoutMs ?? 2_500));
      const afterScroll = await renderState(page);
      const animationFreeze = animations.running > 0 ? await freezeAnimationsInPlace(page) : { method: null, paused: 0, preserves_current_time: true };
      const animationFreezeApplied = animationFreeze.paused > 0;
      const renderFailures = network.filter(item => item.kind === 'requestfailed' && !item.audit_induced || item.kind === 'response' && item.status >= 400);
      const decodeFailures = {
        fonts: postScrollAssets.fonts.failed,
        images: postScrollAssets.images.failed,
        pending_images: postScrollAssets.images.pending
      };
      const stabilization = {
        version: RENDER_COLLECTION_VERSION,
        audit_induced_scroll: true,
        dom_content_loaded: true,
        load_timed_out: loadTimedOut,
        initial_assets: initialAssets,
        scroll,
        post_scroll_assets: postScrollAssets,
        animations: { ...animations, deterministic_freeze_applied_for_final_capture: animationFreezeApplied, freeze: animationFreeze },
        before_scroll: beforeScroll,
        after_scroll: afterScroll,
        failed_resources: renderFailures,
        decode_failures: decodeFailures,
        final_capture_after_stabilization: true,
        render_complete: !loadTimedOut && !initialAssets.timed_out && !postScrollAssets.timed_out && scroll.reached_bottom && renderFailures.length === 0 && decodeFailures.fonts === 0 && decodeFailures.images === 0 && decodeFailures.pending_images === 0
      };
      const stabilizationPath = `evidence/render/${key}.${name}.${revision}.json`;
      await artifact(runDir, stabilizationPath, JSON.stringify(stabilization, null, 2));
      const stabilizationEvidence = add('browser', 'render_stabilization', name, stabilizationPath, {
        render_complete: stabilization.render_complete,
        load_timed_out: loadTimedOut,
        asset_wait_timed_out: initialAssets.timed_out || postScrollAssets.timed_out,
        failed_resources: renderFailures.length,
        font_decode_failures: decodeFailures.fonts,
        image_decode_failures: decodeFailures.images,
        pending_images: decodeFailures.pending_images,
        scroll_iterations: scroll.iterations,
        scroll_height_before: scroll.initial_height,
        scroll_height_after: scroll.final_height,
        scroll_height_increased: scroll.height_increased,
        animation_freeze_applied: animationFreezeApplied
      });
      const rendered = await page.content();
      const renderedPath = `evidence/html/${key}.${name}.${revision}.rendered.html`;
      await artifact(runDir, renderedPath, rendered);
      add('browser', 'rendered_html', name, renderedPath, { final_url: page.url(), status: response?.status() ?? null, bytes: Buffer.byteLength(rendered), phase: 'stabilized', stabilization_evidence_id: stabilizationEvidence.evidence_id });
      const seo = extractHtml(rendered, page.url());
      const seoPath = `evidence/seo/${key}.${name}.${revision}.json`;
      await artifact(runDir, seoPath, JSON.stringify(seo, null, 2));
      add('seo', 'rendered_seo', name, seoPath, { title: seo.title, headings: seo.headings.length, links: seo.links.length, images: seo.images.length });
      const schemaPath = `evidence/schema/${key}.${name}.${revision}.json`;
      await artifact(runDir, schemaPath, JSON.stringify(seo.schema, null, 2));
      add('structured-data', 'jsonld', name, schemaPath, { valid: seo.schema.filter(x => x.valid).length, invalid: seo.schema.filter(x => !x.valid).length });
      const dom = await domState(page);
      const domPath = `evidence/dom/${key}.${name}.${revision}.json`;
      await artifact(runDir, domPath, JSON.stringify(dom, null, 2));
      add('dom', 'visible_controls', name, domPath, { links: dom.links.length, buttons: dom.buttons.length, forms: dom.forms.length, visible_text_length: dom.visible_text.length });
      const tracking = { gtm_script_urls: seo.scripts.filter(x => /googletagmanager\.com\/gtm\.js/i.test(x)), ga4_request_urls: network.filter(x => /google-analytics\.com\/g\/collect/i.test(x.url)).map(x => x.url), meta_pixel_request_urls: network.filter(x => /facebook\.com\/tr/i.test(x.url)).map(x => x.url), ads_request_urls: network.filter(x => /doubleclick\.net|googleads/i.test(x.url)).map(x => x.url), data_layer_present: dom.data_layer_present, data_layer_event_names: dom.data_layer_event_names, limitation: 'Telemetry was blocked because these requests would be induced by the audit browser' };
      const trackingPath = `evidence/analytics/${key}.${name}.${revision}.json`;
      await artifact(runDir, trackingPath, JSON.stringify(tracking, null, 2));
      add('analytics', 'tracking_signals', name, trackingPath, { gtm: tracking.gtm_script_urls.length, ga4_requests_blocked: tracking.ga4_request_urls.length, data_layer_present: tracking.data_layer_present });
      await capture('stabilized', 'viewport', 'allow', { stabilization_evidence_id: stabilizationEvidence.evidence_id, animation_freeze_applied: animationFreezeApplied, animation_freeze_method: animationFreeze.method });
      await capture('stabilized', 'full', 'allow', { stabilization_evidence_id: stabilizationEvidence.evidence_id, animation_freeze_applied: animationFreezeApplied, animation_freeze_method: animationFreeze.method });
      let accessibility;
      try {
        await page.addScriptTag({ content: axe.source });
        accessibility = await page.evaluate(async () => await window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] } }));
      } catch (error) { accessibility = { unavailable: true, reason: error.message }; incomplete.push('axe unavailable'); }
      const axePath = `evidence/accessibility/${key}.${name}.${revision}.json`;
      await artifact(runDir, axePath, JSON.stringify(accessibility, null, 2));
      add('axe', 'accessibility', name, axePath, { violations: accessibility.violations?.length ?? null, unavailable: accessibility.unavailable ?? false });
      const performance = await performanceState(page, network);
      const perfPath = `evidence/lighthouse/${key}.${name}.${revision}.lab.json`;
      await artifact(runDir, perfPath, JSON.stringify(performance, null, 2));
      add('performance', 'lab_metrics', name, perfPath, { lcp_ms: performance.lcp_ms, cls: performance.cls, ttfb_ms: performance.ttfb_ms, inp: null, field_available: false, lighthouse_scores_available: false });
      browserResults[name] = {
        status: response?.status() ?? null, final_url: page.url(), title: seo.title,
        lcp_ms: performance.lcp_ms, cls: performance.cls,
        render_collection_version: RENDER_COLLECTION_VERSION,
        render_status: stabilization.render_complete ? 'stabilized' : 'stabilized_with_failures',
        render_stabilization_evidence_id: stabilizationEvidence.evidence_id,
        ...(incomplete.length ? { error: incomplete.join('; ') } : {})
      };
    } catch (error) {
      blocked.push({ url, viewport: name, reason: `Browser collection failed: ${error.message}`, audit_induced: false });
      browserResults[name] = { error: error.message };
    } finally {
      const networkPath = `evidence/network/${key}.${name}.${revision}.json`;
      const consolePath = `evidence/console/${key}.${name}.${revision}.json`;
      await artifact(runDir, networkPath, JSON.stringify(network, null, 2));
      await artifact(runDir, consolePath, JSON.stringify(consoleEvents, null, 2));
      add('network', 'network_log', name, networkPath, { events: network.length, audit_blocked: network.filter(x => x.kind === 'blocked').length });
      add('console', 'console_log', name, consolePath, { errors: consoleEvents.length });
      await context.close();
    }
  }
  return { evidence, blocked, browserResults, raw: { status: raw.status, final_url: raw.url } };
}
