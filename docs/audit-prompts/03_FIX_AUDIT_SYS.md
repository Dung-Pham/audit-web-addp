
MỤC TIÊU CỦA LẦN NÀY:

SỬA HỆ THỐNG HIỆN TẠI, KHÔNG BUILD LẠI TỪ ĐẦU.

Hệ thống đã có collector, crawler, Playwright, evidence, persona, specialist, reviewer, planner, report, test và production run. Hãy giữ lại kiến trúc evidence-first hiện tại và chỉ sửa/nâng cấp những phần cần thiết.

Tôi đang có giới hạn model thấp. Phiên này đang chạy bằng GPT-6 Luna.

YÊU CẦU TIẾT KIỆM MODEL/TOKEN:

- Dùng GPT-5.6 Sol cho công việc này.
- Không spawn nhiều subagent để đọc lại repo nếu main agent có thể tự làm.
- Không chạy lại các specialist/persona bằng LLM trong production run cũ.
- Không yêu cầu LLM đọc toàn bộ evidence cũ.
- Ưu tiên code deterministic, fixture test, schema validation.
- Reuse kiến trúc/code/test hiện tại.
- Chỉ đọc các file cần thiết.
- Không sửa website addp.vn.
- Không có source code website.
- Audit vẫn là black-box.
- Không thực hiện real order/payment/account creation/form submission trên production.
- Không rewrite production run cũ.
- Nếu gặp vấn đề không quan trọng đối với mục tiêu lần này, ghi lại thay vì mở rộng scope.
- Không hỏi tôi giữa chừng. Tự xử lý đến khi code + test hoàn tất.

Production run hiện tại phải được xem là immutable:

tools/site-audit/runs/20260927T180655Z-85e584/

Không sửa evidence/finding/report của run đó để làm cho kết quả đẹp hơn.

==================================================
A. VẤN ĐỀ QUAN TRỌNG NHẤT: RENDER ADDP
==================================================

Website ADDP có hai đặc điểm thực tế:

1. Tốc độ tải trang khá chậm.
2. Nhiều section dùng scroll animation/lazy reveal:
   - ban đầu section có thể chưa hiện;
   - phải cuộn đến section thì content/image mới xuất hiện;
   - IntersectionObserver / lazy image / animation có thể chỉ kích hoạt khi element đi vào viewport.

Production audit hiện tại đã có incremental scroll nhưng vẫn thu được:

- nhiều page collection_status = partial;
- không có render_complete page;
- nhiều image/resource chưa hoàn tất;
- visual absence finding có nguy cơ bị ảnh hưởng bởi việc section chưa được reveal.

Cần sửa render collector một cách có hệ thống.

KHÔNG được giải quyết bằng cách:

- inject CSS `opacity:1`;
- bỏ `display:none`;
- remove animation classes;
- tự gọi internal application JS;
- edit DOM để ép content hiện;
- dùng screenshot như bằng chứng của một UI state không thực sự xảy ra.

Chỉ được dùng hành vi read-only giống người dùng thật:

- load;
- wait;
- scroll;
- observe;
- wait resource;
- screenshot.

==================================================
B. TÁCH 3 LOẠI CAPTURE
==================================================

Một page audit phải phân biệt ba trạng thái sau.

### 1. FIRST VIEWPORT CAPTURE

Đây là trạng thái người dùng thật thấy trước khi audit tạo synthetic scroll.

Sau navigation:

- DOMContentLoaded;
- bounded initial stabilization;
- không cuộn;
- không freeze animation trước khi capture;
- capture viewport desktop/mobile;
- capture DOM state;
- capture heading/text/CTA visible ở first viewport.

Artifact/evidence phải ghi rõ:

`capture_phase: "first_viewport"`

First viewport này dùng cho:

- hero;
- above-the-fold;
- CTA first impression;
- first-time visitor;
- homepage orientation;
- initial product orientation.

Không được lấy screenshot sau khi audit đã cuộn xuống rồi quay lại để thay cho first viewport nguyên bản.

### 2. PERFORMANCE CAPTURE

Performance LAB phải chạy trong clean page/context hoặc clean navigation state.

KHÔNG synthetic scroll trước hoặc trong measurement.

Không được dùng scroll-reveal pass để tính LCP baseline.

