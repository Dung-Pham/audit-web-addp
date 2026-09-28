import fs from 'node:fs/promises';
import path from 'node:path';
const readJSON = async (file, fallback) => { try { return JSON.parse(await fs.readFile(file, 'utf8')); } catch (error) { if (error.code === 'ENOENT') return fallback; throw error; } };
const writeJSON = async (file, data) => { await fs.mkdir(path.dirname(file), { recursive: true }); await fs.writeFile(file, JSON.stringify(data, null, 2)); };

const STATUS = ['COVERED', 'PARTIAL', 'NOT_FOUND', 'BLOCKED', 'UNKNOWN', 'OUT_OF_SCOPE'];
const productKeys = [{ id: 'glucare', match: /glucare/i }, { id: 'vien_an_duong', match: /vien[\s-]?an[\s-]?duong/i }, { id: 'dovital', match: /dovital/i }];
const related = (evidence, url, type) => evidence.filter(item => item.url === url && (!type || item.type === type));
const cell = (status, evidence_ids = [], urls = [], reason = '') => ({ status, evidence_ids, urls, reason });
const pageText = page => `${page.url} ${page.page_type || ''}`.toLowerCase();

function productMatrix(pages, evidence) {
  const capabilities = ['product_route', 'landing_route', 'detail', 'offer', 'price', 'cta', 'benefits', 'ingredients', 'supporting_evidence', 'reviews', 'faq', 'meta', 'canonical', 'structured_data', 'mobile', 'performance', 'purchase_route_visibility'];
  const products = {};
  for (const product of productKeys) {
    const matched = pages.filter(page => product.match.test(pageText(page)));
    const urls = matched.map(page => page.url);
    const collected = matched.filter(page => ['complete', 'partial'].includes(page.collection_status));
    const find = type => matched.flatMap(page => related(evidence, page.url, type));
    const base = collected.length ? (collected.some(page => page.collection_status === 'complete') ? 'COVERED' : 'PARTIAL') : (matched.length ? 'UNKNOWN' : 'NOT_FOUND');
    const matrix = Object.fromEntries(capabilities.map(capability => [capability, cell('UNKNOWN', [], urls, 'No deterministic signal mapping for this capability yet.')]));
    matrix.product_route = cell(base, collected.flatMap(page => related(evidence, page.url, 'raw_html').map(item => item.evidence_id)), urls, matched.length ? 'Matched public inventory route(s).' : 'No confidently mapped public route.');
    matrix.landing_route = cell(matched.some(page => /landing/.test(page.page_type || '')) ? base : 'UNKNOWN', [], urls, 'Landing route is only covered when inventory classifies one.');
    matrix.detail = cell(base, collected.flatMap(page => related(evidence, page.url, 'rendered_html').map(item => item.evidence_id)), urls, 'Rendered public product route evidence.');
    for (const [capability, type] of [['meta', 'rendered_seo'], ['canonical', 'rendered_seo'], ['structured_data', 'jsonld'], ['performance', 'lab_metrics']]) {
      const ids = find(type).map(item => item.evidence_id); matrix[capability] = cell(ids.length ? 'COVERED' : base === 'NOT_FOUND' ? 'NOT_FOUND' : 'UNKNOWN', ids, urls, ids.length ? `Observed ${type} evidence.` : `No ${type} evidence.`);
    }
    const mobile = matched.flatMap(page => related(evidence, page.url).filter(item => item.viewport === 'mobile' && item.type === 'stabilized_full_screenshot'));
    matrix.mobile = cell(mobile.length ? 'COVERED' : base === 'NOT_FOUND' ? 'NOT_FOUND' : 'UNKNOWN', mobile.map(item => item.evidence_id), urls, mobile.length ? 'Mobile stabilized screenshot exists.' : 'No mobile stabilized screenshot.');
    products[product.id] = { identity: product.id, urls, capabilities: matrix };
  }
  return products;
}

