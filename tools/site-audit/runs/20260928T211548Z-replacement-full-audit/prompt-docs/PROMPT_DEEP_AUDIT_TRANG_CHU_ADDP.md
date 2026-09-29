# NHIỆM VỤ: PHÂN TÍCH CHUYÊN SÂU TRANG CHỦ ADDP VÀ TẠO 3 BỘ TÀI LIỆU TRIỂN KHAI

Làm việc trong repository hiện tại.

Run canonical:

`20260928T211548Z-replacement-full-audit`

Trang duy nhất cần tập trung:

`https://addp.vn/`

Đây là **HOME PAGE DEEP AUDIT**, không phải nhiệm vụ tóm tắt lại report V1.

Phải kết hợp toàn bộ dữ liệu audit đã có để thẩm định Trang chủ như một chuyên gia website cấp cao, đồng thời **bắt buộc sử dụng bằng chứng hình ảnh trực tiếp trong báo cáo**.

---

# 1. OUTPUT BẮT BUỘC

Tạo đúng 3 tài liệu chính:

## 1. Báo cáo phân tích chuyên sâu

`01_BAO_CAO_PHAN_TICH_CHUYEN_SAU_TRANG_CHU_ADDP_V2_VI.md`

Phân tích toàn diện:

- từng section;
- UX/UI;
- visual design;
- thương hiệu;
- nội dung;
- trust;
- conversion;
- SEO;
- GEO;
- AEO;
- structured data;
- E-E-A-T;
- performance;
- mobile;
- accessibility;
- technical implementation;
- analytics/tracking observable;
- quan hệ với 3 sản phẩm;
- Knowledge Hub;
- hành trình mua hàng.

---

## 2. Kế hoạch chỉnh sửa và triển khai

`02_KE_HOACH_CHINH_SUA_TRANG_CHU_ADDP_V2_VI.md`

Chuyển các kết luận audit thành:

- target state;
- kiến trúc trang;
- section giữ lại;
- section chỉnh sửa;
- section bổ sung;
- section di chuyển;
- section gộp/bỏ;
- design requirements;
- content requirements;
- frontend;
- backend;
- SEO/GEO/AEO;
- performance;
- analytics;
- QA;
- priority;
- dependency;
- acceptance criteria.

---

## 3. Bộ yêu cầu Marketing/Doanh nghiệp cung cấp

`03_YEU_CAU_MARKETING_CUNG_CAP_CHO_TRANG_CHU_ADDP_V2_VI.md`

Liệt kê chi tiết:

- thông tin;
- copy;
- ảnh;
- video;
- product assets;
- giấy tờ;
- chứng nhận;
- testimonial;
- company data;
- expert profile;
- medical claim;
- evidence;
- brand asset;

cần doanh nghiệp cung cấp để triển khai homepage đúng chuẩn.

Mỗi input phải map tới **section cụ thể**.

---

# 2. NGUYÊN TẮC PHÂN TÍCH

Không viết báo cáo dựa chủ yếu vào accepted findings.

Accepted findings chỉ là một nguồn.

Phải đọc và tổng hợp:

- checklist authoritative;
- normalized checklist;
- page inventory;
- screenshots;
- DOM/text evidence;
- HTML evidence;
- metadata;
- canonical;
- performance;
- browser render;
- persona journeys;
- specialist outputs;
- reviewer outputs;
- technical diagnostics;
- accepted findings;
- manual review;
- blocked;
- unknowns;
- canonical reports;
- remediation artifacts;
- visual recapture nếu đã có.

Mục tiêu là **cross-evidence synthesis**.

Ví dụ:

Persona phát hiện khó định hướng  
+ screenshot cho thấy CTA cạnh tranh  
+ UX specialist nói hierarchy yếu  
+ checklist yêu cầu CTA rõ  
→ tổng hợp thành **một kết luận chuyên môn hoàn chỉnh**.

Không lặp lại 4 nguồn như 4 nhận xét rời rạc.

---

# 3. PHÂN BIỆT 4 LOẠI PHÁT BIỂU

Toàn bộ tài liệu phải phân biệt:

### FACT
Quan sát trực tiếp từ evidence.

### ANALYSIS
Suy luận chuyên môn từ FACT.

### ASSESSMENT
Đánh giá so với checklist, mục tiêu kinh doanh hoặc best practice.

### RECOMMENDATION
Hướng chỉnh sửa.

Không trình bày recommendation như fact.

---

# 4. BẮT BUỘC CHÈN HÌNH ẢNH TRỰC TIẾP TRONG BÁO CÁO

Đây là **yêu cầu bắt buộc**, không phải optional.

Bản báo cáo sẽ bị coi là KHÔNG ĐẠT nếu chỉ có chữ và bảng mà thiếu hình minh họa/bằng chứng.

Ảnh phải giúp người đọc:

- nhìn thấy đúng vấn đề;
- hiểu section đang được nói tới;
- đối chiếu trực tiếp nhận định của báo cáo;
- không phải tự mở thư mục evidence.

---

# 5. NGUYÊN TẮC CHÈN ẢNH

Ảnh phải được đặt **ngay gần nội dung đang phân tích**.

Ví dụ:

Khi phân tích Hero:

1. chèn ảnh Hero;
2. sau đó mô tả FACT;
3. đánh dấu các vấn đề quan sát được;
4. phân tích hierarchy;
5. đưa recommendation.

Không được:

- gom toàn bộ screenshot xuống appendix;
- chỉ tạo một “gallery bằng chứng” cuối file;
- dùng ảnh không liên quan đến luận điểm;
- chèn ảnh chỉ để trang trí.

---

# 6. MỖI MAJOR SECTION PHẢI CÓ HÌNH

Nếu evidence cho phép, tối thiểu phải có ảnh cho:

- Header;
- Hero;
- vùng Above the Fold;
- khu vực 3 sản phẩm;
- Glucare card/block;
- Viên An Đường card/block;
- Dovital card/block;
- Mission/Brand;
- Trust/Social Proof;
- Testimonial;
- giấy tờ/chứng nhận;
- Knowledge/News;
- Consultation Form;
- CTA quan trọng;
- Footer.

Nếu section không có screenshot phù hợp:

ghi rõ:

`MISSING_VISUAL_EVIDENCE`

Không được âm thầm bỏ qua.

---

# 7. ẢNH DESKTOP VÀ MOBILE

Các section quan trọng phải có cả:

### Desktop

và

### Mobile

đặc biệt:

- Header;
- Hero;
- Product gateway;
- CTA;
- testimonial/trust;
- form;
- footer.

Nếu khác biệt giữa desktop/mobile đáng kể:

phải đặt hai ảnh cạnh hoặc gần nhau để so sánh.

---

# 8. FORMAT CHÚ THÍCH ẢNH

Mỗi ảnh phải có:

> **Hình HOME-S02-D01 — Hero Trang chủ ADDP trên desktop**  
> URL: `https://addp.vn/`  
> Viewport: `1440 × 1000`  
> Section: `HOME-S02 — Hero`  
> Evidence ID: `EVD-...`  
> Visual Recapture ID: `...` nếu có  
> Trạng thái: `CANONICAL AUDIT EVIDENCE` hoặc `SUPPLEMENTAL_VISUAL_RECAPTURE`  
> **Ý nghĩa:** Ảnh cho thấy...

Caption phải nói rõ ảnh được dùng để chứng minh luận điểm gì.

---

# 9. NẾU ẢNH CANONICAL KHÔNG ĐỦ

Nếu screenshot trong run:

- quá dài;
- không thể nhìn rõ section;
- section chưa reveal;
- lazy content chưa xuất hiện;
- bị crop;
- không thể dùng để phân tích;

được phép mở lại:

`https://addp.vn/`

bằng browser read-only.

Chỉ dùng để:

- quan sát visual;
- cuộn trang;
- chụp section;
- chụp desktop/mobile.

Không được:

- tạo run mới;
- submit form;
- cart;
- checkout;
- order;
- payment;
- account creation;
- mutation.

Ảnh mới phải được đánh dấu:

`SUPPLEMENTAL_VISUAL_RECAPTURE`

