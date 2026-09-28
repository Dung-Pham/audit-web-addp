import test from 'node:test';
import assert from 'node:assert/strict';
import { selectCandidates } from '../collectors/crawler.mjs';
import { safetyReason } from '../collectors/shared.mjs';
import { evaluatePreAnalysisCoverage } from '../orchestration/pre-analysis-coverage.mjs';

const candidate = (url, page_type, priority = 50) => ({ url, page_type, priority, depth: 1, http_status: 200, content_type: 'text/html', final_url: url });
const product = (slug, priority = 1) => candidate(`https://fixture.test/${slug}`, 'product_detail', priority);

test('mandatory reservations keep all canonical products, article details, and explicit reasons inside 25 slots', () => {
  const candidates = [candidate('https://fixture.test/', 'homepage', 100)];
  for (let n = 0; n < 30; n++) candidates.push(candidate(`https://fixture.test/category/${n}`, 'category', 99 - n));
  candidates.push(product('glucare', 10), product('vien-an-duong-addp-combo-mua-2-tang-2', 98), product('vien-an-duong-addp', 2), product('dovital', 3));
  candidates.push(candidate('https://fixture.test/contact', 'contact', 90), candidate('https://fixture.test/contact/', 'contact', 89), candidate('https://fixture.test/gioi-thieu', 'company/about', 88), candidate('https://fixture.test/gioi-thieu/', 'company/about', 87));
  for (const slug of ['one', 'two', 'three', 'four']) candidates.push(candidate(`https://fixture.test/blog/post/${slug}`, 'article', 20));
  const result = selectCandidates(candidates, { maxPages: 25 });
  const selected = result.selected.map(page => page.url);
  assert.equal(result.selected.length <= 25, true);
  for (const slug of ['glucare', 'vien-an-duong-addp', 'dovital']) assert.ok(selected.some(url => url.endsWith(`/${slug}`)));
  // A combo may still be a representative page, but cannot consume the
  // canonical product reservation.
  assert.notEqual(result.reasons.get('https://fixture.test/vien-an-duong-addp-combo-mua-2-tang-2'), 'mandatory_product_vien_an_duong');
  assert.equal(selected.filter(url => /\/blog\/post\//.test(url)).length, 3);
  assert.equal(selected.filter(url => /\/contact\/?$/.test(url)).length, 1);
  assert.equal(result.reasons.get('https://fixture.test/vien-an-duong-addp'), 'mandatory_product_vien_an_duong');
  assert.equal(result.reasons.get('https://fixture.test/blog/post/one'), 'mandatory_article_sample');
  assert.equal(result.reasons.get('https://fixture.test/category/0'), 'representative_priority');
});

test('article content routes are safe while method, query, cart, checkout, and account mutations remain blocked', () => {
  for (const url of ['https://fixture.test/blog/post/example-article', 'https://fixture.test/blog/post/how-to-read-this']) assert.equal(safetyReason(url), null);
  for (const [url, method] of [
    ['https://fixture.test/blog/post/example-article', 'POST'],
    ['https://fixture.test/?action=delete', 'GET'],
    ['https://fixture.test/cart/add?sku=1', 'GET'],
    ['https://fixture.test/checkout/place-order', 'GET'],
    ['https://fixture.test/account/delete', 'GET']
  ]) assert.ok(safetyReason(url, method), `${method} ${url} should remain unsafe`);
});

test('pre-analysis coverage gate rejects selector omission and passes usable mandatory coverage', () => {
  const candidates = [product('glucare'), product('vien-an-duong-addp'), product('dovital'), candidate('https://fixture.test/blog/post/a', 'article')];
  const omitted = evaluatePreAnalysisCoverage({ candidates, selected: [{ ...candidates[0], collection_status: 'complete' }] });
  assert.equal(omitted.status, 'PRE_ANALYSIS_COVERAGE_FAILED');
  assert.deepEqual(omitted.failures.map(item => item.code).sort(), ['ARTICLE_SELECTION_GAP', 'MANDATORY_PRODUCT_SELECTION_GAP', 'MANDATORY_PRODUCT_SELECTION_GAP']);
  const passed = evaluatePreAnalysisCoverage({ candidates, selected: candidates.map(page => ({ ...page, collection_status: 'complete' })) });
  assert.equal(passed.status, 'PRE_ANALYSIS_COVERAGE_PASSED');
});
