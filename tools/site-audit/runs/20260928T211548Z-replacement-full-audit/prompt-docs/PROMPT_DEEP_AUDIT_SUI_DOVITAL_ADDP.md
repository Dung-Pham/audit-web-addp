# NHIỆM VỤ: PHÂN TÍCH CHUYÊN SÂU LANDING PAGE SỦI DOVITAL VÀ TẠO 3 BỘ TÀI LIỆU TRIỂN KHAI

Làm việc trong repository hiện tại.

Run canonical:

`20260928T211548Z-replacement-full-audit`

Trang duy nhất cần tập trung:

`https://addp.vn/sui-dovital`

Đây là một **DOVITAL LANDING PAGE DEEP AUDIT**, không phải nhiệm vụ tóm tắt report V1 hoặc diễn giải lại accepted findings.

Phải kết hợp **toàn bộ dữ liệu đã thu thập được** để thẩm định Landing Page Dovital như một chuyên gia:

- UX/UI;
- CRO/conversion;
- e-commerce;
- product architecture;
- content;
- brand;
- health/YMYL;
- E-E-A-T;
- SEO;
- GEO;
- AEO;
- structured data;
- mobile;
- performance;
- technical implementation.

**Bắt buộc sử dụng bằng chứng hình ảnh trực tiếp trong báo cáo.**

---

# 1. OUTPUT BẮT BUỘC

Tạo đúng 3 tài liệu chính.

## 1. Báo cáo phân tích chuyên sâu Landing Page Dovital

Tên file:

`01_BAO_CAO_PHAN_TICH_CHUYEN_SAU_LANDING_DOVITAL_V2_VI.md`

Mục tiêu:

Phân tích toàn diện `/sui-dovital` theo:

- từng section;
- từng component;
- user intent;
- sales funnel;
- 3 tầng nhu cầu;
- product family;
- variant/SKU;
- pricing;
- CTA;
- visual hierarchy;
- product imagery;
- content;
- composition;
- benefits;
- usage;
- trust;
- social proof;
- claim;
- evidence;
- SEO;
- GEO;
- AEO;
- structured data;
- E-E-A-T;
- performance;
- mobile;
- accessibility;
- technical behavior;
- quan hệ với PDP/cart/checkout.

---

## 2. Kế hoạch chỉnh sửa và triển khai Landing Page Dovital

Tên file:

`02_KE_HOACH_CHINH_SUA_LANDING_DOVITAL_V2_VI.md`

Mục tiêu:

Biến toàn bộ phân tích thành implementation blueprint gồm:

- target state;
- landing architecture;
- section giữ lại;
- section sửa;
- section thêm;
- section gộp;
- section di chuyển;
- section loại bỏ;
- product family architecture;
- variant UX;
- pricing UX;
- content;
- design;
- CRO;
- frontend;
- SEO/GEO/AEO;
- schema;
- performance;
- mobile;
- analytics;
- QA;
- priority;
- dependencies;
- acceptance criteria.

---

## 3. Bộ yêu cầu Marketing/Doanh nghiệp cung cấp cho Dovital

Tên file:

`03_YEU_CAU_MARKETING_CUNG_CAP_CHO_LANDING_DOVITAL_V2_VI.md`

Phải xác định chính xác các đầu vào cần có:

- thông tin product family;
- SKU/variant;
- quy cách;
- giá;
- thành phần;
- hàm lượng;
- công dụng được phép công bố;
- đối tượng;
- hướng dẫn;
- cảnh báo;
- giấy tờ;
- kiểm nghiệm;
- chứng nhận;
- hình ảnh;
- video;
- testimonial;
- expert;
- FAQ;
- product comparison;
- claim evidence;
- offer/campaign;
- brand/product assets.

Mỗi input phải map tới section/component cụ thể.

---

# 2. KHÔNG ĐƯỢC CHỈ TÓM TẮT FINDING

Accepted findings chỉ là một lớp dữ liệu.

Phải quay lại toàn bộ raw artifacts liên quan Dovital.

Không viết kiểu:

> Finding A nói...
> Finding B nói...

Mà phải tổng hợp nhiều lớp evidence để trả lời:

> Dovital page hiện đang vận hành tốt/chưa tốt như một sales landing page ở đâu và tại sao?

---

# 3. NGUỒN DỮ LIỆU PHẢI ĐỌC

Tìm tất cả artifact có liên quan tới:

`https://addp.vn/sui-dovital`

và các URL Dovital/SKU liên quan.

Bao gồm:

## Checklist

Đặc biệt:

- Visual/UI;
- typography;
- imagery;
- above-the-fold;
- CTA;
- landing 3 tầng;
- product detail;
- FAQ;
- GEO/AEO;
- schema;
- performance;
- tracking;
- conversion.

---

## Page inventory

Đọc:

- page type;
- canonical;
- indexability;
- HTTP;
- collection status;
- desktop/mobile browser state;
- render state.

---

## Screenshots

Dùng:

- canonical screenshots;
- mobile screenshots;
- section-level screenshots;
- supplemental recapture.

---

## DOM / text / HTML

Kiểm tra:

- H1/H2/H3;
- product names;
- SKUs;
- variants;
- price;
- CTA;
- product cards;
- ingredients;
- benefit copy;
- usage;
- FAQ;
- links;
- cart/order elements;
- legacy/template content nếu có.

---

## Performance

Dùng metric canonical đã thu.

Đặc biệt đọc:

- LCP;
- CLS;
- render stabilization;
- asset failures;
- image size/load;
- request timeout;
- lazy-loading;
- mobile differences.

Nếu run ghi nhận lỗi tải asset Dovital:

phải dùng đúng artifact để phân tích.

Không được biến probable cause thành fact.

---

## Personas

Đọc toàn bộ observation liên quan từ:

- first-time visitor;
- high-intent buyer;
- mobile/low-tech;
- skeptical/research buyer.

---

## Specialists

Đọc:

- UX/UI;
- conversion;
- content;
- brand;
- health content;
- SEO;
- GEO/AEO;
- structured data;
- performance;
- analytics;
- commerce;
- technical diagnostic.

---

## Reviewers

Đọc:

- evidence;
- contradiction;
- dedup;
- manual review;
- blocked;
- unknowns.

---

# 4. BẮT BUỘC MỞ LẠI WEBSITE ĐỂ CHỤP TỪNG SECTION

Do trang Dovital có thể có:

- section dài;
- animation;
- scroll reveal;
- lazy-loaded image;
- variant/product blocks;

không được dựa duy nhất vào full-page screenshot.

Được phép mở:

`https://addp.vn/sui-dovital`

bằng browser read-only để:

- quan sát;
- cuộn tự nhiên;
- chờ section reveal;
- chờ ảnh tải;
- chờ layout ổn định;
- chụp từng section;
- chụp desktop/mobile.

Không được:

- tạo run mới;
- rerun audit pipeline;
- add-to-cart;
- submit form;
- order;
- payment;
- account creation;
- mutation.

---

# 5. SUPPLEMENTAL VISUAL RECAPTURE

Lưu:

`reports/dovital-deep-audit-v2-vi/visual-recapture/`

Tạo:

`visual-recapture/INDEX.md`

Mỗi ảnh ghi:

- Screenshot ID
- URL
- Section ID
- Section name
- desktop/mobile
- viewport
- timestamp
- filename
- canonical Evidence ID liên quan
- trạng thái:

`SUPPLEMENTAL_VISUAL_RECAPTURE`

---

# 6. VIEWPORT

Desktop:

`1440 × 1000`

Mobile:

`390 × 844`

Giữ nhất quán toàn bộ recapture.

---

# 7. SCREENSHOT SECTION-BY-SECTION

Không dùng một full-page screenshot làm bằng chứng chính.

Mỗi major section phải được:

1. cuộn vào viewport;
2. chờ reveal;
3. chờ ảnh tải;
4. chờ animation kết thúc;
5. screenshot.

Nếu section dài:

- TOP
- MID
- BOTTOM

Nếu interaction theo scroll:

- START
- MID
- END

---

# 8. ĐẶC BIỆT KIỂM TRA ẢNH DOVITAL

Nếu gặp:

- ảnh chưa tải;
- broken image;
- placeholder;
- loading timeout;
- crop;
- layout shift;

phải:

1. ghi đúng trạng thái;
2. chụp bằng chứng;
3. đối chiếu canonical performance/render evidence;
4. phân biệt:

`OBSERVED VISUAL FAILURE`

với

`PROBABLE TECHNICAL CAUSE`.

Không tự kết luận CDN/server lỗi nếu artifact chưa chứng minh.

---

# 9. SECTION INVENTORY

Trước khi viết report, inventory toàn bộ trang.

Không áp cấu trúc Glucare sang Dovital.

Phải xác minh thực tế.

Các section có thể gồm:

- Header
- Hero
- Product family introduction
- Dovital product proposition
- Product/variant grid
- Individual variant blocks
- Benefits
- Ingredients
- Composition
- Product differences
- Usage
- Audience
- Price/offer
- Product selection
- Trust
- Social proof
- Documents
- FAQ
- CTA/order
- Footer

Đây chỉ là gợi ý.

---

# 10. SECTION INVENTORY TABLE

| Section ID | Section | Vị trí | Vai trò | Buyer stage | Product/Variant | CTA | Evidence |
|---|---|---:|---|---|---|---|---|

Section IDs:

`DOV-S01`, `DOV-S02`...

---

# 11. ĐÁNH GIÁ VAI TRÒ THẬT SỰ CỦA TRANG

Đây là yêu cầu bắt buộc.

Phải trả lời:

> `/sui-dovital` đang thực sự là một landing page, một category page, một product-family page hay một hybrid page?

Đánh giá dựa trên evidence.

Phân tích:

- có sales narrative không;
- hay chủ yếu là list sản phẩm;
- có một value proposition chung không;
- có dẫn người dùng chọn variant không;
- có giải thích sự khác biệt giữa variant không;
- có đưa người dùng tới purchase rõ không.

---

# 12. LANDING PAGE VS PRODUCT FAMILY PAGE

Dovital có thể là một nhóm nhiều biến thể/SKU.

Vì vậy phải phân tích:

## Product family level

Người dùng có hiểu:

- Dovital là dòng gì;
- điểm chung của dòng;
- đối tượng;
- lợi ích tổng quát;

không?

## Variant level

Người dùng có hiểu:

- mỗi SKU khác nhau thế nào;
- chọn loại nào;
- giá khác nhau ra sao;
- thành phần/nhu cầu khác nhau ra sao;

không?

Nếu không:

đây là vấn đề information architecture và conversion.

---

# 13. THREE-TIER BUYER MODEL

Đánh giá theo checklist.

## Tầng 1 — Người muốn mua ngay

Cần:

- sản phẩm;
- variant;
- giá;
- CTA;
- availability;
- order route.

---

## Tầng 2 — Người cần tìm hiểu

Cần:

- Dovital là gì;
- thành phần;
- hàm lượng;
- benefit;
- cách dùng;
- ai phù hợp;
- sự khác nhau giữa variant.

---

## Tầng 3 — Người còn phân vân

Cần:

- trust;
- documents;
- reviews;
- expert;
- FAQ;
- objection handling;
- final CTA.

Sau audit phải chỉ ra:

- tầng nào mạnh;
- tầng nào yếu;
- trang đang thiên quá nhiều về SKU listing hay không.

---

# 14. EXECUTIVE ASSESSMENT

Phân tích riêng các nhiệm vụ:

1. Giúp hiểu Dovital
2. Giúp lựa chọn đúng variant
3. Giải thích thành phần/lợi ích
4. Xây trust
5. Dẫn tới mua hàng
6. Hỗ trợ mobile
7. Hỗ trợ SEO
8. Hỗ trợ GEO/AEO
9. Tránh confusion giữa landing/category/PDP

Không chấm một điểm tổng.

---

# 15. USER INTENT

Ít nhất:

## User A — Đã biết Dovital

Muốn tìm đúng sản phẩm và giá.

## User B — Chưa biết variant

Muốn so sánh.

## User C — Muốn vitamin/sản phẩm bổ sung phù hợp

Muốn biết composition và audience.

## User D — Mua cho người thân

Muốn dễ hiểu và trust.

## User E — Hoài nghi

Muốn giấy tờ, thành phần, nguồn, chuyên gia.

---

# 16. FIRST 5 SECONDS TEST

Dùng screenshot hero/above-the-fold.

Người dùng có hiểu:

1. Dovital là gì?
2. Có bao nhiêu dòng/variant?
3. Dành cho ai?
4. Lợi ích chính là gì?
5. Giá hoặc CTA ở đâu?
6. Tôi nên kéo tiếp hay chọn sản phẩm?

---

# 17. HERO AUDIT

Phân tích:

- brand hierarchy ADDP/Dovital;
- packshot;
- people/lifestyle;
- headline;
- value proposition;
- audience;
- CTA;
- trust;
- variant confusion;
- mobile crop.

Nếu hero chỉ giới thiệu mà không hỗ trợ action:

phải phân tích tác động.

---

# 18. PRODUCT/VERSION SELECTOR AUDIT

Nếu Dovital có nhiều sản phẩm/variant:

đây là phần bắt buộc.

Lập bảng:

| Variant | Visual distinction | Name clarity | Benefit | Price | CTA | User understands difference? |
|---|---|---|---|---|---|---|

Phân tích:

- tên variant;
- color coding;
- packshot;
- benefit;
- composition;
- price;
- CTA;
- destination.

---

# 19. VARIANT DECISION SUPPORT

Hỏi:

> Người dùng biết chọn loại nào bằng cách nào?

Kiểm tra có:

- comparison table;
- use-case mapping;
- audience mapping;
- ingredient difference;
- short recommendation logic;

hay không.

Nếu chỉ thấy các card giống nhau:

đánh giá cognitive burden.

---

# 20. PRICE AUDIT

Inventory toàn bộ giá trên Dovital page.

| Product/Variant | Section | Price | Sale Price | CTA | Consistency |
|---|---|---:|---:|---|---|

Đối chiếu với:

- category;
- PDP;
- homepage;

nếu canonical evidence hỗ trợ.

Nếu có bất nhất:

`OBSERVED PRICE INCONSISTENCY`

Không tự kết luận nguồn dữ liệu sai.

---

# 21. CTA SYSTEM

Inventory:

| CTA | Section | Variant | Intent | Destination | Prominence | Assessment |
|---|---|---|---|---|---|---|

Đánh giá:

- CTA chính;
- CTA trên từng SKU;
- CTA tư vấn;
- CTA cuối;
- CTA cadence;
- mobile CTA.

---

# 22. MỖI SECTION PHẢI DÙNG CẤU TRÚC SAU

## `[DOV-SXX] — [SECTION NAME]`

### A. Vai trò

### B. User Question

### C. FACT

### D. EVIDENCE IMAGE

**Bắt buộc chèn ảnh tại đây.**

### E. Visual hierarchy

### F. Content

### G. Product/Variant clarity

### H. Health/YMYL

### I. Trust

### J. Conversion

### K. SEO

### L. GEO/AEO

### M. Schema implications

### N. Mobile

### O. Accessibility

### P. Performance implication

### Q. Checklist mapping

### R. ASSESSMENT

Chỉ:

- PASS
- PARTIAL
- FAIL
- UNKNOWN
- BLOCKED
- NOT_APPLICABLE.

### S. Impact

### T. Action

- KEEP
- IMPROVE
- MOVE
- MERGE
- REMOVE
- ADD

### U. RECOMMENDATION

### V. TARGET STATE

---

# 23. BẮT BUỘC CHÈN ẢNH

Báo cáo không đạt nếu chỉ có text.

Major sections phải có ảnh.

Ưu tiên:

- Hero;
- product family introduction;
- product/variant grid;
- từng variant representative;
- ingredient/composition;
- benefit;
- usage;
- price;
- trust;
- FAQ;
- CTA/final order;
- footer.

---

# 24. FORMAT ẢNH

Ví dụ:

> **Hình DOV-S04-D01 — Khu vực lựa chọn sản phẩm Dovital trên desktop**  
> URL: `https://addp.vn/sui-dovital`  
> Viewport: `1440 × 1000`  
> Section: `DOV-S04`  
> Canonical Evidence ID: `EVD-...`  
> Visual Recapture ID: `DOV-S04-D01`  
> Status: `SUPPLEMENTAL_VISUAL_RECAPTURE`  
> **Ý nghĩa:** ...

---

# 25. PHẢI PHÂN TÍCH ẢNH

Sau ảnh:

### What the image shows

### What works

### What is weak

### Why it matters

### Checklist implication

### Recommendation

Không dùng screenshot trang trí.

---

# 26. PRODUCT CARD COMPONENT AUDIT

Nếu page dùng product card:

audit card như component riêng.

Kiểm tra:

- packshot;
- product title;
- variant;
- benefit;
- price;
- sale;
- review;
- CTA;
- spacing;
- consistency.

Một card phải giúp trả lời:

> Đây là loại gì, phù hợp nhu cầu nào và tôi phải làm gì tiếp?

---

# 27. COMPOSITION / INGREDIENT AUDIT

Phải xem Dovital có cung cấp đủ:

- thành phần;
- hàm lượng;
- vitamin/mineral;
- serving;
- composition difference giữa variant;

hay không.

Phân tích:

- prose vs table;
- readability;
- mobile;
- AI extractability.

---

# 28. BENEFIT AUDIT

Phân biệt:

### Product fact

### Nutrition claim

### Health-support claim

### Marketing promise

### Medical-sensitive claim

Không trộn.

