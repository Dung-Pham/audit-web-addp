Tiếp tục làm việc trên working tree hiện tại:

`D:\PhpstormProjects\addp-analys`

Project:

`tools/site-audit`

Đây là PHASE 2 tiếp nối trực tiếp patch vừa thực hiện.

KHÔNG build lại.
KHÔNG revert patch hiện tại.
KHÔNG đọc lại toàn bộ production evidence cũ.
KHÔNG chạy full audit.
KHÔNG gọi Sol/Astra.
KHÔNG spawn specialist/reviewer/persona LLM.
Dùng GPT-6 Luna hiện tại và ưu tiên deterministic code.

Production run cũ:

`tools/site-audit/runs/20260927T180655Z-85e584`

là IMMUTABLE.

File:

`docs/audit-prompts/03_FIX_AUDIT_SYS.md`

là user-provided/untracked nếu vẫn ở trạng thái đó; không sửa trừ khi thực sự cần.

==================================================
0. NGUYÊN TẮC TIẾT KIỆM LIMIT
==================================================

Không scan toàn repo nếu không cần.

Bắt đầu bằng:

- `git status`
- `git diff --stat`
- `git diff` cho 8 file vừa thay đổi
- các file trực tiếp liên quan CLI/pipeline/report/schema/agents mà nhiệm vụ dưới đây cần.

Không phân tích lại production run bằng LLM.

Không regenerate report cũ.

Không dispatch agent.

Ưu tiên:

code deterministic
→ tests
→ bounded smoke.

Nếu một yêu cầu đã được patch vừa rồi thực hiện đúng, chỉ verify bằng code/test, không rewrite.

==================================================
1. VIỆC ĐẦU TIÊN: FULL LOCAL TEST GATE
==================================================

Trước khi mở rộng tiếp:

```powershell
Set-Location D:\PhpstormProjects\addp-analys\tools\site-audit
npm test
```

Nếu fail:

- xác định failure do patch hiện tại;
- sửa tối thiểu;
- chạy lại targeted test;
- sau đó chạy lại `npm test`.

Không đi production smoke khi `npm test` chưa pass toàn bộ.

Lưu kết quả mới:

`runtime/test-results-phase2-baseline.txt`

hoặc tên tương đương rõ ràng.

Không sửa test để che bug.

==================================================
2. COVERAGE CONTROLLER MACHINE-READABLE
==================================================

Đây là phần còn thiếu quan trọng nhất.

Tạo một deterministic coverage controller.

Mục tiêu:

Audit không chỉ nói "đã crawl 25/31 page", mà phải biết các mục tiêu kinh doanh ADDP đã được kiểm tra đến đâu.

Sinh artifact:

`runs/<RUN_ID>/review/coverage-matrix.json`

và nếu hữu ích:

`runs/<RUN_ID>/review/COVERAGE_SUMMARY.md`

Coverage matrix phải dựa vào:

- inventory/pages;
- evidence index;
- normalized checklist;
- journeys;
- actual collected page types.

Không cần LLM.

Status hợp lệ:

- `COVERED`
- `PARTIAL`
- `NOT_FOUND`
- `BLOCKED`
- `UNKNOWN`
- `OUT_OF_SCOPE`

Không dùng PASS/FAIL ở coverage layer vì coverage không phải compliance.

==================================================
3. COVERAGE REQUIREMENTS
==================================================

Coverage controller phải cố gắng xác định ít nhất:

### Homepage

- first viewport;
- mission/brand message;
- product discovery;
- CTA;
- trust/social proof;
- mobile.

### Principal products

Bắt buộc theo dõi riêng:

- Glucare
- Viên An Đường
- Dovital

Mỗi product cần biết audit đã có evidence cho:

- product route;
- landing route nếu tồn tại;
- PDP/detail;
- offer;
- price;
- CTA;
- benefit/use;
- ingredients;
- supporting evidence/trust;
- reviews/testimonials;
- FAQ;
- meta;
- canonical;
- structured data;
- mobile;
- performance;
- purchase-route visibility.

Không invent URL.

Product identity phải lấy từ:

- normalized checklist/customer context;
- discovered public URLs;
- collected page content.

Nếu không map chắc chắn:
`UNKNOWN`.

### News / Knowledge Hub

Coverage riêng:

- listing/category;
- article detail pages;
- representative article count;
- article authorship;
- published/updated date;
- references/citations;
- expert/reviewer information nếu có;
- question-answer structure;
- summary;
- internal links;
- Article/BlogPosting schema.

Mục tiêu audit mới:

- ít nhất 3 representative article detail pages nếu có;
- target 5 nếu page budget cho phép.

Không tự crawl production ở bước tạo controller này.

Controller phải hoạt động trên saved evidence hoặc future run.

### Company / Trust

Theo dõi:

- about/company;
- contact;
- policies;
- public certificates/declarations/proof routes;
- testimonials/media proof nếu có.

### Commerce

Theo dõi:

- product CTA visibility;
- cart route visibility;
- checkout route visibility;
- guest checkout verification;
- payment verification;
- KiotViet verification.

Production read-only có thể khiến các mục cuối là BLOCKED/UNKNOWN.

Điều đó là hợp lệ.

==================================================
4. PRODUCT COVERAGE MATRIX
==================================================

Sinh artifact riêng:

`runs/<RUN_ID>/review/product-coverage-matrix.json`

hoặc integrate có cấu trúc rõ trong coverage-matrix.json.

Cần hỗ trợ report dạng:

| Capability | Glucare | Viên An Đường | Dovital |
| ... |

Nhưng machine-readable là nguồn sự thật.

Không đánh PASS cho product chỉ vì tìm thấy tên sản phẩm.

Mỗi status cần:

- `status`
- `evidence_ids`
- `urls`
- `reason`

Nếu evidence không đủ:
PARTIAL/UNKNOWN.

==================================================
5. ARTICLE / E-E-A-T COVERAGE MATRIX
==================================================

Tạo deterministic article coverage evaluation.

Không phán đoán "Google E-E-A-T score".

Không tạo điểm số.

Chỉ quan sát các signal public.

Mỗi sampled article có thể ghi:

- URL
- title
- summary/lead
- author name
- author route/profile
- publish date
- update date
- reviewer/expert
- credentials text
- citations/references
- outbound authoritative sources
- internal links
- question headings
- concise answer blocks
- Article/BlogPosting JSON-LD
- visible medical/health claims
- support/source route.

Status per signal:

- PRESENT
- ABSENT_IN_CAPTURE
- UNKNOWN
- NOT_APPLICABLE

Quan trọng:

`ABSENT_IN_CAPTURE` không tự động đồng nghĩa với site-wide failure.

==================================================
6. COVERAGE GATE
==================================================

Thêm gate trước final report/master plan.

Một run có thể:

`analysis_complete_with_coverage_gaps`

chứ không được claim comprehensive/full coverage khi thiếu core scope.

Minimum completeness rule cho ADDP:

- homepage có usable evidence;
- cả 3 principal products được mapped hoặc explicitly NOT_FOUND;
- ít nhất một route/detail representative cho từng product nếu public route tồn tại;
- news listing được kiểm;
- article detail sampling attempted;
- company/trust attempted;
- commerce visibility attempted.

Nếu một product hoàn toàn chưa được audit:

report phải nói rõ.

Không block toàn pipeline chỉ vì một page không tồn tại.

Nhưng không được gọi run là comprehensive.

==================================================
7. SPECIALIST RUBRICS — UPDATE PROMPTS ONLY
==================================================

Không chạy các specialist.

Chỉ cập nhật prompt files.

### UX/UI

Bổ sung rubric:

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
- responsive behavior;
- mobile ergonomics;
- cognitive load;
- accessibility;
- homepage → landing → PDP continuity;
- positive signals / keep-protect.

### Conversion

Bổ sung:

- offer clarity;
- price clarity;
- package quantity clarity;
- CTA hierarchy;
- objections;
- social proof;
- trust;
- risk reduction;
- promotion clarity;
- comparison;
- purchase path;
- visible cart/checkout transition.

