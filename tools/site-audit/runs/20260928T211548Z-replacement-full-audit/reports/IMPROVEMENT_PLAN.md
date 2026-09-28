# Improvement Plan

**Run ID:** 20260928T211548Z-replacement-full-audit  
**Date:** 2026-09-28T21:15:50.126Z  
**Target:** https://addp.vn/

This plan reflects accepted findings only. Manual review: 3; blocked: 0. No source file or module scope is asserted.

## 1. Objectives

- TASK-001: Address accepted finding FND-ANALYTICS-analytics-public-signals-not-observed-sample: No public GTM, GA4 request, or dataLayer signal was observed in the collected page sample (from FND-ANALYTICS-analytics-public-signals-not-observed-sample).
- TASK-002: Address accepted finding FND-BRAND-BRAND-20260928-001: Company attribution and contact details differ within the Viên An Đường page (from FND-BRAND-BRAND-20260928-001).
- TASK-003: Address accepted finding FND-CONTENT-CONTENT-001: Glucare Plus detail page exposes placeholder copy in product tabs (from FND-CONTENT-CONTENT-001).
- TASK-004: Make the product and trial prices unambiguous before shoppers act. (from FND-CONVERSION-CONV-001).
- TASK-005: Address accepted finding FND-GEO-AEO-GEO-AEO-001: Product structured data was not detected on sampled homepage and product pages (from FND-GEO-AEO-GEO-AEO-001).
- TASK-006: Address accepted finding FND-GEO-AEO-GEO-AEO-003: robots.txt is reachable, but AI crawler directives are not explicit in the captured rules (from FND-GEO-AEO-GEO-AEO-003).
- TASK-007: Address accepted finding FND-PERFORMANCE-PERF-001: Homepage LAB load metrics are substantially elevated on desktop and mobile (from FND-PERFORMANCE-PERF-001).
- TASK-008: Address accepted finding FND-PERFORMANCE-PERF-002: Diabetes-condition page has high LAB LCP and CLS in both captured viewports (from FND-PERFORMANCE-PERF-002).
- TASK-009: Address accepted finding FND-PERFORMANCE-PERF-003: Sampled diabetes articles show long LAB LCP on desktop and mobile (from FND-PERFORMANCE-PERF-003).
- TASK-010: Make the sitemap location advertised to crawlers resolve to a valid sitemap response. (from FND-TECHNICAL-SEO-SEO-001).
- TASK-011: Keep crawl directives and sitemap discovery aligned with intended public URL access. (from FND-TECHNICAL-SEO-SEO-002).
- TASK-012: Provide a distinct, accurate search-result summary for each sampled product page. (from FND-TECHNICAL-SEO-SEO-003).
- TASK-013: Address accepted finding FND-STRUCTURED-DATA-STRUCTURED-DATA-001: Required JSON-LD types were not present in the homepage and three sampled product captures (from FND-STRUCTURED-DATA-STRUCTURED-DATA-001).
- TASK-014: Reduce the measured homepage mobile load delay. (from FND-UX-UI-UXUI-001).

## 2. Target state

- TASK-001: The observed problem is addressed through: Review consent-aware public tag loading and approved analytics configuration, then validate event behavior through an authorized non-production test flow and analytics administration evidence..
- TASK-002: The observed problem is addressed through: Have the business confirm the intended company attribution, address format, and primary contact channels, then align the product contact block and shared footer if they should represent the same entity and contact point..
- TASK-003: The observed problem is addressed through: Replace the generic tab labels and placeholder text with verified, product-specific information, or remove the empty tabs. Have any health-related claims reviewed by an appropriately qualified expert before publication..
- TASK-004: Each distinct offer has a clear product name, payable price, and adjacent action label..
- TASK-005: The observed problem is addressed through: Review public structured data against the stated Organization, Product, and FAQPage requirement for the corresponding page types; validate any proposed markup against visible page facts..
- TASK-006: The observed problem is addressed through: Review intended access policy for each named crawler against the complete robots directives and verify public endpoint behavior for the relevant paths..
- TASK-007: The observed problem is addressed through: Repeat comparable clean-load measurements on desktop and mobile, inspect the recorded network and resource waterfall for the LCP element and response delays, and verify whether the elevated values persist before prioritizing optimization..
- TASK-008: The observed problem is addressed through: Repeat clean-load captures under comparable desktop and mobile conditions, then inspect the LCP element and layout-shift sources in the corresponding trace before selecting an optimization..
- TASK-009: The observed problem is addressed through: Repeat measurements for each URL at the same desktop and mobile viewports, compare the LCP element and resource timing in each trace, and assess any shared cause only after direct evidence supports it..
- TASK-010: The advertised sitemap URL returns a parseable sitemap with an appropriate successful status..
- TASK-011: Robots directives permit intended crawlable URLs and point to a working sitemap..
- TASK-012: Each sampled product URL exposes a unique, descriptive meta description aligned with visible page content..
- TASK-013: The observed problem is addressed through: Review the intended structured-data requirement against the sampled output. If the checklist is still authoritative, provide the requested Organization, Product, and FAQPage JSON-LD where the corresponding visible content supports it, and verify every claim against visible page content. Preserve and validate existing Product microdata where appropriate..
- TASK-014: Mobile first viewport becomes useful sooner under the recorded audit conditions..

## 3. Guiding principles

- Implement only evidence-linked changes in this backlog; investigate unverified technical causes before selecting an internal fix.
- Keep checklist requirements separate from best-practice proposals.
- Re-run external verification and manual review against each task’s acceptance criteria.
- Preserve public URL and index signals when a change touches search visibility.

## 4. Target user journeys

- **TASK-004** (P2, M): Address: A Glucare Plus product card shows a zero price beside a separate 9,000 ₫ trial offer. Findings: FND-CONVERSION-CONV-001; requirements: REQ-007-02; evidence: EVD-DF63C483FC434445, EVD-EA78205F3017C505.

Recorded journeys: first_time (partial), high_intent (partial), mobile (partial), research (partial)

## 5. Information architecture

- **TASK-010** (P1, M): Address: The advertised sitemap endpoints return 404. Findings: FND-TECHNICAL-SEO-SEO-001; requirements: REQ-015; evidence: EVD-A57DC932D580B784, EVD-B093A16D09E3A37E, EVD-C51AC48D3DB98538.
- **TASK-011** (P2, M): Address: Robots policy uses a broad wildcard rule and advertises an unavailable sitemap. Findings: FND-TECHNICAL-SEO-SEO-002; requirements: REQ-011, REQ-015; evidence: EVD-C51AC48D3DB98538, EVD-B093A16D09E3A37E.

## 6. Design system

- **TASK-013** (P2, M): Address: Required JSON-LD types were not present in the homepage and three sampled product captures. Findings: FND-STRUCTURED-DATA-STRUCTURED-DATA-001; requirements: REQ-010, REQ-010-01; evidence: EVD-32CB6452441EDF9E, EVD-C16C9A26189A6C8E, EVD-01FF964BE2B7A2AA, EVD-B1630958C79BC01D, EVD-02D7356CC02B574B, EVD-BDF90743647332F7, EVD-E32F848C405D32E0, EVD-EDDAD1FAFA69798C, EVD-F71EC5745F2AF71B.
- **TASK-014** (P1, M): Address: Homepage mobile load remains slow in recorded laboratory capture. Findings: FND-UX-UI-UXUI-001; requirements: REQ-013; evidence: EVD-3D15DCDB359887BF, EVD-9B3746A447795E5D.

## 7. Homepage

