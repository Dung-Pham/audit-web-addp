# MÔ HÌNH CẤU TRÚC WEBSITE ADDP MỤC TIÊU — V2

Đây là **RECOMMENDATION/target state** từ tám trang mẫu, không mô tả backend hiện tại hay yêu cầu tạo route mới ngay. Landing Viên `/vien-an-duong` có visual recapture bổ sung, canonical run chỉ discover không fetched; PDP Viên `/vien-an-duong-addp.html` là route khác. Không hợp nhất canonical/linking trước khi Product/SEO quyết vai trò.

## 1. Bảy page type và “hợp đồng” với người dùng

| Page type | Câu hỏi người dùng | Công việc của trang | Hành động chính | Dữ liệu tối thiểu |
| --- | --- | --- | --- | --- |
| Homepage | ADDP là ai, có gì phù hợp? | Brand + gateway + trust | Chọn product family hoặc kiến thức/tư vấn | Pháp nhân, 3 product summaries, nguồn trust, CTA route |
| Sales landing | Sản phẩm này có hợp và đáng tin không? | Persuasion theo 3 tầng nhu cầu | Chọn SKU/PDP/offer hoặc tư vấn | Value/đối tượng, claim approved, thành phần, usage, proof, price rules |
| PDP | Tôi mua **đúng SKU** với giá/điều kiện nào? | Transactional truth | Add to Cart/Buy Now khi được phép | SKU, variant, pack size, giá/offer, availability, shipping, warning |
| Product category | Tôi so/lọc/chọn sản phẩm nào? | Discovery | Mở landing/PDP đúng item | Tên/ảnh/card/giá/số item/facet/sort, policy URL |
| Knowledge Hub | Tôi nên đọc bài nào trước? | Topic navigation | Vào article theo câu hỏi | Topic clusters, titles, briefs, author/update cues có thật |
| Article | Câu trả lời đáng tin là gì? | Educational authority | Đọc nguồn/bài liên quan, cân nhắc sản phẩm có disclosure | Answer, sources, author/reviewer, dates, links, schema facts |
| Checkout | Tôi hoàn tất đơn thế nào? | Frictionless conversion và order receipt | Hoàn tất giao dịch được cho phép | Guest/field/payment/shipping/consent/order rules, analytics taxonomy |

## 2. Sơ đồ điều hướng mục tiêu

```text
Homepage ──> Product category ──> PDP (SKU truth) ──> Cart/Checkout [chưa xác minh]
    │               └──> Sales landing ──> PDP
    ├──> Glucare / Dovital / Viên landing ──> PDP đúng SKU
    └──> Knowledge Hub ──> Article ──> related Article
                              └──> Sales landing/PDP, nếu liên quan và có disclosure
PDP ──> nguồn/Article/FAQ và chính sách ──> quay lại quyết định mua
```

Mũi tên là **mô hình đích**, không chứng minh mọi link/click/checkout hiện hoạt. Lối tư vấn là đường phụ cho người cần hỏi; không thay thế giá, điều kiện bán hoặc cảnh báo an toàn. Với Viên, hãy quyết có tiếp tục landing `/vien-an-duong` và PDP `/vien-an-duong-addp.html` như hai vai trò hay một canonical SEO chính; không mặc định redirect/duplicate từ visual screenshot.

## 3. Page architecture đề xuất theo thứ tự block

### Homepage

1. Header có navigation sản phẩm/kiến thức/chính sách.
2. Hero một proposition ADDP được duyệt + CTA chính tới ba sản phẩm + CTA tư vấn phụ.
3. Ba product gateways: Glucare, Dovital, Viên; ai phù hợp, khác biệt, đích.
4. “Vì sao ADDP” với pháp nhân/mission/nguồn trust thật.
5. Knowledge selections theo topic và nội dung có reviewer.
6. Chính sách, contact/footer đồng nhất.

### Sales landing Glucare

1. Hero nêu product family, offer/SKU nếu hứa gói thử; hai intent mua/tìm hiểu.
2. USP đã Medical duyệt (không lactose/Isomalt… nếu nhãn xác nhận).
3. Bảng giá/quy cách: lon, gói thử, điều kiện 0/9.000; không dùng “0 đ” thiếu nghĩa.
4. Nhóm thành phần hạt → thảo mộc → vi chất, có hàm lượng và nguồn.
5. Đối tượng/không phù hợp/cách pha/cảnh báo.
6. Evidence đúng SKU, Q&A và objection handling.
7. CTA chọn gói + terms, tư vấn phụ, footer.

### Sales landing Dovital

1. Hero 3 vị/dòng rõ và CTA đúng SKU/combo.
2. Bảng chọn variant: vị, thành phần/lợi ích/giới hạn, giá.
3. Cơ chế/usage chỉ từ nhãn và source được duyệt.
4. Combo/điều kiện, source/trust, FAQ/objections.
5. Final CTA đến đúng offer, footer.

### Sales landing Viên An Đường