Impacts là hypothesis nếu không có analytics.

### Content

Bổ sung:

- page purpose;
- summary;
- hierarchy;
- factual consistency;
- FAQ;
- source attribution;
- author/reviewer;
- content freshness signals;
- internal linking.

### Health content

Bổ sung:

- exact health claim;
- source/support;
- appropriate-use boundary;
- absolute safety/efficacy language;
- author/reviewer credentials where publicly visible;
- no independent medical truth judgment.

### GEO/AEO

Bắt buộc không thu hẹp thành JSON-LD.

Review:

- Organization entity clarity;
- Product entity clarity;
- name/fact consistency;
- answerability;
- question-answer structure;
- concise answer blocks;
- source attribution;
- citation-ready content;
- semantic consistency across homepage/PDP/article/FAQ;
- server-visible content;
- crawler accessibility;
- structured data.

Không tạo AI visibility score.

### Performance

Phân biệt:

- first clean load;
- LAB metrics;
- scroll stabilization;
- asset failure;
- render completeness.

### Analytics

Phân biệt:

- passive/public detection;
- emitted telemetry;
- admin configuration;
- transaction event verification.

### Checkout

Phân biệt:

- route visible;
- route reachable;
- cart state;
- guest checkout;
- payment;
- backend/KiotViet.

Không inference vượt evidence.

==================================================
8. PASSIVE ANALYTICS INSPECTION
==================================================

Review guard hiện tại.

Mục tiêu:

Cho phép collector phát hiện an toàn:

- GTM static JS;
- analytics library static JS;
- script URLs;
- public measurement/tag IDs;
- `window.dataLayer` existence;
- public inline analytics configuration.

Nhưng không để audit gửi real telemetry.

Tiếp tục BLOCK:

- `/collect`
- beacon;
- analytics event POST;
- tracking pixels/events;
- Hotjar/Clarity/session tracking event requests nếu audit sẽ phát sinh user telemetry;
- mutation/event submission.

Một static GET script load có thể được allow nếu an toàn.

Nhưng script đó KHÔNG có quyền bypass browser guard.

Thêm tests:

1. static analytics JS có thể load/inspect khi policy cho phép;
2. analytics collect/beacon vẫn blocked;
3. production fixture không nhận telemetry;
4. passive detection không được report như GA admin verified.

Nếu change này tạo privacy/safety ambiguity, ưu tiên safety và ghi limitation.

==================================================
9. AUTHORIZED TRANSACTION LANE — CHỈ SCAFFOLD
==================================================

Không chạy transaction.

Tạo config/schema/scaffold rõ cho tương lai:

Mode hiện tại:

`production_read_only`

Mode tương lai:

`authorized_transaction_test`

Default:

OFF.

Transaction mode chỉ được enable khi đồng thời thỏa:

- explicit mode;
- explicit authorization flag;
- target không tự động inherit production permission;
- separate safety gate;
- maximum bounded test-order count;
- explicit test identity/config;
- no accidental activation from normal CLI full command.

Production target hiện tại phải vẫn fail nếu cố enable transaction mode mà chưa có explicit authorization mechanism.

Không cần implement real payment/KiotViet integration logic trong phase này.

Chỉ architecture/scaffold/safety test.

Thêm tests chứng minh:

- production_read_only không thể mutate;
- changing one flag alone không unlock;
- default full audit vẫn read-only.

==================================================
10. REMEDIATION PLAN VS TRANSFORMATION PLAN
==================================================

Giữ:

`IMPROVEMENT_PLAN.md`

và accepted-finding remediation backlog.

Không phá backward compatibility.

Bổ sung:

`reports/TRANSFORMATION_PLAN.md`

và nếu cần:

`backlog/TRANSFORMATION_BACKLOG.json`

Hai loại task phải phân biệt nguồn:

### `accepted_defect`

Có accepted evidence-backed finding.

### `checklist_target`

Yêu cầu mục tiêu trong checklist nhưng chưa có evidence chứng minh failure.

### `validation_gap`

BLOCKED / UNKNOWN / insufficient coverage cần validation.

