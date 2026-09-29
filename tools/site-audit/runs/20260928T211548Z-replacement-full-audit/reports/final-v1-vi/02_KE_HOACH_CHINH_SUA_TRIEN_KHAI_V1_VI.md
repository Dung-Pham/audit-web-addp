# KẾ HOẠCH CHỈNH SỬA & NÂNG CẤP WEBSITE ADDP — V1

**Nguồn duy nhất:** run `20260928T211548Z-replacement-full-audit`. **Tính chất:** kế hoạch triển khai dẫn xuất; không sửa backlog, dependency hay finding canonical. Đọc cùng [báo cáo audit](01_BAO_CAO_AUDIT_V1_VI.md) và [bộ đầu vào Marketing](03_YEU_CAU_NOI_DUNG_TAI_NGUYEN_MARKETING_V1_VI.md).

## 1. Mục tiêu

Khắc phục 14 finding accepted sau dedup, biến yêu cầu kinh doanh có đủ đầu vào thành trải nghiệm có thể kiểm thử, và xác minh các khả năng hiện là UNKNOWN/PARTIAL/BLOCKED. Không coi một hạng mục checklist là lỗi đã xác nhận nếu thiếu evidence; không tuyên bố hiệu quả y khoa hoặc giao dịch thành công. Các ưu tiên là **đề xuất lập kế hoạch**, chưa phải cam kết ngân sách, ngày hoàn thành hay ROI.

## 2. Nguyên tắc triển khai

- **Remediation (R):** xuất phát từ finding accepted và giữ nguyên phạm vi quan sát. **Transformation (T):** mục tiêu mới từ checklist; hiện trạng chưa đủ bằng chứng không được mô tả thành defect. **Validation (V):** kiểm tra trạng thái chưa xác minh trong môi trường được phê duyệt.
- Chốt nguồn sự thật về pháp nhân, hotline, sản phẩm, giá, khuyến mại và claim **trước** khi viết copy, thiết kế hoặc đánh dấu schema. Claims cần Content → Medical/Scientific Reviewer → Legal/compliance nếu áp dụng → xuất bản.
- Production read-only trong audit. Triển khai và thử giao dịch chỉ khi business cấp môi trường/phạm vi; không dùng run này để xác nhận checkout, payment hay KiotViet.
- Developer tự tìm component/template/module trong source; audit black-box không chỉ ra file nguồn. Cần lưu bản so sánh trước–sau, người duyệt, URL và điều kiện kiểm thử trong project triển khai mới, không ghi đè evidence run.
- Giữ các route sản phẩm công khai, đường dẫn Giới thiệu/chính sách, CTA đang thấy, canonical/robots có giá trị và `BlogPosting` hiện có khi thay đổi cấu trúc; xem §29 audit.

## 3. Phạm vi và ưu tiên

Run thu 25/25 trang usable (16 COMPLETE, 9 PARTIAL), có 3 sản phẩm và 3 bài detail được chọn; 4 persona PARTIAL. Checklist: 8 UNKNOWN, 7 PARTIAL, 2 BLOCKED, 0 PASS. Mức ưu tiên đề xuất dựa trên rủi ro niềm tin/chuyển đổi, số trang ảnh hưởng, vai trò nền tảng, độ chắc của evidence và phụ thuộc triển khai; **không phải xếp hạng chỉ từ severity**. P0: cần quyết định/chặn sai lệch công khai trước phát hành. P1: sửa lỗi hiển thị/tốc độ/crawl có evidence rõ. P2: hoàn thiện khả năng nội dung, đo lường, schema và xác minh. P3: cải tiến sau khi nền tảng ổn định. Effort XS/S/M/L là cỡ tương đối, cần technical discovery.

## 4. Current state → target state

| Miền | Hiện trạng có bằng chứng | Trạng thái đích và kiểm chứng |
| --- | --- | --- |
| Nhận diện/liên hệ | Trang Viên An Đường có pháp nhân, địa chỉ và hotline không nhất quán (`FND-BRAND-BRAND-20260928-001`) | Business ký duyệt bản chuẩn; trang và footer dùng đúng dữ liệu, rà các template liên quan |
| Giá và hành động | Glucare có điểm vào 0 ₫/9.000 ₫ dễ hiểu nhầm (`FND-CONVERSION-CONV-001`); luồng sau CTA chưa xác minh | Giá chuẩn và điều kiện ưu đãi nhất quán ở mọi điểm vào; thử flow được phép |
| Homepage/mobile | Hero/điểm vào sản phẩm và trải nghiệm mobile cần chỉnh theo finding UX/performance | Thiết kế theo hierarchy đã duyệt, duy trì điều hướng/CTA; test viewport và LCP |
| Nội dung/claims | Placeholder, câu trả lời/nguồn, review y khoa còn thiếu hoặc manual review | Copy được duyệt; tác giả, reviewer, nguồn, ngày và disclosure có thật |
| Technical SEO/GEO | Sitemap/robots/meta/schema và khả năng truy xuất AI có finding được chấp nhận nhưng phạm vi khác nhau | Endpoint và markup hợp lệ, facts khớp nội dung, kiểm bằng công cụ thích hợp |
| Analytics/commerce | Public tag signals không quan sát thấy; checkout/payment/KiotViet UNKNOWN/BLOCKED | Kiểm cấu hình, consent và test giao dịch ở môi trường được phép; không suy từ public capture |