- **TASK-005** (P2, M): Address: Product structured data was not detected on sampled homepage and product pages. Findings: FND-GEO-AEO-GEO-AEO-001; requirements: REQ-010-01; evidence: EVD-32CB6452441EDF9E, EVD-02D7356CC02B574B, EVD-E32F848C405D32E0, EVD-2326A9C7428D947E, EVD-B8786FA90B6CDCB3, EVD-0CC76FEDCFD90652.
- **TASK-007** (P1, M): Address: Homepage LAB load metrics are substantially elevated on desktop and mobile. Findings: FND-PERFORMANCE-PERF-001; requirements: REQ-013; evidence: EVD-85956D06B433ABCA, EVD-3D15DCDB359887BF.
- **TASK-013** (P2, M): Address: Required JSON-LD types were not present in the homepage and three sampled product captures. Findings: FND-STRUCTURED-DATA-STRUCTURED-DATA-001; requirements: REQ-010, REQ-010-01; evidence: EVD-32CB6452441EDF9E, EVD-C16C9A26189A6C8E, EVD-01FF964BE2B7A2AA, EVD-B1630958C79BC01D, EVD-02D7356CC02B574B, EVD-BDF90743647332F7, EVD-E32F848C405D32E0, EVD-EDDAD1FAFA69798C, EVD-F71EC5745F2AF71B.
- **TASK-014** (P1, M): Address: Homepage mobile load remains slow in recorded laboratory capture. Findings: FND-UX-UI-UXUI-001; requirements: REQ-013; evidence: EVD-3D15DCDB359887BF, EVD-9B3746A447795E5D.

## 8. PDP

No accepted task is mapped here. Target design or implementation detail remains unestablished.

## 9. Landing pages

No accepted task is mapped here. Target design or implementation detail remains unestablished.

## 10. News/Knowledge Hub

- **TASK-009** (P1, M): Address: Sampled diabetes articles show long LAB LCP on desktop and mobile. Findings: FND-PERFORMANCE-PERF-003; requirements: REQ-013; evidence: EVD-140275788B638B2B, EVD-EEE8678F6CB7996C, EVD-1043761274B05EFF, EVD-381F4D853D891DF0.

## 11. Brand/trust

- **TASK-002** (P2, M): Address: Company attribution and contact details differ within the Viên An Đường page. Findings: FND-BRAND-BRAND-20260928-001; requirements: best practice; evidence: EVD-AD18B204CB25AAFE, EVD-927DDAF696B5D339.

## 12. Content

- **TASK-003** (P2, M): Address: Glucare Plus detail page exposes placeholder copy in product tabs. Findings: FND-CONTENT-CONTENT-001; requirements: REQ-007; evidence: EVD-C07AE1B67F5FAB1D.
- **TASK-004** (P2, M): Address: A Glucare Plus product card shows a zero price beside a separate 9,000 ₫ trial offer. Findings: FND-CONVERSION-CONV-001; requirements: REQ-007-02; evidence: EVD-DF63C483FC434445, EVD-EA78205F3017C505.
- **TASK-009** (P1, M): Address: Sampled diabetes articles show long LAB LCP on desktop and mobile. Findings: FND-PERFORMANCE-PERF-003; requirements: REQ-013; evidence: EVD-140275788B638B2B, EVD-EEE8678F6CB7996C, EVD-1043761274B05EFF, EVD-381F4D853D891DF0.

## 13. Health-content governance

No accepted task is mapped here. Target design or implementation detail remains unestablished.

## 14. Company/Product data governance

- **TASK-002** (P2, M): Address: Company attribution and contact details differ within the Viên An Đường page. Findings: FND-BRAND-BRAND-20260928-001; requirements: best practice; evidence: EVD-AD18B204CB25AAFE, EVD-927DDAF696B5D339.

## 15. SEO

- **TASK-006** (P2, M): Address: robots.txt is reachable, but AI crawler directives are not explicit in the captured rules. Findings: FND-GEO-AEO-GEO-AEO-003; requirements: REQ-011-01; evidence: EVD-C51AC48D3DB98538.
- **TASK-010** (P1, M): Address: The advertised sitemap endpoints return 404. Findings: FND-TECHNICAL-SEO-SEO-001; requirements: REQ-015; evidence: EVD-A57DC932D580B784, EVD-B093A16D09E3A37E, EVD-C51AC48D3DB98538.
- **TASK-011** (P2, M): Address: Robots policy uses a broad wildcard rule and advertises an unavailable sitemap. Findings: FND-TECHNICAL-SEO-SEO-002; requirements: REQ-011, REQ-015; evidence: EVD-C51AC48D3DB98538, EVD-B093A16D09E3A37E.
- **TASK-012** (P2, M): Address: Sampled product pages have missing or generic meta descriptions. Findings: FND-TECHNICAL-SEO-SEO-003; requirements: REQ-015; evidence: EVD-CD4C67022008E5BB, EVD-325C6659444AD546, EVD-927DDAF696B5D339.

## 16. GEO/AEO

- **TASK-005** (P2, M): Address: Product structured data was not detected on sampled homepage and product pages. Findings: FND-GEO-AEO-GEO-AEO-001; requirements: REQ-010-01; evidence: EVD-32CB6452441EDF9E, EVD-02D7356CC02B574B, EVD-E32F848C405D32E0, EVD-2326A9C7428D947E, EVD-B8786FA90B6CDCB3, EVD-0CC76FEDCFD90652.
- **TASK-006** (P2, M): Address: robots.txt is reachable, but AI crawler directives are not explicit in the captured rules. Findings: FND-GEO-AEO-GEO-AEO-003; requirements: REQ-011-01; evidence: EVD-C51AC48D3DB98538.

## 17. Structured data

- **TASK-005** (P2, M): Address: Product structured data was not detected on sampled homepage and product pages. Findings: FND-GEO-AEO-GEO-AEO-001; requirements: REQ-010-01; evidence: EVD-32CB6452441EDF9E, EVD-02D7356CC02B574B, EVD-E32F848C405D32E0, EVD-2326A9C7428D947E, EVD-B8786FA90B6CDCB3, EVD-0CC76FEDCFD90652.
- **TASK-013** (P2, M): Address: Required JSON-LD types were not present in the homepage and three sampled product captures. Findings: FND-STRUCTURED-DATA-STRUCTURED-DATA-001; requirements: REQ-010, REQ-010-01; evidence: EVD-32CB6452441EDF9E, EVD-C16C9A26189A6C8E, EVD-01FF964BE2B7A2AA, EVD-B1630958C79BC01D, EVD-02D7356CC02B574B, EVD-BDF90743647332F7, EVD-E32F848C405D32E0, EVD-EDDAD1FAFA69798C, EVD-F71EC5745F2AF71B.

## 18. Performance

- **TASK-007** (P1, M): Address: Homepage LAB load metrics are substantially elevated on desktop and mobile. Findings: FND-PERFORMANCE-PERF-001; requirements: REQ-013; evidence: EVD-85956D06B433ABCA, EVD-3D15DCDB359887BF.
- **TASK-008** (P1, M): Address: Diabetes-condition page has high LAB LCP and CLS in both captured viewports. Findings: FND-PERFORMANCE-PERF-002; requirements: REQ-013; evidence: EVD-035E196C34BF6621, EVD-D2E949A54A61C783.
- **TASK-009** (P1, M): Address: Sampled diabetes articles show long LAB LCP on desktop and mobile. Findings: FND-PERFORMANCE-PERF-003; requirements: REQ-013; evidence: EVD-140275788B638B2B, EVD-EEE8678F6CB7996C, EVD-1043761274B05EFF, EVD-381F4D853D891DF0.

