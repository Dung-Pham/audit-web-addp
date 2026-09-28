# Audit Report

**Run ID:** 20260928T211548Z-replacement-full-audit  
**Date:** 2026-09-28T21:15:50.126Z  
**Target:** https://addp.vn/

## 1. Executive Summary

- 14 accepted findings; 14 planned tasks; 3 manual-review items; 0 blocked items.
- Severity: critical 0, high 5, medium 9, low 0.
- Conclusions below use accepted evidence-linked findings. Unverified areas remain explicit.

## 2. Scope

- Target: https://addp.vn/; environment: production; run: 20260928T211548Z-replacement-full-audit.
- Recorded page inventory: 25; normalized requirements: 17.
- Viewports: [   {     "name": "desktop",     "width": 1440,     "height": 1000   },   {     "name": "mobile",     "width": 390,     "height": 844   } ].
- Effective models: not verified / not recorded. Routing status: "supported_requested_models_unverified".
- External black-box assessment only. Internal source, backend configuration, private analytics, and order completion cannot be confirmed from public observations.
- Runtime/model limitation: No source, backend, analytics admin or KiotViet access..
- Runtime/model limitation: Non-GET browser requests blocked and explicitly labelled audit induced..
- Runtime/model limitation: Actual inference model metadata is not exposed..
- Runtime/model limitation: No purchase/lead submission and no cart mutation..

## 3. Methodology

- Public-page discovery and read-only external collection feed persona journeys and independent specialist candidates.
- Evidence and contradiction review determine accepted findings; only accepted findings feed this report and planning backlog.
- FACT records public observations, ANALYSIS states interpreted impact, and RECOMMENDATION identifies a proposed direction.
- Performance values are laboratory measurements unless an independently identified field-data source is explicitly recorded. No lab measurement is presented as field experience.

## 4. Coverage

| Requirement | Method | Status | Observation | Evidence |
| --- | --- | --- | --- | --- |
| REQ-001 | visual review, computed colors | UNKNOWN | Insufficient run evidence to determine whether the requirement is met; partial capture is not evidence of failure. | Unknown / not recorded |
| REQ-002 | computed typography at mobile viewport | UNKNOWN | Insufficient run evidence to determine whether the requirement is met; partial capture is not evidence of failure. | Unknown / not recorded |
| REQ-003 | named-product image inspection, visual review | UNKNOWN | Insufficient run evidence to determine whether the requirement is met; partial capture is not evidence of failure. | Unknown / not recorded |
| REQ-004 | first viewport visual review | UNKNOWN | Insufficient run evidence to determine whether the requirement is met; partial capture is not evidence of failure. | Unknown / not recorded |
| REQ-005 | CTA size/style inspection | UNKNOWN | Insufficient run evidence to determine whether the requirement is met; partial capture is not evidence of failure. | Unknown / not recorded |
| REQ-006 | mission/product links/social proof content review | UNKNOWN | Insufficient run evidence to determine whether the requirement is met; partial capture is not evidence of failure. | Unknown / not recorded |
| REQ-007 | PDP table/bullet/FAQ/review/offer inspection | PARTIAL | Evidence supports only the listed observations; remaining methods/scope are unverified. | EVD-C07AE1B67F5FAB1D |
| REQ-008 | three-tier landing review for each named product | UNKNOWN | Insufficient run evidence to determine whether the requirement is met; partial capture is not evidence of failure. | Unknown / not recorded |
| REQ-009 | question headings/40-60 word answers/table/bullet/attribution review | PARTIAL | Captured product health claims and article content are present in the run artifacts, but E-E-A-T, medical accuracy, sourcing, and the required editorial structure need qualified review; no factual failure is inferred. | EVD-42AE297DAC33A1B9, EVD-29BE01E2DF43FC8F |
| REQ-010 | parse JSON-LD, compare structured data with visible content | PARTIAL | Evidence supports only the listed observations; remaining methods/scope are unverified. | EVD-32CB6452441EDF9E, EVD-C16C9A26189A6C8E, EVD-01FF964BE2B7A2AA, EVD-B1630958C79BC01D, EVD-02D7356CC02B574B, EVD-BDF90743647332F7, EVD-E32F848C405D32E0, EVD-EDDAD1FAFA69798C, EVD-F71EC5745F2AF71B |
| REQ-011 | robots user-agent rule analysis | PARTIAL | Evidence supports only the listed observations; remaining methods/scope are unverified. | EVD-C51AC48D3DB98538, EVD-B093A16D09E3A37E |
| REQ-012 | compare raw server HTML and rendered content | UNKNOWN | Insufficient run evidence to determine whether the requirement is met; partial capture is not evidence of failure. | Unknown / not recorded |
| REQ-013 | mobile LAB measurement, PSI if available, overflow/image inspection | PARTIAL | Evidence supports only the listed observations; remaining methods/scope are unverified. | EVD-85956D06B433ABCA, EVD-3D15DCDB359887BF, EVD-035E196C34BF6621, EVD-D2E949A54A61C783, EVD-140275788B638B2B, EVD-EEE8678F6CB7996C, EVD-1043761274B05EFF, EVD-381F4D853D891DF0, EVD-9B3746A447795E5D |
| REQ-014 | public script/network/dataLayer inspection, manual successful-order event check | PARTIAL | Evidence supports only the listed observations; remaining methods/scope are unverified. | Unknown / not recorded |
| REQ-015 | HTTPS request, robots/sitemap parse, public title/meta extraction, manual backend configurability check | PARTIAL | Evidence supports only the listed observations; remaining methods/scope are unverified. | EVD-C51AC48D3DB98538, EVD-B093A16D09E3A37E, EVD-A57DC932D580B784, EVD-CD4C67022008E5BB, EVD-325C6659444AD546, EVD-927DDAF696B5D339 |
| REQ-016 | read-only checkout form inspection, manual guest order validation | BLOCKED | Checkout or success state was not reached safely in recorded partial journeys; no failure is inferred. | Unknown / not recorded |
| REQ-017 | read-only visible payment options, manual success/KiotViet integration test | BLOCKED | Checkout or success state was not reached safely in recorded partial journeys; no failure is inferred. | Unknown / not recorded |

## 5. Inventory

| URL | Type | HTTP | Indexability | Importance |
| --- | --- | --- | --- | --- |
| https://addp.vn/ | homepage | 200 | indexable_or_unknown | critical |
| https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | product_detail | 200 | Unknown / not recorded | critical |
| https://addp.vn/vien-an-duong-addp.html | product_detail | 200 | Unknown / not recorded | critical |
| https://addp.vn/sui-dovital | product_detail | 200 | indexable_or_unknown | critical |
| https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | article | 200 | Unknown / not recorded | normal |
| https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | article | 200 | Unknown / not recorded | normal |
| https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | article | 200 | Unknown / not recorded | normal |
| https://addp.vn/chinh-sach-dat-hang | policy | 200 | indexable_or_unknown | high |
| https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | policy | 200 | indexable_or_unknown | high |
| https://addp.vn/chinh-sach-thanh-toan | policy | 200 | indexable_or_unknown | high |
| https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | policy | 200 | indexable_or_unknown | high |
| https://addp.vn/contact | contact | 200 | indexable_or_unknown | high |
| https://addp.vn/gioi-thieu | company/about | 200 | indexable_or_unknown | normal |
| https://addp.vn/benh-ly | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/blog/category/suc-khoe-tieu-duong | category | 200 | indexable_or_unknown | high |
| https://addp.vn/catalogsearch/advanced/ | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/sua-dinh-duong.html | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/sua-dinh-duong/sua-tre-em.html | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/sua-hat-glucare-plus | product_detail | 200 | indexable_or_unknown | critical |
| https://addp.vn/thiet-bi-y-te.html | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/thiet-bi-y-te/khau-trang.html | other | 200 | indexable_or_unknown | normal |

## 6. Checklist compliance