## 5. Mười workstream

| Workstream | Phạm vi | Kết quả bàn giao | Nguồn chính |
| --- | --- | --- | --- |
| WS-01 Business truth / Brand / Trust | Pháp nhân, hotline, giá, chứng nhận, claim approvals | Hồ sơ facts và người duyệt | `TASK-002`, `TASK-004`, `HC-001/002`, `REQ-001/005` |
| WS-02 Design System / UI / Mobile UX | Type, màu, spacing, CTA, responsive, accessibility | UI kit và kiểm thử viewport | `TASK-014`, `REQ-002/003/007` |
| WS-03 Homepage | Hero, 3 sản phẩm, value proposition, trust, đường chuyển tiếp | Trang chủ được duyệt, có đo lường | `TASK-007/014`, `REQ-001/002/003/004` |
| WS-04 3 Product Experiences | Glucare, Viên An Đường, Dovital, giá/ảnh/FAQ/CTA | Ba product packs và ba trang tương ứng | `TASK-002/004`, `REQ-006/007/008/009` |
| WS-05 Content / E-E-A-T | Article, author, reviewer, references, disclosure | 3 bài mẫu qua health review | `TASK-003`, `HC-001/002`, `REQ-011/012/013` |
| WS-06 GEO / AEO / Structured Data | Entity facts, direct answers, FAQ, bot exposure, schema | Nội dung answerable và markup kiểm được | `TASK-005/006/013`, `REQ-010/011` |
| WS-07 Technical SEO | Sitemap, robots, meta/canonical và template QA | Endpoints, meta và crawl QA | `TASK-010/011/012`, `REQ-013` |
| WS-08 Performance | Homepage, `/benh-ly`, 3 article, ảnh/font/JS theo điều tra | So sánh lab trên cùng profile | `TASK-007/008/009` |
| WS-09 Analytics / Measurement | Consent, GTM/GA4/Pixel, event taxonomy | Kế hoạch đo và test event được phép | `TASK-001`, `REQ-014` |
| WS-10 Commerce / Checkout / KiotViet | Guest checkout, thanh toán, đồng bộ, vận hành | Requirement và test plan, rồi thực thi khi được duyệt | `REQ-015/016/017` (UNKNOWN/BLOCKED) |

## 6. Planning dependencies (đề xuất, không phải dependency canonical)

Backlog gốc ghi `dependencies: []`; bảng dưới là **suy luận lập kế hoạch** để tránh xây trên dữ liệu chưa được phê duyệt. Các ký hiệu `DEC`, `TR`, `VAL` chỉ tồn tại trong tài liệu này.

| Tiền đề | Công việc phụ thuộc | Lý do / điều kiện mở khóa |
| --- | --- | --- |
| `DEC-01` nguồn sự thật doanh nghiệp | `TASK-002`, `TR-01`, `TASK-013` | Pháp nhân/địa chỉ/hotline và Organization facts không được tự chọn |
| `DEC-02` giá, SKU, offer, thời hạn | `TASK-004`, `TR-03`, `TASK-013`, `VAL-03` | Copy, UI và Product/Offer schema phải đồng nhất |
| `DEC-03` claim/safety approval | `TASK-003`, `TR-03`, `TASK-005`, `TASK-013` | Không biên tập marketing thành tuyên bố y khoa đã xác minh |
| `TR-01` guideline thương hiệu + `TR-02` UI kit | `TR-03`, `TR-04`, `TASK-014` | Giao diện homepage/product dùng cùng quy tắc |
| `TR-03` product content có duyệt | `TASK-005`, `TASK-013`, `TR-04` | FAQ, entity và schema lấy từ facts hiển thị |
| `TR-05` yêu cầu checkout/fulfillment | `VAL-03`, `TR-06`, `VAL-04` | Test event/order phải dựa trên flow được phê duyệt |
| `TASK-010/011/012` | `VAL-02` crawl/index QA | Kiểm endpoint/route/meta sau sửa |
| `TASK-007/008/009` + `TR-02` | `VAL-01` performance/visual QA | Không so tốc độ trước/sau nếu profile hay layout đổi bất kiểm soát |
| `TR-06` taxonomy đo lường + consent | `TASK-001`, `VAL-04` | Cấu hình tag và event phải có định nghĩa/điều kiện pháp lý |

Không biến sự phụ thuộc thành chuỗi tuần tự cứng ở nơi có thể làm song song: điều tra performance, sitemap và nội dung đầu vào có thể khởi động cùng lúc. Mỗi gate được mở bằng bằng chứng phê duyệt hoặc test, không bằng giả định.

## 7. Execution waves

