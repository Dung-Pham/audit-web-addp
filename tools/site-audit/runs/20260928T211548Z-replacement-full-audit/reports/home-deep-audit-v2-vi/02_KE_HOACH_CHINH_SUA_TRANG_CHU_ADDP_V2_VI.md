# KẾ HOẠCH CHỈNH SỬA VÀ TRIỂN KHAI TRANG CHỦ ADDP V2

**Căn cứ:** báo cáo 01 trong cùng thư mục, run `20260928T211548Z-replacement-full-audit`, checklist `REQ-001–006/010–015`. Đây là **target state/đề xuất triển khai**, không mô tả tính năng đã có. Mọi claim sức khỏe, chứng nhận, ảnh người và giá phải qua nguồn sự thật Business + Medical/Legal trước khi publish. Không giả định có giấy tờ hoặc đối tác chưa được cung cấp.

## 1. Mục tiêu và kiến trúc trang

**Mục tiêu:** trong vùng đầu, người mới xác định ADDP là ai, ba hướng sản phẩm là gì, bước tiếp theo là gì; từ đó chọn landing phù hợp, đọc chứng cứ/kiến thức hoặc xin tư vấn với kỳ vọng và quyền riêng tư rõ. Kết quả phải đo bằng QA định tính, sự kiện điều hướng và performance cùng phương pháp lab; không đặt KPI doanh thu từ audit hiện có.

| Thứ tự đích | Section | Xử lý từ hiện trạng | Lý do |
|---:|---|---|---|
| 1 | Header | KEEP + IMPROVE | Giữ logo, rút nav thành Sản phẩm/Knowledge/Về ADDP/Tư vấn; sửa nhãn mơ hồ |
| 2 | Hero | KEEP + IMPROVE | Cụ thể hóa entity/proposition, packshot và một CTA chính |
| 3 | Ba product gateways | MOVE lên ngay sau hero + IMPROVE | Giảm scroll cost, phân biệt ba nhu cầu |
| 4 | Trust strip ngắn | MOVE + IMPROVE | Chỉ dùng claim có hồ sơ, liên kết xem nguồn |
| 5 | Mission/Why ADDP | MERGE 6 tile thành 2–3 điểm | Giữ giọng nhân văn, bỏ lặp và chữ overlay khó đọc |
| 6 | Chứng nhận/hồ sơ | ADD có điều kiện | Chỉ nếu có tài liệu xác thực và quyền hiển thị |
| 7 | Testimonial | MOVE trước form + IMPROVE | Proof đúng thời điểm quyết định, có consent/context |
| 8 | Sản phẩm nổi bật | KEEP/REPLACE có điều kiện | Chỉ nếu SKU, giá, ảnh và vai trò rõ; có thể gộp vào gateway |
| 9 | Knowledge Hub preview | ADD | Kết nối lời hứa “chia sẻ kiến thức” với bài đã duyệt |
| 10 | Consultation | KEEP + IMPROVE | Dữ liệu tối thiểu, expectation/privacy rõ |
| 11 | Footer | KEEP + IMPROVE | Entity/contact/policy/URL thống nhất |

### Before → Required change

![Hero hiện trạng](visual-evidence/HOME-S01-header-hero-MOBILE.png)

> **Hình PLAN-HOME-S02-M01 — Hero mobile hiện trạng.** URL: `https://addp.vn/` · Viewport: `390 × 844` · Section: `HOME-S02` · Evidence ID: `EVD-92E0841363C85BA1` · Trạng thái: `CANONICAL AUDIT EVIDENCE` (crop). **Ý nghĩa:** ba dòng và packshot ở dưới màn đầu. **Required change:** giới thiệu ba nhu cầu/sản phẩm ngay cạnh proposition, giữ một CTA chính rõ đích.

![Gateway hiện trạng](visual-evidence/HOME-S03-products-DESKTOP.png)