## 19. Analytics

- **TASK-001** (P2, M): Address: No public GTM, GA4 request, or dataLayer signal was observed in the collected page sample. Findings: FND-ANALYTICS-analytics-public-signals-not-observed-sample; requirements: REQ-014-01; evidence: EVD-DBF33A19881A487E, EVD-04B228A36544C865, EVD-5E1FDAFD6E0F3BD0, EVD-2A0768485D1F0097, EVD-820A852713ADC090, EVD-DAC7815A6168F9B8, EVD-0B566D85DC39FA02, EVD-AEA3DB2C2D2E0F53.

## 20. Cart/Checkout

No accepted task is mapped here. Target design or implementation detail remains unestablished.

## 21. KiotViet/Integration

No accepted task is mapped here. Target design or implementation detail remains unestablished.

## 22. External Technical Remediation Plan

- **TASK-010** (P1, M): Address: The advertised sitemap endpoints return 404. Findings: FND-TECHNICAL-SEO-SEO-001; requirements: REQ-015; evidence: EVD-A57DC932D580B784, EVD-B093A16D09E3A37E, EVD-C51AC48D3DB98538.
- **TASK-011** (P2, M): Address: Robots policy uses a broad wildcard rule and advertises an unavailable sitemap. Findings: FND-TECHNICAL-SEO-SEO-002; requirements: REQ-011, REQ-015; evidence: EVD-C51AC48D3DB98538, EVD-B093A16D09E3A37E.
- **TASK-012** (P2, M): Address: Sampled product pages have missing or generic meta descriptions. Findings: FND-TECHNICAL-SEO-SEO-003; requirements: REQ-015; evidence: EVD-CD4C67022008E5BB, EVD-325C6659444AD546, EVD-927DDAF696B5D339.

Probable technical causes are hypotheses. Developers must verify them before implementation.

## 23. Developer Investigation List

- TASK-004: Confirm the intended price and offer terms for each Glucare Plus entry.
- TASK-010: Determine the intended sitemap endpoint and confirm response status and XML content.
- TASK-011: Compare disallowed URL patterns with intended canonical and crawlable URL types.
- TASK-012: Check page-level metadata configuration for the sampled product records.
- TASK-014: Identify the resources contributing to the recorded LCP and TTFB.

## 24. Migration/index considerations

No accepted task establishes migration or index changes. Verify redirect/canonical/index signals if implementation later affects URLs.

## 25. QA

- TASK-001: The observable problem described by FND-ANALYTICS-analytics-public-signals-not-observed-sample is absent on the affected URL(s) under the recorded audit conditions.; Evidence for FND-ANALYTICS-analytics-public-signals-not-observed-sample is re-collected and reviewed against its linked requirement(s).
- TASK-002: The observable problem described by FND-BRAND-BRAND-20260928-001 is absent on the affected URL(s) under the recorded audit conditions.; Evidence for FND-BRAND-BRAND-20260928-001 is re-collected and reviewed against its linked requirement(s).
- TASK-003: The observable problem described by FND-CONTENT-CONTENT-001 is absent on the affected URL(s) under the recorded audit conditions.; Evidence for FND-CONTENT-CONTENT-001 is re-collected and reviewed against its linked requirement(s).
- TASK-004: The page no longer presents an unexplained 0,00 ₫ amount for a purchasable Glucare Plus item.; The sample offer and standard product offer have distinct visible labels and prices.
- TASK-005: The observable problem described by FND-GEO-AEO-GEO-AEO-001 is absent on the affected URL(s) under the recorded audit conditions.; Evidence for FND-GEO-AEO-GEO-AEO-001 is re-collected and reviewed against its linked requirement(s).
- TASK-006: The observable problem described by FND-GEO-AEO-GEO-AEO-003 is absent on the affected URL(s) under the recorded audit conditions.; Evidence for FND-GEO-AEO-GEO-AEO-003 is re-collected and reviewed against its linked requirement(s).
- TASK-007: The observable problem described by FND-PERFORMANCE-PERF-001 is absent on the affected URL(s) under the recorded audit conditions.; Evidence for FND-PERFORMANCE-PERF-001 is re-collected and reviewed against its linked requirement(s).
- TASK-008: The observable problem described by FND-PERFORMANCE-PERF-002 is absent on the affected URL(s) under the recorded audit conditions.; Evidence for FND-PERFORMANCE-PERF-002 is re-collected and reviewed against its linked requirement(s).
- TASK-009: The observable problem described by FND-PERFORMANCE-PERF-003 is absent on the affected URL(s) under the recorded audit conditions.; Evidence for FND-PERFORMANCE-PERF-003 is re-collected and reviewed against its linked requirement(s).
- TASK-010: The sitemap URL advertised in robots.txt returns a valid sitemap response.
- TASK-011: Robots rules match the confirmed crawl policy and advertise a responding sitemap endpoint.
- TASK-012: Each listed page returns a unique, non-default description that accurately summarizes its visible content.
- TASK-013: The observable problem described by FND-STRUCTURED-DATA-STRUCTURED-DATA-001 is absent on the affected URL(s) under the recorded audit conditions.; Evidence for FND-STRUCTURED-DATA-STRUCTURED-DATA-001 is re-collected and reviewed against its linked requirement(s).
- TASK-014: Comparable mobile LAB capture shows a materially lower LCP, with no visual regression in the initial viewport.

## 26. Regression

- TASK-001: compare a subsequent read-only run on https://addp.vn/ with evidence EVD-DBF33A19881A487E, EVD-04B228A36544C865, EVD-5E1FDAFD6E0F3BD0, EVD-2A0768485D1F0097, EVD-820A852713ADC090, EVD-DAC7815A6168F9B8, EVD-0B566D85DC39FA02, EVD-AEA3DB2C2D2E0F53.
- TASK-002: compare a subsequent read-only run on https://addp.vn/vien-an-duong-addp.html with evidence EVD-AD18B204CB25AAFE, EVD-927DDAF696B5D339.
- TASK-003: compare a subsequent read-only run on https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html with evidence EVD-C07AE1B67F5FAB1D.
- TASK-004: compare a subsequent read-only run on https://addp.vn/sua-hat-glucare-plus with evidence EVD-DF63C483FC434445, EVD-EA78205F3017C505.
- TASK-005: compare a subsequent read-only run on https://addp.vn/ with evidence EVD-32CB6452441EDF9E, EVD-02D7356CC02B574B, EVD-E32F848C405D32E0, EVD-2326A9C7428D947E, EVD-B8786FA90B6CDCB3, EVD-0CC76FEDCFD90652.
- TASK-006: compare a subsequent read-only run on https://addp.vn/robots.txt with evidence EVD-C51AC48D3DB98538.
- TASK-007: compare a subsequent read-only run on https://addp.vn/ with evidence EVD-85956D06B433ABCA, EVD-3D15DCDB359887BF.
- TASK-008: compare a subsequent read-only run on https://addp.vn/benh-ly with evidence EVD-035E196C34BF6621, EVD-D2E949A54A61C783.
- TASK-009: compare a subsequent read-only run on https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong with evidence EVD-140275788B638B2B, EVD-EEE8678F6CB7996C, EVD-1043761274B05EFF, EVD-381F4D853D891DF0.
- TASK-010: compare a subsequent read-only run on https://addp.vn/robots.txt, https://addp.vn/pub/sitemap.xml, https://addp.vn/sitemap.xml, https://addp.vn/sitemap.xml and https://addp.vn/pub/sitemap.xml with evidence EVD-A57DC932D580B784, EVD-B093A16D09E3A37E, EVD-C51AC48D3DB98538.
- TASK-011: compare a subsequent read-only run on https://addp.vn/robots.txt, https://addp.vn/pub/sitemap.xml with evidence EVD-C51AC48D3DB98538, EVD-B093A16D09E3A37E.
- TASK-012: compare a subsequent read-only run on https://addp.vn/sui-dovital, https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html, https://addp.vn/vien-an-duong-addp.html with evidence EVD-CD4C67022008E5BB, EVD-325C6659444AD546, EVD-927DDAF696B5D339.
- TASK-013: compare a subsequent read-only run on https://addp.vn/ with evidence EVD-32CB6452441EDF9E, EVD-C16C9A26189A6C8E, EVD-01FF964BE2B7A2AA, EVD-B1630958C79BC01D, EVD-02D7356CC02B574B, EVD-BDF90743647332F7, EVD-E32F848C405D32E0, EVD-EDDAD1FAFA69798C, EVD-F71EC5745F2AF71B.
- TASK-014: compare a subsequent read-only run on https://addp.vn/ with evidence EVD-3D15DCDB359887BF, EVD-9B3746A447795E5D.