| Wave | Mục tiêu, công việc | Owner dẫn dắt | Input / dependency | Output và acceptance |
| --- | --- | --- | --- | --- |
| 0 — quyết định | `DEC-01/02/03`, `TR-05/06`; tập hợp business facts, claim, giá, checkout, analytics | Business Owner, Marketing, Medical Reviewer, Operations | Tài liệu gốc, quyền quyết định, bản quyền asset | Bảng nguồn sự thật ký duyệt; các trường chưa biết ghi rõ người chịu trách nhiệm |
| 1 — niềm tin và nền tảng | `TASK-002/004/010/011/012`; kiểm hiện trạng trước sửa | Dev lead + Business + SEO | Wave 0 cho brand/giá; sitemap/robots làm song song | Trang không còn bất nhất đã accepted; endpoint/meta đáp tiêu chí task; QA trên sample URL |
| 2 — trải nghiệm | `TR-01/02/03`, `TASK-014`, `TASK-007/008` | Design + Frontend + Performance | Facts sản phẩm, UI kit | Trang chủ/3 sản phẩm prototype và build; desktop/mobile review, performance profile so được |
| 3 — nội dung và máy đọc | `TASK-003/005/006/013`, `TR-04`, `TASK-009` | Content/SEO/Medical + Dev | Content và claim approved | Bài, FAQ, facts, schema đúng nội dung; medical sign-off; QA 3 article |
| 4 — đo lường và commerce | `TASK-001`, `VAL-01/02/03/04`, `TR-06` | Analytics + QA + Operations | Flow, consent, môi trường test được phép | Biên bản visual/perf/crawl, thử giao dịch và event theo quyền được cấp; UNKNOWN giữ nguyên nếu không được kiểm |

Wave không hàm ý thời hạn hoặc triển khai production được phê duyệt. Release có thể chia nhỏ nhưng phải qua gate nội dung, kỹ thuật, pháp lý và rollback plan do đội vận hành xác định.

## 8. Task cards — 14 remediation từ accepted findings

Mẫu chung cho các card: **DoD** = thay đổi được review, nguồn/owner ký duyệt nếu liên quan, QA đối chiếu URL và evidence gốc, không hồi quy các điểm KEEP/PROTECT, ghi biên bản trước–sau. Developer xác định vị trí code thực tế. `Effort` dự kiến; `technical/design/content notes` nêu điều cần kiểm, không khẳng định root cause.

### TASK-001 — Xác minh và cấu hình tín hiệu analytics công khai

**WS-09 · R · P2 · M · Owner:** Analytics/Developer. **Nguồn:** `FND-ANALYTICS-analytics-public-signals-not-observed-sample`, `REQ-014`, `EVD-DBF33A19881A487E`. **Hiện trạng:** sample không thấy GTM, GA4 request hay dataLayer; collector chặn telemetry chủ ý, không suy ra toàn site không có analytics. **Mục tiêu:** cấu hình/tag/events được xác minh phù hợp consent. **Việc làm:** (1) kiểm cấu hình qua quyền admin; (2) lập event map; (3) xác minh load theo consent ở staging; (4) test một flow được phép. **Input:** `TR-06`, quyền admin, privacy policy. **Dependency:** `TR-06`, `TR-05` cho conversion. **Trang:** home, 3 PDP, article, checkout test. **Kỹ thuật:** phân biệt blocked request, tag absent và event receipt; tránh gửi PII. **Thiết kế:** trạng thái consent không che CTA. **Nội dung:** copy consent được duyệt. **Nghiệm thu:** bằng chứng tag/event theo kịch bản; không gọi flow live đã thành công. **Xác minh:** debug/staging + analytics admin. **DoD:** mẫu chung + owner ký bảng event. **Rủi ro:** consent, ad blocker, quyền admin.

### TASK-002 — Đồng nhất pháp nhân và liên hệ Viên An Đường

**WS-01/04 · R · P0 · S–M · Owner:** Business Owner + Content/Dev. **Nguồn:** `FND-BRAND-BRAND-20260928-001`, `EVD-AD18B204CB25AAFE`, `EVD-927DDAF696B5D339`. **Hiện trạng:** contact block và footer cùng trang dùng loại hình công ty, địa chỉ và hotline khác nhau. **Mục tiêu:** bản công khai khớp nguồn sự thật do business ký. **Việc làm:** (1) lấy giấy tờ/hồ sơ chuẩn; (2) quyết định hotline theo ngữ cảnh; (3) sửa block/footer và nơi dùng lại; (4) regression desktop/mobile. **Input/dependency:** `DEC-01`. **Trang:** `/vien-an-duong-addp.html` và template footer. **Kỹ thuật:** tìm nguồn dùng chung, không hard-code sai; kiểm dữ liệu có cấu trúc. **Thiết kế:** ưu tiên hotline chính, không mất khả năng gọi. **Nội dung:** tên pháp nhân viết đúng dấu. **Nghiệm thu:** không còn mâu thuẫn trên page; schema/footer trùng facts. **Xác minh:** visual/text search toàn mẫu + business sign-off. **DoD:** mẫu chung. **Rủi ro:** thông tin cũ tồn tại trên trang khác.