> **Hình PLAN-HOME-S04-D01 — Gateway hiện trạng.** URL: `https://addp.vn/` · Viewport: `1440 × 1000` · Section: `HOME-S04` · Evidence ID: `EVD-702877ACD4E72E55` · Trạng thái: `CANONICAL AUDIT EVIDENCE` (crop). **Ý nghĩa:** ảnh nhóm và card chữ tách nhau. **Required change:** mỗi card nối packshot với tên, nhu cầu, CTA riêng và landing chuẩn.

![Form hiện trạng](visual-evidence/HOME-S05-form-MOBILE.png)

> **Hình PLAN-HOME-S06-M01 — Form mobile hiện trạng.** URL: `https://addp.vn/` · Viewport: `390 × 844` · Section: `HOME-S06` · Evidence ID: `EVD-92E0841363C85BA1` · Trạng thái: `CANONICAL AUDIT EVIDENCE` (crop). **Ý nghĩa:** form dài và không thấy thông báo privacy ở cạnh CTA. **Required change:** giải thích ai liên hệ, khi nào, dữ liệu được dùng thế nào; giảm trường bước đầu nếu quy trình cho phép.

## 2. Spec cho từng target section

Các ngưỡng visual là **đề xuất design token** phải kiểm bằng người dùng/QA, không phải số đo đã đạt. Các sự kiện analytics là kế hoạch instrument, không chứng minh tracking hiện hữu.

### T01 — Header

- **Purpose / existing issue / target:** nhận diện và điều hướng; nav hiện đặt category tổng quát và chữ “S” mơ hồ. Giữ logo, sửa label, ưu tiên Sản phẩm, Kiến thức, Về ADDP, Tư vấn, với search/cart khi cần.
- **Content / component / visual / CTA:** nav semantic, menu mobile có overlay hoặc drawer, thanh đáy không lặp vai trò; link “Xem 3 sản phẩm” tới anchor thật. Focus/active state và icon label rõ.
- **Marketing input:** tên menu, nhánh product, contact channel chuẩn, brand logo master. **SEO/GEO/schema:** anchor mô tả, `nav` + liên kết crawlable; không cần schema riêng. **Performance:** CSS/icon gọn, tránh block first paint. **Mobile:** menu keyboard/touch, không che CTA/form. **Analytics:** nav_click `{destination, placement}`. **Acceptance:** mọi link tới route chuẩn; không có nhãn vô nghĩa; keyboard và screen reader đọc được; nav không che viewport 390 px.

### T02 — Hero

- **Purpose / issue / target:** trả lời “ADDP là ai, có gì, đi đâu” trong first viewport; hiện chỉ có lời hứa rộng và ảnh người. H1 chứa tên/định vị được duyệt; có ba sản phẩm hoặc nhóm nhu cầu ở gần CTA và ít nhất một packshot liên quan.
- **Content / component / visual / CTA:** một headline, một subhead cụ thể, một CTA chính “Xem 3 dòng sản phẩm”, CTA phụ “Nhận tư vấn”; không đặt claim y khoa mới. Ảnh người và packshot có quyền, nguồn master, crop desktop/mobile.
- **Marketing input:** copy ký duyệt, ảnh người/packshot, logo, quyền ảnh, claim matrix. **SEO/GEO/schema:** H1 duy nhất hữu ích; summary entity HTML text; Organization schema ở lớp site dựa facts. **Performance:** xác định LCP element rồi preload/priority đúng một asset cần thiết, WebP/AVIF và kích thước responsive; không lazy ảnh LCP. **Mobile:** headline/CTA/packshot không bị cắt, không cần cuộn nhiều để thấy product cue. **Analytics:** `hero_cta_click` với `cta_role`. **Acceptance:** 5 câu hỏi first-5-seconds test trả lời được khi xem screenshot 1440 × 1000 và 390 × 844; CTA điều hướng đúng; ảnh không nhảy layout.