Không được biến checklist_target thành defect.

Transformation plan có 13 workstreams:

1. Homepage
2. Product architecture
3. Three product landing pages
4. Trust/social proof/evidence
5. News/Knowledge Hub
6. Health-content governance
7. Technical SEO
8. GEO/AEO/entity/structured data
9. Performance/accessibility
10. Commerce/cart/checkout
11. KiotViet validation
12. Analytics
13. QA/regression

Nếu workstream chưa đủ evidence:

ghi target/validation task thích hợp.

==================================================
11. DEPENDENCIES
==================================================

Transformation planner phải hỗ trợ logical dependencies.

Ví dụ hợp lệ:

company/product fact governance
→ PDP content
→ FAQ
→ structured data
→ GEO/AEO validation

offer/price model
→ PDP offer
→ cart
→ checkout
→ KiotViet validation

performance baseline
→ optimization
→ regression

article governance
→ article template
→ Article schema
→ GEO/AEO validation

Không invent source file/module.

Dependency phải:

- reference task tồn tại;
- acyclic;
- có short rationale.

==================================================
12. PRIORITY RATIONALE
==================================================

Không cần numerical score.

Nhưng mỗi planned task phải có:

`priority_rationale`

xem xét:

- user impact;
- business/conversion impact;
- health/trust risk;
- SEO/indexability;
- dependency/unblocking;
- confidence;
- blast radius;
- effort.

Giữ P0/P1/P2/P3.

Không chỉ mapping severity → priority.

==================================================
13. KEEP / PROTECT
==================================================

Support positive evidence first-class.

Tạo cấu trúc:

`positive_signals`

hoặc equivalent.

Positive signal phải có:

- title;
- observation;
- page;
- evidence_ids;
- why_preserve;
- confidence.

Không cần reviewer acceptance như defect nếu chỉ là observed positive fact, nhưng evidence phải resolve.

EXECUTIVE_AUDIT phải có section:

`Keep / protect`

Ví dụ chỉ xuất hiện nếu evidence thật cho thấy:

- mission clear;
- useful CTA;
- people imagery;
- testimonials;
- good content section;
- etc.

Không invent lời khen.

==================================================
14. CLI SMOKE COMMAND
==================================================

Đây là yêu cầu bắt buộc trước production smoke.

Thêm CLI command riêng, ví dụ:

```powershell
node cli.mjs smoke --target https://addp.vn/ --urls "https://addp.vn/,https://addp.vn/sua-hat-glucare-plus,..."
```

Hoặc syntax khác hợp lý.

Properties:

- max 3 URLs;
- production_read_only only;
- no persona;
- no specialist;
- no reviewer;
- no report planning;
- no transaction;
- deterministic collection only;
- creates separate immutable run;
- records `run_kind: "smoke"` in manifest;
- records exact requested URLs;
- refuses >3 URLs;
- refuses cross-origin URL;
- refuses unsafe URL;
- runs both configured desktop/mobile unless explicit safe config says otherwise.

Smoke output phải summarize:

per URL/per viewport:

- first viewport capture success;
- performance clean-load evidence;
- scroll stabilization;
- reached stable bottom;
- total scroll iterations;
- images discovered after scroll;
- failed visible assets;
- render reason codes;
- collection status;
- time/budget exhaustion.

Không cần LLM.

==================================================
15. SMOKE URL SELECTION
==================================================

Sau khi code + FULL npm test pass, chạy production smoke read-only tối đa 3 URL.

Ưu tiên:

1. `https://addp.vn/`
2. một long product page thực tế có scroll/lazy content:
   `https://addp.vn/sua-hat-glucare-plus`
   hoặc nếu inventory/current URL xác nhận Viên An Đường phù hợp hơn thì dùng route đó.
3. một long News/health article DETAIL page nếu public inventory xác định chắc chắn.

Nếu không xác định được article detail URL mà không crawl rộng:

chỉ smoke 2 URLs.

KHÔNG chạy discovery full để kiếm URL thứ 3.

==================================================
16. SMOKE KHÔNG ĐƯỢC TẠO USER ACTION
==================================================

