# Improvement Plan

**Run ID:** 20260927T180655Z-85e584  
**Date:** 2026-09-27T18:06:55.895Z  
**Target:** https://addp.vn/

This plan reflects accepted findings only. Manual review: 6; blocked: 0. No source file or module scope is asserted.

## 1. Objectives

- TASK-001: Address accepted finding FND-PER-HIGH-001: Product listings expose both a sample price and zero-price items (from FND-PER-HIGH-001).
- TASK-002: Address accepted finding FND-PER-RESEARCH-001: Health and safety claims appear without an identifiable supporting-document route in the captured product state (from FND-PER-RESEARCH-001).
- TASK-003: Address accepted finding FND-PER-MOBILE-002: Product-price text fails automated contrast checks on mobile (from FND-PER-MOBILE-002).
- TASK-004: Address accepted finding FND-SPEC-UX-001: The homepage hero does not show a principal product (from FND-SPEC-UX-001).
- TASK-005: Address accepted finding FND-SPEC-CONTENT-001: Product page does not present a direct FAQ block in the captured content (from FND-SPEC-CONTENT-001).
- TASK-006: Address accepted finding FND-SPEC-SEO-001: Product page retains a generic meta description (from FND-SPEC-SEO-001).
- TASK-007: Address accepted finding FND-SPEC-SEO-002: Both discovered sitemap URLs returned HTTP 404 during the audit (from FND-SPEC-SEO-002).
- TASK-008: Address accepted finding FND-SPEC-GEO-001: Homepage and product pages expose no JSON-LD in the captured desktop/mobile pages (from FND-SPEC-GEO-001).
- TASK-009: Address accepted finding FND-SPEC-PERFORMANCE-001: Mobile lab captures show LCP above the checklist threshold on sampled pages (from FND-SPEC-PERFORMANCE-001).
- TASK-010: Address accepted finding FND-SPEC-CONVERSION-006: Viên An Đường combo URL promotion and displayed pack count disagree (from FND-SPEC-CONVERSION-006).
- TASK-011: Address accepted finding FND-SPEC-HEALTH-002: Viên An Đường product copy makes an unqualified no-side-effects claim (from FND-SPEC-HEALTH-002).

## 2. Target state

- TASK-001: The observed problem is addressed through: Replace zero-price merchandising states with an explicit availability or contact-for-price label and keep package/price meaning consistent..
- TASK-002: The observed problem is addressed through: Place clearly labelled public supporting sources, product declarations, and appropriate-use boundaries next to the relevant claims..
- TASK-003: The observed problem is addressed through: Adjust price colors or backgrounds so rendered text meets the applicable WCAG contrast ratio in every product-card state..
- TASK-004: The observed problem is addressed through: Keep the current human, reassuring message, but add a clearly identifiable principal-product packshot or product grouping within the first desktop and mobile viewport and preserve an obvious route to that product..
- TASK-005: The observed problem is addressed through: Add evidence-grounded FAQ answers with explicit boundaries and reviewed sources beside the product information..
- TASK-006: The observed problem is addressed through: Write a unique accurate description for the product page and verify it in the rendered document..
- TASK-007: The observed problem is addressed through: Publish a valid sitemap at the advertised URL and verify its response and submitted URL set..
- TASK-008: The observed problem is addressed through: Add validated Organization markup and accurate Product and FAQPage markup where the corresponding visible content exists..
- TASK-009: The observed problem is addressed through: Profile and reduce the observed largest-contentful paint path, then repeat comparable mobile lab runs..
- TASK-010: The observed problem is addressed through: Align campaign URL/title/quantity labels and explicitly show total units and gift quantity before any order action..
- TASK-011: The observed problem is addressed through: Have qualified reviewers substantiate, qualify or remove absolute efficacy and side-effect claims, and show appropriate-use boundaries with accessible supporting sources..

## 3. Guiding principles

- Implement only evidence-linked changes in this backlog; investigate unverified technical causes before selecting an internal fix.
- Keep checklist requirements separate from best-practice proposals.
- Re-run external verification and manual review against each task’s acceptance criteria.
- Preserve public URL and index signals when a change touches search visibility.

## 4. Target user journeys

- **TASK-010** (P1, M): Address: Viên An Đường combo URL promotion and displayed pack count disagree. Findings: FND-SPEC-CONVERSION-006; requirements: REQ-007; evidence: EVD-CB952D69E3E21F68, EVD-E744CA9DD952F84A.

Recorded journeys: first_time (partial), high_intent (partial), research (partial), mobile (partial)

## 5. Information architecture

- **TASK-007** (P1, M): Address: Both discovered sitemap URLs returned HTTP 404 during the audit. Findings: FND-SPEC-SEO-002; requirements: REQ-015; evidence: EVD-B093A16D09E3A37E, EVD-A57DC932D580B784.

## 6. Design system

- **TASK-004** (P1, M): Address: The homepage hero does not show a principal product. Findings: FND-SPEC-UX-001; requirements: REQ-004; evidence: EVD-8C749E8D6F00DF83, EVD-4256DF417284230A, EVD-702877ACD4E72E55, EVD-92E0841363C85BA1.

## 7. Homepage