### TASK-003 — Thay nội dung placeholder và lập quy trình duyệt bài

**WS-05 · R · P1 · M · Owner:** Content + Medical Reviewer. **Nguồn:** `FND-CONTENT-CONTENT-001`, `EVD-36D98F70BFD9BA03`, `REQ-011/012`. **Hiện trạng:** nội dung placeholder công khai theo finding. **Mục tiêu:** nội dung thật có nguồn, tác giả và duyệt phù hợp. **Việc làm:** kiểm kê instance; soạn lại theo intent; gắn nguồn và ngày; medical/legal review nếu có claim; xuất bản/QA. **Input/dependency:** `DEC-03`, article pack trong tài liệu 03. **Trang:** URL trong finding và template tương tự sau kiểm kê. **Kỹ thuật:** kiểm cache/structured data sau sửa. **Thiết kế:** giữ heading, đọc được trên mobile. **Nội dung:** không tạo study/chứng nhận giả. **Nghiệm thu:** placeholder được thay tại URL bằng copy ký duyệt. **Xác minh:** diff nội dung và link/source review. **DoD:** mẫu chung. **Rủi ro:** không có hồ sơ nguồn, phải giữ unpublished.

### TASK-004 — Làm rõ giá và ưu đãi Glucare

**WS-01/04 · R · P0 · M · Owner:** Business + Marketing + Product/Frontend. **Nguồn:** `FND-CONVERSION-CONV-001`, `EVD-337D55BF44B7E909`, `REQ-009`. **Hiện trạng:** điểm vào 0 ₫, thử 9.000 ₫ và giá sản phẩm không được phân biệt đủ rõ trong sample. **Mục tiêu:** giá/điều kiện/CTA hiểu đúng ở landing, PDP và giỏ. **Việc làm:** chốt bảng giá/offer và thời hạn; viết label; thiết kế vùng price; QA các điểm chuyển tiếp; test staging. **Input/dependency:** `DEC-02`, `TR-03`. **Trang:** Glucare landing + PDP. **Kỹ thuật:** kiểm nguồn giá, variant, trạng thái hết khuyến mại; không thay checkout khi chưa scoped. **Thiết kế:** tách giá gốc, giá thử và điều kiện. **Nội dung:** terms rõ số lượng/đối tượng. **Nghiệm thu:** reviewer không thể hiểu 0 ₫ là giá full product nếu không phải; CTA đích thống nhất. **Xác minh:** visual desktop/mobile, test flow được phép. **DoD:** mẫu chung. **Rủi ro:** luật khuyến mại/giá cần Legal xác nhận.

### TASK-005 — Tăng khả năng trả lời/citation của nội dung

**WS-05/06 · R · P2 · M · Owner:** Content + SEO + Medical. **Nguồn:** `FND-GEO-AEO-GEO-AEO-001`, `REQ-010/011`; evidence theo finding trong audit §25. **Hiện trạng:** answerability/citation readiness của mẫu còn hạn chế; không đồng nhất GEO với JSON-LD. **Mục tiêu:** câu trả lời ngắn, facts có nguồn, cấu trúc dễ trích dẫn. **Việc làm:** chọn câu hỏi theo intent; viết direct answer 40–60 từ nếu hợp; bảng facts/FAQ; nguồn và tác giả; review claim. **Input/dependency:** `TR-03/04`, `DEC-03`. **Trang:** 3 product và 3 article mẫu. **Kỹ thuật:** kiểm text render trong HTML và markup khớp. **Thiết kế:** phần answer scan được, không tăng mật độ mobile quá mức. **Nội dung:** không hứa kết quả AI. **Nghiệm thu:** reviewer có thể chỉ ra câu trả lời, nguồn và entity nhất quán. **Xác minh:** editorial QA + crawl HTML. **DoD:** mẫu chung. **Rủi ro:** nguồn không đủ để xuất bản claim.

### TASK-006 — Kiểm chính sách truy cập bot/AI crawler

**WS-06/07 · R · P2 · S–M · Owner:** SEO + Developer/Legal. **Nguồn:** `FND-GEO-AEO-GEO-AEO-003`, `REQ-010`, robots evidence trong audit §25. **Hiện trạng:** mẫu có vấn đề exposure/crawler theo finding; không suy thành cam kết AI index. **Mục tiêu:** policy được business/Legal phê duyệt và endpoint nhất quán. **Việc làm:** liệt kê bot mục tiêu; quyết định allow/disallow; đối chiếu robots/CDN; thử fetch public. **Input/dependency:** policy business, `TASK-011`. **Trang:** `/robots.txt`, sitemap và mẫu content. **Kỹ thuật:** phân biệt directives, HTTP, CDN. **Thiết kế/nội dung:** không tác động UI; giải thích tradeoff cho business. **Nghiệm thu:** policy công bố đúng quyết định, fetch kiểm được. **Xác minh:** robots parser + request ngoài. **DoD:** mẫu chung. **Rủi ro:** crawl không đồng nghĩa xuất hiện trong AI answers.