Smoke:

- navigation GET;
- assets;
- read-only natural scrolling;
- screenshot;
- DOM inspection.

Không:

- click buy;
- cart;
- POST;
- submit;
- login;
- payment;
- account;
- lead;
- analytics telemetry.

==================================================
17. SAU SMOKE: KHÔNG CHẠY FULL AUDIT
==================================================

Ngay cả smoke pass:

DỪNG.

Không chạy:

`node cli.mjs full ...`

trong phase này.

Tôi muốn xem smoke result trước khi tiêu model limit cho audit mới.

==================================================
18. TESTS BẮT BUỘC
==================================================

Thêm/update tests cho:

- coverage matrix;
- 3-product coverage;
- article EEAT coverage;
- coverage gate;
- passive analytics;
- transaction lane safety;
- transformation planner;
- dependency validation;
- priority rationale presence;
- KEEP/PROTECT evidence validation;
- smoke max 3;
- smoke same-origin enforcement;
- smoke does not call persona/specialist/reporter;
- immutable old run;
- render-v2 semantics vẫn giữ;
- fake journey navigation vẫn bị ngăn.

Sau patch:

chạy targeted tests nếu cần.

Cuối cùng bắt buộc:

```powershell
npm test
```

Lưu full result.

Production smoke chỉ được chạy nếu FULL suite pass.

==================================================
19. KHÔNG LÀM TRONG PHASE NÀY
==================================================

Không:

- chạy full audit;
- chạy personas LLM;
- chạy specialists LLM;
- evidence reviewer LLM;
- regenerate production run cũ;
- sửa website;
- access source code website;
- real transaction;
- payment;
- KiotViet live test;
- analytics admin login;
- Search Console;
- GA admin;
- tạo fake FIELD performance;
- tạo AI/GEO score.

==================================================
20. DOCUMENTATION
==================================================

Update tối thiểu:

- README
- INTERFACES
- relevant runbook/prompt docs
- CLI help

để phản ánh:

- render-v2 semantics;
- three capture phases;
- coverage controller;
- smoke command;
- transformation vs remediation;
- transaction lane default OFF.

Không rewrite tài liệu không liên quan.

==================================================
21. FINAL RESPONSE FORMAT
==================================================

Khi hoàn tất, trả về ngắn gọn nhưng đầy đủ:

### Full test gate

- npm test result
- pass/fail count
- saved log path

### Files changed

chỉ các file thực sự đổi.

### Completed capabilities

Đánh dấu từng mục:

- coverage controller
- product matrix
- article EEAT matrix
- specialist rubric update
- passive analytics
- transaction scaffold
- transformation plan
- dependency rationale
- priority rationale
- keep/protect
- smoke command

Dùng:
COMPLETE / PARTIAL / NOT IMPLEMENTED

Không fake complete.

### Production smoke

Cho từng URL:

- desktop/mobile status
- first viewport
- performance clean load
- scroll stabilization
- reached bottom
- images discovered after scroll
- reason codes
- complete/partial/error.

### Safety

Xác nhận:

- production run cũ untouched;
- real orders = 0;
- payments = 0;
- accounts = 0;
- forms submitted = 0;
- website changes = 0;
- telemetry emitted by audit = 0 nếu test chứng minh được.

### Remaining limitations

Chỉ những limitation thật.

### Next command

KHÔNG tự chạy.

Cho tôi exact command để sau này chạy full audit mới sau khi tôi duyệt smoke.

==================================================
22. SUCCESS CONDITION
==================================================

Phase này thành công khi:

FULL local test pass
+
bounded production smoke chứng minh render-v2 xử lý tốt ADDP
+
coverage/planning architecture đã đủ để lần full audit tiếp theo thực sự đánh giá:

- homepage;
- cả 3 sản phẩm;
- article EEAT;
- SEO;
- GEO/AEO;
- UX/conversion;
- performance;
- commerce limitations;

mà không fake interaction, fake coverage hoặc fake PASS.

Bắt đầu từ working tree hiện tại và thực hiện trực tiếp.