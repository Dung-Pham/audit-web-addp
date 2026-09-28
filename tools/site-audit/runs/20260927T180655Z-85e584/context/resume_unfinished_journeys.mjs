import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { launchCollector, installReadOnlyBrowserGuard } from '../../../collectors/browser.mjs';
import { evidenceFor, safetyReason } from '../../../collectors/shared.mjs';
import { parseRobots } from '../../../collectors/crawler.mjs';
import { assertProductionReady } from '../../../orchestration/pipeline.mjs';

const runDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = async relative => JSON.parse(await fs.readFile(path.join(runDir, relative), 'utf8'));
const write = async (relative, value) => { const file = path.join(runDir, relative); await fs.mkdir(path.dirname(file), { recursive: true }); await fs.writeFile(file, JSON.stringify(value, null, 2)); };
const limit = async (promise, ms, label) => {
  let timer;
  try { return await Promise.race([promise, new Promise((_, reject) => { timer = setTimeout(() => reject(new Error(`${label} exceeded ${ms}ms`)), ms); })]); }
  finally { clearTimeout(timer); }
};

const config = await read('config.json');
await assertProductionReady(config);
const pages = await read('inventory/pages.json');
const discovery = await read('inventory/discovery.json');
const robots = parseRobots(discovery.robots.text);
const origin = new URL(config.target).origin;
const evidencePath = 'evidence/index.json';
const evidence = await read(evidencePath);
const journeysPath = 'analyses/personas/journeys.json';
const prior = await read(journeysPath).catch(() => []);
const journeys = prior.filter(journey => !['research', 'mobile'].includes(journey.persona));
const profiles = [
  { persona: 'research', mobile: false, goal: 'Research a nutrition product for a parent, then inspect company and policy information.', urls: ['https://addp.vn/', 'https://addp.vn/sua-hat-glucare-plus', 'https://addp.vn/gioi-thieu', 'https://addp.vn/chinh-sach-dat-hang'] },
  { persona: 'mobile', mobile: true, goal: 'Inspect product discovery and purchase controls as a middle-aged or older phone user with ordinary or limited digital confidence.', urls: ['https://addp.vn/', 'https://addp.vn/sua-hat-glucare-plus'] }
];

const browser = await launchCollector(config);
try {
  for (const profile of profiles) {
    const viewport = profile.mobile ? { width: 390, height: 844 } : { width: 1440, height: 1000 };
    const context = await browser.newContext({ viewport, isMobile: profile.mobile, hasTouch: profile.mobile, serviceWorkers: 'block', acceptDownloads: false });
    const networkGuard = [];
    await installReadOnlyBrowserGuard({ context, origin, robotsAllows: url => robots.allows(url), onBlocked: item => networkGuard.push({ status: 'blocked_by_audit', ...item }) });
    const page = await context.newPage();
    page.setDefaultTimeout(10_000); page.setDefaultNavigationTimeout(20_000);
    page.on('dialog', dialog => dialog.dismiss().catch(() => {})); page.on('download', download => download.cancel().catch(() => {}));
    const journey = { persona: profile.persona, goal: profile.goal, entry_url: config.target, steps: [], clicks: 0, pages_visited: [], blockers: [], confusion_points: ['Continuation used safe URLs already present in the public inventory after the generic journey runner stalled; direct navigation is not counted as a click.'], positive_signals: [], completion_status: 'partial', evidence_ids: [], method: 'Run-level continuation of unfinished deterministic journey using production read-only browser guards and bounded direct navigation to inventory URLs.' };
    for (const [index, url] of profile.urls.entries()) {
      if (new URL(url).origin !== origin || safetyReason(url) || !robots.allows(url) || !pages.some(item => item.url === url)) { journey.blockers.push(`Unsafe, robots-blocked, or unselected URL skipped: ${url}`); continue; }
      try {
        await limit(page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20_000 }), 22_000, 'navigation');
        await page.waitForTimeout(700);
        const state = await limit(page.evaluate(() => ({
          url: location.href, title: document.title, text: document.body.innerText,
          headings: [...document.querySelectorAll('h1,h2,h3')].map(element => element.innerText),
          links: [...document.querySelectorAll('a[href]')].map((element, linkIndex) => ({ index: linkIndex, href: element.href, text: element.innerText, visible: element.getBoundingClientRect().width > 0 && element.getBoundingClientRect().height > 0 && getComputedStyle(element).visibility !== 'hidden' })),
          forms: [...document.forms].map(form => ({ action: form.action, method: form.method, controls: [...form.elements].map(element => ({ tag: element.tagName, name: element.name, type: element.type, required: element.required, placeholder: element.placeholder })) })),
          dimensions: { width: innerWidth, scroll_width: document.documentElement.scrollWidth, scroll_height: document.documentElement.scrollHeight }
        })), 12_000, 'snapshot');
        const base = `evidence/journeys/${profile.persona}-continuation-${index}`;
        const jsonArtifact = `${base}.json`, screenshotArtifact = `${base}.png`;
        await write(jsonArtifact, { action: index === 0 ? 'Open homepage' : 'Navigate to public inventory URL', href: url, click_counted: false, viewport, state, network_guard: networkGuard });
        await limit(page.screenshot({ path: path.join(runDir, screenshotArtifact), fullPage: false, animations: 'disabled', timeout: 10_000 }), 12_000, 'screenshot');
        const pageType = pages.find(item => item.url === url)?.page_type ?? 'other';
        const record = evidenceFor({ url: state.url, pageType, collector: `persona-${profile.persona}-continuation`, type: 'journey', viewport: profile.mobile ? 'mobile' : 'desktop', artifact: jsonArtifact, rawFact: { action: index === 0 ? 'Open homepage' : 'Navigate to public inventory URL', href: url, click_counted: false, title: state.title } });
        record.evidence_id += `-${index}`;
        const screenshot = { ...record, evidence_id: `${record.evidence_id}-SHOT`, type: 'screenshot', artifact: screenshotArtifact, raw_fact: { viewport, captured_for: record.evidence_id } };
        evidence.push(record, screenshot); journey.evidence_ids.push(record.evidence_id, screenshot.evidence_id);
        journey.steps.push({ step: journey.steps.length + 1, action: index === 0 ? 'Open homepage' : 'Navigate to public inventory URL', url: state.url, href: url, click_counted: false, evidence_ids: [record.evidence_id, screenshot.evidence_id] });
        journey.pages_visited.push(state.url);
      } catch (error) { journey.blockers.push(`${url}: ${error.message}`); }
    }
    if (profile.persona === 'mobile') journey.blockers.push('Cart mutation, checkout submission, order, payment, account creation and form submission intentionally not executed.');
    journey.pages_visited = [...new Set(journey.pages_visited)];
    journey.positive_signals.push(`Recorded ${journey.steps.length} bounded read-only page state(s) across ${journey.pages_visited.length} distinct page(s).`);
    journey.completion_status = journey.steps.length === profile.urls.length && profile.persona === 'research' ? 'complete' : 'partial';
    journeys.push(journey);
    await write(journeysPath, journeys); await write(evidencePath, evidence);
    console.log(`Journey ${profile.persona}: ${journey.completion_status}, steps ${journey.steps.length}, clicks 0`);
    await limit(context.close(), 12_000, 'context close').catch(error => console.warn(error.message));
  }
} finally {
  await limit(browser.close(), 12_000, 'browser close').catch(error => console.warn(error.message));
}

console.log(JSON.stringify(journeys.map(journey => ({ persona: journey.persona, status: journey.completion_status, steps: journey.steps.length, clicks: journey.clicks, blockers: journey.blockers.length })), null, 2));