- **TASK-004** (P1, M): Address: The homepage hero does not show a principal product. Findings: FND-SPEC-UX-001; requirements: REQ-004; evidence: EVD-8C749E8D6F00DF83, EVD-4256DF417284230A, EVD-702877ACD4E72E55, EVD-92E0841363C85BA1.
- **TASK-008** (P1, M): Address: Homepage and product pages expose no JSON-LD in the captured desktop/mobile pages. Findings: FND-SPEC-GEO-001; requirements: REQ-010; evidence: EVD-32CB6452441EDF9E, EVD-C16C9A26189A6C8E, EVD-80257931D1966034, EVD-5DEB9224EB2D897C.

## 8. PDP

No accepted task is mapped here. Target design or implementation detail remains unestablished.

## 9. Landing pages

No accepted task is mapped here. Target design or implementation detail remains unestablished.

## 10. News/Knowledge Hub

No accepted task is mapped here. Target design or implementation detail remains unestablished.

## 11. Brand/trust

No accepted task is mapped here. Target design or implementation detail remains unestablished.

## 12. Content

- **TASK-002** (P1, M): Address: Health and safety claims appear without an identifiable supporting-document route in the captured product state. Findings: FND-PER-RESEARCH-001; requirements: REQ-007; evidence: EVD-D67F1CCFC3746E81-1.
- **TASK-005** (P2, M): Address: Product page does not present a direct FAQ block in the captured content. Findings: FND-SPEC-CONTENT-001; requirements: REQ-007; evidence: EVD-D67F1CCFC3746E81-1, EVD-D1249648026B4D96.
- **TASK-011** (P1, M): Address: Viên An Đường product copy makes an unqualified no-side-effects claim. Findings: FND-SPEC-HEALTH-002; requirements: REQ-007; evidence: EVD-8B09867D19F1496E, EVD-927DDAF696B5D339.

## 13. Health-content governance

- **TASK-002** (P1, M): Address: Health and safety claims appear without an identifiable supporting-document route in the captured product state. Findings: FND-PER-RESEARCH-001; requirements: REQ-007; evidence: EVD-D67F1CCFC3746E81-1.
- **TASK-011** (P1, M): Address: Viên An Đường product copy makes an unqualified no-side-effects claim. Findings: FND-SPEC-HEALTH-002; requirements: REQ-007; evidence: EVD-8B09867D19F1496E, EVD-927DDAF696B5D339.

## 14. Company/Product data governance

No accepted task is mapped here. Target design or implementation detail remains unestablished.

## 15. SEO

- **TASK-006** (P2, M): Address: Product page retains a generic meta description. Findings: FND-SPEC-SEO-001; requirements: REQ-015; evidence: EVD-D1249648026B4D96, EVD-1BA12AFB05B5BD13.
- **TASK-007** (P1, M): Address: Both discovered sitemap URLs returned HTTP 404 during the audit. Findings: FND-SPEC-SEO-002; requirements: REQ-015; evidence: EVD-B093A16D09E3A37E, EVD-A57DC932D580B784.

## 16. GEO/AEO

- **TASK-008** (P1, M): Address: Homepage and product pages expose no JSON-LD in the captured desktop/mobile pages. Findings: FND-SPEC-GEO-001; requirements: REQ-010; evidence: EVD-32CB6452441EDF9E, EVD-C16C9A26189A6C8E, EVD-80257931D1966034, EVD-5DEB9224EB2D897C.

## 17. Structured data

No accepted task is mapped here. Target design or implementation detail remains unestablished.

## 18. Performance

- **TASK-009** (P1, M): Address: Mobile lab captures show LCP above the checklist threshold on sampled pages. Findings: FND-SPEC-PERFORMANCE-001; requirements: REQ-013; evidence: EVD-3D15DCDB359887BF, EVD-D2E949A54A61C783, EVD-203B6173B6A72522.

## 19. Analytics

No accepted task is mapped here. Target design or implementation detail remains unestablished.

## 20. Cart/Checkout

- **TASK-001** (P1, M): Address: Product listings expose both a sample price and zero-price items. Findings: FND-PER-HIGH-001; requirements: REQ-007; evidence: EVD-D67F1CCFC3746E81-1, EVD-238D776F29EAE37D, EVD-DF63C483FC434445, EVD-733F5C04719022AE, EVD-EA78205F3017C505, EVD-0581A36B72F4A783.
- **TASK-010** (P1, M): Address: Viên An Đường combo URL promotion and displayed pack count disagree. Findings: FND-SPEC-CONVERSION-006; requirements: REQ-007; evidence: EVD-CB952D69E3E21F68, EVD-E744CA9DD952F84A.

## 21. KiotViet/Integration

No accepted task is mapped here. Target design or implementation detail remains unestablished.

## 22. External Technical Remediation Plan

No accepted task is mapped here. Target design or implementation detail remains unestablished.

Probable technical causes are hypotheses. Developers must verify them before implementation.

## 23. Developer Investigation List

- TASK-001: Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.
- TASK-002: Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.
- TASK-003: Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.
- TASK-004: Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.
- TASK-005: Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.
- TASK-006: Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.
- TASK-007: Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.
- TASK-008: Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.
- TASK-009: Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.
- TASK-010: Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.
- TASK-011: Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

## 24. Migration/index considerations

- **TASK-006** (P2, M): Address: Product page retains a generic meta description. Findings: FND-SPEC-SEO-001; requirements: REQ-015; evidence: EVD-D1249648026B4D96, EVD-1BA12AFB05B5BD13.
- **TASK-007** (P1, M): Address: Both discovered sitemap URLs returned HTTP 404 during the audit. Findings: FND-SPEC-SEO-002; requirements: REQ-015; evidence: EVD-B093A16D09E3A37E, EVD-A57DC932D580B784.