### TASK-007 — Điều tra và cải thiện performance homepage

**WS-03/08 · R · P1 · M–L · Owner:** Performance/Frontend. **Nguồn:** `FND-PERFORMANCE-PERF-001`, LCP evidence audit §21. **Hiện trạng:** lab LCP trang chủ kém ở profile đo; không đủ bằng chứng gán root cause. **Mục tiêu:** cải thiện theo baseline/profile tương đương, không hồi quy UX. **Việc làm:** trace LCP element, waterfall, ảnh/font/JS; chọn can thiệp nhỏ; so lab đa lần; QA mobile. **Input/dependency:** baseline current run, `TR-02` nếu layout đổi. **Trang:** `/`. **Kỹ thuật:** đo TTFB, render delay, resource load theo trace mới; không giả định ảnh là nguyên nhân. **Thiết kế:** bảo vệ hierarchy/CTA. **Nội dung:** headline không bị ẩn để lấy điểm. **Nghiệm thu:** LCP và layout cải thiện trong cùng điều kiện; có diff. **Xác minh:** lab + field nếu được cấp. **DoD:** mẫu chung. **Rủi ro:** biến thiên mạng/cache và thiết bị.

### TASK-008 — Điều tra performance `/benh-ly`

**WS-08 · R · P1 · M · Owner:** Performance/Frontend. **Nguồn:** `FND-PERFORMANCE-PERF-002`, evidence audit §21. **Hiện trạng:** profile lab của category có vấn đề. **Mục tiêu:** sửa bottleneck thực sự sau trace. **Việc làm:** đo lại cùng profile, xác định LCP element và blocking resources, sửa, hồi quy category. **Input/dependency:** baseline, tài nguyên Dev; độc lập với content approval. **Trang:** `/benh-ly`. **Kỹ thuật:** phân biệt server, ảnh và JS; không tự đoán. **Thiết kế:** card/category không mất khả năng tìm bài. **Nội dung:** link/heading giữ nghĩa. **Nghiệm thu:** so sánh before/after minh bạch. **Xác minh:** lab và mobile QA. **DoD:** mẫu chung. **Rủi ro:** cache/CDN làm lệch kết quả.

### TASK-009 — Điều tra performance nhóm article

**WS-05/08 · R · P1 · M · Owner:** Performance/Frontend. **Nguồn:** `FND-PERFORMANCE-PERF-003`; 3 article selected trong audit §14/21. **Hiện trạng:** mẫu article có performance finding; không gán cho từng bài nếu evidence không đủ. **Mục tiêu:** template bài nhanh và đọc được. **Việc làm:** trace từng URL/viewport phù hợp, tìm shared template bottleneck, tối ưu, so lại. **Input/dependency:** baseline, `TR-04` nếu cấu trúc bài đổi. **Trang:** 3 bài selected. **Kỹ thuật:** phân tách embedded media, fonts, JS. **Thiết kế:** không làm mất bảng/citations. **Nội dung:** ảnh có kích thước/alt hợp lệ. **Nghiệm thu:** profile trước–sau trên cùng bài, không lỗi layout. **Xác minh:** lab + visual regression. **DoD:** mẫu chung. **Rủi ro:** trang partial và nội dung thay đổi đồng thời.

### TASK-010 — Khôi phục/chuẩn hóa sitemap

**WS-07 · R · P1 · S–M · Owner:** SEO + Developer. **Nguồn:** `FND-TECHNICAL-SEO-SEO-001`, audit §22. **Hiện trạng:** endpoint sitemap không đáp kỳ vọng trong current run. **Mục tiêu:** sitemap XML công khai, URL canonical/indexable chính xác. **Việc làm:** xác định URL cấu hình, generate, kiểm HTTP/XML, đối chiếu canonical, khai báo trong robots/Search Console khi được phép. **Input/dependency:** policy URL và Dev access. **Trang:** sitemap endpoint; home/product/article. **Kỹ thuật:** chỉ đưa URL indexable; kiểm redirect/encoding. **Thiết kế/nội dung:** không ảnh hưởng UI; SEO duyệt URL list. **Nghiệm thu:** fetch và parse thành công, không chứa URL sai. **Xác minh:** HTTP/XML validator. **DoD:** mẫu chung. **Rủi ro:** dữ liệu CMS tạo URL rác.

### TASK-011 — Sửa robots policy/khai báo sitemap