## 27. Backlog

### TASK-001 — Address: No public GTM, GA4 request, or dataLayer signal was observed in the collected page sample

**Objective:** Address accepted finding FND-ANALYTICS-analytics-public-signals-not-observed-sample: No public GTM, GA4 request, or dataLayer signal was observed in the collected page sample

**Current problem (observed):** The analytics collector reported gtm=0, ga4_requests_blocked=0, and data_layer_present=false on the homepage in desktop and mobile sessions. The same values recur in the sampled product, category, article, company, search, and policy pages. This is a bounded public-signal observation only; it does not establish that the implementation is absent sitewide. The raw artifact states telemetry was blocked because those requests would be induced by the audit browser. No event was emitted or conversion flow completed.

**Target state:** The observed problem is addressed through: Review consent-aware public tag loading and approved analytics configuration, then validate event behavior through an authorized non-production test flow and analytics administration evidence.

**Recommended changes:**
- Review consent-aware public tag loading and approved analytics configuration, then validate event behavior through an authorized non-production test flow and analytics administration evidence.

**Affected URLs:** https://addp.vn/

**Implementation area:** Unknown; developer investigation required.

**Developer investigation:**
- Unknown / not recorded.

**Traceability:** accepted findings FND-ANALYTICS-analytics-public-signals-not-observed-sample; checklist requirements REQ-014-01; evidence EVD-DBF33A19881A487E, EVD-04B228A36544C865, EVD-5E1FDAFD6E0F3BD0, EVD-2A0768485D1F0097, EVD-820A852713ADC090, EVD-DAC7815A6168F9B8, EVD-0B566D85DC39FA02, EVD-AEA3DB2C2D2E0F53.

**Priority/effort:** P2 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The observable problem described by FND-ANALYTICS-analytics-public-signals-not-observed-sample is absent on the affected URL(s) under the recorded audit conditions.
- Evidence for FND-ANALYTICS-analytics-public-signals-not-observed-sample is re-collected and reviewed against its linked requirement(s).

**Automated verification:**
- Repeat the applicable external collector check for FND-ANALYTICS-analytics-public-signals-not-observed-sample and compare with evidence EVD-DBF33A19881A487E, EVD-04B228A36544C865, EVD-5E1FDAFD6E0F3BD0, EVD-2A0768485D1F0097, EVD-820A852713ADC090, EVD-DAC7815A6168F9B8, EVD-0B566D85DC39FA02, EVD-AEA3DB2C2D2E0F53.

**Manual verification:**
- Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for FND-ANALYTICS-analytics-public-signals-not-observed-sample.

**Risks/unknowns:** Whether tags load only after consent or under conditions not reached in these bounded sessions.; Whether GTM, GA4, Meta Pixel, or Ads tags exist on uncollected URLs or in deferred configurations.; Whether any backend analytics receipt, attribution, or conversion event is recorded.; Thank-you-page behavior and successful-order event behavior were not inspected; journeys stopped before cart or checkout mutation.; Effort is provisional until developer investigation.; Priority is inferred from finding severity; confirm business sequencing.

**Diagnostic semantics:** confirmed external facts: none recorded; probable causes (unverified): none recorded.

### TASK-002 — Address: Company attribution and contact details differ within the Viên An Đường page

**Objective:** Address accepted finding FND-BRAND-BRAND-20260928-001: Company attribution and contact details differ within the Viên An Đường page

**Current problem (observed):** The rendered product contact block says “Facebook: Công ty Cổ phần Dược phẩm ADDP” and gives “Số 22, Ngách 124/49 đường Do Nha, Tổ dân phố Miêu Nha 1, Phường Tây Mỗ, Quận Nam Từ Liêm, Thành phố Hà Nội” and hotline “0243 389 9889.” The same page footer attributes copyright to “Công ty TNHH Dược phẩm ADDP” and lists “Số 22, Ngách 124/49 đường Do Nha, Tổ dân phố Miêu Nha 1, P.Xuân Phương, TP.Hà Nội” and “0904 637 007.” These public page elements present different company-form labels and contact details; the evidence does not establish which details are intended to be authoritative.

**Target state:** The observed problem is addressed through: Have the business confirm the intended company attribution, address format, and primary contact channels, then align the product contact block and shared footer if they should represent the same entity and contact point.

**Recommended changes:**
- Have the business confirm the intended company attribution, address format, and primary contact channels, then align the product contact block and shared footer if they should represent the same entity and contact point.

**Affected URLs:** https://addp.vn/vien-an-duong-addp.html

**Implementation area:** Unknown; developer investigation required.

**Developer investigation:**
- Unknown / not recorded.

**Traceability:** accepted findings FND-BRAND-BRAND-20260928-001; best_practice requirements none; evidence EVD-AD18B204CB25AAFE, EVD-927DDAF696B5D339.

**Priority/effort:** P2 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The observable problem described by FND-BRAND-BRAND-20260928-001 is absent on the affected URL(s) under the recorded audit conditions.
- Evidence for FND-BRAND-BRAND-20260928-001 is re-collected and reviewed against its linked requirement(s).

**Automated verification:**
- Repeat the applicable external collector check for FND-BRAND-BRAND-20260928-001 and compare with evidence EVD-AD18B204CB25AAFE, EVD-927DDAF696B5D339.

**Manual verification:**
- Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for FND-BRAND-BRAND-20260928-001.

**Risks/unknowns:** Whether the two company-form labels refer to separate entities or one intended identity.; Whether the different address forms and telephone numbers are valid alternate contacts or stale page content.; No legal identity or authenticity conclusion is made from this public appearance.; Effort is provisional until developer investigation.; Priority is inferred from finding severity; confirm business sequencing.

**Diagnostic semantics:** confirmed external facts: none recorded; probable causes (unverified): none recorded.

### TASK-003 — Address: Glucare Plus detail page exposes placeholder copy in product tabs

**Objective:** Address accepted finding FND-CONTENT-CONTENT-001: Glucare Plus detail page exposes placeholder copy in product tabs

**Current problem (observed):** The captured rendered product page includes two tabs labeled “Custom Tab 1” and “Custom Tab 2”; the associated tab content contains generic English Lorem ipsum placeholder text. This is directly visible copy on this product detail page. It interrupts the product information flow and does not answer product-specific benefit, ingredient, usage, or support questions. The latter impact is an assessment of the visible copy, not a claim about product facts or health outcomes.