## 25. QA

- TASK-001: The observable problem described by FND-PER-HIGH-001 is absent on the affected URL(s) under the recorded audit conditions.; Evidence for FND-PER-HIGH-001 is re-collected and reviewed against its linked requirement(s).
- TASK-002: The observable problem described by FND-PER-RESEARCH-001 is absent on the affected URL(s) under the recorded audit conditions.; Evidence for FND-PER-RESEARCH-001 is re-collected and reviewed against its linked requirement(s).
- TASK-003: The observable problem described by FND-PER-MOBILE-002 is absent on the affected URL(s) under the recorded audit conditions.; Evidence for FND-PER-MOBILE-002 is re-collected and reviewed against its linked requirement(s).
- TASK-004: The observable problem described by FND-SPEC-UX-001 is absent on the affected URL(s) under the recorded audit conditions.; Evidence for FND-SPEC-UX-001 is re-collected and reviewed against its linked requirement(s).
- TASK-005: The observable problem described by FND-SPEC-CONTENT-001 is absent on the affected URL(s) under the recorded audit conditions.; Evidence for FND-SPEC-CONTENT-001 is re-collected and reviewed against its linked requirement(s).
- TASK-006: The observable problem described by FND-SPEC-SEO-001 is absent on the affected URL(s) under the recorded audit conditions.; Evidence for FND-SPEC-SEO-001 is re-collected and reviewed against its linked requirement(s).
- TASK-007: The observable problem described by FND-SPEC-SEO-002 is absent on the affected URL(s) under the recorded audit conditions.; Evidence for FND-SPEC-SEO-002 is re-collected and reviewed against its linked requirement(s).
- TASK-008: The observable problem described by FND-SPEC-GEO-001 is absent on the affected URL(s) under the recorded audit conditions.; Evidence for FND-SPEC-GEO-001 is re-collected and reviewed against its linked requirement(s).
- TASK-009: The observable problem described by FND-SPEC-PERFORMANCE-001 is absent on the affected URL(s) under the recorded audit conditions.; Evidence for FND-SPEC-PERFORMANCE-001 is re-collected and reviewed against its linked requirement(s).
- TASK-010: The observable problem described by FND-SPEC-CONVERSION-006 is absent on the affected URL(s) under the recorded audit conditions.; Evidence for FND-SPEC-CONVERSION-006 is re-collected and reviewed against its linked requirement(s).
- TASK-011: The observable problem described by FND-SPEC-HEALTH-002 is absent on the affected URL(s) under the recorded audit conditions.; Evidence for FND-SPEC-HEALTH-002 is re-collected and reviewed against its linked requirement(s).

## 26. Regression

- TASK-001: compare a subsequent read-only run on https://addp.vn/sua-hat-glucare-plus with evidence EVD-D67F1CCFC3746E81-1, EVD-238D776F29EAE37D, EVD-DF63C483FC434445, EVD-733F5C04719022AE, EVD-EA78205F3017C505, EVD-0581A36B72F4A783.
- TASK-002: compare a subsequent read-only run on https://addp.vn/sua-hat-glucare-plus with evidence EVD-D67F1CCFC3746E81-1.
- TASK-003: compare a subsequent read-only run on https://addp.vn/sua-hat-glucare-plus with evidence EVD-238D776F29EAE37D.
- TASK-004: compare a subsequent read-only run on https://addp.vn/ with evidence EVD-8C749E8D6F00DF83, EVD-4256DF417284230A, EVD-702877ACD4E72E55, EVD-92E0841363C85BA1.
- TASK-005: compare a subsequent read-only run on https://addp.vn/sua-hat-glucare-plus with evidence EVD-D67F1CCFC3746E81-1, EVD-D1249648026B4D96.
- TASK-006: compare a subsequent read-only run on https://addp.vn/sua-hat-glucare-plus with evidence EVD-D1249648026B4D96, EVD-1BA12AFB05B5BD13.
- TASK-007: compare a subsequent read-only run on https://addp.vn/ with evidence EVD-B093A16D09E3A37E, EVD-A57DC932D580B784.
- TASK-008: compare a subsequent read-only run on https://addp.vn/, https://addp.vn/sua-hat-glucare-plus with evidence EVD-32CB6452441EDF9E, EVD-C16C9A26189A6C8E, EVD-80257931D1966034, EVD-5DEB9224EB2D897C.
- TASK-009: compare a subsequent read-only run on https://addp.vn/ with evidence EVD-3D15DCDB359887BF, EVD-D2E949A54A61C783, EVD-203B6173B6A72522.
- TASK-010: compare a subsequent read-only run on https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html with evidence EVD-CB952D69E3E21F68, EVD-E744CA9DD952F84A.
- TASK-011: compare a subsequent read-only run on https://addp.vn/vien-an-duong-addp.html with evidence EVD-8B09867D19F1496E, EVD-927DDAF696B5D339.

## 27. Backlog

### TASK-001 — Address: Product listings expose both a sample price and zero-price items

**Objective:** Address accepted finding FND-PER-HIGH-001: Product listings expose both a sample price and zero-price items

**Current problem (observed):** The captured Glucare Plus product page text presents a 1-package listing at 9,000 VND and other product listings at 0 VND in the same product section.