### T03 — Ba product gateways (Glucare, Viên An Đường, Dovital)

- **Purpose / issue / target:** giúp tự chọn đúng dòng; hiện ảnh nhóm tách card, subtitle ngắn. Mỗi card gồm packshot riêng, tên chuẩn, loại sản phẩm, **công dụng cơ bản được duyệt**, đối tượng/nhu cầu và CTA đích khác biệt.
- **Content / component / visual / CTA:** card ngang desktop/stack mobile; Glucare `/sua-hat-glucare-plus`, Viên `/vien-an-duong`, Dovital `/sui-dovital` sau khi Business/SEO chốt route. Không pha lẫn PDP và landing. CTA “Tìm hiểu [tên]”.
- **Marketing input:** bảng product fact, claim, audience, packshot, URL canonical. **SEO/GEO/schema:** H2 nhóm, H3 tên; text HTML, links cụ thể; `ItemList` tùy chọn khi ổn định. **Performance:** ảnh từng card đúng kích thước, lazy khi dưới fold. **Mobile:** mỗi card đọc được một màn hoặc ít hơn, không crop packshot. **Analytics:** `product_gateway_click` `{product_id,destination}`. **Acceptance:** 3 card đúng tên/ảnh/claim/route; tester nêu được khác biệt giữa ba dòng trước click; route có 200/canonical hợp lý.

### T04 — Trust strip và mission/Why ADDP

- **Purpose / issue / target:** chuyển lời hứa thành lý do tin. Ba badge hiện nói “chứng nhận an toàn/minh bạch/đồng hành” thiếu link hồ sơ; 6 tile dài, chữ overlay khó đọc. Rút 2–3 điểm khác biệt thực, mỗi điểm có nội dung và nguồn.
- **Content / component / visual / CTA:** text trên nền phẳng hoặc overlay đạt tương phản; “Xem hồ sơ” chỉ khi có tài liệu; tránh khẳng định hơn hồ sơ. Mission có liên hệ trực tiếp với ba dòng.
- **Marketing input:** mission chính thức, nguồn claim, ảnh brand/cơ sở/nhân sự có quyền. **SEO/GEO/schema:** facts doanh nghiệp trong HTML; không biến slogan thành Organization fact. **Performance:** bỏ ảnh lặp, lazy các ảnh dưới fold. **Mobile:** 2–3 card ngắn, không sáu màn ảnh. **Analytics:** `trust_document_click` nếu có. **Acceptance:** không còn badge không thể giải thích; đọc được chữ trên ảnh với contrast kiểm đo; product gateway xuất hiện sớm hơn hiện tại.

### T05 — Hồ sơ/chứng nhận (có điều kiện)

- **Purpose / issue / target:** trả lời “giấy gì, ai cấp, áp dụng cho sản phẩm nào”; hiện không thấy section. Dựng chỉ sau khi Business cung cấp bản công khai hợp lệ.
- **Content / component / visual / CTA:** card có tên tài liệu, số, cơ quan cấp, ngày, phạm vi, link bản xem được, ngày cập nhật. Không gọi giấy đăng ký doanh nghiệp là chứng nhận hiệu quả y khoa.
- **Marketing input:** bản scan/metadata/quyền công bố/Legal sign-off. **SEO/GEO/schema:** trang nguồn có text giải thích; schema chỉ khi phù hợp, không tạo dấu xác thực giả. **Performance:** thumbnail nhẹ, file full tải khi click. **Mobile:** card đọc được không zoom; PDF/link accessible. **Analytics:** `trust_document_click`. **Acceptance:** đối chiếu 100% metadata với bản gốc, mở được file, scope đúng sản phẩm; nếu không có nguồn thì không render section hoặc badge tương ứng.

### T06 — Testimonial / social proof