**Target state:** The observed problem is addressed through: Replace the generic tab labels and placeholder text with verified, product-specific information, or remove the empty tabs. Have any health-related claims reviewed by an appropriately qualified expert before publication.

**Recommended changes:**
- Replace the generic tab labels and placeholder text with verified, product-specific information, or remove the empty tabs. Have any health-related claims reviewed by an appropriately qualified expert before publication.

**Affected URLs:** https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html

**Implementation area:** Unknown; developer investigation required.

**Developer investigation:**
- Unknown / not recorded.

**Traceability:** accepted findings FND-CONTENT-CONTENT-001; checklist requirements REQ-007; evidence EVD-C07AE1B67F5FAB1D.

**Priority/effort:** P2 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The observable problem described by FND-CONTENT-CONTENT-001 is absent on the affected URL(s) under the recorded audit conditions.
- Evidence for FND-CONTENT-CONTENT-001 is re-collected and reviewed against its linked requirement(s).

**Automated verification:**
- Repeat the applicable external collector check for FND-CONTENT-CONTENT-001 and compare with evidence EVD-C07AE1B67F5FAB1D.

**Manual verification:**
- Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for FND-CONTENT-CONTENT-001.

**Risks/unknowns:** Whether the tab content is identical on other product pages was not established by this evidence.; No product formulation, efficacy, or medical claims were independently validated.; Effort is provisional until developer investigation.; Priority is inferred from finding severity; confirm business sequencing.

**Diagnostic semantics:** confirmed external facts: none recorded; probable causes (unverified): none recorded.

### TASK-004 — Address: A Glucare Plus product card shows a zero price beside a separate 9,000 ₫ trial offer

**Objective:** Make the product and trial prices unambiguous before shoppers act.

**Current problem (observed):** The captured visible text lists “1 Gói Sữa Hạt dinh dưỡng GLUCARE PLUS ...” at 9.000,00 ₫ and later lists “Sữa Hạt dinh dưỡng GLUCARE PLUS - Dùng được cho người tiểu đường” at 0,00 ₫ (repeated). The same page separately promotes a 9.000đ trial pack. These are displayed values on distinct entries; the evidence does not establish whether the 0.00 ₫ listing is intentional, a placeholder, or an error. This may leave shoppers uncertain about the price and offer attached to the product.

**Target state:** Each distinct offer has a clear product name, payable price, and adjacent action label.

**Recommended changes:**
- Review the displayed 0,00 ₫ Glucare Plus listing.
- Distinguish the 9.000đ sample offer from the standard product offer.

**Affected URLs:** https://addp.vn/sua-hat-glucare-plus

**Implementation area:** product offer content and visible product cards

**Developer investigation:**
- Confirm the intended price and offer terms for each Glucare Plus entry.

**Traceability:** accepted findings FND-CONVERSION-CONV-001; checklist requirements REQ-007-02; evidence EVD-DF63C483FC434445, EVD-EA78205F3017C505.

**Priority/effort:** P2 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The page no longer presents an unexplained 0,00 ₫ amount for a purchasable Glucare Plus item.
- The sample offer and standard product offer have distinct visible labels and prices.

**Automated verification:**
- Inspect rendered product-card text and prices on the URL.

**Manual verification:**
- Review desktop and mobile offer presentation and confirm the intended values with the business.

**Risks/unknowns:** Changing a price without confirming the intended offer could misstate commercial terms.

**Diagnostic semantics:** confirmed external facts: none recorded; probable causes (unverified): none recorded.

### TASK-005 — Address: Product structured data was not detected on sampled homepage and product pages

**Objective:** Address accepted finding FND-GEO-AEO-GEO-AEO-001: Product structured data was not detected on sampled homepage and product pages

**Current problem (observed):** The current-run structured-data collector reports valid: 0 and invalid: 0 at the homepage and the sampled product pages https://addp.vn/vien-an-duong-addp.html and https://addp.vn/sui-dovital. This is evidence that no JSON-LD was detected by that collector on these page instances; it does not establish the absence of every structured-data format or a sitewide condition. The same run detected valid BlogPosting JSON-LD on sampled article pages, so the result is page-type-specific in this sample.

**Target state:** The observed problem is addressed through: Review public structured data against the stated Organization, Product, and FAQPage requirement for the corresponding page types; validate any proposed markup against visible page facts.

**Recommended changes:**
- Review public structured data against the stated Organization, Product, and FAQPage requirement for the corresponding page types; validate any proposed markup against visible page facts.

**Affected URLs:** https://addp.vn/

**Implementation area:** Unknown; developer investigation required.

**Developer investigation:**
- Unknown / not recorded.

**Traceability:** accepted findings FND-GEO-AEO-GEO-AEO-001; checklist requirements REQ-010-01; evidence EVD-32CB6452441EDF9E, EVD-02D7356CC02B574B, EVD-E32F848C405D32E0, EVD-2326A9C7428D947E, EVD-B8786FA90B6CDCB3, EVD-0CC76FEDCFD90652.

**Priority/effort:** P2 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The observable problem described by FND-GEO-AEO-GEO-AEO-001 is absent on the affected URL(s) under the recorded audit conditions.
- Evidence for FND-GEO-AEO-GEO-AEO-001 is re-collected and reviewed against its linked requirement(s).

**Automated verification:**
- Repeat the applicable external collector check for FND-GEO-AEO-GEO-AEO-001 and compare with evidence EVD-32CB6452441EDF9E, EVD-02D7356CC02B574B, EVD-E32F848C405D32E0, EVD-2326A9C7428D947E, EVD-B8786FA90B6CDCB3, EVD-0CC76FEDCFD90652.

**Manual verification:**
- Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for FND-GEO-AEO-GEO-AEO-001.

**Risks/unknowns:** Other structured-data syntaxes may exist outside the JSON-LD collector result.; Coverage is limited to sampled URLs; other homepage/product templates may differ.; No conclusion about AI-engine citation or visibility follows from this result.; Effort is provisional until developer investigation.; Priority is inferred from finding severity; confirm business sequencing.

**Diagnostic semantics:** confirmed external facts: none recorded; probable causes (unverified): none recorded.

### TASK-006 — Address: robots.txt is reachable, but AI crawler directives are not explicit in the captured rules

**Objective:** Address accepted finding FND-GEO-AEO-GEO-AEO-003: robots.txt is reachable, but AI crawler directives are not explicit in the captured rules

**Current problem (observed):** The robots.txt endpoint returned HTTP 200. Its captured content contains a general User-agent: * section and multiple Disallow rules, but no explicit named rules for ChatGPT-User, PerplexityBot, or Google-Extended. The captured document alone does not establish how each crawler interprets the wildcard rules or whether other access controls apply.

**Target state:** The observed problem is addressed through: Review intended access policy for each named crawler against the complete robots directives and verify public endpoint behavior for the relevant paths.

**Recommended changes:**
- Review intended access policy for each named crawler against the complete robots directives and verify public endpoint behavior for the relevant paths.

**Affected URLs:** https://addp.vn/robots.txt

**Implementation area:** Unknown; developer investigation required.

**Developer investigation:**
- Unknown / not recorded.

**Traceability:** accepted findings FND-GEO-AEO-GEO-AEO-003; checklist requirements REQ-011-01; evidence EVD-C51AC48D3DB98538.

**Priority/effort:** P2 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The observable problem described by FND-GEO-AEO-GEO-AEO-003 is absent on the affected URL(s) under the recorded audit conditions.
- Evidence for FND-GEO-AEO-GEO-AEO-003 is re-collected and reviewed against its linked requirement(s).