**WS-07 · R · P1 · S · Owner:** SEO + Developer. **Nguồn:** `FND-TECHNICAL-SEO-SEO-002`; robots 200 trong audit §22. **Hiện trạng:** robots reachable nhưng finding chỉ ra cấu hình chưa đáp mục tiêu cụ thể. **Mục tiêu:** directive và sitemap reference đúng policy. **Việc làm:** kiểm directive hiện tại, xác nhận vùng cần chặn, cập nhật, parser QA và thử URL mẫu. **Input/dependency:** `TASK-010`, chính sách `TASK-006`. **Trang:** `/robots.txt`. **Kỹ thuật:** không vô tình disallow product/articles. **Thiết kế/nội dung:** không áp dụng UI; legal/bot policy được lưu. **Nghiệm thu:** parser đọc đúng, URL trọng tâm vẫn crawlable nếu mong muốn. **Xác minh:** external fetch + robots test. **DoD:** mẫu chung. **Rủi ro:** chặn index ngoài ý muốn.

### TASK-012 — Sửa metadata theo page class

**WS-07 · R · P1 · M · Owner:** SEO + Content/Dev. **Nguồn:** `FND-TECHNICAL-SEO-SEO-003`, audit §22. **Hiện trạng:** mẫu metadata có lỗi được reviewer accepted; không quy chụp mọi URL. **Mục tiêu:** title/description/canonical đúng intent và tránh template trùng. **Việc làm:** inventory page classes; draft meta; duyệt; sửa template; kiểm 25 URL mẫu. **Input/dependency:** product/article copy approved, `DEC-01/02` khi metadata nêu facts. **Trang:** home, 3 products, category, articles. **Kỹ thuật:** SSR/rendered output, canonical/OG consistency. **Thiết kế:** không tác động layout. **Nội dung:** không dùng claim chưa duyệt. **Nghiệm thu:** sample không còn instance finding; bản metadata duyệt. **Xác minh:** HTML fetch/crawl có kiểm soát sau release. **DoD:** mẫu chung. **Rủi ro:** auto-template ghi đè thủ công.

### TASK-013 — Chỉnh structured data dựa trên facts đã duyệt

**WS-06 · R · P2 · M · Owner:** SEO + Developer + Business. **Nguồn:** `FND-STRUCTURED-DATA-STRUCTURED-DATA-001`, audit §23. **Hiện trạng:** vấn đề schema accepted; bài có `BlogPosting` đang hoạt động cần giữ. **Mục tiêu:** Organization/Product/Offer/Article fields khớp nội dung và yêu cầu hợp lệ. **Việc làm:** map entity, URL và facts; kiểm markup hiện có; sửa thuộc tính sai/thiếu có nguồn; validate; spot-check rendered DOM. **Input/dependency:** `DEC-01/02/03`, `TR-03/04`, `TASK-002/004`. **Trang:** home, products, articles. **Kỹ thuật:** JSON-LD/microdata/multiple nodes; không thêm FAQ markup nếu FAQ chưa hiển thị/duyệt. **Thiết kế:** facts hiển thị cho người dùng phải khớp. **Nội dung:** nguồn giá/claim. **Nghiệm thu:** validator không lỗi thuộc phạm vi; markup khớp UI; không mất `BlogPosting`. **Xác minh:** structured-data validator + manual match. **DoD:** mẫu chung. **Rủi ro:** schema hợp lệ không bảo đảm rich results/GEO.

### TASK-014 — Sửa hierarchy và mobile homepage

**WS-02/03 · R · P1 · M–L · Owner:** Design + Frontend. **Nguồn:** `FND-UX-UI-UXUI-001`, homepage screenshots Hình 2–3 trong audit. **Hiện trạng:** mobile first viewport và điều hướng tới sản phẩm có friction; performance finding cũng ảnh hưởng trải nghiệm. **Mục tiêu:** headline, lợi ích, 3 sản phẩm và CTA có thứ bậc rõ trên nhiều viewport. **Việc làm:** wireframe, kiểm nội dung thực, prototype, usability pass, triển khai, visual/perf QA. **Input/dependency:** `TR-01/02`, `DEC-02` nếu hiển thị giá. **Trang:** `/` desktop/mobile. **Kỹ thuật:** responsive, focus/keyboard, ảnh kích thước phù hợp. **Thiết kế:** CTA không chồng sticky UI, vùng chạm đủ. **Nội dung:** value proposition đã duyệt. **Nghiệm thu:** đường homepage → 3 product rõ và hoạt động; không tràn ngang, đọc được, không làm LCP tệ hơn. **Xác minh:** viewport review + task-based navigation + lab. **DoD:** mẫu chung. **Rủi ro:** redesign thay đổi LCP và route behavior.

## 9. Transformation và validation cards

Các task dưới đây **không phải confirmed defects**. Nguồn là checklist/manual/gap; chỉ thực hiện khi input tương ứng được duyệt. Cùng mẫu DoD ở §8, mỗi card nêu điểm kiểm chứng.

### TR-01 — Hồ sơ thương hiệu và business truth