Mỗi claim quan trọng cần:

- evidence;
- source;
- approval.

Nếu không đủ:

`NEEDS_MEDICAL_REVIEW`

---

# 29. AUDIENCE / USE CASE

Người dùng có hiểu:

- ai nên dùng;
- mỗi variant dành cho ai;
- thời điểm nào;
- nhu cầu nào;

hay không?

Nếu variant chỉ khác tên/màu:

đánh giá mức confusion.

---

# 30. USAGE / DOSAGE

Phân tích:

- cách pha/uống;
- liều;
- frequency;
- serving;
- warning;
- storage.

Nếu là viên sủi:

phải kiểm tra phần hướng dẫn sử dụng có đủ cụ thể và dễ hiểu hay không.

Không tự bổ sung hướng dẫn y khoa nếu nguồn không có.

---

# 31. PRODUCT COMPARISON

Nếu chưa có comparison:

đánh giá liệu cần bổ sung bảng:

| Variant | Dành cho | Thành phần nổi bật | Quy cách | Giá | CTA |
|---|---|---|---|---|---|

Chỉ sử dụng dữ liệu thực đã được doanh nghiệp duyệt.

---

# 32. TRUST

Phân tích riêng:

- company trust;
- product documentation;
- testing;
- manufacturer;
- certification;
- expert;
- testimonials;
- reviews.

Không coi review số lượng thấp/không xác minh là trust mạnh.

---

# 33. TESTIMONIAL / REVIEWS

Đánh giá:

- có không;
- verified hay không;
- specificity;
- context;
- visual credibility;
- relevance với variant.

Không dùng testimonial như medical evidence.

---

# 34. FAQ

Nếu thiếu:

xác định objection groups:

- Dovital là gì?
- có những loại nào?
- khác nhau thế nào?
- ai dùng?
- dùng thế nào?
- một ngày dùng bao nhiêu?
- dùng khi nào?
- có dùng cùng sản phẩm khác không?
- giá?
- chọn variant nào?
- bảo quản?
- giao hàng?

Câu trả lời phải được Product/Medical duyệt.

---

# 35. HEALTH / YMYL / E-E-A-T

Tạo chương riêng.

Đánh giá:

- health claims;
- certainty;
- sources;
- expert;
- documents;
- disclaimer;
- evidence.

Đặc biệt với vitamin/supplement:

không để ngôn ngữ hỗ trợ sức khỏe biến thành treatment claim.

---

# 36. SEO

Phân tích:

- Dovital entity;
- page search intent;
- product-family intent;
- variant intent;
- H1/H2;
- semantic hierarchy;
- canonical;
- internal links;
- landing/PDP overlap;
- duplicate product descriptions.

---

# 37. LANDING VS CATEGORY VS PDP

Đây là chương bắt buộc.

Trả lời:

> Dovital page nên là gì?

Phân biệt:

### Landing
Thuyết phục và giải thích dòng sản phẩm.

### Category/Product family
Hỗ trợ discovery/comparison.

### PDP
Transaction truth của một SKU.

Nếu page hiện trộn cả ba:

phân tích lợi/hại.

Đề xuất target architecture.

---

# 38. SEO CANNIBALIZATION

Kiểm tra khả năng overlap giữa:

- `/sui-dovital`;
- PDP individual SKU;
- product category.

Không tự kết luận có cannibalization thực tế nếu không có search data.

Ghi:

`CANNIBALIZATION RISK`

nếu architecture/content overlap đáng kể.

---

# 39. GEO/AEO

Hỏi AI đọc page có biết:

- Dovital là gì;
- có mấy variant;
- khác nhau thế nào;
- composition;
- audience;
- usage;
- price;
- company/brand;
- evidence;

hay không?

Đánh giá:

- entity clarity;
- product-family relationship;
- table structure;
- direct answers;
- FAQ;
- source attribution;
- machine extraction.

---

# 40. STRUCTURED DATA

Phân tích:

- Product;
- Offer;
- ItemList;
- BreadcrumbList;
- FAQPage;
- Review;
- AggregateRating.

Nếu page có nhiều SKU:

phải phân tích cách schema nên mô hình hóa entity relation.

Không kê khai rating giả.

---

# 41. PERFORMANCE

Sử dụng canonical run.

Đặc biệt nếu Dovital có:

- LCP rất cao;
- large image;
- image timeout;
- stabilized_with_failures;

phải trình bày:

### FACT

metric/failure.

### ANALYSIS

ảnh hưởng UX.

