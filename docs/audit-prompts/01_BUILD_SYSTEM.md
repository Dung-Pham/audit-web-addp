# 01_BUILD_SYSTEM.md — Build & Validate Black-Box Multi-Agent Website Audit System

## Vai trò

File này được gọi bởi `00_RUN_ALL.md`.

Mục tiêu:
xây một hệ thống audit website **không cần source code**, hoạt động như một hệ thống black-box external audit.

KHÔNG audit ADDP production trong phase này.

KHÔNG giả định có Magento source.

---

# 1. INPUT

Đọc:

- `Checklist.txt`
- workspace hiện tại
- runtime capability artifacts từ `00_RUN_ALL.md`

Checklist = business requirements gốc.

Website source code = unavailable.

---

# 2. KIẾN TRÚC

Xây pipeline:

```text
ORCHESTRATOR
    ↓
DISCOVERY
    ↓
EVIDENCE COLLECTORS
    ↓
PERSONA JOURNEYS
    ↓
SPECIALIST AGENTS
    ↓
EXTERNAL TECHNICAL DIAGNOSTIC
    ↓
EVIDENCE REVIEWER
    ↓
CONTRADICTION REVIEWER
    ↓
DEDUPLICATOR
    ↓
REPORT GENERATOR
    ↓
MASTER PLANNER
```

Separation:

- Collector → fact/evidence
- Persona → observed journey/friction
- Specialist → domain analysis
- Technical Diagnostic → infer externally observable technical causes
- Reviewer → validate
- Planner → accepted findings → improvement tasks

---

# 3. GỢI Ý CẤU TRÚC

```text
tools/site-audit/
├── README.md
├── SYSTEM_BUILD_REPORT.md
├── SYSTEM_VALIDATION_REPORT.md
│
├── config/
│   ├── audit.*
│   ├── page-types.*
│   ├── personas.*
│   ├── severity.*
│   └── standards.*
│
├── checklist/
│   ├── checklist.normalized.*
│   └── checklist.schema.*
│
├── agents/
│   ├── orchestrator.md
│   ├── personas/
│   ├── specialists/
│   ├── reviewers/
│   └── planning/
│
├── schemas/
│   ├── evidence.schema.*
│   ├── finding.schema.*
│   ├── journey.schema.*
│   ├── page.schema.*
│   ├── backlog.schema.*
│   └── manifest.schema.*
│
├── collectors/
│   ├── crawler.*
│   ├── browser.*
│   ├── screenshots.*
│   ├── dom.*
│   ├── network.*
│   ├── console.*
│   ├── seo.*
│   ├── schema.*
│   ├── performance.*
│   ├── accessibility.*
│   ├── analytics.*
│   └── checkout.*
│
├── orchestration/
├── reporters/
├── fixtures/
├── tests/
├── runtime/
└── runs/
```

Không cần source website để subsystem hoạt động.

---

# 4. CHECKLIST NORMALIZATION

Parse toàn bộ `Checklist.txt`.

Mỗi requirement:

```json
{
  "id": "REQ-...",
  "source": "checklist",
  "category": "...",
  "applies_to": [],
  "requirement": "...",
  "original_text": "...",
  "verification_methods": [],
  "evidence_required": [],
  "automation_level": "automatic|assisted|expert_review",
  "severity_default": "critical|high|medium|low"
}
```

Test:
- không mất requirement;
- ID unique;
- `original_text` giữ nguyên;
- source đúng.

Tạo coverage matrix:

```text
requirement
→ verification method
→ collector/persona/specialist
→ expected evidence
→ report section
```

---

# 5. DISCOVERY ENGINE

Dùng public/external signals:

- robots.txt;
- sitemap.xml / sitemap index;
- homepage navigation;
- internal links;
- crawl graph;
- public canonical;
- redirects.

Không dùng source route.

Page types:

- homepage
- product_detail
- product_landing
- category
- article
- article_listing
- company/about
- contact
- cart
- checkout
- policy
- search
- other

Output:

`inventory/pages.json`

Schema:

```json
{
  "url": "...",
  "page_type": "...",
  "discovered_from": [],
  "http_status": null,
  "canonical": null,
  "indexability": null,
  "importance": "critical|high|normal|low"
}
```