Đo trong bounded clean-load window.

Ghi rõ:

`capture_phase: "performance_clean_load"`

Performance measurement tiếp tục phải được label LAB.

Không biến nó thành FIELD.

Nếu measurement bị ảnh hưởng bởi audit guard/resource blocking phải ghi limitation.

### 3. STABILIZED CONTENT/VISUAL CAPTURE

Sau khi first viewport và performance evidence đã được bảo toàn, mới chạy natural incremental scroll để reveal toàn bộ page.

Ghi rõ:

`capture_phase: "scroll_stabilized"`

Đây mới là evidence dùng để đánh giá:

- full-page content;
- section existence;
- FAQ;
- social proof;
- lower CTA;
- footer;
- trust block;
- review block;
- landing-page structure;
- long PDP content.

==================================================
C. ADAPTIVE SCROLL STABILIZATION
==================================================

Refactor cơ chế hiện tại trong:

`tools/site-audit/collectors/browser.mjs`

Không chỉ dùng:

scroll -> fixed wait -> scroll tiếp.

Mỗi viewport step cần có adaptive stabilization.

Suggested behavior:

1. Scroll khoảng 70–85% viewport height bằng behavior instant.
2. Sau scroll, chờ một dwell ngắn.
3. Sau đó poll render state nhiều lần.
4. Xem page là stable tại step khi một số consecutive samples không còn thay đổi đáng kể.

Theo dõi tối thiểu:

- scrollHeight;
- DOM/body text length hoặc DOM marker count;
- number of images;
- pending images;
- successfully decoded images;
- resource entry count;
- relevant mutation count nếu triển khai MutationObserver;
- visible element count hoặc useful content markers;
- active finite animations;
- newly discovered lazy assets.

Không cần equality tuyệt đối.

Mục tiêu là phát hiện:

scroll
→ section reveal
→ DOM/resource thay đổi
→ đợi
→ ổn định
→ scroll tiếp.

Thêm bounded config hợp lý, ví dụ:

- initialRenderTimeoutMs
- totalRenderBudgetMs
- scrollStepRatio
- scrollStepPauseMs
- stepStabilityTimeoutMs
- stabilitySampleMs
- stabilityConsecutiveSamples
- maxScrollIterations

Tên config có thể điều chỉnh cho phù hợp code hiện tại.

Mọi timeout phải bounded.

Không để một page treo vô hạn.

==================================================
D. LAZY IMAGES PHÁT SINH SAU SCROLL
==================================================

`waitForRenderAssets()` hiện không được chỉ quan tâm tới danh sách images tồn tại trước lúc bắt đầu wait.

Sau mỗi scroll step:

- kiểm tra lại `document.images`;
- phát hiện image mới;
- xem `currentSrc/src`;
- chờ load/error bounded;
- nếu `HTMLImageElement.decode()` dùng được, có thể dùng bounded decode;
- sau khi DOM/resource thay đổi lại sample tiếp.

Một image lazy-loaded sau khi scroll phải có cơ hội được load trước khi audit cuộn tiếp.

Không retry resource vô hạn.

Lưu thống kê:

- images discovered before scroll;
- images discovered after scroll;
- loaded;
- decoded;
- failed;
- pending;
- lazy/reveal discovered.

==================================================
E. BOTTOM DETECTION PHẢI CHẮC HƠN
==================================================

Không kết thúc chỉ vì chạm bottom một lần.

Page có thể:

scroll bottom
→ lazy section xuất hiện
→ scrollHeight tăng.

Require ví dụ:

- bottom được chạm;
- scrollHeight không tiếp tục tăng;
- DOM/resource state stable;
- đạt 2 hoặc 3 consecutive stable bottom passes.

Có thể thực hiện một bounded second verification pass nếu page vừa tăng height nhiều trong pass đầu.

Không chạy vô hạn.

Sau stabilization:

- capture stabilized full-page screenshot;
- capture stabilized viewport state nếu cần;
- lưu trace của quá trình scroll;
- sau cùng có thể return to top, nhưng screenshot `first_viewport` nguyên bản đã phải được lưu trước đó.

==================================================
F. NETWORK/DOM QUIET THAY VÌ CHỈ NETWORKIDLE
==================================================

Không dựa hoàn toàn vào Playwright `networkidle`, vì:

- telemetry bị audit guard block;
- website có long-running/background requests;
- lazy load phụ thuộc scroll.

Nếu hợp lý, implement bounded "render quiet" dựa trên combination:

- no meaningful DOM mutation;
- no new relevant resources;
- no new images;
- stable scrollHeight;
- no important finite animation still progressing.

Ignore các request đã được audit guard xác định là telemetry/audit-induced blocker khi quyết định visual stability.

==================================================
G. PHÂN BIỆT RESOURCE FAILURE VÀ RENDER FAILURE
==================================================

Production run cũ có rất nhiều failed image/resource và vì vậy gần như mọi page bị partial.

Không được đơn giản chuyển tất cả thành complete.

Nhưng cũng không được coi một resource lỗi không liên quan là bằng chứng toàn bộ page chưa render.

Tách:

1. `resource_health`
2. `render_completeness`

Ví dụ:

- một image đang visible/lớn/thuộc section chính nhưng failed:
  có thể ảnh hưởng render completeness.

- một resource không visible, tracking pixel, duplicate, placeholder nhỏ, hoặc asset không ảnh hưởng content:
  ghi warning/resource failure nhưng không nhất thiết làm cả page render-incomplete.

Cần có reason codes rõ ràng.

Ví dụ:

`render_complete`
`render_partial_lazy_timeout`
`render_partial_visible_asset_failure`
`render_partial_unstable_dom`
`render_partial_bottom_not_reached`
`render_partial_budget_exhausted`

Page object và evidence phải lưu lý do.

Không đổi semantics của production run cũ.

==================================================
H. THÊM FIXTURE TEST CHO SCROLL-REVEAL
==================================================

Mở rộng fixture site/test hiện có.

Bắt buộc có fixture mô phỏng:

1. Slow initial content.
2. Image lazy load sau scroll.
3. Section chỉ hiện khi IntersectionObserver trigger.
4. ScrollHeight tăng sau khi gần bottom.
5. Animation/reveal có delay.
6. Một image lỗi nhưng content chính vẫn đầy đủ.
7. Page không bao giờ ổn định để xác minh timeout bounded.
8. Performance capture không bị synthetic scroll contaminate.
9. First viewport screenshot/state được capture trước synthetic scroll.

Tests phải chứng minh collector không chỉ `sleep` cố định rồi hy vọng.

Không cần production để test logic này.

==================================================
I. SỬA PERSONA JOURNEY: KHÔNG GIẢ ĐƯỜNG ĐI
==================================================

File hiện tại:

`tools/site-audit/orchestration/journeys.mjs`

Đang có logic:

nếu không tìm thấy visible matching link
→ lấy URL đã crawler discover
→ `page.goto()` URL đó.

Điều này KHÔNG được dùng như bằng chứng người dùng đã tìm được đường đi.

Sửa thành:

### User journey

Chỉ count journey navigation khi:

- link/control thực sự visible;
- audit xác định hành động là read-only/safe;
- interaction thực sự xảy ra;
- state/URL/result sau interaction được capture.

Nếu không tìm được visible route:

- record `unreachable_from_observed_ui`;
- confusion/blocker;
- không increment click;
- không giả click;
- không dùng discovered URL để tiếp tục user journey.

Nếu vẫn muốn inspect URL discovery:

tách thành:

`assisted_inventory_inspection`

hoặc equivalent.

Nó KHÔNG được tính:

- click;
- user reachability;
- successful journey.

Manifest phải phân biệt:

- actual verified interactions;
- assisted/direct inspections;
- attempted interactions.

`clicks_verified` phải là click thực.

==================================================
J. PERSONA OUTPUT PHẢI CÓ CẢ POSITIVE SIGNALS
==================================================

Không chỉ săn lỗi.

Mỗi persona phải ghi:

- what worked;
- what was clear;
- trust signal thấy được;
- friction;
- confusion;
- blocker;
- journey completion;
- actual clicks;
- inspected-only routes.

Các điểm tốt sau này phải xuất hiện trong report dưới dạng:

`KEEP / PROTECT`

để redesign không phá các phần đang tốt.

Không tạo lời khen nếu không có evidence.

==================================================
K. COVERAGE CONTROLLER
==================================================