### ASSESSMENT

khoảng cách checklist.

### RECOMMENDATION

image/asset/render remediation.

Không biến technical hypothesis thành fact.

---

# 42. ASSET WEIGHT AUDIT

Nếu evidence có large PNG/WebP:

phải phân tích:

- file size;
- dimensions nếu có;
- relevance;
- whether above/below fold;
- impact on loading.

Đưa vào performance plan.

---

# 43. SCROLL EFFECT / LONG PAGE

Đánh giá:

- scroll fatigue;
- section rhythm;
- animation;
- reveal;
- sticky;
- mobile impact;
- content hidden before animation;
- bot/no-JS accessibility.

---

# 44. MOBILE

Chụp các section quan trọng ở mobile:

- hero;
- selector/product cards;
- price;
- composition;
- comparison;
- CTA;
- trust;
- FAQ;
- final CTA.

Phân tích:

- stacking;
- scanability;
- image size;
- tap targets;
- CTA reach;
- text density;
- scroll depth.

---

# 45. FULL LANDING FLOW

Mô hình hóa luồng hiện tại.

Ví dụ:

Hero  
↓  
Product family  
↓  
Variant list  
↓  
Benefits  
↓  
Composition  
↓  
Proof  
↓  
FAQ  
↓  
CTA

Phải dùng flow thực tế.

Đánh giá:

- logic;
- repetition;
- missing transitions;
- CTA gaps;
- proof timing;
- selection friction.

---

# 46. DECISION JOURNEY

Phân tích theo:

**Awareness → Understand Dovital → Choose Variant → Build Trust → Purchase**

Section nào đang giúp/chặn từng bước?

---

# 47. INFORMATION GAP MATRIX

| Câu hỏi | Trang trả lời? | Section | Evidence | Quality |
|---|---|---|---|---|

Bao gồm:

- Dovital là gì?
- ADDP/Dovital quan hệ thế nào?
- Có những loại gì?
- Tôi nên chọn loại nào?
- Khác nhau ở đâu?
- Thành phần?
- Hàm lượng?
- Công dụng?
- Cách dùng?
- Ai dùng?
- Giá?
- Có giấy tờ?
- Có feedback?
- Mua thế nào?

---

# 48. SECTION SCORECARD

| ID | Section | UX | Content | Product clarity | Trust | Conversion | SEO | GEO/AEO | Mobile | Priority |
|---|---|---|---|---|---|---|---|---|---|---|

Không dùng điểm số.

Dùng:

- GOOD
- PARTIAL
- WEAK
- UNKNOWN
- N/A

---

# 49. STRENGTHS

Phân loại:

### KEEP AS IS

### KEEP BUT IMPROVE

---

# 50. TOP ISSUES

Tóm tắt 10–20 vấn đề quan trọng.

Accepted finding giữ ID.

Professional synthesis mới ghi:

`PROFESSIONAL ASSESSMENT`

---

# 51. PRIORITY MATRIX

| ID | Vấn đề | Section | Buyer stage | Business impact | Search impact | Priority | Dependency |
|---|---|---|---|---|---|---|---|

Priority:

- P0
- P1
- P2
- P3.

---

# 52. BÁO CÁO 2 — TARGET DOVITAL ARCHITECTURE

Đề xuất architecture sau audit.

Ví dụ tham khảo:

1. Simplified Header
2. Hero Dovital
3. Product-family value proposition
4. Variant selector/comparison
5. Benefits
6. Composition/specification
7. Who it is for
8. Usage
9. Why Dovital/ADDP
10. Evidence/documents
11. Customer/expert proof
12. FAQ
13. Variant/order block
14. Final CTA
15. Footer

Không copy máy móc.

---

# 53. MỖI TARGET SECTION PHẢI CÓ SPEC

- Purpose
- Buyer stage
- Existing issue
- Target state
- Content
- Component
- Visual
- Product data
- Variant data
- CTA
- Trust evidence
- Medical approval
- SEO
- GEO/AEO
- Schema
- Performance
- Mobile
- Analytics
- Acceptance criteria

---

# 54. VARIANT UX PLAN

Tạo riêng một plan cho:

- number of variants;
- naming;
- visual distinction;
- comparison;
- selection;
- selected state;
- price;
- CTA;
- mobile.

---

# 55. PRODUCT CARD REDESIGN REQUIREMENTS

Nếu cards hiện yếu:

định nghĩa card mục tiêu:

1. Product image
2. Product/variant name
3. 1-line use case
4. Key distinguishing feature
5. Price
6. CTA
7. Compare/select behavior nếu phù hợp