**WS-01 · T · P0 · M · Owner:** Business/Marketing. **Nguồn:** `REQ-001/005`, gap hồ sơ brand. **Hiện trạng/mục tiêu:** brand facts/assets chưa được xác minh đủ → một bộ nguồn chuẩn có version. **Việc:** nhận logo, pháp nhân, contact, giấy phép, guideline, quyền dùng; giải quyết `DEC-01`. **Input/dependency:** Business Owner. **Trang:** toàn site. **Evidence:** `TASK-002` và checklist status UNKNOWN. **Kỹ thuật:** đầu ra có cấu trúc cho CMS/schema; Dev xác định module. **Thiết kế:** logo/màu/font. **Nội dung:** tên chuẩn. **Nghiệm thu/xác minh:** ký duyệt, tài liệu truy xuất được, không claim chưa chứng thực. **DoD:** mẫu chung. **Rủi ro:** thiếu quyền sở hữu tài sản.

### TR-02 — UI kit và quy tắc mobile

**WS-02 · T · P1 · M · Owner:** Design. **Nguồn:** `REQ-002/003/007`, visual analysis audit §17/24. **Hiện trạng/mục tiêu:** cần định nghĩa nhất quán responsive → kit có tokens, components, states. **Việc:** type scale, contrast, CTA, card, image ratio, spacing, breakpoints, accessibility. **Input/dependency:** `TR-01`. **Trang:** home, 3 products, article. **Evidence:** Hình 2–10. **Kỹ thuật:** component mapping do Dev xác định. **Thiết kế:** desktop/mobile annotated specs. **Nội dung:** copy length constraints. **Nghiệm thu/xác minh:** prototype ở viewport mẫu không overflow, CTA focus/chạm tốt. **DoD:** mẫu chung. **Rủi ro:** kit không phù hợp CMS hiện tại.

### TR-03 — Ba product content/offer packs

**WS-04 · T · P0 · L · Owner:** Marketing/Product/Medical. **Nguồn:** `REQ-006/008/009`, 3 product gaps audit §10–13, `HC-001`. **Hiện trạng/mục tiêu:** facts/offer/research chưa đủ → packs duyệt cho từng SKU. **Việc:** hoàn thành template tài liệu 03, nguồn giá/claim, ảnh, FAQ, reviews có consent. **Input/dependency:** `DEC-02/03`, `TR-01`. **Trang:** Glucare, Viên, Dovital. **Evidence:** Hình 4–10. **Kỹ thuật:** fields CMS/variant do Dev xác định. **Thiết kế:** ảnh đúng quyền/kích thước. **Nội dung:** claim chưa duyệt không xuất bản. **Nghiệm thu/xác minh:** ba pack có owner, nguồn, trạng thái duyệt từng field. **DoD:** mẫu chung. **Rủi ro:** tài liệu y khoa/pháp lý không sẵn.

### TR-04 — Biên tập 3 article mẫu theo E-E-A-T

**WS-05 · T · P1 · L · Owner:** Content + Medical + SEO. **Nguồn:** `REQ-011/012/013`, `HC-002`, article PARTIAL. **Hiện trạng/mục tiêu:** tác giả/reviewer/citation chưa xác minh đủ → 3 bài có hồ sơ biên tập. **Việc:** kiểm facts, cấu trúc direct answer, nguồn, author/reviewer, published/updated, disclosure, internal link. **Input/dependency:** `DEC-03`. **Trang:** 3 URL audit §14. **Evidence:** Hình 11–13. **Kỹ thuật:** template `BlogPosting` giữ và update fields. **Thiết kế:** bảng/lead dễ đọc. **Nội dung:** không tự đánh giá ngưỡng chẩn đoán. **Nghiệm thu/xác minh:** reviewer ký, citation liên kết, HTML/markup khớp. **DoD:** mẫu chung. **Rủi ro:** bài cần rút lại claim khi thiếu nguồn.

### TR-05 — Đặc tả commerce và vận hành

**WS-10 · T · P0 · M · Owner:** Business + Operations + Legal. **Nguồn:** `REQ-015/016/017` PARTIAL/BLOCKED. **Hiện trạng/mục tiêu:** guest checkout/COD/chuyển khoản/KiotViet chưa xác minh → yêu cầu và flow được ký duyệt. **Việc:** xác định trường bắt buộc, consent, shipping, đổi trả, thanh toán, trạng thái đơn, mapping KiotViet và xử lý lỗi. **Input/dependency:** owner vận hành và hệ thống được cấp. **Trang:** cart/checkout/confirmation, ngoài phạm vi xác nhận của audit. **Evidence:** hành trình dừng trước giao dịch, §18 audit. **Kỹ thuật:** không đoán API/backend. **Thiết kế:** checkout states. **Nội dung:** chính sách và thông báo đơn. **Nghiệm thu/xác minh:** spec testable có luồng thành công/thất bại và người chịu trách nhiệm. **DoD:** mẫu chung. **Rủi ro:** tích hợp/bảo mật/pháp lý.

### TR-06 — Measurement plan và consent

**WS-09 · T · P1 · M · Owner:** Analytics + Marketing/Legal. **Nguồn:** `REQ-014`, `TASK-001`. **Hiện trạng/mục tiêu:** không thấy public signal trong sample → taxonomy được duyệt. **Việc:** xác định GA4/GTM/Ads/Pixel, event names/params, conversion definitions, consent, ownership, retention. **Input/dependency:** `TR-05` cho order event. **Trang:** key journey. **Evidence:** finding analytics. **Kỹ thuật:** privacy/PII boundaries. **Thiết kế:** consent UI. **Nội dung:** text consent. **Nghiệm thu/xác minh:** spec event và test cases, không coi telemetry-blocked audit là kiểm vận hành. **DoD:** mẫu chung. **Rủi ro:** sai consent/duplicate events.