Config:
- include
- exclude
- maxDepth
- maxPages
- priorityUrls
- representativeSampling

---

# 6. DETERMINISTIC COLLECTORS

## Browser
Ưu tiên Playwright.

Thu:
- desktop screenshots;
- mobile screenshots;
- first viewport;
- full page;
- section screenshots;
- rendered DOM;
- visible text;
- form/button/link states;
- console errors;
- failed network;
- redirects;
- dynamic content indicators;
- cookie/banner overlays;
- viewport dimensions.

## Raw HTTP / SEO
Thu:
- status;
- redirects;
- headers;
- raw HTML;
- title;
- meta description;
- robots meta;
- x-robots-tag;
- canonical;
- H1-H6;
- internal/external links;
- alt;
- hreflang nếu có;
- robots;
- sitemap;
- public structured data.

## Performance
Lighthouse hoặc equivalent.

Thu:
- category scores;
- LCP;
- CLS;
- lab interaction metric/proxy nếu có;
- TTFB khi đo được;
- request count;
- transfer size;
- render-blocking resources;
- third-party scripts;
- large images;
- unused JS/CSS signals nếu tool cung cấp.

Ghi rõ:
- LAB
- FIELD nếu thực sự có field data

Không gọi lab metric là field metric.

## Accessibility
Ưu tiên axe-core.

## Analytics/Tracking
Quan sát public browser/network behavior:
- GTM container presence;
- GA4 requests;
- Meta Pixel;
- Google Ads;
- dataLayer/event signals;
- duplicate events nếu quan sát được.

Không cần account access.

## Checkout
Browser only.

Không real submit.

---

# 7. EVIDENCE CONTRACT

Schema tối thiểu:

```json
{
  "evidence_id": "EVD-...",
  "url": "...",
  "page_type": "...",
  "collector": "...",
  "type": "...",
  "viewport": null,
  "artifact": "...",
  "raw_fact": {},
  "observed_at": "..."
}
```

Rule:
artifact path phải tồn tại nếu type là artifact-backed evidence.

---

# 8. PERSONA AGENTS

## First-time visitor
Mục tiêu:
- hiểu ADDP;
- hiểu sản phẩm;
- tìm company/trust info;
- tìm đường tới sản phẩm.

## High-intent buyer
Mục tiêu:
- tìm sản phẩm;
- tìm giá/thông tin mua;
- add cart;
- đi checkout nhanh.

## Research / skeptical buyer
Mục tiêu:
- thành phần;
- công dụng;
- giấy tờ;
- nguồn;
- review;
- FAQ;
- company info;
- policy.

## Mobile / low-tech user
Mục tiêu:
- readability;
- navigation;
- button;
- form;
- cart;
- checkout trên mobile.

Journey schema:

```json
{
  "persona": "...",
  "goal": "...",
  "entry_url": "...",
  "steps": [],
  "clicks": 0,
  "pages_visited": [],
  "blockers": [],
  "confusion_points": [],
  "positive_signals": [],
  "completion_status": "complete|partial|blocked|failed",
  "evidence_ids": []
}
```

Persona không tự redesign site.

---

# 9. SPECIALISTS

## UX/UI
- visual hierarchy
- first viewport
- readability
- typography
- spacing
- responsive
- navigation
- buttons
- CTA prominence
- image quality
- mobile interaction

## Conversion
- funnel
- product discovery
- CTA
- trust
- objections
- landing flow
- cart friction
- checkout friction

## Brand
- mission clarity
- identity
- visual consistency
- company information consistency
- trust signals

## Content
Đánh giá riêng:
- Homepage
- Product Detail
- Landing Page
- News/Article

## Health Content
- health/product claim wording
- attribution
- source visibility
- disclaimer
- distinction product info vs medical info
- trust/E-E-A-T signals

Không tự xác nhận medical claim.

Không tự bịa nguồn/chuyên gia/chứng nhận.

## Technical SEO
- crawl/index
- title/meta
- canonical
- headings
- sitemap
- robots
- links
- redirects
- duplicates
- images
- status

## GEO/AEO
- machine readability
- answer structure
- entity clarity
- company/product consistency
- server-visible content
- crawler accessibility
- structured sections
- source attribution

Không dùng “AI score” tự chế.