---

# 10. KHÔNG THAY THẾ EVIDENCE CANONICAL

Nếu giao diện live khác trạng thái tại thời điểm audit:

phải ghi riêng:

### CANONICAL AUDIT STATE

và

### CURRENT LIVE VISUAL STATE

Sau đó phân tích:

### DIFFERENCE

### INTERPRETATION

### NEEDS VERIFICATION

Không được dùng live screenshot mới để âm thầm thay đổi kết luận của run.

---

# 11. SCREENSHOT PHẢI CHỤP THEO SECTION

Không ưu tiên một full-page screenshot rất dài.

Với section dài hơn viewport:

chụp:

- TOP;
- MID;
- BOTTOM;

nếu cần.

Ví dụ:

`HOME-S06-TOP-DESKTOP.png`

`HOME-S06-MID-DESKTOP.png`

`HOME-S06-BOTTOM-DESKTOP.png`

---

# 12. SECTION INVENTORY TRƯỚC KHI PHÂN TÍCH

Phải inventory toàn bộ major section homepage.

Bảng:

| Section ID | Section | Vị trí | Vai trò hiện tại | Vai trò mong muốn | CTA | Evidence |
|---|---|---:|---|---|---|---|

Không chỉ inventory section có lỗi.

---

# 13. PHÂN TÍCH TỪNG SECTION

Với mỗi section sử dụng cấu trúc:

## `[HOME-SXX] — [SECTION NAME]`

### A. Vai trò

Section tồn tại để làm gì?

### B. FACT

Quan sát từ screenshot/DOM/evidence.

### C. Visual hierarchy

Phân tích:

- first focus;
- visual weight;
- contrast;
- spacing;
- density;
- image;
- CTA prominence.

### D. Nội dung

- clarity;
- specificity;
- readability;
- value proposition;
- redundancy;
- completeness.

### E. Brand

- ADDP identity;
- mission;
- tone;
- differentiator.

### F. Trust

- evidence;
- testimonial;
- certificate;
- expert;
- company identity.

### G. Conversion

- user intent;
- CTA;
- CTA position;
- next step;
- friction.

### H. SEO

- semantic value;
- headings;
- internal links;
- anchors;
- relevance.

### I. GEO/AEO

- entity clarity;
- fact extraction;
- direct answers;
- machine readability;
- semantic relationships.

### J. Mobile

- stacking;
- font;
- image crop;
- CTA;
- tap target;
- scroll cost.

### K. Accessibility

Nếu evidence hỗ trợ.

### L. Performance implication

Nếu section chứa:

- hero asset;
- slider;
- large image;
- video;
- third-party;
- dynamic JS.

### M. Checklist mapping

Map requirement.

### N. ASSESSMENT

Chỉ dùng:

- PASS
- PARTIAL
- FAIL
- UNKNOWN
- BLOCKED
- NOT_APPLICABLE.

### O. Impact

- user;
- business;
- brand;
- conversion;
- SEO;
- GEO/AEO;
- technical.

### P. Action classification

Dùng:

- KEEP;
- IMPROVE;
- MOVE;
- MERGE;
- REMOVE;
- ADD.

### Q. RECOMMENDATION

Cụ thể.

### R. TARGET STATE

Mô tả section sau chỉnh sửa.

### S. EVIDENCE IMAGE

**Bắt buộc chèn hình ảnh ở đây.**

---

# 14. HERO / ABOVE-THE-FOLD

Phân tích cực sâu.

Dựa trực tiếp trên screenshot.

Trả lời:

- người dùng nhìn gì đầu tiên;
- ADDP có được nhận diện ngay không;
- sản phẩm có xuất hiện không;
- con người có xuất hiện không;
- headline nói gì;
- mission/value rõ không;
- CTA chính là gì;
- CTA phụ là gì;
- CTA có nổi bật không;
- trust signal có xuất hiện sớm không;
- mobile crop ra sao.

Đối chiếu checklist:

> Slogan/Thông điệp + Hình sản phẩm + CTA phải hiện ngay khi mở trang.

---

# 15. FIRST 5 SECONDS TEST

