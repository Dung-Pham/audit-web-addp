import { readFile } from 'node:fs/promises';
import path from 'node:path';

const products = [{ id: 'glucare', match: /glucare/i }, { id: 'vien_an_duong', match: /vien[\s_-]?an[\s_-]?duong/i }, { id: 'dovital', match: /dovital/i }];
const usable = page => ['complete', 'partial'].includes(page.collection_status);
const text = page => decodeURIComponent(`${page.url} ${page.page_type || ''}`).toLowerCase();
export function evaluatePreAnalysisCoverage({ candidates = [], selected = [] } = {}) {
  const failures = [];
  for (const product of products) {
    const discovered = candidates.some(page => page.page_type === 'product_detail' && product.match.test(text(page)) && !page.error);
    const selectedPage = selected.some(page => page.page_type === 'product_detail' && product.match.test(text(page)) && usable(page));
    if (discovered && !selectedPage) failures.push({ code: 'MANDATORY_PRODUCT_SELECTION_GAP', product: product.id, reason: 'Safe discovered canonical-product candidate was omitted from usable selection.' });
  }
  const discoveredArticles = candidates.filter(page => page.page_type === 'article' && /\/blog\/post\//i.test(page.url) && !page.error);
  const selectedArticles = selected.filter(page => page.page_type === 'article' && /\/blog\/post\//i.test(page.url) && usable(page));
  if (discoveredArticles.length && !selectedArticles.length) failures.push({ code: 'ARTICLE_SELECTION_GAP', reason: 'Safe discovered article-detail candidates were omitted from usable selection.' });
  return { status: failures.length ? 'PRE_ANALYSIS_COVERAGE_FAILED' : 'PRE_ANALYSIS_COVERAGE_PASSED', failures, discovered_article_details: discoveredArticles.length, selected_article_details: selectedArticles.length };
}
export async function preAnalysisCoverageGate(runDir) {
  const read = async relative => JSON.parse(await readFile(path.join(runDir, relative), 'utf8'));
  const [discovery, pages] = await Promise.all([read('inventory/discovery.json'), read('inventory/pages.json')]);
  return evaluatePreAnalysisCoverage({ candidates: discovery.candidates || [], selected: pages });
}