### VAL-01 — Visual, accessibility và performance QA

**WS-02/08 · V · P1 · M · Owner:** QA + Design/Performance. **Nguồn:** `REQ-002/003/007`, `TASK-007/008/009/014`. **Hiện trạng/mục tiêu:** visual expert review không đổi canonical checklist → xác minh bản mới. **Việc:** ma trận viewport, keyboard, contrast, click targets, LCP/CLS với cùng profile, regression 3 products/articles. **Input/dependency:** `TR-02` và build. **Trang:** home, 3 PDP, category, 3 article. **Evidence:** Hình 2–13. **Kỹ thuật:** lưu trace/lab profile; **thiết kế:** review first viewport; **nội dung:** không mất CTA/claim note. **Nghiệm thu/xác minh:** biên bản per URL, không có lỗi blocker; chỉ chuyển trạng thái khi có test. **DoD:** mẫu chung. **Rủi ro:** lab noise.

### VAL-02 — Crawl, metadata và schema QA

**WS-06/07 · V · P1 · S–M · Owner:** SEO + QA. **Nguồn:** `REQ-010/013`, `TASK-010/011/012/013`. **Hiện trạng/mục tiêu:** crawlability/indexability khác ranking → xác minh endpoint/HTML. **Việc:** request sitemap/robots, canonical/meta, JSON-LD, URL sample, redirect/index directives. **Input/dependency:** các TASK SEO hoàn thành. **Trang:** 25 sample + endpoints. **Evidence:** audit §22–23. **Kỹ thuật:** kiểm source và rendered; **thiết kế/nội dung:** rich fields khớp UI. **Nghiệm thu/xác minh:** log QA có URL/result, không hứa Google index. **DoD:** mẫu chung. **Rủi ro:** cache/crawler rendering khác biệt.

### VAL-03 — Checkout, payment, KiotViet có kiểm soát

**WS-10 · V · P0 khi chuẩn bị go-live · M–L · Owner:** QA + Operations + Dev. **Nguồn:** `REQ-015/016/017`, BLOCKED audit. **Hiện trạng/mục tiêu:** run không đặt đơn → xác minh riêng từng capability. **Việc:** nhận môi trường thử, tài khoản/sản phẩm test, kịch bản guest/COD/chuyển khoản, order confirmation, webhook/sync KiotViet, rollback; chỉ sau phê duyệt mới chạy. **Input/dependency:** `TR-05`, hệ thống test. **Trang:** cart/checkout/confirmation. **Evidence:** absence of valid transaction evidence, §18 audit. **Kỹ thuật:** kiểm logs/order IDs test, không dùng production read-only run; **thiết kế:** error states; **nội dung:** thông báo đơn/chính sách. **Nghiệm thu/xác minh:** từng bước có bằng chứng terminal và đối soát; nếu thiếu quyền giữ BLOCKED. **DoD:** mẫu chung. **Rủi ro:** đơn thật/phí/PII; phải được phép rõ.

### VAL-04 — Analytics event receipt và đối soát

**WS-09/10 · V · P1 · M · Owner:** Analytics + QA. **Nguồn:** `REQ-014/015`, `TASK-001`. **Hiện trạng/mục tiêu:** event/conversion receipt chưa quan sát → xác minh event không chứa PII và khớp đơn test. **Việc:** event debug sau consent, server/admin receipt, duplicate check, thank-you route; đối chiếu với VAL-03. **Input/dependency:** `TR-06`, `TASK-001`, `VAL-03`. **Trang:** journey test. **Evidence:** analytics finding chỉ giới hạn public sample. **Kỹ thuật:** event ID/dedup; **thiết kế:** consent feedback; **nội dung:** privacy copy. **Nghiệm thu/xác minh:** một test case có event receipt và đối soát, lỗi có log. **DoD:** mẫu chung. **Rủi ro:** data governance.

## 10. Governance, nghiệm thu và giới hạn

Business Owner quyết định facts/giá; Marketing chịu đầu vào và quyền tài sản; Medical/Scientific Reviewer chịu nội dung chuyên môn; Legal duyệt claim/consent/khuyến mại khi cần; Design chịu hierarchy; SEO chịu metadata/crawl/schema; Dev chịu triển khai sau code discovery; Operations chịu order/payment/KiotViet; QA ghi bằng chứng. Mỗi quyết định phải có version, người duyệt và ngày. Các hạng mục chưa có owner hoặc nguồn **không được lấp bằng copy suy đoán**. Sau triển khai, đối chiếu lại theo URL và điều kiện kiểm; tài liệu này không tự nâng trạng thái checklist canonical của run đã đóng.
