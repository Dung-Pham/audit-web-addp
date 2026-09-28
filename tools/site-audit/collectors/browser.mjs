import { chromium } from 'playwright';
import axe from 'axe-core';
import { load } from 'cheerio';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { artifact, assertReadOnly, evidenceFor, hash, inspectedUrl, normalizeUrl, safetyReason } from './shared.mjs';

const telemetry = /(?:google-analytics\.com|googletagmanager\.com\/(?:g\/collect|gtm\.js)|doubleclick\.net|facebook\.com\/tr|connect\.facebook\.net|bat\.bing\.com|analytics|pixel|collect(?:\/|\?)|telemetry|hotjar|clarity\.ms|segment\.io|mixpanel|amplitude)/i;
const DEFAULT_VIEWPORTS = [{ name: 'desktop', width: 1440, height: 1000 }, { name: 'mobile', width: 390, height: 844 }];
export const RENDER_COLLECTION_VERSION = 'render-stabilized-v3.3';
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
    const images = [...document.images].map((image, index) => {
      const rect = image.getBoundingClientRect();
      const visible = rect.width > 1 && rect.height > 1 && rect.bottom > 0 && rect.top < innerHeight && rect.right > 0 && rect.left < innerWidth;
      const near_viewport = rect.width > 1 && rect.height > 1 && rect.bottom > -innerHeight && rect.top < innerHeight * 2;
      // HTMLImageElement.src resolves to the document URL when no src
      // attribute exists; use the attribute so a lazy pending state stays
      // observable instead of looking falsely loaded.
      const actual_src = image.currentSrc || image.getAttribute('src') || null;
      return {
      identity: `${index}:${image.id || image.getAttribute('data-audit-id') || image.getAttribute('alt') || ''}:${image.getAttribute('data-src') || image.getAttribute('src') || ''}`,
      src: actual_src, declared_src: image.getAttribute('src') || null, data_src: image.getAttribute('data-src') || null, data_srcset: image.getAttribute('data-srcset') || null,
      complete: image.complete,
      natural_width: image.naturalWidth, natural_height: image.naturalHeight,
      loading: image.loading || null, failed: image.complete && image.naturalWidth === 0,
      rect: { top: Math.round(rect.top), bottom: Math.round(rect.bottom), width: Math.round(rect.width), height: Math.round(rect.height) }, visible, near_viewport,
      material: Boolean(actual_src) && (visible || near_viewport)
    }; });
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