---

# 56. BEFORE SCREENSHOTS TRONG PLAN

Mỗi thay đổi lớn nên có:

### BEFORE

screenshot hiện trạng.

### Problem

### Change required

### Acceptance criteria

Không tạo fake after mockup.

---

# 57. CONTENT PLAN

| Section | Current issue | Required content | Evidence required | Owner | Approval |
|---|---|---|---|---|---|

---

# 58. PERFORMANCE PLAN

Bao gồm:

- LCP asset;
- PNG/WebP/AVIF;
- responsive images;
- preload;
- lazy loading;
- JS;
- animation;
- CSS;
- third-party;
- caching;
- performance budget.

---

# 59. SEO/GEO/AEO PLAN

Bao gồm:

- product family entity;
- SKU relation;
- semantic headings;
- comparison table;
- structured facts;
- FAQ;
- schema;
- citations;
- internal links;
- canonical architecture.

---

# 60. ANALYTICS

Xem xét:

- hero_cta_click;
- variant_view;
- variant_select;
- compare_variant;
- product_cta_click;
- faq_expand;
- testimonial_play;
- begin_order;
- add_to_cart nếu actual action được cho phép trong implementation.

Tracking spec không được gửi raw PII.

---

# 61. MASTER BACKLOG

Mỗi task:

- Task ID
- Section
- Problem
- Source
- Objective
- Priority
- Owner
- Dependencies
- Inputs
- Work
- Acceptance
- Automated verification
- Manual verification
- Evidence

---

# 62. BÁO CÁO 3 — MARKETING INPUT REQUIREMENTS

Tất cả input phải map tới section.

---

# 63. DOVITAL PRODUCT FAMILY MASTER

Cần Marketing/Product cung cấp:

- tên chính thức của dòng Dovital;
- list SKU;
- variant;
- quy cách;
- mã SKU;
- barcode;
- price;
- sale;
- stock;
- status;
- primary use case.

---

# 64. VARIANT COMPARISON DATA

Cho từng variant:

| Variant | Target audience | Key difference | Composition | Format | Price | Approved claim |
|---|---|---|---|---|---|---|

Không tự viết dữ liệu còn thiếu.

---

# 65. COMPOSITION DATA

Cần:

- ingredient/vitamin/mineral;
- amount per serving;
- unit;
- serving size;
- reference values nếu hợp lệ;
- approved labels.

---

# 66. HEALTH CLAIM MATRIX

| Claim | Variant | Section | Claim type | Evidence | Medical approval | Legal approval | Status |
|---|---|---|---|---|---|---|---|

---

# 67. USAGE DATA

Cần:

- cách sử dụng;
- số viên;
- lượng nước;
- frequency;
- thời điểm;
- maximum;
- warnings;
- storage.

Chỉ publish nội dung đã được owner chuyên môn duyệt.

---

# 68. LEGAL / PRODUCT DOCUMENTS

Cần:

- công bố;
- kiểm nghiệm;
- manufacturer;
- quality certificates;
- origin;
- document number;
- issue date;
- issuer;
- scan;
- applicable SKU.

---

# 69. PRODUCT IMAGES

Mỗi variant cần:

- front packshot;
- 3/4 packshot;
- back label;
- side label;
- tablet/tube/product presentation nếu phù hợp;
- transparent PNG master;
- high-res source.

---

# 70. LIFESTYLE IMAGES

Cần xác định:

- user group;
- scenario;
- Dovital product usage;
- age;
- environment;
- emotional tone.

Không dùng lifestyle gây hiểu nhầm về medical efficacy.

---

# 71. IMAGE SHOOT LIST

Ví dụ:

## DOV-HERO-01

**Subject:** Dovital family + lifestyle phù hợp.

**Purpose:** Landing hero.

**Composition:** Product rõ; có negative space cho copy.

**Desktop:** landscape.

**Mobile:** crop-safe.

---

## DOV-VAR-01

Ảnh line-up tất cả variant.

Mục tiêu:

giúp người dùng hiểu đây là một product family.

---

## DOV-SKU-XX

Packshot từng variant.

---

## DOV-USE-01

Hình hướng dẫn sử dụng/pha.

Phải đúng hướng dẫn approved.

---

# 72. TESTIMONIAL INPUT

Cần:

- customer;
- product/variant;
- context;
- quote;
- original photo/video;
- consent;
- date;
- source.

---

# 73. EXPERT INPUT