- **Purpose / issue / target:** proof trước bước lead; hiện có hai quote sau form, thiếu ngày/context. Di chuyển trước form, chỉ giữ quote được xác thực.
- **Content / component / visual / CTA:** tên hoặc cách ẩn danh được đồng ý, ảnh có model release, thời điểm, sản phẩm/dịch vụ liên quan, câu nói nguyên văn được duyệt; dấu sao chỉ khi có phương pháp rating. Video feedback/press/partner là module riêng **nếu có**, không tự tạo.
- **Marketing input:** bản gốc, consent, quyền ảnh/video, link đối chiếu, legal review. **SEO/GEO/schema:** text quote hiển thị; không gắn Review schema tùy tiện. **Performance:** video poster/lazy, không autoplay; mobile carousel có control. **Analytics:** `testimonial_interaction`. **Acceptance:** từng quote có hồ sơ nguồn/consent; không có ngụ ý hiệu quả điều trị; accessible khi dùng carousel.

### T07 — Listing sản phẩm nổi bật (quyết định giữ/gộp)

- **Purpose / issue / target:** nếu cần bán SKU ngay từ homepage, giới hạn SKU hỗ trợ ba dòng; canonical có loading, recapture mobile có Sữa Canxi Milk và Dovital làm mạch khó hiểu. Business quyết định giữ section thương mại hay chuyển traffic sang landing.
- **Content / component / visual / CTA:** card có ảnh, tên, quy cách, giá/offer và đích PDP lấy từ một nguồn dữ liệu; skeleton kích thước cố định, fallback khi API/JS chậm. Không lặp gateway chỉ đổi hình thức.
- **Marketing input:** SKU được chọn, inventory/price truth, ảnh packshot, ưu đãi. **SEO/GEO/schema:** link sản phẩm crawlable, không tạo Product/Offer với giá chưa ký. **Performance:** loading không giữ viewport trống dài; image lazy đúng ngưỡng. **Mobile:** card/tap target dễ dùng. **Analytics:** `featured_product_click`. **Acceptance:** tải chậm vẫn thấy thông tin/nút hoặc fallback hợp lý; không có card sai sản phẩm/giá; nếu không đạt thì bỏ/gộp section.

### T08 — Knowledge Hub preview

- **Purpose / issue / target:** biến lời hứa “chia sẻ kiến thức” thành đường đọc hữu ích; hiện chỉ có link blog ở nav. 2–3 bài chọn lọc theo ba nhu cầu, có title, excerpt, thumbnail, tác giả/reviewer/ngày nếu được xác minh.
- **Content / component / visual / CTA:** card bài đến đúng URL; CTA “Xem thư viện kiến thức”; không biến bài thành quảng cáo claim y khoa. **Marketing input:** danh sách bài được duyệt, brief/source, thumbnail quyền dùng. **SEO/GEO/schema:** topic cluster, anchor cụ thể; schema BlogPosting ở trang bài, không copy cả bài về homepage. **Performance:** thumbnail responsive/lazy. **Mobile:** title 2–3 dòng, không cắt ý sai. **Analytics:** `article_click` `{article_id,placement}`. **Acceptance:** mọi bài còn hiệu lực, nguồn/tác giả trên trang đích, link 200, không lẫn demo/legacy.

### T09 — Consultation CTA + form

- **Purpose / issue / target:** giúp người cần hỏi trao đổi an toàn; hiện hỏi tuổi/tình trạng sức khỏe và hứa thực đơn miễn phí nhưng thiếu kỳ vọng/notice thấy được. Quyết định tối thiểu hoá trường với đội xử lý lead; privacy gần form.
- **Content / component / visual / CTA:** nhãn rõ, consent/notice với link chính sách, ai liên hệ và thời gian phản hồi được Business cam kết, trạng thái lỗi/success. Nếu thực đơn 7 ngày là incentive thì nêu điều kiện nhận, nguồn chuyên môn và giới hạn áp dụng.
- **Marketing input:** lead SOP, privacy text, thực đơn và nguồn, nhân sự/ảnh quyền dùng. **SEO/GEO/schema:** mô tả dịch vụ bằng HTML; không schema medical professional khi chưa có profile. **Performance:** ảnh form tải sau nội dung đầu; submit không chặn main thread. **Mobile:** `type=tel`, autocomplete, inputmode phù hợp, keyboard không che submit. **Analytics:** `consultation_cta_click`, `form_start`, `form_submit` (chỉ status/form_id, không raw PII hoặc health text). **Acceptance:** validation rõ, dữ liệu gửi đúng nơi với môi trường QA, consent có thể đọc, không có dữ liệu nhạy cảm trong analytics/log client.