**Automated verification:**
- Repeat the applicable external collector check for FND-GEO-AEO-GEO-AEO-003 and compare with evidence EVD-C51AC48D3DB98538.

**Manual verification:**
- Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for FND-GEO-AEO-GEO-AEO-003.

**Risks/unknowns:** Crawler behavior and actual crawling are not evidenced.; No inference about AI-engine visibility or recommendation is supported.; Robots directives do not prove access through or restriction by other mechanisms.; Effort is provisional until developer investigation.; Priority is inferred from finding severity; confirm business sequencing.

**Diagnostic semantics:** confirmed external facts: none recorded; probable causes (unverified): none recorded.

### TASK-007 — Address: Homepage LAB load metrics are substantially elevated on desktop and mobile

**Objective:** Address accepted finding FND-PERFORMANCE-PERF-001: Homepage LAB load metrics are substantially elevated on desktop and mobile

**Current problem (observed):** In clean-load LAB captures, desktop recorded LCP 17,700 ms, CLS 0.1651, and TTFB 5,911.5 ms; mobile recorded LCP 12,504 ms, CLS 0.1346, and TTFB 5,841.7 ms. Both captures state synthetic_scroll_before_measurement=false. These are single-run browser measurements under the recorded run conditions, not field experience. The measured LCP is above the checklist's stated 2.5-second target; no PageSpeed score was captured.

**Target state:** The observed problem is addressed through: Repeat comparable clean-load measurements on desktop and mobile, inspect the recorded network and resource waterfall for the LCP element and response delays, and verify whether the elevated values persist before prioritizing optimization.

**Recommended changes:**
- Repeat comparable clean-load measurements on desktop and mobile, inspect the recorded network and resource waterfall for the LCP element and response delays, and verify whether the elevated values persist before prioritizing optimization.

**Affected URLs:** https://addp.vn/

**Implementation area:** Unknown; developer investigation required.

**Developer investigation:**
- Unknown / not recorded.

**Traceability:** accepted findings FND-PERFORMANCE-PERF-001; checklist requirements REQ-013; evidence EVD-85956D06B433ABCA, EVD-3D15DCDB359887BF.

**Priority/effort:** P1 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The observable problem described by FND-PERFORMANCE-PERF-001 is absent on the affected URL(s) under the recorded audit conditions.
- Evidence for FND-PERFORMANCE-PERF-001 is re-collected and reviewed against its linked requirement(s).

**Automated verification:**
- Repeat the applicable external collector check for FND-PERFORMANCE-PERF-001 and compare with evidence EVD-85956D06B433ABCA, EVD-3D15DCDB359887BF.

**Manual verification:**
- Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for FND-PERFORMANCE-PERF-001.

**Risks/unknowns:** Field LCP, CLS, and INP are unavailable; these LAB values do not establish visitor-level Core Web Vitals.; Lighthouse/PageSpeed scores and interaction data were not captured.; No cause is established by the summary metrics alone.; These are single captures; run-to-run variation is unknown.; Effort is provisional until developer investigation.; Priority is inferred from finding severity; confirm business sequencing.

**Diagnostic semantics:** confirmed external facts: none recorded; probable causes (unverified): none recorded.

### TASK-008 — Address: Diabetes-condition page has high LAB LCP and CLS in both captured viewports

**Objective:** Address accepted finding FND-PERFORMANCE-PERF-002: Diabetes-condition page has high LAB LCP and CLS in both captured viewports

**Current problem (observed):** The desktop clean-load LAB capture recorded LCP 19,308 ms and CLS 0.6347; the mobile capture recorded LCP 22,128 ms and CLS 0.5932. Both state synthetic_scroll_before_measurement=false. The values are page-instance observations from this run and exceed the checklist's 2.5-second load target by a wide margin for LCP. They do not establish field performance or the source of the shifts.

**Target state:** The observed problem is addressed through: Repeat clean-load captures under comparable desktop and mobile conditions, then inspect the LCP element and layout-shift sources in the corresponding trace before selecting an optimization.

**Recommended changes:**
- Repeat clean-load captures under comparable desktop and mobile conditions, then inspect the LCP element and layout-shift sources in the corresponding trace before selecting an optimization.

**Affected URLs:** https://addp.vn/benh-ly

**Implementation area:** Unknown; developer investigation required.

**Developer investigation:**
- Unknown / not recorded.

**Traceability:** accepted findings FND-PERFORMANCE-PERF-002; checklist requirements REQ-013; evidence EVD-035E196C34BF6621, EVD-D2E949A54A61C783.

**Priority/effort:** P1 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The observable problem described by FND-PERFORMANCE-PERF-002 is absent on the affected URL(s) under the recorded audit conditions.
- Evidence for FND-PERFORMANCE-PERF-002 is re-collected and reviewed against its linked requirement(s).

**Automated verification:**
- Repeat the applicable external collector check for FND-PERFORMANCE-PERF-002 and compare with evidence EVD-035E196C34BF6621, EVD-D2E949A54A61C783.

**Manual verification:**
- Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for FND-PERFORMANCE-PERF-002.

**Risks/unknowns:** Field metrics are unavailable; these values are LAB only.; No Lighthouse/PageSpeed score or interaction data is available.; The metric summary does not identify the LCP element, shift sources, or probable technical cause.; Repeatability and impact for other URLs are unknown.; Effort is provisional until developer investigation.; Priority is inferred from finding severity; confirm business sequencing.

**Diagnostic semantics:** confirmed external facts: none recorded; probable causes (unverified): none recorded.

### TASK-009 — Address: Sampled diabetes articles show long LAB LCP on desktop and mobile

**Objective:** Address accepted finding FND-PERFORMANCE-PERF-003: Sampled diabetes articles show long LAB LCP on desktop and mobile

**Current problem (observed):** Two individually captured article page instances have high LCP in clean-load LAB measurements: /blog/post/chuan-doan-benh-dai-thao-duong measured 13,432 ms desktop and 18,100 ms mobile; /blog/post/dai-thao-duong-do-viem-tuy measured 18,216 ms desktop and 18,408 ms mobile. All four captures state synthetic_scroll_before_measurement=false. This candidate records these URLs as separate page instances; similarity does not establish a template-wide pattern. The measured values exceed the checklist's 2.5-second target, while field experience is unknown.

**Target state:** The observed problem is addressed through: Repeat measurements for each URL at the same desktop and mobile viewports, compare the LCP element and resource timing in each trace, and assess any shared cause only after direct evidence supports it.

**Recommended changes:**
- Repeat measurements for each URL at the same desktop and mobile viewports, compare the LCP element and resource timing in each trace, and assess any shared cause only after direct evidence supports it.

**Affected URLs:** https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong

**Implementation area:** Unknown; developer investigation required.

**Developer investigation:**
- Unknown / not recorded.

**Traceability:** accepted findings FND-PERFORMANCE-PERF-003; checklist requirements REQ-013; evidence EVD-140275788B638B2B, EVD-EEE8678F6CB7996C, EVD-1043761274B05EFF, EVD-381F4D853D891DF0.

**Priority/effort:** P1 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The observable problem described by FND-PERFORMANCE-PERF-003 is absent on the affected URL(s) under the recorded audit conditions.
- Evidence for FND-PERFORMANCE-PERF-003 is re-collected and reviewed against its linked requirement(s).

**Automated verification:**
- Repeat the applicable external collector check for FND-PERFORMANCE-PERF-003 and compare with evidence EVD-140275788B638B2B, EVD-EEE8678F6CB7996C, EVD-1043761274B05EFF, EVD-381F4D853D891DF0.