**Target state:** The observed problem is addressed through: Replace zero-price merchandising states with an explicit availability or contact-for-price label and keep package/price meaning consistent.

**Recommended changes:**
- Replace zero-price merchandising states with an explicit availability or contact-for-price label and keep package/price meaning consistent.

**Affected URLs:** https://addp.vn/sua-hat-glucare-plus

**Implementation area:** commerce

**Developer investigation:**
- Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

**Traceability:** accepted findings FND-PER-HIGH-001; checklist requirements REQ-007; evidence EVD-D67F1CCFC3746E81-1, EVD-238D776F29EAE37D, EVD-DF63C483FC434445, EVD-733F5C04719022AE, EVD-EA78205F3017C505, EVD-0581A36B72F4A783.

**Priority/effort:** P1 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The observable problem described by FND-PER-HIGH-001 is absent on the affected URL(s) under the recorded audit conditions.
- Evidence for FND-PER-HIGH-001 is re-collected and reviewed against its linked requirement(s).

**Automated verification:**
- Repeat the applicable external collector check for FND-PER-HIGH-001 and compare with evidence EVD-D67F1CCFC3746E81-1, EVD-238D776F29EAE37D, EVD-DF63C483FC434445, EVD-733F5C04719022AE, EVD-EA78205F3017C505, EVD-0581A36B72F4A783.

**Manual verification:**
- Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for FND-PER-HIGH-001.

**Risks/unknowns:** The capture does not establish inventory, configuration, or backend pricing state.; Effort is provisional until developer investigation.; Priority is inferred from finding severity; confirm business sequencing.

**Diagnostic semantics:** confirmed external facts: The captured Glucare Plus product page text presents a 1-package listing at 9,000 VND and other product listings at 0 VND in the same product section.; probable causes (unverified): none recorded.

### TASK-002 — Address: Health and safety claims appear without an identifiable supporting-document route in the captured product state

**Objective:** Address accepted finding FND-PER-RESEARCH-001: Health and safety claims appear without an identifiable supporting-document route in the captured product state

**Current problem (observed):** The captured Glucare Plus page states that it is suitable for people with diabetes, uses “Công thức y khoa ADDP”, and safely supports blood-glucose control; the captured link set exposes an ingredient anchor but no visible link labelled as a study, declaration, certification, or supporting document.

**Target state:** The observed problem is addressed through: Place clearly labelled public supporting sources, product declarations, and appropriate-use boundaries next to the relevant claims.

**Recommended changes:**
- Place clearly labelled public supporting sources, product declarations, and appropriate-use boundaries next to the relevant claims.

**Affected URLs:** https://addp.vn/sua-hat-glucare-plus

**Implementation area:** health_content

**Developer investigation:**
- Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

**Traceability:** accepted findings FND-PER-RESEARCH-001; checklist requirements REQ-007; evidence EVD-D67F1CCFC3746E81-1.

**Priority/effort:** P1 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The observable problem described by FND-PER-RESEARCH-001 is absent on the affected URL(s) under the recorded audit conditions.
- Evidence for FND-PER-RESEARCH-001 is re-collected and reviewed against its linked requirement(s).

**Automated verification:**
- Repeat the applicable external collector check for FND-PER-RESEARCH-001 and compare with evidence EVD-D67F1CCFC3746E81-1.

**Manual verification:**
- Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for FND-PER-RESEARCH-001.

**Risks/unknowns:** No judgment is made about medical validity, effectiveness, document authenticity, certification authenticity, or individual suitability.; A source may exist outside the captured page or selected scope.; Effort is provisional until developer investigation.; Priority is inferred from finding severity; confirm business sequencing.

**Diagnostic semantics:** confirmed external facts: The captured Glucare Plus page states that it is suitable for people with diabetes, uses “Công thức y khoa ADDP”, and safely supports blood-glucose control; the captured link set exposes an ingredient anchor but no visible link labelled as a study, declaration, certification, or supporting document.; probable causes (unverified): none recorded.

### TASK-003 — Address: Product-price text fails automated contrast checks on mobile

**Objective:** Address accepted finding FND-PER-MOBILE-002: Product-price text fails automated contrast checks on mobile

**Current problem (observed):** The mobile accessibility artifact reports serious color-contrast failures for product-price text, including gold text at 2.77:1 on the light background and gray text at 2.45:1, below the stated 3:1 or 4.5:1 thresholds.

**Target state:** The observed problem is addressed through: Adjust price colors or backgrounds so rendered text meets the applicable WCAG contrast ratio in every product-card state.

**Recommended changes:**
- Adjust price colors or backgrounds so rendered text meets the applicable WCAG contrast ratio in every product-card state.

**Affected URLs:** https://addp.vn/sua-hat-glucare-plus

**Implementation area:** accessibility

**Developer investigation:**
- Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

**Traceability:** accepted findings FND-PER-MOBILE-002; checklist requirements REQ-002, REQ-013; evidence EVD-238D776F29EAE37D.

**Priority/effort:** P1 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The observable problem described by FND-PER-MOBILE-002 is absent on the affected URL(s) under the recorded audit conditions.
- Evidence for FND-PER-MOBILE-002 is re-collected and reviewed against its linked requirement(s).

**Automated verification:**
- Repeat the applicable external collector check for FND-PER-MOBILE-002 and compare with evidence EVD-238D776F29EAE37D.