### T10 — Footer

- **Purpose / issue / target:** entity và điều hướng cuối; hiện có contact/policies nhưng URL Dovital khác gateway. Chốt một danh mục URL canonical và thông tin pháp nhân nhất quán.
- **Content / component / visual / CTA:** tên pháp nhân, địa chỉ, số hotline, email/kênh chính thức, giờ hỗ trợ, 3 sản phẩm, policies, social hợp lệ, newsletter có privacy. Chỉ hiện badge thanh toán nếu thực sự hỗ trợ.
- **Marketing input:** entity master, policies/giờ, social/payment proof. **SEO/GEO/schema:** NAP đồng nhất `Organization` và trang contact; links canonical. **Performance:** icon/font nhẹ. **Mobile:** accordion có trạng thái và focus/ARIA. **Analytics:** `footer_link_click`, newsletter events theo policy. **Acceptance:** đối chiếu Business master 100%, link 200/redirect chủ đích, không còn `/sui-dovital` vs `/vien-sui-dovital` chưa quyết.

## 3. Design system requirements

| Thành phần | Yêu cầu triển khai/QA |
|---|---|
| Primary & CTA color | Lấy mã màu từ logo master ADDP, xác định palette text/surface/border; CTA primary phân biệt với text link và đạt tương phản đo được. Vàng chỉ làm accent có chủ đích. |
| Typography | Một hệ font có hỗ trợ tiếng Việt; body đề xuất ≥16 px desktop và mobile, line-height khoảng 1,5; thử với người dùng trung/cao tuổi. Không đưa đoạn quan trọng vào ảnh. |
| Spacing/rhythm | Token 4/8 px, khoảng section nhất quán; không để loading/skeleton chiếm màn dài. Cụm chứng cứ đặt gần claim. |
| Buttons | Primary/secondary/text rõ vai trò; min target theo chuẩn accessibility được team áp dụng; hover/focus/disabled/loading đầy đủ. |
| Product card | Packshot, tên, loại, benefit/đối tượng đã duyệt, một CTA, alt; không dùng ảnh nhóm thay mọi card. |
| Testimonial/certificate/article card | Text nguồn/context dễ đọc; certificate metadata đầy đủ; article title/author/date rõ. Không tô sao hay badge chưa xác thực. |
| Forms | Label thật, required nhất quán, validation/error/success, privacy cạnh CTA, `tel` cho điện thoại. |

## 4. Triển khai kỹ thuật theo lớp

**Frontend:** dựng component semantic và responsive; render text/links quan trọng trong HTML; ưu tiên hero và product gateway; skeleton có chiều cao ổn định; kiểm overlay, carousel, mobile fixed bar, keyboard/focus/alt. **Backend/CMS:** mô hình dữ liệu `CompanyFact`, `ProductGateway`, `EvidenceDocument`, `Testimonial`, `ArticleSelection`, `LeadFormConfig`; workflow draft → Medical/Legal/Business approval → publish; trường claim có source/version/expiry. Không có source repository của site trong audit, nên đây là spec, không khẳng định framework/code hiện tại. **Integration:** xác minh form endpoint, CRM routing, dedupe và thông báo thành công trong staging; không thử submit production trong audit. **Route:** lập bảng canonical/redirect cho ba landing, đặc biệt Dovital; kiểm link footer/nav/CTA cùng nguồn.