1. Hero “hỗ trợ” với wording/claim đã duyệt, CTA tư vấn hoặc xem SKU.
2. Tóm tắt **đối tượng và giới hạn**, khuyến cáo thiết yếu nổi trước hoặc cạnh mua.
3. Thảo mộc/10:1/hàm lượng: bảng label-sourced, không suy efficacy.
4. Lời giải thích “không phải thuốc” và quy trình tư vấn chuyên môn.
5. Liều dùng/contraindications được Medical ký.
6. Hồ sơ chứng nhận/nguồn đúng phạm vi sản phẩm, không chỉ câu copy “minh bạch”.
7. Combo/SKU/giá đã Business duyệt → PDP Viên có contact chuẩn.
8. FAQ, chính sách, CTA cuối/footer đồng nhất.

### PDP chuẩn

1. Breadcrumb + tên product family/SKU/variant và gallery đúng item.
2. Giá chuẩn/giá ưu đãi/điều kiện/availability/quantity/CTA.
3. Key facts + warning trước khi mua nếu nhạy cảm.
4. Thành phần/công dụng/đối tượng/cách dùng/thông số đúng SKU.
5. Evidence/giấy tờ/review có hồ sơ; không hiển thị `CUSTOM TAB 1/2` hoặc star 0 như proof.
6. FAQ thật, shipping/returns/payment **chỉ sau xác minh**, related products/articles.

### Product category

1. H1 và mô tả danh mục ngắn, hai nhánh có ảnh thật.
2. Toolbar số item/sort/filter hữu ích, mobile không che card.
3. Product cards: ảnh, SKU/quy cách, giá/offer nhất quán, CTA/đích.
4. Hướng dẫn chọn, link sang landing nghiên cứu/PDP mua, FAQ category khi có nội dung nguồn.

### Knowledge Hub và Article

Hub: H1/topic intro → “bắt đầu ở đây” → cluster theo intent → card ngắn có updated/author cue thật → internal link, search. Article: H1 + author/reviewer/date → direct answer approved → infographic/TOC → major questions/H2/H3 → bảng/bullet có nguồn → references/disclosure → related articles/FAQ thật. Bài YMYL cần Medical review trước xuất bản/cập nhật.

## 4. Shared data contracts — tránh đứt mạch thông tin

| Nguồn sự thật | Trường cần quản trị | Consumers | Gate |
| --- | --- | --- | --- |
| Business identity | Tên pháp nhân, thương hiệu, địa chỉ, hotline, email, sameAs | Header/footer/contact/Organization schema/Viên | Business + Legal `DEC-01` |
| Product family | Tên/định vị, đối tượng, claim, ingredients, mechanism, cảnh báo | Landing, category, homepage, Article disclosure | Product + Medical `DEC-03` |
| SKU/Offer | SKU/pack/variant, giá gốc/giảm, điều kiện, thời hạn, availability, URL | Listing, landing, PDP, Product/Offer schema, analytics value | Business/Legal `DEC-02` |
| Editorial content | Author/reviewer credentials, source mapping, dates, correction record | Blog cards, Article, BlogPosting schema | Content + Medical + Legal |
| Assets/trust | Original, quyền ảnh, chứng nhận số/hiệu lực, testimonial consent | Hero/product card/evidence blocks/reviews | Marketing + Legal |
| Commerce/measurement | Checkout fields, payment, shipping, KiotViet mapping, consent/events | Checkout, order confirmation, analytics | Operations + Dev + Analytics; currently BLOCKED |

**Implementation note:** đây là logical data model, không khẳng định source code/CMS của site hiện thực được như vậy. Dev cần tìm template/component/module thực tế rồi chọn phương án phù hợp. Dữ liệu thiếu không được “fill” bằng copy marketing không nguồn.

## 5. Nguyên tắc SEO/GEO/AEO, schema và performance

- SEO theo page role: mỗi route có H1/title/meta/canonical phù hợp intent; sitemap/robots được QA; category facet policy tránh URL vô hạn. `/vien-an-duong` chưa có canonical SEO artifact trong run, phải xác minh riêng sau này.
- GEO/AEO: tên ADDP/pháp nhân/sản phẩm/variant nhất quán, direct answers được duyệt, bảng facts/citations giúp machine extraction; không coi JSON-LD là toàn bộ GEO hay hứa AI citation.
- Structured data: Organization/Product/Offer/Breadcrumb/BlogPosting chỉ từ facts UI. FAQ/Review/AggregateRating chỉ khi nội dung/nguồn/consent thực có; không map giá 0 đ chưa được giải thích vào Offer.
- Performance: LAB của 7 URL canonical mẫu vượt LCP 2,5 s; chưa có field hoặc nguyên nhân. Đo trace/baseline sau triển khai mà không xóa nội dung quan trọng chỉ để cải thiện số đo.

## 6. Trật tự triển khai và QA

`Business/medical/legal truth` → `content/SKU model` → `design system/page architecture` → `implementation` → `SEO/schema` → `visual/mobile/performance QA` → `authorized commerce/analytics validation`. Có thể làm song song điều tra kỹ thuật với tập hợp source, nhưng không xuất bản claim/giá/schema chưa ký duyệt. Mỗi release phải so thực tế với route/viewport, kiểm không mất đường điều hướng/chính sách và lưu before–after **ngoài canonical audit run**. Audit run hiện tại vẫn production_read_only, safety counters=0.