**Manual verification:**
- Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for FND-PER-MOBILE-002.

**Risks/unknowns:** Automated contrast results should be confirmed against final design tokens and states.; Effort is provisional until developer investigation.; Priority is inferred from finding severity; confirm business sequencing.

**Diagnostic semantics:** confirmed external facts: The mobile accessibility artifact reports serious color-contrast failures for product-price text, including gold text at 2.77:1 on the light background and gray text at 2.45:1, below the stated 3:1 or 4.5:1 thresholds.; probable causes (unverified): none recorded.

### TASK-004 — Address: The homepage hero does not show a principal product

**Objective:** Address accepted finding FND-SPEC-UX-001: The homepage hero does not show a principal product

**Current problem (observed):** The stabilized desktop and mobile first-view captures show the ADDP logo, the message "Chăm sóc từ giá trị thiện lành", the headline "Sức Khỏe Bền Vững Khởi Nguồn Từ Tâm", an older couple, supporting copy, and the actions "Khám phá ngay" and "Tư vấn miễn phí". No product package or named principal product is visible in either captured first viewport. REQ-004 calls for the first viewport to combine a core message, a principal-product image, and a large clear CTA; the message and actions are present, while the product-image element is absent from the captured state.

**Target state:** The observed problem is addressed through: Keep the current human, reassuring message, but add a clearly identifiable principal-product packshot or product grouping within the first desktop and mobile viewport and preserve an obvious route to that product.

**Recommended changes:**
- Keep the current human, reassuring message, but add a clearly identifiable principal-product packshot or product grouping within the first desktop and mobile viewport and preserve an obvious route to that product.

**Affected URLs:** https://addp.vn/

**Implementation area:** Homepage above-the-fold orientation

**Developer investigation:**
- Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

**Traceability:** accepted findings FND-SPEC-UX-001; checklist requirements REQ-004; evidence EVD-8C749E8D6F00DF83, EVD-4256DF417284230A, EVD-702877ACD4E72E55, EVD-92E0841363C85BA1.

**Priority/effort:** P1 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The observable problem described by FND-SPEC-UX-001 is absent on the affected URL(s) under the recorded audit conditions.
- Evidence for FND-SPEC-UX-001 is re-collected and reviewed against its linked requirement(s).

**Automated verification:**
- Repeat the applicable external collector check for FND-SPEC-UX-001 and compare with evidence EVD-8C749E8D6F00DF83, EVD-4256DF417284230A, EVD-702877ACD4E72E55, EVD-92E0841363C85BA1.

**Manual verification:**
- Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for FND-SPEC-UX-001.

**Risks/unknowns:** Whether another timed or carousel state shows a product before user interaction.; Whether the hero is intended to prioritize corporate positioning over immediate product orientation.; Effort is provisional until developer investigation.; Priority is inferred from finding severity; confirm business sequencing.

**Diagnostic semantics:** confirmed external facts: The stabilized desktop and mobile first-view captures show the ADDP logo, the message "Chăm sóc từ giá trị thiện lành", the headline "Sức Khỏe Bền Vững Khởi Nguồn Từ Tâm", an older couple, supporting copy, and the actions "Khám phá ngay" and "Tư vấn miễn phí". No product package or named principal product is visible in either captured first viewport. REQ-004 calls for the first viewport to combine a core message, a principal-product image, and a large clear CTA; the message and actions are present, while the product-image element is absent from the captured state.; probable causes (unverified): none recorded.

### TASK-005 — Address: Product page does not present a direct FAQ block in the captured content

**Objective:** Address accepted finding FND-SPEC-CONTENT-001: Product page does not present a direct FAQ block in the captured content

**Current problem (observed):** The captured Glucare Plus product page includes product claims, ingredient sections, usage steps and offers, but its visible heading and text extract contains no FAQ or question-and-answer block.

**Target state:** The observed problem is addressed through: Add evidence-grounded FAQ answers with explicit boundaries and reviewed sources beside the product information.

**Recommended changes:**
- Add evidence-grounded FAQ answers with explicit boundaries and reviewed sources beside the product information.

**Affected URLs:** https://addp.vn/sua-hat-glucare-plus

**Implementation area:** content

**Developer investigation:**
- Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

**Traceability:** accepted findings FND-SPEC-CONTENT-001; checklist requirements REQ-007; evidence EVD-D67F1CCFC3746E81-1, EVD-D1249648026B4D96.

**Priority/effort:** P2 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The observable problem described by FND-SPEC-CONTENT-001 is absent on the affected URL(s) under the recorded audit conditions.
- Evidence for FND-SPEC-CONTENT-001 is re-collected and reviewed against its linked requirement(s).

**Automated verification:**
- Repeat the applicable external collector check for FND-SPEC-CONTENT-001 and compare with evidence EVD-D67F1CCFC3746E81-1, EVD-D1249648026B4D96.

**Manual verification:**
- Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for FND-SPEC-CONTENT-001.

**Risks/unknowns:** Assessment is limited to captured page text and headings; content may change after this observation.; Effort is provisional until developer investigation.; Priority is inferred from finding severity; confirm business sequencing.

**Diagnostic semantics:** confirmed external facts: The captured Glucare Plus product page includes product claims, ingredient sections, usage steps and offers, but its visible heading and text extract contains no FAQ or question-and-answer block.; probable causes (unverified): none recorded.

### TASK-006 — Address: Product page retains a generic meta description