Audit hiện tại chưa cover cân bằng toàn bộ mục tiêu ADDP.

Thêm explicit coverage matrix/gate.

ADDP cần tối thiểu cố gắng cover:

### Homepage
- first viewport;
- mission;
- product discovery;
- CTA;
- trust/social proof.

### 3 principal products
- Glucare;
- Viên An Đường;
- Dovital.

Đối với mỗi sản phẩm cố gắng có:

- public landing/product route;
- product detail;
- price/offer;
- CTA;
- summary;
- detail content;
- evidence/trust;
- review/social proof;
- FAQ;
- metadata;
- schema.

### News/Knowledge Hub
- listing/category;
- ít nhất 3 representative article pages nếu inventory có đủ;
- ưu tiên 5 nếu không làm tăng page budget quá nhiều.

Kiểm tra article-level:

- title;
- summary;
- author;
- publish/update date;
- reviewer/expert credentials nếu có;
- citations/references;
- health claim sourcing;
- heading structure;
- question-answer structure;
- internal links;
- Article/BlogPosting schema;
- visible EEAT signals.

### Company/trust
- about/company;
- contact;
- policies;
- public proof/certification routes nếu có.

### Commerce
Production read-only chỉ kiểm tra những gì an toàn.

Coverage status cần phân biệt:

- COVERED
- PARTIAL
- NOT_FOUND
- BLOCKED
- OUT_OF_SCOPE

Không biến BLOCKED/NOT_FOUND thành FAIL nếu không đủ evidence.

Sinh machine-readable coverage artifact, ví dụ:

`review/coverage-matrix.json`

và section dễ đọc trong report.

Audit không được coi là "coverage complete" nếu 1 trong 3 principal products chưa được kiểm tra ở mức tối thiểu.

==================================================
L. NÂNG SPECIALIST RUBRICS
==================================================

Không cần chạy specialist LLM ngay trong task sửa code này.

Chỉ cập nhật prompt/rubric để lần audit sau tốt hơn.

Đặc biệt mở rộng:

### UX/UI

- first 3-second orientation;
- first viewport;
- hierarchy;
- typography;
- readability;
- spacing;
- navigation;
- CTA prominence;
- content scanning;
- product discovery;
- responsive;
- mobile ergonomics;
- cognitive load;
- accessibility;
- homepage → landing → PDP continuity.

### Conversion

- offer clarity;
- price clarity;
- package clarity;
- CTA hierarchy;
- objection handling;
- social proof;
- risk reduction;
- trust;
- promotion clarity;
- product comparison;
- purchase path;
- visible cart/checkout transition.

Không được claim conversion lift nếu không có measured analytics.

### Content / EEAT / Health

- claim;
- evidence;
- source;
- expertise;
- authorship;
- review;
- appropriate-use boundaries;
- FAQ;
- article-level EEAT;
- consistency between product/article/FAQ.

Không tự quyết định medical truth.

### GEO/AEO

Không được biến GEO/AEO thành chỉ "có JSON-LD hay không".

Kiểm tra:

- organization/entity clarity;
- product entity clarity;
- consistent facts;
- answerability;
- concise answer blocks;
- question → answer structure;
- attribution;
- sourceability;
- citation-ready content;
- semantic consistency;
- server-visible content;
- structured data;
- crawler access.

Không tạo "AI visibility score" giả.

### Performance

Phân biệt:

- clean-load performance;
- audit-induced scroll stabilization;
- resource problems;
- LAB vs FIELD.

### Analytics

Phân biệt:

- public/passive tracking evidence;
- admin configuration unknown;
- transaction event verification blocked.

### Checkout

Production:
read-only only.

Không claim guest checkout/payment/KiotViet success.

==================================================
M. ANALYTICS PASSIVE INSPECTION
==================================================

Hiện telemetry guard có thể chặn cả analytics library và vì vậy làm mất visibility về tracking setup.

Review lại guard.

Mục tiêu:

Có thể cho phép an toàn khi phù hợp:

- static GET analytics/tag-manager library scripts;

nhưng tiếp tục chặn:

- beacon;
- collect endpoint;
- tracking POST;
- event submission;
- user-identifying telemetry do audit tạo ra.

Mọi request vẫn phải qua safety mediation.

Nếu cho phép static analytics JS:

- third-party script load không được phép bypass mutation policy;
- mọi outgoing telemetry vẫn bị block.

Ngoài runtime inspection, collector có thể inspect:

- script URLs;
- inline config;
- dataLayer existence;
- public tag identifiers;

mà không gửi event.

Thêm test cho behavior này.

Không biến passive detection thành xác nhận GA admin configuration.

==================================================
N. COMMERCE / KIOTVIET: TÁCH THÀNH 2 LANES
==================================================

KHÔNG thực hiện transaction production trong task này.

Giữ:

### Lane A — production_read_only

- không add cart nếu tạo state/mutation;
- không checkout submission;
- không real order;
- không payment;
- không account creation.

### Lane B — authorized_transaction_test

Chỉ tạo kiến trúc/config/scaffold cho tương lai.

Lane B chỉ được phép chạy khi:

- explicit config bật;
- target được xác nhận là authorized test/staging hoặc explicit authorized test environment;
- safety gate riêng pass.

Dùng để sau này verify:

PDP
→ cart
→ guest checkout
→ order
→ confirmation
→ KiotViet integration
→ purchase analytics.

Mặc định OFF.

Không chạy Lane B bây giờ.

REQ guest checkout/KiotViet production vẫn có thể BLOCKED/UNKNOWN.

==================================================
O. PATTERN FINDING THAY VÌ CHỈ PAGE FINDING
==================================================

Hệ thống hiện có thể có cùng một lỗi ở nhiều PDP nhưng thành nhiều finding/task rời.

Thêm khả năng phân biệt:

`instance_finding`

và

`pattern_finding`

Ví dụ:

Nếu Glucare + Viên An Đường + Dovital đều thiếu cùng PDP FAQ pattern:

không nhất thiết tạo 3 task giống nhau.

Có thể tạo:

`PDP template/content model lacks required FAQ section on sampled product pages`

với:

- affected URLs;
- all evidence IDs;
- all origins;
- instance list.

Không merge hai vấn đề chỉ vì title giống nhau.

Chỉ merge khi semantic problem + recommended implementation unit thực sự giống nhau.

Reviewer/deduplicator phải lưu history.

==================================================
P. HAI LOẠI PLAN KHÁC NHAU
==================================================

Giữ remediation backlog hiện có.

Nhưng bổ sung second-level planning.

### 1. REMEDIATION PLAN

Chỉ từ accepted findings.

Dùng để sửa lỗi đã chứng minh.

### 2. WEBSITE TRANSFORMATION PLAN

Từ:

- explicit ADDP checklist/business objectives;
- accepted findings;
- coverage gaps;
- BLOCKED/UNKNOWN requirements;
- target architecture.

Transformation plan KHÔNG được biến UNKNOWN/BLOCKED thành "website đang lỗi".

Ví dụ:

Nếu guest checkout BLOCKED:

không ghi:
"guest checkout không hoạt động".

Ghi:
"Validate and establish guest-checkout requirement in an authorized transaction environment."

Nếu News E-E-A-T chưa cover:

không ghi:
"articles fail EEAT".

Ghi:
"Complete article-level EEAT validation and implement missing target requirements once evidence is established."

Transformation plan cần có các workstream:

1. Homepage.
2. Product architecture.
3. Three product landing pages.
4. Trust/social proof/evidence.
5. News/Knowledge Hub.
6. Health-content governance.
7. Technical SEO.
8. GEO/AEO/entity/structured data.
9. Performance/accessibility.
10. Commerce/cart/checkout.
11. KiotViet validation.
12. Analytics.
13. QA/regression.

Nếu một workstream chưa có accepted finding nhưng checklist có target rõ ràng, được tạo `target/validation task`, nhưng source phải ghi rõ:

`checklist_target`

không phải:

`accepted_defect`.

==================================================
Q. DEPENDENCY GRAPH THỰC SỰ
==================================================

Hiện final plan gần như "no dependencies".

Cải thiện dependency model.

Không invent source files.

Có thể biểu diễn logical dependencies như:

product/company fact governance
→ product content
→ FAQ
→ Product/FAQ structured data
→ GEO/AEO validation.

offer/price model
→ PDP offer
→ cart
→ checkout
→ KiotViet transaction validation.

performance baseline
→ optimization
→ regression measurement.