| Requirement | Original checklist text | Strategic objective source text | Source reference | Verification | Check status | Accepted findings |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-001 | - Màu chủ đạo (Primary - 60%): Sử dụng chuẩn xác sắc Xanh dương đậm (Navy / Royal Blue) từ logo chữ ADDP Pharmacy cho các thanh Header, tiêu đề chính (H1, H2), và logo nhận diện.    - Màu nền trợ sáng (Background - 30%): Dùng nền trắng tinh hoặc xám sáng nhạt (#F8F9FA) để tạo không gian sạch sẽ, không bị lóa mắt.   - Màu điểm nhấn (Accent/CTA - 10%): Dùng tông Cam ấm hoặc Đỏ đô cho các nút bấm chuyển đổi để kích thích hành vi mua sắm. | - Truyền thông & Niềm tin: Kế thừa trọn vẹn sự uy tín, chuẩn mực y tế từ logo sẵn có, đồng thời khắc phục điểm yếu "lạnh lẽo" bằng màu điểm nhấn kích thích hành vi mua hàng. | Trang tính1!C6 | visual review, computed colors | UNKNOWN | No accepted finding; compliance unknown |
| REQ-002 | - Dùng font không chân hiện đại (Inter, Roboto). Cỡ chữ tiêu đề tối thiểu 28-32px trên mobile, văn bản thân bài tối thiểu 16px. Khoảng cách dòng thoáng (1.5 - 1.6), giúp khách hàng trung cao tuổi đọc không bị mỏi mắt. | - Trải nghiệm & Bán hàng: Đảm bảo đối tượng khách hàng lớn tuổi hoặc con cháu mua hàng dễ đọc, không bị rào cản thị giác khi tìm hiểu thông tin sức khỏe. | Trang tính1!C7 | computed typography at mobile viewport | UNKNOWN | No accepted finding; compliance unknown |
| REQ-003 | - 3 sản phẩm chủ lực (Glucare Plus, Viên An Đường, Dovital) phải có hình ảnh chụp studio sắc nét (hoặc 3D render cao cấp), thấy rõ bao bì, tem nhãn.   - Có hình ảnh con người thực tế, biểu cảm an tâm ( người cao tuổi tươi cười) để củng cố thông điệp "Chăm sóc từ giá trị thiện lành". | - Truyền thông nhân văn: Chạm đến cảm xúc của khách hàng, khẳng định chất lượng thực tế và định vị giá trị cốt lõi của thương hiệu ADDP. | Trang tính1!C8 | named-product image inspection, visual review | UNKNOWN | No accepted finding; compliance unknown |
| REQ-004 | - Ngay khi mở web (chưa cuộn chuột), màn hình đầu tiên phải hội tụ đủ: Slogan/Thông điệp cốt lõi + Hình ảnh sản phẩm chủ lực + Nút kêu gọi hành động (CTA) to rõ ràng. | - Bán hàng: Định hướng người dùng ngay lập tức tập trung vào sản phẩm trọng tâm, hạn chế tối đa tỷ lệ thoát trang sớm (Bounce Rate). | Trang tính1!C9 | first viewport visual review | UNKNOWN | No accepted finding; compliance unknown |
| REQ-005 | - Nút "Mua ngay", "Đặt tư vấn" phải có hình khối bo tròn, kích thước lớn dễ bấm bằng ngón cái trên mobile, màu sắc tương phản mạnh so với tổng thể web. | - Bán hàng: Dẫn dắt thị giác người dùng tự động thực hiện hành vi chuyển đổi chốt đơn một cách thuận lợi nhất. | Trang tính1!C10 | CTA size/style inspection | UNKNOWN | No accepted finding; compliance unknown |
| REQ-006 | - Nêu bật sứ mệnh thương hiệu ADDP.   - Trưng bày trực quan 3 dòng sản phẩm chủ lực kèm nút dẫn thẳng vào Landing Page.   - Đưa khu vực "Bằng chứng xã hội" (feedback khách hàng cũ, chứng nhận an toàn) lên vị trí dễ thấy. | - Truyền thông & Bán hàng: Khắc sâu định vị thương hiệu và tạo điểm tựa niềm tin ngay từ trang đón khách đầu tiên. | Trang tính1!C12 | mission/product links/social proof content review | UNKNOWN | No accepted finding; compliance unknown |
| REQ-007 | - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu. | - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay. | Trang tính1!C13 | PDP table/bullet/FAQ/review/offer inspection | PARTIAL | FND-CONTENT-CONTENT-001, FND-CONVERSION-CONV-001 |
| REQ-008 | - Tầng 1 (Cho người mua ngay): Giải pháp giải quyết vấn đề + Giá ưu đãi + Nút "Đặt hàng ngay" siêu tốc ở trên cùng.   - Tầng 2 (Cho người tìm hiểu): Cơ chế tác động, thành phần dược liệu, chứng nhận kiểm định minh bạch.   - Tầng 3 (Cho người tham khảo/đắn đo): Bằng chứng xã hội (feedback, video thực tế), khối FAQ (Hỏi đáp) xử lý từ chối và nút chốt đơn cuối trang. | - Bán hàng tối đa hóa: Phục vụ trọn vẹn cả 3 nhóm tâm lý khách hàng từ "nóng" đến "lạnh" khi chạy quảng cáo Google Ads / Facebook Ads mà không bị bỏ sót phân khúc nào. | Trang tính1!C14 | three-tier landing review for each named product | UNKNOWN | No accepted finding; compliance unknown |
| REQ-009 | - Bài viết được định dạng chuẩn E-E-A-T.   - Tiêu chuẩn cấu trúc nội dung: Thẻ H2/H3 đặt dưới dạng câu hỏi người dùng hay thắc mắc (VD: "Cách nhận biết sớm biến chứng tiểu đường tuýp 2"). Ngay dưới tiêu đề phải có đoạn tóm tắt trực diện từ 40-60 từ. Nội dung tiếp theo phải sử dụng bảng biểu so sánh hoặc liệt kê ý chính (Bullet points). | - GEO & AEO: Đây là dạng nội dung "vàng" để các hệ thống AI (ChatGPT, Google AI) nhận diện ADDP là nguồn uy tín và tự động đưa tên thương hiệu vào câu trả lời gợi ý cho người dùng, kéo lượng truy cập tự nhiên cực lớn. | Trang tính1!C15 | question headings/40-60 word answers/table/bullet/attribution review | PARTIAL | No accepted finding; compliance unknown |
| REQ-010 | - Lập trình viên bắt buộc nhúng mã JSON-LD chuẩn cho: Organization (thực thể doanh nghiệp tại Hà Nội), Product (cho 3 sản phẩm), và FAQPage. | - AEO & GEO: Giúp máy tính và bot AI đọc hiểu chính xác 100% về thông tin doanh nghiệp, giá sản phẩm, và các câu hỏi thường gặp mà không cần phỏng đoán. | Trang tính1!C17 | parse JSON-LD, compare structured data with visible content | PARTIAL | FND-GEO-AEO-GEO-AEO-001, FND-STRUCTURED-DATA-STRUCTURED-DATA-001 |
| REQ-011 | - Cấu hình file robots.txt tuyệt đối không chặn các con bot AI (ChatGPT-User, PerplexityBot, Google-Extended). Cho phép đọc thì thương hiệu mới được AI gợi ý. | - GEO (Tối thượng): Tránh việc website trở nên "vô hình" trước các cỗ máy trả lời thế hệ mới, đảm bảo thương hiệu ADDP luôn xuất hiện trong các câu trả lời gợi ý mua hàng của AI. | Trang tính1!C18 | robots user-agent rule analysis | PARTIAL | FND-GEO-AEO-GEO-AEO-003, FND-TECHNICAL-SEO-SEO-002 |
| REQ-012 | - Toàn bộ nội dung chữ, giá, mô tả phải được render trực tiếp từ Server (HTML tĩnh) ngay khi tải trang, không dùng JavaScript thuần tải ngầm. | - GEO: Giúp các con bot AI không có khả năng lướt màn hình vẫn đọc được toàn bộ nội dung văn bản của trang ngay từ lần quét đầu tiên. | Trang tính1!C19 | compare raw server HTML and rendered content | UNKNOWN | No accepted finding; compliance unknown |
| REQ-013 | - Điểm PageSpeed Insights trên Mobile đạt tối thiểu 85+, thời gian tải thực tế dưới 2.5 giây. Giao diện mobile hiển thị hoàn hảo, không bị tràn viền, vỡ ảnh. | - Bán hàng & SEO: Đảm bảo khách hàng dùng điện thoại không bị ức chế do đợi trang tải lâu, giữ vững tỷ lệ chuyển đổi đơn hàng cao. | Trang tính1!C21 | mobile LAB measurement, PSI if available, overflow/image inspection | PARTIAL | FND-PERFORMANCE-PERF-001, FND-PERFORMANCE-PERF-002, FND-PERFORMANCE-PERF-003, FND-UX-UI-UXUI-001 |
| REQ-014 | - Tích hợp Google Tag Manager (GTM), GA4, Meta Pixel và Google Ads Conversion Tracking.   - Bắt buộc bắn sự kiện thành công khi khách bấm đặt hàng và ghi nhận tại Trang Cảm Ơn (Thank You Page). | - Tối ưu Marketing: Giúp đo lường chính xác chiến dịch quảng cáo nào ra đơn, tính toán đúng ROAS để tối ưu ngân sách chạy Ads hiệu quả. | Trang tính1!C22 | public script/network/dataLayer inspection, manual successful-order event check | PARTIAL | FND-ANALYTICS-analytics-public-signals-not-observed-sample |
| REQ-015 | - Cài đặt chứng chỉ SSL (HTTPS), tự động tạo Sitemap.xml và file Robots.txt chuẩn SEO, hỗ trợ tùy biến Title/Meta Description linh hoạt. | - SEO truyền thống: Xây dựng nền tảng kỹ thuật vững chắc để Google dễ dàng lập chỉ mục (index) và đẩy từ khóa lên top tìm kiếm tự nhiên. | Trang tính1!C23 | HTTPS request, robots/sitemap parse, public title/meta extraction, manual backend configurability check | PARTIAL | FND-TECHNICAL-SEO-SEO-001, FND-TECHNICAL-SEO-SEO-002, FND-TECHNICAL-SEO-SEO-003 |
| REQ-016 | - Form đặt hàng cực kỳ gọn nhẹ: Chỉ yêu cầu điền Họ tên, SĐT, Địa chỉ. Tuyệt đối không bắt buộc tạo tài khoản trước khi mua hàng để tránh làm khách nản lòng. | - Bán hàng: Xóa bỏ hoàn toàn rào cản tâm lý ngại khai báo rườm rà của khách hàng (đặc biệt là người trung cao tuổi), tối đa hóa số lượng đơn chốt thành công. | Trang tính1!C25 | read-only checkout form inspection, manual guest order validation | BLOCKED | No accepted finding; compliance unknown |
| REQ-017 | - Hỗ trợ thanh toán linh hoạt: COD (nhận hàng trả tiền), Chuyển khoản ngân hàng, kèm hiển thị thông báo xác nhận đơn hàng thành công minh bạch. chuyển thẳng sang kiot viet | - Bán hàng: Tạo sự an tâm tuyệt đối và linh hoạt cho mọi đối tượng khách hàng khi thanh toán trực tuyến hoặc trực tiếp. | Trang tính1!C26 | read-only visible payment options, manual success/KiotViet integration test | BLOCKED | No accepted finding; compliance unknown |

## 7. Persona journeys

### first_time — Understand ADDP, find company information and a principal product route.

Entry: https://addp.vn/. Status: partial. Clicks: 1. Pages: https://addp.vn/, https://addp.vn/gioi-thieu. Evidence: EVD-571CE21693716D24-first_time-0, EVD-571CE21693716D24-first_time-0-SHOT, EVD-5E169EB798A7CE3C-first_time-1, EVD-5E169EB798A7CE3C-first_time-1-SHOT.

Blockers: Journey runner recovery attempt ended after one verified visible click with Playwright error: route.abort: Route is already handled.. Confusion: none recorded. Positive signals: Homepage and company introduction were reached through one visible safe link click..

### high_intent — Find a named product and inspect safe purchase path, stopping before cart/order mutation.

Entry: https://addp.vn/. Status: partial. Clicks: 1. Pages: https://addp.vn/, https://addp.vn/sua-hat-glucare-plus. Evidence: EVD-28869D62E349AE02-high_intent-0, EVD-28869D62E349AE02-high_intent-0-SHOT, EVD-D117A7EAEA699CAA-high_intent-1, EVD-D117A7EAEA699CAA-high_intent-1-SHOT.

Blockers: No visible safe route was found for goal checkout\/cart\|gio-hang\|\/cart\/?$; direct inventory navigation was not substituted.; No visible safe route was found for goal checkout\|thanh-toan; direct inventory navigation was not substituted.; Cart and checkout mutations were not attempted; exact safe stopping point is product page / visible cart entry only.. Confusion: unreachable_from_observed_ui: no visible safe matching link for checkout\/cart\|gio-hang\|\/cart\/?$; unreachable_from_observed_ui: no visible safe matching link for checkout\|thanh-toan. Positive signals: Observed 2 page(s) and 1 verified visible click(s)..

### mobile — Use mobile navigation to inspect product and visible commerce controls without mutation.

Entry: https://addp.vn/. Status: partial. Clicks: 1. Pages: https://addp.vn/, https://addp.vn/sua-hat-glucare-plus. Evidence: EVD-4E9770DA004CDC44-mobile-0, EVD-4E9770DA004CDC44-mobile-0-SHOT, EVD-574F286DC706B28A-mobile-1, EVD-574F286DC706B28A-mobile-1-SHOT.

Blockers: No visible safe route was found for goal gio-hang\|checkout\/cart\|\/cart\/?$; direct inventory navigation was not substituted.. Confusion: unreachable_from_observed_ui: no visible safe matching link for gio-hang\|checkout\/cart\|\/cart\/?$. Positive signals: Observed 2 page(s) and 1 verified visible click(s)..

### research — Inspect product information, company attribution, and policy routes through visible links.

Entry: https://addp.vn/. Status: partial. Clicks: 2. Pages: https://addp.vn/, https://addp.vn/gioi-thieu, https://addp.vn/chinh-sach-dat-hang. Evidence: EVD-E953DA582A400457-research-0, EVD-E953DA582A400457-research-0-SHOT, EVD-2D0A822DB858C794-research-1, EVD-2D0A822DB858C794-research-1-SHOT, EVD-F3C54C45BCE8336A-research-2, EVD-F3C54C45BCE8336A-research-2-SHOT.

Blockers: Visible link click failed: page.evaluate: TypeError: Cannot read properties of null (reading 'scrollWidth'). Confusion: none recorded. Positive signals: Observed 3 page(s) and 2 verified visible click(s)..

## 8. UX/UI

### FND-UX-UI-UXUI-001 — Homepage mobile load remains slow in recorded laboratory capture



**Classification:** high severity; measured; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** The run recorded mobile laboratory LCP of 12,504 ms and TTFB of 5,841.7 ms for the homepage. Interpretation: this load delay can postpone the point at which the first viewport becomes useful on this recorded mobile page instance. These are LAB measurements, not field data; no Lighthouse score or field metric is available. The viewport screenshot is collected separately and supports visual review only, not the timing claim.

**Evidence:** EVD-3D15DCDB359887BF (evidence/lighthouse/e4e0c9a45799894e.mobile.render-stabilized-v3_3.lab.json), EVD-9B3746A447795E5D (evidence/screenshots/e4e0c9a45799894e.mobile.render-stabilized-v3_3.initial.viewport.png)

**Requirement links:** REQ-013 — source Trang tính1!C21; original checklist text: - Điểm PageSpeed Insights trên Mobile đạt tối thiểu 85+, thời gian tải thực tế dưới 2.5 giây. Giao diện mobile hiển thị hoàn hảo, không bị tràn viền, vỡ ảnh.; strategic objective source text: - Bán hàng & SEO: Đảm bảo khách hàng dùng điện thoại không bị ức chế do đợi trang tải lâu, giữ vững tỷ lệ chuyển đổi đơn hàng cao.

**Planned task(s):** TASK-014

**ANALYSIS — impact:** user: Potential user impact from the observed page instance.; business: Unknown / not recorded; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Review mobile first-viewport loading and the resources that determine LCP/TTFB; remeasure with the same LAB method after any change..

**Unknowns:** No field performance data is available.; A single recorded capture does not establish the experience for all devices, networks, or visits.; This UX observation does not establish a source-level cause.

## 9. Conversion

No accepted finding is mapped to this section. This does not establish compliance; coverage or expert review may still be incomplete.

## 10. Brand

### FND-BRAND-BRAND-20260928-001 — Company attribution and contact details differ within the Viên An Đường page



**Classification:** medium severity; content_review; confidence 0.9; source best_practice.

**Affected page:** https://addp.vn/vien-an-duong-addp.html (product_detail).

**FACT — observation:** The rendered product contact block says “Facebook: Công ty Cổ phần Dược phẩm ADDP” and gives “Số 22, Ngách 124/49 đường Do Nha, Tổ dân phố Miêu Nha 1, Phường Tây Mỗ, Quận Nam Từ Liêm, Thành phố Hà Nội” and hotline “0243 389 9889.” The same page footer attributes copyright to “Công ty TNHH Dược phẩm ADDP” and lists “Số 22, Ngách 124/49 đường Do Nha, Tổ dân phố Miêu Nha 1, P.Xuân Phương, TP.Hà Nội” and “0904 637 007.” These public page elements present different company-form labels and contact details; the evidence does not establish which details are intended to be authoritative.

**Evidence:** EVD-AD18B204CB25AAFE (evidence/html/db93fc388a5ba278.desktop.render-stabilized-v3_3.rendered.html), EVD-927DDAF696B5D339 (evidence/seo/db93fc388a5ba278.render-stabilized-v3_3.raw.json)

**Requirement links:** No checklist requirement linked; best-practice finding.

**Planned task(s):** TASK-002

**ANALYSIS — impact:** user: Potential user impact from the observed page instance.; business: Unknown / not recorded; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Have the business confirm the intended company attribution, address format, and primary contact channels, then align the product contact block and shared footer if they should represent the same entity and contact point..

**Unknowns:** Whether the two company-form labels refer to separate entities or one intended identity.; Whether the different address forms and telephone numbers are valid alternate contacts or stale page content.; No legal identity or authenticity conclusion is made from this public appearance.

## 11. Homepage

### FND-ANALYTICS-analytics-public-signals-not-observed-sample — No public GTM, GA4 request, or dataLayer signal was observed in the collected page sample



**Classification:** medium severity; measured; confidence 0.75; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** The analytics collector reported gtm=0, ga4_requests_blocked=0, and data_layer_present=false on the homepage in desktop and mobile sessions. The same values recur in the sampled product, category, article, company, search, and policy pages. This is a bounded public-signal observation only; it does not establish that the implementation is absent sitewide. The raw artifact states telemetry was blocked because those requests would be induced by the audit browser. No event was emitted or conversion flow completed.

**Evidence:** EVD-DBF33A19881A487E (evidence/analytics/e4e0c9a45799894e.desktop.render-stabilized-v3_3.json), EVD-04B228A36544C865 (evidence/analytics/e4e0c9a45799894e.mobile.render-stabilized-v3_3.json), EVD-5E1FDAFD6E0F3BD0 (evidence/analytics/7cfd44db842407aa.desktop.render-stabilized-v3_3.json), EVD-2A0768485D1F0097 (evidence/analytics/7cfd44db842407aa.mobile.render-stabilized-v3_3.json), EVD-820A852713ADC090 (evidence/analytics/71458af915c17754.desktop.render-stabilized-v3_3.json), EVD-DAC7815A6168F9B8 (evidence/analytics/71458af915c17754.mobile.render-stabilized-v3_3.json), EVD-0B566D85DC39FA02 (evidence/analytics/d6027b0617e26ca1.desktop.render-stabilized-v3_3.json), EVD-AEA3DB2C2D2E0F53 (evidence/analytics/d6027b0617e26ca1.mobile.render-stabilized-v3_3.json)

**Requirement links:** REQ-014 — source Trang tính1!C22; original checklist text: - Tích hợp Google Tag Manager (GTM), GA4, Meta Pixel và Google Ads Conversion Tracking.   - Bắt buộc bắn sự kiện thành công khi khách bấm đặt hàng và ghi nhận tại Trang Cảm Ơn (Thank You Page).; strategic objective source text: - Tối ưu Marketing: Giúp đo lường chính xác chiến dịch quảng cáo nào ra đơn, tính toán đúng ROAS để tối ưu ngân sách chạy Ads hiệu quả.

**Planned task(s):** TASK-001

**ANALYSIS — impact:** user: Unknown / not recorded; business: Potential business impact; outcome was not measured.; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Review consent-aware public tag loading and approved analytics configuration, then validate event behavior through an authorized non-production test flow and analytics administration evidence..

**Unknowns:** Whether tags load only after consent or under conditions not reached in these bounded sessions.; Whether GTM, GA4, Meta Pixel, or Ads tags exist on uncollected URLs or in deferred configurations.; Whether any backend analytics receipt, attribution, or conversion event is recorded.; Thank-you-page behavior and successful-order event behavior were not inspected; journeys stopped before cart or checkout mutation.

### FND-GEO-AEO-GEO-AEO-001 — Product structured data was not detected on sampled homepage and product pages



**Classification:** medium severity; deterministic; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** The current-run structured-data collector reports valid: 0 and invalid: 0 at the homepage and the sampled product pages https://addp.vn/vien-an-duong-addp.html and https://addp.vn/sui-dovital. This is evidence that no JSON-LD was detected by that collector on these page instances; it does not establish the absence of every structured-data format or a sitewide condition. The same run detected valid BlogPosting JSON-LD on sampled article pages, so the result is page-type-specific in this sample.

**Evidence:** EVD-32CB6452441EDF9E (evidence/schema/e4e0c9a45799894e.desktop.render-stabilized-v3_3.json), EVD-02D7356CC02B574B (evidence/schema/db93fc388a5ba278.desktop.render-stabilized-v3_3.json), EVD-E32F848C405D32E0 (evidence/schema/9f397da04f62a067.desktop.render-stabilized-v3_3.json), EVD-2326A9C7428D947E (evidence/schema/71458af915c17754.desktop.render-stabilized-v3_3.json), EVD-B8786FA90B6CDCB3 (evidence/schema/83ea4ae04acfbe03.desktop.render-stabilized-v3_3.json), EVD-0CC76FEDCFD90652 (evidence/schema/ce718c81120655d4.desktop.render-stabilized-v3_3.json)

**Requirement links:** REQ-010 — source Trang tính1!C17; original checklist text: - Lập trình viên bắt buộc nhúng mã JSON-LD chuẩn cho: Organization (thực thể doanh nghiệp tại Hà Nội), Product (cho 3 sản phẩm), và FAQPage.; strategic objective source text: - AEO & GEO: Giúp máy tính và bot AI đọc hiểu chính xác 100% về thông tin doanh nghiệp, giá sản phẩm, và các câu hỏi thường gặp mà không cần phỏng đoán.

**Planned task(s):** TASK-005

**ANALYSIS — impact:** user: Unknown / not recorded; business: Unknown / not recorded; seo: Potential search impact; search-engine outcomes were not measured.; technical: Technical observation limited to the cited public evidence..

**RECOMMENDATION — direction:** Review public structured data against the stated Organization, Product, and FAQPage requirement for the corresponding page types; validate any proposed markup against visible page facts..

**Unknowns:** Other structured-data syntaxes may exist outside the JSON-LD collector result.; Coverage is limited to sampled URLs; other homepage/product templates may differ.; No conclusion about AI-engine citation or visibility follows from this result.

### FND-PERFORMANCE-PERF-001 — Homepage LAB load metrics are substantially elevated on desktop and mobile



**Classification:** high severity; measured; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** In clean-load LAB captures, desktop recorded LCP 17,700 ms, CLS 0.1651, and TTFB 5,911.5 ms; mobile recorded LCP 12,504 ms, CLS 0.1346, and TTFB 5,841.7 ms. Both captures state synthetic_scroll_before_measurement=false. These are single-run browser measurements under the recorded run conditions, not field experience. The measured LCP is above the checklist's stated 2.5-second target; no PageSpeed score was captured.

**Evidence:** EVD-85956D06B433ABCA (evidence/lighthouse/e4e0c9a45799894e.desktop.render-stabilized-v3_3.lab.json), EVD-3D15DCDB359887BF (evidence/lighthouse/e4e0c9a45799894e.mobile.render-stabilized-v3_3.lab.json)

**Requirement links:** REQ-013 — source Trang tính1!C21; original checklist text: - Điểm PageSpeed Insights trên Mobile đạt tối thiểu 85+, thời gian tải thực tế dưới 2.5 giây. Giao diện mobile hiển thị hoàn hảo, không bị tràn viền, vỡ ảnh.; strategic objective source text: - Bán hàng & SEO: Đảm bảo khách hàng dùng điện thoại không bị ức chế do đợi trang tải lâu, giữ vững tỷ lệ chuyển đổi đơn hàng cao.

**Planned task(s):** TASK-007

**ANALYSIS — impact:** user: Potential user impact from the observed page instance.; business: Unknown / not recorded; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Repeat comparable clean-load measurements on desktop and mobile, inspect the recorded network and resource waterfall for the LCP element and response delays, and verify whether the elevated values persist before prioritizing optimization..

**Unknowns:** Field LCP, CLS, and INP are unavailable; these LAB values do not establish visitor-level Core Web Vitals.; Lighthouse/PageSpeed scores and interaction data were not captured.; No cause is established by the summary metrics alone.; These are single captures; run-to-run variation is unknown.

### FND-STRUCTURED-DATA-STRUCTURED-DATA-001 — Required JSON-LD types were not present in the homepage and three sampled product captures



**Classification:** medium severity; measured; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** The current-run structured-data extracts are empty arrays for the homepage and each of the three sampled product detail URLs on both desktop and mobile: valid=0 and invalid=0. The checklist calls for JSON-LD Organization, Product for three products, and FAQPage. This establishes that those requested JSON-LD types were not captured on these sampled pages; it does not establish absence across the full site. The raw HTML for the Glucare Plus URL contains Product microdata on the page root, so that sample does expose Product markup in a different format. No generator or implementation cause is inferred.

**Evidence:** EVD-32CB6452441EDF9E (evidence/schema/e4e0c9a45799894e.desktop.render-stabilized-v3_3.json), EVD-C16C9A26189A6C8E (evidence/schema/e4e0c9a45799894e.mobile.render-stabilized-v3_3.json), EVD-01FF964BE2B7A2AA (evidence/schema/7cfd44db842407aa.desktop.render-stabilized-v3_3.json), EVD-B1630958C79BC01D (evidence/schema/7cfd44db842407aa.mobile.render-stabilized-v3_3.json), EVD-02D7356CC02B574B (evidence/schema/db93fc388a5ba278.desktop.render-stabilized-v3_3.json), EVD-BDF90743647332F7 (evidence/schema/db93fc388a5ba278.mobile.render-stabilized-v3_3.json), EVD-E32F848C405D32E0 (evidence/schema/9f397da04f62a067.desktop.render-stabilized-v3_3.json), EVD-EDDAD1FAFA69798C (evidence/schema/9f397da04f62a067.mobile.render-stabilized-v3_3.json), EVD-F71EC5745F2AF71B (evidence/html/7cfd44db842407aa.render-stabilized-v3_3.raw.html)

**Requirement links:** REQ-010 — source Trang tính1!C17; original checklist text: - Lập trình viên bắt buộc nhúng mã JSON-LD chuẩn cho: Organization (thực thể doanh nghiệp tại Hà Nội), Product (cho 3 sản phẩm), và FAQPage.; strategic objective source text: - AEO & GEO: Giúp máy tính và bot AI đọc hiểu chính xác 100% về thông tin doanh nghiệp, giá sản phẩm, và các câu hỏi thường gặp mà không cần phỏng đoán.

**Planned task(s):** TASK-013

**ANALYSIS — impact:** user: Unknown / not recorded; business: Unknown / not recorded; seo: Potential search impact; search-engine outcomes were not measured.; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Review the intended structured-data requirement against the sampled output. If the checklist is still authoritative, provide the requested Organization, Product, and FAQPage JSON-LD where the corresponding visible content supports it, and verify every claim against visible page content. Preserve and validate existing Product microdata where appropriate..

**Unknowns:** Whether Organization or FAQPage markup exists on any uncollected URL is unknown.; Whether the three selected product pages represent all products intended by the checklist is unknown; the capture confirms only these three URLs.; The collector extract reports JSON-LD results; it does not establish complete microdata coverage on every sampled page.; Structured-data eligibility or search-result presentation was not tested.; The run reports nine of 25 pages as partial, and four inventory pages have no structured-data evidence record.

### FND-UX-UI-UXUI-001 — Homepage mobile load remains slow in recorded laboratory capture



**Classification:** high severity; measured; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** The run recorded mobile laboratory LCP of 12,504 ms and TTFB of 5,841.7 ms for the homepage. Interpretation: this load delay can postpone the point at which the first viewport becomes useful on this recorded mobile page instance. These are LAB measurements, not field data; no Lighthouse score or field metric is available. The viewport screenshot is collected separately and supports visual review only, not the timing claim.

**Evidence:** EVD-3D15DCDB359887BF (evidence/lighthouse/e4e0c9a45799894e.mobile.render-stabilized-v3_3.lab.json), EVD-9B3746A447795E5D (evidence/screenshots/e4e0c9a45799894e.mobile.render-stabilized-v3_3.initial.viewport.png)

**Requirement links:** REQ-013 — source Trang tính1!C21; original checklist text: - Điểm PageSpeed Insights trên Mobile đạt tối thiểu 85+, thời gian tải thực tế dưới 2.5 giây. Giao diện mobile hiển thị hoàn hảo, không bị tràn viền, vỡ ảnh.; strategic objective source text: - Bán hàng & SEO: Đảm bảo khách hàng dùng điện thoại không bị ức chế do đợi trang tải lâu, giữ vững tỷ lệ chuyển đổi đơn hàng cao.

**Planned task(s):** TASK-014

**ANALYSIS — impact:** user: Potential user impact from the observed page instance.; business: Unknown / not recorded; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Review mobile first-viewport loading and the resources that determine LCP/TTFB; remeasure with the same LAB method after any change..

**Unknowns:** No field performance data is available.; A single recorded capture does not establish the experience for all devices, networks, or visits.; This UX observation does not establish a source-level cause.

## 12. PDP

### FND-BRAND-BRAND-20260928-001 — Company attribution and contact details differ within the Viên An Đường page



**Classification:** medium severity; content_review; confidence 0.9; source best_practice.

**Affected page:** https://addp.vn/vien-an-duong-addp.html (product_detail).

**FACT — observation:** The rendered product contact block says “Facebook: Công ty Cổ phần Dược phẩm ADDP” and gives “Số 22, Ngách 124/49 đường Do Nha, Tổ dân phố Miêu Nha 1, Phường Tây Mỗ, Quận Nam Từ Liêm, Thành phố Hà Nội” and hotline “0243 389 9889.” The same page footer attributes copyright to “Công ty TNHH Dược phẩm ADDP” and lists “Số 22, Ngách 124/49 đường Do Nha, Tổ dân phố Miêu Nha 1, P.Xuân Phương, TP.Hà Nội” and “0904 637 007.” These public page elements present different company-form labels and contact details; the evidence does not establish which details are intended to be authoritative.

**Evidence:** EVD-AD18B204CB25AAFE (evidence/html/db93fc388a5ba278.desktop.render-stabilized-v3_3.rendered.html), EVD-927DDAF696B5D339 (evidence/seo/db93fc388a5ba278.render-stabilized-v3_3.raw.json)

**Requirement links:** No checklist requirement linked; best-practice finding.

**Planned task(s):** TASK-002

**ANALYSIS — impact:** user: Potential user impact from the observed page instance.; business: Unknown / not recorded; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Have the business confirm the intended company attribution, address format, and primary contact channels, then align the product contact block and shared footer if they should represent the same entity and contact point..

**Unknowns:** Whether the two company-form labels refer to separate entities or one intended identity.; Whether the different address forms and telephone numbers are valid alternate contacts or stale page content.; No legal identity or authenticity conclusion is made from this public appearance.

### FND-CONTENT-CONTENT-001 — Glucare Plus detail page exposes placeholder copy in product tabs



**Classification:** medium severity; content_review; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html (product_detail).

**FACT — observation:** The captured rendered product page includes two tabs labeled “Custom Tab 1” and “Custom Tab 2”; the associated tab content contains generic English Lorem ipsum placeholder text. This is directly visible copy on this product detail page. It interrupts the product information flow and does not answer product-specific benefit, ingredient, usage, or support questions. The latter impact is an assessment of the visible copy, not a claim about product facts or health outcomes.

**Evidence:** EVD-C07AE1B67F5FAB1D (evidence/html/7cfd44db842407aa.desktop.render-stabilized-v3_3.rendered.html)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-003

**ANALYSIS — impact:** user: Potential user impact from the observed page instance.; business: Unknown / not recorded; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Replace the generic tab labels and placeholder text with verified, product-specific information, or remove the empty tabs. Have any health-related claims reviewed by an appropriately qualified expert before publication..

**Unknowns:** Whether the tab content is identical on other product pages was not established by this evidence.; No product formulation, efficacy, or medical claims were independently validated.

### FND-CONVERSION-CONV-001 — A Glucare Plus product card shows a zero price beside a separate 9,000 ₫ trial offer



**Classification:** medium severity; content_review; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/sua-hat-glucare-plus (product_detail).

**FACT — observation:** The captured visible text lists “1 Gói Sữa Hạt dinh dưỡng GLUCARE PLUS ...” at 9.000,00 ₫ and later lists “Sữa Hạt dinh dưỡng GLUCARE PLUS - Dùng được cho người tiểu đường” at 0,00 ₫ (repeated). The same page separately promotes a 9.000đ trial pack. These are displayed values on distinct entries; the evidence does not establish whether the 0.00 ₫ listing is intentional, a placeholder, or an error. This may leave shoppers uncertain about the price and offer attached to the product.

**Evidence:** EVD-DF63C483FC434445 (evidence/dom/ebd40bf592e2f9a7.desktop.render-stabilized-v3_3.json), EVD-EA78205F3017C505 (evidence/screenshots/ebd40bf592e2f9a7.desktop.render-stabilized-v3_3.stabilized.full.png)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-004

**ANALYSIS — impact:** user: Unknown / not recorded; business: Potential business impact; outcome was not measured.; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Clarify which Glucare Plus item is the paid product and which is the trial offer; show an actionable accurate price for each entry and make offer terms clear beside its CTA..

**Unknowns:** Whether 0,00 ₫ is an intentional promotion or placeholder.; Whether clicking either product-card action changes quantity, adds an item, or opens another step; no such action was performed.

### FND-TECHNICAL-SEO-SEO-003 — Sampled product pages have missing or generic meta descriptions



**Classification:** medium severity; deterministic; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/sui-dovital (product_detail).

**FACT — observation:** The raw SEO extraction for /sui-dovital reports meta_description as ‘Default Description’. The other two sampled priority product detail pages have descriptions matching their product title rather than a distinct summary: /1goi-sua-hat-dinh-duong-glucare-plus.html and /vien-an-duong-addp.html. These are three sampled product URLs, not a sitewide prevalence estimate.

**Evidence:** EVD-CD4C67022008E5BB (evidence/seo/9f397da04f62a067.render-stabilized-v3_3.raw.json), EVD-325C6659444AD546 (evidence/seo/7cfd44db842407aa.render-stabilized-v3_3.raw.json), EVD-927DDAF696B5D339 (evidence/seo/db93fc388a5ba278.render-stabilized-v3_3.raw.json)

**Requirement links:** REQ-015 — source Trang tính1!C23; original checklist text: - Cài đặt chứng chỉ SSL (HTTPS), tự động tạo Sitemap.xml và file Robots.txt chuẩn SEO, hỗ trợ tùy biến Title/Meta Description linh hoạt.; strategic objective source text: - SEO truyền thống: Xây dựng nền tảng kỹ thuật vững chắc để Google dễ dàng lập chỉ mục (index) và đẩy từ khóa lên top tìm kiếm tự nhiên.

**Planned task(s):** TASK-012

**ANALYSIS — impact:** user: Potential user impact from the observed page instance.; business: Potential business impact; outcome was not measured.; seo: Potential search impact; search-engine outcomes were not measured.; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Write a product-specific meta description for each sampled detail page, replacing the default value and avoiding simple title duplication..

**Unknowns:** Whether search engines currently display these descriptions or rewrite them.; Metadata quality and uniqueness on uncollected product URLs.

## 13. Landing pages

No accepted finding is mapped to this section. This does not establish compliance; coverage or expert review may still be incomplete.

## 14. News/content

### FND-CONTENT-CONTENT-001 — Glucare Plus detail page exposes placeholder copy in product tabs



**Classification:** medium severity; content_review; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html (product_detail).

**FACT — observation:** The captured rendered product page includes two tabs labeled “Custom Tab 1” and “Custom Tab 2”; the associated tab content contains generic English Lorem ipsum placeholder text. This is directly visible copy on this product detail page. It interrupts the product information flow and does not answer product-specific benefit, ingredient, usage, or support questions. The latter impact is an assessment of the visible copy, not a claim about product facts or health outcomes.

**Evidence:** EVD-C07AE1B67F5FAB1D (evidence/html/7cfd44db842407aa.desktop.render-stabilized-v3_3.rendered.html)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-003

**ANALYSIS — impact:** user: Potential user impact from the observed page instance.; business: Unknown / not recorded; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Replace the generic tab labels and placeholder text with verified, product-specific information, or remove the empty tabs. Have any health-related claims reviewed by an appropriately qualified expert before publication..

**Unknowns:** Whether the tab content is identical on other product pages was not established by this evidence.; No product formulation, efficacy, or medical claims were independently validated.

### FND-PERFORMANCE-PERF-003 — Sampled diabetes articles show long LAB LCP on desktop and mobile



**Classification:** high severity; measured; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong (article).

**FACT — observation:** Two individually captured article page instances have high LCP in clean-load LAB measurements: /blog/post/chuan-doan-benh-dai-thao-duong measured 13,432 ms desktop and 18,100 ms mobile; /blog/post/dai-thao-duong-do-viem-tuy measured 18,216 ms desktop and 18,408 ms mobile. All four captures state synthetic_scroll_before_measurement=false. This candidate records these URLs as separate page instances; similarity does not establish a template-wide pattern. The measured values exceed the checklist's 2.5-second target, while field experience is unknown.

**Evidence:** EVD-140275788B638B2B (evidence/lighthouse/71458af915c17754.desktop.render-stabilized-v3_3.lab.json), EVD-EEE8678F6CB7996C (evidence/lighthouse/71458af915c17754.mobile.render-stabilized-v3_3.lab.json), EVD-1043761274B05EFF (evidence/lighthouse/83ea4ae04acfbe03.desktop.render-stabilized-v3_3.lab.json), EVD-381F4D853D891DF0 (evidence/lighthouse/83ea4ae04acfbe03.mobile.render-stabilized-v3_3.lab.json)

**Requirement links:** REQ-013 — source Trang tính1!C21; original checklist text: - Điểm PageSpeed Insights trên Mobile đạt tối thiểu 85+, thời gian tải thực tế dưới 2.5 giây. Giao diện mobile hiển thị hoàn hảo, không bị tràn viền, vỡ ảnh.; strategic objective source text: - Bán hàng & SEO: Đảm bảo khách hàng dùng điện thoại không bị ức chế do đợi trang tải lâu, giữ vững tỷ lệ chuyển đổi đơn hàng cao.

**Planned task(s):** TASK-009

**ANALYSIS — impact:** user: Potential user impact from the observed page instance.; business: Unknown / not recorded; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Repeat measurements for each URL at the same desktop and mobile viewports, compare the LCP element and resource timing in each trace, and assess any shared cause only after direct evidence supports it..

**Unknowns:** Field LCP, CLS, and INP are unavailable.; No Lighthouse/PageSpeed score or interaction data was captured.; The summary does not identify the LCP elements or causes.; Article page captures are not evidence of a shared implementation pattern.

## 15. Health/E-E-A-T/trust

No accepted finding is mapped to this section. This does not establish compliance; coverage or expert review may still be incomplete.

## 16. Technical SEO

### FND-GEO-AEO-GEO-AEO-003 — robots.txt is reachable, but AI crawler directives are not explicit in the captured rules



**Classification:** medium severity; content_review; confidence 0.75; source checklist.

**Affected page:** https://addp.vn/robots.txt (sitewide).

**FACT — observation:** The robots.txt endpoint returned HTTP 200. Its captured content contains a general User-agent: * section and multiple Disallow rules, but no explicit named rules for ChatGPT-User, PerplexityBot, or Google-Extended. The captured document alone does not establish how each crawler interprets the wildcard rules or whether other access controls apply.

**Evidence:** EVD-C51AC48D3DB98538 (evidence/discovery/robots.txt)

**Requirement links:** REQ-011 — source Trang tính1!C18; original checklist text: - Cấu hình file robots.txt tuyệt đối không chặn các con bot AI (ChatGPT-User, PerplexityBot, Google-Extended). Cho phép đọc thì thương hiệu mới được AI gợi ý.; strategic objective source text: - GEO (Tối thượng): Tránh việc website trở nên "vô hình" trước các cỗ máy trả lời thế hệ mới, đảm bảo thương hiệu ADDP luôn xuất hiện trong các câu trả lời gợi ý mua hàng của AI.

**Planned task(s):** TASK-006

**ANALYSIS — impact:** user: Unknown / not recorded; business: Unknown / not recorded; seo: Potential search impact; search-engine outcomes were not measured.; technical: Technical observation limited to the cited public evidence..

**RECOMMENDATION — direction:** Review intended access policy for each named crawler against the complete robots directives and verify public endpoint behavior for the relevant paths..

**Unknowns:** Crawler behavior and actual crawling are not evidenced.; No inference about AI-engine visibility or recommendation is supported.; Robots directives do not prove access through or restriction by other mechanisms.

### FND-TECHNICAL-SEO-SEO-001 — The advertised sitemap endpoints return 404



**Classification:** high severity; measured; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/sitemap.xml and https://addp.vn/pub/sitemap.xml (sitewide).

**FACT — observation:** Both /sitemap.xml and /pub/sitemap.xml returned HTTP 404 in this run. robots.txt advertises https://addp.vn/pub/sitemap.xml. This establishes failure at these sampled endpoints during collection; it does not establish whether a sitemap is available at another URL.

**Evidence:** EVD-A57DC932D580B784 (evidence/discovery/sitemap-52618716ffbf735c.xml), EVD-B093A16D09E3A37E (evidence/discovery/sitemap-18ff84938bf215b3.xml), EVD-C51AC48D3DB98538 (evidence/discovery/robots.txt)

**Requirement links:** REQ-015 — source Trang tính1!C23; original checklist text: - Cài đặt chứng chỉ SSL (HTTPS), tự động tạo Sitemap.xml và file Robots.txt chuẩn SEO, hỗ trợ tùy biến Title/Meta Description linh hoạt.; strategic objective source text: - SEO truyền thống: Xây dựng nền tảng kỹ thuật vững chắc để Google dễ dàng lập chỉ mục (index) và đẩy từ khóa lên top tìm kiếm tự nhiên.

**Planned task(s):** TASK-010

**ANALYSIS — impact:** user: Unknown / not recorded; business: Unknown / not recorded; seo: Potential search impact; search-engine outcomes were not measured.; technical: Technical observation limited to the cited public evidence..

**RECOMMENDATION — direction:** Investigate the published sitemap location and its HTTP response; update the robots.txt Sitemap directive if the canonical sitemap endpoint differs..

**Unknowns:** Whether another sitemap URL is valid.; Whether crawlers have an alternate discovery source or cached sitemap.; Actual search-engine discovery or indexing impact.

**CONFIRMED EXTERNAL FACTS:** https://addp.vn/robots.txt returned HTTP 200 and its captured contents include 'Sitemap: https://addp.vn/pub/sitemap.xml'. Evidence: EVD-C51AC48D3DB98538.; https://addp.vn/pub/sitemap.xml returned HTTP 404. Evidence: EVD-B093A16D09E3A37E.; https://addp.vn/sitemap.xml returned HTTP 404. Evidence: EVD-A57DC932D580B784.

**PROBABLE CAUSES (unverified):** The advertised sitemap may be missing from the configured path, or the route may be misconfigured; this remains a hypothesis.

**DEVELOPER INVESTIGATION:** Verify the intended public sitemap endpoint and its response status and XML content from an external client.; Check that the robots.txt Sitemap directive points to the verified endpoint.

### FND-TECHNICAL-SEO-SEO-002 — Robots policy uses a broad wildcard rule and advertises an unavailable sitemap



**Classification:** medium severity; deterministic; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/robots.txt (sitewide).

**FACT — observation:** The collected robots.txt contains a single User-agent: * group with Disallow: /*? and lists the /pub/sitemap.xml endpoint, which returned 404 in this run. No named AI user-agent groups appear in the collected file. The wildcard query-string disallow may restrict crawl access to parameterized URLs; actual effect is URL/rule specific.

**Evidence:** EVD-C51AC48D3DB98538 (evidence/discovery/robots.txt), EVD-B093A16D09E3A37E (evidence/discovery/sitemap-18ff84938bf215b3.xml)

**Requirement links:** REQ-011 — source Trang tính1!C18; original checklist text: - Cấu hình file robots.txt tuyệt đối không chặn các con bot AI (ChatGPT-User, PerplexityBot, Google-Extended). Cho phép đọc thì thương hiệu mới được AI gợi ý.; strategic objective source text: - GEO (Tối thượng): Tránh việc website trở nên "vô hình" trước các cỗ máy trả lời thế hệ mới, đảm bảo thương hiệu ADDP luôn xuất hiện trong các câu trả lời gợi ý mua hàng của AI.; REQ-015 — source Trang tính1!C23; original checklist text: - Cài đặt chứng chỉ SSL (HTTPS), tự động tạo Sitemap.xml và file Robots.txt chuẩn SEO, hỗ trợ tùy biến Title/Meta Description linh hoạt.; strategic objective source text: - SEO truyền thống: Xây dựng nền tảng kỹ thuật vững chắc để Google dễ dàng lập chỉ mục (index) và đẩy từ khóa lên top tìm kiếm tự nhiên.

**Planned task(s):** TASK-011

**ANALYSIS — impact:** user: Unknown / not recorded; business: Unknown / not recorded; seo: Potential search impact; search-engine outcomes were not measured.; technical: Technical observation limited to the cited public evidence..

**RECOMMENDATION — direction:** Review whether query-string URLs that should be crawled are covered by /*?, and align the advertised sitemap URL with an endpoint that responds successfully. Confirm intended AI crawler policy explicitly before adding or changing user-agent directives..

**Unknowns:** Which parameterized URLs are intended to be discoverable.; Whether the site intends to allow all named AI crawlers; absence of dedicated groups alone does not establish a block under the wildcard rule.; Actual crawler behavior and indexed URL effects.

### FND-TECHNICAL-SEO-SEO-003 — Sampled product pages have missing or generic meta descriptions



**Classification:** medium severity; deterministic; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/sui-dovital (product_detail).

**FACT — observation:** The raw SEO extraction for /sui-dovital reports meta_description as ‘Default Description’. The other two sampled priority product detail pages have descriptions matching their product title rather than a distinct summary: /1goi-sua-hat-dinh-duong-glucare-plus.html and /vien-an-duong-addp.html. These are three sampled product URLs, not a sitewide prevalence estimate.

**Evidence:** EVD-CD4C67022008E5BB (evidence/seo/9f397da04f62a067.render-stabilized-v3_3.raw.json), EVD-325C6659444AD546 (evidence/seo/7cfd44db842407aa.render-stabilized-v3_3.raw.json), EVD-927DDAF696B5D339 (evidence/seo/db93fc388a5ba278.render-stabilized-v3_3.raw.json)

**Requirement links:** REQ-015 — source Trang tính1!C23; original checklist text: - Cài đặt chứng chỉ SSL (HTTPS), tự động tạo Sitemap.xml và file Robots.txt chuẩn SEO, hỗ trợ tùy biến Title/Meta Description linh hoạt.; strategic objective source text: - SEO truyền thống: Xây dựng nền tảng kỹ thuật vững chắc để Google dễ dàng lập chỉ mục (index) và đẩy từ khóa lên top tìm kiếm tự nhiên.

**Planned task(s):** TASK-012

**ANALYSIS — impact:** user: Potential user impact from the observed page instance.; business: Potential business impact; outcome was not measured.; seo: Potential search impact; search-engine outcomes were not measured.; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Write a product-specific meta description for each sampled detail page, replacing the default value and avoiding simple title duplication..

**Unknowns:** Whether search engines currently display these descriptions or rewrite them.; Metadata quality and uniqueness on uncollected product URLs.

## 17. GEO/AEO

No accepted finding is mapped to this section. This does not establish compliance; coverage or expert review may still be incomplete.

## 18. Structured data

### FND-GEO-AEO-GEO-AEO-001 — Product structured data was not detected on sampled homepage and product pages



**Classification:** medium severity; deterministic; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** The current-run structured-data collector reports valid: 0 and invalid: 0 at the homepage and the sampled product pages https://addp.vn/vien-an-duong-addp.html and https://addp.vn/sui-dovital. This is evidence that no JSON-LD was detected by that collector on these page instances; it does not establish the absence of every structured-data format or a sitewide condition. The same run detected valid BlogPosting JSON-LD on sampled article pages, so the result is page-type-specific in this sample.

**Evidence:** EVD-32CB6452441EDF9E (evidence/schema/e4e0c9a45799894e.desktop.render-stabilized-v3_3.json), EVD-02D7356CC02B574B (evidence/schema/db93fc388a5ba278.desktop.render-stabilized-v3_3.json), EVD-E32F848C405D32E0 (evidence/schema/9f397da04f62a067.desktop.render-stabilized-v3_3.json), EVD-2326A9C7428D947E (evidence/schema/71458af915c17754.desktop.render-stabilized-v3_3.json), EVD-B8786FA90B6CDCB3 (evidence/schema/83ea4ae04acfbe03.desktop.render-stabilized-v3_3.json), EVD-0CC76FEDCFD90652 (evidence/schema/ce718c81120655d4.desktop.render-stabilized-v3_3.json)

**Requirement links:** REQ-010 — source Trang tính1!C17; original checklist text: - Lập trình viên bắt buộc nhúng mã JSON-LD chuẩn cho: Organization (thực thể doanh nghiệp tại Hà Nội), Product (cho 3 sản phẩm), và FAQPage.; strategic objective source text: - AEO & GEO: Giúp máy tính và bot AI đọc hiểu chính xác 100% về thông tin doanh nghiệp, giá sản phẩm, và các câu hỏi thường gặp mà không cần phỏng đoán.

**Planned task(s):** TASK-005

**ANALYSIS — impact:** user: Unknown / not recorded; business: Unknown / not recorded; seo: Potential search impact; search-engine outcomes were not measured.; technical: Technical observation limited to the cited public evidence..

**RECOMMENDATION — direction:** Review public structured data against the stated Organization, Product, and FAQPage requirement for the corresponding page types; validate any proposed markup against visible page facts..

**Unknowns:** Other structured-data syntaxes may exist outside the JSON-LD collector result.; Coverage is limited to sampled URLs; other homepage/product templates may differ.; No conclusion about AI-engine citation or visibility follows from this result.

### FND-STRUCTURED-DATA-STRUCTURED-DATA-001 — Required JSON-LD types were not present in the homepage and three sampled product captures



**Classification:** medium severity; measured; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** The current-run structured-data extracts are empty arrays for the homepage and each of the three sampled product detail URLs on both desktop and mobile: valid=0 and invalid=0. The checklist calls for JSON-LD Organization, Product for three products, and FAQPage. This establishes that those requested JSON-LD types were not captured on these sampled pages; it does not establish absence across the full site. The raw HTML for the Glucare Plus URL contains Product microdata on the page root, so that sample does expose Product markup in a different format. No generator or implementation cause is inferred.

**Evidence:** EVD-32CB6452441EDF9E (evidence/schema/e4e0c9a45799894e.desktop.render-stabilized-v3_3.json), EVD-C16C9A26189A6C8E (evidence/schema/e4e0c9a45799894e.mobile.render-stabilized-v3_3.json), EVD-01FF964BE2B7A2AA (evidence/schema/7cfd44db842407aa.desktop.render-stabilized-v3_3.json), EVD-B1630958C79BC01D (evidence/schema/7cfd44db842407aa.mobile.render-stabilized-v3_3.json), EVD-02D7356CC02B574B (evidence/schema/db93fc388a5ba278.desktop.render-stabilized-v3_3.json), EVD-BDF90743647332F7 (evidence/schema/db93fc388a5ba278.mobile.render-stabilized-v3_3.json), EVD-E32F848C405D32E0 (evidence/schema/9f397da04f62a067.desktop.render-stabilized-v3_3.json), EVD-EDDAD1FAFA69798C (evidence/schema/9f397da04f62a067.mobile.render-stabilized-v3_3.json), EVD-F71EC5745F2AF71B (evidence/html/7cfd44db842407aa.render-stabilized-v3_3.raw.html)

**Requirement links:** REQ-010 — source Trang tính1!C17; original checklist text: - Lập trình viên bắt buộc nhúng mã JSON-LD chuẩn cho: Organization (thực thể doanh nghiệp tại Hà Nội), Product (cho 3 sản phẩm), và FAQPage.; strategic objective source text: - AEO & GEO: Giúp máy tính và bot AI đọc hiểu chính xác 100% về thông tin doanh nghiệp, giá sản phẩm, và các câu hỏi thường gặp mà không cần phỏng đoán.

**Planned task(s):** TASK-013

**ANALYSIS — impact:** user: Unknown / not recorded; business: Unknown / not recorded; seo: Potential search impact; search-engine outcomes were not measured.; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Review the intended structured-data requirement against the sampled output. If the checklist is still authoritative, provide the requested Organization, Product, and FAQPage JSON-LD where the corresponding visible content supports it, and verify every claim against visible page content. Preserve and validate existing Product microdata where appropriate..

**Unknowns:** Whether Organization or FAQPage markup exists on any uncollected URL is unknown.; Whether the three selected product pages represent all products intended by the checklist is unknown; the capture confirms only these three URLs.; The collector extract reports JSON-LD results; it does not establish complete microdata coverage on every sampled page.; Structured-data eligibility or search-result presentation was not tested.; The run reports nine of 25 pages as partial, and four inventory pages have no structured-data evidence record.

## 19. Performance

### FND-PERFORMANCE-PERF-001 — Homepage LAB load metrics are substantially elevated on desktop and mobile



**Classification:** high severity; measured; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** In clean-load LAB captures, desktop recorded LCP 17,700 ms, CLS 0.1651, and TTFB 5,911.5 ms; mobile recorded LCP 12,504 ms, CLS 0.1346, and TTFB 5,841.7 ms. Both captures state synthetic_scroll_before_measurement=false. These are single-run browser measurements under the recorded run conditions, not field experience. The measured LCP is above the checklist's stated 2.5-second target; no PageSpeed score was captured.

**Evidence:** EVD-85956D06B433ABCA (evidence/lighthouse/e4e0c9a45799894e.desktop.render-stabilized-v3_3.lab.json), EVD-3D15DCDB359887BF (evidence/lighthouse/e4e0c9a45799894e.mobile.render-stabilized-v3_3.lab.json)

**Requirement links:** REQ-013 — source Trang tính1!C21; original checklist text: - Điểm PageSpeed Insights trên Mobile đạt tối thiểu 85+, thời gian tải thực tế dưới 2.5 giây. Giao diện mobile hiển thị hoàn hảo, không bị tràn viền, vỡ ảnh.; strategic objective source text: - Bán hàng & SEO: Đảm bảo khách hàng dùng điện thoại không bị ức chế do đợi trang tải lâu, giữ vững tỷ lệ chuyển đổi đơn hàng cao.

**Planned task(s):** TASK-007

**ANALYSIS — impact:** user: Potential user impact from the observed page instance.; business: Unknown / not recorded; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Repeat comparable clean-load measurements on desktop and mobile, inspect the recorded network and resource waterfall for the LCP element and response delays, and verify whether the elevated values persist before prioritizing optimization..

**Unknowns:** Field LCP, CLS, and INP are unavailable; these LAB values do not establish visitor-level Core Web Vitals.; Lighthouse/PageSpeed scores and interaction data were not captured.; No cause is established by the summary metrics alone.; These are single captures; run-to-run variation is unknown.

### FND-PERFORMANCE-PERF-002 — Diabetes-condition page has high LAB LCP and CLS in both captured viewports



**Classification:** high severity; measured; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/benh-ly (other).

**FACT — observation:** The desktop clean-load LAB capture recorded LCP 19,308 ms and CLS 0.6347; the mobile capture recorded LCP 22,128 ms and CLS 0.5932. Both state synthetic_scroll_before_measurement=false. The values are page-instance observations from this run and exceed the checklist's 2.5-second load target by a wide margin for LCP. They do not establish field performance or the source of the shifts.

**Evidence:** EVD-035E196C34BF6621 (evidence/lighthouse/65e3d78cc6db4646.desktop.render-stabilized-v3_3.lab.json), EVD-D2E949A54A61C783 (evidence/lighthouse/65e3d78cc6db4646.mobile.render-stabilized-v3_3.lab.json)

**Requirement links:** REQ-013 — source Trang tính1!C21; original checklist text: - Điểm PageSpeed Insights trên Mobile đạt tối thiểu 85+, thời gian tải thực tế dưới 2.5 giây. Giao diện mobile hiển thị hoàn hảo, không bị tràn viền, vỡ ảnh.; strategic objective source text: - Bán hàng & SEO: Đảm bảo khách hàng dùng điện thoại không bị ức chế do đợi trang tải lâu, giữ vững tỷ lệ chuyển đổi đơn hàng cao.

**Planned task(s):** TASK-008

**ANALYSIS — impact:** user: Potential user impact from the observed page instance.; business: Unknown / not recorded; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Repeat clean-load captures under comparable desktop and mobile conditions, then inspect the LCP element and layout-shift sources in the corresponding trace before selecting an optimization..

**Unknowns:** Field metrics are unavailable; these values are LAB only.; No Lighthouse/PageSpeed score or interaction data is available.; The metric summary does not identify the LCP element, shift sources, or probable technical cause.; Repeatability and impact for other URLs are unknown.

### FND-PERFORMANCE-PERF-003 — Sampled diabetes articles show long LAB LCP on desktop and mobile



**Classification:** high severity; measured; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong (article).

**FACT — observation:** Two individually captured article page instances have high LCP in clean-load LAB measurements: /blog/post/chuan-doan-benh-dai-thao-duong measured 13,432 ms desktop and 18,100 ms mobile; /blog/post/dai-thao-duong-do-viem-tuy measured 18,216 ms desktop and 18,408 ms mobile. All four captures state synthetic_scroll_before_measurement=false. This candidate records these URLs as separate page instances; similarity does not establish a template-wide pattern. The measured values exceed the checklist's 2.5-second target, while field experience is unknown.

**Evidence:** EVD-140275788B638B2B (evidence/lighthouse/71458af915c17754.desktop.render-stabilized-v3_3.lab.json), EVD-EEE8678F6CB7996C (evidence/lighthouse/71458af915c17754.mobile.render-stabilized-v3_3.lab.json), EVD-1043761274B05EFF (evidence/lighthouse/83ea4ae04acfbe03.desktop.render-stabilized-v3_3.lab.json), EVD-381F4D853D891DF0 (evidence/lighthouse/83ea4ae04acfbe03.mobile.render-stabilized-v3_3.lab.json)

**Requirement links:** REQ-013 — source Trang tính1!C21; original checklist text: - Điểm PageSpeed Insights trên Mobile đạt tối thiểu 85+, thời gian tải thực tế dưới 2.5 giây. Giao diện mobile hiển thị hoàn hảo, không bị tràn viền, vỡ ảnh.; strategic objective source text: - Bán hàng & SEO: Đảm bảo khách hàng dùng điện thoại không bị ức chế do đợi trang tải lâu, giữ vững tỷ lệ chuyển đổi đơn hàng cao.

**Planned task(s):** TASK-009

**ANALYSIS — impact:** user: Potential user impact from the observed page instance.; business: Unknown / not recorded; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Repeat measurements for each URL at the same desktop and mobile viewports, compare the LCP element and resource timing in each trace, and assess any shared cause only after direct evidence supports it..

**Unknowns:** Field LCP, CLS, and INP are unavailable.; No Lighthouse/PageSpeed score or interaction data was captured.; The summary does not identify the LCP elements or causes.; Article page captures are not evidence of a shared implementation pattern.

## 20. Analytics

### FND-ANALYTICS-analytics-public-signals-not-observed-sample — No public GTM, GA4 request, or dataLayer signal was observed in the collected page sample



**Classification:** medium severity; measured; confidence 0.75; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** The analytics collector reported gtm=0, ga4_requests_blocked=0, and data_layer_present=false on the homepage in desktop and mobile sessions. The same values recur in the sampled product, category, article, company, search, and policy pages. This is a bounded public-signal observation only; it does not establish that the implementation is absent sitewide. The raw artifact states telemetry was blocked because those requests would be induced by the audit browser. No event was emitted or conversion flow completed.

**Evidence:** EVD-DBF33A19881A487E (evidence/analytics/e4e0c9a45799894e.desktop.render-stabilized-v3_3.json), EVD-04B228A36544C865 (evidence/analytics/e4e0c9a45799894e.mobile.render-stabilized-v3_3.json), EVD-5E1FDAFD6E0F3BD0 (evidence/analytics/7cfd44db842407aa.desktop.render-stabilized-v3_3.json), EVD-2A0768485D1F0097 (evidence/analytics/7cfd44db842407aa.mobile.render-stabilized-v3_3.json), EVD-820A852713ADC090 (evidence/analytics/71458af915c17754.desktop.render-stabilized-v3_3.json), EVD-DAC7815A6168F9B8 (evidence/analytics/71458af915c17754.mobile.render-stabilized-v3_3.json), EVD-0B566D85DC39FA02 (evidence/analytics/d6027b0617e26ca1.desktop.render-stabilized-v3_3.json), EVD-AEA3DB2C2D2E0F53 (evidence/analytics/d6027b0617e26ca1.mobile.render-stabilized-v3_3.json)

**Requirement links:** REQ-014 — source Trang tính1!C22; original checklist text: - Tích hợp Google Tag Manager (GTM), GA4, Meta Pixel và Google Ads Conversion Tracking.   - Bắt buộc bắn sự kiện thành công khi khách bấm đặt hàng và ghi nhận tại Trang Cảm Ơn (Thank You Page).; strategic objective source text: - Tối ưu Marketing: Giúp đo lường chính xác chiến dịch quảng cáo nào ra đơn, tính toán đúng ROAS để tối ưu ngân sách chạy Ads hiệu quả.

**Planned task(s):** TASK-001

**ANALYSIS — impact:** user: Unknown / not recorded; business: Potential business impact; outcome was not measured.; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Review consent-aware public tag loading and approved analytics configuration, then validate event behavior through an authorized non-production test flow and analytics administration evidence..

**Unknowns:** Whether tags load only after consent or under conditions not reached in these bounded sessions.; Whether GTM, GA4, Meta Pixel, or Ads tags exist on uncollected URLs or in deferred configurations.; Whether any backend analytics receipt, attribution, or conversion event is recorded.; Thank-you-page behavior and successful-order event behavior were not inspected; journeys stopped before cart or checkout mutation.

## 21. Cart/Checkout

No accepted finding is mapped to this section. This does not establish compliance; coverage or expert review may still be incomplete.

## 22. KiotViet externally observable behavior

No accepted finding is mapped to this section. This does not establish compliance; coverage or expert review may still be incomplete.

## 23. External technical diagnostics

### FND-TECHNICAL-SEO-SEO-001 — The advertised sitemap endpoints return 404



**Classification:** high severity; measured; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/sitemap.xml and https://addp.vn/pub/sitemap.xml (sitewide).

**FACT — observation:** Both /sitemap.xml and /pub/sitemap.xml returned HTTP 404 in this run. robots.txt advertises https://addp.vn/pub/sitemap.xml. This establishes failure at these sampled endpoints during collection; it does not establish whether a sitemap is available at another URL.

**Evidence:** EVD-A57DC932D580B784 (evidence/discovery/sitemap-52618716ffbf735c.xml), EVD-B093A16D09E3A37E (evidence/discovery/sitemap-18ff84938bf215b3.xml), EVD-C51AC48D3DB98538 (evidence/discovery/robots.txt)

**Requirement links:** REQ-015 — source Trang tính1!C23; original checklist text: - Cài đặt chứng chỉ SSL (HTTPS), tự động tạo Sitemap.xml và file Robots.txt chuẩn SEO, hỗ trợ tùy biến Title/Meta Description linh hoạt.; strategic objective source text: - SEO truyền thống: Xây dựng nền tảng kỹ thuật vững chắc để Google dễ dàng lập chỉ mục (index) và đẩy từ khóa lên top tìm kiếm tự nhiên.

**Planned task(s):** TASK-010

**ANALYSIS — impact:** user: Unknown / not recorded; business: Unknown / not recorded; seo: Potential search impact; search-engine outcomes were not measured.; technical: Technical observation limited to the cited public evidence..

**RECOMMENDATION — direction:** Investigate the published sitemap location and its HTTP response; update the robots.txt Sitemap directive if the canonical sitemap endpoint differs..

**Unknowns:** Whether another sitemap URL is valid.; Whether crawlers have an alternate discovery source or cached sitemap.; Actual search-engine discovery or indexing impact.

**CONFIRMED EXTERNAL FACTS:** https://addp.vn/robots.txt returned HTTP 200 and its captured contents include 'Sitemap: https://addp.vn/pub/sitemap.xml'. Evidence: EVD-C51AC48D3DB98538.; https://addp.vn/pub/sitemap.xml returned HTTP 404. Evidence: EVD-B093A16D09E3A37E.; https://addp.vn/sitemap.xml returned HTTP 404. Evidence: EVD-A57DC932D580B784.

**PROBABLE CAUSES (unverified):** The advertised sitemap may be missing from the configured path, or the route may be misconfigured; this remains a hypothesis.

**DEVELOPER INVESTIGATION:** Verify the intended public sitemap endpoint and its response status and XML content from an external client.; Check that the robots.txt Sitemap directive points to the verified endpoint.

## 24. Cross-site consistency

No accepted finding is mapped to this section. This does not establish compliance; coverage or expert review may still be incomplete.

## 25. Findings by severity

### critical

None.

### high

- FND-PERFORMANCE-PERF-001: Homepage LAB load metrics are substantially elevated on desktop and mobile — evidence EVD-85956D06B433ABCA, EVD-3D15DCDB359887BF; requirements REQ-013
- FND-PERFORMANCE-PERF-002: Diabetes-condition page has high LAB LCP and CLS in both captured viewports — evidence EVD-035E196C34BF6621, EVD-D2E949A54A61C783; requirements REQ-013
- FND-PERFORMANCE-PERF-003: Sampled diabetes articles show long LAB LCP on desktop and mobile — evidence EVD-140275788B638B2B, EVD-EEE8678F6CB7996C, EVD-1043761274B05EFF, EVD-381F4D853D891DF0; requirements REQ-013
- FND-TECHNICAL-SEO-SEO-001: The advertised sitemap endpoints return 404 — evidence EVD-A57DC932D580B784, EVD-B093A16D09E3A37E, EVD-C51AC48D3DB98538; requirements REQ-015
- FND-UX-UI-UXUI-001: Homepage mobile load remains slow in recorded laboratory capture — evidence EVD-3D15DCDB359887BF, EVD-9B3746A447795E5D; requirements REQ-013

### medium

- FND-ANALYTICS-analytics-public-signals-not-observed-sample: No public GTM, GA4 request, or dataLayer signal was observed in the collected page sample — evidence EVD-DBF33A19881A487E, EVD-04B228A36544C865, EVD-5E1FDAFD6E0F3BD0, EVD-2A0768485D1F0097, EVD-820A852713ADC090, EVD-DAC7815A6168F9B8, EVD-0B566D85DC39FA02, EVD-AEA3DB2C2D2E0F53; requirements REQ-014
- FND-BRAND-BRAND-20260928-001: Company attribution and contact details differ within the Viên An Đường page — evidence EVD-AD18B204CB25AAFE, EVD-927DDAF696B5D339; requirements best practice
- FND-CONTENT-CONTENT-001: Glucare Plus detail page exposes placeholder copy in product tabs — evidence EVD-C07AE1B67F5FAB1D; requirements REQ-007
- FND-CONVERSION-CONV-001: A Glucare Plus product card shows a zero price beside a separate 9,000 ₫ trial offer — evidence EVD-DF63C483FC434445, EVD-EA78205F3017C505; requirements REQ-007
- FND-GEO-AEO-GEO-AEO-001: Product structured data was not detected on sampled homepage and product pages — evidence EVD-32CB6452441EDF9E, EVD-02D7356CC02B574B, EVD-E32F848C405D32E0, EVD-2326A9C7428D947E, EVD-B8786FA90B6CDCB3, EVD-0CC76FEDCFD90652; requirements REQ-010
- FND-GEO-AEO-GEO-AEO-003: robots.txt is reachable, but AI crawler directives are not explicit in the captured rules — evidence EVD-C51AC48D3DB98538; requirements REQ-011
- FND-TECHNICAL-SEO-SEO-002: Robots policy uses a broad wildcard rule and advertises an unavailable sitemap — evidence EVD-C51AC48D3DB98538, EVD-B093A16D09E3A37E; requirements REQ-011, REQ-015
- FND-TECHNICAL-SEO-SEO-003: Sampled product pages have missing or generic meta descriptions — evidence EVD-CD4C67022008E5BB, EVD-325C6659444AD546, EVD-927DDAF696B5D339; requirements REQ-015
- FND-STRUCTURED-DATA-STRUCTURED-DATA-001: Required JSON-LD types were not present in the homepage and three sampled product captures — evidence EVD-32CB6452441EDF9E, EVD-C16C9A26189A6C8E, EVD-01FF964BE2B7A2AA, EVD-B1630958C79BC01D, EVD-02D7356CC02B574B, EVD-BDF90743647332F7, EVD-E32F848C405D32E0, EVD-EDDAD1FAFA69798C, EVD-F71EC5745F2AF71B; requirements REQ-010

### low

None.

## 26. Unknown/blocked

- Manual review: Unknown / not recorded — Evidence supports question-led headings, but requirement fulfillment and answer-length/editorial assessment need manual content review; do not infer failure from an unestablished FAQ block..
- Manual review: Unknown / not recorded — Raw capture supports presence of quoted health claims only; medical truth, substantiation, suitability, and regulatory status require qualified review..
- Manual review: Unknown / not recorded — Raw capture supports that diagnostic thresholds and advice occur in the article; accuracy, currency, sourcing, and attribution require qualified clinical/editorial review..
- FND-ANALYTICS-analytics-public-signals-not-observed-sample: Whether tags load only after consent or under conditions not reached in these bounded sessions..
- FND-ANALYTICS-analytics-public-signals-not-observed-sample: Whether GTM, GA4, Meta Pixel, or Ads tags exist on uncollected URLs or in deferred configurations..
- FND-ANALYTICS-analytics-public-signals-not-observed-sample: Whether any backend analytics receipt, attribution, or conversion event is recorded..
- FND-ANALYTICS-analytics-public-signals-not-observed-sample: Thank-you-page behavior and successful-order event behavior were not inspected; journeys stopped before cart or checkout mutation..
- FND-BRAND-BRAND-20260928-001: Whether the two company-form labels refer to separate entities or one intended identity..
- FND-BRAND-BRAND-20260928-001: Whether the different address forms and telephone numbers are valid alternate contacts or stale page content..
- FND-BRAND-BRAND-20260928-001: No legal identity or authenticity conclusion is made from this public appearance..
- FND-CONTENT-CONTENT-001: Whether the tab content is identical on other product pages was not established by this evidence..
- FND-CONTENT-CONTENT-001: No product formulation, efficacy, or medical claims were independently validated..
- FND-CONVERSION-CONV-001: Whether 0,00 ₫ is an intentional promotion or placeholder..
- FND-CONVERSION-CONV-001: Whether clicking either product-card action changes quantity, adds an item, or opens another step; no such action was performed..
- FND-GEO-AEO-GEO-AEO-001: Other structured-data syntaxes may exist outside the JSON-LD collector result..
- FND-GEO-AEO-GEO-AEO-001: Coverage is limited to sampled URLs; other homepage/product templates may differ..
- FND-GEO-AEO-GEO-AEO-001: No conclusion about AI-engine citation or visibility follows from this result..
- FND-GEO-AEO-GEO-AEO-003: Crawler behavior and actual crawling are not evidenced..
- FND-GEO-AEO-GEO-AEO-003: No inference about AI-engine visibility or recommendation is supported..
- FND-GEO-AEO-GEO-AEO-003: Robots directives do not prove access through or restriction by other mechanisms..
- FND-PERFORMANCE-PERF-001: Field LCP, CLS, and INP are unavailable; these LAB values do not establish visitor-level Core Web Vitals..
- FND-PERFORMANCE-PERF-001: Lighthouse/PageSpeed scores and interaction data were not captured..
- FND-PERFORMANCE-PERF-001: No cause is established by the summary metrics alone..
- FND-PERFORMANCE-PERF-001: These are single captures; run-to-run variation is unknown..
- FND-PERFORMANCE-PERF-002: Field metrics are unavailable; these values are LAB only..
- FND-PERFORMANCE-PERF-002: No Lighthouse/PageSpeed score or interaction data is available..
- FND-PERFORMANCE-PERF-002: The metric summary does not identify the LCP element, shift sources, or probable technical cause..
- FND-PERFORMANCE-PERF-002: Repeatability and impact for other URLs are unknown..
- FND-PERFORMANCE-PERF-003: Field LCP, CLS, and INP are unavailable..
- FND-PERFORMANCE-PERF-003: No Lighthouse/PageSpeed score or interaction data was captured..
- FND-PERFORMANCE-PERF-003: The summary does not identify the LCP elements or causes..
- FND-PERFORMANCE-PERF-003: Article page captures are not evidence of a shared implementation pattern..
- FND-TECHNICAL-SEO-SEO-001: Whether another sitemap URL is valid..
- FND-TECHNICAL-SEO-SEO-001: Whether crawlers have an alternate discovery source or cached sitemap..
- FND-TECHNICAL-SEO-SEO-001: Actual search-engine discovery or indexing impact..
- FND-TECHNICAL-SEO-SEO-002: Which parameterized URLs are intended to be discoverable..
- FND-TECHNICAL-SEO-SEO-002: Whether the site intends to allow all named AI crawlers; absence of dedicated groups alone does not establish a block under the wildcard rule..
- FND-TECHNICAL-SEO-SEO-002: Actual crawler behavior and indexed URL effects..
- FND-TECHNICAL-SEO-SEO-003: Whether search engines currently display these descriptions or rewrite them..
- FND-TECHNICAL-SEO-SEO-003: Metadata quality and uniqueness on uncollected product URLs..
- FND-STRUCTURED-DATA-STRUCTURED-DATA-001: Whether Organization or FAQPage markup exists on any uncollected URL is unknown..
- FND-STRUCTURED-DATA-STRUCTURED-DATA-001: Whether the three selected product pages represent all products intended by the checklist is unknown; the capture confirms only these three URLs..
- FND-STRUCTURED-DATA-STRUCTURED-DATA-001: The collector extract reports JSON-LD results; it does not establish complete microdata coverage on every sampled page..
- FND-STRUCTURED-DATA-STRUCTURED-DATA-001: Structured-data eligibility or search-result presentation was not tested..
- FND-STRUCTURED-DATA-STRUCTURED-DATA-001: The run reports nine of 25 pages as partial, and four inventory pages have no structured-data evidence record..
- FND-UX-UI-UXUI-001: No field performance data is available..
- FND-UX-UI-UXUI-001: A single recorded capture does not establish the experience for all devices, networks, or visits..
- FND-UX-UI-UXUI-001: This UX observation does not establish a source-level cause..

## 27. Evidence appendix

| ID | URL | Collector/type | Artifact | Observed at | Accepted finding links |
| --- | --- | --- | --- | --- | --- |
| EVD-C51AC48D3DB98538 | https://addp.vn/robots.txt | discovery / robots_txt | evidence/discovery/robots.txt | 2026-09-28T21:15:51.267Z | FND-GEO-AEO-GEO-AEO-003, FND-TECHNICAL-SEO-SEO-001, FND-TECHNICAL-SEO-SEO-002 |
| EVD-B093A16D09E3A37E | https://addp.vn/pub/sitemap.xml | discovery / sitemap_http_response | evidence/discovery/sitemap-18ff84938bf215b3.xml | 2026-09-28T21:15:53.781Z | FND-TECHNICAL-SEO-SEO-001, FND-TECHNICAL-SEO-SEO-002 |
| EVD-A57DC932D580B784 | https://addp.vn/sitemap.xml | discovery / sitemap_http_response | evidence/discovery/sitemap-52618716ffbf735c.xml | 2026-09-28T21:15:55.183Z | FND-TECHNICAL-SEO-SEO-001 |
| EVD-80DB3C701FE061F9 | https://addp.vn/ | raw-http / raw_html | evidence/html/e4e0c9a45799894e.render-stabilized-v3_3.raw.html | 2026-09-28T21:17:26.586Z | Unknown / not recorded |
| EVD-88DD509F3586ACF5 | https://addp.vn/ | seo / raw_seo | evidence/seo/e4e0c9a45799894e.render-stabilized-v3_3.raw.json | 2026-09-28T21:17:26.606Z | Unknown / not recorded |
| EVD-43FB9DEFD6EDE605 | https://addp.vn/ | screenshot / initial_viewport_screenshot | evidence/screenshots/e4e0c9a45799894e.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:17:45.481Z | Unknown / not recorded |
| EVD-49A5344C4B6C5FED | https://addp.vn/ | screenshot / initial_full_screenshot | evidence/screenshots/e4e0c9a45799894e.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:17:46.504Z | Unknown / not recorded |
| EVD-85956D06B433ABCA | https://addp.vn/ | performance / lab_metrics | evidence/lighthouse/e4e0c9a45799894e.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:17:46.545Z | FND-PERFORMANCE-PERF-001 |
| EVD-E3461AC4808842D8 | https://addp.vn/ | browser / render_stabilization | evidence/render/e4e0c9a45799894e.desktop.render-stabilized-v3_3.json | 2026-09-28T21:17:55.030Z | Unknown / not recorded |
| EVD-A606C27223349F8A | https://addp.vn/ | browser / rendered_html | evidence/html/e4e0c9a45799894e.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:17:55.047Z | Unknown / not recorded |
| EVD-A81704E1324D31CC | https://addp.vn/ | seo / rendered_seo | evidence/seo/e4e0c9a45799894e.desktop.render-stabilized-v3_3.json | 2026-09-28T21:17:55.145Z | Unknown / not recorded |
| EVD-32CB6452441EDF9E | https://addp.vn/ | structured-data / jsonld | evidence/schema/e4e0c9a45799894e.desktop.render-stabilized-v3_3.json | 2026-09-28T21:17:55.146Z | FND-GEO-AEO-GEO-AEO-001, FND-STRUCTURED-DATA-STRUCTURED-DATA-001 |
| EVD-AEE314AA3F7151E7 | https://addp.vn/ | dom / visible_controls | evidence/dom/e4e0c9a45799894e.desktop.render-stabilized-v3_3.json | 2026-09-28T21:17:55.273Z | Unknown / not recorded |
| EVD-DBF33A19881A487E | https://addp.vn/ | analytics / tracking_signals | evidence/analytics/e4e0c9a45799894e.desktop.render-stabilized-v3_3.json | 2026-09-28T21:17:55.276Z | FND-ANALYTICS-analytics-public-signals-not-observed-sample |
| EVD-8C749E8D6F00DF83 | https://addp.vn/ | screenshot / stabilized_viewport_screenshot | evidence/screenshots/e4e0c9a45799894e.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:17:55.420Z | Unknown / not recorded |
| EVD-702877ACD4E72E55 | https://addp.vn/ | screenshot / stabilized_full_screenshot | evidence/screenshots/e4e0c9a45799894e.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:17:56.285Z | Unknown / not recorded |
| EVD-6E93B5B6099AB8DE | https://addp.vn/ | axe / accessibility | evidence/accessibility/e4e0c9a45799894e.desktop.render-stabilized-v3_3.json | 2026-09-28T21:18:02.210Z | Unknown / not recorded |
| EVD-D180D4E34ABF95BC | https://addp.vn/ | network / network_log | evidence/network/e4e0c9a45799894e.desktop.render-stabilized-v3_3.json | 2026-09-28T21:18:02.214Z | Unknown / not recorded |
| EVD-60CBF75CE8FE2864 | https://addp.vn/ | console / console_log | evidence/console/e4e0c9a45799894e.desktop.render-stabilized-v3_3.json | 2026-09-28T21:18:02.215Z | Unknown / not recorded |
| EVD-9B3746A447795E5D | https://addp.vn/ | screenshot / initial_viewport_screenshot | evidence/screenshots/e4e0c9a45799894e.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:18:30.911Z | FND-UX-UI-UXUI-001 |
| EVD-90A6A817C6116577 | https://addp.vn/ | screenshot / initial_full_screenshot | evidence/screenshots/e4e0c9a45799894e.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:18:31.230Z | Unknown / not recorded |
| EVD-3D15DCDB359887BF | https://addp.vn/ | performance / lab_metrics | evidence/lighthouse/e4e0c9a45799894e.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:18:31.258Z | FND-PERFORMANCE-PERF-001, FND-UX-UI-UXUI-001 |
| EVD-593BA7163638B99D | https://addp.vn/ | browser / render_stabilization | evidence/render/e4e0c9a45799894e.mobile.render-stabilized-v3_3.json | 2026-09-28T21:18:43.588Z | Unknown / not recorded |
| EVD-0B1AEB9BA55C2F0C | https://addp.vn/ | browser / rendered_html | evidence/html/e4e0c9a45799894e.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:18:43.610Z | Unknown / not recorded |
| EVD-AEED7CD9E819A9C7 | https://addp.vn/ | seo / rendered_seo | evidence/seo/e4e0c9a45799894e.mobile.render-stabilized-v3_3.json | 2026-09-28T21:18:43.802Z | Unknown / not recorded |
| EVD-C16C9A26189A6C8E | https://addp.vn/ | structured-data / jsonld | evidence/schema/e4e0c9a45799894e.mobile.render-stabilized-v3_3.json | 2026-09-28T21:18:43.804Z | FND-STRUCTURED-DATA-STRUCTURED-DATA-001 |
| EVD-2CA66D18158349D8 | https://addp.vn/ | dom / visible_controls | evidence/dom/e4e0c9a45799894e.mobile.render-stabilized-v3_3.json | 2026-09-28T21:18:43.936Z | Unknown / not recorded |
| EVD-04B228A36544C865 | https://addp.vn/ | analytics / tracking_signals | evidence/analytics/e4e0c9a45799894e.mobile.render-stabilized-v3_3.json | 2026-09-28T21:18:43.937Z | FND-ANALYTICS-analytics-public-signals-not-observed-sample |
| EVD-4256DF417284230A | https://addp.vn/ | screenshot / stabilized_viewport_screenshot | evidence/screenshots/e4e0c9a45799894e.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:18:43.980Z | Unknown / not recorded |
| EVD-92E0841363C85BA1 | https://addp.vn/ | screenshot / stabilized_full_screenshot | evidence/screenshots/e4e0c9a45799894e.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:18:44.267Z | Unknown / not recorded |
| EVD-3425B7ADB4DE40C6 | https://addp.vn/ | axe / accessibility | evidence/accessibility/e4e0c9a45799894e.mobile.render-stabilized-v3_3.json | 2026-09-28T21:18:50.137Z | Unknown / not recorded |
| EVD-0A4B53A36849E3DA | https://addp.vn/ | network / network_log | evidence/network/e4e0c9a45799894e.mobile.render-stabilized-v3_3.json | 2026-09-28T21:18:50.141Z | Unknown / not recorded |
| EVD-8C7E9CF272FB4245 | https://addp.vn/ | console / console_log | evidence/console/e4e0c9a45799894e.mobile.render-stabilized-v3_3.json | 2026-09-28T21:18:50.141Z | Unknown / not recorded |
| EVD-F71EC5745F2AF71B | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | raw-http / raw_html | evidence/html/7cfd44db842407aa.render-stabilized-v3_3.raw.html | 2026-09-28T21:18:52.172Z | FND-STRUCTURED-DATA-STRUCTURED-DATA-001 |
| EVD-325C6659444AD546 | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | seo / raw_seo | evidence/seo/7cfd44db842407aa.render-stabilized-v3_3.raw.json | 2026-09-28T21:18:52.265Z | FND-TECHNICAL-SEO-SEO-003 |
| EVD-5F9A486470BA37EC | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | screenshot / initial_viewport_screenshot | evidence/screenshots/7cfd44db842407aa.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:19:10.947Z | Unknown / not recorded |
| EVD-5D7D49577ED40E0B | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | screenshot / initial_full_screenshot | evidence/screenshots/7cfd44db842407aa.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:19:11.463Z | Unknown / not recorded |
| EVD-641917A75B4A1104 | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | performance / lab_metrics | evidence/lighthouse/7cfd44db842407aa.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:19:11.574Z | Unknown / not recorded |
| EVD-4F780F642FF774B8 | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | browser / render_stabilization | evidence/render/7cfd44db842407aa.desktop.render-stabilized-v3_3.json | 2026-09-28T21:19:17.194Z | Unknown / not recorded |
| EVD-C07AE1B67F5FAB1D | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | browser / rendered_html | evidence/html/7cfd44db842407aa.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:19:17.211Z | FND-CONTENT-CONTENT-001 |
| EVD-117F092A6C957697 | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | seo / rendered_seo | evidence/seo/7cfd44db842407aa.desktop.render-stabilized-v3_3.json | 2026-09-28T21:19:17.258Z | Unknown / not recorded |
| EVD-01FF964BE2B7A2AA | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | structured-data / jsonld | evidence/schema/7cfd44db842407aa.desktop.render-stabilized-v3_3.json | 2026-09-28T21:19:17.259Z | FND-STRUCTURED-DATA-STRUCTURED-DATA-001 |
| EVD-048ED34D4760A669 | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | dom / visible_controls | evidence/dom/7cfd44db842407aa.desktop.render-stabilized-v3_3.json | 2026-09-28T21:19:17.428Z | Unknown / not recorded |
| EVD-5E1FDAFD6E0F3BD0 | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | analytics / tracking_signals | evidence/analytics/7cfd44db842407aa.desktop.render-stabilized-v3_3.json | 2026-09-28T21:19:17.429Z | FND-ANALYTICS-analytics-public-signals-not-observed-sample |
| EVD-B59288AF81EE6CF7 | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/7cfd44db842407aa.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:19:17.532Z | Unknown / not recorded |
| EVD-90958BB0A35F4C7E | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | screenshot / stabilized_full_screenshot | evidence/screenshots/7cfd44db842407aa.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:19:17.841Z | Unknown / not recorded |
| EVD-581D82F5C941EF04 | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | axe / accessibility | evidence/accessibility/7cfd44db842407aa.desktop.render-stabilized-v3_3.json | 2026-09-28T21:19:23.764Z | Unknown / not recorded |
| EVD-D7B134431609A59D | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | network / network_log | evidence/network/7cfd44db842407aa.desktop.render-stabilized-v3_3.json | 2026-09-28T21:19:23.767Z | Unknown / not recorded |
| EVD-4B8BA2F7825D892C | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | console / console_log | evidence/console/7cfd44db842407aa.desktop.render-stabilized-v3_3.json | 2026-09-28T21:19:23.767Z | Unknown / not recorded |
| EVD-331A8E8AE0BAC21A | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | screenshot / initial_viewport_screenshot | evidence/screenshots/7cfd44db842407aa.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:19:42.162Z | Unknown / not recorded |
| EVD-FD3D020A7577F174 | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | screenshot / initial_full_screenshot | evidence/screenshots/7cfd44db842407aa.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:19:42.614Z | Unknown / not recorded |
| EVD-2F1BD82D6F3C20D6 | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | performance / lab_metrics | evidence/lighthouse/7cfd44db842407aa.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:19:42.637Z | Unknown / not recorded |
| EVD-7E6F7A63214C6DEE | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | browser / render_stabilization | evidence/render/7cfd44db842407aa.mobile.render-stabilized-v3_3.json | 2026-09-28T21:19:48.647Z | Unknown / not recorded |
| EVD-AEFBEE031D7647F4 | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | browser / rendered_html | evidence/html/7cfd44db842407aa.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:19:48.663Z | Unknown / not recorded |
| EVD-C12BB36F5D39F67E | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | seo / rendered_seo | evidence/seo/7cfd44db842407aa.mobile.render-stabilized-v3_3.json | 2026-09-28T21:19:48.692Z | Unknown / not recorded |
| EVD-B1630958C79BC01D | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | structured-data / jsonld | evidence/schema/7cfd44db842407aa.mobile.render-stabilized-v3_3.json | 2026-09-28T21:19:48.694Z | FND-STRUCTURED-DATA-STRUCTURED-DATA-001 |
| EVD-93D10760E982FACA | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | dom / visible_controls | evidence/dom/7cfd44db842407aa.mobile.render-stabilized-v3_3.json | 2026-09-28T21:19:48.862Z | Unknown / not recorded |
| EVD-2A0768485D1F0097 | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | analytics / tracking_signals | evidence/analytics/7cfd44db842407aa.mobile.render-stabilized-v3_3.json | 2026-09-28T21:19:48.865Z | FND-ANALYTICS-analytics-public-signals-not-observed-sample |
| EVD-846147B5C20C3C37 | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/7cfd44db842407aa.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:19:48.934Z | Unknown / not recorded |
| EVD-8B081AA3A3844CBA | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | screenshot / stabilized_full_screenshot | evidence/screenshots/7cfd44db842407aa.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:19:49.125Z | Unknown / not recorded |
| EVD-E5AE5B42D5B63105 | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | axe / accessibility | evidence/accessibility/7cfd44db842407aa.mobile.render-stabilized-v3_3.json | 2026-09-28T21:19:55.091Z | Unknown / not recorded |
| EVD-473D0C2B67ECCA01 | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | network / network_log | evidence/network/7cfd44db842407aa.mobile.render-stabilized-v3_3.json | 2026-09-28T21:19:55.095Z | Unknown / not recorded |
| EVD-F9857CAF00859FEE | https://addp.vn/1goi-sua-hat-dinh-duong-glucare-plus.html | console / console_log | evidence/console/7cfd44db842407aa.mobile.render-stabilized-v3_3.json | 2026-09-28T21:19:55.095Z | Unknown / not recorded |
| EVD-8B09867D19F1496E | https://addp.vn/vien-an-duong-addp.html | raw-http / raw_html | evidence/html/db93fc388a5ba278.render-stabilized-v3_3.raw.html | 2026-09-28T21:19:56.217Z | Unknown / not recorded |
| EVD-927DDAF696B5D339 | https://addp.vn/vien-an-duong-addp.html | seo / raw_seo | evidence/seo/db93fc388a5ba278.render-stabilized-v3_3.raw.json | 2026-09-28T21:19:56.261Z | FND-BRAND-BRAND-20260928-001, FND-TECHNICAL-SEO-SEO-003 |
| EVD-D1A4789253FA3D20 | https://addp.vn/vien-an-duong-addp.html | screenshot / initial_viewport_screenshot | evidence/screenshots/db93fc388a5ba278.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:20:14.519Z | Unknown / not recorded |
| EVD-01C70981DA625991 | https://addp.vn/vien-an-duong-addp.html | screenshot / initial_full_screenshot | evidence/screenshots/db93fc388a5ba278.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:20:14.866Z | Unknown / not recorded |
| EVD-59FEA6B0424B92A9 | https://addp.vn/vien-an-duong-addp.html | performance / lab_metrics | evidence/lighthouse/db93fc388a5ba278.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:20:14.887Z | Unknown / not recorded |
| EVD-8A9869EF48387B07 | https://addp.vn/vien-an-duong-addp.html | browser / render_stabilization | evidence/render/db93fc388a5ba278.desktop.render-stabilized-v3_3.json | 2026-09-28T21:20:20.132Z | Unknown / not recorded |
| EVD-AD18B204CB25AAFE | https://addp.vn/vien-an-duong-addp.html | browser / rendered_html | evidence/html/db93fc388a5ba278.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:20:20.152Z | FND-BRAND-BRAND-20260928-001 |
| EVD-C4AE99238E385779 | https://addp.vn/vien-an-duong-addp.html | seo / rendered_seo | evidence/seo/db93fc388a5ba278.desktop.render-stabilized-v3_3.json | 2026-09-28T21:20:20.184Z | Unknown / not recorded |
| EVD-02D7356CC02B574B | https://addp.vn/vien-an-duong-addp.html | structured-data / jsonld | evidence/schema/db93fc388a5ba278.desktop.render-stabilized-v3_3.json | 2026-09-28T21:20:20.186Z | FND-GEO-AEO-GEO-AEO-001, FND-STRUCTURED-DATA-STRUCTURED-DATA-001 |
| EVD-BAEB862925DCDBD6 | https://addp.vn/vien-an-duong-addp.html | dom / visible_controls | evidence/dom/db93fc388a5ba278.desktop.render-stabilized-v3_3.json | 2026-09-28T21:20:20.391Z | Unknown / not recorded |
| EVD-142BC3400E9FB9F7 | https://addp.vn/vien-an-duong-addp.html | analytics / tracking_signals | evidence/analytics/db93fc388a5ba278.desktop.render-stabilized-v3_3.json | 2026-09-28T21:20:20.392Z | Unknown / not recorded |
| EVD-FF8E9901B30017D5 | https://addp.vn/vien-an-duong-addp.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/db93fc388a5ba278.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:20:20.478Z | Unknown / not recorded |
| EVD-8AF2F6C046D10D13 | https://addp.vn/vien-an-duong-addp.html | screenshot / stabilized_full_screenshot | evidence/screenshots/db93fc388a5ba278.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:20:20.716Z | Unknown / not recorded |
| EVD-93BD722A664FB9ED | https://addp.vn/vien-an-duong-addp.html | axe / accessibility | evidence/accessibility/db93fc388a5ba278.desktop.render-stabilized-v3_3.json | 2026-09-28T21:20:26.670Z | Unknown / not recorded |
| EVD-7668B3077211D003 | https://addp.vn/vien-an-duong-addp.html | network / network_log | evidence/network/db93fc388a5ba278.desktop.render-stabilized-v3_3.json | 2026-09-28T21:20:26.674Z | Unknown / not recorded |
| EVD-7446D5E17852368D | https://addp.vn/vien-an-duong-addp.html | console / console_log | evidence/console/db93fc388a5ba278.desktop.render-stabilized-v3_3.json | 2026-09-28T21:20:26.674Z | Unknown / not recorded |
| EVD-185355071BE6733D | https://addp.vn/vien-an-duong-addp.html | screenshot / initial_viewport_screenshot | evidence/screenshots/db93fc388a5ba278.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:20:45.023Z | Unknown / not recorded |
| EVD-927257E0837F865D | https://addp.vn/vien-an-duong-addp.html | screenshot / initial_full_screenshot | evidence/screenshots/db93fc388a5ba278.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:20:45.233Z | Unknown / not recorded |
| EVD-72E1A5FAECEBA7B5 | https://addp.vn/vien-an-duong-addp.html | performance / lab_metrics | evidence/lighthouse/db93fc388a5ba278.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:20:45.296Z | Unknown / not recorded |
| EVD-9F31B8FF6B967C0B | https://addp.vn/vien-an-duong-addp.html | browser / render_stabilization | evidence/render/db93fc388a5ba278.mobile.render-stabilized-v3_3.json | 2026-09-28T21:20:52.402Z | Unknown / not recorded |
| EVD-8B52A19F88C406F7 | https://addp.vn/vien-an-duong-addp.html | browser / rendered_html | evidence/html/db93fc388a5ba278.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:20:52.419Z | Unknown / not recorded |
| EVD-B7C8035A64CF2E79 | https://addp.vn/vien-an-duong-addp.html | seo / rendered_seo | evidence/seo/db93fc388a5ba278.mobile.render-stabilized-v3_3.json | 2026-09-28T21:20:52.464Z | Unknown / not recorded |
| EVD-BDF90743647332F7 | https://addp.vn/vien-an-duong-addp.html | structured-data / jsonld | evidence/schema/db93fc388a5ba278.mobile.render-stabilized-v3_3.json | 2026-09-28T21:20:52.466Z | FND-STRUCTURED-DATA-STRUCTURED-DATA-001 |
| EVD-A48B7E534C94B7C3 | https://addp.vn/vien-an-duong-addp.html | dom / visible_controls | evidence/dom/db93fc388a5ba278.mobile.render-stabilized-v3_3.json | 2026-09-28T21:20:52.793Z | Unknown / not recorded |
| EVD-4080642C5235F8C5 | https://addp.vn/vien-an-duong-addp.html | analytics / tracking_signals | evidence/analytics/db93fc388a5ba278.mobile.render-stabilized-v3_3.json | 2026-09-28T21:20:52.795Z | Unknown / not recorded |
| EVD-32E528AD927E9E20 | https://addp.vn/vien-an-duong-addp.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/db93fc388a5ba278.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:20:52.855Z | Unknown / not recorded |
| EVD-65661C6225D2AAFA | https://addp.vn/vien-an-duong-addp.html | screenshot / stabilized_full_screenshot | evidence/screenshots/db93fc388a5ba278.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:20:53.109Z | Unknown / not recorded |
| EVD-BD625D8C0113FBEA | https://addp.vn/vien-an-duong-addp.html | axe / accessibility | evidence/accessibility/db93fc388a5ba278.mobile.render-stabilized-v3_3.json | 2026-09-28T21:20:59.238Z | Unknown / not recorded |
| EVD-843AD8C8CEF92AD0 | https://addp.vn/vien-an-duong-addp.html | network / network_log | evidence/network/db93fc388a5ba278.mobile.render-stabilized-v3_3.json | 2026-09-28T21:20:59.244Z | Unknown / not recorded |
| EVD-896E9963B41C5CEB | https://addp.vn/vien-an-duong-addp.html | console / console_log | evidence/console/db93fc388a5ba278.mobile.render-stabilized-v3_3.json | 2026-09-28T21:20:59.244Z | Unknown / not recorded |
| EVD-1C46740F9999CF7B | https://addp.vn/sui-dovital | raw-http / raw_html | evidence/html/9f397da04f62a067.render-stabilized-v3_3.raw.html | 2026-09-28T21:20:59.973Z | Unknown / not recorded |
| EVD-CD4C67022008E5BB | https://addp.vn/sui-dovital | seo / raw_seo | evidence/seo/9f397da04f62a067.render-stabilized-v3_3.raw.json | 2026-09-28T21:21:00.052Z | FND-TECHNICAL-SEO-SEO-003 |
| EVD-70F5E4D47A80ECEC | https://addp.vn/sui-dovital | screenshot / initial_viewport_screenshot | evidence/screenshots/9f397da04f62a067.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:21:20.421Z | Unknown / not recorded |
| EVD-883B8CCEC5DF0558 | https://addp.vn/sui-dovital | screenshot / initial_full_screenshot | evidence/screenshots/9f397da04f62a067.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:21:21.360Z | Unknown / not recorded |
| EVD-CAD8504CF169E375 | https://addp.vn/sui-dovital | performance / lab_metrics | evidence/lighthouse/9f397da04f62a067.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:21:21.397Z | Unknown / not recorded |
| EVD-61643DF84ECB73B0 | https://addp.vn/sui-dovital | browser / render_stabilization | evidence/render/9f397da04f62a067.desktop.render-stabilized-v3_3.json | 2026-09-28T21:21:35.046Z | Unknown / not recorded |
| EVD-5636E0D9D1AB2605 | https://addp.vn/sui-dovital | browser / rendered_html | evidence/html/9f397da04f62a067.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:21:35.074Z | Unknown / not recorded |
| EVD-239333BC638CDEBA | https://addp.vn/sui-dovital | seo / rendered_seo | evidence/seo/9f397da04f62a067.desktop.render-stabilized-v3_3.json | 2026-09-28T21:21:35.118Z | Unknown / not recorded |
| EVD-E32F848C405D32E0 | https://addp.vn/sui-dovital | structured-data / jsonld | evidence/schema/9f397da04f62a067.desktop.render-stabilized-v3_3.json | 2026-09-28T21:21:35.119Z | FND-GEO-AEO-GEO-AEO-001, FND-STRUCTURED-DATA-STRUCTURED-DATA-001 |
| EVD-B968E829D7DEA2D7 | https://addp.vn/sui-dovital | dom / visible_controls | evidence/dom/9f397da04f62a067.desktop.render-stabilized-v3_3.json | 2026-09-28T21:21:35.308Z | Unknown / not recorded |
| EVD-A4A1CE693EA3E721 | https://addp.vn/sui-dovital | analytics / tracking_signals | evidence/analytics/9f397da04f62a067.desktop.render-stabilized-v3_3.json | 2026-09-28T21:21:35.310Z | Unknown / not recorded |
| EVD-6695052421D33FF3 | https://addp.vn/sui-dovital | screenshot / stabilized_viewport_screenshot | evidence/screenshots/9f397da04f62a067.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:21:35.431Z | Unknown / not recorded |
| EVD-AA139D52B8CD9DFC | https://addp.vn/sui-dovital | screenshot / stabilized_full_screenshot | evidence/screenshots/9f397da04f62a067.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:21:35.960Z | Unknown / not recorded |
| EVD-4DBA8882236BC114 | https://addp.vn/sui-dovital | axe / accessibility | evidence/accessibility/9f397da04f62a067.desktop.render-stabilized-v3_3.json | 2026-09-28T21:21:41.894Z | Unknown / not recorded |
| EVD-1F34F2883600DF55 | https://addp.vn/sui-dovital | network / network_log | evidence/network/9f397da04f62a067.desktop.render-stabilized-v3_3.json | 2026-09-28T21:21:41.897Z | Unknown / not recorded |
| EVD-7B1DF39313952872 | https://addp.vn/sui-dovital | console / console_log | evidence/console/9f397da04f62a067.desktop.render-stabilized-v3_3.json | 2026-09-28T21:21:41.897Z | Unknown / not recorded |
| EVD-FDAC392859F232F9 | https://addp.vn/sui-dovital | screenshot / initial_viewport_screenshot | evidence/screenshots/9f397da04f62a067.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:22:02.717Z | Unknown / not recorded |
| EVD-25951ECD11F537B5 | https://addp.vn/sui-dovital | screenshot / initial_full_screenshot | evidence/screenshots/9f397da04f62a067.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:22:02.994Z | Unknown / not recorded |
| EVD-9EA71D28792733BF | https://addp.vn/sui-dovital | performance / lab_metrics | evidence/lighthouse/9f397da04f62a067.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:22:03.022Z | Unknown / not recorded |
| EVD-CFF9A094EDC2D739 | https://addp.vn/sui-dovital | browser / render_stabilization | evidence/render/9f397da04f62a067.mobile.render-stabilized-v3_3.json | 2026-09-28T21:22:25.062Z | Unknown / not recorded |
| EVD-91A2524CB7C652D0 | https://addp.vn/sui-dovital | browser / rendered_html | evidence/html/9f397da04f62a067.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:22:25.084Z | Unknown / not recorded |
| EVD-30DDD40B25555E6E | https://addp.vn/sui-dovital | seo / rendered_seo | evidence/seo/9f397da04f62a067.mobile.render-stabilized-v3_3.json | 2026-09-28T21:22:25.176Z | Unknown / not recorded |
| EVD-EDDAD1FAFA69798C | https://addp.vn/sui-dovital | structured-data / jsonld | evidence/schema/9f397da04f62a067.mobile.render-stabilized-v3_3.json | 2026-09-28T21:22:25.177Z | FND-STRUCTURED-DATA-STRUCTURED-DATA-001 |
| EVD-9B7514F9C1D9F906 | https://addp.vn/sui-dovital | dom / visible_controls | evidence/dom/9f397da04f62a067.mobile.render-stabilized-v3_3.json | 2026-09-28T21:22:25.429Z | Unknown / not recorded |
| EVD-1964859DD63DD62B | https://addp.vn/sui-dovital | analytics / tracking_signals | evidence/analytics/9f397da04f62a067.mobile.render-stabilized-v3_3.json | 2026-09-28T21:22:25.430Z | Unknown / not recorded |
| EVD-9175C04DA21427CA | https://addp.vn/sui-dovital | screenshot / stabilized_viewport_screenshot | evidence/screenshots/9f397da04f62a067.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:22:25.501Z | Unknown / not recorded |
| EVD-A56C5E202BFD212A | https://addp.vn/sui-dovital | screenshot / stabilized_full_screenshot | evidence/screenshots/9f397da04f62a067.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:22:25.736Z | Unknown / not recorded |
| EVD-3B04A9D3DDC17AE0 | https://addp.vn/sui-dovital | axe / accessibility | evidence/accessibility/9f397da04f62a067.mobile.render-stabilized-v3_3.json | 2026-09-28T21:22:31.588Z | Unknown / not recorded |
| EVD-A8A3D82B6DD3EE49 | https://addp.vn/sui-dovital | network / network_log | evidence/network/9f397da04f62a067.mobile.render-stabilized-v3_3.json | 2026-09-28T21:22:31.591Z | Unknown / not recorded |
| EVD-0C5075894E280CB6 | https://addp.vn/sui-dovital | console / console_log | evidence/console/9f397da04f62a067.mobile.render-stabilized-v3_3.json | 2026-09-28T21:22:31.591Z | Unknown / not recorded |
| EVD-29BE01E2DF43FC8F | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | raw-http / raw_html | evidence/html/71458af915c17754.render-stabilized-v3_3.raw.html | 2026-09-28T21:22:33.832Z | Unknown / not recorded |
| EVD-AD2CB18B0ADA3AC2 | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | seo / raw_seo | evidence/seo/71458af915c17754.render-stabilized-v3_3.raw.json | 2026-09-28T21:22:33.890Z | Unknown / not recorded |
| EVD-758379B8B590DDED | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | screenshot / initial_viewport_screenshot | evidence/screenshots/71458af915c17754.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:22:47.138Z | Unknown / not recorded |
| EVD-2701FBD91666AB6E | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | screenshot / initial_full_screenshot | evidence/screenshots/71458af915c17754.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:22:48.583Z | Unknown / not recorded |
| EVD-140275788B638B2B | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | performance / lab_metrics | evidence/lighthouse/71458af915c17754.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:22:48.612Z | FND-PERFORMANCE-PERF-003 |
| EVD-90BBF242E7AE8FDA | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | browser / render_stabilization | evidence/render/71458af915c17754.desktop.render-stabilized-v3_3.json | 2026-09-28T21:22:58.906Z | Unknown / not recorded |
| EVD-7AFC281EC7B96578 | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | browser / rendered_html | evidence/html/71458af915c17754.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:22:58.924Z | Unknown / not recorded |
| EVD-01E8B99B0727F6CF | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | seo / rendered_seo | evidence/seo/71458af915c17754.desktop.render-stabilized-v3_3.json | 2026-09-28T21:22:58.979Z | Unknown / not recorded |
| EVD-2326A9C7428D947E | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | structured-data / jsonld | evidence/schema/71458af915c17754.desktop.render-stabilized-v3_3.json | 2026-09-28T21:22:58.981Z | FND-GEO-AEO-GEO-AEO-001 |
| EVD-911EA4E0058AABE5 | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | dom / visible_controls | evidence/dom/71458af915c17754.desktop.render-stabilized-v3_3.json | 2026-09-28T21:22:59.118Z | Unknown / not recorded |
| EVD-820A852713ADC090 | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | analytics / tracking_signals | evidence/analytics/71458af915c17754.desktop.render-stabilized-v3_3.json | 2026-09-28T21:22:59.119Z | FND-ANALYTICS-analytics-public-signals-not-observed-sample |
| EVD-10A64944D2AB6612 | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | screenshot / stabilized_viewport_screenshot | evidence/screenshots/71458af915c17754.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:22:59.274Z | Unknown / not recorded |
| EVD-2773831F8B2D63A5 | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | screenshot / stabilized_full_screenshot | evidence/screenshots/71458af915c17754.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:23:00.478Z | Unknown / not recorded |
| EVD-50B0FE12AAF27543 | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | axe / accessibility | evidence/accessibility/71458af915c17754.desktop.render-stabilized-v3_3.json | 2026-09-28T21:23:06.505Z | Unknown / not recorded |
| EVD-31973071CB32F790 | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | network / network_log | evidence/network/71458af915c17754.desktop.render-stabilized-v3_3.json | 2026-09-28T21:23:06.509Z | Unknown / not recorded |
| EVD-2176331ECAEBADE8 | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | console / console_log | evidence/console/71458af915c17754.desktop.render-stabilized-v3_3.json | 2026-09-28T21:23:06.509Z | Unknown / not recorded |
| EVD-6C09BEFD76A5FD6E | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | screenshot / initial_viewport_screenshot | evidence/screenshots/71458af915c17754.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:23:24.698Z | Unknown / not recorded |
| EVD-EEC171D5AA378854 | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | screenshot / initial_full_screenshot | evidence/screenshots/71458af915c17754.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:23:25.221Z | Unknown / not recorded |
| EVD-EEE8678F6CB7996C | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | performance / lab_metrics | evidence/lighthouse/71458af915c17754.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:23:25.242Z | FND-PERFORMANCE-PERF-003 |
| EVD-805F8708C63FD494 | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | browser / render_stabilization | evidence/render/71458af915c17754.mobile.render-stabilized-v3_3.json | 2026-09-28T21:23:43.734Z | Unknown / not recorded |
| EVD-1EAEDE4DD09C1FA5 | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | browser / rendered_html | evidence/html/71458af915c17754.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:23:43.752Z | Unknown / not recorded |
| EVD-892601A1DF5D0CF8 | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | seo / rendered_seo | evidence/seo/71458af915c17754.mobile.render-stabilized-v3_3.json | 2026-09-28T21:23:43.837Z | Unknown / not recorded |
| EVD-11EA381BDF07E9AE | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | structured-data / jsonld | evidence/schema/71458af915c17754.mobile.render-stabilized-v3_3.json | 2026-09-28T21:23:43.838Z | Unknown / not recorded |
| EVD-D3B4D5EEFC67C74D | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | dom / visible_controls | evidence/dom/71458af915c17754.mobile.render-stabilized-v3_3.json | 2026-09-28T21:23:43.966Z | Unknown / not recorded |
| EVD-DAC7815A6168F9B8 | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | analytics / tracking_signals | evidence/analytics/71458af915c17754.mobile.render-stabilized-v3_3.json | 2026-09-28T21:23:43.969Z | FND-ANALYTICS-analytics-public-signals-not-observed-sample |
| EVD-DDFFD3BFCCF0CDB6 | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | screenshot / stabilized_viewport_screenshot | evidence/screenshots/71458af915c17754.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:23:44.030Z | Unknown / not recorded |
| EVD-D8E2996542CFE675 | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | screenshot / stabilized_full_screenshot | evidence/screenshots/71458af915c17754.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:23:44.530Z | Unknown / not recorded |
| EVD-5656216FCA94BDAB | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | axe / accessibility | evidence/accessibility/71458af915c17754.mobile.render-stabilized-v3_3.json | 2026-09-28T21:23:50.369Z | Unknown / not recorded |
| EVD-4F52EC47774FC054 | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | network / network_log | evidence/network/71458af915c17754.mobile.render-stabilized-v3_3.json | 2026-09-28T21:23:50.373Z | Unknown / not recorded |
| EVD-3BAF668091392C62 | https://addp.vn/blog/post/chuan-doan-benh-dai-thao-duong | console / console_log | evidence/console/71458af915c17754.mobile.render-stabilized-v3_3.json | 2026-09-28T21:23:50.373Z | Unknown / not recorded |
| EVD-8C596D4F7D8F3EBF | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | raw-http / raw_html | evidence/html/83ea4ae04acfbe03.render-stabilized-v3_3.raw.html | 2026-09-28T21:23:52.441Z | Unknown / not recorded |
| EVD-1EE8A8E7411A08A2 | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | seo / raw_seo | evidence/seo/83ea4ae04acfbe03.render-stabilized-v3_3.raw.json | 2026-09-28T21:23:52.506Z | Unknown / not recorded |
| EVD-8DBD41575C3360A5 | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | screenshot / initial_viewport_screenshot | evidence/screenshots/83ea4ae04acfbe03.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:24:10.761Z | Unknown / not recorded |
| EVD-F156C68E325AA11F | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | screenshot / initial_full_screenshot | evidence/screenshots/83ea4ae04acfbe03.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:24:11.932Z | Unknown / not recorded |
| EVD-1043761274B05EFF | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | performance / lab_metrics | evidence/lighthouse/83ea4ae04acfbe03.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:24:11.961Z | FND-PERFORMANCE-PERF-003 |
| EVD-DD416F421E0E9230 | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | browser / render_stabilization | evidence/render/83ea4ae04acfbe03.desktop.render-stabilized-v3_3.json | 2026-09-28T21:24:23.152Z | Unknown / not recorded |
| EVD-646013F783E7CBC1 | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | browser / rendered_html | evidence/html/83ea4ae04acfbe03.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:24:23.171Z | Unknown / not recorded |
| EVD-0B2AF41DEADA909B | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | seo / rendered_seo | evidence/seo/83ea4ae04acfbe03.desktop.render-stabilized-v3_3.json | 2026-09-28T21:24:23.220Z | Unknown / not recorded |
| EVD-B8786FA90B6CDCB3 | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | structured-data / jsonld | evidence/schema/83ea4ae04acfbe03.desktop.render-stabilized-v3_3.json | 2026-09-28T21:24:23.222Z | FND-GEO-AEO-GEO-AEO-001 |
| EVD-B577E9F1FEED6B97 | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | dom / visible_controls | evidence/dom/83ea4ae04acfbe03.desktop.render-stabilized-v3_3.json | 2026-09-28T21:24:23.399Z | Unknown / not recorded |
| EVD-B5EE0893C99259A0 | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | analytics / tracking_signals | evidence/analytics/83ea4ae04acfbe03.desktop.render-stabilized-v3_3.json | 2026-09-28T21:24:23.402Z | Unknown / not recorded |
| EVD-8879AF0423D340C5 | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | screenshot / stabilized_viewport_screenshot | evidence/screenshots/83ea4ae04acfbe03.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:24:23.588Z | Unknown / not recorded |
| EVD-50BD6697FA02417E | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | screenshot / stabilized_full_screenshot | evidence/screenshots/83ea4ae04acfbe03.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:24:24.943Z | Unknown / not recorded |
| EVD-9CDEA6BE9C461057 | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | axe / accessibility | evidence/accessibility/83ea4ae04acfbe03.desktop.render-stabilized-v3_3.json | 2026-09-28T21:24:31.009Z | Unknown / not recorded |
| EVD-AE05C81A1CBCA40F | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | network / network_log | evidence/network/83ea4ae04acfbe03.desktop.render-stabilized-v3_3.json | 2026-09-28T21:24:31.012Z | Unknown / not recorded |
| EVD-70283F9D50AFFA15 | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | console / console_log | evidence/console/83ea4ae04acfbe03.desktop.render-stabilized-v3_3.json | 2026-09-28T21:24:31.012Z | Unknown / not recorded |
| EVD-37ABEFC5D402D79E | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | screenshot / initial_viewport_screenshot | evidence/screenshots/83ea4ae04acfbe03.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:24:49.500Z | Unknown / not recorded |
| EVD-477F88EE7874136D | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | screenshot / initial_full_screenshot | evidence/screenshots/83ea4ae04acfbe03.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:24:50.047Z | Unknown / not recorded |
| EVD-381F4D853D891DF0 | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | performance / lab_metrics | evidence/lighthouse/83ea4ae04acfbe03.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:24:50.079Z | FND-PERFORMANCE-PERF-003 |
| EVD-7097050AEB313C7B | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | browser / render_stabilization | evidence/render/83ea4ae04acfbe03.mobile.render-stabilized-v3_3.json | 2026-09-28T21:25:09.130Z | Unknown / not recorded |
| EVD-9CD8698A5102BD6D | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | browser / rendered_html | evidence/html/83ea4ae04acfbe03.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:25:09.145Z | Unknown / not recorded |
| EVD-107C3EB13B5959BF | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | seo / rendered_seo | evidence/seo/83ea4ae04acfbe03.mobile.render-stabilized-v3_3.json | 2026-09-28T21:25:09.235Z | Unknown / not recorded |
| EVD-46D3A7BEA5924B9A | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | structured-data / jsonld | evidence/schema/83ea4ae04acfbe03.mobile.render-stabilized-v3_3.json | 2026-09-28T21:25:09.236Z | Unknown / not recorded |
| EVD-9DC141CE654D0485 | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | dom / visible_controls | evidence/dom/83ea4ae04acfbe03.mobile.render-stabilized-v3_3.json | 2026-09-28T21:25:09.425Z | Unknown / not recorded |
| EVD-D15C68F25BB6E500 | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | analytics / tracking_signals | evidence/analytics/83ea4ae04acfbe03.mobile.render-stabilized-v3_3.json | 2026-09-28T21:25:09.427Z | Unknown / not recorded |
| EVD-388603E03AE1A9CC | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | screenshot / stabilized_viewport_screenshot | evidence/screenshots/83ea4ae04acfbe03.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:25:09.495Z | Unknown / not recorded |
| EVD-1B9963DA06CD20D8 | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | screenshot / stabilized_full_screenshot | evidence/screenshots/83ea4ae04acfbe03.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:25:09.944Z | Unknown / not recorded |
| EVD-D1113D377B9C709B | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | axe / accessibility | evidence/accessibility/83ea4ae04acfbe03.mobile.render-stabilized-v3_3.json | 2026-09-28T21:25:15.903Z | Unknown / not recorded |
| EVD-02F9831787029E27 | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | network / network_log | evidence/network/83ea4ae04acfbe03.mobile.render-stabilized-v3_3.json | 2026-09-28T21:25:15.908Z | Unknown / not recorded |
| EVD-424AEEEFA87C1240 | https://addp.vn/blog/post/dai-thao-duong-do-viem-tuy | console / console_log | evidence/console/83ea4ae04acfbe03.mobile.render-stabilized-v3_3.json | 2026-09-28T21:25:15.908Z | Unknown / not recorded |
| EVD-11CB9891813824E1 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | raw-http / raw_html | evidence/html/ce718c81120655d4.render-stabilized-v3_3.raw.html | 2026-09-28T21:25:17.949Z | Unknown / not recorded |
| EVD-4FDC277E11D55DA4 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | seo / raw_seo | evidence/seo/ce718c81120655d4.render-stabilized-v3_3.raw.json | 2026-09-28T21:25:18.061Z | Unknown / not recorded |
| EVD-47E9DA9118AF4862 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | screenshot / initial_viewport_screenshot | evidence/screenshots/ce718c81120655d4.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:25:36.915Z | Unknown / not recorded |
| EVD-86E44B1946B0A5A3 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | screenshot / initial_full_screenshot | evidence/screenshots/ce718c81120655d4.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:25:38.486Z | Unknown / not recorded |
| EVD-DE6EBC443A804CF6 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | performance / lab_metrics | evidence/lighthouse/ce718c81120655d4.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:25:38.515Z | Unknown / not recorded |
| EVD-15C0A915B7EE2968 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | browser / render_stabilization | evidence/render/ce718c81120655d4.desktop.render-stabilized-v3_3.json | 2026-09-28T21:25:57.848Z | Unknown / not recorded |
| EVD-3D87D8864C6A65DE | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | browser / rendered_html | evidence/html/ce718c81120655d4.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:25:57.863Z | Unknown / not recorded |
| EVD-917BFE774CA2C681 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | seo / rendered_seo | evidence/seo/ce718c81120655d4.desktop.render-stabilized-v3_3.json | 2026-09-28T21:25:57.945Z | Unknown / not recorded |
| EVD-0CC76FEDCFD90652 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | structured-data / jsonld | evidence/schema/ce718c81120655d4.desktop.render-stabilized-v3_3.json | 2026-09-28T21:25:57.947Z | FND-GEO-AEO-GEO-AEO-001 |
| EVD-3557E2554F23D240 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | dom / visible_controls | evidence/dom/ce718c81120655d4.desktop.render-stabilized-v3_3.json | 2026-09-28T21:25:58.117Z | Unknown / not recorded |
| EVD-D1C32111E29254A2 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | analytics / tracking_signals | evidence/analytics/ce718c81120655d4.desktop.render-stabilized-v3_3.json | 2026-09-28T21:25:58.119Z | Unknown / not recorded |
| EVD-8833000EC328B4B0 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | screenshot / stabilized_viewport_screenshot | evidence/screenshots/ce718c81120655d4.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:25:58.291Z | Unknown / not recorded |
| EVD-2DF29C0F3D3E9F4C | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | screenshot / stabilized_full_screenshot | evidence/screenshots/ce718c81120655d4.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:25:59.777Z | Unknown / not recorded |
| EVD-70EBC19BB80AAD34 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | axe / accessibility | evidence/accessibility/ce718c81120655d4.desktop.render-stabilized-v3_3.json | 2026-09-28T21:26:05.946Z | Unknown / not recorded |
| EVD-1C5B700715239515 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | network / network_log | evidence/network/ce718c81120655d4.desktop.render-stabilized-v3_3.json | 2026-09-28T21:26:05.950Z | Unknown / not recorded |
| EVD-02BA6465F7F39ABB | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | console / console_log | evidence/console/ce718c81120655d4.desktop.render-stabilized-v3_3.json | 2026-09-28T21:26:05.950Z | Unknown / not recorded |
| EVD-F6665A52DB79CC27 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | screenshot / initial_viewport_screenshot | evidence/screenshots/ce718c81120655d4.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:26:24.671Z | Unknown / not recorded |
| EVD-6291B71BFB4AB532 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | screenshot / initial_full_screenshot | evidence/screenshots/ce718c81120655d4.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:26:25.832Z | Unknown / not recorded |
| EVD-DF46103AB78D9C38 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | performance / lab_metrics | evidence/lighthouse/ce718c81120655d4.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:26:25.880Z | Unknown / not recorded |
| EVD-4EE3C9A78390B998 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | browser / render_stabilization | evidence/render/ce718c81120655d4.mobile.render-stabilized-v3_3.json | 2026-09-28T21:26:54.795Z | Unknown / not recorded |
| EVD-C9484AFF52948923 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | browser / rendered_html | evidence/html/ce718c81120655d4.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:26:54.824Z | Unknown / not recorded |
| EVD-93A338E8E139D7B5 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | seo / rendered_seo | evidence/seo/ce718c81120655d4.mobile.render-stabilized-v3_3.json | 2026-09-28T21:26:54.891Z | Unknown / not recorded |
| EVD-8EA2B7FC7DAA354D | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | structured-data / jsonld | evidence/schema/ce718c81120655d4.mobile.render-stabilized-v3_3.json | 2026-09-28T21:26:54.892Z | Unknown / not recorded |
| EVD-D20E130040FF2B24 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | dom / visible_controls | evidence/dom/ce718c81120655d4.mobile.render-stabilized-v3_3.json | 2026-09-28T21:26:55.135Z | Unknown / not recorded |
| EVD-91DF77E4547A0C14 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | analytics / tracking_signals | evidence/analytics/ce718c81120655d4.mobile.render-stabilized-v3_3.json | 2026-09-28T21:26:55.138Z | Unknown / not recorded |
| EVD-7977C8A8C5219F63 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | screenshot / stabilized_viewport_screenshot | evidence/screenshots/ce718c81120655d4.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:26:55.208Z | Unknown / not recorded |
| EVD-D7567F1A853E8A6F | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | screenshot / stabilized_full_screenshot | evidence/screenshots/ce718c81120655d4.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:26:55.793Z | Unknown / not recorded |
| EVD-B3A43F6A2D57F40F | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | axe / accessibility | evidence/accessibility/ce718c81120655d4.mobile.render-stabilized-v3_3.json | 2026-09-28T21:27:01.907Z | Unknown / not recorded |
| EVD-0212DADE17498923 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | network / network_log | evidence/network/ce718c81120655d4.mobile.render-stabilized-v3_3.json | 2026-09-28T21:27:01.912Z | Unknown / not recorded |
| EVD-2BC9674CDEBBC608 | https://addp.vn/blog/post/dai-thao-duong-la-benh-gi | console / console_log | evidence/console/ce718c81120655d4.mobile.render-stabilized-v3_3.json | 2026-09-28T21:27:01.912Z | Unknown / not recorded |
| EVD-EDC2C4DD0945DE30 | https://addp.vn/chinh-sach-dat-hang | raw-http / raw_html | evidence/html/9e2bc4d9801a94db.render-stabilized-v3_3.raw.html | 2026-09-28T21:27:02.802Z | Unknown / not recorded |
| EVD-8B9EE47483A9BC68 | https://addp.vn/chinh-sach-dat-hang | seo / raw_seo | evidence/seo/9e2bc4d9801a94db.render-stabilized-v3_3.raw.json | 2026-09-28T21:27:02.834Z | Unknown / not recorded |
| EVD-6FC9A4E437BF374C | https://addp.vn/chinh-sach-dat-hang | screenshot / initial_viewport_screenshot | evidence/screenshots/9e2bc4d9801a94db.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:27:23.712Z | Unknown / not recorded |
| EVD-5F3FFB24698329B2 | https://addp.vn/chinh-sach-dat-hang | screenshot / initial_full_screenshot | evidence/screenshots/9e2bc4d9801a94db.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:27:24.335Z | Unknown / not recorded |
| EVD-241C395FC9AED203 | https://addp.vn/chinh-sach-dat-hang | performance / lab_metrics | evidence/lighthouse/9e2bc4d9801a94db.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:27:24.423Z | Unknown / not recorded |
| EVD-252A3B6755C6ED3F | https://addp.vn/chinh-sach-dat-hang | browser / render_stabilization | evidence/render/9e2bc4d9801a94db.desktop.render-stabilized-v3_3.json | 2026-09-28T21:27:34.218Z | Unknown / not recorded |
| EVD-1123045C65722F6B | https://addp.vn/chinh-sach-dat-hang | browser / rendered_html | evidence/html/9e2bc4d9801a94db.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:27:34.270Z | Unknown / not recorded |
| EVD-8847193527214305 | https://addp.vn/chinh-sach-dat-hang | seo / rendered_seo | evidence/seo/9e2bc4d9801a94db.desktop.render-stabilized-v3_3.json | 2026-09-28T21:27:34.331Z | Unknown / not recorded |
| EVD-FE109BA72DB61599 | https://addp.vn/chinh-sach-dat-hang | structured-data / jsonld | evidence/schema/9e2bc4d9801a94db.desktop.render-stabilized-v3_3.json | 2026-09-28T21:27:34.334Z | Unknown / not recorded |
| EVD-6A7EF572FC5741FA | https://addp.vn/chinh-sach-dat-hang | dom / visible_controls | evidence/dom/9e2bc4d9801a94db.desktop.render-stabilized-v3_3.json | 2026-09-28T21:27:35.298Z | Unknown / not recorded |
| EVD-CDE3A06097E63A87 | https://addp.vn/chinh-sach-dat-hang | analytics / tracking_signals | evidence/analytics/9e2bc4d9801a94db.desktop.render-stabilized-v3_3.json | 2026-09-28T21:27:35.438Z | Unknown / not recorded |
| EVD-B72E697CD491DD1E | https://addp.vn/chinh-sach-dat-hang | screenshot / stabilized_viewport_screenshot | evidence/screenshots/9e2bc4d9801a94db.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:27:35.851Z | Unknown / not recorded |
| EVD-788B7F14A0632C0C | https://addp.vn/chinh-sach-dat-hang | screenshot / stabilized_full_screenshot | evidence/screenshots/9e2bc4d9801a94db.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:27:36.450Z | Unknown / not recorded |
| EVD-8250C22774F78F02 | https://addp.vn/chinh-sach-dat-hang | axe / accessibility | evidence/accessibility/9e2bc4d9801a94db.desktop.render-stabilized-v3_3.json | 2026-09-28T21:27:43.122Z | Unknown / not recorded |
| EVD-4C4008744D60A23C | https://addp.vn/chinh-sach-dat-hang | network / network_log | evidence/network/9e2bc4d9801a94db.desktop.render-stabilized-v3_3.json | 2026-09-28T21:27:43.128Z | Unknown / not recorded |
| EVD-2E6DDF96FCBD063F | https://addp.vn/chinh-sach-dat-hang | console / console_log | evidence/console/9e2bc4d9801a94db.desktop.render-stabilized-v3_3.json | 2026-09-28T21:27:43.128Z | Unknown / not recorded |
| EVD-7397E5C8E2A3EE82 | https://addp.vn/chinh-sach-dat-hang | screenshot / initial_viewport_screenshot | evidence/screenshots/9e2bc4d9801a94db.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:28:04.520Z | Unknown / not recorded |
| EVD-3CDA40C413DBCCCD | https://addp.vn/chinh-sach-dat-hang | screenshot / initial_full_screenshot | evidence/screenshots/9e2bc4d9801a94db.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:28:04.901Z | Unknown / not recorded |
| EVD-D16F5A715AC7BFE1 | https://addp.vn/chinh-sach-dat-hang | performance / lab_metrics | evidence/lighthouse/9e2bc4d9801a94db.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:28:04.954Z | Unknown / not recorded |
| EVD-79D6739BCC1C19B5 | https://addp.vn/chinh-sach-dat-hang | browser / render_stabilization | evidence/render/9e2bc4d9801a94db.mobile.render-stabilized-v3_3.json | 2026-09-28T21:28:12.454Z | Unknown / not recorded |
| EVD-FB8961F5DDFAE616 | https://addp.vn/chinh-sach-dat-hang | browser / rendered_html | evidence/html/9e2bc4d9801a94db.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:28:12.487Z | Unknown / not recorded |
| EVD-FEAE1B2C290B94CB | https://addp.vn/chinh-sach-dat-hang | seo / rendered_seo | evidence/seo/9e2bc4d9801a94db.mobile.render-stabilized-v3_3.json | 2026-09-28T21:28:12.538Z | Unknown / not recorded |
| EVD-552FABD7BC82B289 | https://addp.vn/chinh-sach-dat-hang | structured-data / jsonld | evidence/schema/9e2bc4d9801a94db.mobile.render-stabilized-v3_3.json | 2026-09-28T21:28:12.540Z | Unknown / not recorded |
| EVD-CDABBEBCD9BB9AAD | https://addp.vn/chinh-sach-dat-hang | dom / visible_controls | evidence/dom/9e2bc4d9801a94db.mobile.render-stabilized-v3_3.json | 2026-09-28T21:28:12.895Z | Unknown / not recorded |
| EVD-AFA7DEEF2251457F | https://addp.vn/chinh-sach-dat-hang | analytics / tracking_signals | evidence/analytics/9e2bc4d9801a94db.mobile.render-stabilized-v3_3.json | 2026-09-28T21:28:12.897Z | Unknown / not recorded |
| EVD-E094ECC37ACDBCF3 | https://addp.vn/chinh-sach-dat-hang | screenshot / stabilized_viewport_screenshot | evidence/screenshots/9e2bc4d9801a94db.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:28:12.980Z | Unknown / not recorded |
| EVD-7120ED52DCBD9818 | https://addp.vn/chinh-sach-dat-hang | screenshot / stabilized_full_screenshot | evidence/screenshots/9e2bc4d9801a94db.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:28:13.141Z | Unknown / not recorded |
| EVD-5AC2B3FC9161F185 | https://addp.vn/chinh-sach-dat-hang | axe / accessibility | evidence/accessibility/9e2bc4d9801a94db.mobile.render-stabilized-v3_3.json | 2026-09-28T21:28:14.514Z | Unknown / not recorded |
| EVD-B710EBF326AF51D4 | https://addp.vn/chinh-sach-dat-hang | network / network_log | evidence/network/9e2bc4d9801a94db.mobile.render-stabilized-v3_3.json | 2026-09-28T21:28:14.612Z | Unknown / not recorded |
| EVD-80CCB4C7BE675D3E | https://addp.vn/chinh-sach-dat-hang | console / console_log | evidence/console/9e2bc4d9801a94db.mobile.render-stabilized-v3_3.json | 2026-09-28T21:28:14.612Z | Unknown / not recorded |
| EVD-C8F53200EC6DF019 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | raw-http / raw_html | evidence/html/dfb21dfb6ffbbe60.render-stabilized-v3_3.raw.html | 2026-09-28T21:28:15.666Z | Unknown / not recorded |
| EVD-A1E200BE968158E2 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | seo / raw_seo | evidence/seo/dfb21dfb6ffbbe60.render-stabilized-v3_3.raw.json | 2026-09-28T21:28:15.708Z | Unknown / not recorded |
| EVD-974B331495760107 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | screenshot / initial_viewport_screenshot | evidence/screenshots/dfb21dfb6ffbbe60.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:28:34.202Z | Unknown / not recorded |
| EVD-E5026A5F9D242513 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | screenshot / initial_full_screenshot | evidence/screenshots/dfb21dfb6ffbbe60.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:28:34.424Z | Unknown / not recorded |
| EVD-7204E115807DEAA2 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | performance / lab_metrics | evidence/lighthouse/dfb21dfb6ffbbe60.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:28:34.463Z | Unknown / not recorded |
| EVD-F7E75E7E397E8353 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | browser / render_stabilization | evidence/render/dfb21dfb6ffbbe60.desktop.render-stabilized-v3_3.json | 2026-09-28T21:28:38.386Z | Unknown / not recorded |
| EVD-3673B7DBC483F700 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | browser / rendered_html | evidence/html/dfb21dfb6ffbbe60.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:28:38.404Z | Unknown / not recorded |
| EVD-505B29109F60B190 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | seo / rendered_seo | evidence/seo/dfb21dfb6ffbbe60.desktop.render-stabilized-v3_3.json | 2026-09-28T21:28:38.453Z | Unknown / not recorded |
| EVD-E23FE10369C0FB90 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | structured-data / jsonld | evidence/schema/dfb21dfb6ffbbe60.desktop.render-stabilized-v3_3.json | 2026-09-28T21:28:38.455Z | Unknown / not recorded |
| EVD-C8F52192938DAC68 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | dom / visible_controls | evidence/dom/dfb21dfb6ffbbe60.desktop.render-stabilized-v3_3.json | 2026-09-28T21:28:38.624Z | Unknown / not recorded |
| EVD-9D3C94B91D40D6D2 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | analytics / tracking_signals | evidence/analytics/dfb21dfb6ffbbe60.desktop.render-stabilized-v3_3.json | 2026-09-28T21:28:38.625Z | Unknown / not recorded |
| EVD-0803E15A276B48C8 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | screenshot / stabilized_viewport_screenshot | evidence/screenshots/dfb21dfb6ffbbe60.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:28:38.698Z | Unknown / not recorded |
| EVD-DBF6E1BA19ED57F4 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | screenshot / stabilized_full_screenshot | evidence/screenshots/dfb21dfb6ffbbe60.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:28:38.853Z | Unknown / not recorded |
| EVD-4704CE7BBDE716CD | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | axe / accessibility | evidence/accessibility/dfb21dfb6ffbbe60.desktop.render-stabilized-v3_3.json | 2026-09-28T21:28:44.820Z | Unknown / not recorded |
| EVD-F2D2D19EC02F7A18 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | network / network_log | evidence/network/dfb21dfb6ffbbe60.desktop.render-stabilized-v3_3.json | 2026-09-28T21:28:44.823Z | Unknown / not recorded |
| EVD-162CB06D90CEE2CE | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | console / console_log | evidence/console/dfb21dfb6ffbbe60.desktop.render-stabilized-v3_3.json | 2026-09-28T21:28:44.823Z | Unknown / not recorded |
| EVD-52EEB5E6EBEC6062 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | screenshot / initial_viewport_screenshot | evidence/screenshots/dfb21dfb6ffbbe60.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:29:03.722Z | Unknown / not recorded |
| EVD-7CAD357CCFE40CA3 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | screenshot / initial_full_screenshot | evidence/screenshots/dfb21dfb6ffbbe60.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:29:03.894Z | Unknown / not recorded |
| EVD-4C2398DD8A7C253A | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | performance / lab_metrics | evidence/lighthouse/dfb21dfb6ffbbe60.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:29:03.931Z | Unknown / not recorded |
| EVD-1913C4E944F68412 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | browser / render_stabilization | evidence/render/dfb21dfb6ffbbe60.mobile.render-stabilized-v3_3.json | 2026-09-28T21:29:09.450Z | Unknown / not recorded |
| EVD-CDED377117DC73C6 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | browser / rendered_html | evidence/html/dfb21dfb6ffbbe60.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:29:09.464Z | Unknown / not recorded |
| EVD-F40DCB8B02E0C8FE | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | seo / rendered_seo | evidence/seo/dfb21dfb6ffbbe60.mobile.render-stabilized-v3_3.json | 2026-09-28T21:29:09.492Z | Unknown / not recorded |
| EVD-170E4AE7C03FAECA | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | structured-data / jsonld | evidence/schema/dfb21dfb6ffbbe60.mobile.render-stabilized-v3_3.json | 2026-09-28T21:29:09.494Z | Unknown / not recorded |
| EVD-424F9467C57BAF57 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | dom / visible_controls | evidence/dom/dfb21dfb6ffbbe60.mobile.render-stabilized-v3_3.json | 2026-09-28T21:29:09.650Z | Unknown / not recorded |
| EVD-706689EC9E43F54A | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | analytics / tracking_signals | evidence/analytics/dfb21dfb6ffbbe60.mobile.render-stabilized-v3_3.json | 2026-09-28T21:29:09.652Z | Unknown / not recorded |
| EVD-C57803089B34DCC1 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | screenshot / stabilized_viewport_screenshot | evidence/screenshots/dfb21dfb6ffbbe60.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:29:09.711Z | Unknown / not recorded |
| EVD-20E4F6B75F6D4F85 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | screenshot / stabilized_full_screenshot | evidence/screenshots/dfb21dfb6ffbbe60.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:29:09.799Z | Unknown / not recorded |
| EVD-2AF4ECD12CFB3BF3 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | axe / accessibility | evidence/accessibility/dfb21dfb6ffbbe60.mobile.render-stabilized-v3_3.json | 2026-09-28T21:29:15.623Z | Unknown / not recorded |
| EVD-4142EC72F36019A6 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | network / network_log | evidence/network/dfb21dfb6ffbbe60.mobile.render-stabilized-v3_3.json | 2026-09-28T21:29:15.629Z | Unknown / not recorded |
| EVD-5299F4FE449348B9 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | console / console_log | evidence/console/dfb21dfb6ffbbe60.mobile.render-stabilized-v3_3.json | 2026-09-28T21:29:15.629Z | Unknown / not recorded |
| EVD-77C8093A1206F6D4 | https://addp.vn/chinh-sach-thanh-toan | raw-http / raw_html | evidence/html/0c8d7a240125a53f.render-stabilized-v3_3.raw.html | 2026-09-28T21:29:16.507Z | Unknown / not recorded |
| EVD-E6768CFC12E51725 | https://addp.vn/chinh-sach-thanh-toan | seo / raw_seo | evidence/seo/0c8d7a240125a53f.render-stabilized-v3_3.raw.json | 2026-09-28T21:29:16.532Z | Unknown / not recorded |
| EVD-3C55E74BB46A7D82 | https://addp.vn/chinh-sach-thanh-toan | screenshot / initial_viewport_screenshot | evidence/screenshots/0c8d7a240125a53f.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:29:35.637Z | Unknown / not recorded |
| EVD-5AF83E6C2C1586FC | https://addp.vn/chinh-sach-thanh-toan | screenshot / initial_full_screenshot | evidence/screenshots/0c8d7a240125a53f.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:29:35.981Z | Unknown / not recorded |
| EVD-D457B98926263620 | https://addp.vn/chinh-sach-thanh-toan | performance / lab_metrics | evidence/lighthouse/0c8d7a240125a53f.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:29:36.024Z | Unknown / not recorded |
| EVD-E12B0BD10A1C818F | https://addp.vn/chinh-sach-thanh-toan | browser / render_stabilization | evidence/render/0c8d7a240125a53f.desktop.render-stabilized-v3_3.json | 2026-09-28T21:29:41.107Z | Unknown / not recorded |
| EVD-0DFA6AF6C4E83E73 | https://addp.vn/chinh-sach-thanh-toan | browser / rendered_html | evidence/html/0c8d7a240125a53f.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:29:41.125Z | Unknown / not recorded |
| EVD-53E84251CAFE4203 | https://addp.vn/chinh-sach-thanh-toan | seo / rendered_seo | evidence/seo/0c8d7a240125a53f.desktop.render-stabilized-v3_3.json | 2026-09-28T21:29:41.150Z | Unknown / not recorded |
| EVD-4B526159EE6DE5AC | https://addp.vn/chinh-sach-thanh-toan | structured-data / jsonld | evidence/schema/0c8d7a240125a53f.desktop.render-stabilized-v3_3.json | 2026-09-28T21:29:41.151Z | Unknown / not recorded |
| EVD-C3267FCCB0C107BE | https://addp.vn/chinh-sach-thanh-toan | dom / visible_controls | evidence/dom/0c8d7a240125a53f.desktop.render-stabilized-v3_3.json | 2026-09-28T21:29:41.272Z | Unknown / not recorded |
| EVD-680732E8D6EFA557 | https://addp.vn/chinh-sach-thanh-toan | analytics / tracking_signals | evidence/analytics/0c8d7a240125a53f.desktop.render-stabilized-v3_3.json | 2026-09-28T21:29:41.284Z | Unknown / not recorded |
| EVD-76BB8CA6FDA62D30 | https://addp.vn/chinh-sach-thanh-toan | screenshot / stabilized_viewport_screenshot | evidence/screenshots/0c8d7a240125a53f.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:29:41.355Z | Unknown / not recorded |
| EVD-47E1AD54D1F93AD3 | https://addp.vn/chinh-sach-thanh-toan | screenshot / stabilized_full_screenshot | evidence/screenshots/0c8d7a240125a53f.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:29:41.499Z | Unknown / not recorded |
| EVD-09A16F0772FCCA76 | https://addp.vn/chinh-sach-thanh-toan | axe / accessibility | evidence/accessibility/0c8d7a240125a53f.desktop.render-stabilized-v3_3.json | 2026-09-28T21:29:47.386Z | Unknown / not recorded |
| EVD-539F645182B8F686 | https://addp.vn/chinh-sach-thanh-toan | network / network_log | evidence/network/0c8d7a240125a53f.desktop.render-stabilized-v3_3.json | 2026-09-28T21:29:47.389Z | Unknown / not recorded |
| EVD-DBD8287B0D021453 | https://addp.vn/chinh-sach-thanh-toan | console / console_log | evidence/console/0c8d7a240125a53f.desktop.render-stabilized-v3_3.json | 2026-09-28T21:29:47.389Z | Unknown / not recorded |
| EVD-E7C4608C624741EE | https://addp.vn/chinh-sach-thanh-toan | screenshot / initial_viewport_screenshot | evidence/screenshots/0c8d7a240125a53f.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:30:06.326Z | Unknown / not recorded |
| EVD-1D169B2174FDA269 | https://addp.vn/chinh-sach-thanh-toan | screenshot / initial_full_screenshot | evidence/screenshots/0c8d7a240125a53f.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:30:06.469Z | Unknown / not recorded |
| EVD-44BE424703CA5FE2 | https://addp.vn/chinh-sach-thanh-toan | performance / lab_metrics | evidence/lighthouse/0c8d7a240125a53f.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:30:06.501Z | Unknown / not recorded |
| EVD-FD156C316972259C | https://addp.vn/chinh-sach-thanh-toan | browser / render_stabilization | evidence/render/0c8d7a240125a53f.mobile.render-stabilized-v3_3.json | 2026-09-28T21:30:12.154Z | Unknown / not recorded |
| EVD-7A5C61340ACA510D | https://addp.vn/chinh-sach-thanh-toan | browser / rendered_html | evidence/html/0c8d7a240125a53f.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:30:12.166Z | Unknown / not recorded |
| EVD-CA829499836A8B5F | https://addp.vn/chinh-sach-thanh-toan | seo / rendered_seo | evidence/seo/0c8d7a240125a53f.mobile.render-stabilized-v3_3.json | 2026-09-28T21:30:12.192Z | Unknown / not recorded |
| EVD-333353E5AC20DC74 | https://addp.vn/chinh-sach-thanh-toan | structured-data / jsonld | evidence/schema/0c8d7a240125a53f.mobile.render-stabilized-v3_3.json | 2026-09-28T21:30:12.194Z | Unknown / not recorded |
| EVD-BA3477C809CB3419 | https://addp.vn/chinh-sach-thanh-toan | dom / visible_controls | evidence/dom/0c8d7a240125a53f.mobile.render-stabilized-v3_3.json | 2026-09-28T21:30:12.321Z | Unknown / not recorded |
| EVD-2BC0AB1BD93A198A | https://addp.vn/chinh-sach-thanh-toan | analytics / tracking_signals | evidence/analytics/0c8d7a240125a53f.mobile.render-stabilized-v3_3.json | 2026-09-28T21:30:12.323Z | Unknown / not recorded |
| EVD-0581462E290EDEBD | https://addp.vn/chinh-sach-thanh-toan | screenshot / stabilized_viewport_screenshot | evidence/screenshots/0c8d7a240125a53f.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:30:12.370Z | Unknown / not recorded |
| EVD-563D26E4913D8518 | https://addp.vn/chinh-sach-thanh-toan | screenshot / stabilized_full_screenshot | evidence/screenshots/0c8d7a240125a53f.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:30:12.475Z | Unknown / not recorded |
| EVD-8DC5D2A1323EB75D | https://addp.vn/chinh-sach-thanh-toan | axe / accessibility | evidence/accessibility/0c8d7a240125a53f.mobile.render-stabilized-v3_3.json | 2026-09-28T21:30:18.380Z | Unknown / not recorded |
| EVD-67A2E23298A78E2B | https://addp.vn/chinh-sach-thanh-toan | network / network_log | evidence/network/0c8d7a240125a53f.mobile.render-stabilized-v3_3.json | 2026-09-28T21:30:18.383Z | Unknown / not recorded |
| EVD-AAE110F7EE39197E | https://addp.vn/chinh-sach-thanh-toan | console / console_log | evidence/console/0c8d7a240125a53f.mobile.render-stabilized-v3_3.json | 2026-09-28T21:30:18.383Z | Unknown / not recorded |
| EVD-5FE8C7DFE5FA5789 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | raw-http / raw_html | evidence/html/180692c5706f9ac0.render-stabilized-v3_3.raw.html | 2026-09-28T21:30:19.356Z | Unknown / not recorded |
| EVD-32A8C09E57279E76 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | seo / raw_seo | evidence/seo/180692c5706f9ac0.render-stabilized-v3_3.raw.json | 2026-09-28T21:30:19.380Z | Unknown / not recorded |
| EVD-E8D6EEB10A690526 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | screenshot / initial_viewport_screenshot | evidence/screenshots/180692c5706f9ac0.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:30:42.741Z | Unknown / not recorded |
| EVD-9878CEBDB12D4A7D | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | screenshot / initial_full_screenshot | evidence/screenshots/180692c5706f9ac0.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:30:42.850Z | Unknown / not recorded |
| EVD-D36216640F06E233 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | performance / lab_metrics | evidence/lighthouse/180692c5706f9ac0.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:30:42.875Z | Unknown / not recorded |
| EVD-5844EC8EE161FBB5 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | browser / render_stabilization | evidence/render/180692c5706f9ac0.desktop.render-stabilized-v3_3.json | 2026-09-28T21:30:46.780Z | Unknown / not recorded |
| EVD-CE8369B9DDC5BE91 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | browser / rendered_html | evidence/html/180692c5706f9ac0.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:30:46.795Z | Unknown / not recorded |
| EVD-FFE6703E52822430 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | seo / rendered_seo | evidence/seo/180692c5706f9ac0.desktop.render-stabilized-v3_3.json | 2026-09-28T21:30:46.821Z | Unknown / not recorded |
| EVD-7B03B8F99DBF45D7 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | structured-data / jsonld | evidence/schema/180692c5706f9ac0.desktop.render-stabilized-v3_3.json | 2026-09-28T21:30:46.824Z | Unknown / not recorded |
| EVD-BD47CFEBB35BB95F | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | dom / visible_controls | evidence/dom/180692c5706f9ac0.desktop.render-stabilized-v3_3.json | 2026-09-28T21:30:46.993Z | Unknown / not recorded |
| EVD-FC669DB88E50A0C1 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | analytics / tracking_signals | evidence/analytics/180692c5706f9ac0.desktop.render-stabilized-v3_3.json | 2026-09-28T21:30:46.994Z | Unknown / not recorded |
| EVD-C99E2C6A78DD0470 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | screenshot / stabilized_viewport_screenshot | evidence/screenshots/180692c5706f9ac0.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:30:47.071Z | Unknown / not recorded |
| EVD-9B5CE54A089DC7FD | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | screenshot / stabilized_full_screenshot | evidence/screenshots/180692c5706f9ac0.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:30:47.163Z | Unknown / not recorded |
| EVD-CECFD5F25F68576E | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | axe / accessibility | evidence/accessibility/180692c5706f9ac0.desktop.render-stabilized-v3_3.json | 2026-09-28T21:30:57.842Z | Unknown / not recorded |
| EVD-F8A59667623BE5ED | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | network / network_log | evidence/network/180692c5706f9ac0.desktop.render-stabilized-v3_3.json | 2026-09-28T21:30:57.846Z | Unknown / not recorded |
| EVD-070E1964DD1BBAB3 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | console / console_log | evidence/console/180692c5706f9ac0.desktop.render-stabilized-v3_3.json | 2026-09-28T21:30:57.846Z | Unknown / not recorded |
| EVD-DAF2D35715871EC1 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | network / network_log | evidence/network/180692c5706f9ac0.mobile.render-stabilized-v3_3.json | 2026-09-28T21:31:14.094Z | Unknown / not recorded |
| EVD-0C6420F3F5F6E4DF | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | console / console_log | evidence/console/180692c5706f9ac0.mobile.render-stabilized-v3_3.json | 2026-09-28T21:31:14.094Z | Unknown / not recorded |
| EVD-1D357E27D12C0704 | https://addp.vn/contact | raw-http / raw_html | evidence/html/c08fc3972f30bc5d.render-stabilized-v3_3.raw.html | 2026-09-28T21:31:17.911Z | Unknown / not recorded |
| EVD-E0930204A9FB2002 | https://addp.vn/contact | seo / raw_seo | evidence/seo/c08fc3972f30bc5d.render-stabilized-v3_3.raw.json | 2026-09-28T21:31:17.995Z | Unknown / not recorded |
| EVD-BDB13CADC35739BE | https://addp.vn/contact | screenshot / initial_viewport_screenshot | evidence/screenshots/c08fc3972f30bc5d.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:31:40.244Z | Unknown / not recorded |
| EVD-B37D4FD432D090BC | https://addp.vn/contact | screenshot / initial_full_screenshot | evidence/screenshots/c08fc3972f30bc5d.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:31:40.546Z | Unknown / not recorded |
| EVD-BF2F0A463C072CF4 | https://addp.vn/contact | performance / lab_metrics | evidence/lighthouse/c08fc3972f30bc5d.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:31:40.570Z | Unknown / not recorded |
| EVD-BC6F781012E438AD | https://addp.vn/contact | browser / render_stabilization | evidence/render/c08fc3972f30bc5d.desktop.render-stabilized-v3_3.json | 2026-09-28T21:31:46.285Z | Unknown / not recorded |
| EVD-84BC40F331C94448 | https://addp.vn/contact | browser / rendered_html | evidence/html/c08fc3972f30bc5d.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:31:46.300Z | Unknown / not recorded |
| EVD-13C7A1BCD9836960 | https://addp.vn/contact | seo / rendered_seo | evidence/seo/c08fc3972f30bc5d.desktop.render-stabilized-v3_3.json | 2026-09-28T21:31:46.356Z | Unknown / not recorded |
| EVD-1BCE1127FE6991C5 | https://addp.vn/contact | structured-data / jsonld | evidence/schema/c08fc3972f30bc5d.desktop.render-stabilized-v3_3.json | 2026-09-28T21:31:46.368Z | Unknown / not recorded |
| EVD-02A56067FC2FDB37 | https://addp.vn/contact | dom / visible_controls | evidence/dom/c08fc3972f30bc5d.desktop.render-stabilized-v3_3.json | 2026-09-28T21:31:46.579Z | Unknown / not recorded |
| EVD-125F2A290282DAD5 | https://addp.vn/contact | analytics / tracking_signals | evidence/analytics/c08fc3972f30bc5d.desktop.render-stabilized-v3_3.json | 2026-09-28T21:31:46.580Z | Unknown / not recorded |
| EVD-B84A0ED47D353E21 | https://addp.vn/contact | screenshot / stabilized_viewport_screenshot | evidence/screenshots/c08fc3972f30bc5d.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:31:46.664Z | Unknown / not recorded |
| EVD-2F79B9FA74F3CFB8 | https://addp.vn/contact | screenshot / stabilized_full_screenshot | evidence/screenshots/c08fc3972f30bc5d.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:31:46.854Z | Unknown / not recorded |
| EVD-8FE19B21EB00B8DD | https://addp.vn/contact | axe / accessibility | evidence/accessibility/c08fc3972f30bc5d.desktop.render-stabilized-v3_3.json | 2026-09-28T21:31:52.768Z | Unknown / not recorded |
| EVD-37241F7F5A0165D3 | https://addp.vn/contact | network / network_log | evidence/network/c08fc3972f30bc5d.desktop.render-stabilized-v3_3.json | 2026-09-28T21:31:52.772Z | Unknown / not recorded |
| EVD-B9CDE2496C272A45 | https://addp.vn/contact | console / console_log | evidence/console/c08fc3972f30bc5d.desktop.render-stabilized-v3_3.json | 2026-09-28T21:31:52.772Z | Unknown / not recorded |
| EVD-C6233C1FA3F3C852 | https://addp.vn/contact | screenshot / initial_viewport_screenshot | evidence/screenshots/c08fc3972f30bc5d.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:32:15.603Z | Unknown / not recorded |
| EVD-000ABC9BA02E5691 | https://addp.vn/contact | screenshot / initial_full_screenshot | evidence/screenshots/c08fc3972f30bc5d.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:32:15.734Z | Unknown / not recorded |
| EVD-1C116135AEE5BAB7 | https://addp.vn/contact | performance / lab_metrics | evidence/lighthouse/c08fc3972f30bc5d.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:32:15.753Z | Unknown / not recorded |
| EVD-DA043BF78E7732B5 | https://addp.vn/contact | browser / render_stabilization | evidence/render/c08fc3972f30bc5d.mobile.render-stabilized-v3_3.json | 2026-09-28T21:32:23.707Z | Unknown / not recorded |
| EVD-D5EB96A3D37FF1D3 | https://addp.vn/contact | browser / rendered_html | evidence/html/c08fc3972f30bc5d.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:32:23.754Z | Unknown / not recorded |
| EVD-992DAA5535C61123 | https://addp.vn/contact | seo / rendered_seo | evidence/seo/c08fc3972f30bc5d.mobile.render-stabilized-v3_3.json | 2026-09-28T21:32:24.022Z | Unknown / not recorded |
| EVD-D2348A9DCA7F467C | https://addp.vn/contact | structured-data / jsonld | evidence/schema/c08fc3972f30bc5d.mobile.render-stabilized-v3_3.json | 2026-09-28T21:32:24.046Z | Unknown / not recorded |
| EVD-90FC7ACB93DA268D | https://addp.vn/contact | dom / visible_controls | evidence/dom/c08fc3972f30bc5d.mobile.render-stabilized-v3_3.json | 2026-09-28T21:32:24.621Z | Unknown / not recorded |
| EVD-BB71FEEDC0284D04 | https://addp.vn/contact | analytics / tracking_signals | evidence/analytics/c08fc3972f30bc5d.mobile.render-stabilized-v3_3.json | 2026-09-28T21:32:24.626Z | Unknown / not recorded |
| EVD-17F02F29A6E1B6B4 | https://addp.vn/contact | screenshot / stabilized_viewport_screenshot | evidence/screenshots/c08fc3972f30bc5d.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:32:24.687Z | Unknown / not recorded |
| EVD-C7AD1BDA3A52082B | https://addp.vn/contact | screenshot / stabilized_full_screenshot | evidence/screenshots/c08fc3972f30bc5d.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:32:24.829Z | Unknown / not recorded |
| EVD-0DE7127BE908DB1C | https://addp.vn/contact | axe / accessibility | evidence/accessibility/c08fc3972f30bc5d.mobile.render-stabilized-v3_3.json | 2026-09-28T21:32:31.325Z | Unknown / not recorded |
| EVD-C47D6FC3F3734C58 | https://addp.vn/contact | network / network_log | evidence/network/c08fc3972f30bc5d.mobile.render-stabilized-v3_3.json | 2026-09-28T21:32:31.363Z | Unknown / not recorded |
| EVD-C4A9DBCBB7866DEE | https://addp.vn/contact | console / console_log | evidence/console/c08fc3972f30bc5d.mobile.render-stabilized-v3_3.json | 2026-09-28T21:32:31.363Z | Unknown / not recorded |
| EVD-1200698AEF54EF61 | https://addp.vn/gioi-thieu | raw-http / raw_html | evidence/html/d6027b0617e26ca1.render-stabilized-v3_3.raw.html | 2026-09-28T21:32:32.447Z | Unknown / not recorded |
| EVD-75BBB52127542EC3 | https://addp.vn/gioi-thieu | seo / raw_seo | evidence/seo/d6027b0617e26ca1.render-stabilized-v3_3.raw.json | 2026-09-28T21:32:32.642Z | Unknown / not recorded |
| EVD-972C27829B29CD1B | https://addp.vn/gioi-thieu | screenshot / initial_viewport_screenshot | evidence/screenshots/d6027b0617e26ca1.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:32:53.689Z | Unknown / not recorded |
| EVD-51B9BBAD2B0A121A | https://addp.vn/gioi-thieu | screenshot / initial_full_screenshot | evidence/screenshots/d6027b0617e26ca1.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:32:54.072Z | Unknown / not recorded |
| EVD-B912E0E9CCFD3BAD | https://addp.vn/gioi-thieu | performance / lab_metrics | evidence/lighthouse/d6027b0617e26ca1.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:32:54.121Z | Unknown / not recorded |
| EVD-C20ECA437F9B6C90 | https://addp.vn/gioi-thieu | browser / render_stabilization | evidence/render/d6027b0617e26ca1.desktop.render-stabilized-v3_3.json | 2026-09-28T21:32:59.419Z | Unknown / not recorded |
| EVD-0683C26980504619 | https://addp.vn/gioi-thieu | browser / rendered_html | evidence/html/d6027b0617e26ca1.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:32:59.452Z | Unknown / not recorded |
| EVD-1F3469D65CD67492 | https://addp.vn/gioi-thieu | seo / rendered_seo | evidence/seo/d6027b0617e26ca1.desktop.render-stabilized-v3_3.json | 2026-09-28T21:32:59.550Z | Unknown / not recorded |
| EVD-CE1AE89E533DBFFC | https://addp.vn/gioi-thieu | structured-data / jsonld | evidence/schema/d6027b0617e26ca1.desktop.render-stabilized-v3_3.json | 2026-09-28T21:32:59.559Z | Unknown / not recorded |
| EVD-6CD5E70AEA29076F | https://addp.vn/gioi-thieu | dom / visible_controls | evidence/dom/d6027b0617e26ca1.desktop.render-stabilized-v3_3.json | 2026-09-28T21:32:59.891Z | Unknown / not recorded |
| EVD-0B566D85DC39FA02 | https://addp.vn/gioi-thieu | analytics / tracking_signals | evidence/analytics/d6027b0617e26ca1.desktop.render-stabilized-v3_3.json | 2026-09-28T21:32:59.893Z | FND-ANALYTICS-analytics-public-signals-not-observed-sample |
| EVD-3799948B7804CC0D | https://addp.vn/gioi-thieu | screenshot / stabilized_viewport_screenshot | evidence/screenshots/d6027b0617e26ca1.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:32:59.980Z | Unknown / not recorded |
| EVD-15C51083829E2538 | https://addp.vn/gioi-thieu | screenshot / stabilized_full_screenshot | evidence/screenshots/d6027b0617e26ca1.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:33:00.205Z | Unknown / not recorded |
| EVD-6C6DD193D20D9FB2 | https://addp.vn/gioi-thieu | axe / accessibility | evidence/accessibility/d6027b0617e26ca1.desktop.render-stabilized-v3_3.json | 2026-09-28T21:33:06.496Z | Unknown / not recorded |
| EVD-F75B45BE81D139FB | https://addp.vn/gioi-thieu | network / network_log | evidence/network/d6027b0617e26ca1.desktop.render-stabilized-v3_3.json | 2026-09-28T21:33:06.510Z | Unknown / not recorded |
| EVD-A3F8091724B6D2D0 | https://addp.vn/gioi-thieu | console / console_log | evidence/console/d6027b0617e26ca1.desktop.render-stabilized-v3_3.json | 2026-09-28T21:33:06.510Z | Unknown / not recorded |
| EVD-78FE3DB6F32D0782 | https://addp.vn/gioi-thieu | screenshot / initial_viewport_screenshot | evidence/screenshots/d6027b0617e26ca1.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:33:28.538Z | Unknown / not recorded |
| EVD-62ED96958EEBD745 | https://addp.vn/gioi-thieu | screenshot / initial_full_screenshot | evidence/screenshots/d6027b0617e26ca1.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:33:28.709Z | Unknown / not recorded |
| EVD-3F0A6FD5DEC1A56B | https://addp.vn/gioi-thieu | performance / lab_metrics | evidence/lighthouse/d6027b0617e26ca1.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:33:28.727Z | Unknown / not recorded |
| EVD-91B19FF8E80C6C73 | https://addp.vn/gioi-thieu | browser / render_stabilization | evidence/render/d6027b0617e26ca1.mobile.render-stabilized-v3_3.json | 2026-09-28T21:33:36.097Z | Unknown / not recorded |
| EVD-8FDD8896E0E20819 | https://addp.vn/gioi-thieu | browser / rendered_html | evidence/html/d6027b0617e26ca1.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:33:36.113Z | Unknown / not recorded |
| EVD-12766E80074DD58C | https://addp.vn/gioi-thieu | seo / rendered_seo | evidence/seo/d6027b0617e26ca1.mobile.render-stabilized-v3_3.json | 2026-09-28T21:33:36.151Z | Unknown / not recorded |
| EVD-4E6681AC1DF8C520 | https://addp.vn/gioi-thieu | structured-data / jsonld | evidence/schema/d6027b0617e26ca1.mobile.render-stabilized-v3_3.json | 2026-09-28T21:33:36.153Z | Unknown / not recorded |
| EVD-07E1FB1ADA81B1B6 | https://addp.vn/gioi-thieu | dom / visible_controls | evidence/dom/d6027b0617e26ca1.mobile.render-stabilized-v3_3.json | 2026-09-28T21:33:36.324Z | Unknown / not recorded |
| EVD-AEA3DB2C2D2E0F53 | https://addp.vn/gioi-thieu | analytics / tracking_signals | evidence/analytics/d6027b0617e26ca1.mobile.render-stabilized-v3_3.json | 2026-09-28T21:33:36.326Z | FND-ANALYTICS-analytics-public-signals-not-observed-sample |
| EVD-26BA666C7BDB43AE | https://addp.vn/gioi-thieu | screenshot / stabilized_viewport_screenshot | evidence/screenshots/d6027b0617e26ca1.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:33:36.381Z | Unknown / not recorded |
| EVD-088FF948A5499146 | https://addp.vn/gioi-thieu | screenshot / stabilized_full_screenshot | evidence/screenshots/d6027b0617e26ca1.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:33:36.494Z | Unknown / not recorded |
| EVD-B8230F0B77B37EC3 | https://addp.vn/gioi-thieu | axe / accessibility | evidence/accessibility/d6027b0617e26ca1.mobile.render-stabilized-v3_3.json | 2026-09-28T21:33:37.977Z | Unknown / not recorded |
| EVD-82899057B2172A27 | https://addp.vn/gioi-thieu | network / network_log | evidence/network/d6027b0617e26ca1.mobile.render-stabilized-v3_3.json | 2026-09-28T21:33:37.986Z | Unknown / not recorded |
| EVD-7ED98C4AF5707C82 | https://addp.vn/gioi-thieu | console / console_log | evidence/console/d6027b0617e26ca1.mobile.render-stabilized-v3_3.json | 2026-09-28T21:33:37.986Z | Unknown / not recorded |
| EVD-7175E2F7A2FB1CE7 | https://addp.vn/benh-ly | raw-http / raw_html | evidence/html/65e3d78cc6db4646.render-stabilized-v3_3.raw.html | 2026-09-28T21:33:39.030Z | Unknown / not recorded |
| EVD-BB416E07741DC582 | https://addp.vn/benh-ly | seo / raw_seo | evidence/seo/65e3d78cc6db4646.render-stabilized-v3_3.raw.json | 2026-09-28T21:33:39.093Z | Unknown / not recorded |
| EVD-643A9233E4977FA3 | https://addp.vn/benh-ly | screenshot / initial_viewport_screenshot | evidence/screenshots/65e3d78cc6db4646.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:33:58.755Z | Unknown / not recorded |
| EVD-5CB55B41AF89A2EF | https://addp.vn/benh-ly | screenshot / initial_full_screenshot | evidence/screenshots/65e3d78cc6db4646.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:33:59.129Z | Unknown / not recorded |
| EVD-035E196C34BF6621 | https://addp.vn/benh-ly | performance / lab_metrics | evidence/lighthouse/65e3d78cc6db4646.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:33:59.179Z | FND-PERFORMANCE-PERF-002 |
| EVD-6E4E983D97511C2C | https://addp.vn/benh-ly | browser / render_stabilization | evidence/render/65e3d78cc6db4646.desktop.render-stabilized-v3_3.json | 2026-09-28T21:34:05.556Z | Unknown / not recorded |
| EVD-F937EC170B27DBBE | https://addp.vn/benh-ly | browser / rendered_html | evidence/html/65e3d78cc6db4646.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:34:05.584Z | Unknown / not recorded |
| EVD-47098AAEBE5261A0 | https://addp.vn/benh-ly | seo / rendered_seo | evidence/seo/65e3d78cc6db4646.desktop.render-stabilized-v3_3.json | 2026-09-28T21:34:05.645Z | Unknown / not recorded |
| EVD-F86279CF72B189AD | https://addp.vn/benh-ly | structured-data / jsonld | evidence/schema/65e3d78cc6db4646.desktop.render-stabilized-v3_3.json | 2026-09-28T21:34:05.647Z | Unknown / not recorded |
| EVD-2BBB547A1CCB0B8A | https://addp.vn/benh-ly | dom / visible_controls | evidence/dom/65e3d78cc6db4646.desktop.render-stabilized-v3_3.json | 2026-09-28T21:34:05.892Z | Unknown / not recorded |
| EVD-4AEA654B6000F25D | https://addp.vn/benh-ly | analytics / tracking_signals | evidence/analytics/65e3d78cc6db4646.desktop.render-stabilized-v3_3.json | 2026-09-28T21:34:05.894Z | Unknown / not recorded |
| EVD-1ECFB5F834D05D18 | https://addp.vn/benh-ly | screenshot / stabilized_viewport_screenshot | evidence/screenshots/65e3d78cc6db4646.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:34:05.972Z | Unknown / not recorded |
| EVD-EBFD842D1AB1DCA2 | https://addp.vn/benh-ly | screenshot / stabilized_full_screenshot | evidence/screenshots/65e3d78cc6db4646.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:34:06.305Z | Unknown / not recorded |
| EVD-FF04CCC555BB203F | https://addp.vn/benh-ly | axe / accessibility | evidence/accessibility/65e3d78cc6db4646.desktop.render-stabilized-v3_3.json | 2026-09-28T21:34:13.176Z | Unknown / not recorded |
| EVD-323208DDBDE8BA51 | https://addp.vn/benh-ly | network / network_log | evidence/network/65e3d78cc6db4646.desktop.render-stabilized-v3_3.json | 2026-09-28T21:34:13.181Z | Unknown / not recorded |
| EVD-13097237108162EC | https://addp.vn/benh-ly | console / console_log | evidence/console/65e3d78cc6db4646.desktop.render-stabilized-v3_3.json | 2026-09-28T21:34:13.181Z | Unknown / not recorded |
| EVD-E3815B2D67C9E9D0 | https://addp.vn/benh-ly | screenshot / initial_viewport_screenshot | evidence/screenshots/65e3d78cc6db4646.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:34:35.441Z | Unknown / not recorded |
| EVD-A5E8A56EFABC1C2A | https://addp.vn/benh-ly | screenshot / initial_full_screenshot | evidence/screenshots/65e3d78cc6db4646.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:34:35.830Z | Unknown / not recorded |
| EVD-D2E949A54A61C783 | https://addp.vn/benh-ly | performance / lab_metrics | evidence/lighthouse/65e3d78cc6db4646.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:34:35.876Z | FND-PERFORMANCE-PERF-002 |
| EVD-0D210483B3B8EDE0 | https://addp.vn/benh-ly | browser / render_stabilization | evidence/render/65e3d78cc6db4646.mobile.render-stabilized-v3_3.json | 2026-09-28T21:34:47.142Z | Unknown / not recorded |
| EVD-966EC45D4AF196BD | https://addp.vn/benh-ly | browser / rendered_html | evidence/html/65e3d78cc6db4646.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:34:47.163Z | Unknown / not recorded |
| EVD-1B0A276A53B73033 | https://addp.vn/benh-ly | seo / rendered_seo | evidence/seo/65e3d78cc6db4646.mobile.render-stabilized-v3_3.json | 2026-09-28T21:34:47.211Z | Unknown / not recorded |
| EVD-0DCD4A8A64CC442A | https://addp.vn/benh-ly | structured-data / jsonld | evidence/schema/65e3d78cc6db4646.mobile.render-stabilized-v3_3.json | 2026-09-28T21:34:47.213Z | Unknown / not recorded |
| EVD-BDE27B7A77932BD7 | https://addp.vn/benh-ly | dom / visible_controls | evidence/dom/65e3d78cc6db4646.mobile.render-stabilized-v3_3.json | 2026-09-28T21:34:47.432Z | Unknown / not recorded |
| EVD-325723A3C17A625A | https://addp.vn/benh-ly | analytics / tracking_signals | evidence/analytics/65e3d78cc6db4646.mobile.render-stabilized-v3_3.json | 2026-09-28T21:34:47.433Z | Unknown / not recorded |
| EVD-DB8847ABAA4D0FC3 | https://addp.vn/benh-ly | screenshot / stabilized_viewport_screenshot | evidence/screenshots/65e3d78cc6db4646.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:34:47.490Z | Unknown / not recorded |
| EVD-81CDC5EAF1624CFC | https://addp.vn/benh-ly | screenshot / stabilized_full_screenshot | evidence/screenshots/65e3d78cc6db4646.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:34:47.636Z | Unknown / not recorded |
| EVD-A23DC6E6D564E28D | https://addp.vn/benh-ly | axe / accessibility | evidence/accessibility/65e3d78cc6db4646.mobile.render-stabilized-v3_3.json | 2026-09-28T21:34:54.174Z | Unknown / not recorded |
| EVD-961370475CF4F626 | https://addp.vn/benh-ly | network / network_log | evidence/network/65e3d78cc6db4646.mobile.render-stabilized-v3_3.json | 2026-09-28T21:34:54.178Z | Unknown / not recorded |
| EVD-25440D834BFF6B87 | https://addp.vn/benh-ly | console / console_log | evidence/console/65e3d78cc6db4646.mobile.render-stabilized-v3_3.json | 2026-09-28T21:34:54.178Z | Unknown / not recorded |
| EVD-08F52276A2F3039C | https://addp.vn/blog/category/suc-khoe-tieu-duong | raw-http / raw_html | evidence/html/b929b6c94da55a49.render-stabilized-v3_3.raw.html | 2026-09-28T21:34:55.242Z | Unknown / not recorded |
| EVD-0BCCF09E222917B1 | https://addp.vn/blog/category/suc-khoe-tieu-duong | seo / raw_seo | evidence/seo/b929b6c94da55a49.render-stabilized-v3_3.raw.json | 2026-09-28T21:34:55.274Z | Unknown / not recorded |
| EVD-70512BB331D17D68 | https://addp.vn/blog/category/suc-khoe-tieu-duong | screenshot / initial_viewport_screenshot | evidence/screenshots/b929b6c94da55a49.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:35:13.784Z | Unknown / not recorded |
| EVD-DE6A91E054F80415 | https://addp.vn/blog/category/suc-khoe-tieu-duong | screenshot / initial_full_screenshot | evidence/screenshots/b929b6c94da55a49.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:35:14.397Z | Unknown / not recorded |
| EVD-6FA8247E2A86C79A | https://addp.vn/blog/category/suc-khoe-tieu-duong | performance / lab_metrics | evidence/lighthouse/b929b6c94da55a49.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:35:14.426Z | Unknown / not recorded |
| EVD-22A72C4658743F46 | https://addp.vn/blog/category/suc-khoe-tieu-duong | browser / render_stabilization | evidence/render/b929b6c94da55a49.desktop.render-stabilized-v3_3.json | 2026-09-28T21:35:21.027Z | Unknown / not recorded |
| EVD-BD78A039077C5231 | https://addp.vn/blog/category/suc-khoe-tieu-duong | browser / rendered_html | evidence/html/b929b6c94da55a49.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:35:21.043Z | Unknown / not recorded |
| EVD-193B911618A48573 | https://addp.vn/blog/category/suc-khoe-tieu-duong | seo / rendered_seo | evidence/seo/b929b6c94da55a49.desktop.render-stabilized-v3_3.json | 2026-09-28T21:35:21.075Z | Unknown / not recorded |
| EVD-A5A62E8017987EAC | https://addp.vn/blog/category/suc-khoe-tieu-duong | structured-data / jsonld | evidence/schema/b929b6c94da55a49.desktop.render-stabilized-v3_3.json | 2026-09-28T21:35:21.076Z | Unknown / not recorded |
| EVD-B4D26A7C5573A5DF | https://addp.vn/blog/category/suc-khoe-tieu-duong | dom / visible_controls | evidence/dom/b929b6c94da55a49.desktop.render-stabilized-v3_3.json | 2026-09-28T21:35:21.321Z | Unknown / not recorded |
| EVD-F90BC40EAF6B6DCF | https://addp.vn/blog/category/suc-khoe-tieu-duong | analytics / tracking_signals | evidence/analytics/b929b6c94da55a49.desktop.render-stabilized-v3_3.json | 2026-09-28T21:35:21.323Z | Unknown / not recorded |
| EVD-65674D7855E4F693 | https://addp.vn/blog/category/suc-khoe-tieu-duong | screenshot / stabilized_viewport_screenshot | evidence/screenshots/b929b6c94da55a49.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:35:21.438Z | Unknown / not recorded |
| EVD-1D1316F928585A48 | https://addp.vn/blog/category/suc-khoe-tieu-duong | screenshot / stabilized_full_screenshot | evidence/screenshots/b929b6c94da55a49.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:35:21.843Z | Unknown / not recorded |
| EVD-22E0DDE6D2609F17 | https://addp.vn/blog/category/suc-khoe-tieu-duong | axe / accessibility | evidence/accessibility/b929b6c94da55a49.desktop.render-stabilized-v3_3.json | 2026-09-28T21:35:28.062Z | Unknown / not recorded |
| EVD-45B3583AD1D43A79 | https://addp.vn/blog/category/suc-khoe-tieu-duong | network / network_log | evidence/network/b929b6c94da55a49.desktop.render-stabilized-v3_3.json | 2026-09-28T21:35:28.068Z | Unknown / not recorded |
| EVD-56E8989382649663 | https://addp.vn/blog/category/suc-khoe-tieu-duong | console / console_log | evidence/console/b929b6c94da55a49.desktop.render-stabilized-v3_3.json | 2026-09-28T21:35:28.068Z | Unknown / not recorded |
| EVD-45D40B9E081A566D | https://addp.vn/blog/category/suc-khoe-tieu-duong | screenshot / initial_viewport_screenshot | evidence/screenshots/b929b6c94da55a49.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:35:49.126Z | Unknown / not recorded |
| EVD-67C0F1FB5C6436C1 | https://addp.vn/blog/category/suc-khoe-tieu-duong | screenshot / initial_full_screenshot | evidence/screenshots/b929b6c94da55a49.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:35:50.266Z | Unknown / not recorded |
| EVD-203B6173B6A72522 | https://addp.vn/blog/category/suc-khoe-tieu-duong | performance / lab_metrics | evidence/lighthouse/b929b6c94da55a49.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:35:50.349Z | Unknown / not recorded |
| EVD-244CBDFEC25178D5 | https://addp.vn/blog/category/suc-khoe-tieu-duong | browser / render_stabilization | evidence/render/b929b6c94da55a49.mobile.render-stabilized-v3_3.json | 2026-09-28T21:36:03.945Z | Unknown / not recorded |
| EVD-4E535E98956506AC | https://addp.vn/blog/category/suc-khoe-tieu-duong | browser / rendered_html | evidence/html/b929b6c94da55a49.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:36:03.972Z | Unknown / not recorded |
| EVD-0E21303A3735BA32 | https://addp.vn/blog/category/suc-khoe-tieu-duong | seo / rendered_seo | evidence/seo/b929b6c94da55a49.mobile.render-stabilized-v3_3.json | 2026-09-28T21:36:04.031Z | Unknown / not recorded |
| EVD-6362D91F68007AC2 | https://addp.vn/blog/category/suc-khoe-tieu-duong | structured-data / jsonld | evidence/schema/b929b6c94da55a49.mobile.render-stabilized-v3_3.json | 2026-09-28T21:36:04.032Z | Unknown / not recorded |
| EVD-DE7D7ACBC351630E | https://addp.vn/blog/category/suc-khoe-tieu-duong | dom / visible_controls | evidence/dom/b929b6c94da55a49.mobile.render-stabilized-v3_3.json | 2026-09-28T21:36:04.221Z | Unknown / not recorded |
| EVD-AA83068AD42CC1D4 | https://addp.vn/blog/category/suc-khoe-tieu-duong | analytics / tracking_signals | evidence/analytics/b929b6c94da55a49.mobile.render-stabilized-v3_3.json | 2026-09-28T21:36:04.223Z | Unknown / not recorded |
| EVD-70BB53F1B279EAEE | https://addp.vn/blog/category/suc-khoe-tieu-duong | screenshot / stabilized_viewport_screenshot | evidence/screenshots/b929b6c94da55a49.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:36:04.270Z | Unknown / not recorded |
| EVD-E9F76FC405A54828 | https://addp.vn/blog/category/suc-khoe-tieu-duong | screenshot / stabilized_full_screenshot | evidence/screenshots/b929b6c94da55a49.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:36:04.554Z | Unknown / not recorded |
| EVD-9C7D299C355C1D56 | https://addp.vn/blog/category/suc-khoe-tieu-duong | axe / accessibility | evidence/accessibility/b929b6c94da55a49.mobile.render-stabilized-v3_3.json | 2026-09-28T21:36:10.809Z | Unknown / not recorded |
| EVD-38A181FAB588ED46 | https://addp.vn/blog/category/suc-khoe-tieu-duong | network / network_log | evidence/network/b929b6c94da55a49.mobile.render-stabilized-v3_3.json | 2026-09-28T21:36:10.826Z | Unknown / not recorded |
| EVD-F0AF488DF2881610 | https://addp.vn/blog/category/suc-khoe-tieu-duong | console / console_log | evidence/console/b929b6c94da55a49.mobile.render-stabilized-v3_3.json | 2026-09-28T21:36:10.826Z | Unknown / not recorded |
| EVD-953E0DAF9B7BE485 | https://addp.vn/catalogsearch/advanced/ | raw-http / raw_html | evidence/html/39382f2ae8662c52.render-stabilized-v3_3.raw.html | 2026-09-28T21:36:11.760Z | Unknown / not recorded |
| EVD-0592342C83370139 | https://addp.vn/catalogsearch/advanced/ | seo / raw_seo | evidence/seo/39382f2ae8662c52.render-stabilized-v3_3.raw.json | 2026-09-28T21:36:11.789Z | Unknown / not recorded |
| EVD-7DB11E626D892EAA | https://addp.vn/catalogsearch/advanced/ | screenshot / initial_viewport_screenshot | evidence/screenshots/39382f2ae8662c52.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:36:32.362Z | Unknown / not recorded |
| EVD-6A2E460657859239 | https://addp.vn/catalogsearch/advanced/ | screenshot / initial_full_screenshot | evidence/screenshots/39382f2ae8662c52.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:36:32.717Z | Unknown / not recorded |
| EVD-EAB39F24E7DA327D | https://addp.vn/catalogsearch/advanced/ | performance / lab_metrics | evidence/lighthouse/39382f2ae8662c52.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:36:32.761Z | Unknown / not recorded |
| EVD-DB1D4E5389304CE7 | https://addp.vn/catalogsearch/advanced/ | browser / render_stabilization | evidence/render/39382f2ae8662c52.desktop.render-stabilized-v3_3.json | 2026-09-28T21:36:38.765Z | Unknown / not recorded |
| EVD-984BE7E2F957C120 | https://addp.vn/catalogsearch/advanced/ | browser / rendered_html | evidence/html/39382f2ae8662c52.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:36:38.781Z | Unknown / not recorded |
| EVD-A0DA2E96758B646D | https://addp.vn/catalogsearch/advanced/ | seo / rendered_seo | evidence/seo/39382f2ae8662c52.desktop.render-stabilized-v3_3.json | 2026-09-28T21:36:38.834Z | Unknown / not recorded |
| EVD-B722881A769DBDE5 | https://addp.vn/catalogsearch/advanced/ | structured-data / jsonld | evidence/schema/39382f2ae8662c52.desktop.render-stabilized-v3_3.json | 2026-09-28T21:36:38.842Z | Unknown / not recorded |
| EVD-E1E719B77D605D10 | https://addp.vn/catalogsearch/advanced/ | dom / visible_controls | evidence/dom/39382f2ae8662c52.desktop.render-stabilized-v3_3.json | 2026-09-28T21:36:39.176Z | Unknown / not recorded |
| EVD-2C30CFAD7404FDD3 | https://addp.vn/catalogsearch/advanced/ | analytics / tracking_signals | evidence/analytics/39382f2ae8662c52.desktop.render-stabilized-v3_3.json | 2026-09-28T21:36:39.179Z | Unknown / not recorded |
| EVD-24710AE707B494BE | https://addp.vn/catalogsearch/advanced/ | screenshot / stabilized_viewport_screenshot | evidence/screenshots/39382f2ae8662c52.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:36:39.295Z | Unknown / not recorded |
| EVD-FDBA10EAD37DCEAB | https://addp.vn/catalogsearch/advanced/ | screenshot / stabilized_full_screenshot | evidence/screenshots/39382f2ae8662c52.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:36:39.683Z | Unknown / not recorded |
| EVD-0EB6EFDD68F241CB | https://addp.vn/catalogsearch/advanced/ | axe / accessibility | evidence/accessibility/39382f2ae8662c52.desktop.render-stabilized-v3_3.json | 2026-09-28T21:36:46.663Z | Unknown / not recorded |
| EVD-E82C593AC123A59E | https://addp.vn/catalogsearch/advanced/ | network / network_log | evidence/network/39382f2ae8662c52.desktop.render-stabilized-v3_3.json | 2026-09-28T21:36:46.794Z | Unknown / not recorded |
| EVD-E13807C0BC44EF66 | https://addp.vn/catalogsearch/advanced/ | console / console_log | evidence/console/39382f2ae8662c52.desktop.render-stabilized-v3_3.json | 2026-09-28T21:36:46.794Z | Unknown / not recorded |
| EVD-26C45CB99C58B5F5 | https://addp.vn/catalogsearch/advanced/ | screenshot / initial_viewport_screenshot | evidence/screenshots/39382f2ae8662c52.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:37:08.363Z | Unknown / not recorded |
| EVD-508BE776141FD1AB | https://addp.vn/catalogsearch/advanced/ | screenshot / initial_full_screenshot | evidence/screenshots/39382f2ae8662c52.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:37:08.517Z | Unknown / not recorded |
| EVD-AF090591980AFC3D | https://addp.vn/catalogsearch/advanced/ | performance / lab_metrics | evidence/lighthouse/39382f2ae8662c52.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:37:08.549Z | Unknown / not recorded |
| EVD-0ABEE59FD6AE58F7 | https://addp.vn/catalogsearch/advanced/ | browser / render_stabilization | evidence/render/39382f2ae8662c52.mobile.render-stabilized-v3_3.json | 2026-09-28T21:37:14.512Z | Unknown / not recorded |
| EVD-5271448B3D248B48 | https://addp.vn/catalogsearch/advanced/ | browser / rendered_html | evidence/html/39382f2ae8662c52.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:37:14.531Z | Unknown / not recorded |
| EVD-AE161DEB619EF1DD | https://addp.vn/catalogsearch/advanced/ | seo / rendered_seo | evidence/seo/39382f2ae8662c52.mobile.render-stabilized-v3_3.json | 2026-09-28T21:37:14.570Z | Unknown / not recorded |
| EVD-16A77024511CC2DB | https://addp.vn/catalogsearch/advanced/ | structured-data / jsonld | evidence/schema/39382f2ae8662c52.mobile.render-stabilized-v3_3.json | 2026-09-28T21:37:14.571Z | Unknown / not recorded |
| EVD-36B33ED3C701BCB4 | https://addp.vn/catalogsearch/advanced/ | dom / visible_controls | evidence/dom/39382f2ae8662c52.mobile.render-stabilized-v3_3.json | 2026-09-28T21:37:14.734Z | Unknown / not recorded |
| EVD-F08B88732642422A | https://addp.vn/catalogsearch/advanced/ | analytics / tracking_signals | evidence/analytics/39382f2ae8662c52.mobile.render-stabilized-v3_3.json | 2026-09-28T21:37:14.736Z | Unknown / not recorded |
| EVD-74B2F4CBE7177232 | https://addp.vn/catalogsearch/advanced/ | screenshot / stabilized_viewport_screenshot | evidence/screenshots/39382f2ae8662c52.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:37:14.803Z | Unknown / not recorded |
| EVD-42A254F082306FDD | https://addp.vn/catalogsearch/advanced/ | screenshot / stabilized_full_screenshot | evidence/screenshots/39382f2ae8662c52.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:37:14.898Z | Unknown / not recorded |
| EVD-61DF8A91D001DA40 | https://addp.vn/catalogsearch/advanced/ | axe / accessibility | evidence/accessibility/39382f2ae8662c52.mobile.render-stabilized-v3_3.json | 2026-09-28T21:37:22.348Z | Unknown / not recorded |
| EVD-031C59E5C7FE3E6C | https://addp.vn/catalogsearch/advanced/ | network / network_log | evidence/network/39382f2ae8662c52.mobile.render-stabilized-v3_3.json | 2026-09-28T21:37:22.351Z | Unknown / not recorded |
| EVD-9146A5674E1B1D5B | https://addp.vn/catalogsearch/advanced/ | console / console_log | evidence/console/39382f2ae8662c52.mobile.render-stabilized-v3_3.json | 2026-09-28T21:37:22.351Z | Unknown / not recorded |
| EVD-D9E9D91FCB0FB7F7 | https://addp.vn/sua-dinh-duong.html | raw-http / raw_html | evidence/html/2c478556874d1edb.render-stabilized-v3_3.raw.html | 2026-09-28T21:37:23.289Z | Unknown / not recorded |
| EVD-9B976C72D5C6720F | https://addp.vn/sua-dinh-duong.html | seo / raw_seo | evidence/seo/2c478556874d1edb.render-stabilized-v3_3.raw.json | 2026-09-28T21:37:23.319Z | Unknown / not recorded |
| EVD-C169F892CAB33E9B | https://addp.vn/sua-dinh-duong.html | screenshot / initial_viewport_screenshot | evidence/screenshots/2c478556874d1edb.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:37:44.047Z | Unknown / not recorded |
| EVD-C912ECD3355AF716 | https://addp.vn/sua-dinh-duong.html | screenshot / initial_full_screenshot | evidence/screenshots/2c478556874d1edb.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:37:44.674Z | Unknown / not recorded |
| EVD-A75F462C7219FFF1 | https://addp.vn/sua-dinh-duong.html | performance / lab_metrics | evidence/lighthouse/2c478556874d1edb.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:37:44.723Z | Unknown / not recorded |
| EVD-512021E1774F05FC | https://addp.vn/sua-dinh-duong.html | browser / render_stabilization | evidence/render/2c478556874d1edb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:37:50.718Z | Unknown / not recorded |
| EVD-0F6290220F6FCC11 | https://addp.vn/sua-dinh-duong.html | browser / rendered_html | evidence/html/2c478556874d1edb.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:37:50.743Z | Unknown / not recorded |
| EVD-A358414AEA018603 | https://addp.vn/sua-dinh-duong.html | seo / rendered_seo | evidence/seo/2c478556874d1edb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:37:50.826Z | Unknown / not recorded |
| EVD-A43A3D07E3D9DD24 | https://addp.vn/sua-dinh-duong.html | structured-data / jsonld | evidence/schema/2c478556874d1edb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:37:50.829Z | Unknown / not recorded |
| EVD-9129679255D8F64F | https://addp.vn/sua-dinh-duong.html | dom / visible_controls | evidence/dom/2c478556874d1edb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:37:51.260Z | Unknown / not recorded |
| EVD-8DEAF5C2A81020FF | https://addp.vn/sua-dinh-duong.html | analytics / tracking_signals | evidence/analytics/2c478556874d1edb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:37:51.266Z | Unknown / not recorded |
| EVD-0EAEC5DEAE31B4D3 | https://addp.vn/sua-dinh-duong.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/2c478556874d1edb.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:37:51.644Z | Unknown / not recorded |
| EVD-240556FCB8CFEF2B | https://addp.vn/sua-dinh-duong.html | screenshot / stabilized_full_screenshot | evidence/screenshots/2c478556874d1edb.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:37:52.508Z | Unknown / not recorded |
| EVD-C624A7B9400F6E67 | https://addp.vn/sua-dinh-duong.html | axe / accessibility | evidence/accessibility/2c478556874d1edb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:38:03.350Z | Unknown / not recorded |
| EVD-1510647B65F54DFB | https://addp.vn/sua-dinh-duong.html | network / network_log | evidence/network/2c478556874d1edb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:38:03.353Z | Unknown / not recorded |
| EVD-53011A4696CD291D | https://addp.vn/sua-dinh-duong.html | console / console_log | evidence/console/2c478556874d1edb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:38:03.353Z | Unknown / not recorded |
| EVD-5DDDF07862AAF118 | https://addp.vn/sua-dinh-duong.html | screenshot / initial_viewport_screenshot | evidence/screenshots/2c478556874d1edb.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:38:33.429Z | Unknown / not recorded |
| EVD-4BE5C519E776A730 | https://addp.vn/sua-dinh-duong.html | screenshot / initial_full_screenshot | evidence/screenshots/2c478556874d1edb.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:38:33.635Z | Unknown / not recorded |
| EVD-0526B96E017F144B | https://addp.vn/sua-dinh-duong.html | performance / lab_metrics | evidence/lighthouse/2c478556874d1edb.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:38:33.659Z | Unknown / not recorded |
| EVD-93BB1CA9FAE44FAF | https://addp.vn/sua-dinh-duong.html | browser / render_stabilization | evidence/render/2c478556874d1edb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:38:40.347Z | Unknown / not recorded |
| EVD-C53913640AAB49F6 | https://addp.vn/sua-dinh-duong.html | browser / rendered_html | evidence/html/2c478556874d1edb.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:38:40.368Z | Unknown / not recorded |
| EVD-88CDC19E40997232 | https://addp.vn/sua-dinh-duong.html | seo / rendered_seo | evidence/seo/2c478556874d1edb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:38:40.400Z | Unknown / not recorded |
| EVD-4E16754D7D247369 | https://addp.vn/sua-dinh-duong.html | structured-data / jsonld | evidence/schema/2c478556874d1edb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:38:40.401Z | Unknown / not recorded |
| EVD-B42E75D4A1F556B6 | https://addp.vn/sua-dinh-duong.html | dom / visible_controls | evidence/dom/2c478556874d1edb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:38:40.576Z | Unknown / not recorded |
| EVD-3BA99A962B21F104 | https://addp.vn/sua-dinh-duong.html | analytics / tracking_signals | evidence/analytics/2c478556874d1edb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:38:40.579Z | Unknown / not recorded |
| EVD-C714797EAE48D11F | https://addp.vn/sua-dinh-duong.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/2c478556874d1edb.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:38:40.640Z | Unknown / not recorded |
| EVD-69C2FDDCE9D86665 | https://addp.vn/sua-dinh-duong.html | screenshot / stabilized_full_screenshot | evidence/screenshots/2c478556874d1edb.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:38:40.818Z | Unknown / not recorded |
| EVD-0FC1306B181894B5 | https://addp.vn/sua-dinh-duong.html | axe / accessibility | evidence/accessibility/2c478556874d1edb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:38:41.867Z | Unknown / not recorded |
| EVD-AA41773B0981FC42 | https://addp.vn/sua-dinh-duong.html | network / network_log | evidence/network/2c478556874d1edb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:38:41.872Z | Unknown / not recorded |
| EVD-477D9CE642A2D2C5 | https://addp.vn/sua-dinh-duong.html | console / console_log | evidence/console/2c478556874d1edb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:38:41.872Z | Unknown / not recorded |
| EVD-A7992C55E2B98C3B | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | raw-http / raw_html | evidence/html/508a000452c9f248.render-stabilized-v3_3.raw.html | 2026-09-28T21:38:42.712Z | Unknown / not recorded |
| EVD-1EB28E85A79CA849 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | seo / raw_seo | evidence/seo/508a000452c9f248.render-stabilized-v3_3.raw.json | 2026-09-28T21:38:42.751Z | Unknown / not recorded |
| EVD-DE95BD2306BE41B4 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | screenshot / initial_viewport_screenshot | evidence/screenshots/508a000452c9f248.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:39:01.523Z | Unknown / not recorded |
| EVD-17D52CB73FBAD6DF | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | screenshot / initial_full_screenshot | evidence/screenshots/508a000452c9f248.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:39:02.240Z | Unknown / not recorded |
| EVD-3381FEA6B3CACD5A | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | performance / lab_metrics | evidence/lighthouse/508a000452c9f248.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:39:02.285Z | Unknown / not recorded |
| EVD-E43CA4F7ED3B8366 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | browser / render_stabilization | evidence/render/508a000452c9f248.desktop.render-stabilized-v3_3.json | 2026-09-28T21:39:07.798Z | Unknown / not recorded |
| EVD-480B4F020653E59B | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | browser / rendered_html | evidence/html/508a000452c9f248.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:39:07.826Z | Unknown / not recorded |
| EVD-DE69E2BE89596E11 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | seo / rendered_seo | evidence/seo/508a000452c9f248.desktop.render-stabilized-v3_3.json | 2026-09-28T21:39:07.888Z | Unknown / not recorded |
| EVD-648098E5C9688497 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | structured-data / jsonld | evidence/schema/508a000452c9f248.desktop.render-stabilized-v3_3.json | 2026-09-28T21:39:07.890Z | Unknown / not recorded |
| EVD-1D64DB4C39A1F32E | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | dom / visible_controls | evidence/dom/508a000452c9f248.desktop.render-stabilized-v3_3.json | 2026-09-28T21:39:08.178Z | Unknown / not recorded |
| EVD-AC27AC963B401ED1 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | analytics / tracking_signals | evidence/analytics/508a000452c9f248.desktop.render-stabilized-v3_3.json | 2026-09-28T21:39:08.182Z | Unknown / not recorded |
| EVD-13E22E08751DC3DA | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/508a000452c9f248.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:39:08.444Z | Unknown / not recorded |
| EVD-25689ED499AFCE44 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | screenshot / stabilized_full_screenshot | evidence/screenshots/508a000452c9f248.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:39:09.218Z | Unknown / not recorded |
| EVD-6B649F62A9F5ED71 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | axe / accessibility | evidence/accessibility/508a000452c9f248.desktop.render-stabilized-v3_3.json | 2026-09-28T21:39:16.314Z | Unknown / not recorded |
| EVD-4A9E5E5371C071E3 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | network / network_log | evidence/network/508a000452c9f248.desktop.render-stabilized-v3_3.json | 2026-09-28T21:39:16.318Z | Unknown / not recorded |
| EVD-395386D53057DF42 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | console / console_log | evidence/console/508a000452c9f248.desktop.render-stabilized-v3_3.json | 2026-09-28T21:39:16.318Z | Unknown / not recorded |
| EVD-C0CA934FFC843B71 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | screenshot / initial_viewport_screenshot | evidence/screenshots/508a000452c9f248.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:39:34.827Z | Unknown / not recorded |
| EVD-DA9A5394D0B959B4 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | screenshot / initial_full_screenshot | evidence/screenshots/508a000452c9f248.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:39:35.033Z | Unknown / not recorded |
| EVD-E9525EDC601E6EAF | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | performance / lab_metrics | evidence/lighthouse/508a000452c9f248.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:39:35.057Z | Unknown / not recorded |
| EVD-92289C71773BF4CC | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | browser / render_stabilization | evidence/render/508a000452c9f248.mobile.render-stabilized-v3_3.json | 2026-09-28T21:39:41.340Z | Unknown / not recorded |
| EVD-42275664D53D6C91 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | browser / rendered_html | evidence/html/508a000452c9f248.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:39:41.366Z | Unknown / not recorded |
| EVD-9B0D871A40925AEA | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | seo / rendered_seo | evidence/seo/508a000452c9f248.mobile.render-stabilized-v3_3.json | 2026-09-28T21:39:41.408Z | Unknown / not recorded |
| EVD-7D1FC203C0B2B482 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | structured-data / jsonld | evidence/schema/508a000452c9f248.mobile.render-stabilized-v3_3.json | 2026-09-28T21:39:41.420Z | Unknown / not recorded |
| EVD-0ADF8EC283D2EA91 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | dom / visible_controls | evidence/dom/508a000452c9f248.mobile.render-stabilized-v3_3.json | 2026-09-28T21:39:41.710Z | Unknown / not recorded |
| EVD-101254E84FFEA1F5 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | analytics / tracking_signals | evidence/analytics/508a000452c9f248.mobile.render-stabilized-v3_3.json | 2026-09-28T21:39:41.713Z | Unknown / not recorded |
| EVD-DAF27621BB561E27 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/508a000452c9f248.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:39:41.794Z | Unknown / not recorded |
| EVD-408A82ACB54AB2D8 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | screenshot / stabilized_full_screenshot | evidence/screenshots/508a000452c9f248.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:39:41.952Z | Unknown / not recorded |
| EVD-F0058FB2504EC123 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | axe / accessibility | evidence/accessibility/508a000452c9f248.mobile.render-stabilized-v3_3.json | 2026-09-28T21:39:48.867Z | Unknown / not recorded |
| EVD-4E6E46401C6D3DB7 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | network / network_log | evidence/network/508a000452c9f248.mobile.render-stabilized-v3_3.json | 2026-09-28T21:39:48.872Z | Unknown / not recorded |
| EVD-8970C071BBA38BB4 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | console / console_log | evidence/console/508a000452c9f248.mobile.render-stabilized-v3_3.json | 2026-09-28T21:39:48.872Z | Unknown / not recorded |
| EVD-868C690C92C8CE76 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | raw-http / raw_html | evidence/html/abab69424c4844fc.render-stabilized-v3_3.raw.html | 2026-09-28T21:39:49.868Z | Unknown / not recorded |
| EVD-92CFD7B33C2260C2 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | seo / raw_seo | evidence/seo/abab69424c4844fc.render-stabilized-v3_3.raw.json | 2026-09-28T21:39:49.911Z | Unknown / not recorded |
| EVD-445DA0E144604EE4 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | screenshot / initial_viewport_screenshot | evidence/screenshots/abab69424c4844fc.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:40:08.495Z | Unknown / not recorded |
| EVD-19E3B84081240E64 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | screenshot / initial_full_screenshot | evidence/screenshots/abab69424c4844fc.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:40:08.821Z | Unknown / not recorded |
| EVD-BBCB07EDFA2696EF | https://addp.vn/sua-dinh-duong/sua-tre-em.html | performance / lab_metrics | evidence/lighthouse/abab69424c4844fc.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:40:08.876Z | Unknown / not recorded |
| EVD-95E1A031B1192CDF | https://addp.vn/sua-dinh-duong/sua-tre-em.html | browser / render_stabilization | evidence/render/abab69424c4844fc.desktop.render-stabilized-v3_3.json | 2026-09-28T21:40:12.989Z | Unknown / not recorded |
| EVD-22DBFA0B856729E6 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | browser / rendered_html | evidence/html/abab69424c4844fc.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:40:13.003Z | Unknown / not recorded |
| EVD-231A200BA46D7640 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | seo / rendered_seo | evidence/seo/abab69424c4844fc.desktop.render-stabilized-v3_3.json | 2026-09-28T21:40:13.086Z | Unknown / not recorded |
| EVD-E2A61F8FE30DC2B2 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | structured-data / jsonld | evidence/schema/abab69424c4844fc.desktop.render-stabilized-v3_3.json | 2026-09-28T21:40:13.098Z | Unknown / not recorded |
| EVD-D4848839568679A3 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | dom / visible_controls | evidence/dom/abab69424c4844fc.desktop.render-stabilized-v3_3.json | 2026-09-28T21:40:13.227Z | Unknown / not recorded |
| EVD-9473151A36BFDB23 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | analytics / tracking_signals | evidence/analytics/abab69424c4844fc.desktop.render-stabilized-v3_3.json | 2026-09-28T21:40:13.229Z | Unknown / not recorded |
| EVD-AC3592A582BBA0E4 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/abab69424c4844fc.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:40:13.302Z | Unknown / not recorded |
| EVD-F581C09CD5B861F5 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | screenshot / stabilized_full_screenshot | evidence/screenshots/abab69424c4844fc.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:40:13.476Z | Unknown / not recorded |
| EVD-3983D677DCCD08B4 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | axe / accessibility | evidence/accessibility/abab69424c4844fc.desktop.render-stabilized-v3_3.json | 2026-09-28T21:40:19.573Z | Unknown / not recorded |
| EVD-943E7A4C67F88D6C | https://addp.vn/sua-dinh-duong/sua-tre-em.html | network / network_log | evidence/network/abab69424c4844fc.desktop.render-stabilized-v3_3.json | 2026-09-28T21:40:19.577Z | Unknown / not recorded |
| EVD-60E482F43EA43A9D | https://addp.vn/sua-dinh-duong/sua-tre-em.html | console / console_log | evidence/console/abab69424c4844fc.desktop.render-stabilized-v3_3.json | 2026-09-28T21:40:19.577Z | Unknown / not recorded |
| EVD-538560A19A6A0477 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | screenshot / initial_viewport_screenshot | evidence/screenshots/abab69424c4844fc.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:40:39.375Z | Unknown / not recorded |
| EVD-0AF1A60D911EB568 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | screenshot / initial_full_screenshot | evidence/screenshots/abab69424c4844fc.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:40:39.566Z | Unknown / not recorded |
| EVD-24A2A4EA6654DF72 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | performance / lab_metrics | evidence/lighthouse/abab69424c4844fc.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:40:39.596Z | Unknown / not recorded |
| EVD-C26EF0ED638337D3 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | browser / render_stabilization | evidence/render/abab69424c4844fc.mobile.render-stabilized-v3_3.json | 2026-09-28T21:40:44.941Z | Unknown / not recorded |
| EVD-3FA578A3C6935462 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | browser / rendered_html | evidence/html/abab69424c4844fc.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:40:44.956Z | Unknown / not recorded |
| EVD-F4A10A9FE15D930A | https://addp.vn/sua-dinh-duong/sua-tre-em.html | seo / rendered_seo | evidence/seo/abab69424c4844fc.mobile.render-stabilized-v3_3.json | 2026-09-28T21:40:45.046Z | Unknown / not recorded |
| EVD-11AECE1E3280C910 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | structured-data / jsonld | evidence/schema/abab69424c4844fc.mobile.render-stabilized-v3_3.json | 2026-09-28T21:40:45.048Z | Unknown / not recorded |
| EVD-6868430DD28ABF1D | https://addp.vn/sua-dinh-duong/sua-tre-em.html | dom / visible_controls | evidence/dom/abab69424c4844fc.mobile.render-stabilized-v3_3.json | 2026-09-28T21:40:45.198Z | Unknown / not recorded |
| EVD-800DB955486AE4C2 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | analytics / tracking_signals | evidence/analytics/abab69424c4844fc.mobile.render-stabilized-v3_3.json | 2026-09-28T21:40:45.199Z | Unknown / not recorded |
| EVD-620EBDD9DC1D32B7 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/abab69424c4844fc.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:40:45.238Z | Unknown / not recorded |
| EVD-27D3E19F064E562C | https://addp.vn/sua-dinh-duong/sua-tre-em.html | screenshot / stabilized_full_screenshot | evidence/screenshots/abab69424c4844fc.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:40:45.330Z | Unknown / not recorded |
| EVD-3390B0F90C16CD56 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | axe / accessibility | evidence/accessibility/abab69424c4844fc.mobile.render-stabilized-v3_3.json | 2026-09-28T21:40:52.406Z | Unknown / not recorded |
| EVD-9E403EBDEF3124F3 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | network / network_log | evidence/network/abab69424c4844fc.mobile.render-stabilized-v3_3.json | 2026-09-28T21:40:52.410Z | Unknown / not recorded |
| EVD-D0B22611CE2E1975 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | console / console_log | evidence/console/abab69424c4844fc.mobile.render-stabilized-v3_3.json | 2026-09-28T21:40:52.410Z | Unknown / not recorded |
| EVD-42AE297DAC33A1B9 | https://addp.vn/sua-hat-glucare-plus | raw-http / raw_html | evidence/html/ebd40bf592e2f9a7.render-stabilized-v3_3.raw.html | 2026-09-28T21:40:53.651Z | Unknown / not recorded |
| EVD-1753B10CEB844A9E | https://addp.vn/sua-hat-glucare-plus | seo / raw_seo | evidence/seo/ebd40bf592e2f9a7.render-stabilized-v3_3.raw.json | 2026-09-28T21:40:53.760Z | Unknown / not recorded |
| EVD-FB24D9B8334093C4 | https://addp.vn/sua-hat-glucare-plus | screenshot / initial_viewport_screenshot | evidence/screenshots/ebd40bf592e2f9a7.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:41:17.403Z | Unknown / not recorded |
| EVD-6F7194C1DA51041E | https://addp.vn/sua-hat-glucare-plus | screenshot / initial_full_screenshot | evidence/screenshots/ebd40bf592e2f9a7.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:41:19.187Z | Unknown / not recorded |
| EVD-9F9FDDCFDF43F393 | https://addp.vn/sua-hat-glucare-plus | performance / lab_metrics | evidence/lighthouse/ebd40bf592e2f9a7.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:41:19.271Z | Unknown / not recorded |
| EVD-64D373C3AF06867B | https://addp.vn/sua-hat-glucare-plus | browser / render_stabilization | evidence/render/ebd40bf592e2f9a7.desktop.render-stabilized-v3_3.json | 2026-09-28T21:41:35.927Z | Unknown / not recorded |
| EVD-689120860F2FACA2 | https://addp.vn/sua-hat-glucare-plus | browser / rendered_html | evidence/html/ebd40bf592e2f9a7.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:41:35.961Z | Unknown / not recorded |
| EVD-D1249648026B4D96 | https://addp.vn/sua-hat-glucare-plus | seo / rendered_seo | evidence/seo/ebd40bf592e2f9a7.desktop.render-stabilized-v3_3.json | 2026-09-28T21:41:36.139Z | Unknown / not recorded |
| EVD-80257931D1966034 | https://addp.vn/sua-hat-glucare-plus | structured-data / jsonld | evidence/schema/ebd40bf592e2f9a7.desktop.render-stabilized-v3_3.json | 2026-09-28T21:41:36.141Z | Unknown / not recorded |
| EVD-DF63C483FC434445 | https://addp.vn/sua-hat-glucare-plus | dom / visible_controls | evidence/dom/ebd40bf592e2f9a7.desktop.render-stabilized-v3_3.json | 2026-09-28T21:41:36.469Z | FND-CONVERSION-CONV-001 |
| EVD-97810824842F6F36 | https://addp.vn/sua-hat-glucare-plus | analytics / tracking_signals | evidence/analytics/ebd40bf592e2f9a7.desktop.render-stabilized-v3_3.json | 2026-09-28T21:41:36.482Z | Unknown / not recorded |
| EVD-C86C629E938B1E14 | https://addp.vn/sua-hat-glucare-plus | screenshot / stabilized_viewport_screenshot | evidence/screenshots/ebd40bf592e2f9a7.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:41:36.891Z | Unknown / not recorded |
| EVD-EA78205F3017C505 | https://addp.vn/sua-hat-glucare-plus | screenshot / stabilized_full_screenshot | evidence/screenshots/ebd40bf592e2f9a7.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:41:38.998Z | FND-CONVERSION-CONV-001 |
| EVD-4D473131699530B4 | https://addp.vn/sua-hat-glucare-plus | axe / accessibility | evidence/accessibility/ebd40bf592e2f9a7.desktop.render-stabilized-v3_3.json | 2026-09-28T21:41:45.343Z | Unknown / not recorded |
| EVD-15BC6493711E3B3E | https://addp.vn/sua-hat-glucare-plus | network / network_log | evidence/network/ebd40bf592e2f9a7.desktop.render-stabilized-v3_3.json | 2026-09-28T21:41:45.347Z | Unknown / not recorded |
| EVD-3E33A81616F1E834 | https://addp.vn/sua-hat-glucare-plus | console / console_log | evidence/console/ebd40bf592e2f9a7.desktop.render-stabilized-v3_3.json | 2026-09-28T21:41:45.347Z | Unknown / not recorded |
| EVD-F65D8AFB77A88775 | https://addp.vn/sua-hat-glucare-plus | screenshot / initial_viewport_screenshot | evidence/screenshots/ebd40bf592e2f9a7.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:42:05.751Z | Unknown / not recorded |
| EVD-9AD93BA7577712EC | https://addp.vn/sua-hat-glucare-plus | screenshot / initial_full_screenshot | evidence/screenshots/ebd40bf592e2f9a7.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:42:06.240Z | Unknown / not recorded |
| EVD-1FE036CF43DBF534 | https://addp.vn/sua-hat-glucare-plus | performance / lab_metrics | evidence/lighthouse/ebd40bf592e2f9a7.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:42:06.294Z | Unknown / not recorded |
| EVD-EBDFC0DBD50D3635 | https://addp.vn/sua-hat-glucare-plus | browser / render_stabilization | evidence/render/ebd40bf592e2f9a7.mobile.render-stabilized-v3_3.json | 2026-09-28T21:42:34.663Z | Unknown / not recorded |
| EVD-AADDB45759F67004 | https://addp.vn/sua-hat-glucare-plus | browser / rendered_html | evidence/html/ebd40bf592e2f9a7.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:42:34.701Z | Unknown / not recorded |
| EVD-1BA12AFB05B5BD13 | https://addp.vn/sua-hat-glucare-plus | seo / rendered_seo | evidence/seo/ebd40bf592e2f9a7.mobile.render-stabilized-v3_3.json | 2026-09-28T21:42:34.803Z | Unknown / not recorded |
| EVD-5DEB9224EB2D897C | https://addp.vn/sua-hat-glucare-plus | structured-data / jsonld | evidence/schema/ebd40bf592e2f9a7.mobile.render-stabilized-v3_3.json | 2026-09-28T21:42:34.805Z | Unknown / not recorded |
| EVD-733F5C04719022AE | https://addp.vn/sua-hat-glucare-plus | dom / visible_controls | evidence/dom/ebd40bf592e2f9a7.mobile.render-stabilized-v3_3.json | 2026-09-28T21:42:35.111Z | Unknown / not recorded |
| EVD-6F5D373CB335C509 | https://addp.vn/sua-hat-glucare-plus | analytics / tracking_signals | evidence/analytics/ebd40bf592e2f9a7.mobile.render-stabilized-v3_3.json | 2026-09-28T21:42:35.113Z | Unknown / not recorded |
| EVD-E178F1827F773846 | https://addp.vn/sua-hat-glucare-plus | screenshot / stabilized_viewport_screenshot | evidence/screenshots/ebd40bf592e2f9a7.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:42:35.229Z | Unknown / not recorded |
| EVD-0581A36B72F4A783 | https://addp.vn/sua-hat-glucare-plus | screenshot / stabilized_full_screenshot | evidence/screenshots/ebd40bf592e2f9a7.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:42:35.682Z | Unknown / not recorded |
| EVD-238D776F29EAE37D | https://addp.vn/sua-hat-glucare-plus | axe / accessibility | evidence/accessibility/ebd40bf592e2f9a7.mobile.render-stabilized-v3_3.json | 2026-09-28T21:42:42.115Z | Unknown / not recorded |
| EVD-5B64268901E5FAFD | https://addp.vn/sua-hat-glucare-plus | network / network_log | evidence/network/ebd40bf592e2f9a7.mobile.render-stabilized-v3_3.json | 2026-09-28T21:42:42.120Z | Unknown / not recorded |
| EVD-90496E03399113B9 | https://addp.vn/sua-hat-glucare-plus | console / console_log | evidence/console/ebd40bf592e2f9a7.mobile.render-stabilized-v3_3.json | 2026-09-28T21:42:42.120Z | Unknown / not recorded |
| EVD-C2EAC2F670625414 | https://addp.vn/thiet-bi-y-te.html | raw-http / raw_html | evidence/html/822aca87bad7ae37.render-stabilized-v3_3.raw.html | 2026-09-28T21:42:43.553Z | Unknown / not recorded |
| EVD-9AB9FCBA5F4756DE | https://addp.vn/thiet-bi-y-te.html | seo / raw_seo | evidence/seo/822aca87bad7ae37.render-stabilized-v3_3.raw.json | 2026-09-28T21:42:43.605Z | Unknown / not recorded |
| EVD-97F7F266E0DD375C | https://addp.vn/thiet-bi-y-te.html | screenshot / initial_viewport_screenshot | evidence/screenshots/822aca87bad7ae37.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:43:04.216Z | Unknown / not recorded |
| EVD-E7A5EAFDBACE275F | https://addp.vn/thiet-bi-y-te.html | screenshot / initial_full_screenshot | evidence/screenshots/822aca87bad7ae37.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:43:04.545Z | Unknown / not recorded |
| EVD-36F98CD7BB12FB31 | https://addp.vn/thiet-bi-y-te.html | performance / lab_metrics | evidence/lighthouse/822aca87bad7ae37.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:43:04.587Z | Unknown / not recorded |
| EVD-4CB7C450418ACF9B | https://addp.vn/thiet-bi-y-te.html | browser / render_stabilization | evidence/render/822aca87bad7ae37.desktop.render-stabilized-v3_3.json | 2026-09-28T21:43:10.222Z | Unknown / not recorded |
| EVD-74F293652B6C0C52 | https://addp.vn/thiet-bi-y-te.html | browser / rendered_html | evidence/html/822aca87bad7ae37.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:43:10.243Z | Unknown / not recorded |
| EVD-B2DACE1783E3393E | https://addp.vn/thiet-bi-y-te.html | seo / rendered_seo | evidence/seo/822aca87bad7ae37.desktop.render-stabilized-v3_3.json | 2026-09-28T21:43:10.302Z | Unknown / not recorded |
| EVD-AFE5C3E00F7637A2 | https://addp.vn/thiet-bi-y-te.html | structured-data / jsonld | evidence/schema/822aca87bad7ae37.desktop.render-stabilized-v3_3.json | 2026-09-28T21:43:10.304Z | Unknown / not recorded |
| EVD-D1E80743D0B7BE05 | https://addp.vn/thiet-bi-y-te.html | dom / visible_controls | evidence/dom/822aca87bad7ae37.desktop.render-stabilized-v3_3.json | 2026-09-28T21:43:10.514Z | Unknown / not recorded |
| EVD-47D3FD7CFE899BFE | https://addp.vn/thiet-bi-y-te.html | analytics / tracking_signals | evidence/analytics/822aca87bad7ae37.desktop.render-stabilized-v3_3.json | 2026-09-28T21:43:10.520Z | Unknown / not recorded |
| EVD-6C7DD2217E303EF4 | https://addp.vn/thiet-bi-y-te.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/822aca87bad7ae37.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:43:10.593Z | Unknown / not recorded |
| EVD-224161C5EB1EB0D1 | https://addp.vn/thiet-bi-y-te.html | screenshot / stabilized_full_screenshot | evidence/screenshots/822aca87bad7ae37.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:43:10.816Z | Unknown / not recorded |
| EVD-04767BB1308DA0E2 | https://addp.vn/thiet-bi-y-te.html | axe / accessibility | evidence/accessibility/822aca87bad7ae37.desktop.render-stabilized-v3_3.json | 2026-09-28T21:43:17.070Z | Unknown / not recorded |
| EVD-C3A672A1523F16A8 | https://addp.vn/thiet-bi-y-te.html | network / network_log | evidence/network/822aca87bad7ae37.desktop.render-stabilized-v3_3.json | 2026-09-28T21:43:17.074Z | Unknown / not recorded |
| EVD-FBAC851D45986194 | https://addp.vn/thiet-bi-y-te.html | console / console_log | evidence/console/822aca87bad7ae37.desktop.render-stabilized-v3_3.json | 2026-09-28T21:43:17.074Z | Unknown / not recorded |
| EVD-1D64A9B1791C8E62 | https://addp.vn/thiet-bi-y-te.html | screenshot / initial_viewport_screenshot | evidence/screenshots/822aca87bad7ae37.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:43:35.965Z | Unknown / not recorded |
| EVD-0905D1C66E25323E | https://addp.vn/thiet-bi-y-te.html | screenshot / initial_full_screenshot | evidence/screenshots/822aca87bad7ae37.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:43:36.140Z | Unknown / not recorded |
| EVD-454F688FD1B9C968 | https://addp.vn/thiet-bi-y-te.html | performance / lab_metrics | evidence/lighthouse/822aca87bad7ae37.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:43:36.169Z | Unknown / not recorded |
| EVD-AA768E95BF015DD3 | https://addp.vn/thiet-bi-y-te.html | browser / render_stabilization | evidence/render/822aca87bad7ae37.mobile.render-stabilized-v3_3.json | 2026-09-28T21:43:41.591Z | Unknown / not recorded |
| EVD-809B0F4EA5FF72B6 | https://addp.vn/thiet-bi-y-te.html | browser / rendered_html | evidence/html/822aca87bad7ae37.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:43:41.616Z | Unknown / not recorded |
| EVD-B2080DEFB780A815 | https://addp.vn/thiet-bi-y-te.html | seo / rendered_seo | evidence/seo/822aca87bad7ae37.mobile.render-stabilized-v3_3.json | 2026-09-28T21:43:41.784Z | Unknown / not recorded |
| EVD-A3054FC1D414D00C | https://addp.vn/thiet-bi-y-te.html | structured-data / jsonld | evidence/schema/822aca87bad7ae37.mobile.render-stabilized-v3_3.json | 2026-09-28T21:43:41.786Z | Unknown / not recorded |
| EVD-D387041272D88A18 | https://addp.vn/thiet-bi-y-te.html | dom / visible_controls | evidence/dom/822aca87bad7ae37.mobile.render-stabilized-v3_3.json | 2026-09-28T21:43:42.045Z | Unknown / not recorded |
| EVD-383F5BD59724C6FA | https://addp.vn/thiet-bi-y-te.html | analytics / tracking_signals | evidence/analytics/822aca87bad7ae37.mobile.render-stabilized-v3_3.json | 2026-09-28T21:43:42.048Z | Unknown / not recorded |
| EVD-C4D7B6B1D2A90F61 | https://addp.vn/thiet-bi-y-te.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/822aca87bad7ae37.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:43:42.101Z | Unknown / not recorded |
| EVD-ED90B8FB128C20BE | https://addp.vn/thiet-bi-y-te.html | screenshot / stabilized_full_screenshot | evidence/screenshots/822aca87bad7ae37.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:43:42.213Z | Unknown / not recorded |
| EVD-B4428BD8026CBC78 | https://addp.vn/thiet-bi-y-te.html | axe / accessibility | evidence/accessibility/822aca87bad7ae37.mobile.render-stabilized-v3_3.json | 2026-09-28T21:43:48.580Z | Unknown / not recorded |
| EVD-07E96E1FD8DEEEA2 | https://addp.vn/thiet-bi-y-te.html | network / network_log | evidence/network/822aca87bad7ae37.mobile.render-stabilized-v3_3.json | 2026-09-28T21:43:48.589Z | Unknown / not recorded |
| EVD-0802D50FBD7231BF | https://addp.vn/thiet-bi-y-te.html | console / console_log | evidence/console/822aca87bad7ae37.mobile.render-stabilized-v3_3.json | 2026-09-28T21:43:48.589Z | Unknown / not recorded |
| EVD-EEA082D0A959FD99 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | raw-http / raw_html | evidence/html/73a54115e4258fcb.render-stabilized-v3_3.raw.html | 2026-09-28T21:43:50.008Z | Unknown / not recorded |
| EVD-9D178D295121426D | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | seo / raw_seo | evidence/seo/73a54115e4258fcb.render-stabilized-v3_3.raw.json | 2026-09-28T21:43:50.062Z | Unknown / not recorded |
| EVD-D4EA379D32C7D64E | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | screenshot / initial_viewport_screenshot | evidence/screenshots/73a54115e4258fcb.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:44:10.542Z | Unknown / not recorded |
| EVD-BB436FA8B3CA7846 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | screenshot / initial_full_screenshot | evidence/screenshots/73a54115e4258fcb.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:44:10.878Z | Unknown / not recorded |
| EVD-9AB7D7AA7E23C9E5 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | performance / lab_metrics | evidence/lighthouse/73a54115e4258fcb.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:44:10.928Z | Unknown / not recorded |
| EVD-8146F89273E67A28 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | browser / render_stabilization | evidence/render/73a54115e4258fcb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:44:14.961Z | Unknown / not recorded |
| EVD-89F269324AD9E1BE | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | browser / rendered_html | evidence/html/73a54115e4258fcb.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:44:14.978Z | Unknown / not recorded |
| EVD-71759640ED2FFABE | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | seo / rendered_seo | evidence/seo/73a54115e4258fcb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:44:15.042Z | Unknown / not recorded |
| EVD-75549310B78E850E | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | structured-data / jsonld | evidence/schema/73a54115e4258fcb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:44:15.053Z | Unknown / not recorded |
| EVD-0A5CF5E3943D0810 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | dom / visible_controls | evidence/dom/73a54115e4258fcb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:44:15.196Z | Unknown / not recorded |
| EVD-04D20ED9D263DC4A | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | analytics / tracking_signals | evidence/analytics/73a54115e4258fcb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:44:15.198Z | Unknown / not recorded |
| EVD-3B91CD687BAD7FBF | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/73a54115e4258fcb.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:44:15.273Z | Unknown / not recorded |
| EVD-04BC7FDE348ABD26 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | screenshot / stabilized_full_screenshot | evidence/screenshots/73a54115e4258fcb.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:44:15.438Z | Unknown / not recorded |
| EVD-2E97BDCE3E5C50F0 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | axe / accessibility | evidence/accessibility/73a54115e4258fcb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:44:21.503Z | Unknown / not recorded |
| EVD-0AC776DA4597EEE8 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | network / network_log | evidence/network/73a54115e4258fcb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:44:21.507Z | Unknown / not recorded |
| EVD-6A84ED8593F8B851 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | console / console_log | evidence/console/73a54115e4258fcb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:44:21.507Z | Unknown / not recorded |
| EVD-0899D8B19AEBF1DC | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | screenshot / initial_viewport_screenshot | evidence/screenshots/73a54115e4258fcb.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:44:40.592Z | Unknown / not recorded |
| EVD-8201B7C69B48C4F5 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | screenshot / initial_full_screenshot | evidence/screenshots/73a54115e4258fcb.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:44:40.788Z | Unknown / not recorded |
| EVD-AF5D50ED16ED7C62 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | performance / lab_metrics | evidence/lighthouse/73a54115e4258fcb.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:44:40.824Z | Unknown / not recorded |
| EVD-10A59D0E10C6B763 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | browser / render_stabilization | evidence/render/73a54115e4258fcb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:44:46.171Z | Unknown / not recorded |
| EVD-BA63C40099F3F7B1 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | browser / rendered_html | evidence/html/73a54115e4258fcb.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:44:46.191Z | Unknown / not recorded |
| EVD-9060639997454327 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | seo / rendered_seo | evidence/seo/73a54115e4258fcb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:44:46.229Z | Unknown / not recorded |
| EVD-79BE148700CBACF3 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | structured-data / jsonld | evidence/schema/73a54115e4258fcb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:44:46.230Z | Unknown / not recorded |
| EVD-AA0627307B3FD716 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | dom / visible_controls | evidence/dom/73a54115e4258fcb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:44:46.417Z | Unknown / not recorded |
| EVD-68DCB9564B03F790 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | analytics / tracking_signals | evidence/analytics/73a54115e4258fcb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:44:46.420Z | Unknown / not recorded |
| EVD-49EDABD19B210194 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/73a54115e4258fcb.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:44:46.478Z | Unknown / not recorded |
| EVD-CD52DF3CC3489A5F | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | screenshot / stabilized_full_screenshot | evidence/screenshots/73a54115e4258fcb.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:44:46.562Z | Unknown / not recorded |
| EVD-38779351817AE2A2 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | axe / accessibility | evidence/accessibility/73a54115e4258fcb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:44:52.656Z | Unknown / not recorded |
| EVD-970E559291F1C4FA | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | network / network_log | evidence/network/73a54115e4258fcb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:44:52.660Z | Unknown / not recorded |
| EVD-AA7A1247204B194C | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | console / console_log | evidence/console/73a54115e4258fcb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:44:52.660Z | Unknown / not recorded |
| EVD-47254F3DB76A4804 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | raw-http / raw_html | evidence/html/8810ec56bb8edbc1.render-stabilized-v3_3.raw.html | 2026-09-28T21:44:53.561Z | Unknown / not recorded |
| EVD-7BBEEC0FFDD593C4 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | seo / raw_seo | evidence/seo/8810ec56bb8edbc1.render-stabilized-v3_3.raw.json | 2026-09-28T21:44:53.587Z | Unknown / not recorded |
| EVD-A0721D13298F99E0 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | screenshot / initial_viewport_screenshot | evidence/screenshots/8810ec56bb8edbc1.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:45:14.083Z | Unknown / not recorded |
| EVD-09442D74A4F84A9B | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | screenshot / initial_full_screenshot | evidence/screenshots/8810ec56bb8edbc1.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:45:14.339Z | Unknown / not recorded |
| EVD-1E9D0ED626A7B94A | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | performance / lab_metrics | evidence/lighthouse/8810ec56bb8edbc1.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:45:14.364Z | Unknown / not recorded |
| EVD-62C673CB5983BEFE | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | browser / render_stabilization | evidence/render/8810ec56bb8edbc1.desktop.render-stabilized-v3_3.json | 2026-09-28T21:45:22.240Z | Unknown / not recorded |
| EVD-D230B1FA81E7DD97 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | browser / rendered_html | evidence/html/8810ec56bb8edbc1.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:45:22.256Z | Unknown / not recorded |
| EVD-2F95ED2647F68982 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | seo / rendered_seo | evidence/seo/8810ec56bb8edbc1.desktop.render-stabilized-v3_3.json | 2026-09-28T21:45:22.289Z | Unknown / not recorded |
| EVD-D067684A65795698 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | structured-data / jsonld | evidence/schema/8810ec56bb8edbc1.desktop.render-stabilized-v3_3.json | 2026-09-28T21:45:22.291Z | Unknown / not recorded |
| EVD-FED4DF8A1D775B34 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | dom / visible_controls | evidence/dom/8810ec56bb8edbc1.desktop.render-stabilized-v3_3.json | 2026-09-28T21:45:22.492Z | Unknown / not recorded |
| EVD-50639E3C46E3B35B | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | analytics / tracking_signals | evidence/analytics/8810ec56bb8edbc1.desktop.render-stabilized-v3_3.json | 2026-09-28T21:45:22.493Z | Unknown / not recorded |
| EVD-BA33A84D72D47D00 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/8810ec56bb8edbc1.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:45:22.561Z | Unknown / not recorded |
| EVD-B5BF491EBD30FBBB | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | screenshot / stabilized_full_screenshot | evidence/screenshots/8810ec56bb8edbc1.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:45:22.739Z | Unknown / not recorded |
| EVD-C9C0B466E96ECA18 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | axe / accessibility | evidence/accessibility/8810ec56bb8edbc1.desktop.render-stabilized-v3_3.json | 2026-09-28T21:45:28.746Z | Unknown / not recorded |
| EVD-485CDBA2394F0B69 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | network / network_log | evidence/network/8810ec56bb8edbc1.desktop.render-stabilized-v3_3.json | 2026-09-28T21:45:28.749Z | Unknown / not recorded |
| EVD-C87477CF71E62897 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | console / console_log | evidence/console/8810ec56bb8edbc1.desktop.render-stabilized-v3_3.json | 2026-09-28T21:45:28.750Z | Unknown / not recorded |
| EVD-DDAE29D55820CDE6 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | screenshot / initial_viewport_screenshot | evidence/screenshots/8810ec56bb8edbc1.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:45:54.052Z | Unknown / not recorded |
| EVD-7B041668CE80425B | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | screenshot / initial_full_screenshot | evidence/screenshots/8810ec56bb8edbc1.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:45:54.235Z | Unknown / not recorded |
| EVD-2080494CABB9E3EA | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | performance / lab_metrics | evidence/lighthouse/8810ec56bb8edbc1.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:45:54.295Z | Unknown / not recorded |
| EVD-E17AE462740E6AE6 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | browser / render_stabilization | evidence/render/8810ec56bb8edbc1.mobile.render-stabilized-v3_3.json | 2026-09-28T21:46:00.223Z | Unknown / not recorded |
| EVD-51DDCE666309114E | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | browser / rendered_html | evidence/html/8810ec56bb8edbc1.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:46:00.241Z | Unknown / not recorded |
| EVD-F4DF9DD4EAB5A22F | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | seo / rendered_seo | evidence/seo/8810ec56bb8edbc1.mobile.render-stabilized-v3_3.json | 2026-09-28T21:46:00.357Z | Unknown / not recorded |
| EVD-90F38CAF072CF9D0 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | structured-data / jsonld | evidence/schema/8810ec56bb8edbc1.mobile.render-stabilized-v3_3.json | 2026-09-28T21:46:00.367Z | Unknown / not recorded |
| EVD-25764F56D7C73932 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | dom / visible_controls | evidence/dom/8810ec56bb8edbc1.mobile.render-stabilized-v3_3.json | 2026-09-28T21:46:00.625Z | Unknown / not recorded |
| EVD-99C5E57AD8D148E2 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | analytics / tracking_signals | evidence/analytics/8810ec56bb8edbc1.mobile.render-stabilized-v3_3.json | 2026-09-28T21:46:00.629Z | Unknown / not recorded |
| EVD-937DB352643F5889 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/8810ec56bb8edbc1.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:46:00.682Z | Unknown / not recorded |
| EVD-4C36414528C6A895 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | screenshot / stabilized_full_screenshot | evidence/screenshots/8810ec56bb8edbc1.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:46:00.782Z | Unknown / not recorded |
| EVD-EEC514646DB5CEDD | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | axe / accessibility | evidence/accessibility/8810ec56bb8edbc1.mobile.render-stabilized-v3_3.json | 2026-09-28T21:46:01.939Z | Unknown / not recorded |
| EVD-CBD68B0814E4B1A5 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | network / network_log | evidence/network/8810ec56bb8edbc1.mobile.render-stabilized-v3_3.json | 2026-09-28T21:46:01.943Z | Unknown / not recorded |
| EVD-098D945BC65EE208 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | console / console_log | evidence/console/8810ec56bb8edbc1.mobile.render-stabilized-v3_3.json | 2026-09-28T21:46:01.943Z | Unknown / not recorded |
| EVD-090D310C5D47BAE4 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | raw-http / raw_html | evidence/html/106798c90fc40ccb.render-stabilized-v3_3.raw.html | 2026-09-28T21:46:02.886Z | Unknown / not recorded |
| EVD-09372307D553B8DD | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | seo / raw_seo | evidence/seo/106798c90fc40ccb.render-stabilized-v3_3.raw.json | 2026-09-28T21:46:02.964Z | Unknown / not recorded |
| EVD-55B1322586430446 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | screenshot / initial_viewport_screenshot | evidence/screenshots/106798c90fc40ccb.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:46:21.486Z | Unknown / not recorded |
| EVD-B644881C5F6107A0 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | screenshot / initial_full_screenshot | evidence/screenshots/106798c90fc40ccb.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:46:21.860Z | Unknown / not recorded |
| EVD-A69601CF86DCDBDE | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | performance / lab_metrics | evidence/lighthouse/106798c90fc40ccb.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:46:21.903Z | Unknown / not recorded |
| EVD-961A7F414E4A8EB3 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | browser / render_stabilization | evidence/render/106798c90fc40ccb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:46:26.052Z | Unknown / not recorded |
| EVD-0F103CB28A67D8D6 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | browser / rendered_html | evidence/html/106798c90fc40ccb.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:46:26.072Z | Unknown / not recorded |
| EVD-BE18F4D00CE5CF75 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | seo / rendered_seo | evidence/seo/106798c90fc40ccb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:46:26.110Z | Unknown / not recorded |
| EVD-F6D7D0A0590DA553 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | structured-data / jsonld | evidence/schema/106798c90fc40ccb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:46:26.122Z | Unknown / not recorded |
| EVD-1AA87E370CB9A9F0 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | dom / visible_controls | evidence/dom/106798c90fc40ccb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:46:26.298Z | Unknown / not recorded |
| EVD-B15F359CEC5824D0 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | analytics / tracking_signals | evidence/analytics/106798c90fc40ccb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:46:26.300Z | Unknown / not recorded |
| EVD-81706C4CC32D347D | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/106798c90fc40ccb.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:46:26.377Z | Unknown / not recorded |
| EVD-000EE2EDB5405B95 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | screenshot / stabilized_full_screenshot | evidence/screenshots/106798c90fc40ccb.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:46:26.524Z | Unknown / not recorded |
| EVD-1AC1F38552A0047E | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | axe / accessibility | evidence/accessibility/106798c90fc40ccb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:46:32.577Z | Unknown / not recorded |
| EVD-33127509562B694A | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | network / network_log | evidence/network/106798c90fc40ccb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:46:32.580Z | Unknown / not recorded |
| EVD-FCEC172978EB44B8 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | console / console_log | evidence/console/106798c90fc40ccb.desktop.render-stabilized-v3_3.json | 2026-09-28T21:46:32.580Z | Unknown / not recorded |
| EVD-42E3F1768E510F1F | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | screenshot / initial_viewport_screenshot | evidence/screenshots/106798c90fc40ccb.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:46:51.714Z | Unknown / not recorded |
| EVD-104F3F957CFA8DC3 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | screenshot / initial_full_screenshot | evidence/screenshots/106798c90fc40ccb.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:46:52.010Z | Unknown / not recorded |
| EVD-8E3045B8BBD06831 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | performance / lab_metrics | evidence/lighthouse/106798c90fc40ccb.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:46:52.059Z | Unknown / not recorded |
| EVD-42CD00B4B9816087 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | browser / render_stabilization | evidence/render/106798c90fc40ccb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:46:57.126Z | Unknown / not recorded |
| EVD-DB810084023FAB4B | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | browser / rendered_html | evidence/html/106798c90fc40ccb.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:46:57.151Z | Unknown / not recorded |
| EVD-E3FD919706DE248C | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | seo / rendered_seo | evidence/seo/106798c90fc40ccb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:46:57.176Z | Unknown / not recorded |
| EVD-78890A0B373D953F | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | structured-data / jsonld | evidence/schema/106798c90fc40ccb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:46:57.178Z | Unknown / not recorded |
| EVD-EE2C8A616C1B66F0 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | dom / visible_controls | evidence/dom/106798c90fc40ccb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:46:57.373Z | Unknown / not recorded |
| EVD-72F15BF8AFFC465D | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | analytics / tracking_signals | evidence/analytics/106798c90fc40ccb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:46:57.386Z | Unknown / not recorded |
| EVD-E7E9D9E062EE020F | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/106798c90fc40ccb.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:46:57.431Z | Unknown / not recorded |
| EVD-F7119C6FF0CC515A | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | screenshot / stabilized_full_screenshot | evidence/screenshots/106798c90fc40ccb.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:46:57.507Z | Unknown / not recorded |
| EVD-23C70021018FAADE | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | axe / accessibility | evidence/accessibility/106798c90fc40ccb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:47:03.294Z | Unknown / not recorded |
| EVD-315AA3141F5614BA | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | network / network_log | evidence/network/106798c90fc40ccb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:47:03.308Z | Unknown / not recorded |
| EVD-38D773AE990B6F66 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | console / console_log | evidence/console/106798c90fc40ccb.mobile.render-stabilized-v3_3.json | 2026-09-28T21:47:03.308Z | Unknown / not recorded |
| EVD-94A11B7DA60E5E3A | https://addp.vn/thiet-bi-y-te/khau-trang.html | raw-http / raw_html | evidence/html/1479934c307717d8.render-stabilized-v3_3.raw.html | 2026-09-28T21:47:04.209Z | Unknown / not recorded |
| EVD-019F621350CF8CAB | https://addp.vn/thiet-bi-y-te/khau-trang.html | seo / raw_seo | evidence/seo/1479934c307717d8.render-stabilized-v3_3.raw.json | 2026-09-28T21:47:04.228Z | Unknown / not recorded |
| EVD-2F5FC6FAB90EE0EE | https://addp.vn/thiet-bi-y-te/khau-trang.html | screenshot / initial_viewport_screenshot | evidence/screenshots/1479934c307717d8.desktop.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:47:24.393Z | Unknown / not recorded |
| EVD-91A8566F0A9A18ED | https://addp.vn/thiet-bi-y-te/khau-trang.html | screenshot / initial_full_screenshot | evidence/screenshots/1479934c307717d8.desktop.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:47:24.588Z | Unknown / not recorded |
| EVD-729A34224B1F49B8 | https://addp.vn/thiet-bi-y-te/khau-trang.html | performance / lab_metrics | evidence/lighthouse/1479934c307717d8.desktop.render-stabilized-v3_3.lab.json | 2026-09-28T21:47:24.613Z | Unknown / not recorded |
| EVD-97A6CEA785A0B79B | https://addp.vn/thiet-bi-y-te/khau-trang.html | browser / render_stabilization | evidence/render/1479934c307717d8.desktop.render-stabilized-v3_3.json | 2026-09-28T21:47:29.957Z | Unknown / not recorded |
| EVD-81B7376DE48FC5C9 | https://addp.vn/thiet-bi-y-te/khau-trang.html | browser / rendered_html | evidence/html/1479934c307717d8.desktop.render-stabilized-v3_3.rendered.html | 2026-09-28T21:47:29.983Z | Unknown / not recorded |
| EVD-2D6857DECDD8755D | https://addp.vn/thiet-bi-y-te/khau-trang.html | seo / rendered_seo | evidence/seo/1479934c307717d8.desktop.render-stabilized-v3_3.json | 2026-09-28T21:47:30.013Z | Unknown / not recorded |
| EVD-568E2D528C54E3DB | https://addp.vn/thiet-bi-y-te/khau-trang.html | structured-data / jsonld | evidence/schema/1479934c307717d8.desktop.render-stabilized-v3_3.json | 2026-09-28T21:47:30.014Z | Unknown / not recorded |
| EVD-2C2C5D3E8DCE6B2C | https://addp.vn/thiet-bi-y-te/khau-trang.html | dom / visible_controls | evidence/dom/1479934c307717d8.desktop.render-stabilized-v3_3.json | 2026-09-28T21:47:30.178Z | Unknown / not recorded |
| EVD-EC5AF3EF17D640EF | https://addp.vn/thiet-bi-y-te/khau-trang.html | analytics / tracking_signals | evidence/analytics/1479934c307717d8.desktop.render-stabilized-v3_3.json | 2026-09-28T21:47:30.180Z | Unknown / not recorded |
| EVD-F5601BD77BD02262 | https://addp.vn/thiet-bi-y-te/khau-trang.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/1479934c307717d8.desktop.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:47:30.255Z | Unknown / not recorded |
| EVD-F2762E159763E60E | https://addp.vn/thiet-bi-y-te/khau-trang.html | screenshot / stabilized_full_screenshot | evidence/screenshots/1479934c307717d8.desktop.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:47:30.442Z | Unknown / not recorded |
| EVD-90B90830D582839F | https://addp.vn/thiet-bi-y-te/khau-trang.html | axe / accessibility | evidence/accessibility/1479934c307717d8.desktop.render-stabilized-v3_3.json | 2026-09-28T21:47:36.541Z | Unknown / not recorded |
| EVD-C0E942DA7FC1206D | https://addp.vn/thiet-bi-y-te/khau-trang.html | network / network_log | evidence/network/1479934c307717d8.desktop.render-stabilized-v3_3.json | 2026-09-28T21:47:36.556Z | Unknown / not recorded |
| EVD-F5B9E9B76D1599E0 | https://addp.vn/thiet-bi-y-te/khau-trang.html | console / console_log | evidence/console/1479934c307717d8.desktop.render-stabilized-v3_3.json | 2026-09-28T21:47:36.556Z | Unknown / not recorded |
| EVD-655E464137C0E75D | https://addp.vn/thiet-bi-y-te/khau-trang.html | screenshot / initial_viewport_screenshot | evidence/screenshots/1479934c307717d8.mobile.render-stabilized-v3_3.initial.viewport.png | 2026-09-28T21:47:56.213Z | Unknown / not recorded |
| EVD-854052C84ACF72DD | https://addp.vn/thiet-bi-y-te/khau-trang.html | screenshot / initial_full_screenshot | evidence/screenshots/1479934c307717d8.mobile.render-stabilized-v3_3.initial.full.png | 2026-09-28T21:47:56.478Z | Unknown / not recorded |
| EVD-372B1A46276500C0 | https://addp.vn/thiet-bi-y-te/khau-trang.html | performance / lab_metrics | evidence/lighthouse/1479934c307717d8.mobile.render-stabilized-v3_3.lab.json | 2026-09-28T21:47:56.506Z | Unknown / not recorded |
| EVD-56E61900C3440692 | https://addp.vn/thiet-bi-y-te/khau-trang.html | browser / render_stabilization | evidence/render/1479934c307717d8.mobile.render-stabilized-v3_3.json | 2026-09-28T21:48:01.897Z | Unknown / not recorded |
| EVD-7284E97A114A54B8 | https://addp.vn/thiet-bi-y-te/khau-trang.html | browser / rendered_html | evidence/html/1479934c307717d8.mobile.render-stabilized-v3_3.rendered.html | 2026-09-28T21:48:01.911Z | Unknown / not recorded |
| EVD-8FB59E5CCEFDA689 | https://addp.vn/thiet-bi-y-te/khau-trang.html | seo / rendered_seo | evidence/seo/1479934c307717d8.mobile.render-stabilized-v3_3.json | 2026-09-28T21:48:01.955Z | Unknown / not recorded |
| EVD-02F1359088CD73B7 | https://addp.vn/thiet-bi-y-te/khau-trang.html | structured-data / jsonld | evidence/schema/1479934c307717d8.mobile.render-stabilized-v3_3.json | 2026-09-28T21:48:01.956Z | Unknown / not recorded |
| EVD-1EC733B51BBF2EA3 | https://addp.vn/thiet-bi-y-te/khau-trang.html | dom / visible_controls | evidence/dom/1479934c307717d8.mobile.render-stabilized-v3_3.json | 2026-09-28T21:48:02.098Z | Unknown / not recorded |
| EVD-60139237AF63410B | https://addp.vn/thiet-bi-y-te/khau-trang.html | analytics / tracking_signals | evidence/analytics/1479934c307717d8.mobile.render-stabilized-v3_3.json | 2026-09-28T21:48:02.099Z | Unknown / not recorded |
| EVD-097DCCF33537726A | https://addp.vn/thiet-bi-y-te/khau-trang.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/1479934c307717d8.mobile.render-stabilized-v3_3.stabilized.viewport.png | 2026-09-28T21:48:02.153Z | Unknown / not recorded |
| EVD-555EB450EF9C467F | https://addp.vn/thiet-bi-y-te/khau-trang.html | screenshot / stabilized_full_screenshot | evidence/screenshots/1479934c307717d8.mobile.render-stabilized-v3_3.stabilized.full.png | 2026-09-28T21:48:02.241Z | Unknown / not recorded |
| EVD-0339C54A82B97AF0 | https://addp.vn/thiet-bi-y-te/khau-trang.html | axe / accessibility | evidence/accessibility/1479934c307717d8.mobile.render-stabilized-v3_3.json | 2026-09-28T21:48:08.172Z | Unknown / not recorded |
| EVD-ACEBD1A4D3CDC351 | https://addp.vn/thiet-bi-y-te/khau-trang.html | network / network_log | evidence/network/1479934c307717d8.mobile.render-stabilized-v3_3.json | 2026-09-28T21:48:08.187Z | Unknown / not recorded |
| EVD-209A8C1A5563EBB6 | https://addp.vn/thiet-bi-y-te/khau-trang.html | console / console_log | evidence/console/1479934c307717d8.mobile.render-stabilized-v3_3.json | 2026-09-28T21:48:08.187Z | Unknown / not recorded |
| EVD-571CE21693716D24-first_time-0 | https://addp.vn/ | persona-first_time / journey | evidence/journeys/first_time-0.json | 2026-09-28T22:00:39.881Z | Unknown / not recorded |
| EVD-571CE21693716D24-first_time-0-SHOT | https://addp.vn/ | persona-first_time / screenshot | evidence/journeys/first_time-0.png | 2026-09-28T22:00:39.881Z | Unknown / not recorded |
| EVD-5E169EB798A7CE3C-first_time-1 | https://addp.vn/gioi-thieu | persona-first_time / journey | evidence/journeys/first_time-1.json | 2026-09-28T22:00:39.882Z | Unknown / not recorded |
| EVD-5E169EB798A7CE3C-first_time-1-SHOT | https://addp.vn/gioi-thieu | persona-first_time / screenshot | evidence/journeys/first_time-1.png | 2026-09-28T22:00:39.882Z | Unknown / not recorded |
| EVD-28869D62E349AE02-high_intent-0 | https://addp.vn/ | persona-high_intent / journey | evidence/journeys/high_intent-0.json | 2026-09-28T22:00:45.419Z | Unknown / not recorded |
| EVD-28869D62E349AE02-high_intent-0-SHOT | https://addp.vn/ | persona-high_intent / screenshot | evidence/journeys/high_intent-0.png | 2026-09-28T22:00:45.419Z | Unknown / not recorded |
| EVD-D117A7EAEA699CAA-high_intent-1 | https://addp.vn/sua-hat-glucare-plus | persona-high_intent / journey | evidence/journeys/high_intent-1.json | 2026-09-28T22:00:46.609Z | Unknown / not recorded |
| EVD-D117A7EAEA699CAA-high_intent-1-SHOT | https://addp.vn/sua-hat-glucare-plus | persona-high_intent / screenshot | evidence/journeys/high_intent-1.png | 2026-09-28T22:00:46.609Z | Unknown / not recorded |
| EVD-4E9770DA004CDC44-mobile-0 | https://addp.vn/ | persona-mobile / journey | evidence/journeys/mobile-0.json | 2026-09-28T22:00:49.767Z | Unknown / not recorded |
| EVD-4E9770DA004CDC44-mobile-0-SHOT | https://addp.vn/ | persona-mobile / screenshot | evidence/journeys/mobile-0.png | 2026-09-28T22:00:49.767Z | Unknown / not recorded |
| EVD-574F286DC706B28A-mobile-1 | https://addp.vn/sua-hat-glucare-plus | persona-mobile / journey | evidence/journeys/mobile-1.json | 2026-09-28T22:00:51.229Z | Unknown / not recorded |
| EVD-574F286DC706B28A-mobile-1-SHOT | https://addp.vn/sua-hat-glucare-plus | persona-mobile / screenshot | evidence/journeys/mobile-1.png | 2026-09-28T22:00:51.229Z | Unknown / not recorded |
| EVD-E953DA582A400457-research-0 | https://addp.vn/ | persona-research / journey | evidence/journeys/research-0.json | 2026-09-28T22:00:54.105Z | Unknown / not recorded |
| EVD-E953DA582A400457-research-0-SHOT | https://addp.vn/ | persona-research / screenshot | evidence/journeys/research-0.png | 2026-09-28T22:00:54.105Z | Unknown / not recorded |
| EVD-2D0A822DB858C794-research-1 | https://addp.vn/gioi-thieu | persona-research / journey | evidence/journeys/research-1.json | 2026-09-28T22:00:57.537Z | Unknown / not recorded |
| EVD-2D0A822DB858C794-research-1-SHOT | https://addp.vn/gioi-thieu | persona-research / screenshot | evidence/journeys/research-1.png | 2026-09-28T22:00:57.537Z | Unknown / not recorded |
| EVD-F3C54C45BCE8336A-research-2 | https://addp.vn/chinh-sach-dat-hang | persona-research / journey | evidence/journeys/research-2.json | 2026-09-28T22:00:58.962Z | Unknown / not recorded |
| EVD-F3C54C45BCE8336A-research-2-SHOT | https://addp.vn/chinh-sach-dat-hang | persona-research / screenshot | evidence/journeys/research-2.png | 2026-09-28T22:00:58.962Z | Unknown / not recorded |