async function installRenderDiagnostics(page) {
  await page.evaluate(() => {
    if (window.__auditRenderDiagnostics) return;
    const result = { relevant_mutations: 0, noise_mutations: 0, categories: {}, recent: [], final_window: null };
    const short = (value, length = 120) => String(value || '').slice(0, length);
    const location = target => { const r = target.getBoundingClientRect?.(); if (!r) return { visible: false, intersects_viewport: false, position: 'unknown', rect: null }; const visible = r.width > 1 && r.height > 1; const intersects_viewport = visible && r.bottom > 0 && r.top < innerHeight; return { visible, intersects_viewport, position: !visible ? 'unknown' : intersects_viewport ? 'intersecting' : r.bottom <= 0 ? 'above_viewport' : 'below_viewport', rect: { top: Math.round(r.top), bottom: Math.round(r.bottom), width: Math.round(r.width), height: Math.round(r.height) } }; };
    const signature = (mutation, category) => { const target = mutation.target.nodeType === Node.ELEMENT_NODE ? mutation.target : mutation.target.parentElement; const loc = target ? location(target) : location({}); const section = target?.closest?.('section,main,article,[role="main"],[id]') || null; return { type: mutation.type, category, attribute: mutation.attributeName || null, target_tag: target?.tagName || '#text', target_id: short(target?.id, 80) || null, target_classes: short(target?.className, 160) || null, section_hint: short(section?.id || section?.className || section?.tagName, 160) || null, ...loc, added_nodes: mutation.addedNodes?.length || 0, removed_nodes: mutation.removedNodes?.length || 0, node_tags: [...(mutation.addedNodes || []), ...(mutation.removedNodes || [])].slice(0, 8).map(node => node.nodeType === Node.ELEMENT_NODE ? node.tagName : '#text') }; };
    const substantive = node => node && node.nodeType === Node.ELEMENT_NODE && !['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(node.tagName);
    const classify = mutation => {
      if (mutation.type === 'childList') return [...mutation.addedNodes, ...mutation.removedNodes].some(substantive) ? 'child_list_substantive' : 'child_list_noise';
      const name = mutation.attributeName || '';
      const target = mutation.target;
      if (['src', 'srcset', 'href'].includes(name)) return 'content_resource_attribute';
      if (name === 'style' && /transform/i.test(target.getAttribute('style') || '') && !/display|visibility|height|width/i.test(target.getAttribute('style') || '')) return 'animation_transform_noise';
      if (['class', 'style', 'hidden', 'aria-hidden'].includes(name)) {
        const rect = target.getBoundingClientRect?.();
        return rect && rect.width > 1 && rect.height > 1 ? 'visible_layout_candidate' : 'offscreen_attribute_noise';
      }
      if (mutation.type === 'characterData') return 'text_candidate';
      return 'attribute_noise';
    };
    new MutationObserver(mutations => mutations.forEach(mutation => {
      const category = classify(mutation);
      const material = /substantive|content_resource|visible_layout|text_candidate/.test(category);
      if (material) result.relevant_mutations++; else result.noise_mutations++;
      if (result.final_window) {
        if (material) result.final_window.material_mutations++; else result.final_window.noise_mutations++;
        const detail = signature(mutation, category); const key = JSON.stringify([detail.type, detail.category, detail.attribute, detail.target_tag, detail.target_id, detail.target_classes, detail.section_hint, detail.position]);
        const entry = result.final_window.signatures[key] || { ...detail, count: 0, first_observed_ms: Math.round(performance.now() - result.final_window.started_at), last_observed_ms: 0 };
        entry.count++; entry.last_observed_ms = Math.round(performance.now() - result.final_window.started_at); entry.added_nodes += detail.added_nodes; entry.removed_nodes += detail.removed_nodes; result.final_window.signatures[key] = entry;
      }
      result.categories[category] = (result.categories[category] || 0) + 1;
      if (result.recent.length < 100) result.recent.push({ category, material, type: mutation.type, attribute: mutation.attributeName || null });
    })).observe(document.documentElement, { subtree: true, childList: true, attributes: true, characterData: true, attributeFilter: ['src', 'srcset', 'href', 'class', 'style', 'hidden', 'aria-hidden'] });
    window.__auditRenderDiagnostics = result;
  });
}

async function renderDiagnosticsSnapshot(page) {
  return page.evaluate(() => ({ ...window.__auditRenderDiagnostics, categories: { ...(window.__auditRenderDiagnostics?.categories || {}) } }));
}

async function beginFinalStabilityWindow(page) {
  await page.evaluate(() => {
    if (window.__auditRenderDiagnostics) window.__auditRenderDiagnostics.final_window = { material_mutations: 0, noise_mutations: 0, started_at: performance.now(), signatures: {} };
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
    // Re-enumerate until the bounded deadline: lazy images may only be added
    // when a preceding natural scroll has triggered an observer.
    const settleImage = image => image.complete ? Promise.resolve() : new Promise(resolve => {
      image.addEventListener('load', resolve, { once: true }); image.addEventListener('error', resolve, { once: true });
    });
    const imagePromise = (async () => {
      const seen = new Set();
      while (performance.now() - started < timeout) {
        const batch = [...document.images].filter(image => !seen.has(image));
        batch.forEach(image => seen.add(image));
        await Promise.race([Promise.all(batch.map(settleImage)), new Promise(resolve => setTimeout(resolve, 75))]);
        // An untouched lazy/hidden image is not evidence that the content we
        // naturally reached failed to render. Only an actual source near the
        // current viewport can hold this bounded wait open.
        if ([...document.images].filter(image => {
          const rect = image.getBoundingClientRect();
          const actual = image.getAttribute('src') || image.currentSrc;
          return actual && rect.width > 1 && rect.height > 1 && rect.bottom > -innerHeight && rect.top < innerHeight * 2;
        }).every(image => image.complete)) return 'settled';
      }
      return 'timeout';
    })();
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
      images: { discovered_at_start: imagesAtStart.length, discovered_at_end: images.length, discovered_after_start: Math.max(0, images.length - imagesAtStart.length), complete: images.filter(image => image.complete && image.naturalWidth > 0).length, failed: images.filter(image => image.complete && image.naturalWidth === 0).length, pending: images.filter(image => !image.complete).length, pending_relevant: images.filter(image => { const r = image.getBoundingClientRect(); return !image.complete && Boolean(image.getAttribute('src') || image.currentSrc) && r.width > 1 && r.height > 1 && r.bottom > -innerHeight && r.top < innerHeight * 2; }).length }
    };
  }, bounded);
}

