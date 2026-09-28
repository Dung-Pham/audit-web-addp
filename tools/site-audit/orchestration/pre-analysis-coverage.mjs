import { readFile } from 'node:fs/promises';
import path from 'node:path';

const products = [{ id: 'glucare', aliases: ['glucare'] }, { id: 'vien_an_duong', aliases: ['vien-an-duong'] }, { id: 'dovital', aliases: ['dovital'] }];
const text = page => decodeURIComponent(`${page.url} ${page.page_type || ''}`).toLowerCase();
const matchesProduct = (page, product) => (product.aliases || []).some(alias => text(page).includes(String(alias).toLowerCase()));
export function evaluatePreAnalysisCoverage({ candidates = [], selected = [], mandatoryCoverage = {} } = {}) {
  const failures = [];
  for (const product of mandatoryCoverage.canonicalProducts || products) {
    const discovered = candidates.some(page => page.page_type === 'product_detail' && matchesProduct(page, product) && !page.error);
    // This gate identifies the framework failure specifically: a safe,
    // discovered route was omitted before agents could use it. Collection
    // failures remain explicit collection evidence rather than being confused
    // with a selector omission.
    const selectedPage = selected.some(page => page.page_type === 'product_detail' && matchesProduct(page, product));
    if (discovered && !selectedPage) failures.push({ code: 'MANDATORY_PRODUCT_SELECTION_GAP', product: product.id, reason: 'Safe discovered canonical-product candidate was omitted from selection.' });
  }
  const discoveredArticles = candidates.filter(page => page.page_type === 'article' && /\/blog\/post\//i.test(page.url) && !page.error);
  const selectedArticles = selected.filter(page => page.page_type === 'article' && /\/blog\/post\//i.test(page.url));
  if (discoveredArticles.length && !selectedArticles.length) failures.push({ code: 'ARTICLE_SELECTION_GAP', reason: 'Safe discovered article-detail candidates were omitted from usable selection.' });
  return { status: failures.length ? 'PRE_ANALYSIS_COVERAGE_FAILED' : 'PRE_ANALYSIS_COVERAGE_PASSED', failures, discovered_article_details: discoveredArticles.length, selected_article_details: selectedArticles.length };
}
export async function preAnalysisCoverageGate(runDir) {
  const read = async relative => JSON.parse(await readFile(path.join(runDir, relative), 'utf8'));
  const [discovery, pages, config] = await Promise.all([read('inventory/discovery.json'), read('inventory/pages.json'), read('config.json')]);
  return evaluatePreAnalysisCoverage({ candidates: discovery.candidates || [], selected: pages, mandatoryCoverage: config.mandatoryCoverage });
}