### Performance plan

LCP lab hiện 17.700 ms desktop/12.504 ms mobile so với checklist 2.500 ms; TTFB 5.912/5.842 ms. Thứ tự điều tra: (1) thu trace và xác định LCP element + waterfall/TTFB; (2) cache/CDN/server response nếu TTFB là phần lớn; (3) hero asset: đúng kích thước, AVIF/WebP, `srcset`, preload/priority đúng ảnh LCP, dimensions; (4) CSS critical path, unused CSS/JS và third-party; (5) lazy ảnh/tile/video dưới fold, font loading; (6) tránh layout shift ở listing. **Performance budget đề xuất:** LCP lab ≤2,5 s theo checklist trong cùng cấu hình đo; CLS ≤0,1 và JS/ảnh budget được chốt sau baseline trace; PSI 85+ nếu checklist yêu cầu và cùng thiết lập đo. Chạy 3 lần mỗi viewport, báo median và độ biến thiên; xem field data riêng nếu có. Không chỉ tối ưu asset dựa trên ảnh.

### SEO/GEO/AEO plan

H1 entity/proposition, H2 section, H3 ba sản phẩm; title/meta viết lại bằng thông tin được duyệt, bỏ câu “hàng đầu” nếu không có chứng cứ; canonical self, route Dovital thống nhất, internal links tới landing/Knowledge/giới thiệu/contact. Trên trang có đoạn facts: tên pháp nhân, nhiệm vụ, sản phẩm nào phục vụ nhu cầu gì, contact và nguồn trust. `Organization` + `WebSite` dựa thông tin hiển thị; `ItemList` khi ba route chuẩn; không cần breadcrumb root. QA raw và rendered HTML, robots/indexability/sitemap và legacy/demo strings. Không dùng JSON-LD để bù nội dung thiếu.

### Analytics plan

Định nghĩa tối thiểu: `hero_cta_click`, `product_gateway_click`, `consultation_cta_click`, `form_start`, `form_submit`, `article_click`. Thu `section_id`, `cta_role`, `product_id`, `destination`, `form_id`, `status` khi cần; không gửi tên, số điện thoại, tuổi, tình trạng sức khỏe, nội dung note. Trigger một lần/click, không phát event khi render. QA bằng debug/staging và đối chiếu consent policy; audit hiện có không xác nhận analytics production do telemetry bị chặn.

## 5. Master backlog