**Objective:** Address accepted finding FND-SPEC-SEO-001: Product page retains a generic meta description

**Current problem (observed):** The rendered SEO artifact records the Glucare Plus page meta description as “Default Description” on both desktop and mobile.

**Target state:** The observed problem is addressed through: Write a unique accurate description for the product page and verify it in the rendered document.

**Recommended changes:**
- Write a unique accurate description for the product page and verify it in the rendered document.

**Affected URLs:** https://addp.vn/sua-hat-glucare-plus

**Implementation area:** seo

**Developer investigation:**
- Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

**Traceability:** accepted findings FND-SPEC-SEO-001; checklist requirements REQ-015; evidence EVD-D1249648026B4D96, EVD-1BA12AFB05B5BD13.

**Priority/effort:** P2 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The observable problem described by FND-SPEC-SEO-001 is absent on the affected URL(s) under the recorded audit conditions.
- Evidence for FND-SPEC-SEO-001 is re-collected and reviewed against its linked requirement(s).

**Automated verification:**
- Repeat the applicable external collector check for FND-SPEC-SEO-001 and compare with evidence EVD-D1249648026B4D96, EVD-1BA12AFB05B5BD13.

**Manual verification:**
- Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for FND-SPEC-SEO-001.

**Risks/unknowns:** Search-result appearance and ranking impact were not measured.; Effort is provisional until developer investigation.; Priority is inferred from finding severity; confirm business sequencing.

**Diagnostic semantics:** confirmed external facts: The rendered SEO artifact records the Glucare Plus page meta description as “Default Description” on both desktop and mobile.; probable causes (unverified): none recorded.

### TASK-007 — Address: Both discovered sitemap URLs returned HTTP 404 during the audit

**Objective:** Address accepted finding FND-SPEC-SEO-002: Both discovered sitemap URLs returned HTTP 404 during the audit

**Current problem (observed):** Discovery recorded HTTP 404 for both https://addp.vn/pub/sitemap.xml and https://addp.vn/sitemap.xml.

**Target state:** The observed problem is addressed through: Publish a valid sitemap at the advertised URL and verify its response and submitted URL set.

**Recommended changes:**
- Publish a valid sitemap at the advertised URL and verify its response and submitted URL set.

**Affected URLs:** https://addp.vn/

**Implementation area:** seo

**Developer investigation:**
- Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

**Traceability:** accepted findings FND-SPEC-SEO-002; checklist requirements REQ-015; evidence EVD-B093A16D09E3A37E, EVD-A57DC932D580B784.

**Priority/effort:** P1 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The observable problem described by FND-SPEC-SEO-002 is absent on the affected URL(s) under the recorded audit conditions.
- Evidence for FND-SPEC-SEO-002 is re-collected and reviewed against its linked requirement(s).

**Automated verification:**
- Repeat the applicable external collector check for FND-SPEC-SEO-002 and compare with evidence EVD-B093A16D09E3A37E, EVD-A57DC932D580B784.

**Manual verification:**
- Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for FND-SPEC-SEO-002.

**Risks/unknowns:** The audit did not access Search Console or verify other sitemap locations.; Effort is provisional until developer investigation.; Priority is inferred from finding severity; confirm business sequencing.

**Diagnostic semantics:** confirmed external facts: Discovery recorded HTTP 404 for both https://addp.vn/pub/sitemap.xml and https://addp.vn/sitemap.xml.; probable causes (unverified): none recorded.

### TASK-008 — Address: Homepage and product pages expose no JSON-LD in the captured desktop/mobile pages

**Objective:** Address accepted finding FND-SPEC-GEO-001: Homepage and product pages expose no JSON-LD in the captured desktop/mobile pages

**Current problem (observed):** The indexed JSON-LD evidence artifacts contain empty arrays for the homepage and captured Glucare Plus desktop and mobile pages; no Organization, Product or FAQPage JSON-LD item was recorded in these captures.

**Target state:** The observed problem is addressed through: Add validated Organization markup and accurate Product and FAQPage markup where the corresponding visible content exists.

**Recommended changes:**
- Add validated Organization markup and accurate Product and FAQPage markup where the corresponding visible content exists.

**Affected URLs:** https://addp.vn/, https://addp.vn/sua-hat-glucare-plus

**Implementation area:** geo_aeo

**Developer investigation:**
- Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

**Traceability:** accepted findings FND-SPEC-GEO-001; checklist requirements REQ-010; evidence EVD-32CB6452441EDF9E, EVD-C16C9A26189A6C8E, EVD-80257931D1966034, EVD-5DEB9224EB2D897C.

**Priority/effort:** P1 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The observable problem described by FND-SPEC-GEO-001 is absent on the affected URL(s) under the recorded audit conditions.
- Evidence for FND-SPEC-GEO-001 is re-collected and reviewed against its linked requirement(s).

**Automated verification:**
- Repeat the applicable external collector check for FND-SPEC-GEO-001 and compare with evidence EVD-32CB6452441EDF9E, EVD-C16C9A26189A6C8E, EVD-80257931D1966034, EVD-5DEB9224EB2D897C.

**Manual verification:**
- Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for FND-SPEC-GEO-001.

**Risks/unknowns:** Finding is limited to sampled pages and JSON-LD; other structured-data formats were not assessed here.; Effort is provisional until developer investigation.; Priority is inferred from finding severity; confirm business sequencing.