**Manual verification:**
- Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for FND-PERFORMANCE-PERF-003.

**Risks/unknowns:** Field LCP, CLS, and INP are unavailable.; No Lighthouse/PageSpeed score or interaction data was captured.; The summary does not identify the LCP elements or causes.; Article page captures are not evidence of a shared implementation pattern.; Effort is provisional until developer investigation.; Priority is inferred from finding severity; confirm business sequencing.

**Diagnostic semantics:** confirmed external facts: none recorded; probable causes (unverified): none recorded.

### TASK-010 — Address: The advertised sitemap endpoints return 404

**Objective:** Make the sitemap location advertised to crawlers resolve to a valid sitemap response.

**Current problem (observed):** Both /sitemap.xml and /pub/sitemap.xml returned HTTP 404 in this run. robots.txt advertises https://addp.vn/pub/sitemap.xml. This establishes failure at these sampled endpoints during collection; it does not establish whether a sitemap is available at another URL.

**Target state:** The advertised sitemap URL returns a parseable sitemap with an appropriate successful status.

**Recommended changes:**
- Verify the intended public sitemap URL.
- Correct the sitemap endpoint or the robots.txt Sitemap directive.

**Affected URLs:** https://addp.vn/robots.txt, https://addp.vn/pub/sitemap.xml, https://addp.vn/sitemap.xml, https://addp.vn/sitemap.xml and https://addp.vn/pub/sitemap.xml

**Implementation area:** Public sitemap and robots configuration

**Developer investigation:**
- Determine the intended sitemap endpoint and confirm response status and XML content.

**Traceability:** accepted findings FND-TECHNICAL-SEO-SEO-001; checklist requirements REQ-015; evidence EVD-A57DC932D580B784, EVD-B093A16D09E3A37E, EVD-C51AC48D3DB98538.

**Priority/effort:** P1 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The sitemap URL advertised in robots.txt returns a valid sitemap response.

**Automated verification:**
- GET advertised sitemap URL and validate status and XML.

**Manual verification:**
- Inspect sitemap URL set for intended public URL coverage.

**Risks/unknowns:** Changing sitemap location without checking existing crawler-facing configuration could leave stale discovery references.

**Diagnostic semantics:** confirmed external facts: https://addp.vn/robots.txt returned HTTP 200 and its captured contents include 'Sitemap: https://addp.vn/pub/sitemap.xml'. Evidence: EVD-C51AC48D3DB98538.; https://addp.vn/pub/sitemap.xml returned HTTP 404. Evidence: EVD-B093A16D09E3A37E.; https://addp.vn/sitemap.xml returned HTTP 404. Evidence: EVD-A57DC932D580B784.; probable causes (unverified): The advertised sitemap may not be published at the configured path, or the route may be misconfigured. This is a hypothesis, not a confirmed implementation cause..

### TASK-011 — Address: Robots policy uses a broad wildcard rule and advertises an unavailable sitemap

**Objective:** Keep crawl directives and sitemap discovery aligned with intended public URL access.