export function buildCoverageMatrix({ pages = [], evidence = [], journeys = [] } = {}) {
  const usable = pages.filter(page => ['complete', 'partial'].includes(page.collection_status));
  const home = pages.filter(page => page.page_type === 'homepage' || /:\/\/[^/]+\/?$/.test(page.url));
  const section = (name, matches) => ({ name, status: matches.length ? 'COVERED' : 'NOT_FOUND', urls: matches.map(page => page.url), evidence_ids: matches.flatMap(page => related(evidence, page.url).map(item => item.evidence_id)), reason: matches.length ? 'Collected public inventory/evidence exists.' : 'No matching collected public route.' });
  const articles = pages.filter(page => /article|news|blog/.test(page.page_type || '') || /news|blog/.test(page.url));
  const productCoverage = productMatrix(pages, evidence);
  const productsMapped = Object.values(productCoverage).filter(product => product.urls.length).length;
  const productGaps = Object.values(productCoverage).flatMap(product => Object.entries(product.capabilities).filter(([, value]) => !['COVERED', 'PARTIAL', 'BLOCKED'].includes(value.status)).map(([capability]) => `${product.identity}.${capability}`));
  const matrix = {
    statuses: STATUS,
    homepage: section('homepage', home),
    products: productCoverage,
    news: { listing: section('news_listing', pages.filter(page => /category|news/.test(page.page_type || '') || /news/.test(page.url))), article_detail: section('article_detail', articles), representative_article_count: articles.length, target_minimum: 3, target_preferred: 5 },
    company_trust: section('company_trust', pages.filter(page => /about|contact|policy|gioi-thieu|chinh-sach/.test(page.url))),
    commerce: { product_cta_visibility: cell(usable.length ? 'PARTIAL' : 'UNKNOWN', evidence.filter(item => item.type === 'visible_controls').map(item => item.evidence_id), usable.map(page => page.url), 'Controls collected; CTA semantic evaluation is evidence-dependent.'), guest_checkout_verification: cell('BLOCKED', [], [], 'Production read-only mode does not verify guest checkout/payment/KiotViet.') },
    positive_signals: journeys.flatMap(journey => (journey.positive_signals || []).map(observation => ({ title: 'Observed journey positive signal', observation, page: journey.entry_url, evidence_ids: journey.evidence_ids || [], why_preserve: 'Observed during deterministic journey.', confidence: 'observed' }))),
    gate: { status: usable.length && productsMapped === 3 && articles.length && home.length ? 'analysis_complete' : 'analysis_complete_with_coverage_gaps', reasons: { usable_homepage: Boolean(home.length), mapped_principal_products: productsMapped, article_sampling_attempted: Boolean(articles.length), company_trust_attempted: pages.some(page => /about|contact|policy|gioi-thieu|chinh-sach/.test(page.url)), commerce_visibility_attempted: evidence.some(item => item.type === 'visible_controls'), uncovered_product_capabilities: productGaps } }
  };
  return matrix;
}

export async function writeCoverageArtifacts(runDir) {
  const [pages, evidence, journeys] = await Promise.all([readJSON(path.join(runDir, 'inventory/pages.json'), []), readJSON(path.join(runDir, 'evidence/index.json'), []), readJSON(path.join(runDir, 'analyses/personas/journeys.json'), [])]);
  const matrix = buildCoverageMatrix({ pages, evidence, journeys });
  await writeJSON(path.join(runDir, 'review/coverage-matrix.json'), matrix);
  await writeJSON(path.join(runDir, 'review/product-coverage-matrix.json'), { statuses: STATUS, products: matrix.products });
  const articles = pages.filter(page => /article|news|blog/.test(`${page.page_type || ''} ${page.url}`));
  const articleStatus = value => value ? 'PRESENT' : 'ABSENT_IN_CAPTURE';
  const articleMatrix = { statuses: ['PRESENT', 'ABSENT_IN_CAPTURE', 'UNKNOWN', 'NOT_APPLICABLE', 'BLOCKED'], coverage_gap: articles.length ? null : 'No article detail page was present in the saved inventory/evidence.', articles: articles.map(page => {
    const rendered = related(evidence, page.url, 'rendered_seo')[0]; const raw = rendered?.raw_fact || {}; const schema = related(evidence, page.url, 'jsonld');
    const title = raw.title || null;
    const seoIds = related(evidence, page.url, 'rendered_seo').map(item => item.evidence_id);
    const linkIds = related(evidence, page.url, 'links').map(item => item.evidence_id);
    const unknown = { status: 'UNKNOWN', value: null, evidence_ids: seoIds };
    return { url: page.url, title: { status: articleStatus(title), value: title, evidence_ids: seoIds }, topic: { status: articleStatus(title), value: title, evidence_ids: seoIds }, summary_or_lead: unknown, author: unknown, author_credentials: unknown, author_profile_route: unknown, publication_date: unknown, update_date: unknown, editor_or_reviewer: unknown, organization_entity_attribution: unknown, citations_or_references: unknown, authoritative_outbound_references: { status: 'UNKNOWN', value: [], evidence_ids: linkIds }, medical_or_research_support: unknown, related_product_or_commercial_linkage: unknown, canonical: { status: raw.canonical ? 'PRESENT' : 'ABSENT_IN_CAPTURE', value: raw.canonical || null, evidence_ids: seoIds }, meta: { status: raw.description ? 'PRESENT' : 'ABSENT_IN_CAPTURE', value: raw.description || null, evidence_ids: seoIds }, internal_links: { status: 'UNKNOWN', value: [], evidence_ids: linkIds }, answerability: unknown, citation_readiness: unknown, question_headings: { status: 'UNKNOWN', value: [], evidence_ids: seoIds }, concise_answer_blocks: { status: 'UNKNOWN', value: [], evidence_ids: seoIds }, structured_data: { status: schema.length ? 'PRESENT' : 'ABSENT_IN_CAPTURE', evidence_ids: schema.map(item => item.evidence_id) }, health_claim_presence: unknown, supporting_source_route: unknown };
  }) };
  await writeJSON(path.join(runDir, 'review/article-coverage-matrix.json'), articleMatrix);
  return matrix;
}