Nếu dùng expert:

- name;
- credentials;
- specialization;
- verified profile;
- bio;
- photo;
- reviewed sections;
- consent.

---

# 74. FAQ INPUT

Tổng hợp từ:

- sales;
- CS;
- social;
- hotline;
- distributor feedback.

Medical/Product phải duyệt câu trả lời.

---

# 75. OFFER / CAMPAIGN

Nếu Dovital có promotion:

cần:

- campaign;
- SKU;
- price;
- discount;
- condition;
- validity;
- stock;
- shipping;
- destination.

---

# 76. IMAGE ASSET PLAN

| Asset ID | Section | SKU | Subject | Master format | Desktop | Mobile | Rights | Owner |
|---|---|---|---|---|---|---|---|---|

---

# 77. MISSING INPUT MATRIX

| Input | Current evidence | Missing | Section | Blocking | Owner |
|---|---|---|---|---|---|

---

# 78. VISUAL QUALITY GATE

Trước khi hoàn thành kiểm tra:

- screenshot file tồn tại;
- đúng Dovital section;
- không blank;
- ảnh đã load;
- không chụp giữa animation;
- không crop sai;
- desktop/mobile đúng;
- caption đúng;
- Evidence ID resolve;
- supplemental ID đúng.

---

# 79. IMAGE COVERAGE MATRIX

| Section | Desktop | Mobile | Canonical | Supplemental | Coverage |
|---|---|---|---|---|---|

Coverage:

- COMPLETE
- PARTIAL
- MISSING

Các section bán hàng chính không được MISSING nếu recapture an toàn.

---

# 80. FINAL QUALITY GATE

Chỉ hoàn thành khi:

- đã đọc raw evidence;
- đã đọc checklist;
- personas;
- specialists;
- reviewers;
- performance;
- audit từng section;
- recapture live;
- chèn ảnh;
- phân tích hình;
- audit hero;
- audit product family;
- audit variants;
- audit product cards;
- audit prices;
- audit CTA;
- audit composition;
- audit usage;
- audit claim;
- audit trust;
- audit FAQ;
- SEO;
- GEO/AEO;
- schema;
- performance;
- mobile;
- Landing vs Category vs PDP;
- target architecture;
- implementation plan;
- Marketing inputs;
- variant data matrix;
- claim matrix;
- image plan;
- screenshot broken = 0;
- unsupported conclusion = 0.

---

# 81. FINAL STATUS

Chỉ ghi:

`DOVITAL_LANDING_DEEP_AUDIT_V2_READY_FOR_REVIEW`

khi đủ cả 3 tài liệu.

Nếu chưa:

`DOVITAL_LANDING_DEEP_AUDIT_V2_INCOMPLETE`

và liệt kê:

- section còn thiếu;
- screenshot thiếu;
- evidence thiếu;
- variant data thiếu;
- claim cần xác minh;
- Marketing input đang blocking;
- technical verification còn thiếu.

---

# YÊU CẦU CUỐI CÙNG

Ba tài liệu phải giúp người đọc trả lời đầy đủ:

> Dovital đang được trình bày như một dòng sản phẩm hay chỉ như danh sách nhiều SKU?

> Người dùng có hiểu Dovital là gì và mỗi variant khác nhau thế nào không?

> Ở từng section người dùng đang muốn biết điều gì?

> Section đó trả lời tốt đến đâu?

> Bằng chứng hình ảnh nào chứng minh nhận định?

> Giá, variant và CTA có hỗ trợ hay cản trở việc ra quyết định?

> Nội dung về thành phần, công dụng và cách sử dụng có đủ rõ và đáng tin không?

> Landing có phục vụ đủ ba tầng khách hàng theo checklist không?

> Nó hỗ trợ SEO/GEO/AEO đến đâu?

> Landing, Category và PDP đang có vai trò rõ ràng hay chồng lấn?

> Sau khi sửa, từng section phải trở thành gì?

> Designer, Developer, Marketing, Content và Product phải làm gì?

> Doanh nghiệp cần cung cấp chính xác những dữ liệu, hình ảnh, giấy tờ và claim nào?

Nếu báo cáo chỉ nói chung chung:

- “cần cải thiện UX”;
- “cần thêm CTA”;
- “cần tối ưu nội dung”;
- “cần tối ưu GEO”;
- “cần làm đẹp sản phẩm”;

mà không có **section + screenshot + evidence + phân tích + impact + target state + recommendation**, nhiệm vụ được xem là **CHƯA HOÀN THÀNH**.