**Diagnostic semantics:** confirmed external facts: The indexed JSON-LD evidence artifacts contain empty arrays for the homepage and captured Glucare Plus desktop and mobile pages; no Organization, Product or FAQPage JSON-LD item was recorded in these captures.; probable causes (unverified): none recorded.

### TASK-009 — Address: Mobile lab captures show LCP above the checklist threshold on sampled pages

**Objective:** Address accepted finding FND-SPEC-PERFORMANCE-001: Mobile lab captures show LCP above the checklist threshold on sampled pages

**Current problem (observed):** The mobile LAB artifact records LCP 20,456 ms on the homepage, 19,952 ms on /benh-ly, and 18,956 ms on the diabetes-health article listing; the checklist target is under 2.5 seconds.

**Target state:** The observed problem is addressed through: Profile and reduce the observed largest-contentful paint path, then repeat comparable mobile lab runs.

**Recommended changes:**
- Profile and reduce the observed largest-contentful paint path, then repeat comparable mobile lab runs.

**Affected URLs:** https://addp.vn/

**Implementation area:** performance

**Developer investigation:**
- Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

**Traceability:** accepted findings FND-SPEC-PERFORMANCE-001; checklist requirements REQ-013; evidence EVD-3D15DCDB359887BF, EVD-D2E949A54A61C783, EVD-203B6173B6A72522.

**Priority/effort:** P1 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The observable problem described by FND-SPEC-PERFORMANCE-001 is absent on the affected URL(s) under the recorded audit conditions.
- Evidence for FND-SPEC-PERFORMANCE-001 is re-collected and reviewed against its linked requirement(s).

**Automated verification:**
- Repeat the applicable external collector check for FND-SPEC-PERFORMANCE-001 and compare with evidence EVD-3D15DCDB359887BF, EVD-D2E949A54A61C783, EVD-203B6173B6A72522.

**Manual verification:**
- Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for FND-SPEC-PERFORMANCE-001.

**Risks/unknowns:** These are single audit-browser LAB observations, not field Core Web Vitals or PageSpeed Insights scores; all page collections remain partial.; Effort is provisional until developer investigation.; Priority is inferred from finding severity; confirm business sequencing.

**Diagnostic semantics:** confirmed external facts: The mobile LAB artifact records LCP 20,456 ms on the homepage, 19,952 ms on /benh-ly, and 18,956 ms on the diabetes-health article listing; the checklist target is under 2.5 seconds.; probable causes (unverified): none recorded.

### TASK-010 — Address: Viên An Đường combo URL promotion and displayed pack count disagree

**Objective:** Address accepted finding FND-SPEC-CONVERSION-006: Viên An Đường combo URL promotion and displayed pack count disagree

**Current problem (observed):** The URL slug says “combo-mua-2-tang-2” while the captured page H1 labels the offer “[Combo 3 Hộp]”; on the separate “mua-3-tang-4” URL, the H1 says “[Combo 5 Hộp]”. The captured copy does not explain that the route wording and displayed pack count refer to different quantities.

**Target state:** The observed problem is addressed through: Align campaign URL/title/quantity labels and explicitly show total units and gift quantity before any order action.

**Recommended changes:**
- Align campaign URL/title/quantity labels and explicitly show total units and gift quantity before any order action.

**Affected URLs:** https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html

**Implementation area:** commerce

**Developer investigation:**
- Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

**Traceability:** accepted findings FND-SPEC-CONVERSION-006; checklist requirements REQ-007; evidence EVD-CB952D69E3E21F68, EVD-E744CA9DD952F84A.

**Priority/effort:** P1 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The observable problem described by FND-SPEC-CONVERSION-006 is absent on the affected URL(s) under the recorded audit conditions.
- Evidence for FND-SPEC-CONVERSION-006 is re-collected and reviewed against its linked requirement(s).

**Automated verification:**
- Repeat the applicable external collector check for FND-SPEC-CONVERSION-006 and compare with evidence EVD-CB952D69E3E21F68, EVD-E744CA9DD952F84A.

**Manual verification:**
- Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for FND-SPEC-CONVERSION-006.

**Risks/unknowns:** The capture does not establish backend price configuration, product eligibility or clinical effectiveness.; Effort is provisional until developer investigation.; Priority is inferred from finding severity; confirm business sequencing.

**Diagnostic semantics:** confirmed external facts: The URL slug says “combo-mua-2-tang-2” while the captured page H1 labels the offer “[Combo 3 Hộp]”; on the separate “mua-3-tang-4” URL, the H1 says “[Combo 5 Hộp]”. The captured copy does not explain that the route wording and displayed pack count refer to different quantities.; probable causes (unverified): none recorded.

### TASK-011 — Address: Viên An Đường product copy makes an unqualified no-side-effects claim

**Objective:** Address accepted finding FND-SPEC-HEALTH-002: Viên An Đường product copy makes an unqualified no-side-effects claim

**Current problem (observed):** The captured product page says “đảm bảo hiệu quả không tác dụng phụ” and separately lists people with diabetes among potential users. The captured page does not identify supporting material beside this claim; this observation does not establish safety, efficacy or suitability.

**Target state:** The observed problem is addressed through: Have qualified reviewers substantiate, qualify or remove absolute efficacy and side-effect claims, and show appropriate-use boundaries with accessible supporting sources.

**Recommended changes:**
- Have qualified reviewers substantiate, qualify or remove absolute efficacy and side-effect claims, and show appropriate-use boundaries with accessible supporting sources.