article/content governance
→ EEAT article template
→ Article schema
→ GEO/AEO content validation.

Validate:

- dependency exists;
- no cycle.

==================================================
R. PRIORITY KHÔNG CHỈ = SEVERITY
==================================================

Không mặc định:

high severity → P1

mà không xét thêm gì.

Planning priority cần xem:

- requirement criticality;
- user impact;
- business/conversion impact;
- trust/health-content risk;
- SEO/indexability;
- dependency/unblocks-other-work;
- confidence;
- blast radius;
- effort.

Không cần tạo điểm số giả chính xác.

Nhưng planner phải lưu rationale ngắn cho priority.

==================================================
S. PRODUCT COVERAGE MATRIX
==================================================

Sinh matrix cho 3 sản phẩm:

- Glucare;
- Viên An Đường;
- Dovital.

Rows tối thiểu:

- product route;
- landing route;
- offer;
- price;
- CTA;
- benefit;
- ingredient;
- supporting evidence;
- review/testimonial;
- FAQ;
- meta;
- canonical;
- schema;
- mobile;
- performance;
- purchase route visibility.

Mỗi cell:

- PASS chỉ khi evidence thật đủ;
- FAIL;
- PARTIAL;
- BLOCKED;
- UNKNOWN;
- NOT_FOUND.

Không infer.

==================================================
T. REPORT ARCHITECTURE
==================================================

Không cần xóa compatibility output cũ.

Giữ:

- AUDIT_REPORT.md
- IMPROVEMENT_PLAN.md
- EXECUTIVE_PLAN.md

Nhưng thêm hoặc refactor để người quản lý không cần đọc report 400KB mới hiểu.

Tạo một concise executive audit artifact, ví dụ:

`reports/EXECUTIVE_AUDIT.md`

Nó cần nói ngắn gọn:

- audit scope;
- coverage;
- strengths to protect;
- top evidence-backed problems;
- major unknown/blocked areas;
- 3-product status;
- major workstreams;
- immediate priorities;
- next validation requirements.

Detailed evidence vẫn ở AUDIT_REPORT/evidence appendix.

Nếu hợp lý, tạo:

`reports/EVIDENCE_APPENDIX.md`

Không duplicate raw JSON khổng lồ vào executive report.

==================================================
U. MODEL ROUTING / LOW LIMIT
==================================================

Đừng rewrite lịch sử model metadata của run cũ.

Đối với future routing:

- requested model và verified effective model phải vẫn là hai field khác nhau;
- không claim effective model nếu runtime không expose.

Trong task code-fix hiện tại:

- dùng main GPT-6 Luna;
- không gọi specialist LLM;
- không gọi reviewer LLM;
- không gọi Astra/Sol;
- không chạy full audit/report LLM pipeline.

Nếu code hiện tại cần docs routing update, chỉ update future/default policy và giữ historical execution metadata.

==================================================
V. TEST STRATEGY — BẮT BUỘC TIẾT KIỆM
==================================================

Thứ tự thực hiện:

### Phase 1

Inspect current implementation và patch code.

### Phase 2

Run local fixture/unit/integration tests.

Tất cả existing tests phải pass hoặc được update hợp lý nếu behavior intentionally changed.

Thêm tests cho behavior mới.

### Phase 3

Nếu local test pass:

chỉ chạy MỘT production smoke validation nhỏ, read-only.

Không chạy full 31-page audit.

Smoke target ưu tiên:

1. homepage;
2. một product page có nhiều lazy/reveal content, ưu tiên Glucare hoặc Viên An Đường;
3. một long content/article page nếu cần.

Maximum khoảng 3 representative URLs.

Smoke test chỉ nhằm kiểm tra:

- first viewport capture;
- adaptive stabilization;
- scroll reveal;
- lazy images;
- bottom reach;
- render completeness reasons;
- clean performance capture không bị scroll contaminate.

KHÔNG:

- chạy personas bằng LLM;
- chạy 11 specialists;
- chạy reviewer LLM;
- generate lại full production report;
- transaction test.

Nếu hiện CLI chưa hỗ trợ bounded smoke page set, có thể thêm safe smoke command/config.

Production smoke phải read-only.

==================================================
W. ACCEPTANCE CRITERIA CHO LẦN SỬA NÀY
==================================================