Dùng ảnh Above the Fold để đánh giá:

Trong khoảng vài giây đầu, người dùng có hiểu:

1. Đây là ai?
2. ADDP làm gì?
3. ADDP bán gì?
4. Điểm khác biệt là gì?
5. Tôi nên bấm đâu?

Phải giải thích bằng visual evidence.

---

# 16. KHU VỰC 3 SẢN PHẨM

Chèn screenshot tổng thể và ảnh đủ rõ cho từng card nếu cần.

Phân tích riêng:

### Glucare Plus

### Viên An Đường

### Dovital

Với mỗi card:

- product recognition;
- packshot;
- basic benefit;
- target audience;
- CTA;
- destination;
- visual hierarchy.

Đặc biệt kiểm tra yêu cầu checklist:

> phần liên kết sản phẩm phải bổ sung công dụng cơ bản.

---

# 17. MISSION / BRAND STORY

Chèn ảnh section.

Phân tích:

- mission có dễ thấy không;
- copy cụ thể hay generic;
- có liên hệ với ADDP không;
- có liên hệ với sản phẩm không;
- có bằng chứng không;
- có giúp brand recall không.

---

# 18. SOCIAL PROOF / TRUST

Tách riêng từng loại:

### Testimonial

### Video feedback

### Certification

### Legal documents

### Press/media

### Partner

### Expert/pharmacist

Không gộp thành một dòng “có social proof”.

Mỗi loại nếu hiện diện nên có screenshot minh họa riêng.

---

# 19. TESTIMONIAL

Phân tích từ ảnh:

- tên;
- ảnh;
- quote;
- specificity;
- visual presentation;
- credibility;
- carousel nếu có;
- context.

Không coi testimonial là bằng chứng y khoa.

---

# 20. GIẤY TỜ / CHỨNG NHẬN

Nếu hiện có:

chèn ảnh.

Đánh giá người dùng có biết:

- giấy gì;
- ai cấp;
- số hiệu;
- ngày;
- áp dụng cho gì;
- click xem bản đầy đủ được không.

Badge không có context không được coi ngang bằng tài liệu xác thực.

---

# 21. KNOWLEDGE / NEWS

Chèn ảnh khu vực bài viết.

Phân tích:

- article cards;
- title;
- thumbnail;
- excerpt;
- topic;
- author/date nếu có;
- gateway tới Knowledge Hub;
- topical authority;
- internal linking.

---

# 22. CONSULTATION FORM

Chèn ảnh form desktop/mobile nếu có.

Phân tích:

- field count;
- label;
- CTA;
- privacy;
- expectation;
- trust;
- friction;
- mobile usability.

Không submit.

---

# 23. FOOTER

Chèn screenshot footer.

Phân tích như:

**Trust + Entity + Navigation Layer**

Kiểm tra:

- legal company name;
- address;
- phone;
- email;
- product links;
- policies;
- social;
- consistency.

---

# 24. UI / VISUAL AUDIT

Dựa trực tiếp vào hình ảnh.

Phân tích:

### Color

### Typography

### Font size

### Line height

### Spacing

### Buttons

### Cards

### Product images

### Human imagery

### Section rhythm

### Mobile readability

Đặt trong bối cảnh đối tượng người dùng trung/cao tuổi.

---

# 25. BRAND AUDIT

Trả lời:

- Homepage đang nói ADDP là ai?
- Brand promise là gì?
- Proof là gì?
- ADDP có nổi bật hay sản phẩm lấn át brand?
- Có cảm giác generic pharmacy/e-commerce template không?
- Người dùng có nhớ ADDP không?

Dùng screenshot để minh họa các luận điểm quan trọng.

---

# 26. CONTENT AUDIT

Đánh giá:

- hero;
- mission;
- product summary;
- trust copy;
- CTA;
- testimonial;
- articles;
- footer.

Phân loại:

- useful;
- generic;
- redundant;
- missing;
- unsupported;
- outdated.

---

# 27. SEO

Phân tích:

- title;
- H1/H2;
- canonical;
- internal linking;
- anchors;
- semantic hierarchy;
- crawl/indexability;
- duplicate route;
- legacy/demo content nếu evidence có.

Nếu có legacy template contamination:

phải giải thích ảnh hưởng:

- relevance;
- topic dilution;
- indexing;
- AI parsing.

---

# 28. GEO/AEO

Trả lời:

Nếu một AI đọc riêng homepage:

nó có xác định được:

- ADDP là ai;
- ở đâu;
- bán gì;
- ba sản phẩm gì;
- sản phẩm dành cho nhu cầu nào;
- contact;
- trust sources;

hay không?

Đánh giá:

- entity clarity;
- structured facts;
- answerability;
- machine extraction;
- semantic relationships.

---

# 29. STRUCTURED DATA

Phân tích nhu cầu:

- Organization;
- WebSite;
- Breadcrumb nếu phù hợp;
- ItemList nếu phù hợp.

Không dùng schema để bù nội dung thiếu.

---

# 30. PERFORMANCE

Dùng số liệu homepage trong canonical run.

Nêu rõ:

- metric;
- desktop/mobile;
- checklist target;
- khoảng cách.

Phân tích:

- UX;
- conversion;
- SEO;
- mobile.

Nếu screenshot cho thấy asset nào có khả năng liên quan, chỉ ghi:

`PROBABLE CAUSE`

trừ khi technical evidence xác nhận.

---

# 31. MOBILE-FIRST REVIEW

Chèn hình mobile trực tiếp.

Đánh giá riêng:

- header;
- hero;
- product cards;
- CTA;
- mission;
- trust;
- testimonial;
- article cards;
- form;
- footer.

Không coi mobile đơn giản là desktop thu nhỏ.

---

# 32. CTA INVENTORY

Bảng:

| CTA | Screenshot | Section | Intent | Destination | Prominence | Assessment |
|---|---|---|---|---|---|---|

Tìm:

- CTA thiếu;
- CTA dư;
- CTA cạnh tranh;
- wording yếu;
- destination sai role;
- cadence không hợp lý.

---

# 33. INFORMATION GAP MATRIX

| Câu hỏi khách hàng | Trang chủ trả lời? | Section | Evidence | Chất lượng |
|---|---|---|---|---|

Bao gồm:

- ADDP là ai?
- Có gì?
- Sản phẩm dành cho ai?
- Vì sao tin?
- Giấy tờ đâu?
- Người khác nói gì?
- Có chuyên gia không?
- Mua/tư vấn thế nào?

---

# 34. FULL PAGE FLOW

Sau section audit, phân tích toàn luồng.

Ví dụ:

Hero  
↓  
Products  
↓  
Mission  
↓  
Trust  
↓  
Knowledge  
↓  
Consultation  
↓  
Footer

Đánh giá:

- thứ tự;
- transition;
- trust timing;
- CTA timing;
- content dead zone;
- repetition;
- scroll length.

---

# 35. BÁO CÁO 1 PHẢI KẾT THÚC VỚI

## A. Strengths

### KEEP AS IS

### KEEP BUT IMPROVE

## B. 10–20 vấn đề quan trọng nhất

## C. Homepage Checklist Matrix

## D. Section Scorecard

## E. Priority Matrix

## F. Information Gap Matrix

## G. Target Architecture Summary

## H. Visual Evidence Appendix

Appendix chỉ là chỉ mục.

**Ảnh vẫn phải được nhúng trong phần phân tích chính.**

---

# 36. BÁO CÁO 2 — KẾ HOẠCH CHỈNH SỬA

Đề xuất target homepage architecture dựa trên audit.

Không redesign tùy hứng.

Ví dụ tham khảo:

1. Header
2. Hero
3. Trust strip
4. 3 Product Gateways
5. Mission
6. Why ADDP
7. Certification/Documents
8. Testimonials
9. Knowledge Hub
10. Consultation CTA
11. Footer

Phải điều chỉnh theo evidence.

---

# 37. MỖI TARGET SECTION PHẢI CÓ SPEC

