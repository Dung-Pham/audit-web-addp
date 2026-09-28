# 02_RUN_AUDIT_AND_REPORT.md — Full Black-Box ADDP Audit + Detailed Improvement Plan

## Vai trò

Chỉ chạy sau khi hệ thống audit pass quality gate.

Target:

`https://addp.vn/`

Mode:

`production_read_only`

Không có source code.

Không sửa website.

Không real order/payment.

---

# 1. START RUN

Tạo RUN_ID mới.

Load:
- `Checklist.txt`
- normalized checklist
- audit config
- personas
- page types
- model routing effective config
- SYSTEM_VALIDATION_REPORT

Không dùng finding cũ như evidence hiện tại.

Nếu validation = `NOT_READY`:
- dừng audit;
- trả blocker về orchestrator.

---

# 2. DISCOVERY

Dùng public/external discovery:

- robots.txt
- sitemap(s)
- homepage/navigation
- internal links
- crawl graph
- canonical
- redirects

Tạo representative coverage của:

- Homepage
- Product Detail
- Product Landing
- Category
- News listing
- Article
- Company/About
- Contact
- Cart
- Checkout
- Policies
- page types khác nếu quan trọng

Ưu tiên:
1. business-critical pages
2. unique templates
3. checklist-relevant pages
4. representative samples

Không cần crawl mọi URL nếu không tăng coverage.

---

# 3. EVIDENCE COLLECTION

Thu deterministic evidence trước analysis.

Desktop + mobile.

Thu:

- raw HTML
- rendered DOM
- visible text
- first viewport screenshot
- full page screenshot
- relevant section screenshots
- title/meta
- headings
- canonical
- robots/indexability
- links
- image alt
- hreflang nếu có
- JSON-LD
- network failures
- console errors
- redirects/status
- cookies/overlays
- tracking evidence
- performance evidence
- accessibility evidence
- cart/checkout behavior

Collector fail:
- mark partial/failed/blocked
- không suy diễn PASS.

---

# 4. PERSONA JOURNEYS

## First-time visitor
Goal:
- hiểu ADDP;
- hiểu sản phẩm;
- tìm trust/company info;
- tìm đường tới sản phẩm.

## High-intent buyer
Goal:
- tìm sản phẩm;
- thấy thông tin mua;
- add cart;
- đi checkout nhanh.

## Research / skeptical buyer
Goal:
- thành phần;
- công dụng;
- giấy tờ;
- nguồn;
- company info;
- review;
- FAQ;
- policies.

## Mobile / low-tech user
Goal:
- readability;
- navigation;
- button;
- form;
- cart;
- checkout mobile.

High-intent journey:

```text
entry
→ product/landing
→ add to cart
→ cart
→ checkout
→ fill to safe point
→ STOP before order/payment side effect
```

Production safety phải enforce bằng code.

Lưu:
- steps
- clicks
- visited pages
- blockers
- confusion
- completion
- evidence IDs

---

# 5. SPECIALIST ANALYSIS

Sau evidence collection mới chạy:

1. UX/UI
2. Conversion
3. Brand
4. Content
5. Health Content
6. Technical SEO
7. GEO/AEO
8. Structured Data
9. Performance
10. Analytics
11. Commerce/Checkout

Mỗi specialist chỉ đọc:
- checklist relevant
- raw evidence
- persona journey relevant

Không đọc conclusion specialist khác trước candidate findings.

Nếu evidence thiếu:
- unknown / blocked / manual review
- không bịa.

---

# 6. EXTERNAL TECHNICAL DIAGNOSTIC

Sau candidate findings, chạy agent này.

Không có source code nên chỉ dùng:

- HTML/DOM
- HTTP headers
- public JS/CSS
- cookies
- cache/CDN hints
- network waterfall
- console
- XHR/fetch
- public API behavior
- visible forms
- checkout browser behavior
- tracking requests

Cho từng relevant finding, output:

### Confirmed external facts
Chỉ facts trực tiếp quan sát được.

### Probable technical causes
Hypotheses có confidence.

### Developer investigation
Danh sách dev/vendor cần kiểm tra nội bộ.

### Implementation area
Ví dụ:
- homepage hero
- responsive CSS
- navigation
- CMS/content
- product data
- PDP
- landing template
- frontend JS
- structured data
- tracking
- CDN/cache
- image optimization
- server response
- checkout
- integration/API
- unknown

Không được:
- bịa file path;
- bịa module;
- bịa database cause;
- bịa Magento config;
- bịa backend root cause.

---

# 7. REVIEW

## Evidence Reviewer
Cho từng candidate:
- evidence tồn tại?
- support observation?
- checklist mapping?
- best practice label?
- severity?
- confidence?
- recommendation ≠ fact?

Status:
- accepted
- rejected
- needs_manual_review
- blocked

## Contradiction Reviewer
Conflict:
- quay lại raw evidence;
- resolve nếu đủ;
- nếu không → manual review.

## Deduplicator
Merge duplicate, giữ:
- evidence
- requirements
- specialists
- URLs

---

# 8. AUDIT REPORT

Sinh:

`runs/<RUN_ID>/reports/AUDIT_REPORT.md`

Sections:

1. Executive Summary
2. Scope
3. Methodology
4. Limitations of black-box audit
5. Coverage
6. Page inventory
7. Checklist compliance matrix
8. Persona journey results
9. UX/UI
10. Conversion
11. Brand
12. Homepage
13. Product Detail
14. Product Landing Pages
15. News/Article
16. Health Content / E-E-A-T / Trust
17. Technical SEO
18. GEO/AEO
19. Structured Data
20. Performance
21. Accessibility
22. Analytics/Tracking
23. Cart
24. Checkout
25. KiotViet externally observable behavior
26. External Technical Diagnostics
27. Cross-site consistency
28. Findings by severity
29. Rejected/unsupported findings summary
30. Manual-review/blocked checks
31. Evidence appendix

Mỗi finding:

- ID
- URL/page type
- requirement IDs
- source checklist/best_practice
- observation
- evidence IDs
- finding type
- severity
- confidence
- impact
- direction
- unknowns

Phân biệt:

```text
FACT
ANALYSIS
RECOMMENDATION
```

---

# 9. MASTER IMPROVEMENT PLAN

Sau accepted findings:

`runs/<RUN_ID>/reports/IMPROVEMENT_PLAN.md`

Sections:

1. Improvement objectives
2. Target state
3. Guiding principles
4. Target user journeys
5. Information architecture
6. Design system
7. Homepage
8. Product Detail
9. Landing Pages
10. News / Knowledge Hub
11. Brand / Trust
12. Content
13. Health-content governance
14. Company/Product data governance
15. Technical SEO
16. GEO/AEO
17. Structured Data
18. Performance
19. Accessibility
20. Analytics/Tracking
21. Cart/Checkout
22. KiotViet/Integration
23. External Technical Remediation Plan
24. Developer Investigation List
25. Migration/Indexing considerations
26. QA
27. Regression
28. Prioritized backlog
29. Dependency graph
30. Acceptance criteria

Không copy Audit Report nguyên xi.

---

# 10. TASK DETAIL

Không dùng `likely_code_scope`.

Mỗi task:

```json
{
  "task_id": "...",
  "finding_ids": [],
  "title": "...",
  "objective": "...",
  "current_problem": "...",
  "target_state": "...",
  "recommended_changes": [],
  "affected_urls": [],
  "implementation_area": [],
  "developer_investigation": [],
  "dependencies": [],
  "priority": "P0|P1|P2|P3",
  "effort": "S|M|L|XL",
  "acceptance_criteria": [],
  "automated_verification": [],
  "manual_verification": [],
  "risks": [],
  "status": "planned"
}
```

Task phải đủ rõ để giao cho:
- Magento vendor;
- frontend dev;
- SEO/content team;
- analytics team;
- integration team.

Không cần biết source file cụ thể.

---

# 11. PRIORITY

Xem xét:

- user impact
- business impact
- conversion
- trust
- health-content risk
- SEO/indexability
- technical risk
- dependency
- blast radius

P0:
critical blocker/integrity/safety/business/trust

P1:
core journey/high-impact/major SEO/conversion

P2:
meaningful optimization

P3:
polish/lower impact

Không dựa chỉ vào effort.

---

# 12. DEPENDENCIES

Sinh:

`runs/<RUN_ID>/backlog/DEPENDENCIES.json`

Validate:
- task refs tồn tại;
- không cycle vô lý.

---

# 13. MACHINE-READABLE BACKLOG

Sinh:

`runs/<RUN_ID>/backlog/IMPLEMENTATION_BACKLOG.json`

Status:
`planned`

Backlog là developer/vendor handoff.

---

# 14. EXECUTIVE PLAN

Sinh:

`runs/<RUN_ID>/reports/EXECUTIVE_PLAN.md`

Bao gồm:
- major findings
- workstreams
- P0/P1
- dependencies
- task counts
- blocked/manual
- target outcomes

---

# 15. BLACK-BOX LIMITATION RULES

Báo cáo phải nói rõ những gì KHÔNG thể xác nhận chắc chắn nếu không có access:

Ví dụ:
- Magento module/root cause;
- server config nội bộ;
- database;
- KiotViet backend sync sau final order;
- analytics admin configuration;
- Search Console indexing state;
- CRM/backend data;
- private API behavior;
- production logs.

Không biến limitation thành finding.

Có thể tạo:
`Developer Investigation` hoặc `Manual Verification`.

---

# 16. FINAL CONSISTENCY VALIDATION

Bắt buộc:

- evidence refs tồn tại
- accepted finding có evidence
- requirement refs valid
- task refs valid
- dependency refs valid
- checklist vs best_practice đúng
- blocked != pass
- no real order/payment side effect
- report/backlog counts khớp
- model metadata không bịa
- không có source-level assertion
- probable cause được label đúng
- manifest đầy đủ

Fail:
- sửa artifact;
- validate lại.

---

# 17. MANIFEST

Không ghi website source git SHA.

Có thể ghi audit framework SHA/hash nếu workspace có Git, label rõ.

Manifest:
- RUN_ID
- target
- environment
- timestamp
- checklist hash
- config hash
- audit framework version/hash
- tool versions
- browser/viewport
- coverage
- stage statuses
- agent roles
- effective model/reasoning nếu xác minh được
- routing status
- escalation events
- safety flags
- blockers

---

# 18. FINAL OUTPUT

Trả về orchestrator:

- RUN_ID
- audit status
- model routing status
- pages discovered
- pages audited
- persona completion
- accepted/rejected/manual-review counts
- blocked checks
- P0/P1/P2/P3 counts

Exact paths:
- AUDIT_REPORT.md
- IMPROVEMENT_PLAN.md
- EXECUTIVE_PLAN.md
- IMPLEMENTATION_BACKLOG.json
- DEPENDENCIES.json
- manifest.json

Không sửa website sau audit.