**Affected URLs:** https://addp.vn/vien-an-duong-addp.html

**Implementation area:** health_content

**Developer investigation:**
- Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

**Traceability:** accepted findings FND-SPEC-HEALTH-002; checklist requirements REQ-007; evidence EVD-8B09867D19F1496E, EVD-927DDAF696B5D339.

**Priority/effort:** P1 / M. Dependencies: none recorded.

**Acceptance criteria:**
- The observable problem described by FND-SPEC-HEALTH-002 is absent on the affected URL(s) under the recorded audit conditions.
- Evidence for FND-SPEC-HEALTH-002 is re-collected and reviewed against its linked requirement(s).

**Automated verification:**
- Repeat the applicable external collector check for FND-SPEC-HEALTH-002 and compare with evidence EVD-8B09867D19F1496E, EVD-927DDAF696B5D339.

**Manual verification:**
- Inspect the affected page(s) in the recorded viewport(s) and confirm the acceptance criteria for FND-SPEC-HEALTH-002.

**Risks/unknowns:** The capture does not establish backend price configuration, product eligibility or clinical effectiveness.; Effort is provisional until developer investigation.; Priority is inferred from finding severity; confirm business sequencing.

**Diagnostic semantics:** confirmed external facts: The captured product page says “đảm bảo hiệu quả không tác dụng phụ” and separately lists people with diabetes among potential users. The captured page does not identify supporting material beside this claim; this observation does not establish safety, efficacy or suitability.; probable causes (unverified): none recorded.

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

## 29. Acceptance criteria

- TASK-001: The observable problem described by FND-PER-HIGH-001 is absent on the affected URL(s) under the recorded audit conditions.
- TASK-001: Evidence for FND-PER-HIGH-001 is re-collected and reviewed against its linked requirement(s).
- TASK-002: The observable problem described by FND-PER-RESEARCH-001 is absent on the affected URL(s) under the recorded audit conditions.
- TASK-002: Evidence for FND-PER-RESEARCH-001 is re-collected and reviewed against its linked requirement(s).
- TASK-003: The observable problem described by FND-PER-MOBILE-002 is absent on the affected URL(s) under the recorded audit conditions.
- TASK-003: Evidence for FND-PER-MOBILE-002 is re-collected and reviewed against its linked requirement(s).
- TASK-004: The observable problem described by FND-SPEC-UX-001 is absent on the affected URL(s) under the recorded audit conditions.
- TASK-004: Evidence for FND-SPEC-UX-001 is re-collected and reviewed against its linked requirement(s).
- TASK-005: The observable problem described by FND-SPEC-CONTENT-001 is absent on the affected URL(s) under the recorded audit conditions.
- TASK-005: Evidence for FND-SPEC-CONTENT-001 is re-collected and reviewed against its linked requirement(s).
- TASK-006: The observable problem described by FND-SPEC-SEO-001 is absent on the affected URL(s) under the recorded audit conditions.
- TASK-006: Evidence for FND-SPEC-SEO-001 is re-collected and reviewed against its linked requirement(s).
- TASK-007: The observable problem described by FND-SPEC-SEO-002 is absent on the affected URL(s) under the recorded audit conditions.
- TASK-007: Evidence for FND-SPEC-SEO-002 is re-collected and reviewed against its linked requirement(s).
- TASK-008: The observable problem described by FND-SPEC-GEO-001 is absent on the affected URL(s) under the recorded audit conditions.
- TASK-008: Evidence for FND-SPEC-GEO-001 is re-collected and reviewed against its linked requirement(s).
- TASK-009: The observable problem described by FND-SPEC-PERFORMANCE-001 is absent on the affected URL(s) under the recorded audit conditions.
- TASK-009: Evidence for FND-SPEC-PERFORMANCE-001 is re-collected and reviewed against its linked requirement(s).
- TASK-010: The observable problem described by FND-SPEC-CONVERSION-006 is absent on the affected URL(s) under the recorded audit conditions.
- TASK-010: Evidence for FND-SPEC-CONVERSION-006 is re-collected and reviewed against its linked requirement(s).
- TASK-011: The observable problem described by FND-SPEC-HEALTH-002 is absent on the affected URL(s) under the recorded audit conditions.
- TASK-011: Evidence for FND-SPEC-HEALTH-002 is re-collected and reviewed against its linked requirement(s).


## Independent review and post-scroll render remediation

The independent evidence review assessed 20 deduplicated findings: 11 accepted, 3 rejected, 6 retained for manual review, and 0 blocked. The supplemental reviewer inspected the three visually affected findings against 124 desktop/mobile screenshot comparisons. Its saved decisions retain the mobile contrast and homepage hero findings, and move the company-page mixed-language/whitespace finding to manual review because the new mobile capture no longer shows the earlier large opening void. The requested reviewer model was GPT-5.6 Sol / High; runtime metadata did not verify the effective model.

The read-only render pass revisited all 31 selected URLs in desktop and mobile viewports. 0 pages reached a complete render; 31 remain partial. Pixel comparison marked 30 pages as materially changed, and scroll-triggered content changes were confirmed on 30 pages. Remaining observed failures include 6 stylesheet requests, 124 image decode/load occurrences, and 24 pending images; browser/policy blocked requests are tracked separately in the remediation summary. No cart, payment, order, account creation, or form submission was performed.