## Structured Data
- Organization/OnlineStore khi phù hợp
- Product
- Offer
- Breadcrumb
- Article/BlogPosting
- FAQ khi phù hợp
- consistency với visible content

## Performance
Phân biệt:
- MEASURED
- INFERRED

## Analytics
- GTM
- GA4
- Meta
- Ads
- ecommerce/browser events
- duplicates
- lead/cart/checkout/purchase signals quan sát được

## Commerce/Checkout
Journey:
product → cart → checkout

Không real order.

---

# 10. EXTERNAL TECHNICAL DIAGNOSTIC AGENT

ĐÂY LÀ THAY THẾ CHO SOURCE-CODE/MAGENTO MAPPER.

Agent này chỉ dùng evidence public/external:

- HTML
- DOM
- HTTP headers
- cookies
- public JS/CSS
- network waterfall
- browser console
- XHR/fetch
- cache headers
- CDN hints
- visible form behavior
- public API calls
- checkout browser behavior

Output cho mỗi issue:

```json
{
  "finding_id": "...",
  "observed_problem": "...",
  "confirmed_external_facts": [],
  "probable_technical_causes": [],
  "developer_investigation": [],
  "implementation_area": [],
  "confidence": 0.0
}
```

`implementation_area` có thể là:

- Homepage hero
- Responsive CSS
- Navigation
- CMS/content
- Product data
- PDP template
- Landing template
- Checkout UI
- Frontend JavaScript
- Tracking configuration
- CDN/cache
- Image pipeline
- Server response
- Structured data generation
- Integration/API
- Unknown

Không ghi:
“file X/module Y bị lỗi”
nếu không có evidence source.

Phân biệt rõ:
- CONFIRMED EXTERNAL FACT
- PROBABLE CAUSE
- DEVELOPER INVESTIGATION

---

# 11. FINDING CONTRACT

```json
{
  "finding_id": "FND-...",
  "title": "...",
  "area": "...",
  "page": "...",
  "page_type": "...",
  "source_requirement_ids": [],
  "source": "checklist|best_practice",
  "finding_type": "measured|deterministic|heuristic|content_review",
  "observation": "...",
  "evidence_ids": [],
  "impact": {
    "user": null,
    "business": null,
    "seo": null,
    "technical": null
  },
  "severity": "critical|high|medium|low",
  "confidence": 0.0,
  "suggested_direction": null,
  "unknowns": []
}
```

No evidence → cannot become accepted.

---

# 12. REVIEWERS

## Evidence Reviewer
Kiểm tra:
- evidence tồn tại;
- observation support;
- checklist mapping;
- best-practice labeling;
- severity;
- confidence;
- recommendation vs fact.

Status:
- accepted
- rejected
- needs_manual_review
- blocked

## Contradiction Reviewer
Nếu specialist conflict:
- quay lại raw evidence;
- resolve nếu evidence đủ;
- nếu không → manual review.

## Deduplicator
Merge duplicates nhưng giữ:
- origins
- requirements
- evidence
- affected URLs

---

# 13. MASTER PLANNER

Chỉ dùng accepted findings.

Không có source code nên task KHÔNG có `likely_code_scope`.

Dùng:

```json
{
  "task_id": "TASK-...",
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

Không giả vờ biết file/module.

Không tạo timeline giả.

---

# 14. REPORTS

## AUDIT_REPORT.md

Sections:

1. Executive Summary
2. Scope
3. Methodology
4. Coverage
5. Inventory
6. Checklist compliance
7. Persona journeys
8. UX/UI
9. Conversion
10. Brand
11. Homepage
12. PDP
13. Landing pages
14. News/content
15. Health/E-E-A-T/trust
16. Technical SEO
17. GEO/AEO
18. Structured data
19. Performance
20. Analytics
21. Cart/Checkout
22. KiotViet externally observable behavior
23. External technical diagnostics
24. Cross-site consistency
25. Findings by severity
26. Unknown/blocked
27. Evidence appendix

Phân biệt:
- FACT
- ANALYSIS
- RECOMMENDATION

## IMPROVEMENT_PLAN.md

Sections:

1. Objectives
2. Target state
3. Guiding principles
4. Target user journeys
5. Information architecture
6. Design system
7. Homepage
8. PDP
9. Landing pages
10. News/Knowledge Hub
11. Brand/trust
12. Content
13. Health-content governance
14. Company/Product data governance
15. SEO
16. GEO/AEO
17. Structured data
18. Performance
19. Analytics
20. Cart/Checkout
21. KiotViet/Integration
22. External Technical Remediation Plan
23. Developer Investigation List
24. Migration/index considerations
25. QA
26. Regression
27. Backlog
28. Dependency graph
29. Acceptance criteria

## EXECUTIVE_PLAN.md
- workstreams
- P0/P1
- dependency summary
- task counts
- blocked/manual
- target outcomes

---

# 15. RUN ARTIFACTS

```text
runs/<RUN_ID>/
├── manifest.json
├── inventory/
├── evidence/
│   ├── screenshots/
│   ├── html/
│   ├── dom/
│   ├── network/
│   ├── console/
│   ├── lighthouse/
│   ├── accessibility/
│   ├── schema/
│   ├── analytics/
│   └── journeys/
├── analyses/
│   ├── personas/
│   ├── specialists/
│   └── technical-diagnostic/
├── review/
│   ├── findings.accepted.json
│   ├── findings.rejected.json
│   ├── findings.manual-review.json
│   └── contradictions.json
├── reports/
│   ├── AUDIT_REPORT.md
│   ├── IMPROVEMENT_PLAN.md
│   └── EXECUTIVE_PLAN.md
└── backlog/
    ├── IMPLEMENTATION_BACKLOG.json
    └── DEPENDENCIES.json
```

Manifest không dùng website source git SHA.

Có thể ghi:
- audit framework git SHA nếu workspace đang dùng Git;
- nhưng label rõ đó là framework version.

Manifest:
- RUN_ID
- timestamp
- target
- environment
- checklist hash
- config hash
- audit framework version/hash
- tool versions
- viewport
- effective models nếu xác minh được
- routing status
- stage status
- safety flags

---

# 16. EXECUTION / RESUME

Hỗ trợ modes:

```text
discovery
collect
personas
analyze
review
report
full
```

Hỗ trợ:
- target
- environment
- max-pages
- resume RUN_ID
- allow-real-order=false

Interrupted run không mất evidence hoàn thành.

---

# 17. REGRESSION

Compare:

RUN_A vs RUN_B

Classify:
- fixed
- improved
- unchanged
- regressed
- new

Không cần source code để regression.

---

# 18. TESTS

Bắt buộc:

- checklist parser
- checklist coverage
- schema validation
- discovery fixture
- evidence ID uniqueness
- artifact existence
- finding without evidence rejected
- invalid requirement ref rejected
- duplicate detection
- contradiction handling
- external technical diagnostic schema
- report generation
- planner traceability
- invalid dependency rejected
- production real-order guard
- destructive action guard
- interrupted/resume
- regression comparison
- run non-overwrite
- final consistency validator

Unit/integration tests không phụ thuộc addp.vn.

---

# 19. SYSTEM VALIDATION

Sau build:

1. unit tests;
2. integration fixtures;
3. local browser fixture;
4. mock persona journey;
5. mock specialist outputs;
6. reviewer test;
7. mock Audit Report;
8. mock Improvement Plan;
9. regression test;
10. production safety test.

Tự sửa đến khi quality gate đạt.

Không audit production trong phase này.

---

# 20. DOCUMENTATION

README phải nói rõ:

- black-box/no-source architecture;
- limitations;
- agent roles;
- collectors;
- model routing;
- commands;
- artifacts;
- safety;
- resume;
- regression;
- external technical diagnostic semantics;
- những gì KHÔNG thể xác nhận khi không có source/backend access.

---

# 21. BUILD OUTPUT

Tạo:

`tools/site-audit/SYSTEM_BUILD_REPORT.md`

Ghi:
- architecture;
- modules;
- commands;
- checklist coverage;
- agents;
- collectors;
- tests;
- safety;
- model routing;
- limitations;
- prerequisites.

Tạo:

`tools/site-audit/SYSTEM_VALIDATION_REPORT.md`

Status:
- READY_FOR_AUDIT
- READY_WITH_LIMITATIONS
- NOT_READY

Không đánh giá website ADDP trong phase này.