**Current problem (observed):** The collected robots.txt contains a single User-agent: * group with Disallow: /*? and lists the /pub/sitemap.xml endpoint, which returned 404 in this run. No named AI user-agent groups appear in the collected file. The wildcard query-string disallow may restrict crawl access to parameterized URLs; actual effect is URL/rule specific.

**Target state:** Robots directives permit intended crawlable URLs and point to a working sitemap.

**Recommended changes:**
- Review query-string disallow scope against representative parameterized URLs.
- Confirm AI crawler policy and document any agent-specific directives if needed.

**Affected URLs:** https://addp.vn/robots.txt, https://addp.vn/pub/sitemap.xml

**Implementation area:** Robots configuration

**Developer investigation:**
- Compare disallowed URL patterns with intended canonical and crawlable URL types.

**Traceability:** accepted findings FND-TECHNICAL-SEO-SEO-002; checklist requirements REQ-011, REQ-015; evidence EVD-C51AC48D3DB98538, EVD-B093A16D09E3A37E.

**Priority/effort:** P2 / M. Dependencies: none recorded.

**Acceptance criteria:**
- Robots rules match the confirmed crawl policy and advertise a responding sitemap endpoint.

**Automated verification:**
- Parse robots directives and check representative URLs against the intended policy.

**Manual verification:**
- Review policy for Googlebot and requested AI crawler user agents.

**Risks/unknowns:** Broad robots changes can expose or suppress URL classes unintentionally.

**Diagnostic semantics:** confirmed external facts: none recorded; probable causes (unverified): none recorded.

### TASK-012 — Address: Sampled product pages have missing or generic meta descriptions

**Objective:** Provide a distinct, accurate search-result summary for each sampled product page.

**Current problem (observed):** The raw SEO extraction for /sui-dovital reports meta_description as ‘Default Description’. The other two sampled priority product detail pages have descriptions matching their product title rather than a distinct summary: /1goi-sua-hat-dinh-duong-glucare-plus.html and /vien-an-duong-addp.html. These are three sampled product URLs, not a sitewide prevalence estimate.

**Target state:** Each sampled product URL exposes a unique, descriptive meta description aligned with visible page content.

**Recommended changes:**
- Replace the default description on /sui-dovital.
- Review whether the descriptions on the two named product pages need expansion beyond the title.

**Affected URLs:** https://addp.vn/sui-dovital, https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html, https://addp.vn/vien-an-duong-addp.html

**Implementation area:** Product page metadata

**Developer investigation:**
- Check page-level metadata configuration for the sampled product records.

**Traceability:** accepted findings FND-TECHNICAL-SEO-SEO-003; checklist requirements REQ-015; evidence EVD-CD4C67022008E5BB, EVD-325C6659444AD546, EVD-927DDAF696B5D339.

**Priority/effort:** P2 / M. Dependencies: none recorded.

**Acceptance criteria:**
- Each listed page returns a unique, non-default description that accurately summarizes its visible content.

**Automated verification:**
- Extract meta descriptions for the three URLs and compare for default values and duplicates.

**Manual verification:**
- Review descriptions for accuracy and usefulness as search-result summaries.

**Risks/unknowns:** Descriptions must remain consistent with the visible product claims and page content.

**Diagnostic semantics:** confirmed external facts: none recorded; probable causes (unverified): none recorded.

### TASK-013 — Address: Required JSON-LD types were not present in the homepage and three sampled product captures

**Objective:** Address accepted finding FND-STRUCTURED-DATA-STRUCTURED-DATA-001: Required JSON-LD types were not present in the homepage and three sampled product captures

**Current problem (observed):** The current-run structured-data extracts are empty arrays for the homepage and each of the three sampled product detail URLs on both desktop and mobile: valid=0 and invalid=0. The checklist calls for JSON-LD Organization, Product for three products, and FAQPage. This establishes that those requested JSON-LD types were not captured on these sampled pages; it does not establish absence across the full site. The raw HTML for the Glucare Plus URL contains Product microdata on the page root, so that sample does expose Product markup in a different format. No generator or implementation cause is inferred.

**Target state:** The observed problem is addressed through: Review the intended structured-data requirement against the sampled output. If the checklist is still authoritative, provide the requested Organization, Product, and FAQPage JSON-LD where the corresponding visible content supports it, and verify every claim against visible page content. Preserve and validate existing Product microdata where appropriate.

**Recommended changes:**
- Review the intended structured-data requirement against the sampled output. If the checklist is still authoritative, provide the requested Organization, Product, and FAQPage JSON-LD where the corresponding visible content supports it, and verify every claim against visible page content. Preserve and validate existing Product microdata where appropriate.

**Affected URLs:** https://addp.vn/

**Implementation area:** Unknown; developer investigation required.

**Developer investigation:**
- Unknown / not recorded.

**Traceability:** accepted findings FND-STRUCTURED-DATA-STRUCTURED-DATA-001; checklist requirements REQ-010, REQ-010-01; evidence EVD-32CB6452441EDF9E, EVD-C16C9A26189A6C8E, EVD-01FF964BE2B7A2AA, EVD-B1630958C79BC01D, EVD-02D7356CC02B574B, EVD-BDF90743647332F7, EVD-E32F848C405D32E0, EVD-EDDAD1FAFA69798C, EVD-F71EC5745F2AF71B.

**Priority/effort:** P2 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The observable problem described by FND-STRUCTURED-DATA-STRUCTURED-DATA-001 is absent on the affected URL(s) under the recorded audit conditions.
- Evidence for FND-STRUCTURED-DATA-STRUCTURED-DATA-001 is re-collected and reviewed against its linked requirement(s).

**Automated verification:**
- Repeat the applicable external collector check for FND-STRUCTURED-DATA-STRUCTURED-DATA-001 and compare with evidence EVD-32CB6452441EDF9E, EVD-C16C9A26189A6C8E, EVD-01FF964BE2B7A2AA, EVD-B1630958C79BC01D, EVD-02D7356CC02B574B, EVD-BDF90743647332F7, EVD-E32F848C405D32E0, EVD-EDDAD1FAFA69798C, EVD-F71EC5745F2AF71B.

**Manual verification:**
- Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for FND-STRUCTURED-DATA-STRUCTURED-DATA-001.

**Risks/unknowns:** Whether Organization or FAQPage markup exists on any uncollected URL is unknown.; Whether the three selected product pages represent all products intended by the checklist is unknown; the capture confirms only these three URLs.; The collector extract reports JSON-LD results; it does not establish complete microdata coverage on every sampled page.; Structured-data eligibility or search-result presentation was not tested.; The run reports nine of 25 pages as partial, and four inventory pages have no structured-data evidence record.; Effort is provisional until developer investigation.; Priority is inferred from finding severity; confirm business sequencing.

**Diagnostic semantics:** confirmed external facts: none recorded; probable causes (unverified): none recorded.

### TASK-014 — Address: Homepage mobile load remains slow in recorded laboratory capture

**Objective:** Reduce the measured homepage mobile load delay.

**Current problem (observed):** The run recorded mobile laboratory LCP of 12,504 ms and TTFB of 5,841.7 ms for the homepage. Interpretation: this load delay can postpone the point at which the first viewport becomes useful on this recorded mobile page instance. These are LAB measurements, not field data; no Lighthouse score or field metric is available. The viewport screenshot is collected separately and supports visual review only, not the timing claim.

**Target state:** Mobile first viewport becomes useful sooner under the recorded audit conditions.

**Recommended changes:**
- Investigate the first-viewport critical path and largest-contentful element.

**Affected URLs:** https://addp.vn/

**Implementation area:** mobile first viewport and page loading

**Developer investigation:**
- Identify the resources contributing to the recorded LCP and TTFB.

**Traceability:** accepted findings FND-UX-UI-UXUI-001; checklist requirements REQ-013; evidence EVD-3D15DCDB359887BF, EVD-9B3746A447795E5D.

**Priority/effort:** P1 / M. Dependencies: none recorded.

**Acceptance criteria:**
- Comparable mobile LAB capture shows a materially lower LCP, with no visual regression in the initial viewport.

**Automated verification:**
- Repeat the same mobile LAB capture.

**Manual verification:**
- Review initial viewport screenshots at 390×844 under representative network conditions.

**Risks/unknowns:** A measurement change alone may not reflect real user experience without field data.

**Diagnostic semantics:** confirmed external facts: none recorded; probable causes (unverified): none recorded.

## 28. Dependency graph

- TASK-001: no recorded predecessors
- TASK-002: no recorded predecessors
- TASK-003: no recorded predecessors
- TASK-004: no recorded predecessors
- TASK-005: no recorded predecessors
- TASK-006: no recorded predecessors
- TASK-007: no recorded predecessors
- TASK-008: no recorded predecessors
- TASK-009: no recorded predecessors
- TASK-010: no recorded predecessors
- TASK-011: no recorded predecessors
- TASK-012: no recorded predecessors
- TASK-013: no recorded predecessors
- TASK-014: no recorded predecessors

## 29. Acceptance criteria

- TASK-001: The observable problem described by FND-ANALYTICS-analytics-public-signals-not-observed-sample is absent on the affected URL(s) under the recorded audit conditions.
- TASK-001: Evidence for FND-ANALYTICS-analytics-public-signals-not-observed-sample is re-collected and reviewed against its linked requirement(s).
- TASK-002: The observable problem described by FND-BRAND-BRAND-20260928-001 is absent on the affected URL(s) under the recorded audit conditions.
- TASK-002: Evidence for FND-BRAND-BRAND-20260928-001 is re-collected and reviewed against its linked requirement(s).
- TASK-003: The observable problem described by FND-CONTENT-CONTENT-001 is absent on the affected URL(s) under the recorded audit conditions.
- TASK-003: Evidence for FND-CONTENT-CONTENT-001 is re-collected and reviewed against its linked requirement(s).
- TASK-004: The page no longer presents an unexplained 0,00 ₫ amount for a purchasable Glucare Plus item.
- TASK-004: The sample offer and standard product offer have distinct visible labels and prices.
- TASK-005: The observable problem described by FND-GEO-AEO-GEO-AEO-001 is absent on the affected URL(s) under the recorded audit conditions.
- TASK-005: Evidence for FND-GEO-AEO-GEO-AEO-001 is re-collected and reviewed against its linked requirement(s).
- TASK-006: The observable problem described by FND-GEO-AEO-GEO-AEO-003 is absent on the affected URL(s) under the recorded audit conditions.
- TASK-006: Evidence for FND-GEO-AEO-GEO-AEO-003 is re-collected and reviewed against its linked requirement(s).
- TASK-007: The observable problem described by FND-PERFORMANCE-PERF-001 is absent on the affected URL(s) under the recorded audit conditions.
- TASK-007: Evidence for FND-PERFORMANCE-PERF-001 is re-collected and reviewed against its linked requirement(s).
- TASK-008: The observable problem described by FND-PERFORMANCE-PERF-002 is absent on the affected URL(s) under the recorded audit conditions.
- TASK-008: Evidence for FND-PERFORMANCE-PERF-002 is re-collected and reviewed against its linked requirement(s).
- TASK-009: The observable problem described by FND-PERFORMANCE-PERF-003 is absent on the affected URL(s) under the recorded audit conditions.
- TASK-009: Evidence for FND-PERFORMANCE-PERF-003 is re-collected and reviewed against its linked requirement(s).
- TASK-010: The sitemap URL advertised in robots.txt returns a valid sitemap response.
- TASK-011: Robots rules match the confirmed crawl policy and advertise a responding sitemap endpoint.
- TASK-012: Each listed page returns a unique, non-default description that accurately summarizes its visible content.
- TASK-013: The observable problem described by FND-STRUCTURED-DATA-STRUCTURED-DATA-001 is absent on the affected URL(s) under the recorded audit conditions.
- TASK-013: Evidence for FND-STRUCTURED-DATA-STRUCTURED-DATA-001 is re-collected and reviewed against its linked requirement(s).
- TASK-014: Comparable mobile LAB capture shows a materially lower LCP, with no visual regression in the initial viewport.