| Task ID | Section / problem / objective | Priority · Owner | Dependency/input | Implementation | Acceptance | Automated verification | Manual verification | Evidence |
|---|---|---|---|---|---|---|---|---|
| H-01 | Hero mơ hồ → entity + CTA + packshot | P0 · Content/Design/FE | Hero copy, rights, product truth | H1, layout responsive, 2 CTA | 5-second test trả lời đủ, asset không crop sai | H1/link/image size check | 2 viewport + người dùng | HOME-S01 |
| H-02 | 3 gateway thiếu benefit → card phân biệt | P0 · Marketing/FE | Claim matrix, packshots, route | 3 card semantic | Đúng 3 sản phẩm/benefit/link | URL/canonical/link check | So lựa chọn theo nhu cầu | HOME-S03 |
| H-03 | LCP/TTFB cao → giảm critical path | P0 · FE/BE/DevOps | Trace, hosting access | Cache/asset/CSS/JS sau chẩn đoán | LCP lab đạt target hoặc có documented blocker | Lighthouse/trace 3 runs | Video loading mobile | EVD-85956D06B433ABCA; EVD-3D15DCDB359887BF |
| H-04 | Form thiếu expectation/privacy → lead đáng tin | P0 · Legal/Marketing/FE/BE | Privacy/SOP/offer | Copy, field/validation, routing | Consent/info rõ, QA submit staging | Form validation + analytics PII scan | Mobile/keyboard/error flow | HOME-S05; DOM |
| H-05 | Trust badge không có nguồn → proof kiểm được | P1 · Legal/Content | Hồ sơ thật | Link metadata hoặc bỏ claim | Mỗi badge có source/scope | Broken link/metadata check | Đối chiếu scan | HOME-S01/S02 |
| H-06 | 6 tile dài → rút mission | P1 · Brand/Design/FE | Mission/ảnh duyệt | 2–3 block có text HTML | Rõ và đọc được trên mobile | Contrast/image size | Visual QA | HOME-S02 |
| H-07 | Testimonial sau form/thiếu hồ sơ → proof đúng lúc | P1 · Marketing/Legal/FE | Consent/quote originals | Move + context | Quote có provenance, không claim y khoa | Content record check | Card/carousel QA | HOME-S06 |
| H-08 | Footer Dovital khác route → one URL truth | P1 · SEO/BE/Content | Route decision | Sửa link/redirect/canonical | Không còn đích bất nhất | Crawl/link test | Click từ footer/gateway | HOME-S07; DOM |
| H-09 | Listing loading/role mờ → quyết định giữ/gộp | P1 · Product/FE/BE | SKU/giá truth, trace | Render/fallback/filter SKU | Không trống kéo dài, card đúng | Slow network screenshot | Review SKU | HOME-S04; SVR-HOME-S03 |
| H-10 | Knowledge thiếu preview → topic path | P2 · Content/SEO/FE | 2–3 bài approved | Cards + links | Bài đúng nguồn/ngày/đích | Link/metadata check | Editorial QA | MISSING_VISUAL_EVIDENCE |
| H-11 | Metadata/H1/schema yếu → entity extraction | P1 · SEO/FE | Entity facts | H1/meta/JSON-LD hợp lệ | Raw/rendered thống nhất, schema phản ánh trang | HTML/schema validation | Snippet/entity review | EVD-A81704E1324D31CC |
| H-12 | Analytics chưa quan sát → đo hành trình | P1 · Analytics/FE | Event taxonomy, consent | Data layer/events | 6 events đúng, không PII | Debug event assertions | Consent/path QA | EVD-DBF33A19881A487E |
| H-13 | Accessibility chưa xác minh → QA | P1 · Design/FE/QA | Build target | Alt/labels/focus/contrast | Không còn lỗi nghiêm trọng cho luồng chính | axe/contrast scan | Keyboard/screen reader | HOME-S01/S05/S06/S07 |

## 6. Release/QA gate và dependencies

1. **Business/Marketing** ký source of truth cho pháp nhân/contact, ba dòng, SKU/giá, route, offer, tài sản ảnh; **Medical/Legal** ký từng claim và cách trình bày chứng nhận/testimonial; đây là blocking cho H-01/02/04/05/07/08/09/11.
2. **Design/Content** bàn giao component/copy/asset có cả desktop/mobile; developer dựng staging. Không dùng placeholder như proof.
3. **Automated QA:** link/canonical/H1/schema/alt/required fields, analytics payload không PII, lighthouse/trace, screenshots 1440 × 1000 và 390 × 844 sau render. **Manual QA:** 5-second test, chọn sản phẩm, đọc proof, keyboard/screen reader, form success/error trong staging, slow network, đối chiếu claim/giấy tờ.
4. **Release gate:** P0 hoàn tất và tài sản/claim liên quan đã ký; số đo performance so cùng phương pháp có kết quả; không publish chứng nhận/quote/offer chưa xác minh. Các module có điều kiện (hồ sơ/video/press/partner) có thể không xuất hiện nếu nguồn không có; phần còn lại vẫn triển khai.

**Phần còn cần doanh nghiệp cung cấp:** bảng ở tài liệu 03. Không có mockup “After” giả lập; designer dùng target spec và ảnh Before ở trên để tạo thiết kế duyệt.