export async function scrollForRender(page, { pauseMs = 180, maxIterations = 80, totalBudgetMs = 30_000, stabilitySampleMs = 180, stabilityConsecutiveSamples = 3, stepStabilityTimeoutMs = 3_000, stepRatio = .8, progressiveBudgetFraction = .6, finalSettleReserveMs = 9_000, bottomPassCount = 3, heightTolerancePx = 2 } = {}) {
  const pause = Math.max(25, Math.min(1_000, Number(pauseMs) || 180));
  const limit = Math.max(1, Math.min(160, Number(maxIterations) || 80));
  await page.evaluate(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }));
  await installRenderDiagnostics(page);
  const samples = []; const started = Date.now(); let budgetExhausted = false; let stopReason = 'iteration_cap';
  const reserve = Math.max(1_000, Math.min(totalBudgetMs - 500, Number(finalSettleReserveMs) || totalBudgetMs * .3));
  const progressiveCap = Math.max(1_000, Math.min(totalBudgetMs - reserve, totalBudgetMs * Math.max(.2, Math.min(.85, Number(progressiveBudgetFraction) || .6))));
  let bottomPasses = 0;
  for (let iteration = 0; iteration < limit; iteration++) {
    const elapsedBefore = Date.now() - started;
    const pre = await page.evaluate(() => ({ y: scrollY, height: Math.max(document.documentElement.scrollHeight, document.body?.scrollHeight || 0), viewport: innerHeight }));
    const distanceBefore = Math.max(0, pre.height - pre.viewport - pre.y);
    // The reserve reduces intermediate settling, but is never permission to
    // abandon forward progress before bottom. Reaching bottom is prerequisite
    // to final settling.
    const sample = await page.evaluate(ratio => {
      const root = document.documentElement;
      const height = Math.max(root.scrollHeight, document.body?.scrollHeight || 0);
      const before = scrollY;
      const maximum = Math.max(0, height - innerHeight);
      const next = Math.min(maximum, before + Math.max(1, Math.floor(innerHeight * Math.max(.7, Math.min(.85, Number(ratio) || .8)))));
      window.scrollTo({ top: next, left: 0, behavior: 'instant' });
      return { iteration: 0, before, requested: next, height_before: height, viewport_height: innerHeight, at_bottom: next >= maximum };
    }, stepRatio);
    await page.waitForTimeout(pause);
    let stableSamples = 0, previous = null, stepTimedOut = false, assetSummary = null;
    const stepStarted = Date.now();
    const isBottomCandidate = sample.at_bottom;
    const nearReserve = totalBudgetMs - elapsedBefore <= reserve;
    const stepCap = isBottomCandidate ? stepStabilityTimeoutMs : (nearReserve ? Math.min(350, stepStabilityTimeoutMs) : Math.min(stepStabilityTimeoutMs, Math.max(150, Math.floor(reserve / 8))));
    while (stableSamples < stabilityConsecutiveSamples && Date.now() - stepStarted < stepCap && Date.now() - started < totalBudgetMs) {
      assetSummary = await waitForRenderAssets(page, Math.min(250, stepCap));
      const state = await renderState(page);
      const relevantPending = state.images.filter(i => !i.complete && i.material).length;
      const marker = [Math.round(state.dimensions.scroll_height / Math.max(1, heightTolerancePx)), state.images.filter(i => i.complete && !i.failed).length, relevantPending, state.resources.length, state.reveal_markers].join(':');
      stableSamples = marker === previous ? stableSamples + 1 : 0; previous = marker;
      if (stableSamples < stabilityConsecutiveSamples) await page.waitForTimeout(Math.max(25, stabilitySampleMs));
    }
    if (Date.now() - stepStarted >= stepCap) stepTimedOut = true;
    if (Date.now() - started >= totalBudgetMs) { budgetExhausted = true; stopReason = 'total_budget'; }
    const after = await page.evaluate(() => ({ scroll_y: scrollY, height_after: Math.max(document.documentElement.scrollHeight, document.body?.scrollHeight || 0), viewport_height: innerHeight }));
    sample.iteration = iteration + 1;
    Object.assign(sample, after);
    sample.height_increased = sample.height_after > sample.height_before;
    const state = await renderState(page); const mutations = await renderDiagnosticsSnapshot(page);
    const imageCounts = { total: state.images.length, loaded: state.images.filter(i => i.complete && !i.failed).length, failed: state.images.filter(i => i.failed).length, pending: state.images.filter(i => !i.complete).length, pending_visible: state.images.filter(i => !i.complete && i.visible).length, pending_near_viewport: state.images.filter(i => !i.complete && i.near_viewport).length, visible_failed: state.images.filter(i => i.failed && i.visible).length };
    Object.assign(sample, { stable_samples: stableSamples, step_timed_out: stepTimedOut, elapsed_step_ms: Date.now() - stepStarted, cumulative_render_ms: Date.now() - started, distance_to_bottom: Math.max(0, sample.height_after - sample.viewport_height - sample.scroll_y), bottom_candidate: isBottomCandidate, entered_minimum_dwell_progress_mode: nearReserve && !isBottomCandidate, assets: assetSummary, images: imageCounts, resources_count: state.resources.length, relevant_dom_mutation_count: mutations.relevant_mutations, ignored_noise_mutation_count: mutations.noise_mutations, budget_remaining_ms: Math.max(0, totalBudgetMs - (Date.now() - started)) }); samples.push(sample);
    const atBottomNow = sample.scroll_y + sample.viewport_height >= sample.height_after - heightTolerancePx;
    bottomPasses = atBottomNow && !sample.height_increased ? bottomPasses + 1 : 0;
    if (bottomPasses >= bottomPassCount) { stopReason = 'stable_bottom_passes'; break; }
    if (budgetExhausted) break;
  }
  // Phase B: always spend the reserved bounded window at the current/new bottom.
  const finalStarted = Date.now();
  const mayFinalSettle = samples.some(sample => sample.bottom_candidate || sample.scroll_y + sample.viewport_height >= sample.height_after - heightTolerancePx);
  if (mayFinalSettle) { await beginFinalStabilityWindow(page); bottomPasses = 0; }
  let finalStableSamples = 0, finalFingerprintChanged = false, finalHeightChanged = false, finalRelevantImageStateChanged = false, finalPrevious = null; const finalTimeline = [];
  while (mayFinalSettle && Date.now() - finalStarted < reserve && Date.now() - started < totalBudgetMs && bottomPasses < bottomPassCount) {
    const step = await page.evaluate(tolerance => { const h = Math.max(document.documentElement.scrollHeight, document.body?.scrollHeight || 0); const max = Math.max(0, h - innerHeight); window.scrollTo({ top: max, left: 0, behavior: 'instant' }); return { scroll_y: scrollY, height: h, viewport_height: innerHeight, tolerance }; }, heightTolerancePx);
    await page.waitForTimeout(pause);
    const before = await renderState(page); const beforeFinalMutations = (await renderDiagnosticsSnapshot(page)).final_window?.material_mutations ?? 0;
    await waitForRenderAssets(page, Math.min(500, Math.max(100, reserve - (Date.now() - finalStarted))));
    const after = await renderState(page); const afterFinalMutations = (await renderDiagnosticsSnapshot(page)).final_window?.material_mutations ?? 0;
    const atBottom = step.scroll_y + step.viewport_height >= after.dimensions.scroll_height - heightTolerancePx;
    const relevantPending = after.images.filter(i => !i.complete && i.material).length;
    const fingerprint = [Math.round(after.dimensions.scroll_height / Math.max(1, heightTolerancePx)), after.images.filter(i => i.complete && !i.failed).length, relevantPending, after.resources.length, after.reveal_markers].join(':');
    const fingerprintChangedThisSample = finalPrevious !== null && finalPrevious !== fingerprint;
    finalFingerprintChanged ||= fingerprintChangedThisSample;
    finalHeightChanged ||= Math.abs(after.dimensions.scroll_height - before.dimensions.scroll_height) > heightTolerancePx;
    finalRelevantImageStateChanged ||= before.images.filter(i => !i.complete && i.material).length !== relevantPending;
    // Mutation activity remains diagnostic evidence. Final convergence is
    // determined by the resulting audit-material state after the dwell, not
    // by event silence: reveal/content/image/layout changes still alter one
    // of the substantive state dimensions below.
    const stable = Math.abs(after.dimensions.scroll_height - before.dimensions.scroll_height) <= heightTolerancePx && relevantPending === 0 && !fingerprintChangedThisSample;
    const stableBefore = finalStableSamples; const reset_reasons = [];
    const mutation_activity_observed = afterFinalMutations !== beforeFinalMutations;
    if (fingerprintChangedThisSample) reset_reasons.push('fingerprint_changed');
    if (Math.abs(after.dimensions.scroll_height - before.dimensions.scroll_height) > heightTolerancePx) reset_reasons.push('height_changed');
    if (before.images.filter(i => !i.complete && i.material).length !== relevantPending) reset_reasons.push('relevant_image_state_changed');
    finalStableSamples = stable ? finalStableSamples + 1 : 0;
    finalPrevious = fingerprint;
    if (finalTimeline.length < 30) finalTimeline.push({ relative_ms: Date.now() - finalStarted, fingerprint, fingerprint_changed: reset_reasons.includes('fingerprint_changed'), document_height: after.dimensions.scroll_height, height_changed: reset_reasons.includes('height_changed'), relevant_image_state: relevantPending, relevant_image_state_changed: reset_reasons.includes('relevant_image_state_changed'), material_mutation_delta: afterFinalMutations - beforeFinalMutations, mutation_activity_observed, noise_mutation_delta: ((await renderDiagnosticsSnapshot(page)).final_window?.noise_mutations ?? 0), stable, stable_counter_before: stableBefore, stable_counter_after: finalStableSamples, reset_reasons });
    bottomPasses = atBottom && stable ? bottomPasses + 1 : 0;
  }
  if (Date.now() - started >= totalBudgetMs) { budgetExhausted = true; if (stopReason === 'iteration_cap') stopReason = 'total_budget'; }
  const beforeReturn = await page.evaluate(() => { const final_height = Math.max(document.documentElement.scrollHeight, document.body?.scrollHeight || 0); return { final_scroll_y: scrollY, final_height, viewport_height: innerHeight, max_scroll_y: Math.max(0, final_height - innerHeight), remaining_pixels: Math.max(0, final_height - innerHeight - scrollY) }; });
  const finalMutationDiagnostics = await renderDiagnosticsSnapshot(page);
  await page.evaluate(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }));
  await page.waitForTimeout(pause);
  return {
    audit_induced: true,
    action: 'incremental read-only scroll for render stabilization',
    iterations: samples.length,
    max_iterations: limit,
    reached_bottom: bottomPasses >= bottomPassCount || samples.some(sample => sample.scroll_y + sample.viewport_height >= sample.height_after - heightTolerancePx),
    height_increased: samples.some(sample => sample.height_increased),
    initial_height: samples[0]?.height_before ?? beforeReturn.final_height,
    final_height: beforeReturn.final_height,
    returned_to_top: await page.evaluate(() => scrollY === 0),
    budget_exhausted: budgetExhausted,
    total_budget_ms: totalBudgetMs,
    progressive_budget_cap_ms: progressiveCap,
    final_settle_reserve_ms: reserve,
    final_settle_elapsed_ms: Date.now() - finalStarted,
    bottom_passes: bottomPasses,
    bottom_pass_count_required: bottomPassCount,
    height_tolerance_px: heightTolerancePx,
    stop_reason: stopReason,
    final_position: beforeReturn,
    mutation_diagnostics: finalMutationDiagnostics,
    final_stability: { historical_material_mutations: finalMutationDiagnostics.relevant_mutations, historical_noise_mutations: finalMutationDiagnostics.noise_mutations, final_window_material_mutations: finalMutationDiagnostics.final_window?.material_mutations ?? null, final_window_noise_mutations: finalMutationDiagnostics.final_window?.noise_mutations ?? null, final_mutation_signatures: Object.values(finalMutationDiagnostics.final_window?.signatures || {}).sort((a, b) => b.count - a.count).slice(0, 25), final_sample_timeline: finalTimeline, final_stable_samples: finalStableSamples, required_final_stable_samples: bottomPassCount, final_fingerprint_changed: finalFingerprintChanged, final_height_changed: finalHeightChanged, final_relevant_image_state_changed: finalRelevantImageStateChanged },
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
      const initialAssets = await waitForRenderAssets(page, Number(config.initialRenderTimeoutMs ?? config.renderAssetTimeoutMs ?? 8_000));
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
      await capture('initial', 'viewport', 'allow', { capture_phase: 'first_viewport', asset_wait_timed_out: initialAssets.timed_out });
      await capture('initial', 'full', 'allow', { capture_phase: 'first_viewport', asset_wait_timed_out: initialAssets.timed_out });
      // This is deliberately measured before synthetic scrolling. It remains
      // LAB evidence and is not presented as field performance.
      const performance = await performanceState(page, network);
      const perfPath = `evidence/lighthouse/${key}.${name}.${revision}.lab.json`;
      performance.capture_phase = 'performance_clean_load';
      performance.synthetic_scroll_before_measurement = false;
      await artifact(runDir, perfPath, JSON.stringify(performance, null, 2));
      add('performance', 'lab_metrics', name, perfPath, { capture_phase: 'performance_clean_load', synthetic_scroll_before_measurement: false, lcp_ms: performance.lcp_ms, cls: performance.cls, ttfb_ms: performance.ttfb_ms, inp: null, field_available: false, lighthouse_scores_available: false });
      const scroll = await scrollForRender(page, {
        pauseMs: Number(config.scrollPauseMs ?? 180),
        maxIterations: Number(config.maxScrollIterations ?? 80), totalBudgetMs: Number(config.totalRenderBudgetMs ?? 30_000),
        stabilitySampleMs: Number(config.stabilitySampleMs ?? 180), stabilityConsecutiveSamples: Number(config.stabilityConsecutiveSamples ?? 3),
        stepStabilityTimeoutMs: Number(config.stepStabilityTimeoutMs ?? 3_000), stepRatio: Number(config.scrollStepRatio ?? .8),
        progressiveBudgetFraction: Number(config.progressiveRenderBudgetFraction ?? .6), finalSettleReserveMs: Number(config.finalSettleReserveMs ?? 9_000),
        bottomPassCount: Number(config.bottomPassCount ?? 3), heightTolerancePx: Number(config.heightTolerancePx ?? 2)
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
      const imageStateTransitions = afterScroll.images.map(image => {
        const before = beforeScroll.images.find(candidate => candidate.identity === image.identity);
        const states = [];
        if (!before) states.push('discovered_after_scroll');
        const beforePending = before && (!before.complete || (!before.src && Boolean(before.data_src || before.data_srcset)));
        if (beforePending && image.complete && !image.failed) states.push('pending_to_loaded');
        if (beforePending && image.failed) states.push('pending_to_failed');
        if (before && before.src !== image.src) states.push('src_changed');
        if (image.visible) states.push('visible'); else if (image.near_viewport) states.push('near_viewport'); else states.push('offscreen_or_unknown');
        return { identity: image.identity, transitions: states.length ? states : ['present_unchanged'], final: image };
      });
      const relevantPendingImages = afterScroll.images.filter(image => !image.complete && image.material);
      // A decoded failure with a concrete rendered box is material even if we
      // have returned to the top for the final capture; the compact step
      // diagnostics retain whether it was visible during traversal.
      const visibleFailedAssets = afterScroll.images.filter(image => image.failed && image.rect.width > 1 && image.rect.height > 1 && Boolean(image.src || image.declared_src)).map(image => ({ url: image.src || image.declared_src || image.data_src, tag: 'img', natural_width: image.natural_width, natural_height: image.natural_height, rect: image.rect, alt: image.identity.split(':')[2] || null, materiality: image.visible ? 'visible' : 'traversed_or_unknown', context: image.visible ? 'viewport_intersection' : 'rendered_box_with_concrete_source' }));
      const visibleFailedImages = visibleFailedAssets.length;
      const renderReasonCodes = [];
      if (scroll.budget_exhausted) renderReasonCodes.push('render_partial_budget_exhausted');
      if (!scroll.reached_bottom) renderReasonCodes.push('render_partial_bottom_not_reached');
      if (scroll.reached_bottom && (scroll.final_stability.final_stable_samples < scroll.final_stability.required_final_stable_samples || scroll.final_stability.final_fingerprint_changed || scroll.final_stability.final_height_changed || scroll.final_stability.final_relevant_image_state_changed)) renderReasonCodes.push('render_partial_unstable_dom');
      if (relevantPendingImages.length) renderReasonCodes.push('render_partial_lazy_timeout');
      if (visibleFailedImages) renderReasonCodes.push('render_partial_visible_asset_failure');
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
        image_diagnostics: {
          images_declared_at_start: beforeScroll.images.length,
          images_discovered_after_start: Math.max(0, afterScroll.images.length - beforeScroll.images.length),
          image_state_transitions: imageStateTransitions,
          pending_visible: relevantPendingImages.filter(image => image.visible).length,
          pending_near_viewport: relevantPendingImages.filter(image => image.near_viewport).length,
          pending_offscreen_or_unknown: afterScroll.images.filter(image => !image.complete && !image.material).length
        },
        failed_visible_assets: visibleFailedAssets,
        failed_resources: renderFailures,
        decode_failures: decodeFailures,
        final_capture_after_stabilization: true,
        resource_health: { failed_resources: renderFailures.length, failed_images: decodeFailures.images, failed_fonts: decodeFailures.fonts, pending_images: decodeFailures.pending_images, relevant_pending_images: relevantPendingImages.length, visible_failed_images: visibleFailedImages },
        render_reason_codes: renderReasonCodes.length ? renderReasonCodes : ['render_complete'],
        render_complete: renderReasonCodes.length === 0
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
        animation_freeze_applied: animationFreezeApplied, render_reason_codes: stabilization.render_reason_codes, resource_health: stabilization.resource_health
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
      await capture('stabilized', 'viewport', 'allow', { capture_phase: 'scroll_stabilized', stabilization_evidence_id: stabilizationEvidence.evidence_id, animation_freeze_applied: animationFreezeApplied, animation_freeze_method: animationFreeze.method });
      await capture('stabilized', 'full', 'allow', { capture_phase: 'scroll_stabilized', stabilization_evidence_id: stabilizationEvidence.evidence_id, animation_freeze_applied: animationFreezeApplied, animation_freeze_method: animationFreeze.method });
      let accessibility;
      try {
        await page.addScriptTag({ content: axe.source });
        accessibility = await page.evaluate(async () => await window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] } }));
      } catch (error) { accessibility = { unavailable: true, reason: error.message }; incomplete.push('axe unavailable'); }
      const axePath = `evidence/accessibility/${key}.${name}.${revision}.json`;
      await artifact(runDir, axePath, JSON.stringify(accessibility, null, 2));
      add('axe', 'accessibility', name, axePath, { violations: accessibility.violations?.length ?? null, unavailable: accessibility.unavailable ?? false });
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