Task chỉ hoàn tất khi:

1. Existing safety guarantees vẫn giữ nguyên.
2. Local test suite pass.
3. Có fixture proving slow page handling.
4. Có fixture proving scroll reveal.
5. Có fixture proving lazy image added after scroll.
6. Có fixture proving dynamic scrollHeight.
7. First viewport preserved before synthetic scroll.
8. Performance capture không synthetic scroll.
9. Stabilized full-page capture dùng natural scroll.
10. Render completeness có explicit reason codes.
11. Persona không dùng discovered URL như fake user navigation.
12. Coverage matrix/gate tồn tại.
13. 3-product coverage model tồn tại.
14. Article/EEAT coverage được bổ sung.
15. GEO/AEO rubric không chỉ kiểm JSON-LD.
16. Pattern findings được support.
17. Positive evidence/KEEP-PROTECT được support.
18. Remediation plan và Transformation plan được phân biệt.
19. Logical dependencies được support.
20. Production transaction vẫn disabled.
21. Authorized transaction lane chỉ là scaffold, default OFF.
22. Passive analytics inspection không gửi real telemetry.
23. Existing run không bị rewrite.
24. Production smoke nếu chạy không quá representative bounded scope đã nêu.
25. Không có fake model metadata.
26. Không có fake click.
27. Không có fake PASS.
28. Final system docs phản ánh behavior mới.

==================================================
X. FILES CÓ KHẢ NĂNG CẦN SỬA
==================================================

Đây chỉ là starting point, không phải bắt buộc sửa tất cả:

- tools/site-audit/collectors/browser.mjs
- tools/site-audit/collectors/index.mjs
- tools/site-audit/config/audit.json
- tools/site-audit/orchestration/journeys.mjs
- tools/site-audit/orchestration/pipeline.mjs
- tools/site-audit/orchestration/core.mjs
- tools/site-audit/reporters/planner.mjs
- tools/site-audit/reporters/index.mjs
- tools/site-audit/schemas/*
- tools/site-audit/agents/PROTOCOL.md
- tools/site-audit/agents/personas/*
- tools/site-audit/agents/specialists/*
- tools/site-audit/agents/reviewers/*
- tools/site-audit/agents/planning/master-planner.md
- tools/site-audit/tests/*
- tools/site-audit/fixtures/*
- tools/site-audit/README.md
- tools/site-audit/INTERFACES.md
- docs/audit-prompts/00_RUN_ALL.md
- docs/audit-prompts/01_BUILD_SYSTEM.md
- docs/audit-prompts/02_RUN_AUDIT_AND_REPORT.md

Không thay đổi file chỉ để tạo diff.

==================================================
Y. IMPLEMENTATION PRINCIPLES
==================================================

Ưu tiên sửa nhỏ và composable.

Không tạo một framework mới song song.

Preserve:

- existing schemas nếu có thể extend;
- evidence IDs;
- immutable runs;
- production safety;
- black-box semantics;
- regression capability;
- checklist traceability.

Không sửa một limitation bằng cách nói dối status.

Nếu visual evidence chưa đủ:

PARTIAL.

Nếu không test được:

BLOCKED hoặc UNKNOWN.

Nếu evidence đủ:

PASS/FAIL theo requirement.

==================================================
Z. FINAL OUTPUT CỦA BẠN
==================================================

Sau khi hoàn thành, không viết một bài giải thích dài.

Trả về:

1. Files changed.
2. Những thay đổi kiến trúc chính.
3. Tests added/changed.
4. Test results.
5. Production smoke result nếu đã chạy.
6. Render completeness trước/sau smoke nếu có.
7. Bất kỳ limitation còn lại.
8. Exact command tôi cần chạy sau này để thực hiện full audit mới.
9. Xác nhận rằng production run cũ không bị rewrite.
10. Xác nhận không real order/payment/form submission/account creation.
11. Xác nhận không dùng Sol/Astra/subagent tốn model nếu thực tế không dùng.

QUAN TRỌNG:

Đừng chỉ phân tích và đưa đề xuất.

Hãy trực tiếp sửa code, test code, cập nhật docs/prompts cần thiết và kết thúc ở trạng thái có thể chạy audit mới.

Không chạy full audit mới trong task này.