- Purpose
- Existing issue
- Target state
- Content
- Component
- Visual direction
- CTA
- Marketing input
- SEO
- GEO/AEO
- Schema implication
- Performance requirement
- Mobile behavior
- Analytics
- Acceptance criteria

---

# 38. ĐƯỢC PHÉP DÙNG ẢNH TRONG KẾ HOẠCH

Kế hoạch chỉnh sửa cũng phải chèn hình khi hình giúp developer/designer hiểu vấn đề.

Ví dụ:

### Before

chèn screenshot hiện trạng.

Sau đó:

### Required change

mô tả thay đổi.

Không cần tự tạo mockup mới.

Nếu không có mockup:

không được giả tạo hình “After”.

---

# 39. DESIGN SYSTEM REQUIREMENTS

Bao gồm:

- primary color;
- CTA color;
- typography;
- spacing;
- buttons;
- product card;
- testimonial card;
- certificate card;
- article card;
- forms.

---

# 40. PERFORMANCE PLAN

Bao gồm:

- LCP remediation;
- hero asset;
- image optimization;
- CSS;
- JS;
- third party;
- performance budget;
- verification.

---

# 41. SEO / GEO / AEO PLAN

Bao gồm:

- entity;
- semantic HTML;
- heading hierarchy;
- internal links;
- structured facts;
- schema;
- machine-readable data;
- trust/evidence.

---

# 42. ANALYTICS PLAN

Homepage events tối thiểu nên xem xét:

- hero_cta_click;
- product_gateway_click;
- consultation_cta_click;
- form_start;
- form_submit;
- article_click.

Không gửi raw PII.

---

# 43. MASTER BACKLOG

Mỗi task có:

- Task ID;
- section;
- problem;
- objective;
- priority;
- owner;
- dependency;
- input;
- implementation;
- acceptance criteria;
- automated verification;
- manual verification;
- evidence reference.

---

# 44. BÁO CÁO 3 — MARKETING INPUT REQUIREMENTS

Phải map tài nguyên tới section.

Bảng:

| ID | Section | Cần cung cấp | Format | Owner | Approval | Priority | Blocking |
|---|---|---|---|---|---|---|---|

---

# 45. HERO ASSET REQUIREMENT

Yêu cầu rõ:

- headline;
- subheading;
- product image;
- human image;
- primary CTA;
- secondary CTA;
- source master;
- usage rights;
- desktop orientation;
- mobile crop.

---

# 46. PRODUCT GATEWAYS

Cho từng:

- Glucare;
- Viên An Đường;
- Dovital.

Cần:

- tên chuẩn;
- positioning;
- basic benefit;
- audience;
- packshot;
- approved claim;
- CTA destination;
- offer nếu áp dụng.

---

# 47. TRUST ASSETS

Bao gồm:

- company documents;
- product certificates;
- media;
- partner;
- testimonials;
- expert profiles;
- legal identity.

Không yêu cầu bịa thêm tài sản doanh nghiệp không có.

---

# 48. MARKETING IMAGE REQUIREMENTS

Đây là phần bắt buộc.

Không được chỉ ghi:

> “Cần ảnh đẹp.”

Phải tạo:

# IMAGE ASSET PLAN

Cho từng ảnh:

| Asset ID | Section | Loại ảnh | Nội dung cần chụp | Orientation | Desktop use | Mobile use | Quyền sử dụng |
|---|---|---|---|---|---|---|---|

---

# 49. IMAGE SHOOT LIST

Ví dụ:

## HOME-HERO-01

**Subject:** người cao tuổi + người thân + sản phẩm ADDP.

**Mục tiêu:** thể hiện chăm sóc, gần gũi và sản phẩm thật.

**Yêu cầu:**

- người thật;
- biểu cảm tự nhiên;
- không tạo cảm giác stock;
- có khoảng trống cho headline;
- horizontal master;
- crop-safe cho mobile.

---

## HOME-GLUCARE-01

Packshot Glucare:

- front;
- 3/4 angle;
- packaging readable;
- transparent master;
- high resolution.

---

Tương tự cho:

- Viên An Đường;
- Dovital;
- testimonial;
- pharmacist/expert;
- certificates;
- brand/company;
- Knowledge Hub.

