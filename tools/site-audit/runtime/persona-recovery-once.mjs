import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';
import { evidenceFor, safetyReason } from '../collectors/shared.mjs';
import { parseRobots } from '../collectors/crawler.mjs';
import { auditRoot, readJSON, writeJSON } from '../orchestration/pipeline.mjs';

const runId = '20260928T211548Z-replacement-full-audit';
const runDir = path.join(auditRoot, 'runs', runId);
const config = await readJSON(path.join(runDir, 'config.json'));
const pages = await readJSON(path.join(runDir, 'inventory/pages.json'));
const discovery = await readJSON(path.join(runDir, 'inventory/discovery.json'));
const robots = parseRobots(discovery.robots.text);
const origin = new URL(config.target).origin;
const evidence = await readJSON(path.join(runDir, 'evidence/index.json'));
const journeyFile = path.join(runDir, 'analyses/personas/journeys.json');
let completedJourneys = await readJSON(journeyFile, []);
if (!completedJourneys.some(item => item.persona === 'first_time')) {
  const snapshots = await Promise.all([0, 1].map(index => readJSON(path.join(runDir, `evidence/journeys/first_time-${index}.json`))));
  const ids = [];
  const steps = snapshots.map((snapshot, index) => {
    const url = snapshot.state.url;
    const base = evidenceFor({ url, pageType: pages.find(item => item.url === url)?.page_type || 'other', collector: 'persona-first_time', type: 'journey', viewport: 'desktop', artifact: `evidence/journeys/first_time-${index}.json`, rawFact: { action: snapshot.action, title: snapshot.state.title, recovered_checkpoint: true } });
    base.evidence_id += `-first_time-${index}`;
    const screen = { ...base, evidence_id: `${base.evidence_id}-SHOT`, type: 'screenshot', artifact: `evidence/journeys/first_time-${index}.png`, raw_fact: { viewport: snapshot.viewport } };
    evidence.push(base, screen); ids.push(base.evidence_id, screen.evidence_id);
    return { step: index + 1, action: snapshot.action, url, ...(snapshot.href ? { href: snapshot.href, label: snapshot.label, verified: snapshot.verified } : {}), evidence_ids: [base.evidence_id, screen.evidence_id] };
  });
  const first = snapshots[1];
  completedJourneys.push({ persona: 'first_time', goal: 'Understand ADDP, find company information and a principal product route.', entry_url: config.target, steps, clicks: 1, clicks_verified: 1, actual_verified_interactions: [{ kind: 'visible_link_click', href: first.href, label: first.label, result_url: first.state.url }], assisted_direct_inspections: [], attempted_interactions: [{ kind: 'visible_link_click', href: first.href, label: first.label, recovery_attempt: true }], pages_visited: [...new Set(snapshots.map(item => item.state.url))], blockers: ['Journey runner recovery attempt ended after one verified visible click with Playwright error: route.abort: Route is already handled.'], confusion_points: [], positive_signals: ['Homepage and company introduction were reached through one visible safe link click.'], completion_status: 'partial', evidence_ids: ids, interruption_status: 'JOURNEY_EXECUTION_INTERRUPTED', last_completed_checkpoint: 'Company introduction page snapshot after verified click.' });
  await writeJSON(journeyFile, completedJourneys);
  await writeJSON(path.join(runDir, 'evidence/index.json'), evidence);
}
const profiles = [
  { persona: 'high_intent', goal: 'Find a named product and inspect safe purchase path, stopping before cart/order mutation.', patterns: [/glucare|vien-an-duong|dovital/i, /checkout\/cart|gio-hang|\/cart\/?$/i, /checkout|thanh-toan/i], mobile: false },
  { persona: 'mobile', goal: 'Use mobile navigation to inspect product and visible commerce controls without mutation.', patterns: [/glucare|vien-an-duong|dovital|san-pham/i, /gio-hang|checkout\/cart|\/cart\/?$/i], mobile: true },
  { persona: 'research', goal: 'Inspect product information, company attribution, and policy routes through visible links.', patterns: [/glucare|vien-an-duong|dovital/i, /gioi-thieu|about|ve-chung-toi/i, /chinh-sach|doi-tra|policy|privacy/i], mobile: false }
];
const telemetry = /(?:google-analytics\.com|googletagmanager\.com\/(?:g\/collect|gtm\.js)|doubleclick\.net|facebook\.com\/tr|connect\.facebook\.net|bat\.bing\.com|analytics|pixel|collect(?:\/|\?)|telemetry|hotjar|clarity\.ms|segment\.io|mixpanel|amplitude)/i;
const safeAbort = async route => { try { await route.abort('blockedbyclient'); } catch {} };
const blocked = [];
const browser = await chromium.launch({ headless: true, executablePath: config.browserExecutable, args: ['--disable-dev-shm-usage'] });
try {
  for (const profile of profiles) {
    const viewport = profile.mobile ? { width: 390, height: 844 } : { width: 1440, height: 1000 };
    const context = await browser.newContext({ viewport, isMobile: profile.mobile, hasTouch: profile.mobile, serviceWorkers: 'block', acceptDownloads: false });
    await context.route('**/*', async route => {
      const req = route.request(), url = req.url(), method = req.method();
      let reason = null;
      try {
        const parsed = new URL(url);
        if (!['http:', 'https:'].includes(parsed.protocol) || parsed.username || parsed.password) reason = 'unsupported URL';
        else if (req.isNavigationRequest() && parsed.origin !== origin) reason = 'cross-origin navigation blocked';
        else if (telemetry.test(url)) reason = 'telemetry blocked; audit-induced request';
        else reason = safetyReason(url, method);
        if (!reason && parsed.origin === origin && !robots.allows(url) && !['image', 'stylesheet', 'font', 'script'].includes(req.resourceType())) reason = 'robots disallow';
      } catch { reason = 'invalid request URL'; }
      if (reason) { blocked.push({ persona: profile.persona, url, method, reason, audit_induced: true }); await safeAbort(route); return; }
      try { await route.continue(); } catch { await safeAbort(route); }
    });
    const page = await context.newPage();
    page.on('dialog', dialog => dialog.dismiss().catch(() => {}));
    page.on('download', download => download.cancel().catch(() => {}));
    const journey = { persona: profile.persona, goal: profile.goal, entry_url: config.target, steps: [], clicks: 0, clicks_verified: 0, actual_verified_interactions: [], assisted_direct_inspections: [], attempted_interactions: [], pages_visited: [], blockers: [], confusion_points: [], positive_signals: [], completion_status: 'partial', evidence_ids: [], method: 'One bounded recovery pass; only safe visible same-origin links count as verified clicks. No commerce or form mutation.' };
    async function capture(action, extra = {}) {
      const n = journey.steps.length, rel = `evidence/journeys/${profile.persona}-${n}.json`, shot = `evidence/journeys/${profile.persona}-${n}.png`;
      const state = await page.evaluate(() => ({ url: location.href, title: document.title, text: (document.body?.innerText || '').slice(0, 12000), headings: [...document.querySelectorAll('h1,h2,h3')].map(el => el.innerText), links: [...document.querySelectorAll('a[href]')].map((el, index) => ({ index, href: el.href, text: (el.innerText || '').trim().slice(0, 300), visible: el.getBoundingClientRect().width > 0 && el.getBoundingClientRect().height > 0 && getComputedStyle(el).visibility !== 'hidden' })), buttons: [...document.querySelectorAll('button,[role=button]')].map(el => ({ text: (el.innerText || el.getAttribute('aria-label') || '').trim().slice(0, 150), visible: el.getBoundingClientRect().width > 0 && el.getBoundingClientRect().height > 0 })), forms: [...document.forms].map(form => ({ action: form.action, method: form.method })), dimensions: { width: innerWidth, scroll_width: document.documentElement.scrollWidth } }));
      await writeJSON(path.join(runDir, rel), { action, ...extra, viewport, state, network_guard: blocked.filter(item => item.persona === profile.persona) });
      await page.screenshot({ path: path.join(runDir, shot), fullPage: false, animations: 'disabled' });
      const pageType = pages.find(item => item.url === state.url)?.page_type || 'other';
      const base = evidenceFor({ url: state.url, pageType, collector: `persona-${profile.persona}`, type: 'journey', viewport: profile.mobile ? 'mobile' : 'desktop', artifact: rel, rawFact: { action, ...extra, title: state.title } });
      base.evidence_id += `-${profile.persona}-${n}`;
      const screen = { ...base, evidence_id: `${base.evidence_id}-SHOT`, type: 'screenshot', artifact: shot, raw_fact: { viewport } };
      evidence.push(base, screen); journey.evidence_ids.push(base.evidence_id, screen.evidence_id);
      journey.steps.push({ step: n + 1, action, url: state.url, ...extra, evidence_ids: [base.evidence_id, screen.evidence_id] });
      if (!journey.pages_visited.includes(state.url)) journey.pages_visited.push(state.url);
      return state;
    }
    try {
      await page.goto(config.target, { waitUntil: 'domcontentloaded', timeout: 45_000 });
      await page.waitForTimeout(1000);
      let state = await capture('Open homepage');
      let completedGoals = 0;
      for (const pattern of profile.patterns) {
        const link = state.links.find(item => {
          if (!item.visible || !pattern.test(`${item.href} ${item.text}`) || journey.pages_visited.includes(item.href)) return false;
          try { const candidate = new URL(item.href); return candidate.origin === origin && !safetyReason(item.href) && robots.allows(item.href); } catch { return false; }
        });
        if (!link) {
          journey.confusion_points.push(`unreachable_from_observed_ui: no visible safe matching link for ${pattern.source}`);
          journey.blockers.push(`No visible safe route was found for goal ${pattern.source}; direct inventory navigation was not substituted.`);
          if (/cart|checkout|thanh-toan/i.test(pattern.source)) journey.attempted_interactions.push({ kind: 'commerce_path_inspection', status: 'stopped_before_mutation', reason: 'read-only boundary; no cart or checkout action performed' });
          continue;
        }
        journey.attempted_interactions.push({ kind: 'visible_link_click', href: link.href, label: link.text });
        try {
          await page.locator('a[href]').nth(link.index).click({ timeout: 7000, noWaitAfter: true });
          await page.waitForLoadState('domcontentloaded', { timeout: 15_000 }).catch(() => {});
          await page.waitForTimeout(800);
          state = await capture('Click visible link', { label: link.text, href: link.href, verified: true });
          journey.clicks++; journey.clicks_verified++; completedGoals++;
          journey.actual_verified_interactions.push({ kind: 'visible_link_click', href: link.href, label: link.text, result_url: page.url() });
        } catch (error) { journey.blockers.push(`Visible link click failed: ${String(error.message).split('\n')[0]}`); }
      }
      if (profile.persona === 'high_intent') journey.blockers.push('Cart and checkout mutations were not attempted; exact safe stopping point is product page / visible cart entry only.');
      journey.positive_signals.push(`Observed ${journey.pages_visited.length} page(s) and ${journey.clicks_verified} verified visible click(s).`);
      journey.completion_status = journey.blockers.length ? 'partial' : completedGoals === profile.patterns.length ? 'complete' : 'partial';
    } catch (error) { journey.completion_status = 'blocked'; journey.blockers.push(`Journey execution blocked: ${String(error.message).split('\n')[0]}`); }
    await context.close();
    const existing = await readJSON(journeyFile, []);
    existing.push(journey);
    await writeJSON(journeyFile, existing);
    await writeJSON(path.join(runDir, 'evidence/index.json'), evidence);
    console.log(JSON.stringify({ persona: journey.persona, status: journey.completion_status, verified_clicks: journey.clicks_verified, pages: journey.pages_visited, blockers: journey.blockers.length, evidence_ids: journey.evidence_ids }));
  }
} finally { await browser.close(); }