---

# 50. MỖI ẢNH MARKETING PHẢI CÓ

- file master;
- copyright owner;
- consent/model release nếu có người;
- web usage permission;
- alt-text draft;
- product/SKU mapping;
- date/version nếu cần.

---

# 51. CLAIM APPROVAL MATRIX

| Claim | Section | Evidence | Medical review | Legal review | Status |
|---|---|---|---|---|---|

Không triển khai claim mạnh khi chưa có evidence.

---

# 52. VISUAL EVIDENCE QUALITY GATE

Trước khi hoàn tất, kiểm tra:

- ảnh tồn tại;
- đường dẫn không broken;
- screenshot đúng section;
- ảnh không blank;
- ảnh không chụp giữa animation;
- ảnh đủ rõ;
- desktop/mobile ghi đúng;
- Evidence ID resolve được;
- caption đúng;
- ảnh thực sự hỗ trợ luận điểm.

---

# 53. IMAGE COVERAGE MATRIX

Tạo bảng cuối:

| Section | Desktop image | Mobile image | Canonical evidence | Supplemental recapture | Coverage |
|---|---|---|---|---|---|

Coverage:

- COMPLETE
- PARTIAL
- MISSING

Các section chiến lược không được `MISSING` nếu có thể recapture an toàn.

---

# 54. KHÔNG CHỈ CHÈN ẢNH — PHẢI PHÂN TÍCH ẢNH

Sau mỗi ảnh quan trọng, phải giải thích:

### What the image shows

### Why it matters

### What is working

### What is not working

### Checklist implication

### Recommended change

Nếu chèn ảnh nhưng không dùng nó vào lập luận thì ảnh đó không có giá trị.

---

# 55. FINAL QUALITY GATE

Chỉ được hoàn thành khi:

- đã đọc raw evidence;
- đã đọc checklist;
- đã đọc persona;
- đã đọc specialist;
- đã đọc performance;
- đã audit từng homepage section;
- có desktop/mobile;
- có hình ảnh;
- hình được chèn trong nội dung;
- caption đầy đủ;
- Evidence ID đầy đủ;
- ảnh không broken;
- có brand audit;
- trust audit;
- conversion audit;
- SEO;
- GEO/AEO;
- performance;
- content;
- UI/UX;
- target state;
- implementation plan;
- Marketing inputs;
- Image Asset Plan;
- Image Shoot List;
- Claim Approval Matrix;
- không có unsupported conclusion.

---

# 56. FINAL STATUS

Chỉ ghi:

`HOME_DEEP_AUDIT_V2_READY_FOR_REVIEW`

nếu cả ba tài liệu và toàn bộ visual evidence đạt yêu cầu.

Nếu thiếu:

`HOME_DEEP_AUDIT_V2_INCOMPLETE`

và phải chỉ rõ:

- section nào thiếu;
- ảnh nào thiếu;
- evidence nào thiếu;
- thông tin nào chưa xác minh;
- input Marketing nào đang blocking.

---

# YÊU CẦU CUỐI CÙNG

Ba tài liệu phải giúp người đọc hiểu được:

> “Ở từng đoạn của Trang chủ, tôi đang nhìn thấy gì, bằng chứng hình ảnh là gì, section đó đang thực hiện vai trò gì, nó làm tốt/chưa tốt ở đâu, vì sao, ảnh hưởng gì tới thương hiệu, bán hàng, UX, SEO, GEO/AEO và sau khi sửa thì section đó phải trở thành gì.”

Đồng thời kế hoạch phải trả lời:

> “Designer, Content, Marketing và Developer phải làm gì cụ thể?”

Và tài liệu Marketing phải trả lời:

> “Doanh nghiệp phải cung cấp chính xác những nội dung, hình ảnh, giấy tờ, claim và tài nguyên nào để việc sửa Trang chủ có thể hoàn thành đúng chuẩn?”

Nếu báo cáo chỉ có chữ mà thiếu bằng chứng hình ảnh trực tiếp tại các section phân tích thì nhiệm vụ được xem là **CHƯA HOÀN THÀNH**.