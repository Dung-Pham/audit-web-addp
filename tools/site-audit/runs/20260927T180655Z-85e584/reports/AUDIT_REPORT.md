# Audit Report

**Run ID:** 20260927T180655Z-85e584  
**Date:** 2026-09-27T18:06:55.895Z  
**Target:** https://addp.vn/

## 1. Executive Summary

- 11 accepted findings; 11 planned tasks; 6 manual-review items; 0 blocked items.
- Severity: critical 0, high 9, medium 2, low 0.
- Conclusions below use accepted evidence-linked findings. Unverified areas remain explicit.

## 2. Scope

- Target: https://addp.vn/; environment: production; run: 20260927T180655Z-85e584.
- Recorded page inventory: 31; normalized requirements: 17.
- Viewports: [   {     "name": "desktop",     "width": 1440,     "height": 1000   },   {     "name": "mobile",     "width": 390,     "height": 844   } ].
- Effective models: not verified / not recorded. Routing status: "supported_requested_models_unverified".
- External black-box assessment only. Internal source, backend configuration, private analytics, and order completion cannot be confirmed from public observations.
- Runtime/model limitation: No source, backend, analytics admin or KiotViet access..
- Runtime/model limitation: Non-GET browser requests blocked and explicitly labelled audit induced..
- Runtime/model limitation: Render evidence remains partial when assets fail or do not decode, bounded scrolling cannot reach the bottom, or stabilization times out..
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
| REQ-001 | visual review, computed colors | PARTIAL | Homepage and product captures show palette variation; no separate brand specification file was available. | EVD-8C749E8D6F00DF83, EVD-4256DF417284230A, EVD-C86C629E938B1E14, EVD-E178F1827F773846, EVD-6695052421D33FF3, EVD-9175C04DA21427CA, EVD-571CE21693716D24-0-SHOT, EVD-28869D62E349AE02-0-SHOT, EVD-3C63ACE8EED6B470-0-SHOT, EVD-D67F1CCFC3746E81-1-SHOT, EVD-998DA9C93EAB1C0B-0-SHOT, EVD-E500EB5EAF7D49CB-1-SHOT |
| REQ-002 | computed typography at mobile viewport | FAIL | Mobile measured examples fall below the checklist text-size targets; sampled contrast failures are also recorded. | EVD-AEE314AA3F7151E7, EVD-6E93B5B6099AB8DE, EVD-2CA66D18158349D8, EVD-3425B7ADB4DE40C6, EVD-DF63C483FC434445, EVD-4D473131699530B4, EVD-733F5C04719022AE, EVD-238D776F29EAE37D, EVD-B968E829D7DEA2D7, EVD-4DBA8882236BC114, EVD-9B7514F9C1D9F906, EVD-3B04A9D3DDC17AE0 |
| REQ-003 | named-product image inspection, visual review | PARTIAL | Product imagery and people imagery are visible on sampled pages; image studio quality and full principal-product coverage remain subjective or incomplete. | EVD-8C749E8D6F00DF83, EVD-702877ACD4E72E55, EVD-4256DF417284230A, EVD-92E0841363C85BA1, EVD-C86C629E938B1E14, EVD-EA78205F3017C505, EVD-E178F1827F773846, EVD-0581A36B72F4A783, EVD-6695052421D33FF3, EVD-AA139D52B8CD9DFC, EVD-9175C04DA21427CA, EVD-A56C5E202BFD212A |
| REQ-004 | first viewport visual review | FAIL | Homepage first viewport contains the core message and actions but no principal product package or named product. | EVD-8C749E8D6F00DF83, EVD-4256DF417284230A |
| REQ-005 | CTA size/style inspection | PARTIAL | Large filled purchase controls are visible on product pages; the homepage hero actions are smaller and less prominent on mobile. | EVD-AEE314AA3F7151E7, EVD-8C749E8D6F00DF83, EVD-2CA66D18158349D8, EVD-4256DF417284230A, EVD-DF63C483FC434445, EVD-C86C629E938B1E14, EVD-733F5C04719022AE, EVD-E178F1827F773846, EVD-B968E829D7DEA2D7, EVD-6695052421D33FF3, EVD-9B7514F9C1D9F906, EVD-9175C04DA21427CA |
| REQ-006 | mission/product links/social proof content review | PARTIAL | Mission and three product names are present; testimonials are visible, while supporting proof for safety and standards is not identifiable in sampled views. | EVD-AEE314AA3F7151E7, EVD-702877ACD4E72E55, EVD-2CA66D18158349D8, EVD-92E0841363C85BA1 |
| REQ-007 | PDP table/bullet/FAQ/review/offer inspection | PARTIAL | The newly sampled Viên An Đường detail and three combo pages expose pack names, stock/price/Buy Now and long product-use/ingredient text in server HTML. Their numbered sections do not show a dedicated FAQ, and two promotion URL slugs conflict with displayed pack counts; rendered captures remain partial. | EVD-42AE297DAC33A1B9, EVD-689120860F2FACA2, EVD-D1249648026B4D96, EVD-DF63C483FC434445, EVD-AADDB45759F67004, EVD-1BA12AFB05B5BD13, EVD-733F5C04719022AE, EVD-1C46740F9999CF7B, EVD-5636E0D9D1AB2605, EVD-239333BC638CDEBA, EVD-B968E829D7DEA2D7, EVD-91A2524CB7C652D0, EVD-8B09867D19F1496E, EVD-927DDAF696B5D339, EVD-CB952D69E3E21F68, EVD-1B8FE822419C5EFC, EVD-E744CA9DD952F84A, EVD-A27A80D35B6C440F, EVD-64F79412948E2E74, EVD-6829F253D543AA00 |
| REQ-008 | three-tier landing review for each named product | PARTIAL | The previously omitted Viên An Đường public product landing page is now included and has a product message, ingredient/use sections and product route. Coverage of the three requested product journeys is now present, but the landing view does not establish that all three purchase/research/social-proof/FAQ tiers are complete; rendering is partial. | EVD-80DB3C701FE061F9, EVD-A606C27223349F8A, EVD-0B1AEB9BA55C2F0C, EVD-7175E2F7A2FB1CE7, EVD-F937EC170B27DBBE, EVD-966EC45D4AF196BD, EVD-08F52276A2F3039C, EVD-BD78A039077C5231, EVD-4E535E98956506AC, EVD-EDC2C4DD0945DE30, EVD-1123045C65722F6B, EVD-FB8961F5DDFAE616, EVD-A6F4FB1EBECEC2DF, EVD-BA9F6C2BC097CDFF, EVD-72EEA95DB9F0EDD5-1, EVD-72EEA95DB9F0EDD5-1-SHOT |
| REQ-009 | question headings/40-60 word answers/table/bullet/attribution review | UNKNOWN | A health-topic listing was collected, but article-level authorship, answer summaries, citations and experience credentials were not fully verified in scope. | EVD-BD78A039077C5231, EVD-193B911618A48573, EVD-4E535E98956506AC, EVD-0E21303A3735BA32 |
| REQ-010 | parse JSON-LD, compare structured data with visible content | FAIL | JSON-LD artifacts for homepage and sampled product pages are empty arrays. | EVD-32CB6452441EDF9E, EVD-C16C9A26189A6C8E, EVD-80257931D1966034, EVD-5DEB9224EB2D897C, EVD-E32F848C405D32E0, EVD-EDDAD1FAFA69798C |
| REQ-011 | robots user-agent rule analysis | PARTIAL | robots.txt provides wildcard rules and does not list specific named AI user agents; crawl behavior of those external bots was not tested. | EVD-C51AC48D3DB98538 |
| REQ-012 | compare raw server HTML and rendered content | PARTIAL | Raw and rendered HTML evidence exists; sampled text appears in collected HTML, but full server-rendering behavior and all route states were not verified. | EVD-80DB3C701FE061F9, EVD-A606C27223349F8A, EVD-0B1AEB9BA55C2F0C, EVD-42AE297DAC33A1B9, EVD-689120860F2FACA2, EVD-AADDB45759F67004, EVD-1C46740F9999CF7B, EVD-5636E0D9D1AB2605, EVD-91A2524CB7C652D0 |
| REQ-013 | mobile LAB measurement, PSI if available, overflow/image inspection | FAIL | Single mobile LAB captures report LCP around 19–20 seconds on sampled pages, above the stated 2.5-second goal; Lighthouse and field metrics were unavailable. | EVD-6E93B5B6099AB8DE, EVD-85956D06B433ABCA, EVD-3425B7ADB4DE40C6, EVD-3D15DCDB359887BF, EVD-22E0DDE6D2609F17, EVD-6FA8247E2A86C79A, EVD-9C7D299C355C1D56, EVD-203B6173B6A72522, EVD-4D473131699530B4, EVD-9F9FDDCFDF43F393, EVD-238D776F29EAE37D, EVD-1FE036CF43DBF534 |
| REQ-014 | public script/network/dataLayer inspection, manual successful-order event check | UNKNOWN | Tracking requests and events were not evaluated because telemetry requests were explicitly blocked as audit-induced; analytics admin access is unavailable. | EVD-DBF33A19881A487E, EVD-04B228A36544C865, EVD-97810824842F6F36, EVD-6F5D373CB335C509, EVD-A4A1CE693EA3E721, EVD-1964859DD63DD62B |
| REQ-015 | HTTPS request, robots/sitemap parse, public title/meta extraction, manual backend configurability check | FAIL | Both sitemap URLs discovered by robots/root probing returned HTTP 404; HTTPS page rendering and metadata were observed separately. | EVD-C51AC48D3DB98538, EVD-B093A16D09E3A37E, EVD-A57DC932D580B784, EVD-A81704E1324D31CC, EVD-AEED7CD9E819A9C7, EVD-47098AAEBE5261A0, EVD-1B0A276A53B73033, EVD-193B911618A48573, EVD-0E21303A3735BA32, EVD-8847193527214305, EVD-FEAE1B2C290B94CB, EVD-13C7A1BCD9836960 |
| REQ-016 | read-only checkout form inspection, manual guest order validation | BLOCKED | Actual checkout fields, guest checkout and account requirements were not tested because checkout routes are safety-blocked and robots-disallowed. | EVD-571CE21693716D24-0, EVD-28869D62E349AE02-0, EVD-3C63ACE8EED6B470-0, EVD-D67F1CCFC3746E81-1, EVD-998DA9C93EAB1C0B-0, EVD-E500EB5EAF7D49CB-1 |
| REQ-017 | read-only visible payment options, manual success/KiotViet integration test | PARTIAL | The public ordering policy lists COD and bank-transfer/electronic options; order confirmation and any transfer to a private order system could not be observed. | EVD-EDC2C4DD0945DE30, EVD-1123045C65722F6B, EVD-FB8961F5DDFAE616, EVD-C087DF8FD18C7192-3 |

## 5. Inventory

| URL | Type | HTTP | Indexability | Importance |
| --- | --- | --- | --- | --- |
| https://addp.vn/ | homepage | 200 | indexable_or_unknown | critical |
| https://addp.vn/benh-ly | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/blog/category/suc-khoe-tieu-duong | category | 200 | indexable_or_unknown | high |
| https://addp.vn/chinh-sach-dat-hang | policy | 200 | indexable_or_unknown | high |
| https://addp.vn/contact | contact | 200 | indexable_or_unknown | high |
| https://addp.vn/gioi-thieu | company/about | 200 | indexable_or_unknown | normal |
| https://addp.vn/sua-hat-glucare-plus | product_detail | 200 | indexable_or_unknown | critical |
| https://addp.vn/catalogsearch/advanced/ | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | policy | 200 | indexable_or_unknown | high |
| https://addp.vn/chinh-sach-thanh-toan | policy | 200 | indexable_or_unknown | high |
| https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | policy | 200 | indexable_or_unknown | high |
| https://addp.vn/contact/ | contact | 200 | indexable_or_unknown | high |
| https://addp.vn/gioi-thieu/ | company/about | 200 | indexable_or_unknown | normal |
| https://addp.vn/sua-dinh-duong.html | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/sua-dinh-duong/sua-tre-em.html | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/sui-dovital | product_detail | 200 | indexable_or_unknown | critical |
| https://addp.vn/thiet-bi-y-te.html | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/thiet-bi-y-te/khau-trang.html | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/thuc-pham-chuc-nang.html | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | other | 200 | indexable_or_unknown | normal |
| https://addp.vn/vien-an-duong | product_detail | 200 | Unknown / not recorded | high |
| https://addp.vn/vien-an-duong-addp.html | product_detail | 200 | Unknown / not recorded | high |
| https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | product_detail | 200 | Unknown / not recorded | high |
| https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | product_detail | 200 | Unknown / not recorded | high |
| https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | product_detail | 200 | Unknown / not recorded | high |
| https://addp.vn/vien-sui-dovital | product_detail | 404 | Unknown / not recorded | high |

## 6. Checklist compliance

| Requirement | Original checklist text | Strategic objective source text | Source reference | Verification | Check status | Accepted findings |
| --- | --- | --- | --- | --- | --- | --- |
| REQ-001 | - Màu chủ đạo (Primary - 60%): Sử dụng chuẩn xác sắc Xanh dương đậm (Navy / Royal Blue) từ logo chữ ADDP Pharmacy cho các thanh Header, tiêu đề chính (H1, H2), và logo nhận diện.    - Màu nền trợ sáng (Background - 30%): Dùng nền trắng tinh hoặc xám sáng nhạt (#F8F9FA) để tạo không gian sạch sẽ, không bị lóa mắt.   - Màu điểm nhấn (Accent/CTA - 10%): Dùng tông Cam ấm hoặc Đỏ đô cho các nút bấm chuyển đổi để kích thích hành vi mua sắm. | - Truyền thông & Niềm tin: Kế thừa trọn vẹn sự uy tín, chuẩn mực y tế từ logo sẵn có, đồng thời khắc phục điểm yếu "lạnh lẽo" bằng màu điểm nhấn kích thích hành vi mua hàng. | Trang tính1!C6 | visual review, computed colors | PARTIAL | No accepted finding; compliance unknown |
| REQ-002 | - Dùng font không chân hiện đại (Inter, Roboto). Cỡ chữ tiêu đề tối thiểu 28-32px trên mobile, văn bản thân bài tối thiểu 16px. Khoảng cách dòng thoáng (1.5 - 1.6), giúp khách hàng trung cao tuổi đọc không bị mỏi mắt. | - Trải nghiệm & Bán hàng: Đảm bảo đối tượng khách hàng lớn tuổi hoặc con cháu mua hàng dễ đọc, không bị rào cản thị giác khi tìm hiểu thông tin sức khỏe. | Trang tính1!C7 | computed typography at mobile viewport | FAIL | FND-PER-MOBILE-002 |
| REQ-003 | - 3 sản phẩm chủ lực (Glucare Plus, Viên An Đường, Dovital) phải có hình ảnh chụp studio sắc nét (hoặc 3D render cao cấp), thấy rõ bao bì, tem nhãn.   - Có hình ảnh con người thực tế, biểu cảm an tâm ( người cao tuổi tươi cười) để củng cố thông điệp "Chăm sóc từ giá trị thiện lành". | - Truyền thông nhân văn: Chạm đến cảm xúc của khách hàng, khẳng định chất lượng thực tế và định vị giá trị cốt lõi của thương hiệu ADDP. | Trang tính1!C8 | named-product image inspection, visual review | PARTIAL | No accepted finding; compliance unknown |
| REQ-004 | - Ngay khi mở web (chưa cuộn chuột), màn hình đầu tiên phải hội tụ đủ: Slogan/Thông điệp cốt lõi + Hình ảnh sản phẩm chủ lực + Nút kêu gọi hành động (CTA) to rõ ràng. | - Bán hàng: Định hướng người dùng ngay lập tức tập trung vào sản phẩm trọng tâm, hạn chế tối đa tỷ lệ thoát trang sớm (Bounce Rate). | Trang tính1!C9 | first viewport visual review | FAIL | FND-SPEC-UX-001 |
| REQ-005 | - Nút "Mua ngay", "Đặt tư vấn" phải có hình khối bo tròn, kích thước lớn dễ bấm bằng ngón cái trên mobile, màu sắc tương phản mạnh so với tổng thể web. | - Bán hàng: Dẫn dắt thị giác người dùng tự động thực hiện hành vi chuyển đổi chốt đơn một cách thuận lợi nhất. | Trang tính1!C10 | CTA size/style inspection | PARTIAL | No accepted finding; compliance unknown |
| REQ-006 | - Nêu bật sứ mệnh thương hiệu ADDP.   - Trưng bày trực quan 3 dòng sản phẩm chủ lực kèm nút dẫn thẳng vào Landing Page.   - Đưa khu vực "Bằng chứng xã hội" (feedback khách hàng cũ, chứng nhận an toàn) lên vị trí dễ thấy. | - Truyền thông & Bán hàng: Khắc sâu định vị thương hiệu và tạo điểm tựa niềm tin ngay từ trang đón khách đầu tiên. | Trang tính1!C12 | mission/product links/social proof content review | PARTIAL | No accepted finding; compliance unknown |
| REQ-007 | - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu. | - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay. | Trang tính1!C13 | PDP table/bullet/FAQ/review/offer inspection | PARTIAL | FND-PER-HIGH-001, FND-PER-RESEARCH-001, FND-SPEC-CONTENT-001, FND-SPEC-CONVERSION-006, FND-SPEC-HEALTH-002 |
| REQ-008 | - Tầng 1 (Cho người mua ngay): Giải pháp giải quyết vấn đề + Giá ưu đãi + Nút "Đặt hàng ngay" siêu tốc ở trên cùng.   - Tầng 2 (Cho người tìm hiểu): Cơ chế tác động, thành phần dược liệu, chứng nhận kiểm định minh bạch.   - Tầng 3 (Cho người tham khảo/đắn đo): Bằng chứng xã hội (feedback, video thực tế), khối FAQ (Hỏi đáp) xử lý từ chối và nút chốt đơn cuối trang. | - Bán hàng tối đa hóa: Phục vụ trọn vẹn cả 3 nhóm tâm lý khách hàng từ "nóng" đến "lạnh" khi chạy quảng cáo Google Ads / Facebook Ads mà không bị bỏ sót phân khúc nào. | Trang tính1!C14 | three-tier landing review for each named product | PARTIAL | No accepted finding; compliance unknown |
| REQ-009 | - Bài viết được định dạng chuẩn E-E-A-T.   - Tiêu chuẩn cấu trúc nội dung: Thẻ H2/H3 đặt dưới dạng câu hỏi người dùng hay thắc mắc (VD: "Cách nhận biết sớm biến chứng tiểu đường tuýp 2"). Ngay dưới tiêu đề phải có đoạn tóm tắt trực diện từ 40-60 từ. Nội dung tiếp theo phải sử dụng bảng biểu so sánh hoặc liệt kê ý chính (Bullet points). | - GEO & AEO: Đây là dạng nội dung "vàng" để các hệ thống AI (ChatGPT, Google AI) nhận diện ADDP là nguồn uy tín và tự động đưa tên thương hiệu vào câu trả lời gợi ý cho người dùng, kéo lượng truy cập tự nhiên cực lớn. | Trang tính1!C15 | question headings/40-60 word answers/table/bullet/attribution review | UNKNOWN | No accepted finding; compliance unknown |
| REQ-010 | - Lập trình viên bắt buộc nhúng mã JSON-LD chuẩn cho: Organization (thực thể doanh nghiệp tại Hà Nội), Product (cho 3 sản phẩm), và FAQPage. | - AEO & GEO: Giúp máy tính và bot AI đọc hiểu chính xác 100% về thông tin doanh nghiệp, giá sản phẩm, và các câu hỏi thường gặp mà không cần phỏng đoán. | Trang tính1!C17 | parse JSON-LD, compare structured data with visible content | FAIL | FND-SPEC-GEO-001 |
| REQ-011 | - Cấu hình file robots.txt tuyệt đối không chặn các con bot AI (ChatGPT-User, PerplexityBot, Google-Extended). Cho phép đọc thì thương hiệu mới được AI gợi ý. | - GEO (Tối thượng): Tránh việc website trở nên "vô hình" trước các cỗ máy trả lời thế hệ mới, đảm bảo thương hiệu ADDP luôn xuất hiện trong các câu trả lời gợi ý mua hàng của AI. | Trang tính1!C18 | robots user-agent rule analysis | PARTIAL | No accepted finding; compliance unknown |
| REQ-012 | - Toàn bộ nội dung chữ, giá, mô tả phải được render trực tiếp từ Server (HTML tĩnh) ngay khi tải trang, không dùng JavaScript thuần tải ngầm. | - GEO: Giúp các con bot AI không có khả năng lướt màn hình vẫn đọc được toàn bộ nội dung văn bản của trang ngay từ lần quét đầu tiên. | Trang tính1!C19 | compare raw server HTML and rendered content | PARTIAL | No accepted finding; compliance unknown |
| REQ-013 | - Điểm PageSpeed Insights trên Mobile đạt tối thiểu 85+, thời gian tải thực tế dưới 2.5 giây. Giao diện mobile hiển thị hoàn hảo, không bị tràn viền, vỡ ảnh. | - Bán hàng & SEO: Đảm bảo khách hàng dùng điện thoại không bị ức chế do đợi trang tải lâu, giữ vững tỷ lệ chuyển đổi đơn hàng cao. | Trang tính1!C21 | mobile LAB measurement, PSI if available, overflow/image inspection | FAIL | FND-PER-MOBILE-002, FND-SPEC-PERFORMANCE-001 |
| REQ-014 | - Tích hợp Google Tag Manager (GTM), GA4, Meta Pixel và Google Ads Conversion Tracking.   - Bắt buộc bắn sự kiện thành công khi khách bấm đặt hàng và ghi nhận tại Trang Cảm Ơn (Thank You Page). | - Tối ưu Marketing: Giúp đo lường chính xác chiến dịch quảng cáo nào ra đơn, tính toán đúng ROAS để tối ưu ngân sách chạy Ads hiệu quả. | Trang tính1!C22 | public script/network/dataLayer inspection, manual successful-order event check | UNKNOWN | No accepted finding; compliance unknown |
| REQ-015 | - Cài đặt chứng chỉ SSL (HTTPS), tự động tạo Sitemap.xml và file Robots.txt chuẩn SEO, hỗ trợ tùy biến Title/Meta Description linh hoạt. | - SEO truyền thống: Xây dựng nền tảng kỹ thuật vững chắc để Google dễ dàng lập chỉ mục (index) và đẩy từ khóa lên top tìm kiếm tự nhiên. | Trang tính1!C23 | HTTPS request, robots/sitemap parse, public title/meta extraction, manual backend configurability check | FAIL | FND-SPEC-SEO-001, FND-SPEC-SEO-002 |
| REQ-016 | - Form đặt hàng cực kỳ gọn nhẹ: Chỉ yêu cầu điền Họ tên, SĐT, Địa chỉ. Tuyệt đối không bắt buộc tạo tài khoản trước khi mua hàng để tránh làm khách nản lòng. | - Bán hàng: Xóa bỏ hoàn toàn rào cản tâm lý ngại khai báo rườm rà của khách hàng (đặc biệt là người trung cao tuổi), tối đa hóa số lượng đơn chốt thành công. | Trang tính1!C25 | read-only checkout form inspection, manual guest order validation | BLOCKED | No accepted finding; compliance unknown |
| REQ-017 | - Hỗ trợ thanh toán linh hoạt: COD (nhận hàng trả tiền), Chuyển khoản ngân hàng, kèm hiển thị thông báo xác nhận đơn hàng thành công minh bạch. chuyển thẳng sang kiot viet | - Bán hàng: Tạo sự an tâm tuyệt đối và linh hoạt cho mọi đối tượng khách hàng khi thanh toán trực tuyến hoặc trực tiếp. | Trang tính1!C26 | read-only visible payment options, manual success/KiotViet integration test | PARTIAL | No accepted finding; compliance unknown |

## 7. Persona journeys

### first_time — Understand ADDP, find its company information and principal product route.

Entry: https://addp.vn/. Status: partial. Clicks: 0. Pages: https://addp.vn/, https://addp.vn/vien-an-duong, https://addp.vn/vien-an-duong-addp.html. Evidence: EVD-571CE21693716D24-0, EVD-571CE21693716D24-0-SHOT, EVD-B4E970182A871FB8-0, EVD-B4E970182A871FB8-0-SHOT, EVD-72EEA95DB9F0EDD5-1, EVD-72EEA95DB9F0EDD5-1-SHOT, EVD-E6D0865F197D96B9-2, EVD-E6D0865F197D96B9-2-SHOT.

Blockers: Visible link interaction could not be completed: page.evaluate: Execution context was destroyed, most likely because of a navigation. Confusion: Supplemental coverage was read by direct URL navigation; zero clicks are claimed for these steps.; Earlier attempted clicks did not produce a verified destination state; click completion is recorded as zero.. Positive signals: Read 3 distinct public page(s) through guarded navigation. Incomplete click attempts are documented as blockers; no unobserved destination is claimed..

### high_intent — Find a principal product and inspect the route toward cart/checkout without mutation.

Entry: https://addp.vn/. Status: partial. Clicks: 0. Pages: https://addp.vn/, https://addp.vn/vien-an-duong-addp.html, https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html, https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html, https://addp.vn/vien-an-duong-addp-combo-hai-hop.html. Evidence: EVD-28869D62E349AE02-0, EVD-28869D62E349AE02-0-SHOT, EVD-95A7A385066B4767-0, EVD-95A7A385066B4767-0-SHOT, EVD-4904299128015771-1, EVD-4904299128015771-1-SHOT, EVD-3AF216AB0137661E-2, EVD-3AF216AB0137661E-2-SHOT, EVD-EAD334DEA5DC1406-3, EVD-EAD334DEA5DC1406-3-SHOT.

Blockers: Visible link interaction could not be completed: page.evaluate: Execution context was destroyed, most likely because of a navigation; No safe reachable URL in collected scope for journey goal pattern checkout\/cart\|gio-hang\|\/cart\/?$; Visible link interaction could not be completed: locator.click: Timeout 5000ms exceeded.; Add-to-cart, order submission and downstream confirmation intentionally not executed in production read-only mode.; Cart/checkout route not entered; add-to-cart, order, payment and form actions were not executed.. Confusion: Supplemental coverage was read by direct URL navigation; zero clicks are claimed for these steps.; Earlier attempted clicks did not produce a verified destination state; click completion is recorded as zero.. Positive signals: Read 5 distinct public page(s) through guarded navigation. Incomplete click attempts are documented as blockers; no unobserved destination is claimed..

### research — Research a nutrition product for a parent, then inspect company and policy information.

Entry: https://addp.vn/. Status: partial. Clicks: 0. Pages: https://addp.vn/, https://addp.vn/sua-hat-glucare-plus, https://addp.vn/gioi-thieu, https://addp.vn/chinh-sach-dat-hang, https://addp.vn/vien-an-duong-addp.html. Evidence: EVD-3C63ACE8EED6B470-0, EVD-3C63ACE8EED6B470-0-SHOT, EVD-D67F1CCFC3746E81-1, EVD-D67F1CCFC3746E81-1-SHOT, EVD-B61797A9CD1390CF-2, EVD-B61797A9CD1390CF-2-SHOT, EVD-C087DF8FD18C7192-3, EVD-C087DF8FD18C7192-3-SHOT, EVD-A5A2EC5D07364AA0-0, EVD-A5A2EC5D07364AA0-0-SHOT, EVD-600B2A843FE0B546-1, EVD-600B2A843FE0B546-1-SHOT, EVD-A52D49B4C5C8E378-2, EVD-A52D49B4C5C8E378-2-SHOT.

Blockers: none recorded. Confusion: Continuation used safe URLs already present in the public inventory after the generic journey runner stalled; direct navigation is not counted as a click.; Supplemental coverage was read by direct URL navigation; zero clicks are claimed for these steps.. Positive signals: Recorded 4 bounded read-only page state(s) across 4 distinct page(s).; Supplemental coverage: 3 additional public page state(s) recorded..

### mobile — Inspect product discovery and purchase controls as a middle-aged or older phone user with ordinary or limited digital confidence.

Entry: https://addp.vn/. Status: partial. Clicks: 0. Pages: https://addp.vn/, https://addp.vn/sua-hat-glucare-plus, https://addp.vn/vien-an-duong, https://addp.vn/vien-an-duong-addp.html. Evidence: EVD-998DA9C93EAB1C0B-0, EVD-998DA9C93EAB1C0B-0-SHOT, EVD-E500EB5EAF7D49CB-1, EVD-E500EB5EAF7D49CB-1-SHOT, EVD-6934AB226B4221DC-0, EVD-6934AB226B4221DC-0-SHOT, EVD-051C12B979C427BA-1, EVD-051C12B979C427BA-1-SHOT.

Blockers: Cart mutation, checkout submission, order, payment, account creation and form submission intentionally not executed.. Confusion: Continuation used safe URLs already present in the public inventory after the generic journey runner stalled; direct navigation is not counted as a click.; Supplemental coverage was read by direct URL navigation; zero clicks are claimed for these steps.. Positive signals: Recorded 2 bounded read-only page state(s) across 2 distinct page(s).; Supplemental coverage: 2 additional public page state(s) recorded..

## 8. UX/UI

### FND-PER-MOBILE-002 — Product-price text fails automated contrast checks on mobile



**Classification:** high severity; measured; confidence 0.99; source checklist.

**Affected page:** https://addp.vn/sua-hat-glucare-plus (product_detail).

**FACT — observation:** The mobile accessibility artifact reports serious color-contrast failures for product-price text, including gold text at 2.77:1 on the light background and gray text at 2.45:1, below the stated 3:1 or 4.5:1 thresholds.

**Evidence:** EVD-238D776F29EAE37D (evidence/accessibility/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json)

**Requirement links:** REQ-002 — source Trang tính1!C7; original checklist text: - Dùng font không chân hiện đại (Inter, Roboto). Cỡ chữ tiêu đề tối thiểu 28-32px trên mobile, văn bản thân bài tối thiểu 16px. Khoảng cách dòng thoáng (1.5 - 1.6), giúp khách hàng trung cao tuổi đọc không bị mỏi mắt.; strategic objective source text: - Trải nghiệm & Bán hàng: Đảm bảo đối tượng khách hàng lớn tuổi hoặc con cháu mua hàng dễ đọc, không bị rào cản thị giác khi tìm hiểu thông tin sức khỏe.; REQ-013 — source Trang tính1!C21; original checklist text: - Điểm PageSpeed Insights trên Mobile đạt tối thiểu 85+, thời gian tải thực tế dưới 2.5 giây. Giao diện mobile hiển thị hoàn hảo, không bị tràn viền, vỡ ảnh.; strategic objective source text: - Bán hàng & SEO: Đảm bảo khách hàng dùng điện thoại không bị ức chế do đợi trang tải lâu, giữ vững tỷ lệ chuyển đổi đơn hàng cao.

**Planned task(s):** TASK-003

**ANALYSIS — impact:** user: Low-contrast price text can be difficult to read, especially for visitors with reduced contrast sensitivity.; business: Price legibility affects product comparison and confidence.; seo: Unknown / not recorded; technical: Rendered foreground/background combinations fail automated contrast rules..

**RECOMMENDATION — direction:** Adjust price colors or backgrounds so rendered text meets the applicable WCAG contrast ratio in every product-card state..

**Unknowns:** Automated contrast results should be confirmed against final design tokens and states.

**CONFIRMED EXTERNAL FACTS:** The mobile accessibility artifact reports serious color-contrast failures for product-price text, including gold text at 2.77:1 on the light background and gray text at 2.45:1, below the stated 3:1 or 4.5:1 thresholds.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-UX-001 — The homepage hero does not show a principal product



**Classification:** high severity; content_review; confidence 0.98; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** The stabilized desktop and mobile first-view captures show the ADDP logo, the message "Chăm sóc từ giá trị thiện lành", the headline "Sức Khỏe Bền Vững Khởi Nguồn Từ Tâm", an older couple, supporting copy, and the actions "Khám phá ngay" and "Tư vấn miễn phí". No product package or named principal product is visible in either captured first viewport. REQ-004 calls for the first viewport to combine a core message, a principal-product image, and a large clear CTA; the message and actions are present, while the product-image element is absent from the captured state.

**Evidence:** EVD-8C749E8D6F00DF83 (evidence/screenshots/e4e0c9a45799894e.desktop.render-stabilized-v1.stabilized.viewport.png), EVD-4256DF417284230A (evidence/screenshots/e4e0c9a45799894e.mobile.render-stabilized-v1.stabilized.viewport.png), EVD-702877ACD4E72E55 (evidence/screenshots/e4e0c9a45799894e.desktop.render-stabilized-v1.stabilized.full.png), EVD-92E0841363C85BA1 (evidence/screenshots/e4e0c9a45799894e.mobile.render-stabilized-v1.stabilized.full.png)

**Requirement links:** REQ-004 — source Trang tính1!C9; original checklist text: - Ngay khi mở web (chưa cuộn chuột), màn hình đầu tiên phải hội tụ đủ: Slogan/Thông điệp cốt lõi + Hình ảnh sản phẩm chủ lực + Nút kêu gọi hành động (CTA) to rõ ràng.; strategic objective source text: - Bán hàng: Định hướng người dùng ngay lập tức tập trung vào sản phẩm trọng tâm, hạn chế tối đa tỷ lệ thoát trang sớm (Bounce Rate).

**Planned task(s):** TASK-004

**ANALYSIS — impact:** user: A first-time visitor can understand the care-oriented brand message, but must continue down the page before seeing what ADDP sells. This adds orientation work for an older or middle-aged self-purchaser and for an adult child quickly assessing a product for a parent.; business: The first viewport does not immediately connect the brand promise to a specific purchasable product, weakening product discovery at the earliest decision point.; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Keep the current human, reassuring message, but add a clearly identifiable principal-product packshot or product grouping within the first desktop and mobile viewport and preserve an obvious route to that product..

**Unknowns:** Whether another timed or carousel state shows a product before user interaction.; Whether the hero is intended to prioritize corporate positioning over immediate product orientation.

**CONFIRMED EXTERNAL FACTS:** The stabilized desktop and mobile first-view captures show the ADDP logo, the message "Chăm sóc từ giá trị thiện lành", the headline "Sức Khỏe Bền Vững Khởi Nguồn Từ Tâm", an older couple, supporting copy, and the actions "Khám phá ngay" and "Tư vấn miễn phí". No product package or named principal product is visible in either captured first viewport. REQ-004 calls for the first viewport to combine a core message, a principal-product image, and a large clear CTA; the message and actions are present, while the product-image element is absent from the captured state.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

## 9. Conversion

### FND-PER-HIGH-001 — Product listings expose both a sample price and zero-price items



**Classification:** high severity; content_review; confidence 0.99; source checklist.

**Affected page:** https://addp.vn/sua-hat-glucare-plus (product_detail).

**FACT — observation:** The captured Glucare Plus product page text presents a 1-package listing at 9,000 VND and other product listings at 0 VND in the same product section.

**Evidence:** EVD-D67F1CCFC3746E81-1 (evidence/journeys/research-continuation-1.json), EVD-238D776F29EAE37D (evidence/accessibility/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json), EVD-DF63C483FC434445 (evidence/dom/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json), EVD-733F5C04719022AE (evidence/dom/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json), EVD-EA78205F3017C505 (evidence/screenshots/ebd40bf592e2f9a7.desktop.render-stabilized-v1.stabilized.full.png), EVD-0581A36B72F4A783 (evidence/screenshots/ebd40bf592e2f9a7.mobile.render-stabilized-v1.stabilized.full.png)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-001

**ANALYSIS — impact:** user: A self-purchaser or adult child cannot tell from the captured state whether zero is a real price, unavailable price, or placeholder.; business: Ambiguous price presentation can interrupt purchase confidence.; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Replace zero-price merchandising states with an explicit availability or contact-for-price label and keep package/price meaning consistent..

**Unknowns:** The capture does not establish inventory, configuration, or backend pricing state.

**CONFIRMED EXTERNAL FACTS:** The captured Glucare Plus product page text presents a 1-package listing at 9,000 VND and other product listings at 0 VND in the same product section.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-UX-001 — The homepage hero does not show a principal product



**Classification:** high severity; content_review; confidence 0.98; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** The stabilized desktop and mobile first-view captures show the ADDP logo, the message "Chăm sóc từ giá trị thiện lành", the headline "Sức Khỏe Bền Vững Khởi Nguồn Từ Tâm", an older couple, supporting copy, and the actions "Khám phá ngay" and "Tư vấn miễn phí". No product package or named principal product is visible in either captured first viewport. REQ-004 calls for the first viewport to combine a core message, a principal-product image, and a large clear CTA; the message and actions are present, while the product-image element is absent from the captured state.

**Evidence:** EVD-8C749E8D6F00DF83 (evidence/screenshots/e4e0c9a45799894e.desktop.render-stabilized-v1.stabilized.viewport.png), EVD-4256DF417284230A (evidence/screenshots/e4e0c9a45799894e.mobile.render-stabilized-v1.stabilized.viewport.png), EVD-702877ACD4E72E55 (evidence/screenshots/e4e0c9a45799894e.desktop.render-stabilized-v1.stabilized.full.png), EVD-92E0841363C85BA1 (evidence/screenshots/e4e0c9a45799894e.mobile.render-stabilized-v1.stabilized.full.png)

**Requirement links:** REQ-004 — source Trang tính1!C9; original checklist text: - Ngay khi mở web (chưa cuộn chuột), màn hình đầu tiên phải hội tụ đủ: Slogan/Thông điệp cốt lõi + Hình ảnh sản phẩm chủ lực + Nút kêu gọi hành động (CTA) to rõ ràng.; strategic objective source text: - Bán hàng: Định hướng người dùng ngay lập tức tập trung vào sản phẩm trọng tâm, hạn chế tối đa tỷ lệ thoát trang sớm (Bounce Rate).

**Planned task(s):** TASK-004

**ANALYSIS — impact:** user: A first-time visitor can understand the care-oriented brand message, but must continue down the page before seeing what ADDP sells. This adds orientation work for an older or middle-aged self-purchaser and for an adult child quickly assessing a product for a parent.; business: The first viewport does not immediately connect the brand promise to a specific purchasable product, weakening product discovery at the earliest decision point.; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Keep the current human, reassuring message, but add a clearly identifiable principal-product packshot or product grouping within the first desktop and mobile viewport and preserve an obvious route to that product..

**Unknowns:** Whether another timed or carousel state shows a product before user interaction.; Whether the hero is intended to prioritize corporate positioning over immediate product orientation.

**CONFIRMED EXTERNAL FACTS:** The stabilized desktop and mobile first-view captures show the ADDP logo, the message "Chăm sóc từ giá trị thiện lành", the headline "Sức Khỏe Bền Vững Khởi Nguồn Từ Tâm", an older couple, supporting copy, and the actions "Khám phá ngay" and "Tư vấn miễn phí". No product package or named principal product is visible in either captured first viewport. REQ-004 calls for the first viewport to combine a core message, a principal-product image, and a large clear CTA; the message and actions are present, while the product-image element is absent from the captured state.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

## 10. Brand

No accepted finding is mapped to this section. This does not establish compliance; coverage or expert review may still be incomplete.

## 11. Homepage

### FND-SPEC-UX-001 — The homepage hero does not show a principal product



**Classification:** high severity; content_review; confidence 0.98; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** The stabilized desktop and mobile first-view captures show the ADDP logo, the message "Chăm sóc từ giá trị thiện lành", the headline "Sức Khỏe Bền Vững Khởi Nguồn Từ Tâm", an older couple, supporting copy, and the actions "Khám phá ngay" and "Tư vấn miễn phí". No product package or named principal product is visible in either captured first viewport. REQ-004 calls for the first viewport to combine a core message, a principal-product image, and a large clear CTA; the message and actions are present, while the product-image element is absent from the captured state.

**Evidence:** EVD-8C749E8D6F00DF83 (evidence/screenshots/e4e0c9a45799894e.desktop.render-stabilized-v1.stabilized.viewport.png), EVD-4256DF417284230A (evidence/screenshots/e4e0c9a45799894e.mobile.render-stabilized-v1.stabilized.viewport.png), EVD-702877ACD4E72E55 (evidence/screenshots/e4e0c9a45799894e.desktop.render-stabilized-v1.stabilized.full.png), EVD-92E0841363C85BA1 (evidence/screenshots/e4e0c9a45799894e.mobile.render-stabilized-v1.stabilized.full.png)

**Requirement links:** REQ-004 — source Trang tính1!C9; original checklist text: - Ngay khi mở web (chưa cuộn chuột), màn hình đầu tiên phải hội tụ đủ: Slogan/Thông điệp cốt lõi + Hình ảnh sản phẩm chủ lực + Nút kêu gọi hành động (CTA) to rõ ràng.; strategic objective source text: - Bán hàng: Định hướng người dùng ngay lập tức tập trung vào sản phẩm trọng tâm, hạn chế tối đa tỷ lệ thoát trang sớm (Bounce Rate).

**Planned task(s):** TASK-004

**ANALYSIS — impact:** user: A first-time visitor can understand the care-oriented brand message, but must continue down the page before seeing what ADDP sells. This adds orientation work for an older or middle-aged self-purchaser and for an adult child quickly assessing a product for a parent.; business: The first viewport does not immediately connect the brand promise to a specific purchasable product, weakening product discovery at the earliest decision point.; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Keep the current human, reassuring message, but add a clearly identifiable principal-product packshot or product grouping within the first desktop and mobile viewport and preserve an obvious route to that product..

**Unknowns:** Whether another timed or carousel state shows a product before user interaction.; Whether the hero is intended to prioritize corporate positioning over immediate product orientation.

**CONFIRMED EXTERNAL FACTS:** The stabilized desktop and mobile first-view captures show the ADDP logo, the message "Chăm sóc từ giá trị thiện lành", the headline "Sức Khỏe Bền Vững Khởi Nguồn Từ Tâm", an older couple, supporting copy, and the actions "Khám phá ngay" and "Tư vấn miễn phí". No product package or named principal product is visible in either captured first viewport. REQ-004 calls for the first viewport to combine a core message, a principal-product image, and a large clear CTA; the message and actions are present, while the product-image element is absent from the captured state.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-SEO-002 — Both discovered sitemap URLs returned HTTP 404 during the audit



**Classification:** high severity; deterministic; confidence 0.99; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** Discovery recorded HTTP 404 for both https://addp.vn/pub/sitemap.xml and https://addp.vn/sitemap.xml.

**Evidence:** EVD-B093A16D09E3A37E (evidence/discovery/sitemap-18ff84938bf215b3.xml), EVD-A57DC932D580B784 (evidence/discovery/sitemap-52618716ffbf735c.xml)

**Requirement links:** REQ-015 — source Trang tính1!C23; original checklist text: - Cài đặt chứng chỉ SSL (HTTPS), tự động tạo Sitemap.xml và file Robots.txt chuẩn SEO, hỗ trợ tùy biến Title/Meta Description linh hoạt.; strategic objective source text: - SEO truyền thống: Xây dựng nền tảng kỹ thuật vững chắc để Google dễ dàng lập chỉ mục (index) và đẩy từ khóa lên top tìm kiếm tự nhiên.

**Planned task(s):** TASK-007

**ANALYSIS — impact:** user: Unknown / not recorded; business: A crawler may not discover an XML sitemap through these advertised URLs.; seo: The robots file advertises a sitemap URL that returned 404; the alternate root sitemap URL also returned 404.; technical: Both observed sitemap endpoints returned HTTP 404..

**RECOMMENDATION — direction:** Publish a valid sitemap at the advertised URL and verify its response and submitted URL set..

**Unknowns:** The audit did not access Search Console or verify other sitemap locations.

**CONFIRMED EXTERNAL FACTS:** Discovery recorded HTTP 404 for both https://addp.vn/pub/sitemap.xml and https://addp.vn/sitemap.xml.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-GEO-001 — Homepage and product pages expose no JSON-LD in the captured desktop/mobile pages



**Classification:** high severity; deterministic; confidence 0.98; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** The indexed JSON-LD evidence artifacts contain empty arrays for the homepage and captured Glucare Plus desktop and mobile pages; no Organization, Product or FAQPage JSON-LD item was recorded in these captures.

**Evidence:** EVD-32CB6452441EDF9E (evidence/schema/e4e0c9a45799894e.desktop.render-stabilized-v1.json), EVD-C16C9A26189A6C8E (evidence/schema/e4e0c9a45799894e.mobile.render-stabilized-v1.json), EVD-80257931D1966034 (evidence/schema/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json), EVD-5DEB9224EB2D897C (evidence/schema/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json)

**Requirement links:** REQ-010 — source Trang tính1!C17; original checklist text: - Lập trình viên bắt buộc nhúng mã JSON-LD chuẩn cho: Organization (thực thể doanh nghiệp tại Hà Nội), Product (cho 3 sản phẩm), và FAQPage.; strategic objective source text: - AEO & GEO: Giúp máy tính và bot AI đọc hiểu chính xác 100% về thông tin doanh nghiệp, giá sản phẩm, và các câu hỏi thường gặp mà không cần phỏng đoán.

**Planned task(s):** TASK-008

**ANALYSIS — impact:** user: Unknown / not recorded; business: Machine-readable entity and product information is not present in these captured pages.; seo: Requested structured entity, product and FAQ data is absent from the observed pages.; technical: The JSON-LD collector returned empty arrays for sampled pages..

**RECOMMENDATION — direction:** Add validated Organization markup and accurate Product and FAQPage markup where the corresponding visible content exists..

**Unknowns:** Finding is limited to sampled pages and JSON-LD; other structured-data formats were not assessed here.

**CONFIRMED EXTERNAL FACTS:** The indexed JSON-LD evidence artifacts contain empty arrays for the homepage and captured Glucare Plus desktop and mobile pages; no Organization, Product or FAQPage JSON-LD item was recorded in these captures.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-PERFORMANCE-001 — Mobile lab captures show LCP above the checklist threshold on sampled pages



**Classification:** high severity; measured; confidence 0.98; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** The mobile LAB artifact records LCP 20,456 ms on the homepage, 19,952 ms on /benh-ly, and 18,956 ms on the diabetes-health article listing; the checklist target is under 2.5 seconds.

**Evidence:** EVD-3D15DCDB359887BF (evidence/lighthouse/e4e0c9a45799894e.mobile.render-stabilized-v1.lab.json), EVD-D2E949A54A61C783 (evidence/lighthouse/65e3d78cc6db4646.mobile.render-stabilized-v1.lab.json), EVD-203B6173B6A72522 (evidence/lighthouse/b929b6c94da55a49.mobile.render-stabilized-v1.lab.json)

**Requirement links:** REQ-013 — source Trang tính1!C21; original checklist text: - Điểm PageSpeed Insights trên Mobile đạt tối thiểu 85+, thời gian tải thực tế dưới 2.5 giây. Giao diện mobile hiển thị hoàn hảo, không bị tràn viền, vỡ ảnh.; strategic objective source text: - Bán hàng & SEO: Đảm bảo khách hàng dùng điện thoại không bị ức chế do đợi trang tải lâu, giữ vững tỷ lệ chuyển đổi đơn hàng cao.

**Planned task(s):** TASK-009

**ANALYSIS — impact:** user: Slow observed rendering can delay access to product and health information.; business: Long wait times may interrupt discovery and evaluation.; seo: The sampled LAB values exceed the stated performance target.; technical: The measured LCP values are 7.6 to 8.2 times the 2,500 ms target..

**RECOMMENDATION — direction:** Profile and reduce the observed largest-contentful paint path, then repeat comparable mobile lab runs..

**Unknowns:** These are single audit-browser LAB observations, not field Core Web Vitals or PageSpeed Insights scores; all page collections remain partial.

**CONFIRMED EXTERNAL FACTS:** The mobile LAB artifact records LCP 20,456 ms on the homepage, 19,952 ms on /benh-ly, and 18,956 ms on the diabetes-health article listing; the checklist target is under 2.5 seconds.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

## 12. PDP

### FND-PER-HIGH-001 — Product listings expose both a sample price and zero-price items



**Classification:** high severity; content_review; confidence 0.99; source checklist.

**Affected page:** https://addp.vn/sua-hat-glucare-plus (product_detail).

**FACT — observation:** The captured Glucare Plus product page text presents a 1-package listing at 9,000 VND and other product listings at 0 VND in the same product section.

**Evidence:** EVD-D67F1CCFC3746E81-1 (evidence/journeys/research-continuation-1.json), EVD-238D776F29EAE37D (evidence/accessibility/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json), EVD-DF63C483FC434445 (evidence/dom/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json), EVD-733F5C04719022AE (evidence/dom/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json), EVD-EA78205F3017C505 (evidence/screenshots/ebd40bf592e2f9a7.desktop.render-stabilized-v1.stabilized.full.png), EVD-0581A36B72F4A783 (evidence/screenshots/ebd40bf592e2f9a7.mobile.render-stabilized-v1.stabilized.full.png)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-001

**ANALYSIS — impact:** user: A self-purchaser or adult child cannot tell from the captured state whether zero is a real price, unavailable price, or placeholder.; business: Ambiguous price presentation can interrupt purchase confidence.; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Replace zero-price merchandising states with an explicit availability or contact-for-price label and keep package/price meaning consistent..

**Unknowns:** The capture does not establish inventory, configuration, or backend pricing state.

**CONFIRMED EXTERNAL FACTS:** The captured Glucare Plus product page text presents a 1-package listing at 9,000 VND and other product listings at 0 VND in the same product section.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-PER-RESEARCH-001 — Health and safety claims appear without an identifiable supporting-document route in the captured product state



**Classification:** high severity; content_review; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/sua-hat-glucare-plus (product_detail).

**FACT — observation:** The captured Glucare Plus page states that it is suitable for people with diabetes, uses “Công thức y khoa ADDP”, and safely supports blood-glucose control; the captured link set exposes an ingredient anchor but no visible link labelled as a study, declaration, certification, or supporting document.

**Evidence:** EVD-D67F1CCFC3746E81-1 (evidence/journeys/research-continuation-1.json)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-002

**ANALYSIS — impact:** user: A skeptical adult child cannot trace these high-stakes claims to supporting material from the captured product state.; business: Unverifiable claim presentation can reduce trust for a health-related purchase.; seo: Clear source and evidence links can improve entity and claim context.; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Place clearly labelled public supporting sources, product declarations, and appropriate-use boundaries next to the relevant claims..

**Unknowns:** No judgment is made about medical validity, effectiveness, document authenticity, certification authenticity, or individual suitability.; A source may exist outside the captured page or selected scope.

**CONFIRMED EXTERNAL FACTS:** The captured Glucare Plus page states that it is suitable for people with diabetes, uses “Công thức y khoa ADDP”, and safely supports blood-glucose control; the captured link set exposes an ingredient anchor but no visible link labelled as a study, declaration, certification, or supporting document.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-PER-MOBILE-002 — Product-price text fails automated contrast checks on mobile



**Classification:** high severity; measured; confidence 0.99; source checklist.

**Affected page:** https://addp.vn/sua-hat-glucare-plus (product_detail).

**FACT — observation:** The mobile accessibility artifact reports serious color-contrast failures for product-price text, including gold text at 2.77:1 on the light background and gray text at 2.45:1, below the stated 3:1 or 4.5:1 thresholds.

**Evidence:** EVD-238D776F29EAE37D (evidence/accessibility/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json)

**Requirement links:** REQ-002 — source Trang tính1!C7; original checklist text: - Dùng font không chân hiện đại (Inter, Roboto). Cỡ chữ tiêu đề tối thiểu 28-32px trên mobile, văn bản thân bài tối thiểu 16px. Khoảng cách dòng thoáng (1.5 - 1.6), giúp khách hàng trung cao tuổi đọc không bị mỏi mắt.; strategic objective source text: - Trải nghiệm & Bán hàng: Đảm bảo đối tượng khách hàng lớn tuổi hoặc con cháu mua hàng dễ đọc, không bị rào cản thị giác khi tìm hiểu thông tin sức khỏe.; REQ-013 — source Trang tính1!C21; original checklist text: - Điểm PageSpeed Insights trên Mobile đạt tối thiểu 85+, thời gian tải thực tế dưới 2.5 giây. Giao diện mobile hiển thị hoàn hảo, không bị tràn viền, vỡ ảnh.; strategic objective source text: - Bán hàng & SEO: Đảm bảo khách hàng dùng điện thoại không bị ức chế do đợi trang tải lâu, giữ vững tỷ lệ chuyển đổi đơn hàng cao.

**Planned task(s):** TASK-003

**ANALYSIS — impact:** user: Low-contrast price text can be difficult to read, especially for visitors with reduced contrast sensitivity.; business: Price legibility affects product comparison and confidence.; seo: Unknown / not recorded; technical: Rendered foreground/background combinations fail automated contrast rules..

**RECOMMENDATION — direction:** Adjust price colors or backgrounds so rendered text meets the applicable WCAG contrast ratio in every product-card state..

**Unknowns:** Automated contrast results should be confirmed against final design tokens and states.

**CONFIRMED EXTERNAL FACTS:** The mobile accessibility artifact reports serious color-contrast failures for product-price text, including gold text at 2.77:1 on the light background and gray text at 2.45:1, below the stated 3:1 or 4.5:1 thresholds.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-CONTENT-001 — Product page does not present a direct FAQ block in the captured content



**Classification:** medium severity; content_review; confidence 0.87; source checklist.

**Affected page:** https://addp.vn/sua-hat-glucare-plus (product_detail).

**FACT — observation:** The captured Glucare Plus product page includes product claims, ingredient sections, usage steps and offers, but its visible heading and text extract contains no FAQ or question-and-answer block.

**Evidence:** EVD-D67F1CCFC3746E81-1 (evidence/journeys/research-continuation-1.json), EVD-D1249648026B4D96 (evidence/seo/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-005

**ANALYSIS — impact:** user: A buyer researching for a parent may not find direct answers to appropriate use, interactions or limits at the product decision point.; business: Unanswered purchase questions can prevent informed decisions.; seo: A structured question-and-answer section can improve direct answer extraction.; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Add evidence-grounded FAQ answers with explicit boundaries and reviewed sources beside the product information..

**Unknowns:** Assessment is limited to captured page text and headings; content may change after this observation.

**CONFIRMED EXTERNAL FACTS:** The captured Glucare Plus product page includes product claims, ingredient sections, usage steps and offers, but its visible heading and text extract contains no FAQ or question-and-answer block.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-SEO-001 — Product page retains a generic meta description



**Classification:** medium severity; deterministic; confidence 0.99; source checklist.

**Affected page:** https://addp.vn/sua-hat-glucare-plus (product_detail).

**FACT — observation:** The rendered SEO artifact records the Glucare Plus page meta description as “Default Description” on both desktop and mobile.

**Evidence:** EVD-D1249648026B4D96 (evidence/seo/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json), EVD-1BA12AFB05B5BD13 (evidence/seo/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json)

**Requirement links:** REQ-015 — source Trang tính1!C23; original checklist text: - Cài đặt chứng chỉ SSL (HTTPS), tự động tạo Sitemap.xml và file Robots.txt chuẩn SEO, hỗ trợ tùy biến Title/Meta Description linh hoạt.; strategic objective source text: - SEO truyền thống: Xây dựng nền tảng kỹ thuật vững chắc để Google dễ dàng lập chỉ mục (index) và đẩy từ khóa lên top tìm kiếm tự nhiên.

**Planned task(s):** TASK-006

**ANALYSIS — impact:** user: Search previews may not describe the specific product page.; business: A generic snippet may reduce relevance for product searches.; seo: The product URL has a non-specific description.; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Write a unique accurate description for the product page and verify it in the rendered document..

**Unknowns:** Search-result appearance and ranking impact were not measured.

**CONFIRMED EXTERNAL FACTS:** The rendered SEO artifact records the Glucare Plus page meta description as “Default Description” on both desktop and mobile.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-CONVERSION-006 — Viên An Đường combo URL promotion and displayed pack count disagree



**Classification:** high severity; content_review; confidence 0.91; source checklist.

**Affected page:** https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html (product_detail).

**FACT — observation:** The URL slug says “combo-mua-2-tang-2” while the captured page H1 labels the offer “[Combo 3 Hộp]”; on the separate “mua-3-tang-4” URL, the H1 says “[Combo 5 Hộp]”. The captured copy does not explain that the route wording and displayed pack count refer to different quantities.

**Evidence:** EVD-CB952D69E3E21F68 (evidence/html/dace973208f2be9b.render-stabilized-v1.raw.html), EVD-E744CA9DD952F84A (evidence/html/2dcff7b0a97be809.render-stabilized-v1.raw.html)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-010

**ANALYSIS — impact:** user: A shopper researching a health product may have difficulty interpreting the product offer and its supporting information.; business: Unclear product information may reduce confidence at the decision point.; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Align campaign URL/title/quantity labels and explicitly show total units and gift quantity before any order action..

**Unknowns:** The capture does not establish backend price configuration, product eligibility or clinical effectiveness.

**CONFIRMED EXTERNAL FACTS:** The URL slug says “combo-mua-2-tang-2” while the captured page H1 labels the offer “[Combo 3 Hộp]”; on the separate “mua-3-tang-4” URL, the H1 says “[Combo 5 Hộp]”. The captured copy does not explain that the route wording and displayed pack count refer to different quantities.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-HEALTH-002 — Viên An Đường product copy makes an unqualified no-side-effects claim



**Classification:** high severity; content_review; confidence 0.91; source checklist.

**Affected page:** https://addp.vn/vien-an-duong-addp.html (product_detail).

**FACT — observation:** The captured product page says “đảm bảo hiệu quả không tác dụng phụ” and separately lists people with diabetes among potential users. The captured page does not identify supporting material beside this claim; this observation does not establish safety, efficacy or suitability.

**Evidence:** EVD-8B09867D19F1496E (evidence/html/db93fc388a5ba278.render-stabilized-v1.raw.html), EVD-927DDAF696B5D339 (evidence/seo/db93fc388a5ba278.render-stabilized-v1.raw.json)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-011

**ANALYSIS — impact:** user: A shopper researching a health product may have difficulty interpreting the product offer and its supporting information.; business: Unclear product information may reduce confidence at the decision point.; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Have qualified reviewers substantiate, qualify or remove absolute efficacy and side-effect claims, and show appropriate-use boundaries with accessible supporting sources..

**Unknowns:** The capture does not establish backend price configuration, product eligibility or clinical effectiveness.

**CONFIRMED EXTERNAL FACTS:** The captured product page says “đảm bảo hiệu quả không tác dụng phụ” and separately lists people with diabetes among potential users. The captured page does not identify supporting material beside this claim; this observation does not establish safety, efficacy or suitability.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

## 13. Landing pages

No accepted finding is mapped to this section. This does not establish compliance; coverage or expert review may still be incomplete.

## 14. News/content

### FND-PER-RESEARCH-001 — Health and safety claims appear without an identifiable supporting-document route in the captured product state



**Classification:** high severity; content_review; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/sua-hat-glucare-plus (product_detail).

**FACT — observation:** The captured Glucare Plus page states that it is suitable for people with diabetes, uses “Công thức y khoa ADDP”, and safely supports blood-glucose control; the captured link set exposes an ingredient anchor but no visible link labelled as a study, declaration, certification, or supporting document.

**Evidence:** EVD-D67F1CCFC3746E81-1 (evidence/journeys/research-continuation-1.json)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-002

**ANALYSIS — impact:** user: A skeptical adult child cannot trace these high-stakes claims to supporting material from the captured product state.; business: Unverifiable claim presentation can reduce trust for a health-related purchase.; seo: Clear source and evidence links can improve entity and claim context.; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Place clearly labelled public supporting sources, product declarations, and appropriate-use boundaries next to the relevant claims..

**Unknowns:** No judgment is made about medical validity, effectiveness, document authenticity, certification authenticity, or individual suitability.; A source may exist outside the captured page or selected scope.

**CONFIRMED EXTERNAL FACTS:** The captured Glucare Plus page states that it is suitable for people with diabetes, uses “Công thức y khoa ADDP”, and safely supports blood-glucose control; the captured link set exposes an ingredient anchor but no visible link labelled as a study, declaration, certification, or supporting document.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-CONTENT-001 — Product page does not present a direct FAQ block in the captured content



**Classification:** medium severity; content_review; confidence 0.87; source checklist.

**Affected page:** https://addp.vn/sua-hat-glucare-plus (product_detail).

**FACT — observation:** The captured Glucare Plus product page includes product claims, ingredient sections, usage steps and offers, but its visible heading and text extract contains no FAQ or question-and-answer block.

**Evidence:** EVD-D67F1CCFC3746E81-1 (evidence/journeys/research-continuation-1.json), EVD-D1249648026B4D96 (evidence/seo/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-005

**ANALYSIS — impact:** user: A buyer researching for a parent may not find direct answers to appropriate use, interactions or limits at the product decision point.; business: Unanswered purchase questions can prevent informed decisions.; seo: A structured question-and-answer section can improve direct answer extraction.; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Add evidence-grounded FAQ answers with explicit boundaries and reviewed sources beside the product information..

**Unknowns:** Assessment is limited to captured page text and headings; content may change after this observation.

**CONFIRMED EXTERNAL FACTS:** The captured Glucare Plus product page includes product claims, ingredient sections, usage steps and offers, but its visible heading and text extract contains no FAQ or question-and-answer block.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-HEALTH-002 — Viên An Đường product copy makes an unqualified no-side-effects claim



**Classification:** high severity; content_review; confidence 0.91; source checklist.

**Affected page:** https://addp.vn/vien-an-duong-addp.html (product_detail).

**FACT — observation:** The captured product page says “đảm bảo hiệu quả không tác dụng phụ” and separately lists people with diabetes among potential users. The captured page does not identify supporting material beside this claim; this observation does not establish safety, efficacy or suitability.

**Evidence:** EVD-8B09867D19F1496E (evidence/html/db93fc388a5ba278.render-stabilized-v1.raw.html), EVD-927DDAF696B5D339 (evidence/seo/db93fc388a5ba278.render-stabilized-v1.raw.json)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-011

**ANALYSIS — impact:** user: A shopper researching a health product may have difficulty interpreting the product offer and its supporting information.; business: Unclear product information may reduce confidence at the decision point.; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Have qualified reviewers substantiate, qualify or remove absolute efficacy and side-effect claims, and show appropriate-use boundaries with accessible supporting sources..

**Unknowns:** The capture does not establish backend price configuration, product eligibility or clinical effectiveness.

**CONFIRMED EXTERNAL FACTS:** The captured product page says “đảm bảo hiệu quả không tác dụng phụ” and separately lists people with diabetes among potential users. The captured page does not identify supporting material beside this claim; this observation does not establish safety, efficacy or suitability.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

## 15. Health/E-E-A-T/trust

### FND-PER-RESEARCH-001 — Health and safety claims appear without an identifiable supporting-document route in the captured product state



**Classification:** high severity; content_review; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/sua-hat-glucare-plus (product_detail).

**FACT — observation:** The captured Glucare Plus page states that it is suitable for people with diabetes, uses “Công thức y khoa ADDP”, and safely supports blood-glucose control; the captured link set exposes an ingredient anchor but no visible link labelled as a study, declaration, certification, or supporting document.

**Evidence:** EVD-D67F1CCFC3746E81-1 (evidence/journeys/research-continuation-1.json)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-002

**ANALYSIS — impact:** user: A skeptical adult child cannot trace these high-stakes claims to supporting material from the captured product state.; business: Unverifiable claim presentation can reduce trust for a health-related purchase.; seo: Clear source and evidence links can improve entity and claim context.; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Place clearly labelled public supporting sources, product declarations, and appropriate-use boundaries next to the relevant claims..

**Unknowns:** No judgment is made about medical validity, effectiveness, document authenticity, certification authenticity, or individual suitability.; A source may exist outside the captured page or selected scope.

**CONFIRMED EXTERNAL FACTS:** The captured Glucare Plus page states that it is suitable for people with diabetes, uses “Công thức y khoa ADDP”, and safely supports blood-glucose control; the captured link set exposes an ingredient anchor but no visible link labelled as a study, declaration, certification, or supporting document.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-HEALTH-002 — Viên An Đường product copy makes an unqualified no-side-effects claim



**Classification:** high severity; content_review; confidence 0.91; source checklist.

**Affected page:** https://addp.vn/vien-an-duong-addp.html (product_detail).

**FACT — observation:** The captured product page says “đảm bảo hiệu quả không tác dụng phụ” and separately lists people with diabetes among potential users. The captured page does not identify supporting material beside this claim; this observation does not establish safety, efficacy or suitability.

**Evidence:** EVD-8B09867D19F1496E (evidence/html/db93fc388a5ba278.render-stabilized-v1.raw.html), EVD-927DDAF696B5D339 (evidence/seo/db93fc388a5ba278.render-stabilized-v1.raw.json)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-011

**ANALYSIS — impact:** user: A shopper researching a health product may have difficulty interpreting the product offer and its supporting information.; business: Unclear product information may reduce confidence at the decision point.; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Have qualified reviewers substantiate, qualify or remove absolute efficacy and side-effect claims, and show appropriate-use boundaries with accessible supporting sources..

**Unknowns:** The capture does not establish backend price configuration, product eligibility or clinical effectiveness.

**CONFIRMED EXTERNAL FACTS:** The captured product page says “đảm bảo hiệu quả không tác dụng phụ” and separately lists people with diabetes among potential users. The captured page does not identify supporting material beside this claim; this observation does not establish safety, efficacy or suitability.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

## 16. Technical SEO

### FND-SPEC-SEO-001 — Product page retains a generic meta description



**Classification:** medium severity; deterministic; confidence 0.99; source checklist.

**Affected page:** https://addp.vn/sua-hat-glucare-plus (product_detail).

**FACT — observation:** The rendered SEO artifact records the Glucare Plus page meta description as “Default Description” on both desktop and mobile.

**Evidence:** EVD-D1249648026B4D96 (evidence/seo/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json), EVD-1BA12AFB05B5BD13 (evidence/seo/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json)

**Requirement links:** REQ-015 — source Trang tính1!C23; original checklist text: - Cài đặt chứng chỉ SSL (HTTPS), tự động tạo Sitemap.xml và file Robots.txt chuẩn SEO, hỗ trợ tùy biến Title/Meta Description linh hoạt.; strategic objective source text: - SEO truyền thống: Xây dựng nền tảng kỹ thuật vững chắc để Google dễ dàng lập chỉ mục (index) và đẩy từ khóa lên top tìm kiếm tự nhiên.

**Planned task(s):** TASK-006

**ANALYSIS — impact:** user: Search previews may not describe the specific product page.; business: A generic snippet may reduce relevance for product searches.; seo: The product URL has a non-specific description.; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Write a unique accurate description for the product page and verify it in the rendered document..

**Unknowns:** Search-result appearance and ranking impact were not measured.

**CONFIRMED EXTERNAL FACTS:** The rendered SEO artifact records the Glucare Plus page meta description as “Default Description” on both desktop and mobile.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-SEO-002 — Both discovered sitemap URLs returned HTTP 404 during the audit



**Classification:** high severity; deterministic; confidence 0.99; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** Discovery recorded HTTP 404 for both https://addp.vn/pub/sitemap.xml and https://addp.vn/sitemap.xml.

**Evidence:** EVD-B093A16D09E3A37E (evidence/discovery/sitemap-18ff84938bf215b3.xml), EVD-A57DC932D580B784 (evidence/discovery/sitemap-52618716ffbf735c.xml)

**Requirement links:** REQ-015 — source Trang tính1!C23; original checklist text: - Cài đặt chứng chỉ SSL (HTTPS), tự động tạo Sitemap.xml và file Robots.txt chuẩn SEO, hỗ trợ tùy biến Title/Meta Description linh hoạt.; strategic objective source text: - SEO truyền thống: Xây dựng nền tảng kỹ thuật vững chắc để Google dễ dàng lập chỉ mục (index) và đẩy từ khóa lên top tìm kiếm tự nhiên.

**Planned task(s):** TASK-007

**ANALYSIS — impact:** user: Unknown / not recorded; business: A crawler may not discover an XML sitemap through these advertised URLs.; seo: The robots file advertises a sitemap URL that returned 404; the alternate root sitemap URL also returned 404.; technical: Both observed sitemap endpoints returned HTTP 404..

**RECOMMENDATION — direction:** Publish a valid sitemap at the advertised URL and verify its response and submitted URL set..

**Unknowns:** The audit did not access Search Console or verify other sitemap locations.

**CONFIRMED EXTERNAL FACTS:** Discovery recorded HTTP 404 for both https://addp.vn/pub/sitemap.xml and https://addp.vn/sitemap.xml.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

## 17. GEO/AEO

### FND-SPEC-GEO-001 — Homepage and product pages expose no JSON-LD in the captured desktop/mobile pages



**Classification:** high severity; deterministic; confidence 0.98; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** The indexed JSON-LD evidence artifacts contain empty arrays for the homepage and captured Glucare Plus desktop and mobile pages; no Organization, Product or FAQPage JSON-LD item was recorded in these captures.

**Evidence:** EVD-32CB6452441EDF9E (evidence/schema/e4e0c9a45799894e.desktop.render-stabilized-v1.json), EVD-C16C9A26189A6C8E (evidence/schema/e4e0c9a45799894e.mobile.render-stabilized-v1.json), EVD-80257931D1966034 (evidence/schema/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json), EVD-5DEB9224EB2D897C (evidence/schema/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json)

**Requirement links:** REQ-010 — source Trang tính1!C17; original checklist text: - Lập trình viên bắt buộc nhúng mã JSON-LD chuẩn cho: Organization (thực thể doanh nghiệp tại Hà Nội), Product (cho 3 sản phẩm), và FAQPage.; strategic objective source text: - AEO & GEO: Giúp máy tính và bot AI đọc hiểu chính xác 100% về thông tin doanh nghiệp, giá sản phẩm, và các câu hỏi thường gặp mà không cần phỏng đoán.

**Planned task(s):** TASK-008

**ANALYSIS — impact:** user: Unknown / not recorded; business: Machine-readable entity and product information is not present in these captured pages.; seo: Requested structured entity, product and FAQ data is absent from the observed pages.; technical: The JSON-LD collector returned empty arrays for sampled pages..

**RECOMMENDATION — direction:** Add validated Organization markup and accurate Product and FAQPage markup where the corresponding visible content exists..

**Unknowns:** Finding is limited to sampled pages and JSON-LD; other structured-data formats were not assessed here.

**CONFIRMED EXTERNAL FACTS:** The indexed JSON-LD evidence artifacts contain empty arrays for the homepage and captured Glucare Plus desktop and mobile pages; no Organization, Product or FAQPage JSON-LD item was recorded in these captures.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

## 18. Structured data

### FND-SPEC-GEO-001 — Homepage and product pages expose no JSON-LD in the captured desktop/mobile pages



**Classification:** high severity; deterministic; confidence 0.98; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** The indexed JSON-LD evidence artifacts contain empty arrays for the homepage and captured Glucare Plus desktop and mobile pages; no Organization, Product or FAQPage JSON-LD item was recorded in these captures.

**Evidence:** EVD-32CB6452441EDF9E (evidence/schema/e4e0c9a45799894e.desktop.render-stabilized-v1.json), EVD-C16C9A26189A6C8E (evidence/schema/e4e0c9a45799894e.mobile.render-stabilized-v1.json), EVD-80257931D1966034 (evidence/schema/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json), EVD-5DEB9224EB2D897C (evidence/schema/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json)

**Requirement links:** REQ-010 — source Trang tính1!C17; original checklist text: - Lập trình viên bắt buộc nhúng mã JSON-LD chuẩn cho: Organization (thực thể doanh nghiệp tại Hà Nội), Product (cho 3 sản phẩm), và FAQPage.; strategic objective source text: - AEO & GEO: Giúp máy tính và bot AI đọc hiểu chính xác 100% về thông tin doanh nghiệp, giá sản phẩm, và các câu hỏi thường gặp mà không cần phỏng đoán.

**Planned task(s):** TASK-008

**ANALYSIS — impact:** user: Unknown / not recorded; business: Machine-readable entity and product information is not present in these captured pages.; seo: Requested structured entity, product and FAQ data is absent from the observed pages.; technical: The JSON-LD collector returned empty arrays for sampled pages..

**RECOMMENDATION — direction:** Add validated Organization markup and accurate Product and FAQPage markup where the corresponding visible content exists..

**Unknowns:** Finding is limited to sampled pages and JSON-LD; other structured-data formats were not assessed here.

**CONFIRMED EXTERNAL FACTS:** The indexed JSON-LD evidence artifacts contain empty arrays for the homepage and captured Glucare Plus desktop and mobile pages; no Organization, Product or FAQPage JSON-LD item was recorded in these captures.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

## 19. Performance

### FND-SPEC-PERFORMANCE-001 — Mobile lab captures show LCP above the checklist threshold on sampled pages



**Classification:** high severity; measured; confidence 0.98; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** The mobile LAB artifact records LCP 20,456 ms on the homepage, 19,952 ms on /benh-ly, and 18,956 ms on the diabetes-health article listing; the checklist target is under 2.5 seconds.

**Evidence:** EVD-3D15DCDB359887BF (evidence/lighthouse/e4e0c9a45799894e.mobile.render-stabilized-v1.lab.json), EVD-D2E949A54A61C783 (evidence/lighthouse/65e3d78cc6db4646.mobile.render-stabilized-v1.lab.json), EVD-203B6173B6A72522 (evidence/lighthouse/b929b6c94da55a49.mobile.render-stabilized-v1.lab.json)

**Requirement links:** REQ-013 — source Trang tính1!C21; original checklist text: - Điểm PageSpeed Insights trên Mobile đạt tối thiểu 85+, thời gian tải thực tế dưới 2.5 giây. Giao diện mobile hiển thị hoàn hảo, không bị tràn viền, vỡ ảnh.; strategic objective source text: - Bán hàng & SEO: Đảm bảo khách hàng dùng điện thoại không bị ức chế do đợi trang tải lâu, giữ vững tỷ lệ chuyển đổi đơn hàng cao.

**Planned task(s):** TASK-009

**ANALYSIS — impact:** user: Slow observed rendering can delay access to product and health information.; business: Long wait times may interrupt discovery and evaluation.; seo: The sampled LAB values exceed the stated performance target.; technical: The measured LCP values are 7.6 to 8.2 times the 2,500 ms target..

**RECOMMENDATION — direction:** Profile and reduce the observed largest-contentful paint path, then repeat comparable mobile lab runs..

**Unknowns:** These are single audit-browser LAB observations, not field Core Web Vitals or PageSpeed Insights scores; all page collections remain partial.

**CONFIRMED EXTERNAL FACTS:** The mobile LAB artifact records LCP 20,456 ms on the homepage, 19,952 ms on /benh-ly, and 18,956 ms on the diabetes-health article listing; the checklist target is under 2.5 seconds.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

## 20. Analytics

No accepted finding is mapped to this section. This does not establish compliance; coverage or expert review may still be incomplete.

## 21. Cart/Checkout

### FND-PER-HIGH-001 — Product listings expose both a sample price and zero-price items



**Classification:** high severity; content_review; confidence 0.99; source checklist.

**Affected page:** https://addp.vn/sua-hat-glucare-plus (product_detail).

**FACT — observation:** The captured Glucare Plus product page text presents a 1-package listing at 9,000 VND and other product listings at 0 VND in the same product section.

**Evidence:** EVD-D67F1CCFC3746E81-1 (evidence/journeys/research-continuation-1.json), EVD-238D776F29EAE37D (evidence/accessibility/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json), EVD-DF63C483FC434445 (evidence/dom/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json), EVD-733F5C04719022AE (evidence/dom/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json), EVD-EA78205F3017C505 (evidence/screenshots/ebd40bf592e2f9a7.desktop.render-stabilized-v1.stabilized.full.png), EVD-0581A36B72F4A783 (evidence/screenshots/ebd40bf592e2f9a7.mobile.render-stabilized-v1.stabilized.full.png)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-001

**ANALYSIS — impact:** user: A self-purchaser or adult child cannot tell from the captured state whether zero is a real price, unavailable price, or placeholder.; business: Ambiguous price presentation can interrupt purchase confidence.; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Replace zero-price merchandising states with an explicit availability or contact-for-price label and keep package/price meaning consistent..

**Unknowns:** The capture does not establish inventory, configuration, or backend pricing state.

**CONFIRMED EXTERNAL FACTS:** The captured Glucare Plus product page text presents a 1-package listing at 9,000 VND and other product listings at 0 VND in the same product section.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-CONVERSION-006 — Viên An Đường combo URL promotion and displayed pack count disagree



**Classification:** high severity; content_review; confidence 0.91; source checklist.

**Affected page:** https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html (product_detail).

**FACT — observation:** The URL slug says “combo-mua-2-tang-2” while the captured page H1 labels the offer “[Combo 3 Hộp]”; on the separate “mua-3-tang-4” URL, the H1 says “[Combo 5 Hộp]”. The captured copy does not explain that the route wording and displayed pack count refer to different quantities.

**Evidence:** EVD-CB952D69E3E21F68 (evidence/html/dace973208f2be9b.render-stabilized-v1.raw.html), EVD-E744CA9DD952F84A (evidence/html/2dcff7b0a97be809.render-stabilized-v1.raw.html)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-010

**ANALYSIS — impact:** user: A shopper researching a health product may have difficulty interpreting the product offer and its supporting information.; business: Unclear product information may reduce confidence at the decision point.; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Align campaign URL/title/quantity labels and explicitly show total units and gift quantity before any order action..

**Unknowns:** The capture does not establish backend price configuration, product eligibility or clinical effectiveness.

**CONFIRMED EXTERNAL FACTS:** The URL slug says “combo-mua-2-tang-2” while the captured page H1 labels the offer “[Combo 3 Hộp]”; on the separate “mua-3-tang-4” URL, the H1 says “[Combo 5 Hộp]”. The captured copy does not explain that the route wording and displayed pack count refer to different quantities.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

## 22. KiotViet externally observable behavior

No accepted finding is mapped to this section. This does not establish compliance; coverage or expert review may still be incomplete.

## 23. External technical diagnostics

### FND-PER-HIGH-001 — Product listings expose both a sample price and zero-price items



**Classification:** high severity; content_review; confidence 0.99; source checklist.

**Affected page:** https://addp.vn/sua-hat-glucare-plus (product_detail).

**FACT — observation:** The captured Glucare Plus product page text presents a 1-package listing at 9,000 VND and other product listings at 0 VND in the same product section.

**Evidence:** EVD-D67F1CCFC3746E81-1 (evidence/journeys/research-continuation-1.json), EVD-238D776F29EAE37D (evidence/accessibility/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json), EVD-DF63C483FC434445 (evidence/dom/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json), EVD-733F5C04719022AE (evidence/dom/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json), EVD-EA78205F3017C505 (evidence/screenshots/ebd40bf592e2f9a7.desktop.render-stabilized-v1.stabilized.full.png), EVD-0581A36B72F4A783 (evidence/screenshots/ebd40bf592e2f9a7.mobile.render-stabilized-v1.stabilized.full.png)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-001

**ANALYSIS — impact:** user: A self-purchaser or adult child cannot tell from the captured state whether zero is a real price, unavailable price, or placeholder.; business: Ambiguous price presentation can interrupt purchase confidence.; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Replace zero-price merchandising states with an explicit availability or contact-for-price label and keep package/price meaning consistent..

**Unknowns:** The capture does not establish inventory, configuration, or backend pricing state.

**CONFIRMED EXTERNAL FACTS:** The captured Glucare Plus product page text presents a 1-package listing at 9,000 VND and other product listings at 0 VND in the same product section.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-PER-RESEARCH-001 — Health and safety claims appear without an identifiable supporting-document route in the captured product state



**Classification:** high severity; content_review; confidence 0.9; source checklist.

**Affected page:** https://addp.vn/sua-hat-glucare-plus (product_detail).

**FACT — observation:** The captured Glucare Plus page states that it is suitable for people with diabetes, uses “Công thức y khoa ADDP”, and safely supports blood-glucose control; the captured link set exposes an ingredient anchor but no visible link labelled as a study, declaration, certification, or supporting document.

**Evidence:** EVD-D67F1CCFC3746E81-1 (evidence/journeys/research-continuation-1.json)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-002

**ANALYSIS — impact:** user: A skeptical adult child cannot trace these high-stakes claims to supporting material from the captured product state.; business: Unverifiable claim presentation can reduce trust for a health-related purchase.; seo: Clear source and evidence links can improve entity and claim context.; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Place clearly labelled public supporting sources, product declarations, and appropriate-use boundaries next to the relevant claims..

**Unknowns:** No judgment is made about medical validity, effectiveness, document authenticity, certification authenticity, or individual suitability.; A source may exist outside the captured page or selected scope.

**CONFIRMED EXTERNAL FACTS:** The captured Glucare Plus page states that it is suitable for people with diabetes, uses “Công thức y khoa ADDP”, and safely supports blood-glucose control; the captured link set exposes an ingredient anchor but no visible link labelled as a study, declaration, certification, or supporting document.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-PER-MOBILE-002 — Product-price text fails automated contrast checks on mobile



**Classification:** high severity; measured; confidence 0.99; source checklist.

**Affected page:** https://addp.vn/sua-hat-glucare-plus (product_detail).

**FACT — observation:** The mobile accessibility artifact reports serious color-contrast failures for product-price text, including gold text at 2.77:1 on the light background and gray text at 2.45:1, below the stated 3:1 or 4.5:1 thresholds.

**Evidence:** EVD-238D776F29EAE37D (evidence/accessibility/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json)

**Requirement links:** REQ-002 — source Trang tính1!C7; original checklist text: - Dùng font không chân hiện đại (Inter, Roboto). Cỡ chữ tiêu đề tối thiểu 28-32px trên mobile, văn bản thân bài tối thiểu 16px. Khoảng cách dòng thoáng (1.5 - 1.6), giúp khách hàng trung cao tuổi đọc không bị mỏi mắt.; strategic objective source text: - Trải nghiệm & Bán hàng: Đảm bảo đối tượng khách hàng lớn tuổi hoặc con cháu mua hàng dễ đọc, không bị rào cản thị giác khi tìm hiểu thông tin sức khỏe.; REQ-013 — source Trang tính1!C21; original checklist text: - Điểm PageSpeed Insights trên Mobile đạt tối thiểu 85+, thời gian tải thực tế dưới 2.5 giây. Giao diện mobile hiển thị hoàn hảo, không bị tràn viền, vỡ ảnh.; strategic objective source text: - Bán hàng & SEO: Đảm bảo khách hàng dùng điện thoại không bị ức chế do đợi trang tải lâu, giữ vững tỷ lệ chuyển đổi đơn hàng cao.

**Planned task(s):** TASK-003

**ANALYSIS — impact:** user: Low-contrast price text can be difficult to read, especially for visitors with reduced contrast sensitivity.; business: Price legibility affects product comparison and confidence.; seo: Unknown / not recorded; technical: Rendered foreground/background combinations fail automated contrast rules..

**RECOMMENDATION — direction:** Adjust price colors or backgrounds so rendered text meets the applicable WCAG contrast ratio in every product-card state..

**Unknowns:** Automated contrast results should be confirmed against final design tokens and states.

**CONFIRMED EXTERNAL FACTS:** The mobile accessibility artifact reports serious color-contrast failures for product-price text, including gold text at 2.77:1 on the light background and gray text at 2.45:1, below the stated 3:1 or 4.5:1 thresholds.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-UX-001 — The homepage hero does not show a principal product



**Classification:** high severity; content_review; confidence 0.98; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** The stabilized desktop and mobile first-view captures show the ADDP logo, the message "Chăm sóc từ giá trị thiện lành", the headline "Sức Khỏe Bền Vững Khởi Nguồn Từ Tâm", an older couple, supporting copy, and the actions "Khám phá ngay" and "Tư vấn miễn phí". No product package or named principal product is visible in either captured first viewport. REQ-004 calls for the first viewport to combine a core message, a principal-product image, and a large clear CTA; the message and actions are present, while the product-image element is absent from the captured state.

**Evidence:** EVD-8C749E8D6F00DF83 (evidence/screenshots/e4e0c9a45799894e.desktop.render-stabilized-v1.stabilized.viewport.png), EVD-4256DF417284230A (evidence/screenshots/e4e0c9a45799894e.mobile.render-stabilized-v1.stabilized.viewport.png), EVD-702877ACD4E72E55 (evidence/screenshots/e4e0c9a45799894e.desktop.render-stabilized-v1.stabilized.full.png), EVD-92E0841363C85BA1 (evidence/screenshots/e4e0c9a45799894e.mobile.render-stabilized-v1.stabilized.full.png)

**Requirement links:** REQ-004 — source Trang tính1!C9; original checklist text: - Ngay khi mở web (chưa cuộn chuột), màn hình đầu tiên phải hội tụ đủ: Slogan/Thông điệp cốt lõi + Hình ảnh sản phẩm chủ lực + Nút kêu gọi hành động (CTA) to rõ ràng.; strategic objective source text: - Bán hàng: Định hướng người dùng ngay lập tức tập trung vào sản phẩm trọng tâm, hạn chế tối đa tỷ lệ thoát trang sớm (Bounce Rate).

**Planned task(s):** TASK-004

**ANALYSIS — impact:** user: A first-time visitor can understand the care-oriented brand message, but must continue down the page before seeing what ADDP sells. This adds orientation work for an older or middle-aged self-purchaser and for an adult child quickly assessing a product for a parent.; business: The first viewport does not immediately connect the brand promise to a specific purchasable product, weakening product discovery at the earliest decision point.; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Keep the current human, reassuring message, but add a clearly identifiable principal-product packshot or product grouping within the first desktop and mobile viewport and preserve an obvious route to that product..

**Unknowns:** Whether another timed or carousel state shows a product before user interaction.; Whether the hero is intended to prioritize corporate positioning over immediate product orientation.

**CONFIRMED EXTERNAL FACTS:** The stabilized desktop and mobile first-view captures show the ADDP logo, the message "Chăm sóc từ giá trị thiện lành", the headline "Sức Khỏe Bền Vững Khởi Nguồn Từ Tâm", an older couple, supporting copy, and the actions "Khám phá ngay" and "Tư vấn miễn phí". No product package or named principal product is visible in either captured first viewport. REQ-004 calls for the first viewport to combine a core message, a principal-product image, and a large clear CTA; the message and actions are present, while the product-image element is absent from the captured state.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-CONTENT-001 — Product page does not present a direct FAQ block in the captured content



**Classification:** medium severity; content_review; confidence 0.87; source checklist.

**Affected page:** https://addp.vn/sua-hat-glucare-plus (product_detail).

**FACT — observation:** The captured Glucare Plus product page includes product claims, ingredient sections, usage steps and offers, but its visible heading and text extract contains no FAQ or question-and-answer block.

**Evidence:** EVD-D67F1CCFC3746E81-1 (evidence/journeys/research-continuation-1.json), EVD-D1249648026B4D96 (evidence/seo/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-005

**ANALYSIS — impact:** user: A buyer researching for a parent may not find direct answers to appropriate use, interactions or limits at the product decision point.; business: Unanswered purchase questions can prevent informed decisions.; seo: A structured question-and-answer section can improve direct answer extraction.; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Add evidence-grounded FAQ answers with explicit boundaries and reviewed sources beside the product information..

**Unknowns:** Assessment is limited to captured page text and headings; content may change after this observation.

**CONFIRMED EXTERNAL FACTS:** The captured Glucare Plus product page includes product claims, ingredient sections, usage steps and offers, but its visible heading and text extract contains no FAQ or question-and-answer block.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-SEO-001 — Product page retains a generic meta description



**Classification:** medium severity; deterministic; confidence 0.99; source checklist.

**Affected page:** https://addp.vn/sua-hat-glucare-plus (product_detail).

**FACT — observation:** The rendered SEO artifact records the Glucare Plus page meta description as “Default Description” on both desktop and mobile.

**Evidence:** EVD-D1249648026B4D96 (evidence/seo/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json), EVD-1BA12AFB05B5BD13 (evidence/seo/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json)

**Requirement links:** REQ-015 — source Trang tính1!C23; original checklist text: - Cài đặt chứng chỉ SSL (HTTPS), tự động tạo Sitemap.xml và file Robots.txt chuẩn SEO, hỗ trợ tùy biến Title/Meta Description linh hoạt.; strategic objective source text: - SEO truyền thống: Xây dựng nền tảng kỹ thuật vững chắc để Google dễ dàng lập chỉ mục (index) và đẩy từ khóa lên top tìm kiếm tự nhiên.

**Planned task(s):** TASK-006

**ANALYSIS — impact:** user: Search previews may not describe the specific product page.; business: A generic snippet may reduce relevance for product searches.; seo: The product URL has a non-specific description.; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Write a unique accurate description for the product page and verify it in the rendered document..

**Unknowns:** Search-result appearance and ranking impact were not measured.

**CONFIRMED EXTERNAL FACTS:** The rendered SEO artifact records the Glucare Plus page meta description as “Default Description” on both desktop and mobile.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-SEO-002 — Both discovered sitemap URLs returned HTTP 404 during the audit



**Classification:** high severity; deterministic; confidence 0.99; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** Discovery recorded HTTP 404 for both https://addp.vn/pub/sitemap.xml and https://addp.vn/sitemap.xml.

**Evidence:** EVD-B093A16D09E3A37E (evidence/discovery/sitemap-18ff84938bf215b3.xml), EVD-A57DC932D580B784 (evidence/discovery/sitemap-52618716ffbf735c.xml)

**Requirement links:** REQ-015 — source Trang tính1!C23; original checklist text: - Cài đặt chứng chỉ SSL (HTTPS), tự động tạo Sitemap.xml và file Robots.txt chuẩn SEO, hỗ trợ tùy biến Title/Meta Description linh hoạt.; strategic objective source text: - SEO truyền thống: Xây dựng nền tảng kỹ thuật vững chắc để Google dễ dàng lập chỉ mục (index) và đẩy từ khóa lên top tìm kiếm tự nhiên.

**Planned task(s):** TASK-007

**ANALYSIS — impact:** user: Unknown / not recorded; business: A crawler may not discover an XML sitemap through these advertised URLs.; seo: The robots file advertises a sitemap URL that returned 404; the alternate root sitemap URL also returned 404.; technical: Both observed sitemap endpoints returned HTTP 404..

**RECOMMENDATION — direction:** Publish a valid sitemap at the advertised URL and verify its response and submitted URL set..

**Unknowns:** The audit did not access Search Console or verify other sitemap locations.

**CONFIRMED EXTERNAL FACTS:** Discovery recorded HTTP 404 for both https://addp.vn/pub/sitemap.xml and https://addp.vn/sitemap.xml.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-GEO-001 — Homepage and product pages expose no JSON-LD in the captured desktop/mobile pages



**Classification:** high severity; deterministic; confidence 0.98; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** The indexed JSON-LD evidence artifacts contain empty arrays for the homepage and captured Glucare Plus desktop and mobile pages; no Organization, Product or FAQPage JSON-LD item was recorded in these captures.

**Evidence:** EVD-32CB6452441EDF9E (evidence/schema/e4e0c9a45799894e.desktop.render-stabilized-v1.json), EVD-C16C9A26189A6C8E (evidence/schema/e4e0c9a45799894e.mobile.render-stabilized-v1.json), EVD-80257931D1966034 (evidence/schema/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json), EVD-5DEB9224EB2D897C (evidence/schema/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json)

**Requirement links:** REQ-010 — source Trang tính1!C17; original checklist text: - Lập trình viên bắt buộc nhúng mã JSON-LD chuẩn cho: Organization (thực thể doanh nghiệp tại Hà Nội), Product (cho 3 sản phẩm), và FAQPage.; strategic objective source text: - AEO & GEO: Giúp máy tính và bot AI đọc hiểu chính xác 100% về thông tin doanh nghiệp, giá sản phẩm, và các câu hỏi thường gặp mà không cần phỏng đoán.

**Planned task(s):** TASK-008

**ANALYSIS — impact:** user: Unknown / not recorded; business: Machine-readable entity and product information is not present in these captured pages.; seo: Requested structured entity, product and FAQ data is absent from the observed pages.; technical: The JSON-LD collector returned empty arrays for sampled pages..

**RECOMMENDATION — direction:** Add validated Organization markup and accurate Product and FAQPage markup where the corresponding visible content exists..

**Unknowns:** Finding is limited to sampled pages and JSON-LD; other structured-data formats were not assessed here.

**CONFIRMED EXTERNAL FACTS:** The indexed JSON-LD evidence artifacts contain empty arrays for the homepage and captured Glucare Plus desktop and mobile pages; no Organization, Product or FAQPage JSON-LD item was recorded in these captures.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-PERFORMANCE-001 — Mobile lab captures show LCP above the checklist threshold on sampled pages



**Classification:** high severity; measured; confidence 0.98; source checklist.

**Affected page:** https://addp.vn/ (homepage).

**FACT — observation:** The mobile LAB artifact records LCP 20,456 ms on the homepage, 19,952 ms on /benh-ly, and 18,956 ms on the diabetes-health article listing; the checklist target is under 2.5 seconds.

**Evidence:** EVD-3D15DCDB359887BF (evidence/lighthouse/e4e0c9a45799894e.mobile.render-stabilized-v1.lab.json), EVD-D2E949A54A61C783 (evidence/lighthouse/65e3d78cc6db4646.mobile.render-stabilized-v1.lab.json), EVD-203B6173B6A72522 (evidence/lighthouse/b929b6c94da55a49.mobile.render-stabilized-v1.lab.json)

**Requirement links:** REQ-013 — source Trang tính1!C21; original checklist text: - Điểm PageSpeed Insights trên Mobile đạt tối thiểu 85+, thời gian tải thực tế dưới 2.5 giây. Giao diện mobile hiển thị hoàn hảo, không bị tràn viền, vỡ ảnh.; strategic objective source text: - Bán hàng & SEO: Đảm bảo khách hàng dùng điện thoại không bị ức chế do đợi trang tải lâu, giữ vững tỷ lệ chuyển đổi đơn hàng cao.

**Planned task(s):** TASK-009

**ANALYSIS — impact:** user: Slow observed rendering can delay access to product and health information.; business: Long wait times may interrupt discovery and evaluation.; seo: The sampled LAB values exceed the stated performance target.; technical: The measured LCP values are 7.6 to 8.2 times the 2,500 ms target..

**RECOMMENDATION — direction:** Profile and reduce the observed largest-contentful paint path, then repeat comparable mobile lab runs..

**Unknowns:** These are single audit-browser LAB observations, not field Core Web Vitals or PageSpeed Insights scores; all page collections remain partial.

**CONFIRMED EXTERNAL FACTS:** The mobile LAB artifact records LCP 20,456 ms on the homepage, 19,952 ms on /benh-ly, and 18,956 ms on the diabetes-health article listing; the checklist target is under 2.5 seconds.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-CONVERSION-006 — Viên An Đường combo URL promotion and displayed pack count disagree



**Classification:** high severity; content_review; confidence 0.91; source checklist.

**Affected page:** https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html (product_detail).

**FACT — observation:** The URL slug says “combo-mua-2-tang-2” while the captured page H1 labels the offer “[Combo 3 Hộp]”; on the separate “mua-3-tang-4” URL, the H1 says “[Combo 5 Hộp]”. The captured copy does not explain that the route wording and displayed pack count refer to different quantities.

**Evidence:** EVD-CB952D69E3E21F68 (evidence/html/dace973208f2be9b.render-stabilized-v1.raw.html), EVD-E744CA9DD952F84A (evidence/html/2dcff7b0a97be809.render-stabilized-v1.raw.html)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-010

**ANALYSIS — impact:** user: A shopper researching a health product may have difficulty interpreting the product offer and its supporting information.; business: Unclear product information may reduce confidence at the decision point.; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Align campaign URL/title/quantity labels and explicitly show total units and gift quantity before any order action..

**Unknowns:** The capture does not establish backend price configuration, product eligibility or clinical effectiveness.

**CONFIRMED EXTERNAL FACTS:** The URL slug says “combo-mua-2-tang-2” while the captured page H1 labels the offer “[Combo 3 Hộp]”; on the separate “mua-3-tang-4” URL, the H1 says “[Combo 5 Hộp]”. The captured copy does not explain that the route wording and displayed pack count refer to different quantities.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

### FND-SPEC-HEALTH-002 — Viên An Đường product copy makes an unqualified no-side-effects claim



**Classification:** high severity; content_review; confidence 0.91; source checklist.

**Affected page:** https://addp.vn/vien-an-duong-addp.html (product_detail).

**FACT — observation:** The captured product page says “đảm bảo hiệu quả không tác dụng phụ” and separately lists people with diabetes among potential users. The captured page does not identify supporting material beside this claim; this observation does not establish safety, efficacy or suitability.

**Evidence:** EVD-8B09867D19F1496E (evidence/html/db93fc388a5ba278.render-stabilized-v1.raw.html), EVD-927DDAF696B5D339 (evidence/seo/db93fc388a5ba278.render-stabilized-v1.raw.json)

**Requirement links:** REQ-007 — source Trang tính1!C13; original checklist text: - Trang chi tiết sản phẩm (PDP):  + Khu vực 1: Tên sản phẩm, giá bán, nút "Mua ngay" và hình ảnh.  + Khu vực 2: Tóm tắt thông tin sản phẩm: Thành phần, công dụng, đối tượng sử dụng trình bày dưới dạng bảng thông số (Tables) và danh sách gạch đầu dòng rõ ràng. + Khu vực 3: Nội dung chi tiết sản phẩm + đánh giá  + Khu vực 4: Khung FAQ (Hỏi đáp nhanh) về sản phẩm (VD: "Viên An Đường có dùng chung với thuốc Tây được không?") trả lời trực diện ngay 40-60 từ đầu.; strategic objective source text: - AEO & GEO: Cấu trúc bảng số liệu và khối FAQ giúp các công cụ tìm kiếm AI (Google AI Overviews, Perplexity) dễ dàng bóc tách thông tin cấu trúc sản phẩm để trích dẫn trực tiếp.   - Bán hàng: Cung cấp thông tin minh bạch, khoa học giúp khách hàng tự tin ra quyết định mua ngay.

**Planned task(s):** TASK-011

**ANALYSIS — impact:** user: A shopper researching a health product may have difficulty interpreting the product offer and its supporting information.; business: Unclear product information may reduce confidence at the decision point.; seo: Unknown / not recorded; technical: Unknown / not recorded.

**RECOMMENDATION — direction:** Have qualified reviewers substantiate, qualify or remove absolute efficacy and side-effect claims, and show appropriate-use boundaries with accessible supporting sources..

**Unknowns:** The capture does not establish backend price configuration, product eligibility or clinical effectiveness.

**CONFIRMED EXTERNAL FACTS:** The captured product page says “đảm bảo hiệu quả không tác dụng phụ” and separately lists people with diabetes among potential users. The captured page does not identify supporting material beside this claim; this observation does not establish safety, efficacy or suitability.

**PROBABLE CAUSES (unverified):** None recorded.

**DEVELOPER INVESTIGATION:** Inspect the relevant public page content and configuration in an authorized development environment; verify the observed state and acceptance criteria before selecting an implementation.

## 24. Cross-site consistency

No accepted finding is mapped to this section. This does not establish compliance; coverage or expert review may still be incomplete.

## 25. Findings by severity

### critical

None.

### high

- FND-PER-HIGH-001: Product listings expose both a sample price and zero-price items — evidence EVD-D67F1CCFC3746E81-1, EVD-238D776F29EAE37D, EVD-DF63C483FC434445, EVD-733F5C04719022AE, EVD-EA78205F3017C505, EVD-0581A36B72F4A783; requirements REQ-007
- FND-PER-RESEARCH-001: Health and safety claims appear without an identifiable supporting-document route in the captured product state — evidence EVD-D67F1CCFC3746E81-1; requirements REQ-007
- FND-PER-MOBILE-002: Product-price text fails automated contrast checks on mobile — evidence EVD-238D776F29EAE37D; requirements REQ-002, REQ-013
- FND-SPEC-UX-001: The homepage hero does not show a principal product — evidence EVD-8C749E8D6F00DF83, EVD-4256DF417284230A, EVD-702877ACD4E72E55, EVD-92E0841363C85BA1; requirements REQ-004
- FND-SPEC-SEO-002: Both discovered sitemap URLs returned HTTP 404 during the audit — evidence EVD-B093A16D09E3A37E, EVD-A57DC932D580B784; requirements REQ-015
- FND-SPEC-GEO-001: Homepage and product pages expose no JSON-LD in the captured desktop/mobile pages — evidence EVD-32CB6452441EDF9E, EVD-C16C9A26189A6C8E, EVD-80257931D1966034, EVD-5DEB9224EB2D897C; requirements REQ-010
- FND-SPEC-PERFORMANCE-001: Mobile lab captures show LCP above the checklist threshold on sampled pages — evidence EVD-3D15DCDB359887BF, EVD-D2E949A54A61C783, EVD-203B6173B6A72522; requirements REQ-013
- FND-SPEC-CONVERSION-006: Viên An Đường combo URL promotion and displayed pack count disagree — evidence EVD-CB952D69E3E21F68, EVD-E744CA9DD952F84A; requirements REQ-007
- FND-SPEC-HEALTH-002: Viên An Đường product copy makes an unqualified no-side-effects claim — evidence EVD-8B09867D19F1496E, EVD-927DDAF696B5D339; requirements REQ-007

### medium

- FND-SPEC-CONTENT-001: Product page does not present a direct FAQ block in the captured content — evidence EVD-D67F1CCFC3746E81-1, EVD-D1249648026B4D96; requirements REQ-007
- FND-SPEC-SEO-001: Product page retains a generic meta description — evidence EVD-D1249648026B4D96, EVD-1BA12AFB05B5BD13; requirements REQ-015

### low

None.

## 26. Unknown/blocked

- Manual review: FND-PER-MOBILE-001 — The mobile accessibility and DOM artifacts exist, match the Glucare URL, and directly support five serious link-name failures for cart, home, search, mobile-cart, and account links. The core accessibility observation is sound and does not infer a completed cart or account action. Manual review is required because REQ-005 addresses the shape, prominence, contrast, and thumb usability of purchase/consultation CTAs, while REQ-013 addresses mobile performance and visual integrity; neither requirement directly specifies accessible names for global icon links. The finding needs a corrected requirement mapping or an explicit best-practice source before remaining final..
- Manual review: FND-SPEC-UX-002 — The mobile DOM artifact exists and supports a visible 23.4px Glucare H1, below the REQ-002 mobile-heading target. However, the cited 15.5px ingredient H4 examples are marked hidden with zero-size rectangles in the same artifact. Using those hidden nodes as evidence of a user-visible typography barrier is not reliable, and the remaining visible H1 example alone does not fully justify the broad high-severity wording. The finding requires human correction to exclude hidden elements and reassess scope and severity..
- Manual review: FND-SPEC-CONVERSION-001 — The stabilized HTML and DOM artifacts support the narrow fact that both visible hero anchors have href '#'. The finding also acknowledges that runtime event handlers may supplement those anchors, yet its impact states that visitors are not given a destination-specific route and its suggested direction assumes distinct destination URLs are required. No safe interaction outcome or event-handler inspection proves that broader conclusion, and REQ-004 asks for a clear first-view CTA rather than distinct anchor URLs. Manual review is required to retain only the anchor fact or add appropriate evidence and requirement framing..
- Manual review: FND-SPEC-BRAND-002 — The cited stabilized homepage and Glucare captures exist and support the observed navy/white/warm-yellow homepage versus cream/brown/gold Glucare treatment, with shared logo and header. REQ-001 makes that comparison relevant. Manual review is required because the finding generalizes to product landing pages and its suggested direction discusses Dovital without citing Dovital evidence, while its unknowns incorrectly state that Viên An Đường was not present in the collected inventory even though it is present in the current run. The core comparison is supportable, but the current final text is stale and broader than the reviewed evidence..
- Manual review: FND-SPEC-BRAND-004 — The stabilized company-page screenshots and mobile rendered HTML all exist and match the stated URL/type. They directly show the English 'About us' H1, otherwise Vietnamese content, and the large mobile blank region before the breadcrumb and heading. The finding is explicitly sourced to best practice rather than a checklist requirement, does not assert a technical cause, and confines its impact to presentation and access to company identity content..
- Manual review: FND-SPEC-CONTENT-002 — The Viên An Đường raw HTML and SEO artifacts exist and support numbered product-use, audience, dosage, ingredient, expiry, and storage sections with no dedicated PDP FAQ block; the generic global 'Câu hỏi thường gặp' link to '#' is not such a block. The observation and REQ-007 mapping are sound. Manual review is required because this is the same underlying REQ-007 FAQ absence and substantially the same recommendation as accepted finding FND-SPEC-CONTENT-001 on Glucare, but the current deduplication history does not merge the two page instances. They should be consolidated into one cross-page finding or explicitly justified as separate implementation units before final acceptance..
- FND-PER-HIGH-001: The capture does not establish inventory, configuration, or backend pricing state..
- FND-PER-RESEARCH-001: No judgment is made about medical validity, effectiveness, document authenticity, certification authenticity, or individual suitability..
- FND-PER-RESEARCH-001: A source may exist outside the captured page or selected scope..
- FND-PER-MOBILE-002: Automated contrast results should be confirmed against final design tokens and states..
- FND-SPEC-UX-001: Whether another timed or carousel state shows a product before user interaction..
- FND-SPEC-UX-001: Whether the hero is intended to prioritize corporate positioning over immediate product orientation..
- FND-SPEC-CONTENT-001: Assessment is limited to captured page text and headings; content may change after this observation..
- FND-SPEC-SEO-001: Search-result appearance and ranking impact were not measured..
- FND-SPEC-SEO-002: The audit did not access Search Console or verify other sitemap locations..
- FND-SPEC-GEO-001: Finding is limited to sampled pages and JSON-LD; other structured-data formats were not assessed here..
- FND-SPEC-PERFORMANCE-001: These are single audit-browser LAB observations, not field Core Web Vitals or PageSpeed Insights scores; all page collections remain partial..
- FND-SPEC-CONVERSION-006: The capture does not establish backend price configuration, product eligibility or clinical effectiveness..
- FND-SPEC-HEALTH-002: The capture does not establish backend price configuration, product eligibility or clinical effectiveness..

## 27. Evidence appendix

| ID | URL | Collector/type | Artifact | Observed at | Accepted finding links |
| --- | --- | --- | --- | --- | --- |
| EVD-C51AC48D3DB98538 | https://addp.vn/robots.txt | discovery / robots_txt | evidence/discovery/robots.txt | 2026-09-27T18:25:56.131Z | Unknown / not recorded |
| EVD-B093A16D09E3A37E | https://addp.vn/pub/sitemap.xml | discovery / sitemap_http_response | evidence/discovery/sitemap-18ff84938bf215b3.xml | 2026-09-27T18:25:58.897Z | FND-SPEC-SEO-002 |
| EVD-A57DC932D580B784 | https://addp.vn/sitemap.xml | discovery / sitemap_http_response | evidence/discovery/sitemap-52618716ffbf735c.xml | 2026-09-27T18:26:00.603Z | FND-SPEC-SEO-002 |
| EVD-C143D044329DA5C3 | https://addp.vn/ | run-history / provisional_evidence_index | evidence/index.provisional-before-render-stabilization.json | 2026-09-27T23:34:50.031Z | Unknown / not recorded |
| EVD-0065089106CCE91E | https://addp.vn/ | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-1708A23EC388F4B3.png | 2026-09-27T18:29:01.953Z | Unknown / not recorded |
| EVD-72B9FA14B97EA7BA | https://addp.vn/ | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-6FCD208240ED2380.png | 2026-09-27T18:29:03.397Z | Unknown / not recorded |
| EVD-8AA048E21BAAC9D2 | https://addp.vn/ | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-B58A4E5A3A932847.png | 2026-09-27T18:29:25.940Z | Unknown / not recorded |
| EVD-2933C38A424F271A | https://addp.vn/ | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-58BD0B8C0C9ACB2F.png | 2026-09-27T18:29:26.227Z | Unknown / not recorded |
| EVD-E158EDAC498CD45F | https://addp.vn/benh-ly | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-5617F8F3B954C511.png | 2026-09-27T18:29:47.247Z | Unknown / not recorded |
| EVD-A0CDEB1396350ACC | https://addp.vn/benh-ly | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-6C22CE31DB3CAB25.png | 2026-09-27T18:29:48.333Z | Unknown / not recorded |
| EVD-3DAB7EA5031DD86F | https://addp.vn/benh-ly | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-66C01F219B96546D.png | 2026-09-27T18:30:10.615Z | Unknown / not recorded |
| EVD-D635F63A2B7849A7 | https://addp.vn/benh-ly | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-5206B8DA3E93AACD.png | 2026-09-27T18:30:11.086Z | Unknown / not recorded |
| EVD-67E668CA06800362 | https://addp.vn/blog/category/suc-khoe-tieu-duong | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-92C8AED1B3935684.png | 2026-09-27T18:30:33.950Z | Unknown / not recorded |
| EVD-70DF1D8D79A66867 | https://addp.vn/blog/category/suc-khoe-tieu-duong | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-F3679EE34CA584D8.png | 2026-09-27T18:30:34.485Z | Unknown / not recorded |
| EVD-55C2983470310D9B | https://addp.vn/blog/category/suc-khoe-tieu-duong | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-7BFD37CF8B33821D.png | 2026-09-27T18:30:55.034Z | Unknown / not recorded |
| EVD-A0613EDB811BC357 | https://addp.vn/blog/category/suc-khoe-tieu-duong | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-607F34C87A91D619.png | 2026-09-27T18:30:55.416Z | Unknown / not recorded |
| EVD-9844ABF2D2D1E61F | https://addp.vn/chinh-sach-dat-hang | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-3993C5E1B344D7C5.png | 2026-09-27T18:31:16.588Z | Unknown / not recorded |
| EVD-71F35A83545C7DE6 | https://addp.vn/chinh-sach-dat-hang | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-6DEC2C1D9597FC45.png | 2026-09-27T18:31:16.974Z | Unknown / not recorded |
| EVD-91680C73184EE2C3 | https://addp.vn/chinh-sach-dat-hang | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-4FB532EDD3A53AB6.png | 2026-09-27T18:31:36.600Z | Unknown / not recorded |
| EVD-28E2EAB872591D5E | https://addp.vn/chinh-sach-dat-hang | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-709DC7F68D6EA739.png | 2026-09-27T18:31:36.845Z | Unknown / not recorded |
| EVD-5F2F8A78A0CD35CB | https://addp.vn/contact | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-898C6B81F0194A6A.png | 2026-09-27T18:31:59.369Z | Unknown / not recorded |
| EVD-A4FA68DA31815E32 | https://addp.vn/contact | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-B46BD8F81993CF57.png | 2026-09-27T18:31:59.798Z | Unknown / not recorded |
| EVD-8302A1FA6E61CE56 | https://addp.vn/contact | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-2B00A822FD5E2505.png | 2026-09-27T18:32:20.631Z | Unknown / not recorded |
| EVD-3A21E30BFB84623E | https://addp.vn/contact | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-650FB57860FBE0EF.png | 2026-09-27T18:32:20.833Z | Unknown / not recorded |
| EVD-89B16DC33E3F6261 | https://addp.vn/gioi-thieu | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-0DF295AE224EC75C.png | 2026-09-27T18:32:41.641Z | Unknown / not recorded |
| EVD-D02CB659DC41D769 | https://addp.vn/gioi-thieu | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-F269CFE0E037DF37.png | 2026-09-27T18:32:42.192Z | Unknown / not recorded |
| EVD-1286E06CFEDB400C | https://addp.vn/gioi-thieu | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-265AC7C5D9D2D518.png | 2026-09-27T18:33:02.477Z | Unknown / not recorded |
| EVD-285B354EC38A8EEB | https://addp.vn/gioi-thieu | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-16C5A7EE3B53E1BC.png | 2026-09-27T18:33:02.777Z | Unknown / not recorded |
| EVD-9907AA8F48396D57 | https://addp.vn/sua-hat-glucare-plus | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-77F03E39C5EBF217.png | 2026-09-27T18:33:26.279Z | Unknown / not recorded |
| EVD-47CF41C5FA3B1BA1 | https://addp.vn/sua-hat-glucare-plus | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-C91F4F4E34FCA9DC.png | 2026-09-27T18:33:27.474Z | Unknown / not recorded |
| EVD-B9AF25B735F62581 | https://addp.vn/sua-hat-glucare-plus | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-AE1F91D0E3B44220.png | 2026-09-27T18:33:50.290Z | Unknown / not recorded |
| EVD-BDFFE9B5CB17D0FF | https://addp.vn/sua-hat-glucare-plus | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-DEE9E66AC9FC93B8.png | 2026-09-27T18:33:50.835Z | Unknown / not recorded |
| EVD-55B95BD53D7F1EE7 | https://addp.vn/catalogsearch/advanced/ | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-811D34FB2899A889.png | 2026-09-27T18:34:11.743Z | Unknown / not recorded |
| EVD-E4713A0255B61A1B | https://addp.vn/catalogsearch/advanced/ | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-4FE27313205889F2.png | 2026-09-27T18:34:12.296Z | Unknown / not recorded |
| EVD-105B13C140C134E0 | https://addp.vn/catalogsearch/advanced/ | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-6992C130ADCCFFE3.png | 2026-09-27T18:34:32.311Z | Unknown / not recorded |
| EVD-BC17E76F245CC74B | https://addp.vn/catalogsearch/advanced/ | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-903B6FF9231A7AF2.png | 2026-09-27T18:34:32.494Z | Unknown / not recorded |
| EVD-FC35925CE7A2B791 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-BFB3431AC0DE8019.png | 2026-09-27T18:34:53.185Z | Unknown / not recorded |
| EVD-7E1BAE2ABC241FEE | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-CCF119E5D11103FB.png | 2026-09-27T18:34:53.589Z | Unknown / not recorded |
| EVD-0CCE33D47CF7B4B5 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-7C44FBA7FAEE264F.png | 2026-09-27T18:35:15.563Z | Unknown / not recorded |
| EVD-965DA83C7A103BDF | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-0C9F084C891959FF.png | 2026-09-27T18:35:15.823Z | Unknown / not recorded |
| EVD-A3F537F0A6783732 | https://addp.vn/chinh-sach-thanh-toan | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-5C51E3993F9AF3E4.png | 2026-09-27T18:35:37.019Z | Unknown / not recorded |
| EVD-C9F3C357CA3341D0 | https://addp.vn/chinh-sach-thanh-toan | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-FD4A22D61277A447.png | 2026-09-27T18:35:37.592Z | Unknown / not recorded |
| EVD-6517F011EC3322CF | https://addp.vn/chinh-sach-thanh-toan | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-54BA585DE6FE4F87.png | 2026-09-27T18:35:57.970Z | Unknown / not recorded |
| EVD-D644F5E9FCF458EA | https://addp.vn/chinh-sach-thanh-toan | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-EBA3A68268B89E7D.png | 2026-09-27T18:35:58.192Z | Unknown / not recorded |
| EVD-E6837C9C51BB55B1 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-F8A25E6C64C18891.png | 2026-09-27T18:36:18.999Z | Unknown / not recorded |
| EVD-82A6914479B40F60 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-6F24D38806B43932.png | 2026-09-27T18:36:19.501Z | Unknown / not recorded |
| EVD-F3C660D630FC5931 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-302A529288A4B592.png | 2026-09-27T18:36:40.178Z | Unknown / not recorded |
| EVD-62FFBB14B067322F | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-F9D363F1B809BB91.png | 2026-09-27T18:36:40.408Z | Unknown / not recorded |
| EVD-6E61E6F02704D9CA | https://addp.vn/contact/ | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-402297EF3F6223AD.png | 2026-09-27T18:37:02.607Z | Unknown / not recorded |
| EVD-7A98732418E57E67 | https://addp.vn/contact/ | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-56F78DFB5E3C709D.png | 2026-09-27T18:37:03.240Z | Unknown / not recorded |
| EVD-DBA5C6987BB47160 | https://addp.vn/contact/ | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-6D48EEAFED7A25C7.png | 2026-09-27T18:37:24.335Z | Unknown / not recorded |
| EVD-77A40D852E0A183C | https://addp.vn/contact/ | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-6EA50F372EB74667.png | 2026-09-27T18:37:24.562Z | Unknown / not recorded |
| EVD-F115B21BEF463145 | https://addp.vn/gioi-thieu/ | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-4960D30D5D2C47F5.png | 2026-09-27T18:37:46.360Z | Unknown / not recorded |
| EVD-2AA043FBE2333F60 | https://addp.vn/gioi-thieu/ | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-2B6C6F0891AC283C.png | 2026-09-27T18:37:46.839Z | Unknown / not recorded |
| EVD-3A1D6330698B9F3D | https://addp.vn/gioi-thieu/ | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-94AC82D64DCFCE61.png | 2026-09-27T18:38:06.598Z | Unknown / not recorded |
| EVD-C43B5658272945D4 | https://addp.vn/gioi-thieu/ | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-F137B6D0D150F428.png | 2026-09-27T18:38:06.813Z | Unknown / not recorded |
| EVD-B44D303CE0B8A89D | https://addp.vn/sua-dinh-duong.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-96CAF04184C82928.png | 2026-09-27T18:38:27.640Z | Unknown / not recorded |
| EVD-588FE9D71A12F6E5 | https://addp.vn/sua-dinh-duong.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-AB550D003A350239.png | 2026-09-27T18:38:28.105Z | Unknown / not recorded |
| EVD-330D407DC9DCE59E | https://addp.vn/sua-dinh-duong.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-B8105CE0693D404B.png | 2026-09-27T18:38:48.341Z | Unknown / not recorded |
| EVD-F19F74777109FC57 | https://addp.vn/sua-dinh-duong.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-A5D0629E7037D0CC.png | 2026-09-27T18:38:48.589Z | Unknown / not recorded |
| EVD-50FA7E37013317FA | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-4D1333E054746C59.png | 2026-09-27T18:39:09.892Z | Unknown / not recorded |
| EVD-E4ACF0CE151FB38B | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-7C0A4BA1F74E97D7.png | 2026-09-27T18:39:10.288Z | Unknown / not recorded |
| EVD-92C5A0FE836D2841 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-92EA245091BA6A2F.png | 2026-09-27T18:39:30.552Z | Unknown / not recorded |
| EVD-EA5A8B8A65BEDC6B | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-827C7C3D24401E23.png | 2026-09-27T18:39:30.771Z | Unknown / not recorded |
| EVD-B394E6C1ADC38818 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-6D5FF630D1ECE7E2.png | 2026-09-27T18:39:51.713Z | Unknown / not recorded |
| EVD-66C2C4C8B3369593 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-5979D55C7A099535.png | 2026-09-27T18:39:52.180Z | Unknown / not recorded |
| EVD-B1721B9C6605CE27 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-88840DB4B63F907C.png | 2026-09-27T18:40:12.707Z | Unknown / not recorded |
| EVD-6530087D7F3276A1 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-9D76A1B9F1B2A0A5.png | 2026-09-27T18:40:12.996Z | Unknown / not recorded |
| EVD-ECDD66639FD40FC2 | https://addp.vn/sui-dovital | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-1FCE12F74506957D.png | 2026-09-27T18:40:36.566Z | Unknown / not recorded |
| EVD-69B9B908DA16FFDB | https://addp.vn/sui-dovital | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-1A0A4E56431AF83D.png | 2026-09-27T18:40:37.739Z | Unknown / not recorded |
| EVD-018D089E0DF4224D | https://addp.vn/sui-dovital | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-D0AACFB8EDE46A52.png | 2026-09-27T18:41:00.112Z | Unknown / not recorded |
| EVD-85F11725E3A3242C | https://addp.vn/sui-dovital | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-4357685D65A64634.png | 2026-09-27T18:41:00.542Z | Unknown / not recorded |
| EVD-48D460FF026C4C4A | https://addp.vn/thiet-bi-y-te.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-14D040F7EB6D4E42.png | 2026-09-27T18:41:21.284Z | Unknown / not recorded |
| EVD-7966CB95C132273D | https://addp.vn/thiet-bi-y-te.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-35C496C570B7D872.png | 2026-09-27T18:41:21.654Z | Unknown / not recorded |
| EVD-7BA621E3DF574EBE | https://addp.vn/thiet-bi-y-te.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-A36EFCE79D595913.png | 2026-09-27T18:41:41.750Z | Unknown / not recorded |
| EVD-AAED14DFFD324E45 | https://addp.vn/thiet-bi-y-te.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-0AB31027B36B2E54.png | 2026-09-27T18:41:42.040Z | Unknown / not recorded |
| EVD-58063C29A42A0A92 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-8EB320EA1BFE2D83.png | 2026-09-27T18:42:03.193Z | Unknown / not recorded |
| EVD-3465562495D6BA17 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-6495665B031D89C4.png | 2026-09-27T18:42:03.559Z | Unknown / not recorded |
| EVD-80B5C79DBCF68190 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-9071CE2A0F8E6E09.png | 2026-09-27T18:42:24.340Z | Unknown / not recorded |
| EVD-BFD1A06F218DB870 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-6CD452C6D058AA09.png | 2026-09-27T18:42:24.532Z | Unknown / not recorded |
| EVD-D997E1E150E668C7 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-367C29DAD9E43717.png | 2026-09-27T18:42:45.225Z | Unknown / not recorded |
| EVD-5F5F6A866153D401 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-1E817C4243549EC6.png | 2026-09-27T18:42:45.567Z | Unknown / not recorded |
| EVD-2526D0C80B24B32F | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-553CB404DA97BB86.png | 2026-09-27T18:43:05.696Z | Unknown / not recorded |
| EVD-571CF798A9D0B612 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-297EC9C862C96CD4.png | 2026-09-27T18:43:05.880Z | Unknown / not recorded |
| EVD-15184C2E48CD85CF | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-9654766B4C4B42B5.png | 2026-09-27T18:43:26.691Z | Unknown / not recorded |
| EVD-9CF88F8CB916B363 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-C06C6107D2093DC0.png | 2026-09-27T18:43:27.047Z | Unknown / not recorded |
| EVD-A8AE3F0C2A210E10 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-3A0A6EDEB8F93CE1.png | 2026-09-27T18:43:46.816Z | Unknown / not recorded |
| EVD-BC29F9B6FA4CDB9D | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-552CABBB0ADF711F.png | 2026-09-27T18:43:47.020Z | Unknown / not recorded |
| EVD-9CAF72A08F7F7398 | https://addp.vn/thiet-bi-y-te/khau-trang.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-653A39375AF0FF28.png | 2026-09-27T18:44:07.624Z | Unknown / not recorded |
| EVD-AE8EC22EA0FA8451 | https://addp.vn/thiet-bi-y-te/khau-trang.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-C5DF457960A8B848.png | 2026-09-27T18:44:07.950Z | Unknown / not recorded |
| EVD-EC3979725DAB88DE | https://addp.vn/thiet-bi-y-te/khau-trang.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-4DB6CA421969B0B8.png | 2026-09-27T18:44:28.051Z | Unknown / not recorded |
| EVD-E01191D1540C2B9F | https://addp.vn/thiet-bi-y-te/khau-trang.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-C4BDDB7363FD43A0.png | 2026-09-27T18:44:28.226Z | Unknown / not recorded |
| EVD-927D7F6B3C35C77A | https://addp.vn/thuc-pham-chuc-nang.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-167ACFADF19F1D84.png | 2026-09-27T18:44:49.065Z | Unknown / not recorded |
| EVD-661E99CAA7E49661 | https://addp.vn/thuc-pham-chuc-nang.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-845DEB50216808BE.png | 2026-09-27T18:44:49.503Z | Unknown / not recorded |
| EVD-388EF4D70C45294B | https://addp.vn/thuc-pham-chuc-nang.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-9B6E6C3406FD46AD.png | 2026-09-27T18:45:09.770Z | Unknown / not recorded |
| EVD-66DF8477A1198CC2 | https://addp.vn/thuc-pham-chuc-nang.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-3A0A5281481F986F.png | 2026-09-27T18:45:10.041Z | Unknown / not recorded |
| EVD-48361B4187DEB6ED | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-A195C4528D4635E0.png | 2026-09-27T18:45:32.282Z | Unknown / not recorded |
| EVD-3DEE656DC8EF233C | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-21F01DC4A589F7A3.png | 2026-09-27T18:45:32.692Z | Unknown / not recorded |
| EVD-F7E65D5A71D129E0 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-9DD1A8E6016BB030.png | 2026-09-27T18:45:52.635Z | Unknown / not recorded |
| EVD-476966B11861A57F | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-3FA62ACD364E3B73.png | 2026-09-27T18:45:52.842Z | Unknown / not recorded |
| EVD-91A51D6AD660EF2F | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-5AC468B388E027A8.png | 2026-09-27T18:46:13.521Z | Unknown / not recorded |
| EVD-22E363B1AD4AED51 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-2C82A90684B36A22.png | 2026-09-27T18:46:13.904Z | Unknown / not recorded |
| EVD-7DCF90F745D50F53 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | screenshot-provisional / provisional_viewport_screenshot | evidence/provisional/EVD-732264844A4A889A.png | 2026-09-27T18:46:34.193Z | Unknown / not recorded |
| EVD-E0C3C8D2F04F6EE1 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | screenshot-provisional / provisional_full_screenshot | evidence/provisional/EVD-A85002FF6DABBECB.png | 2026-09-27T18:46:34.381Z | Unknown / not recorded |
| EVD-80DB3C701FE061F9 | https://addp.vn/ | raw-http / raw_html | evidence/html/e4e0c9a45799894e.render-stabilized-v1.raw.html | 2026-09-27T23:34:51.595Z | Unknown / not recorded |
| EVD-88DD509F3586ACF5 | https://addp.vn/ | seo / raw_seo | evidence/seo/e4e0c9a45799894e.render-stabilized-v1.raw.json | 2026-09-27T23:34:51.696Z | Unknown / not recorded |
| EVD-43FB9DEFD6EDE605 | https://addp.vn/ | screenshot / initial_viewport_screenshot | evidence/screenshots/e4e0c9a45799894e.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:35:11.892Z | Unknown / not recorded |
| EVD-49A5344C4B6C5FED | https://addp.vn/ | screenshot / initial_full_screenshot | evidence/screenshots/e4e0c9a45799894e.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:35:12.775Z | Unknown / not recorded |
| EVD-E3461AC4808842D8 | https://addp.vn/ | browser / render_stabilization | evidence/render/e4e0c9a45799894e.desktop.render-stabilized-v1.json | 2026-09-27T23:35:15.804Z | Unknown / not recorded |
| EVD-A606C27223349F8A | https://addp.vn/ | browser / rendered_html | evidence/html/e4e0c9a45799894e.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:35:15.819Z | Unknown / not recorded |
| EVD-A81704E1324D31CC | https://addp.vn/ | seo / rendered_seo | evidence/seo/e4e0c9a45799894e.desktop.render-stabilized-v1.json | 2026-09-27T23:35:15.892Z | Unknown / not recorded |
| EVD-32CB6452441EDF9E | https://addp.vn/ | structured-data / jsonld | evidence/schema/e4e0c9a45799894e.desktop.render-stabilized-v1.json | 2026-09-27T23:35:15.894Z | FND-SPEC-GEO-001 |
| EVD-AEE314AA3F7151E7 | https://addp.vn/ | dom / visible_controls | evidence/dom/e4e0c9a45799894e.desktop.render-stabilized-v1.json | 2026-09-27T23:35:16.047Z | Unknown / not recorded |
| EVD-DBF33A19881A487E | https://addp.vn/ | analytics / tracking_signals | evidence/analytics/e4e0c9a45799894e.desktop.render-stabilized-v1.json | 2026-09-27T23:35:16.049Z | Unknown / not recorded |
| EVD-8C749E8D6F00DF83 | https://addp.vn/ | screenshot / stabilized_viewport_screenshot | evidence/screenshots/e4e0c9a45799894e.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:35:16.165Z | FND-SPEC-UX-001 |
| EVD-702877ACD4E72E55 | https://addp.vn/ | screenshot / stabilized_full_screenshot | evidence/screenshots/e4e0c9a45799894e.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:35:17.005Z | FND-SPEC-UX-001 |
| EVD-6E93B5B6099AB8DE | https://addp.vn/ | axe / accessibility | evidence/accessibility/e4e0c9a45799894e.desktop.render-stabilized-v1.json | 2026-09-27T23:35:22.882Z | Unknown / not recorded |
| EVD-85956D06B433ABCA | https://addp.vn/ | performance / lab_metrics | evidence/lighthouse/e4e0c9a45799894e.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:35:22.902Z | Unknown / not recorded |
| EVD-D180D4E34ABF95BC | https://addp.vn/ | network / network_log | evidence/network/e4e0c9a45799894e.desktop.render-stabilized-v1.json | 2026-09-27T23:35:22.905Z | Unknown / not recorded |
| EVD-60CBF75CE8FE2864 | https://addp.vn/ | console / console_log | evidence/console/e4e0c9a45799894e.desktop.render-stabilized-v1.json | 2026-09-27T23:35:22.905Z | Unknown / not recorded |
| EVD-9B3746A447795E5D | https://addp.vn/ | screenshot / initial_viewport_screenshot | evidence/screenshots/e4e0c9a45799894e.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:35:43.518Z | Unknown / not recorded |
| EVD-90A6A817C6116577 | https://addp.vn/ | screenshot / initial_full_screenshot | evidence/screenshots/e4e0c9a45799894e.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:35:43.759Z | Unknown / not recorded |
| EVD-593BA7163638B99D | https://addp.vn/ | browser / render_stabilization | evidence/render/e4e0c9a45799894e.mobile.render-stabilized-v1.json | 2026-09-27T23:35:47.871Z | Unknown / not recorded |
| EVD-0B1AEB9BA55C2F0C | https://addp.vn/ | browser / rendered_html | evidence/html/e4e0c9a45799894e.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:35:47.884Z | Unknown / not recorded |
| EVD-AEED7CD9E819A9C7 | https://addp.vn/ | seo / rendered_seo | evidence/seo/e4e0c9a45799894e.mobile.render-stabilized-v1.json | 2026-09-27T23:35:47.917Z | Unknown / not recorded |
| EVD-C16C9A26189A6C8E | https://addp.vn/ | structured-data / jsonld | evidence/schema/e4e0c9a45799894e.mobile.render-stabilized-v1.json | 2026-09-27T23:35:47.921Z | FND-SPEC-GEO-001 |
| EVD-2CA66D18158349D8 | https://addp.vn/ | dom / visible_controls | evidence/dom/e4e0c9a45799894e.mobile.render-stabilized-v1.json | 2026-09-27T23:35:48.049Z | Unknown / not recorded |
| EVD-04B228A36544C865 | https://addp.vn/ | analytics / tracking_signals | evidence/analytics/e4e0c9a45799894e.mobile.render-stabilized-v1.json | 2026-09-27T23:35:48.052Z | Unknown / not recorded |
| EVD-4256DF417284230A | https://addp.vn/ | screenshot / stabilized_viewport_screenshot | evidence/screenshots/e4e0c9a45799894e.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:35:48.112Z | FND-SPEC-UX-001 |
| EVD-92E0841363C85BA1 | https://addp.vn/ | screenshot / stabilized_full_screenshot | evidence/screenshots/e4e0c9a45799894e.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:35:48.498Z | FND-SPEC-UX-001 |
| EVD-3425B7ADB4DE40C6 | https://addp.vn/ | axe / accessibility | evidence/accessibility/e4e0c9a45799894e.mobile.render-stabilized-v1.json | 2026-09-27T23:35:54.247Z | Unknown / not recorded |
| EVD-3D15DCDB359887BF | https://addp.vn/ | performance / lab_metrics | evidence/lighthouse/e4e0c9a45799894e.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:35:54.264Z | FND-SPEC-PERFORMANCE-001 |
| EVD-0A4B53A36849E3DA | https://addp.vn/ | network / network_log | evidence/network/e4e0c9a45799894e.mobile.render-stabilized-v1.json | 2026-09-27T23:35:54.278Z | Unknown / not recorded |
| EVD-8C7E9CF272FB4245 | https://addp.vn/ | console / console_log | evidence/console/e4e0c9a45799894e.mobile.render-stabilized-v1.json | 2026-09-27T23:35:54.278Z | Unknown / not recorded |
| EVD-7175E2F7A2FB1CE7 | https://addp.vn/benh-ly | raw-http / raw_html | evidence/html/65e3d78cc6db4646.render-stabilized-v1.raw.html | 2026-09-27T23:35:55.253Z | Unknown / not recorded |
| EVD-BB416E07741DC582 | https://addp.vn/benh-ly | seo / raw_seo | evidence/seo/65e3d78cc6db4646.render-stabilized-v1.raw.json | 2026-09-27T23:35:55.291Z | Unknown / not recorded |
| EVD-643A9233E4977FA3 | https://addp.vn/benh-ly | screenshot / initial_viewport_screenshot | evidence/screenshots/65e3d78cc6db4646.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:36:15.030Z | Unknown / not recorded |
| EVD-5CB55B41AF89A2EF | https://addp.vn/benh-ly | screenshot / initial_full_screenshot | evidence/screenshots/65e3d78cc6db4646.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:36:15.350Z | Unknown / not recorded |
| EVD-6E4E983D97511C2C | https://addp.vn/benh-ly | browser / render_stabilization | evidence/render/65e3d78cc6db4646.desktop.render-stabilized-v1.json | 2026-09-27T23:36:16.460Z | Unknown / not recorded |
| EVD-F937EC170B27DBBE | https://addp.vn/benh-ly | browser / rendered_html | evidence/html/65e3d78cc6db4646.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:36:16.480Z | Unknown / not recorded |
| EVD-47098AAEBE5261A0 | https://addp.vn/benh-ly | seo / rendered_seo | evidence/seo/65e3d78cc6db4646.desktop.render-stabilized-v1.json | 2026-09-27T23:36:16.586Z | Unknown / not recorded |
| EVD-F86279CF72B189AD | https://addp.vn/benh-ly | structured-data / jsonld | evidence/schema/65e3d78cc6db4646.desktop.render-stabilized-v1.json | 2026-09-27T23:36:16.587Z | Unknown / not recorded |
| EVD-2BBB547A1CCB0B8A | https://addp.vn/benh-ly | dom / visible_controls | evidence/dom/65e3d78cc6db4646.desktop.render-stabilized-v1.json | 2026-09-27T23:36:16.743Z | Unknown / not recorded |
| EVD-4AEA654B6000F25D | https://addp.vn/benh-ly | analytics / tracking_signals | evidence/analytics/65e3d78cc6db4646.desktop.render-stabilized-v1.json | 2026-09-27T23:36:16.745Z | Unknown / not recorded |
| EVD-1ECFB5F834D05D18 | https://addp.vn/benh-ly | screenshot / stabilized_viewport_screenshot | evidence/screenshots/65e3d78cc6db4646.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:36:16.814Z | Unknown / not recorded |
| EVD-EBFD842D1AB1DCA2 | https://addp.vn/benh-ly | screenshot / stabilized_full_screenshot | evidence/screenshots/65e3d78cc6db4646.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:36:16.980Z | Unknown / not recorded |
| EVD-FF04CCC555BB203F | https://addp.vn/benh-ly | axe / accessibility | evidence/accessibility/65e3d78cc6db4646.desktop.render-stabilized-v1.json | 2026-09-27T23:36:23.210Z | Unknown / not recorded |
| EVD-035E196C34BF6621 | https://addp.vn/benh-ly | performance / lab_metrics | evidence/lighthouse/65e3d78cc6db4646.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:36:23.227Z | Unknown / not recorded |
| EVD-323208DDBDE8BA51 | https://addp.vn/benh-ly | network / network_log | evidence/network/65e3d78cc6db4646.desktop.render-stabilized-v1.json | 2026-09-27T23:36:23.240Z | Unknown / not recorded |
| EVD-13097237108162EC | https://addp.vn/benh-ly | console / console_log | evidence/console/65e3d78cc6db4646.desktop.render-stabilized-v1.json | 2026-09-27T23:36:23.240Z | Unknown / not recorded |
| EVD-E3815B2D67C9E9D0 | https://addp.vn/benh-ly | screenshot / initial_viewport_screenshot | evidence/screenshots/65e3d78cc6db4646.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:36:43.256Z | Unknown / not recorded |
| EVD-A5E8A56EFABC1C2A | https://addp.vn/benh-ly | screenshot / initial_full_screenshot | evidence/screenshots/65e3d78cc6db4646.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:36:43.538Z | Unknown / not recorded |
| EVD-0D210483B3B8EDE0 | https://addp.vn/benh-ly | browser / render_stabilization | evidence/render/65e3d78cc6db4646.mobile.render-stabilized-v1.json | 2026-09-27T23:36:45.632Z | Unknown / not recorded |
| EVD-966EC45D4AF196BD | https://addp.vn/benh-ly | browser / rendered_html | evidence/html/65e3d78cc6db4646.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:36:45.658Z | Unknown / not recorded |
| EVD-1B0A276A53B73033 | https://addp.vn/benh-ly | seo / rendered_seo | evidence/seo/65e3d78cc6db4646.mobile.render-stabilized-v1.json | 2026-09-27T23:36:45.754Z | Unknown / not recorded |
| EVD-0DCD4A8A64CC442A | https://addp.vn/benh-ly | structured-data / jsonld | evidence/schema/65e3d78cc6db4646.mobile.render-stabilized-v1.json | 2026-09-27T23:36:45.755Z | Unknown / not recorded |
| EVD-BDE27B7A77932BD7 | https://addp.vn/benh-ly | dom / visible_controls | evidence/dom/65e3d78cc6db4646.mobile.render-stabilized-v1.json | 2026-09-27T23:36:46.088Z | Unknown / not recorded |
| EVD-325723A3C17A625A | https://addp.vn/benh-ly | analytics / tracking_signals | evidence/analytics/65e3d78cc6db4646.mobile.render-stabilized-v1.json | 2026-09-27T23:36:46.090Z | Unknown / not recorded |
| EVD-DB8847ABAA4D0FC3 | https://addp.vn/benh-ly | screenshot / stabilized_viewport_screenshot | evidence/screenshots/65e3d78cc6db4646.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:36:46.146Z | Unknown / not recorded |
| EVD-81CDC5EAF1624CFC | https://addp.vn/benh-ly | screenshot / stabilized_full_screenshot | evidence/screenshots/65e3d78cc6db4646.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:36:46.289Z | Unknown / not recorded |
| EVD-A23DC6E6D564E28D | https://addp.vn/benh-ly | axe / accessibility | evidence/accessibility/65e3d78cc6db4646.mobile.render-stabilized-v1.json | 2026-09-27T23:36:52.431Z | Unknown / not recorded |
| EVD-D2E949A54A61C783 | https://addp.vn/benh-ly | performance / lab_metrics | evidence/lighthouse/65e3d78cc6db4646.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:36:52.455Z | FND-SPEC-PERFORMANCE-001 |
| EVD-961370475CF4F626 | https://addp.vn/benh-ly | network / network_log | evidence/network/65e3d78cc6db4646.mobile.render-stabilized-v1.json | 2026-09-27T23:36:52.458Z | Unknown / not recorded |
| EVD-25440D834BFF6B87 | https://addp.vn/benh-ly | console / console_log | evidence/console/65e3d78cc6db4646.mobile.render-stabilized-v1.json | 2026-09-27T23:36:52.458Z | Unknown / not recorded |
| EVD-08F52276A2F3039C | https://addp.vn/blog/category/suc-khoe-tieu-duong | raw-http / raw_html | evidence/html/b929b6c94da55a49.render-stabilized-v1.raw.html | 2026-09-27T23:36:53.270Z | Unknown / not recorded |
| EVD-0BCCF09E222917B1 | https://addp.vn/blog/category/suc-khoe-tieu-duong | seo / raw_seo | evidence/seo/b929b6c94da55a49.render-stabilized-v1.raw.json | 2026-09-27T23:36:53.304Z | Unknown / not recorded |
| EVD-70512BB331D17D68 | https://addp.vn/blog/category/suc-khoe-tieu-duong | screenshot / initial_viewport_screenshot | evidence/screenshots/b929b6c94da55a49.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:37:13.083Z | Unknown / not recorded |
| EVD-DE6A91E054F80415 | https://addp.vn/blog/category/suc-khoe-tieu-duong | screenshot / initial_full_screenshot | evidence/screenshots/b929b6c94da55a49.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:37:13.529Z | Unknown / not recorded |
| EVD-22A72C4658743F46 | https://addp.vn/blog/category/suc-khoe-tieu-duong | browser / render_stabilization | evidence/render/b929b6c94da55a49.desktop.render-stabilized-v1.json | 2026-09-27T23:37:14.631Z | Unknown / not recorded |
| EVD-BD78A039077C5231 | https://addp.vn/blog/category/suc-khoe-tieu-duong | browser / rendered_html | evidence/html/b929b6c94da55a49.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:37:14.644Z | Unknown / not recorded |
| EVD-193B911618A48573 | https://addp.vn/blog/category/suc-khoe-tieu-duong | seo / rendered_seo | evidence/seo/b929b6c94da55a49.desktop.render-stabilized-v1.json | 2026-09-27T23:37:14.724Z | Unknown / not recorded |
| EVD-A5A62E8017987EAC | https://addp.vn/blog/category/suc-khoe-tieu-duong | structured-data / jsonld | evidence/schema/b929b6c94da55a49.desktop.render-stabilized-v1.json | 2026-09-27T23:37:14.725Z | Unknown / not recorded |
| EVD-B4D26A7C5573A5DF | https://addp.vn/blog/category/suc-khoe-tieu-duong | dom / visible_controls | evidence/dom/b929b6c94da55a49.desktop.render-stabilized-v1.json | 2026-09-27T23:37:14.934Z | Unknown / not recorded |
| EVD-F90BC40EAF6B6DCF | https://addp.vn/blog/category/suc-khoe-tieu-duong | analytics / tracking_signals | evidence/analytics/b929b6c94da55a49.desktop.render-stabilized-v1.json | 2026-09-27T23:37:14.936Z | Unknown / not recorded |
| EVD-65674D7855E4F693 | https://addp.vn/blog/category/suc-khoe-tieu-duong | screenshot / stabilized_viewport_screenshot | evidence/screenshots/b929b6c94da55a49.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:37:15.045Z | Unknown / not recorded |
| EVD-1D1316F928585A48 | https://addp.vn/blog/category/suc-khoe-tieu-duong | screenshot / stabilized_full_screenshot | evidence/screenshots/b929b6c94da55a49.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:37:15.313Z | Unknown / not recorded |
| EVD-22E0DDE6D2609F17 | https://addp.vn/blog/category/suc-khoe-tieu-duong | axe / accessibility | evidence/accessibility/b929b6c94da55a49.desktop.render-stabilized-v1.json | 2026-09-27T23:37:21.160Z | Unknown / not recorded |
| EVD-6FA8247E2A86C79A | https://addp.vn/blog/category/suc-khoe-tieu-duong | performance / lab_metrics | evidence/lighthouse/b929b6c94da55a49.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:37:21.180Z | Unknown / not recorded |
| EVD-45B3583AD1D43A79 | https://addp.vn/blog/category/suc-khoe-tieu-duong | network / network_log | evidence/network/b929b6c94da55a49.desktop.render-stabilized-v1.json | 2026-09-27T23:37:21.183Z | Unknown / not recorded |
| EVD-56E8989382649663 | https://addp.vn/blog/category/suc-khoe-tieu-duong | console / console_log | evidence/console/b929b6c94da55a49.desktop.render-stabilized-v1.json | 2026-09-27T23:37:21.183Z | Unknown / not recorded |
| EVD-45D40B9E081A566D | https://addp.vn/blog/category/suc-khoe-tieu-duong | screenshot / initial_viewport_screenshot | evidence/screenshots/b929b6c94da55a49.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:37:40.268Z | Unknown / not recorded |
| EVD-67C0F1FB5C6436C1 | https://addp.vn/blog/category/suc-khoe-tieu-duong | screenshot / initial_full_screenshot | evidence/screenshots/b929b6c94da55a49.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:37:40.608Z | Unknown / not recorded |
| EVD-244CBDFEC25178D5 | https://addp.vn/blog/category/suc-khoe-tieu-duong | browser / render_stabilization | evidence/render/b929b6c94da55a49.mobile.render-stabilized-v1.json | 2026-09-27T23:37:42.909Z | Unknown / not recorded |
| EVD-4E535E98956506AC | https://addp.vn/blog/category/suc-khoe-tieu-duong | browser / rendered_html | evidence/html/b929b6c94da55a49.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:37:42.922Z | Unknown / not recorded |
| EVD-0E21303A3735BA32 | https://addp.vn/blog/category/suc-khoe-tieu-duong | seo / rendered_seo | evidence/seo/b929b6c94da55a49.mobile.render-stabilized-v1.json | 2026-09-27T23:37:43.004Z | Unknown / not recorded |
| EVD-6362D91F68007AC2 | https://addp.vn/blog/category/suc-khoe-tieu-duong | structured-data / jsonld | evidence/schema/b929b6c94da55a49.mobile.render-stabilized-v1.json | 2026-09-27T23:37:43.005Z | Unknown / not recorded |
| EVD-DE7D7ACBC351630E | https://addp.vn/blog/category/suc-khoe-tieu-duong | dom / visible_controls | evidence/dom/b929b6c94da55a49.mobile.render-stabilized-v1.json | 2026-09-27T23:37:43.143Z | Unknown / not recorded |
| EVD-AA83068AD42CC1D4 | https://addp.vn/blog/category/suc-khoe-tieu-duong | analytics / tracking_signals | evidence/analytics/b929b6c94da55a49.mobile.render-stabilized-v1.json | 2026-09-27T23:37:43.145Z | Unknown / not recorded |
| EVD-70BB53F1B279EAEE | https://addp.vn/blog/category/suc-khoe-tieu-duong | screenshot / stabilized_viewport_screenshot | evidence/screenshots/b929b6c94da55a49.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:37:43.181Z | Unknown / not recorded |
| EVD-E9F76FC405A54828 | https://addp.vn/blog/category/suc-khoe-tieu-duong | screenshot / stabilized_full_screenshot | evidence/screenshots/b929b6c94da55a49.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:37:43.412Z | Unknown / not recorded |
| EVD-9C7D299C355C1D56 | https://addp.vn/blog/category/suc-khoe-tieu-duong | axe / accessibility | evidence/accessibility/b929b6c94da55a49.mobile.render-stabilized-v1.json | 2026-09-27T23:37:49.339Z | Unknown / not recorded |
| EVD-203B6173B6A72522 | https://addp.vn/blog/category/suc-khoe-tieu-duong | performance / lab_metrics | evidence/lighthouse/b929b6c94da55a49.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:37:49.368Z | FND-SPEC-PERFORMANCE-001 |
| EVD-38A181FAB588ED46 | https://addp.vn/blog/category/suc-khoe-tieu-duong | network / network_log | evidence/network/b929b6c94da55a49.mobile.render-stabilized-v1.json | 2026-09-27T23:37:49.382Z | Unknown / not recorded |
| EVD-F0AF488DF2881610 | https://addp.vn/blog/category/suc-khoe-tieu-duong | console / console_log | evidence/console/b929b6c94da55a49.mobile.render-stabilized-v1.json | 2026-09-27T23:37:49.382Z | Unknown / not recorded |
| EVD-EDC2C4DD0945DE30 | https://addp.vn/chinh-sach-dat-hang | raw-http / raw_html | evidence/html/9e2bc4d9801a94db.render-stabilized-v1.raw.html | 2026-09-27T23:37:50.326Z | Unknown / not recorded |
| EVD-8B9EE47483A9BC68 | https://addp.vn/chinh-sach-dat-hang | seo / raw_seo | evidence/seo/9e2bc4d9801a94db.render-stabilized-v1.raw.json | 2026-09-27T23:37:50.375Z | Unknown / not recorded |
| EVD-6FC9A4E437BF374C | https://addp.vn/chinh-sach-dat-hang | screenshot / initial_viewport_screenshot | evidence/screenshots/9e2bc4d9801a94db.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:38:14.324Z | Unknown / not recorded |
| EVD-5F3FFB24698329B2 | https://addp.vn/chinh-sach-dat-hang | screenshot / initial_full_screenshot | evidence/screenshots/9e2bc4d9801a94db.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:38:14.493Z | Unknown / not recorded |
| EVD-252A3B6755C6ED3F | https://addp.vn/chinh-sach-dat-hang | browser / render_stabilization | evidence/render/9e2bc4d9801a94db.desktop.render-stabilized-v1.json | 2026-09-27T23:38:15.231Z | Unknown / not recorded |
| EVD-1123045C65722F6B | https://addp.vn/chinh-sach-dat-hang | browser / rendered_html | evidence/html/9e2bc4d9801a94db.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:38:15.244Z | Unknown / not recorded |
| EVD-8847193527214305 | https://addp.vn/chinh-sach-dat-hang | seo / rendered_seo | evidence/seo/9e2bc4d9801a94db.desktop.render-stabilized-v1.json | 2026-09-27T23:38:15.293Z | Unknown / not recorded |
| EVD-FE109BA72DB61599 | https://addp.vn/chinh-sach-dat-hang | structured-data / jsonld | evidence/schema/9e2bc4d9801a94db.desktop.render-stabilized-v1.json | 2026-09-27T23:38:15.294Z | Unknown / not recorded |
| EVD-6A7EF572FC5741FA | https://addp.vn/chinh-sach-dat-hang | dom / visible_controls | evidence/dom/9e2bc4d9801a94db.desktop.render-stabilized-v1.json | 2026-09-27T23:38:15.468Z | Unknown / not recorded |
| EVD-CDE3A06097E63A87 | https://addp.vn/chinh-sach-dat-hang | analytics / tracking_signals | evidence/analytics/9e2bc4d9801a94db.desktop.render-stabilized-v1.json | 2026-09-27T23:38:15.470Z | Unknown / not recorded |
| EVD-B72E697CD491DD1E | https://addp.vn/chinh-sach-dat-hang | screenshot / stabilized_viewport_screenshot | evidence/screenshots/9e2bc4d9801a94db.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:38:15.549Z | Unknown / not recorded |
| EVD-788B7F14A0632C0C | https://addp.vn/chinh-sach-dat-hang | screenshot / stabilized_full_screenshot | evidence/screenshots/9e2bc4d9801a94db.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:38:15.694Z | Unknown / not recorded |
| EVD-8250C22774F78F02 | https://addp.vn/chinh-sach-dat-hang | axe / accessibility | evidence/accessibility/9e2bc4d9801a94db.desktop.render-stabilized-v1.json | 2026-09-27T23:38:21.449Z | Unknown / not recorded |
| EVD-241C395FC9AED203 | https://addp.vn/chinh-sach-dat-hang | performance / lab_metrics | evidence/lighthouse/9e2bc4d9801a94db.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:38:21.468Z | Unknown / not recorded |
| EVD-4C4008744D60A23C | https://addp.vn/chinh-sach-dat-hang | network / network_log | evidence/network/9e2bc4d9801a94db.desktop.render-stabilized-v1.json | 2026-09-27T23:38:21.482Z | Unknown / not recorded |
| EVD-2E6DDF96FCBD063F | https://addp.vn/chinh-sach-dat-hang | console / console_log | evidence/console/9e2bc4d9801a94db.desktop.render-stabilized-v1.json | 2026-09-27T23:38:21.482Z | Unknown / not recorded |
| EVD-7397E5C8E2A3EE82 | https://addp.vn/chinh-sach-dat-hang | screenshot / initial_viewport_screenshot | evidence/screenshots/9e2bc4d9801a94db.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:38:43.413Z | Unknown / not recorded |
| EVD-3CDA40C413DBCCCD | https://addp.vn/chinh-sach-dat-hang | screenshot / initial_full_screenshot | evidence/screenshots/9e2bc4d9801a94db.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:38:43.515Z | Unknown / not recorded |
| EVD-79D6739BCC1C19B5 | https://addp.vn/chinh-sach-dat-hang | browser / render_stabilization | evidence/render/9e2bc4d9801a94db.mobile.render-stabilized-v1.json | 2026-09-27T23:38:44.629Z | Unknown / not recorded |
| EVD-FB8961F5DDFAE616 | https://addp.vn/chinh-sach-dat-hang | browser / rendered_html | evidence/html/9e2bc4d9801a94db.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:38:44.641Z | Unknown / not recorded |
| EVD-FEAE1B2C290B94CB | https://addp.vn/chinh-sach-dat-hang | seo / rendered_seo | evidence/seo/9e2bc4d9801a94db.mobile.render-stabilized-v1.json | 2026-09-27T23:38:44.665Z | Unknown / not recorded |
| EVD-552FABD7BC82B289 | https://addp.vn/chinh-sach-dat-hang | structured-data / jsonld | evidence/schema/9e2bc4d9801a94db.mobile.render-stabilized-v1.json | 2026-09-27T23:38:44.666Z | Unknown / not recorded |
| EVD-CDABBEBCD9BB9AAD | https://addp.vn/chinh-sach-dat-hang | dom / visible_controls | evidence/dom/9e2bc4d9801a94db.mobile.render-stabilized-v1.json | 2026-09-27T23:38:44.820Z | Unknown / not recorded |
| EVD-AFA7DEEF2251457F | https://addp.vn/chinh-sach-dat-hang | analytics / tracking_signals | evidence/analytics/9e2bc4d9801a94db.mobile.render-stabilized-v1.json | 2026-09-27T23:38:44.821Z | Unknown / not recorded |
| EVD-E094ECC37ACDBCF3 | https://addp.vn/chinh-sach-dat-hang | screenshot / stabilized_viewport_screenshot | evidence/screenshots/9e2bc4d9801a94db.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:38:44.871Z | Unknown / not recorded |
| EVD-7120ED52DCBD9818 | https://addp.vn/chinh-sach-dat-hang | screenshot / stabilized_full_screenshot | evidence/screenshots/9e2bc4d9801a94db.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:38:44.972Z | Unknown / not recorded |
| EVD-5AC2B3FC9161F185 | https://addp.vn/chinh-sach-dat-hang | axe / accessibility | evidence/accessibility/9e2bc4d9801a94db.mobile.render-stabilized-v1.json | 2026-09-27T23:38:50.624Z | Unknown / not recorded |
| EVD-D16F5A715AC7BFE1 | https://addp.vn/chinh-sach-dat-hang | performance / lab_metrics | evidence/lighthouse/9e2bc4d9801a94db.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:38:50.642Z | Unknown / not recorded |
| EVD-B710EBF326AF51D4 | https://addp.vn/chinh-sach-dat-hang | network / network_log | evidence/network/9e2bc4d9801a94db.mobile.render-stabilized-v1.json | 2026-09-27T23:38:50.645Z | Unknown / not recorded |
| EVD-80CCB4C7BE675D3E | https://addp.vn/chinh-sach-dat-hang | console / console_log | evidence/console/9e2bc4d9801a94db.mobile.render-stabilized-v1.json | 2026-09-27T23:38:50.645Z | Unknown / not recorded |
| EVD-1D357E27D12C0704 | https://addp.vn/contact | raw-http / raw_html | evidence/html/c08fc3972f30bc5d.render-stabilized-v1.raw.html | 2026-09-27T23:38:51.848Z | Unknown / not recorded |
| EVD-E0930204A9FB2002 | https://addp.vn/contact | seo / raw_seo | evidence/seo/c08fc3972f30bc5d.render-stabilized-v1.raw.json | 2026-09-27T23:38:51.870Z | Unknown / not recorded |
| EVD-BDB13CADC35739BE | https://addp.vn/contact | screenshot / initial_viewport_screenshot | evidence/screenshots/c08fc3972f30bc5d.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:39:12.200Z | Unknown / not recorded |
| EVD-B37D4FD432D090BC | https://addp.vn/contact | screenshot / initial_full_screenshot | evidence/screenshots/c08fc3972f30bc5d.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:39:12.384Z | Unknown / not recorded |
| EVD-BC6F781012E438AD | https://addp.vn/contact | browser / render_stabilization | evidence/render/c08fc3972f30bc5d.desktop.render-stabilized-v1.json | 2026-09-27T23:39:13.156Z | Unknown / not recorded |
| EVD-84BC40F331C94448 | https://addp.vn/contact | browser / rendered_html | evidence/html/c08fc3972f30bc5d.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:39:13.168Z | Unknown / not recorded |
| EVD-13C7A1BCD9836960 | https://addp.vn/contact | seo / rendered_seo | evidence/seo/c08fc3972f30bc5d.desktop.render-stabilized-v1.json | 2026-09-27T23:39:13.187Z | Unknown / not recorded |
| EVD-1BCE1127FE6991C5 | https://addp.vn/contact | structured-data / jsonld | evidence/schema/c08fc3972f30bc5d.desktop.render-stabilized-v1.json | 2026-09-27T23:39:13.188Z | Unknown / not recorded |
| EVD-02A56067FC2FDB37 | https://addp.vn/contact | dom / visible_controls | evidence/dom/c08fc3972f30bc5d.desktop.render-stabilized-v1.json | 2026-09-27T23:39:13.338Z | Unknown / not recorded |
| EVD-125F2A290282DAD5 | https://addp.vn/contact | analytics / tracking_signals | evidence/analytics/c08fc3972f30bc5d.desktop.render-stabilized-v1.json | 2026-09-27T23:39:13.339Z | Unknown / not recorded |
| EVD-B84A0ED47D353E21 | https://addp.vn/contact | screenshot / stabilized_viewport_screenshot | evidence/screenshots/c08fc3972f30bc5d.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:39:13.391Z | Unknown / not recorded |
| EVD-2F79B9FA74F3CFB8 | https://addp.vn/contact | screenshot / stabilized_full_screenshot | evidence/screenshots/c08fc3972f30bc5d.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:39:13.530Z | Unknown / not recorded |
| EVD-8FE19B21EB00B8DD | https://addp.vn/contact | axe / accessibility | evidence/accessibility/c08fc3972f30bc5d.desktop.render-stabilized-v1.json | 2026-09-27T23:39:19.365Z | Unknown / not recorded |
| EVD-BF2F0A463C072CF4 | https://addp.vn/contact | performance / lab_metrics | evidence/lighthouse/c08fc3972f30bc5d.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:39:19.389Z | Unknown / not recorded |
| EVD-37241F7F5A0165D3 | https://addp.vn/contact | network / network_log | evidence/network/c08fc3972f30bc5d.desktop.render-stabilized-v1.json | 2026-09-27T23:39:19.392Z | Unknown / not recorded |
| EVD-B9CDE2496C272A45 | https://addp.vn/contact | console / console_log | evidence/console/c08fc3972f30bc5d.desktop.render-stabilized-v1.json | 2026-09-27T23:39:19.392Z | Unknown / not recorded |
| EVD-C6233C1FA3F3C852 | https://addp.vn/contact | screenshot / initial_viewport_screenshot | evidence/screenshots/c08fc3972f30bc5d.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:39:39.555Z | Unknown / not recorded |
| EVD-000ABC9BA02E5691 | https://addp.vn/contact | screenshot / initial_full_screenshot | evidence/screenshots/c08fc3972f30bc5d.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:39:39.644Z | Unknown / not recorded |
| EVD-DA043BF78E7732B5 | https://addp.vn/contact | browser / render_stabilization | evidence/render/c08fc3972f30bc5d.mobile.render-stabilized-v1.json | 2026-09-27T23:39:40.756Z | Unknown / not recorded |
| EVD-D5EB96A3D37FF1D3 | https://addp.vn/contact | browser / rendered_html | evidence/html/c08fc3972f30bc5d.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:39:40.768Z | Unknown / not recorded |
| EVD-992DAA5535C61123 | https://addp.vn/contact | seo / rendered_seo | evidence/seo/c08fc3972f30bc5d.mobile.render-stabilized-v1.json | 2026-09-27T23:39:40.800Z | Unknown / not recorded |
| EVD-D2348A9DCA7F467C | https://addp.vn/contact | structured-data / jsonld | evidence/schema/c08fc3972f30bc5d.mobile.render-stabilized-v1.json | 2026-09-27T23:39:40.802Z | Unknown / not recorded |
| EVD-90FC7ACB93DA268D | https://addp.vn/contact | dom / visible_controls | evidence/dom/c08fc3972f30bc5d.mobile.render-stabilized-v1.json | 2026-09-27T23:39:40.924Z | Unknown / not recorded |
| EVD-BB71FEEDC0284D04 | https://addp.vn/contact | analytics / tracking_signals | evidence/analytics/c08fc3972f30bc5d.mobile.render-stabilized-v1.json | 2026-09-27T23:39:40.926Z | Unknown / not recorded |
| EVD-17F02F29A6E1B6B4 | https://addp.vn/contact | screenshot / stabilized_viewport_screenshot | evidence/screenshots/c08fc3972f30bc5d.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:39:40.978Z | Unknown / not recorded |
| EVD-C7AD1BDA3A52082B | https://addp.vn/contact | screenshot / stabilized_full_screenshot | evidence/screenshots/c08fc3972f30bc5d.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:39:41.050Z | Unknown / not recorded |
| EVD-0DE7127BE908DB1C | https://addp.vn/contact | axe / accessibility | evidence/accessibility/c08fc3972f30bc5d.mobile.render-stabilized-v1.json | 2026-09-27T23:39:46.743Z | Unknown / not recorded |
| EVD-1C116135AEE5BAB7 | https://addp.vn/contact | performance / lab_metrics | evidence/lighthouse/c08fc3972f30bc5d.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:39:46.771Z | Unknown / not recorded |
| EVD-C47D6FC3F3734C58 | https://addp.vn/contact | network / network_log | evidence/network/c08fc3972f30bc5d.mobile.render-stabilized-v1.json | 2026-09-27T23:39:46.784Z | Unknown / not recorded |
| EVD-C4A9DBCBB7866DEE | https://addp.vn/contact | console / console_log | evidence/console/c08fc3972f30bc5d.mobile.render-stabilized-v1.json | 2026-09-27T23:39:46.784Z | Unknown / not recorded |
| EVD-1200698AEF54EF61 | https://addp.vn/gioi-thieu | raw-http / raw_html | evidence/html/d6027b0617e26ca1.render-stabilized-v1.raw.html | 2026-09-27T23:39:47.657Z | Unknown / not recorded |
| EVD-75BBB52127542EC3 | https://addp.vn/gioi-thieu | seo / raw_seo | evidence/seo/d6027b0617e26ca1.render-stabilized-v1.raw.json | 2026-09-27T23:39:47.671Z | Unknown / not recorded |
| EVD-972C27829B29CD1B | https://addp.vn/gioi-thieu | screenshot / initial_viewport_screenshot | evidence/screenshots/d6027b0617e26ca1.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:40:08.208Z | Unknown / not recorded |
| EVD-51B9BBAD2B0A121A | https://addp.vn/gioi-thieu | screenshot / initial_full_screenshot | evidence/screenshots/d6027b0617e26ca1.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:40:08.420Z | Unknown / not recorded |
| EVD-C20ECA437F9B6C90 | https://addp.vn/gioi-thieu | browser / render_stabilization | evidence/render/d6027b0617e26ca1.desktop.render-stabilized-v1.json | 2026-09-27T23:40:09.161Z | Unknown / not recorded |
| EVD-0683C26980504619 | https://addp.vn/gioi-thieu | browser / rendered_html | evidence/html/d6027b0617e26ca1.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:40:09.176Z | Unknown / not recorded |
| EVD-1F3469D65CD67492 | https://addp.vn/gioi-thieu | seo / rendered_seo | evidence/seo/d6027b0617e26ca1.desktop.render-stabilized-v1.json | 2026-09-27T23:40:09.215Z | Unknown / not recorded |
| EVD-CE1AE89E533DBFFC | https://addp.vn/gioi-thieu | structured-data / jsonld | evidence/schema/d6027b0617e26ca1.desktop.render-stabilized-v1.json | 2026-09-27T23:40:09.217Z | Unknown / not recorded |
| EVD-6CD5E70AEA29076F | https://addp.vn/gioi-thieu | dom / visible_controls | evidence/dom/d6027b0617e26ca1.desktop.render-stabilized-v1.json | 2026-09-27T23:40:09.380Z | Unknown / not recorded |
| EVD-0B566D85DC39FA02 | https://addp.vn/gioi-thieu | analytics / tracking_signals | evidence/analytics/d6027b0617e26ca1.desktop.render-stabilized-v1.json | 2026-09-27T23:40:09.383Z | Unknown / not recorded |
| EVD-3799948B7804CC0D | https://addp.vn/gioi-thieu | screenshot / stabilized_viewport_screenshot | evidence/screenshots/d6027b0617e26ca1.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:40:09.444Z | Unknown / not recorded |
| EVD-15C51083829E2538 | https://addp.vn/gioi-thieu | screenshot / stabilized_full_screenshot | evidence/screenshots/d6027b0617e26ca1.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:40:09.587Z | Unknown / not recorded |
| EVD-6C6DD193D20D9FB2 | https://addp.vn/gioi-thieu | axe / accessibility | evidence/accessibility/d6027b0617e26ca1.desktop.render-stabilized-v1.json | 2026-09-27T23:40:15.342Z | Unknown / not recorded |
| EVD-B912E0E9CCFD3BAD | https://addp.vn/gioi-thieu | performance / lab_metrics | evidence/lighthouse/d6027b0617e26ca1.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:40:15.359Z | Unknown / not recorded |
| EVD-F75B45BE81D139FB | https://addp.vn/gioi-thieu | network / network_log | evidence/network/d6027b0617e26ca1.desktop.render-stabilized-v1.json | 2026-09-27T23:40:15.363Z | Unknown / not recorded |
| EVD-A3F8091724B6D2D0 | https://addp.vn/gioi-thieu | console / console_log | evidence/console/d6027b0617e26ca1.desktop.render-stabilized-v1.json | 2026-09-27T23:40:15.363Z | Unknown / not recorded |
| EVD-78FE3DB6F32D0782 | https://addp.vn/gioi-thieu | screenshot / initial_viewport_screenshot | evidence/screenshots/d6027b0617e26ca1.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:40:34.742Z | Unknown / not recorded |
| EVD-62ED96958EEBD745 | https://addp.vn/gioi-thieu | screenshot / initial_full_screenshot | evidence/screenshots/d6027b0617e26ca1.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:40:34.872Z | Unknown / not recorded |
| EVD-91B19FF8E80C6C73 | https://addp.vn/gioi-thieu | browser / render_stabilization | evidence/render/d6027b0617e26ca1.mobile.render-stabilized-v1.json | 2026-09-27T23:40:35.993Z | Unknown / not recorded |
| EVD-8FDD8896E0E20819 | https://addp.vn/gioi-thieu | browser / rendered_html | evidence/html/d6027b0617e26ca1.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:40:36.004Z | Unknown / not recorded |
| EVD-12766E80074DD58C | https://addp.vn/gioi-thieu | seo / rendered_seo | evidence/seo/d6027b0617e26ca1.mobile.render-stabilized-v1.json | 2026-09-27T23:40:36.113Z | Unknown / not recorded |
| EVD-4E6681AC1DF8C520 | https://addp.vn/gioi-thieu | structured-data / jsonld | evidence/schema/d6027b0617e26ca1.mobile.render-stabilized-v1.json | 2026-09-27T23:40:36.114Z | Unknown / not recorded |
| EVD-07E1FB1ADA81B1B6 | https://addp.vn/gioi-thieu | dom / visible_controls | evidence/dom/d6027b0617e26ca1.mobile.render-stabilized-v1.json | 2026-09-27T23:40:36.244Z | Unknown / not recorded |
| EVD-AEA3DB2C2D2E0F53 | https://addp.vn/gioi-thieu | analytics / tracking_signals | evidence/analytics/d6027b0617e26ca1.mobile.render-stabilized-v1.json | 2026-09-27T23:40:36.245Z | Unknown / not recorded |
| EVD-26BA666C7BDB43AE | https://addp.vn/gioi-thieu | screenshot / stabilized_viewport_screenshot | evidence/screenshots/d6027b0617e26ca1.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:40:36.281Z | Unknown / not recorded |
| EVD-088FF948A5499146 | https://addp.vn/gioi-thieu | screenshot / stabilized_full_screenshot | evidence/screenshots/d6027b0617e26ca1.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:40:36.355Z | Unknown / not recorded |
| EVD-B8230F0B77B37EC3 | https://addp.vn/gioi-thieu | axe / accessibility | evidence/accessibility/d6027b0617e26ca1.mobile.render-stabilized-v1.json | 2026-09-27T23:40:42.067Z | Unknown / not recorded |
| EVD-3F0A6FD5DEC1A56B | https://addp.vn/gioi-thieu | performance / lab_metrics | evidence/lighthouse/d6027b0617e26ca1.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:40:42.091Z | Unknown / not recorded |
| EVD-82899057B2172A27 | https://addp.vn/gioi-thieu | network / network_log | evidence/network/d6027b0617e26ca1.mobile.render-stabilized-v1.json | 2026-09-27T23:40:42.094Z | Unknown / not recorded |
| EVD-7ED98C4AF5707C82 | https://addp.vn/gioi-thieu | console / console_log | evidence/console/d6027b0617e26ca1.mobile.render-stabilized-v1.json | 2026-09-27T23:40:42.094Z | Unknown / not recorded |
| EVD-42AE297DAC33A1B9 | https://addp.vn/sua-hat-glucare-plus | raw-http / raw_html | evidence/html/ebd40bf592e2f9a7.render-stabilized-v1.raw.html | 2026-09-27T23:40:44.507Z | Unknown / not recorded |
| EVD-1753B10CEB844A9E | https://addp.vn/sua-hat-glucare-plus | seo / raw_seo | evidence/seo/ebd40bf592e2f9a7.render-stabilized-v1.raw.json | 2026-09-27T23:40:44.560Z | Unknown / not recorded |
| EVD-FB24D9B8334093C4 | https://addp.vn/sua-hat-glucare-plus | screenshot / initial_viewport_screenshot | evidence/screenshots/ebd40bf592e2f9a7.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:41:14.308Z | Unknown / not recorded |
| EVD-6F7194C1DA51041E | https://addp.vn/sua-hat-glucare-plus | screenshot / initial_full_screenshot | evidence/screenshots/ebd40bf592e2f9a7.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:41:15.366Z | Unknown / not recorded |
| EVD-64D373C3AF06867B | https://addp.vn/sua-hat-glucare-plus | browser / render_stabilization | evidence/render/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json | 2026-09-27T23:41:25.202Z | Unknown / not recorded |
| EVD-689120860F2FACA2 | https://addp.vn/sua-hat-glucare-plus | browser / rendered_html | evidence/html/ebd40bf592e2f9a7.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:41:25.227Z | Unknown / not recorded |
| EVD-D1249648026B4D96 | https://addp.vn/sua-hat-glucare-plus | seo / rendered_seo | evidence/seo/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json | 2026-09-27T23:41:25.357Z | FND-SPEC-CONTENT-001, FND-SPEC-SEO-001 |
| EVD-80257931D1966034 | https://addp.vn/sua-hat-glucare-plus | structured-data / jsonld | evidence/schema/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json | 2026-09-27T23:41:25.358Z | FND-SPEC-GEO-001 |
| EVD-DF63C483FC434445 | https://addp.vn/sua-hat-glucare-plus | dom / visible_controls | evidence/dom/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json | 2026-09-27T23:41:25.678Z | FND-PER-HIGH-001 |
| EVD-97810824842F6F36 | https://addp.vn/sua-hat-glucare-plus | analytics / tracking_signals | evidence/analytics/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json | 2026-09-27T23:41:25.680Z | Unknown / not recorded |
| EVD-C86C629E938B1E14 | https://addp.vn/sua-hat-glucare-plus | screenshot / stabilized_viewport_screenshot | evidence/screenshots/ebd40bf592e2f9a7.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:41:25.909Z | Unknown / not recorded |
| EVD-EA78205F3017C505 | https://addp.vn/sua-hat-glucare-plus | screenshot / stabilized_full_screenshot | evidence/screenshots/ebd40bf592e2f9a7.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:41:26.856Z | FND-PER-HIGH-001 |
| EVD-4D473131699530B4 | https://addp.vn/sua-hat-glucare-plus | axe / accessibility | evidence/accessibility/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json | 2026-09-27T23:41:32.892Z | Unknown / not recorded |
| EVD-9F9FDDCFDF43F393 | https://addp.vn/sua-hat-glucare-plus | performance / lab_metrics | evidence/lighthouse/ebd40bf592e2f9a7.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:41:32.918Z | Unknown / not recorded |
| EVD-15BC6493711E3B3E | https://addp.vn/sua-hat-glucare-plus | network / network_log | evidence/network/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json | 2026-09-27T23:41:32.922Z | Unknown / not recorded |
| EVD-3E33A81616F1E834 | https://addp.vn/sua-hat-glucare-plus | console / console_log | evidence/console/ebd40bf592e2f9a7.desktop.render-stabilized-v1.json | 2026-09-27T23:41:32.922Z | Unknown / not recorded |
| EVD-F65D8AFB77A88775 | https://addp.vn/sua-hat-glucare-plus | screenshot / initial_viewport_screenshot | evidence/screenshots/ebd40bf592e2f9a7.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:42:04.230Z | Unknown / not recorded |
| EVD-9AD93BA7577712EC | https://addp.vn/sua-hat-glucare-plus | screenshot / initial_full_screenshot | evidence/screenshots/ebd40bf592e2f9a7.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:42:04.628Z | Unknown / not recorded |
| EVD-EBDFC0DBD50D3635 | https://addp.vn/sua-hat-glucare-plus | browser / render_stabilization | evidence/render/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json | 2026-09-27T23:42:15.769Z | Unknown / not recorded |
| EVD-AADDB45759F67004 | https://addp.vn/sua-hat-glucare-plus | browser / rendered_html | evidence/html/ebd40bf592e2f9a7.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:42:15.795Z | Unknown / not recorded |
| EVD-1BA12AFB05B5BD13 | https://addp.vn/sua-hat-glucare-plus | seo / rendered_seo | evidence/seo/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json | 2026-09-27T23:42:15.943Z | FND-SPEC-SEO-001 |
| EVD-5DEB9224EB2D897C | https://addp.vn/sua-hat-glucare-plus | structured-data / jsonld | evidence/schema/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json | 2026-09-27T23:42:15.944Z | FND-SPEC-GEO-001 |
| EVD-733F5C04719022AE | https://addp.vn/sua-hat-glucare-plus | dom / visible_controls | evidence/dom/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json | 2026-09-27T23:42:16.272Z | FND-PER-HIGH-001 |
| EVD-6F5D373CB335C509 | https://addp.vn/sua-hat-glucare-plus | analytics / tracking_signals | evidence/analytics/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json | 2026-09-27T23:42:16.273Z | Unknown / not recorded |
| EVD-E178F1827F773846 | https://addp.vn/sua-hat-glucare-plus | screenshot / stabilized_viewport_screenshot | evidence/screenshots/ebd40bf592e2f9a7.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:42:16.383Z | Unknown / not recorded |
| EVD-0581A36B72F4A783 | https://addp.vn/sua-hat-glucare-plus | screenshot / stabilized_full_screenshot | evidence/screenshots/ebd40bf592e2f9a7.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:42:16.723Z | FND-PER-HIGH-001 |
| EVD-238D776F29EAE37D | https://addp.vn/sua-hat-glucare-plus | axe / accessibility | evidence/accessibility/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json | 2026-09-27T23:42:22.825Z | FND-PER-HIGH-001, FND-PER-MOBILE-002 |
| EVD-1FE036CF43DBF534 | https://addp.vn/sua-hat-glucare-plus | performance / lab_metrics | evidence/lighthouse/ebd40bf592e2f9a7.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:42:22.845Z | Unknown / not recorded |
| EVD-5B64268901E5FAFD | https://addp.vn/sua-hat-glucare-plus | network / network_log | evidence/network/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json | 2026-09-27T23:42:22.858Z | Unknown / not recorded |
| EVD-90496E03399113B9 | https://addp.vn/sua-hat-glucare-plus | console / console_log | evidence/console/ebd40bf592e2f9a7.mobile.render-stabilized-v1.json | 2026-09-27T23:42:22.859Z | Unknown / not recorded |
| EVD-953E0DAF9B7BE485 | https://addp.vn/catalogsearch/advanced/ | raw-http / raw_html | evidence/html/39382f2ae8662c52.render-stabilized-v1.raw.html | 2026-09-27T23:42:23.786Z | Unknown / not recorded |
| EVD-0592342C83370139 | https://addp.vn/catalogsearch/advanced/ | seo / raw_seo | evidence/seo/39382f2ae8662c52.render-stabilized-v1.raw.json | 2026-09-27T23:42:23.826Z | Unknown / not recorded |
| EVD-7DB11E626D892EAA | https://addp.vn/catalogsearch/advanced/ | screenshot / initial_viewport_screenshot | evidence/screenshots/39382f2ae8662c52.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:42:43.831Z | Unknown / not recorded |
| EVD-6A2E460657859239 | https://addp.vn/catalogsearch/advanced/ | screenshot / initial_full_screenshot | evidence/screenshots/39382f2ae8662c52.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:42:44.019Z | Unknown / not recorded |
| EVD-DB1D4E5389304CE7 | https://addp.vn/catalogsearch/advanced/ | browser / render_stabilization | evidence/render/39382f2ae8662c52.desktop.render-stabilized-v1.json | 2026-09-27T23:42:44.957Z | Unknown / not recorded |
| EVD-984BE7E2F957C120 | https://addp.vn/catalogsearch/advanced/ | browser / rendered_html | evidence/html/39382f2ae8662c52.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:42:44.979Z | Unknown / not recorded |
| EVD-A0DA2E96758B646D | https://addp.vn/catalogsearch/advanced/ | seo / rendered_seo | evidence/seo/39382f2ae8662c52.desktop.render-stabilized-v1.json | 2026-09-27T23:42:45.078Z | Unknown / not recorded |
| EVD-B722881A769DBDE5 | https://addp.vn/catalogsearch/advanced/ | structured-data / jsonld | evidence/schema/39382f2ae8662c52.desktop.render-stabilized-v1.json | 2026-09-27T23:42:45.079Z | Unknown / not recorded |
| EVD-E1E719B77D605D10 | https://addp.vn/catalogsearch/advanced/ | dom / visible_controls | evidence/dom/39382f2ae8662c52.desktop.render-stabilized-v1.json | 2026-09-27T23:42:45.209Z | Unknown / not recorded |
| EVD-2C30CFAD7404FDD3 | https://addp.vn/catalogsearch/advanced/ | analytics / tracking_signals | evidence/analytics/39382f2ae8662c52.desktop.render-stabilized-v1.json | 2026-09-27T23:42:45.211Z | Unknown / not recorded |
| EVD-24710AE707B494BE | https://addp.vn/catalogsearch/advanced/ | screenshot / stabilized_viewport_screenshot | evidence/screenshots/39382f2ae8662c52.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:42:45.274Z | Unknown / not recorded |
| EVD-FDBA10EAD37DCEAB | https://addp.vn/catalogsearch/advanced/ | screenshot / stabilized_full_screenshot | evidence/screenshots/39382f2ae8662c52.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:42:45.393Z | Unknown / not recorded |
| EVD-0EB6EFDD68F241CB | https://addp.vn/catalogsearch/advanced/ | axe / accessibility | evidence/accessibility/39382f2ae8662c52.desktop.render-stabilized-v1.json | 2026-09-27T23:42:51.114Z | Unknown / not recorded |
| EVD-EAB39F24E7DA327D | https://addp.vn/catalogsearch/advanced/ | performance / lab_metrics | evidence/lighthouse/39382f2ae8662c52.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:42:51.135Z | Unknown / not recorded |
| EVD-E82C593AC123A59E | https://addp.vn/catalogsearch/advanced/ | network / network_log | evidence/network/39382f2ae8662c52.desktop.render-stabilized-v1.json | 2026-09-27T23:42:51.148Z | Unknown / not recorded |
| EVD-E13807C0BC44EF66 | https://addp.vn/catalogsearch/advanced/ | console / console_log | evidence/console/39382f2ae8662c52.desktop.render-stabilized-v1.json | 2026-09-27T23:42:51.148Z | Unknown / not recorded |
| EVD-26C45CB99C58B5F5 | https://addp.vn/catalogsearch/advanced/ | screenshot / initial_viewport_screenshot | evidence/screenshots/39382f2ae8662c52.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:43:10.468Z | Unknown / not recorded |
| EVD-508BE776141FD1AB | https://addp.vn/catalogsearch/advanced/ | screenshot / initial_full_screenshot | evidence/screenshots/39382f2ae8662c52.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:43:10.594Z | Unknown / not recorded |
| EVD-0ABEE59FD6AE58F7 | https://addp.vn/catalogsearch/advanced/ | browser / render_stabilization | evidence/render/39382f2ae8662c52.mobile.render-stabilized-v1.json | 2026-09-27T23:43:11.696Z | Unknown / not recorded |
| EVD-5271448B3D248B48 | https://addp.vn/catalogsearch/advanced/ | browser / rendered_html | evidence/html/39382f2ae8662c52.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:43:11.715Z | Unknown / not recorded |
| EVD-AE161DEB619EF1DD | https://addp.vn/catalogsearch/advanced/ | seo / rendered_seo | evidence/seo/39382f2ae8662c52.mobile.render-stabilized-v1.json | 2026-09-27T23:43:11.799Z | Unknown / not recorded |
| EVD-16A77024511CC2DB | https://addp.vn/catalogsearch/advanced/ | structured-data / jsonld | evidence/schema/39382f2ae8662c52.mobile.render-stabilized-v1.json | 2026-09-27T23:43:11.800Z | Unknown / not recorded |
| EVD-36B33ED3C701BCB4 | https://addp.vn/catalogsearch/advanced/ | dom / visible_controls | evidence/dom/39382f2ae8662c52.mobile.render-stabilized-v1.json | 2026-09-27T23:43:11.922Z | Unknown / not recorded |
| EVD-F08B88732642422A | https://addp.vn/catalogsearch/advanced/ | analytics / tracking_signals | evidence/analytics/39382f2ae8662c52.mobile.render-stabilized-v1.json | 2026-09-27T23:43:11.923Z | Unknown / not recorded |
| EVD-74B2F4CBE7177232 | https://addp.vn/catalogsearch/advanced/ | screenshot / stabilized_viewport_screenshot | evidence/screenshots/39382f2ae8662c52.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:43:11.960Z | Unknown / not recorded |
| EVD-42A254F082306FDD | https://addp.vn/catalogsearch/advanced/ | screenshot / stabilized_full_screenshot | evidence/screenshots/39382f2ae8662c52.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:43:12.026Z | Unknown / not recorded |
| EVD-61DF8A91D001DA40 | https://addp.vn/catalogsearch/advanced/ | axe / accessibility | evidence/accessibility/39382f2ae8662c52.mobile.render-stabilized-v1.json | 2026-09-27T23:43:17.710Z | Unknown / not recorded |
| EVD-AF090591980AFC3D | https://addp.vn/catalogsearch/advanced/ | performance / lab_metrics | evidence/lighthouse/39382f2ae8662c52.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:43:17.730Z | Unknown / not recorded |
| EVD-031C59E5C7FE3E6C | https://addp.vn/catalogsearch/advanced/ | network / network_log | evidence/network/39382f2ae8662c52.mobile.render-stabilized-v1.json | 2026-09-27T23:43:17.733Z | Unknown / not recorded |
| EVD-9146A5674E1B1D5B | https://addp.vn/catalogsearch/advanced/ | console / console_log | evidence/console/39382f2ae8662c52.mobile.render-stabilized-v1.json | 2026-09-27T23:43:17.733Z | Unknown / not recorded |
| EVD-C8F53200EC6DF019 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | raw-http / raw_html | evidence/html/dfb21dfb6ffbbe60.render-stabilized-v1.raw.html | 2026-09-27T23:43:18.663Z | Unknown / not recorded |
| EVD-A1E200BE968158E2 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | seo / raw_seo | evidence/seo/dfb21dfb6ffbbe60.render-stabilized-v1.raw.json | 2026-09-27T23:43:18.696Z | Unknown / not recorded |
| EVD-974B331495760107 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | screenshot / initial_viewport_screenshot | evidence/screenshots/dfb21dfb6ffbbe60.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:43:38.313Z | Unknown / not recorded |
| EVD-E5026A5F9D242513 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | screenshot / initial_full_screenshot | evidence/screenshots/dfb21dfb6ffbbe60.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:43:38.514Z | Unknown / not recorded |
| EVD-F7E75E7E397E8353 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | browser / render_stabilization | evidence/render/dfb21dfb6ffbbe60.desktop.render-stabilized-v1.json | 2026-09-27T23:43:39.266Z | Unknown / not recorded |
| EVD-3673B7DBC483F700 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | browser / rendered_html | evidence/html/dfb21dfb6ffbbe60.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:43:39.279Z | Unknown / not recorded |
| EVD-505B29109F60B190 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | seo / rendered_seo | evidence/seo/dfb21dfb6ffbbe60.desktop.render-stabilized-v1.json | 2026-09-27T23:43:39.322Z | Unknown / not recorded |
| EVD-E23FE10369C0FB90 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | structured-data / jsonld | evidence/schema/dfb21dfb6ffbbe60.desktop.render-stabilized-v1.json | 2026-09-27T23:43:39.324Z | Unknown / not recorded |
| EVD-C8F52192938DAC68 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | dom / visible_controls | evidence/dom/dfb21dfb6ffbbe60.desktop.render-stabilized-v1.json | 2026-09-27T23:43:39.442Z | Unknown / not recorded |
| EVD-9D3C94B91D40D6D2 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | analytics / tracking_signals | evidence/analytics/dfb21dfb6ffbbe60.desktop.render-stabilized-v1.json | 2026-09-27T23:43:39.443Z | Unknown / not recorded |
| EVD-0803E15A276B48C8 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | screenshot / stabilized_viewport_screenshot | evidence/screenshots/dfb21dfb6ffbbe60.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:43:39.511Z | Unknown / not recorded |
| EVD-DBF6E1BA19ED57F4 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | screenshot / stabilized_full_screenshot | evidence/screenshots/dfb21dfb6ffbbe60.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:43:39.620Z | Unknown / not recorded |
| EVD-4704CE7BBDE716CD | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | axe / accessibility | evidence/accessibility/dfb21dfb6ffbbe60.desktop.render-stabilized-v1.json | 2026-09-27T23:43:45.896Z | Unknown / not recorded |
| EVD-7204E115807DEAA2 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | performance / lab_metrics | evidence/lighthouse/dfb21dfb6ffbbe60.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:43:45.915Z | Unknown / not recorded |
| EVD-F2D2D19EC02F7A18 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | network / network_log | evidence/network/dfb21dfb6ffbbe60.desktop.render-stabilized-v1.json | 2026-09-27T23:43:45.918Z | Unknown / not recorded |
| EVD-162CB06D90CEE2CE | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | console / console_log | evidence/console/dfb21dfb6ffbbe60.desktop.render-stabilized-v1.json | 2026-09-27T23:43:45.918Z | Unknown / not recorded |
| EVD-52EEB5E6EBEC6062 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | screenshot / initial_viewport_screenshot | evidence/screenshots/dfb21dfb6ffbbe60.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:44:06.248Z | Unknown / not recorded |
| EVD-7CAD357CCFE40CA3 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | screenshot / initial_full_screenshot | evidence/screenshots/dfb21dfb6ffbbe60.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:44:06.368Z | Unknown / not recorded |
| EVD-1913C4E944F68412 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | browser / render_stabilization | evidence/render/dfb21dfb6ffbbe60.mobile.render-stabilized-v1.json | 2026-09-27T23:44:07.290Z | Unknown / not recorded |
| EVD-CDED377117DC73C6 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | browser / rendered_html | evidence/html/dfb21dfb6ffbbe60.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:44:07.303Z | Unknown / not recorded |
| EVD-F40DCB8B02E0C8FE | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | seo / rendered_seo | evidence/seo/dfb21dfb6ffbbe60.mobile.render-stabilized-v1.json | 2026-09-27T23:44:07.390Z | Unknown / not recorded |
| EVD-170E4AE7C03FAECA | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | structured-data / jsonld | evidence/schema/dfb21dfb6ffbbe60.mobile.render-stabilized-v1.json | 2026-09-27T23:44:07.390Z | Unknown / not recorded |
| EVD-424F9467C57BAF57 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | dom / visible_controls | evidence/dom/dfb21dfb6ffbbe60.mobile.render-stabilized-v1.json | 2026-09-27T23:44:07.574Z | Unknown / not recorded |
| EVD-706689EC9E43F54A | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | analytics / tracking_signals | evidence/analytics/dfb21dfb6ffbbe60.mobile.render-stabilized-v1.json | 2026-09-27T23:44:07.575Z | Unknown / not recorded |
| EVD-C57803089B34DCC1 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | screenshot / stabilized_viewport_screenshot | evidence/screenshots/dfb21dfb6ffbbe60.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:44:07.623Z | Unknown / not recorded |
| EVD-20E4F6B75F6D4F85 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | screenshot / stabilized_full_screenshot | evidence/screenshots/dfb21dfb6ffbbe60.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:44:07.688Z | Unknown / not recorded |
| EVD-2AF4ECD12CFB3BF3 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | axe / accessibility | evidence/accessibility/dfb21dfb6ffbbe60.mobile.render-stabilized-v1.json | 2026-09-27T23:44:13.399Z | Unknown / not recorded |
| EVD-4C2398DD8A7C253A | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | performance / lab_metrics | evidence/lighthouse/dfb21dfb6ffbbe60.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:44:13.421Z | Unknown / not recorded |
| EVD-4142EC72F36019A6 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | network / network_log | evidence/network/dfb21dfb6ffbbe60.mobile.render-stabilized-v1.json | 2026-09-27T23:44:13.435Z | Unknown / not recorded |
| EVD-5299F4FE449348B9 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | console / console_log | evidence/console/dfb21dfb6ffbbe60.mobile.render-stabilized-v1.json | 2026-09-27T23:44:13.435Z | Unknown / not recorded |
| EVD-77C8093A1206F6D4 | https://addp.vn/chinh-sach-thanh-toan | raw-http / raw_html | evidence/html/0c8d7a240125a53f.render-stabilized-v1.raw.html | 2026-09-27T23:44:14.284Z | Unknown / not recorded |
| EVD-E6768CFC12E51725 | https://addp.vn/chinh-sach-thanh-toan | seo / raw_seo | evidence/seo/0c8d7a240125a53f.render-stabilized-v1.raw.json | 2026-09-27T23:44:14.315Z | Unknown / not recorded |
| EVD-3C55E74BB46A7D82 | https://addp.vn/chinh-sach-thanh-toan | screenshot / initial_viewport_screenshot | evidence/screenshots/0c8d7a240125a53f.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:44:33.962Z | Unknown / not recorded |
| EVD-5AF83E6C2C1586FC | https://addp.vn/chinh-sach-thanh-toan | screenshot / initial_full_screenshot | evidence/screenshots/0c8d7a240125a53f.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:44:34.114Z | Unknown / not recorded |
| EVD-E12B0BD10A1C818F | https://addp.vn/chinh-sach-thanh-toan | browser / render_stabilization | evidence/render/0c8d7a240125a53f.desktop.render-stabilized-v1.json | 2026-09-27T23:44:34.873Z | Unknown / not recorded |
| EVD-0DFA6AF6C4E83E73 | https://addp.vn/chinh-sach-thanh-toan | browser / rendered_html | evidence/html/0c8d7a240125a53f.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:44:34.885Z | Unknown / not recorded |
| EVD-53E84251CAFE4203 | https://addp.vn/chinh-sach-thanh-toan | seo / rendered_seo | evidence/seo/0c8d7a240125a53f.desktop.render-stabilized-v1.json | 2026-09-27T23:44:34.929Z | Unknown / not recorded |
| EVD-4B526159EE6DE5AC | https://addp.vn/chinh-sach-thanh-toan | structured-data / jsonld | evidence/schema/0c8d7a240125a53f.desktop.render-stabilized-v1.json | 2026-09-27T23:44:34.930Z | Unknown / not recorded |
| EVD-C3267FCCB0C107BE | https://addp.vn/chinh-sach-thanh-toan | dom / visible_controls | evidence/dom/0c8d7a240125a53f.desktop.render-stabilized-v1.json | 2026-09-27T23:44:35.132Z | Unknown / not recorded |
| EVD-680732E8D6EFA557 | https://addp.vn/chinh-sach-thanh-toan | analytics / tracking_signals | evidence/analytics/0c8d7a240125a53f.desktop.render-stabilized-v1.json | 2026-09-27T23:44:35.134Z | Unknown / not recorded |
| EVD-76BB8CA6FDA62D30 | https://addp.vn/chinh-sach-thanh-toan | screenshot / stabilized_viewport_screenshot | evidence/screenshots/0c8d7a240125a53f.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:44:35.239Z | Unknown / not recorded |
| EVD-47E1AD54D1F93AD3 | https://addp.vn/chinh-sach-thanh-toan | screenshot / stabilized_full_screenshot | evidence/screenshots/0c8d7a240125a53f.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:44:35.421Z | Unknown / not recorded |
| EVD-09A16F0772FCCA76 | https://addp.vn/chinh-sach-thanh-toan | axe / accessibility | evidence/accessibility/0c8d7a240125a53f.desktop.render-stabilized-v1.json | 2026-09-27T23:44:41.326Z | Unknown / not recorded |
| EVD-D457B98926263620 | https://addp.vn/chinh-sach-thanh-toan | performance / lab_metrics | evidence/lighthouse/0c8d7a240125a53f.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:44:41.347Z | Unknown / not recorded |
| EVD-539F645182B8F686 | https://addp.vn/chinh-sach-thanh-toan | network / network_log | evidence/network/0c8d7a240125a53f.desktop.render-stabilized-v1.json | 2026-09-27T23:44:41.360Z | Unknown / not recorded |
| EVD-DBD8287B0D021453 | https://addp.vn/chinh-sach-thanh-toan | console / console_log | evidence/console/0c8d7a240125a53f.desktop.render-stabilized-v1.json | 2026-09-27T23:44:41.360Z | Unknown / not recorded |
| EVD-E7C4608C624741EE | https://addp.vn/chinh-sach-thanh-toan | screenshot / initial_viewport_screenshot | evidence/screenshots/0c8d7a240125a53f.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:45:00.830Z | Unknown / not recorded |
| EVD-1D169B2174FDA269 | https://addp.vn/chinh-sach-thanh-toan | screenshot / initial_full_screenshot | evidence/screenshots/0c8d7a240125a53f.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:45:00.940Z | Unknown / not recorded |
| EVD-FD156C316972259C | https://addp.vn/chinh-sach-thanh-toan | browser / render_stabilization | evidence/render/0c8d7a240125a53f.mobile.render-stabilized-v1.json | 2026-09-27T23:45:02.089Z | Unknown / not recorded |
| EVD-7A5C61340ACA510D | https://addp.vn/chinh-sach-thanh-toan | browser / rendered_html | evidence/html/0c8d7a240125a53f.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:45:02.107Z | Unknown / not recorded |
| EVD-CA829499836A8B5F | https://addp.vn/chinh-sach-thanh-toan | seo / rendered_seo | evidence/seo/0c8d7a240125a53f.mobile.render-stabilized-v1.json | 2026-09-27T23:45:02.187Z | Unknown / not recorded |
| EVD-333353E5AC20DC74 | https://addp.vn/chinh-sach-thanh-toan | structured-data / jsonld | evidence/schema/0c8d7a240125a53f.mobile.render-stabilized-v1.json | 2026-09-27T23:45:02.188Z | Unknown / not recorded |
| EVD-BA3477C809CB3419 | https://addp.vn/chinh-sach-thanh-toan | dom / visible_controls | evidence/dom/0c8d7a240125a53f.mobile.render-stabilized-v1.json | 2026-09-27T23:45:02.342Z | Unknown / not recorded |
| EVD-2BC0AB1BD93A198A | https://addp.vn/chinh-sach-thanh-toan | analytics / tracking_signals | evidence/analytics/0c8d7a240125a53f.mobile.render-stabilized-v1.json | 2026-09-27T23:45:02.343Z | Unknown / not recorded |
| EVD-0581462E290EDEBD | https://addp.vn/chinh-sach-thanh-toan | screenshot / stabilized_viewport_screenshot | evidence/screenshots/0c8d7a240125a53f.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:45:02.376Z | Unknown / not recorded |
| EVD-563D26E4913D8518 | https://addp.vn/chinh-sach-thanh-toan | screenshot / stabilized_full_screenshot | evidence/screenshots/0c8d7a240125a53f.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:45:02.466Z | Unknown / not recorded |
| EVD-8DC5D2A1323EB75D | https://addp.vn/chinh-sach-thanh-toan | axe / accessibility | evidence/accessibility/0c8d7a240125a53f.mobile.render-stabilized-v1.json | 2026-09-27T23:45:08.089Z | Unknown / not recorded |
| EVD-44BE424703CA5FE2 | https://addp.vn/chinh-sach-thanh-toan | performance / lab_metrics | evidence/lighthouse/0c8d7a240125a53f.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:45:08.107Z | Unknown / not recorded |
| EVD-67A2E23298A78E2B | https://addp.vn/chinh-sach-thanh-toan | network / network_log | evidence/network/0c8d7a240125a53f.mobile.render-stabilized-v1.json | 2026-09-27T23:45:08.110Z | Unknown / not recorded |
| EVD-AAE110F7EE39197E | https://addp.vn/chinh-sach-thanh-toan | console / console_log | evidence/console/0c8d7a240125a53f.mobile.render-stabilized-v1.json | 2026-09-27T23:45:08.110Z | Unknown / not recorded |
| EVD-5FE8C7DFE5FA5789 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | raw-http / raw_html | evidence/html/180692c5706f9ac0.render-stabilized-v1.raw.html | 2026-09-27T23:45:09.005Z | Unknown / not recorded |
| EVD-32A8C09E57279E76 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | seo / raw_seo | evidence/seo/180692c5706f9ac0.render-stabilized-v1.raw.json | 2026-09-27T23:45:09.036Z | Unknown / not recorded |
| EVD-E8D6EEB10A690526 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | screenshot / initial_viewport_screenshot | evidence/screenshots/180692c5706f9ac0.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:45:28.884Z | Unknown / not recorded |
| EVD-9878CEBDB12D4A7D | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | screenshot / initial_full_screenshot | evidence/screenshots/180692c5706f9ac0.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:45:28.987Z | Unknown / not recorded |
| EVD-5844EC8EE161FBB5 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | browser / render_stabilization | evidence/render/180692c5706f9ac0.desktop.render-stabilized-v1.json | 2026-09-27T23:45:29.633Z | Unknown / not recorded |
| EVD-CE8369B9DDC5BE91 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | browser / rendered_html | evidence/html/180692c5706f9ac0.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:45:29.645Z | Unknown / not recorded |
| EVD-FFE6703E52822430 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | seo / rendered_seo | evidence/seo/180692c5706f9ac0.desktop.render-stabilized-v1.json | 2026-09-27T23:45:29.710Z | Unknown / not recorded |
| EVD-7B03B8F99DBF45D7 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | structured-data / jsonld | evidence/schema/180692c5706f9ac0.desktop.render-stabilized-v1.json | 2026-09-27T23:45:29.712Z | Unknown / not recorded |
| EVD-BD47CFEBB35BB95F | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | dom / visible_controls | evidence/dom/180692c5706f9ac0.desktop.render-stabilized-v1.json | 2026-09-27T23:45:29.829Z | Unknown / not recorded |
| EVD-FC669DB88E50A0C1 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | analytics / tracking_signals | evidence/analytics/180692c5706f9ac0.desktop.render-stabilized-v1.json | 2026-09-27T23:45:29.830Z | Unknown / not recorded |
| EVD-C99E2C6A78DD0470 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | screenshot / stabilized_viewport_screenshot | evidence/screenshots/180692c5706f9ac0.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:45:29.891Z | Unknown / not recorded |
| EVD-9B5CE54A089DC7FD | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | screenshot / stabilized_full_screenshot | evidence/screenshots/180692c5706f9ac0.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:45:29.963Z | Unknown / not recorded |
| EVD-CECFD5F25F68576E | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | axe / accessibility | evidence/accessibility/180692c5706f9ac0.desktop.render-stabilized-v1.json | 2026-09-27T23:45:35.629Z | Unknown / not recorded |
| EVD-D36216640F06E233 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | performance / lab_metrics | evidence/lighthouse/180692c5706f9ac0.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:45:35.652Z | Unknown / not recorded |
| EVD-F8A59667623BE5ED | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | network / network_log | evidence/network/180692c5706f9ac0.desktop.render-stabilized-v1.json | 2026-09-27T23:45:35.655Z | Unknown / not recorded |
| EVD-070E1964DD1BBAB3 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | console / console_log | evidence/console/180692c5706f9ac0.desktop.render-stabilized-v1.json | 2026-09-27T23:45:35.655Z | Unknown / not recorded |
| EVD-E3844F58EACF84FD | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | screenshot / initial_viewport_screenshot | evidence/screenshots/180692c5706f9ac0.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:45:55.057Z | Unknown / not recorded |
| EVD-1F73204FBA4C5C53 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | screenshot / initial_full_screenshot | evidence/screenshots/180692c5706f9ac0.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:45:55.176Z | Unknown / not recorded |
| EVD-4CAC27B9A78B1C35 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | browser / render_stabilization | evidence/render/180692c5706f9ac0.mobile.render-stabilized-v1.json | 2026-09-27T23:45:56.112Z | Unknown / not recorded |
| EVD-81570A48C7A62B23 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | browser / rendered_html | evidence/html/180692c5706f9ac0.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:45:56.123Z | Unknown / not recorded |
| EVD-FCDE71046FE7505D | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | seo / rendered_seo | evidence/seo/180692c5706f9ac0.mobile.render-stabilized-v1.json | 2026-09-27T23:45:56.192Z | Unknown / not recorded |
| EVD-CD367AA5B018DD03 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | structured-data / jsonld | evidence/schema/180692c5706f9ac0.mobile.render-stabilized-v1.json | 2026-09-27T23:45:56.193Z | Unknown / not recorded |
| EVD-0C043FC771AEC75F | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | dom / visible_controls | evidence/dom/180692c5706f9ac0.mobile.render-stabilized-v1.json | 2026-09-27T23:45:56.298Z | Unknown / not recorded |
| EVD-7DB0677115A182EB | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | analytics / tracking_signals | evidence/analytics/180692c5706f9ac0.mobile.render-stabilized-v1.json | 2026-09-27T23:45:56.299Z | Unknown / not recorded |
| EVD-4F1ED5D8670F90C0 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | screenshot / stabilized_viewport_screenshot | evidence/screenshots/180692c5706f9ac0.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:45:56.353Z | Unknown / not recorded |
| EVD-16F89C26A1A018B8 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | screenshot / stabilized_full_screenshot | evidence/screenshots/180692c5706f9ac0.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:45:56.426Z | Unknown / not recorded |
| EVD-A5CF57A0B05D83B8 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | axe / accessibility | evidence/accessibility/180692c5706f9ac0.mobile.render-stabilized-v1.json | 2026-09-27T23:46:01.997Z | Unknown / not recorded |
| EVD-491B14F194FB19C0 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | performance / lab_metrics | evidence/lighthouse/180692c5706f9ac0.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:46:02.015Z | Unknown / not recorded |
| EVD-DAF2D35715871EC1 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | network / network_log | evidence/network/180692c5706f9ac0.mobile.render-stabilized-v1.json | 2026-09-27T23:46:02.019Z | Unknown / not recorded |
| EVD-0C6420F3F5F6E4DF | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | console / console_log | evidence/console/180692c5706f9ac0.mobile.render-stabilized-v1.json | 2026-09-27T23:46:02.019Z | Unknown / not recorded |
| EVD-6DAF5BC46E00E7C3 | https://addp.vn/contact/ | raw-http / raw_html | evidence/html/38cf47871e33fcbf.render-stabilized-v1.raw.html | 2026-09-27T23:46:03.599Z | Unknown / not recorded |
| EVD-D5A0A9809175441E | https://addp.vn/contact/ | seo / raw_seo | evidence/seo/38cf47871e33fcbf.render-stabilized-v1.raw.json | 2026-09-27T23:46:03.631Z | Unknown / not recorded |
| EVD-A3B764B9141A89B9 | https://addp.vn/contact/ | screenshot / initial_viewport_screenshot | evidence/screenshots/38cf47871e33fcbf.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:46:23.825Z | Unknown / not recorded |
| EVD-B3F1272973F61982 | https://addp.vn/contact/ | screenshot / initial_full_screenshot | evidence/screenshots/38cf47871e33fcbf.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:46:24.008Z | Unknown / not recorded |
| EVD-3CA255241CE9CF18 | https://addp.vn/contact/ | browser / render_stabilization | evidence/render/38cf47871e33fcbf.desktop.render-stabilized-v1.json | 2026-09-27T23:46:24.751Z | Unknown / not recorded |
| EVD-47ECD74DE3F40E85 | https://addp.vn/contact/ | browser / rendered_html | evidence/html/38cf47871e33fcbf.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:46:24.763Z | Unknown / not recorded |
| EVD-DABD1B8750FCE883 | https://addp.vn/contact/ | seo / rendered_seo | evidence/seo/38cf47871e33fcbf.desktop.render-stabilized-v1.json | 2026-09-27T23:46:24.841Z | Unknown / not recorded |
| EVD-AEA9090808FC6BD3 | https://addp.vn/contact/ | structured-data / jsonld | evidence/schema/38cf47871e33fcbf.desktop.render-stabilized-v1.json | 2026-09-27T23:46:24.842Z | Unknown / not recorded |
| EVD-D31F3CF9C922A2EF | https://addp.vn/contact/ | dom / visible_controls | evidence/dom/38cf47871e33fcbf.desktop.render-stabilized-v1.json | 2026-09-27T23:46:24.978Z | Unknown / not recorded |
| EVD-71E6663CB0922BE3 | https://addp.vn/contact/ | analytics / tracking_signals | evidence/analytics/38cf47871e33fcbf.desktop.render-stabilized-v1.json | 2026-09-27T23:46:24.980Z | Unknown / not recorded |
| EVD-AE5235ABCF1DEFF9 | https://addp.vn/contact/ | screenshot / stabilized_viewport_screenshot | evidence/screenshots/38cf47871e33fcbf.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:46:25.055Z | Unknown / not recorded |
| EVD-7C5CF15D3E1587C8 | https://addp.vn/contact/ | screenshot / stabilized_full_screenshot | evidence/screenshots/38cf47871e33fcbf.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:46:25.173Z | Unknown / not recorded |
| EVD-7FB49DEB7967A45C | https://addp.vn/contact/ | axe / accessibility | evidence/accessibility/38cf47871e33fcbf.desktop.render-stabilized-v1.json | 2026-09-27T23:46:30.971Z | Unknown / not recorded |
| EVD-272E164325FE9291 | https://addp.vn/contact/ | performance / lab_metrics | evidence/lighthouse/38cf47871e33fcbf.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:46:31.004Z | Unknown / not recorded |
| EVD-FD095BB5C52DD0DF | https://addp.vn/contact/ | network / network_log | evidence/network/38cf47871e33fcbf.desktop.render-stabilized-v1.json | 2026-09-27T23:46:31.007Z | Unknown / not recorded |
| EVD-8C5099292E7EE0E1 | https://addp.vn/contact/ | console / console_log | evidence/console/38cf47871e33fcbf.desktop.render-stabilized-v1.json | 2026-09-27T23:46:31.007Z | Unknown / not recorded |
| EVD-59A883B19638DF23 | https://addp.vn/contact/ | screenshot / initial_viewport_screenshot | evidence/screenshots/38cf47871e33fcbf.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:46:50.780Z | Unknown / not recorded |
| EVD-64317A5F0FF00CBD | https://addp.vn/contact/ | screenshot / initial_full_screenshot | evidence/screenshots/38cf47871e33fcbf.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:46:50.958Z | Unknown / not recorded |
| EVD-78FB869F1C577C62 | https://addp.vn/contact/ | browser / render_stabilization | evidence/render/38cf47871e33fcbf.mobile.render-stabilized-v1.json | 2026-09-27T23:46:52.053Z | Unknown / not recorded |
| EVD-F5AEEFD3E4DC7328 | https://addp.vn/contact/ | browser / rendered_html | evidence/html/38cf47871e33fcbf.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:46:52.072Z | Unknown / not recorded |
| EVD-05E9ECAE19EA09CB | https://addp.vn/contact/ | seo / rendered_seo | evidence/seo/38cf47871e33fcbf.mobile.render-stabilized-v1.json | 2026-09-27T23:46:52.137Z | Unknown / not recorded |
| EVD-910CC959A0E76F3F | https://addp.vn/contact/ | structured-data / jsonld | evidence/schema/38cf47871e33fcbf.mobile.render-stabilized-v1.json | 2026-09-27T23:46:52.138Z | Unknown / not recorded |
| EVD-F7E9010A787D47B8 | https://addp.vn/contact/ | dom / visible_controls | evidence/dom/38cf47871e33fcbf.mobile.render-stabilized-v1.json | 2026-09-27T23:46:52.309Z | Unknown / not recorded |
| EVD-D688220263120514 | https://addp.vn/contact/ | analytics / tracking_signals | evidence/analytics/38cf47871e33fcbf.mobile.render-stabilized-v1.json | 2026-09-27T23:46:52.310Z | Unknown / not recorded |
| EVD-0888A25B9930135C | https://addp.vn/contact/ | screenshot / stabilized_viewport_screenshot | evidence/screenshots/38cf47871e33fcbf.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:46:52.349Z | Unknown / not recorded |
| EVD-2BB16D4E045CE751 | https://addp.vn/contact/ | screenshot / stabilized_full_screenshot | evidence/screenshots/38cf47871e33fcbf.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:46:52.426Z | Unknown / not recorded |
| EVD-560E1741C8ABEA70 | https://addp.vn/contact/ | axe / accessibility | evidence/accessibility/38cf47871e33fcbf.mobile.render-stabilized-v1.json | 2026-09-27T23:46:58.276Z | Unknown / not recorded |
| EVD-F3D3B59695BB46C2 | https://addp.vn/contact/ | performance / lab_metrics | evidence/lighthouse/38cf47871e33fcbf.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:46:58.296Z | Unknown / not recorded |
| EVD-5030C1826ED6D713 | https://addp.vn/contact/ | network / network_log | evidence/network/38cf47871e33fcbf.mobile.render-stabilized-v1.json | 2026-09-27T23:46:58.299Z | Unknown / not recorded |
| EVD-F4E1E5260B65AD5E | https://addp.vn/contact/ | console / console_log | evidence/console/38cf47871e33fcbf.mobile.render-stabilized-v1.json | 2026-09-27T23:46:58.299Z | Unknown / not recorded |
| EVD-E5F4713B1785F415 | https://addp.vn/gioi-thieu/ | raw-http / raw_html | evidence/html/89d3ac41d651a1ea.render-stabilized-v1.raw.html | 2026-09-27T23:47:00.130Z | Unknown / not recorded |
| EVD-03316E722F23363A | https://addp.vn/gioi-thieu/ | seo / raw_seo | evidence/seo/89d3ac41d651a1ea.render-stabilized-v1.raw.json | 2026-09-27T23:47:00.152Z | Unknown / not recorded |
| EVD-86690CC4B48E995E | https://addp.vn/gioi-thieu/ | screenshot / initial_viewport_screenshot | evidence/screenshots/89d3ac41d651a1ea.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:47:19.892Z | Unknown / not recorded |
| EVD-089128D6A5FF5ACD | https://addp.vn/gioi-thieu/ | screenshot / initial_full_screenshot | evidence/screenshots/89d3ac41d651a1ea.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:47:20.104Z | Unknown / not recorded |
| EVD-5AC0B287FC3EEC71 | https://addp.vn/gioi-thieu/ | browser / render_stabilization | evidence/render/89d3ac41d651a1ea.desktop.render-stabilized-v1.json | 2026-09-27T23:47:20.846Z | Unknown / not recorded |
| EVD-141831985AB1B8FA | https://addp.vn/gioi-thieu/ | browser / rendered_html | evidence/html/89d3ac41d651a1ea.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:47:20.858Z | Unknown / not recorded |
| EVD-60F0C41806291250 | https://addp.vn/gioi-thieu/ | seo / rendered_seo | evidence/seo/89d3ac41d651a1ea.desktop.render-stabilized-v1.json | 2026-09-27T23:47:20.881Z | Unknown / not recorded |
| EVD-192F4B8AB09093F4 | https://addp.vn/gioi-thieu/ | structured-data / jsonld | evidence/schema/89d3ac41d651a1ea.desktop.render-stabilized-v1.json | 2026-09-27T23:47:20.882Z | Unknown / not recorded |
| EVD-25FE7653442ACFBB | https://addp.vn/gioi-thieu/ | dom / visible_controls | evidence/dom/89d3ac41d651a1ea.desktop.render-stabilized-v1.json | 2026-09-27T23:47:21.008Z | Unknown / not recorded |
| EVD-4187AB0B7B2C61C6 | https://addp.vn/gioi-thieu/ | analytics / tracking_signals | evidence/analytics/89d3ac41d651a1ea.desktop.render-stabilized-v1.json | 2026-09-27T23:47:21.009Z | Unknown / not recorded |
| EVD-9B1CB802240C5C42 | https://addp.vn/gioi-thieu/ | screenshot / stabilized_viewport_screenshot | evidence/screenshots/89d3ac41d651a1ea.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:47:21.068Z | Unknown / not recorded |
| EVD-C438F0C2E058111C | https://addp.vn/gioi-thieu/ | screenshot / stabilized_full_screenshot | evidence/screenshots/89d3ac41d651a1ea.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:47:21.209Z | Unknown / not recorded |
| EVD-CE9187710A4ABF8B | https://addp.vn/gioi-thieu/ | axe / accessibility | evidence/accessibility/89d3ac41d651a1ea.desktop.render-stabilized-v1.json | 2026-09-27T23:47:26.905Z | Unknown / not recorded |
| EVD-7A2A71FCE09C30FB | https://addp.vn/gioi-thieu/ | performance / lab_metrics | evidence/lighthouse/89d3ac41d651a1ea.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:47:26.924Z | Unknown / not recorded |
| EVD-D9DEDE4318F1115D | https://addp.vn/gioi-thieu/ | network / network_log | evidence/network/89d3ac41d651a1ea.desktop.render-stabilized-v1.json | 2026-09-27T23:47:26.927Z | Unknown / not recorded |
| EVD-2EEB13861B4546FE | https://addp.vn/gioi-thieu/ | console / console_log | evidence/console/89d3ac41d651a1ea.desktop.render-stabilized-v1.json | 2026-09-27T23:47:26.928Z | Unknown / not recorded |
| EVD-B42DC681B13F23EB | https://addp.vn/gioi-thieu/ | screenshot / initial_viewport_screenshot | evidence/screenshots/89d3ac41d651a1ea.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:47:46.439Z | Unknown / not recorded |
| EVD-D1C415F83E4F8EBC | https://addp.vn/gioi-thieu/ | screenshot / initial_full_screenshot | evidence/screenshots/89d3ac41d651a1ea.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:47:46.581Z | Unknown / not recorded |
| EVD-DA38CF6D656D7627 | https://addp.vn/gioi-thieu/ | browser / render_stabilization | evidence/render/89d3ac41d651a1ea.mobile.render-stabilized-v1.json | 2026-09-27T23:47:47.673Z | Unknown / not recorded |
| EVD-086438FB7986148C | https://addp.vn/gioi-thieu/ | browser / rendered_html | evidence/html/89d3ac41d651a1ea.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:47:47.687Z | Unknown / not recorded |
| EVD-C30669C80FB32683 | https://addp.vn/gioi-thieu/ | seo / rendered_seo | evidence/seo/89d3ac41d651a1ea.mobile.render-stabilized-v1.json | 2026-09-27T23:47:47.765Z | Unknown / not recorded |
| EVD-ABD5089DD9363218 | https://addp.vn/gioi-thieu/ | structured-data / jsonld | evidence/schema/89d3ac41d651a1ea.mobile.render-stabilized-v1.json | 2026-09-27T23:47:47.766Z | Unknown / not recorded |
| EVD-0469C44FADF1A212 | https://addp.vn/gioi-thieu/ | dom / visible_controls | evidence/dom/89d3ac41d651a1ea.mobile.render-stabilized-v1.json | 2026-09-27T23:47:47.877Z | Unknown / not recorded |
| EVD-20A80C3C1A23FB2D | https://addp.vn/gioi-thieu/ | analytics / tracking_signals | evidence/analytics/89d3ac41d651a1ea.mobile.render-stabilized-v1.json | 2026-09-27T23:47:47.879Z | Unknown / not recorded |
| EVD-AEA9A12E42840CF1 | https://addp.vn/gioi-thieu/ | screenshot / stabilized_viewport_screenshot | evidence/screenshots/89d3ac41d651a1ea.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:47:47.927Z | Unknown / not recorded |
| EVD-C62C135A2B4B47BD | https://addp.vn/gioi-thieu/ | screenshot / stabilized_full_screenshot | evidence/screenshots/89d3ac41d651a1ea.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:47:48.020Z | Unknown / not recorded |
| EVD-8425236A9AA949D1 | https://addp.vn/gioi-thieu/ | axe / accessibility | evidence/accessibility/89d3ac41d651a1ea.mobile.render-stabilized-v1.json | 2026-09-27T23:47:53.613Z | Unknown / not recorded |
| EVD-7E131910D6CDA0F7 | https://addp.vn/gioi-thieu/ | performance / lab_metrics | evidence/lighthouse/89d3ac41d651a1ea.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:47:53.629Z | Unknown / not recorded |
| EVD-C74D7471F6DB195F | https://addp.vn/gioi-thieu/ | network / network_log | evidence/network/89d3ac41d651a1ea.mobile.render-stabilized-v1.json | 2026-09-27T23:47:53.643Z | Unknown / not recorded |
| EVD-10AF7F3A5687BC82 | https://addp.vn/gioi-thieu/ | console / console_log | evidence/console/89d3ac41d651a1ea.mobile.render-stabilized-v1.json | 2026-09-27T23:47:53.643Z | Unknown / not recorded |
| EVD-D9E9D91FCB0FB7F7 | https://addp.vn/sua-dinh-duong.html | raw-http / raw_html | evidence/html/2c478556874d1edb.render-stabilized-v1.raw.html | 2026-09-27T23:47:54.763Z | Unknown / not recorded |
| EVD-9B976C72D5C6720F | https://addp.vn/sua-dinh-duong.html | seo / raw_seo | evidence/seo/2c478556874d1edb.render-stabilized-v1.raw.json | 2026-09-27T23:47:54.794Z | Unknown / not recorded |
| EVD-C169F892CAB33E9B | https://addp.vn/sua-dinh-duong.html | screenshot / initial_viewport_screenshot | evidence/screenshots/2c478556874d1edb.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:48:15.293Z | Unknown / not recorded |
| EVD-C912ECD3355AF716 | https://addp.vn/sua-dinh-duong.html | screenshot / initial_full_screenshot | evidence/screenshots/2c478556874d1edb.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:48:15.610Z | Unknown / not recorded |
| EVD-512021E1774F05FC | https://addp.vn/sua-dinh-duong.html | browser / render_stabilization | evidence/render/2c478556874d1edb.desktop.render-stabilized-v1.json | 2026-09-27T23:48:16.932Z | Unknown / not recorded |
| EVD-0F6290220F6FCC11 | https://addp.vn/sua-dinh-duong.html | browser / rendered_html | evidence/html/2c478556874d1edb.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:48:16.946Z | Unknown / not recorded |
| EVD-A358414AEA018603 | https://addp.vn/sua-dinh-duong.html | seo / rendered_seo | evidence/seo/2c478556874d1edb.desktop.render-stabilized-v1.json | 2026-09-27T23:48:17.011Z | Unknown / not recorded |
| EVD-A43A3D07E3D9DD24 | https://addp.vn/sua-dinh-duong.html | structured-data / jsonld | evidence/schema/2c478556874d1edb.desktop.render-stabilized-v1.json | 2026-09-27T23:48:17.012Z | Unknown / not recorded |
| EVD-9129679255D8F64F | https://addp.vn/sua-dinh-duong.html | dom / visible_controls | evidence/dom/2c478556874d1edb.desktop.render-stabilized-v1.json | 2026-09-27T23:48:17.180Z | Unknown / not recorded |
| EVD-8DEAF5C2A81020FF | https://addp.vn/sua-dinh-duong.html | analytics / tracking_signals | evidence/analytics/2c478556874d1edb.desktop.render-stabilized-v1.json | 2026-09-27T23:48:17.181Z | Unknown / not recorded |
| EVD-0EAEC5DEAE31B4D3 | https://addp.vn/sua-dinh-duong.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/2c478556874d1edb.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:48:17.339Z | Unknown / not recorded |
| EVD-240556FCB8CFEF2B | https://addp.vn/sua-dinh-duong.html | screenshot / stabilized_full_screenshot | evidence/screenshots/2c478556874d1edb.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:48:17.723Z | Unknown / not recorded |
| EVD-C624A7B9400F6E67 | https://addp.vn/sua-dinh-duong.html | axe / accessibility | evidence/accessibility/2c478556874d1edb.desktop.render-stabilized-v1.json | 2026-09-27T23:48:23.701Z | Unknown / not recorded |
| EVD-A75F462C7219FFF1 | https://addp.vn/sua-dinh-duong.html | performance / lab_metrics | evidence/lighthouse/2c478556874d1edb.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:48:23.723Z | Unknown / not recorded |
| EVD-1510647B65F54DFB | https://addp.vn/sua-dinh-duong.html | network / network_log | evidence/network/2c478556874d1edb.desktop.render-stabilized-v1.json | 2026-09-27T23:48:23.727Z | Unknown / not recorded |
| EVD-53011A4696CD291D | https://addp.vn/sua-dinh-duong.html | console / console_log | evidence/console/2c478556874d1edb.desktop.render-stabilized-v1.json | 2026-09-27T23:48:23.727Z | Unknown / not recorded |
| EVD-5DDDF07862AAF118 | https://addp.vn/sua-dinh-duong.html | screenshot / initial_viewport_screenshot | evidence/screenshots/2c478556874d1edb.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:48:43.634Z | Unknown / not recorded |
| EVD-4BE5C519E776A730 | https://addp.vn/sua-dinh-duong.html | screenshot / initial_full_screenshot | evidence/screenshots/2c478556874d1edb.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:48:43.771Z | Unknown / not recorded |
| EVD-93BB1CA9FAE44FAF | https://addp.vn/sua-dinh-duong.html | browser / render_stabilization | evidence/render/2c478556874d1edb.mobile.render-stabilized-v1.json | 2026-09-27T23:48:45.079Z | Unknown / not recorded |
| EVD-C53913640AAB49F6 | https://addp.vn/sua-dinh-duong.html | browser / rendered_html | evidence/html/2c478556874d1edb.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:48:45.097Z | Unknown / not recorded |
| EVD-88CDC19E40997232 | https://addp.vn/sua-dinh-duong.html | seo / rendered_seo | evidence/seo/2c478556874d1edb.mobile.render-stabilized-v1.json | 2026-09-27T23:48:45.185Z | Unknown / not recorded |
| EVD-4E16754D7D247369 | https://addp.vn/sua-dinh-duong.html | structured-data / jsonld | evidence/schema/2c478556874d1edb.mobile.render-stabilized-v1.json | 2026-09-27T23:48:45.186Z | Unknown / not recorded |
| EVD-B42E75D4A1F556B6 | https://addp.vn/sua-dinh-duong.html | dom / visible_controls | evidence/dom/2c478556874d1edb.mobile.render-stabilized-v1.json | 2026-09-27T23:48:45.322Z | Unknown / not recorded |
| EVD-3BA99A962B21F104 | https://addp.vn/sua-dinh-duong.html | analytics / tracking_signals | evidence/analytics/2c478556874d1edb.mobile.render-stabilized-v1.json | 2026-09-27T23:48:45.324Z | Unknown / not recorded |
| EVD-C714797EAE48D11F | https://addp.vn/sua-dinh-duong.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/2c478556874d1edb.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:48:45.368Z | Unknown / not recorded |
| EVD-69C2FDDCE9D86665 | https://addp.vn/sua-dinh-duong.html | screenshot / stabilized_full_screenshot | evidence/screenshots/2c478556874d1edb.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:48:45.494Z | Unknown / not recorded |
| EVD-0FC1306B181894B5 | https://addp.vn/sua-dinh-duong.html | axe / accessibility | evidence/accessibility/2c478556874d1edb.mobile.render-stabilized-v1.json | 2026-09-27T23:48:51.324Z | Unknown / not recorded |
| EVD-0526B96E017F144B | https://addp.vn/sua-dinh-duong.html | performance / lab_metrics | evidence/lighthouse/2c478556874d1edb.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:48:51.343Z | Unknown / not recorded |
| EVD-AA41773B0981FC42 | https://addp.vn/sua-dinh-duong.html | network / network_log | evidence/network/2c478556874d1edb.mobile.render-stabilized-v1.json | 2026-09-27T23:48:51.346Z | Unknown / not recorded |
| EVD-477D9CE642A2D2C5 | https://addp.vn/sua-dinh-duong.html | console / console_log | evidence/console/2c478556874d1edb.mobile.render-stabilized-v1.json | 2026-09-27T23:48:51.346Z | Unknown / not recorded |
| EVD-A7992C55E2B98C3B | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | raw-http / raw_html | evidence/html/508a000452c9f248.render-stabilized-v1.raw.html | 2026-09-27T23:48:52.485Z | Unknown / not recorded |
| EVD-1EB28E85A79CA849 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | seo / raw_seo | evidence/seo/508a000452c9f248.render-stabilized-v1.raw.json | 2026-09-27T23:48:52.516Z | Unknown / not recorded |
| EVD-DE95BD2306BE41B4 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | screenshot / initial_viewport_screenshot | evidence/screenshots/508a000452c9f248.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:49:12.259Z | Unknown / not recorded |
| EVD-17D52CB73FBAD6DF | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | screenshot / initial_full_screenshot | evidence/screenshots/508a000452c9f248.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:49:12.622Z | Unknown / not recorded |
| EVD-E43CA4F7ED3B8366 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | browser / render_stabilization | evidence/render/508a000452c9f248.desktop.render-stabilized-v1.json | 2026-09-27T23:49:13.555Z | Unknown / not recorded |
| EVD-480B4F020653E59B | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | browser / rendered_html | evidence/html/508a000452c9f248.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:49:13.568Z | Unknown / not recorded |
| EVD-DE69E2BE89596E11 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | seo / rendered_seo | evidence/seo/508a000452c9f248.desktop.render-stabilized-v1.json | 2026-09-27T23:49:13.650Z | Unknown / not recorded |
| EVD-648098E5C9688497 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | structured-data / jsonld | evidence/schema/508a000452c9f248.desktop.render-stabilized-v1.json | 2026-09-27T23:49:13.651Z | Unknown / not recorded |
| EVD-1D64DB4C39A1F32E | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | dom / visible_controls | evidence/dom/508a000452c9f248.desktop.render-stabilized-v1.json | 2026-09-27T23:49:13.838Z | Unknown / not recorded |
| EVD-AC27AC963B401ED1 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | analytics / tracking_signals | evidence/analytics/508a000452c9f248.desktop.render-stabilized-v1.json | 2026-09-27T23:49:13.840Z | Unknown / not recorded |
| EVD-13E22E08751DC3DA | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/508a000452c9f248.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:49:13.971Z | Unknown / not recorded |
| EVD-25689ED499AFCE44 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | screenshot / stabilized_full_screenshot | evidence/screenshots/508a000452c9f248.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:49:14.311Z | Unknown / not recorded |
| EVD-6B649F62A9F5ED71 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | axe / accessibility | evidence/accessibility/508a000452c9f248.desktop.render-stabilized-v1.json | 2026-09-27T23:49:20.243Z | Unknown / not recorded |
| EVD-3381FEA6B3CACD5A | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | performance / lab_metrics | evidence/lighthouse/508a000452c9f248.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:49:20.260Z | Unknown / not recorded |
| EVD-4A9E5E5371C071E3 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | network / network_log | evidence/network/508a000452c9f248.desktop.render-stabilized-v1.json | 2026-09-27T23:49:20.264Z | Unknown / not recorded |
| EVD-395386D53057DF42 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | console / console_log | evidence/console/508a000452c9f248.desktop.render-stabilized-v1.json | 2026-09-27T23:49:20.264Z | Unknown / not recorded |
| EVD-C0CA934FFC843B71 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | screenshot / initial_viewport_screenshot | evidence/screenshots/508a000452c9f248.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:49:39.440Z | Unknown / not recorded |
| EVD-DA9A5394D0B959B4 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | screenshot / initial_full_screenshot | evidence/screenshots/508a000452c9f248.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:49:39.632Z | Unknown / not recorded |
| EVD-92289C71773BF4CC | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | browser / render_stabilization | evidence/render/508a000452c9f248.mobile.render-stabilized-v1.json | 2026-09-27T23:49:40.736Z | Unknown / not recorded |
| EVD-42275664D53D6C91 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | browser / rendered_html | evidence/html/508a000452c9f248.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:49:40.750Z | Unknown / not recorded |
| EVD-9B0D871A40925AEA | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | seo / rendered_seo | evidence/seo/508a000452c9f248.mobile.render-stabilized-v1.json | 2026-09-27T23:49:40.808Z | Unknown / not recorded |
| EVD-7D1FC203C0B2B482 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | structured-data / jsonld | evidence/schema/508a000452c9f248.mobile.render-stabilized-v1.json | 2026-09-27T23:49:40.809Z | Unknown / not recorded |
| EVD-0ADF8EC283D2EA91 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | dom / visible_controls | evidence/dom/508a000452c9f248.mobile.render-stabilized-v1.json | 2026-09-27T23:49:40.975Z | Unknown / not recorded |
| EVD-101254E84FFEA1F5 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | analytics / tracking_signals | evidence/analytics/508a000452c9f248.mobile.render-stabilized-v1.json | 2026-09-27T23:49:40.977Z | Unknown / not recorded |
| EVD-DAF27621BB561E27 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/508a000452c9f248.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:49:41.031Z | Unknown / not recorded |
| EVD-408A82ACB54AB2D8 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | screenshot / stabilized_full_screenshot | evidence/screenshots/508a000452c9f248.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:49:41.130Z | Unknown / not recorded |
| EVD-F0058FB2504EC123 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | axe / accessibility | evidence/accessibility/508a000452c9f248.mobile.render-stabilized-v1.json | 2026-09-27T23:49:46.914Z | Unknown / not recorded |
| EVD-E9525EDC601E6EAF | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | performance / lab_metrics | evidence/lighthouse/508a000452c9f248.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:49:46.933Z | Unknown / not recorded |
| EVD-4E6E46401C6D3DB7 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | network / network_log | evidence/network/508a000452c9f248.mobile.render-stabilized-v1.json | 2026-09-27T23:49:46.947Z | Unknown / not recorded |
| EVD-8970C071BBA38BB4 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | console / console_log | evidence/console/508a000452c9f248.mobile.render-stabilized-v1.json | 2026-09-27T23:49:46.947Z | Unknown / not recorded |
| EVD-868C690C92C8CE76 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | raw-http / raw_html | evidence/html/abab69424c4844fc.render-stabilized-v1.raw.html | 2026-09-27T23:49:47.868Z | Unknown / not recorded |
| EVD-92CFD7B33C2260C2 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | seo / raw_seo | evidence/seo/abab69424c4844fc.render-stabilized-v1.raw.json | 2026-09-27T23:49:47.890Z | Unknown / not recorded |
| EVD-445DA0E144604EE4 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | screenshot / initial_viewport_screenshot | evidence/screenshots/abab69424c4844fc.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:50:07.186Z | Unknown / not recorded |
| EVD-19E3B84081240E64 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | screenshot / initial_full_screenshot | evidence/screenshots/abab69424c4844fc.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:50:07.412Z | Unknown / not recorded |
| EVD-95E1A031B1192CDF | https://addp.vn/sua-dinh-duong/sua-tre-em.html | browser / render_stabilization | evidence/render/abab69424c4844fc.desktop.render-stabilized-v1.json | 2026-09-27T23:50:08.140Z | Unknown / not recorded |
| EVD-22DBFA0B856729E6 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | browser / rendered_html | evidence/html/abab69424c4844fc.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:50:08.155Z | Unknown / not recorded |
| EVD-231A200BA46D7640 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | seo / rendered_seo | evidence/seo/abab69424c4844fc.desktop.render-stabilized-v1.json | 2026-09-27T23:50:08.205Z | Unknown / not recorded |
| EVD-E2A61F8FE30DC2B2 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | structured-data / jsonld | evidence/schema/abab69424c4844fc.desktop.render-stabilized-v1.json | 2026-09-27T23:50:08.206Z | Unknown / not recorded |
| EVD-D4848839568679A3 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | dom / visible_controls | evidence/dom/abab69424c4844fc.desktop.render-stabilized-v1.json | 2026-09-27T23:50:08.324Z | Unknown / not recorded |
| EVD-9473151A36BFDB23 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | analytics / tracking_signals | evidence/analytics/abab69424c4844fc.desktop.render-stabilized-v1.json | 2026-09-27T23:50:08.326Z | Unknown / not recorded |
| EVD-AC3592A582BBA0E4 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/abab69424c4844fc.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:50:08.421Z | Unknown / not recorded |
| EVD-F581C09CD5B861F5 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | screenshot / stabilized_full_screenshot | evidence/screenshots/abab69424c4844fc.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:50:08.568Z | Unknown / not recorded |
| EVD-3983D677DCCD08B4 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | axe / accessibility | evidence/accessibility/abab69424c4844fc.desktop.render-stabilized-v1.json | 2026-09-27T23:50:14.391Z | Unknown / not recorded |
| EVD-BBCB07EDFA2696EF | https://addp.vn/sua-dinh-duong/sua-tre-em.html | performance / lab_metrics | evidence/lighthouse/abab69424c4844fc.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:50:14.410Z | Unknown / not recorded |
| EVD-943E7A4C67F88D6C | https://addp.vn/sua-dinh-duong/sua-tre-em.html | network / network_log | evidence/network/abab69424c4844fc.desktop.render-stabilized-v1.json | 2026-09-27T23:50:14.424Z | Unknown / not recorded |
| EVD-60E482F43EA43A9D | https://addp.vn/sua-dinh-duong/sua-tre-em.html | console / console_log | evidence/console/abab69424c4844fc.desktop.render-stabilized-v1.json | 2026-09-27T23:50:14.424Z | Unknown / not recorded |
| EVD-538560A19A6A0477 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | screenshot / initial_viewport_screenshot | evidence/screenshots/abab69424c4844fc.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:50:33.621Z | Unknown / not recorded |
| EVD-0AF1A60D911EB568 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | screenshot / initial_full_screenshot | evidence/screenshots/abab69424c4844fc.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:50:33.797Z | Unknown / not recorded |
| EVD-C26EF0ED638337D3 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | browser / render_stabilization | evidence/render/abab69424c4844fc.mobile.render-stabilized-v1.json | 2026-09-27T23:50:34.710Z | Unknown / not recorded |
| EVD-3FA578A3C6935462 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | browser / rendered_html | evidence/html/abab69424c4844fc.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:50:34.725Z | Unknown / not recorded |
| EVD-F4A10A9FE15D930A | https://addp.vn/sua-dinh-duong/sua-tre-em.html | seo / rendered_seo | evidence/seo/abab69424c4844fc.mobile.render-stabilized-v1.json | 2026-09-27T23:50:34.746Z | Unknown / not recorded |
| EVD-11AECE1E3280C910 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | structured-data / jsonld | evidence/schema/abab69424c4844fc.mobile.render-stabilized-v1.json | 2026-09-27T23:50:34.747Z | Unknown / not recorded |
| EVD-6868430DD28ABF1D | https://addp.vn/sua-dinh-duong/sua-tre-em.html | dom / visible_controls | evidence/dom/abab69424c4844fc.mobile.render-stabilized-v1.json | 2026-09-27T23:50:34.861Z | Unknown / not recorded |
| EVD-800DB955486AE4C2 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | analytics / tracking_signals | evidence/analytics/abab69424c4844fc.mobile.render-stabilized-v1.json | 2026-09-27T23:50:34.862Z | Unknown / not recorded |
| EVD-620EBDD9DC1D32B7 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/abab69424c4844fc.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:50:34.955Z | Unknown / not recorded |
| EVD-27D3E19F064E562C | https://addp.vn/sua-dinh-duong/sua-tre-em.html | screenshot / stabilized_full_screenshot | evidence/screenshots/abab69424c4844fc.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:50:35.043Z | Unknown / not recorded |
| EVD-3390B0F90C16CD56 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | axe / accessibility | evidence/accessibility/abab69424c4844fc.mobile.render-stabilized-v1.json | 2026-09-27T23:50:40.681Z | Unknown / not recorded |
| EVD-24A2A4EA6654DF72 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | performance / lab_metrics | evidence/lighthouse/abab69424c4844fc.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:50:40.700Z | Unknown / not recorded |
| EVD-9E403EBDEF3124F3 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | network / network_log | evidence/network/abab69424c4844fc.mobile.render-stabilized-v1.json | 2026-09-27T23:50:40.704Z | Unknown / not recorded |
| EVD-D0B22611CE2E1975 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | console / console_log | evidence/console/abab69424c4844fc.mobile.render-stabilized-v1.json | 2026-09-27T23:50:40.704Z | Unknown / not recorded |
| EVD-1C46740F9999CF7B | https://addp.vn/sui-dovital | raw-http / raw_html | evidence/html/9f397da04f62a067.render-stabilized-v1.raw.html | 2026-09-27T23:50:41.579Z | Unknown / not recorded |
| EVD-CD4C67022008E5BB | https://addp.vn/sui-dovital | seo / raw_seo | evidence/seo/9f397da04f62a067.render-stabilized-v1.raw.json | 2026-09-27T23:50:41.607Z | Unknown / not recorded |
| EVD-70F5E4D47A80ECEC | https://addp.vn/sui-dovital | screenshot / initial_viewport_screenshot | evidence/screenshots/9f397da04f62a067.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:51:13.872Z | Unknown / not recorded |
| EVD-883B8CCEC5DF0558 | https://addp.vn/sui-dovital | screenshot / initial_full_screenshot | evidence/screenshots/9f397da04f62a067.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:51:14.698Z | Unknown / not recorded |
| EVD-61643DF84ECB73B0 | https://addp.vn/sui-dovital | browser / render_stabilization | evidence/render/9f397da04f62a067.desktop.render-stabilized-v1.json | 2026-09-27T23:51:17.530Z | Unknown / not recorded |
| EVD-5636E0D9D1AB2605 | https://addp.vn/sui-dovital | browser / rendered_html | evidence/html/9f397da04f62a067.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:51:17.550Z | Unknown / not recorded |
| EVD-239333BC638CDEBA | https://addp.vn/sui-dovital | seo / rendered_seo | evidence/seo/9f397da04f62a067.desktop.render-stabilized-v1.json | 2026-09-27T23:51:17.579Z | Unknown / not recorded |
| EVD-E32F848C405D32E0 | https://addp.vn/sui-dovital | structured-data / jsonld | evidence/schema/9f397da04f62a067.desktop.render-stabilized-v1.json | 2026-09-27T23:51:17.580Z | Unknown / not recorded |
| EVD-B968E829D7DEA2D7 | https://addp.vn/sui-dovital | dom / visible_controls | evidence/dom/9f397da04f62a067.desktop.render-stabilized-v1.json | 2026-09-27T23:51:17.771Z | Unknown / not recorded |
| EVD-A4A1CE693EA3E721 | https://addp.vn/sui-dovital | analytics / tracking_signals | evidence/analytics/9f397da04f62a067.desktop.render-stabilized-v1.json | 2026-09-27T23:51:17.773Z | Unknown / not recorded |
| EVD-6695052421D33FF3 | https://addp.vn/sui-dovital | screenshot / stabilized_viewport_screenshot | evidence/screenshots/9f397da04f62a067.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:51:17.881Z | Unknown / not recorded |
| EVD-AA139D52B8CD9DFC | https://addp.vn/sui-dovital | screenshot / stabilized_full_screenshot | evidence/screenshots/9f397da04f62a067.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:51:18.381Z | Unknown / not recorded |
| EVD-4DBA8882236BC114 | https://addp.vn/sui-dovital | axe / accessibility | evidence/accessibility/9f397da04f62a067.desktop.render-stabilized-v1.json | 2026-09-27T23:51:24.325Z | Unknown / not recorded |
| EVD-CAD8504CF169E375 | https://addp.vn/sui-dovital | performance / lab_metrics | evidence/lighthouse/9f397da04f62a067.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:51:24.344Z | Unknown / not recorded |
| EVD-1F34F2883600DF55 | https://addp.vn/sui-dovital | network / network_log | evidence/network/9f397da04f62a067.desktop.render-stabilized-v1.json | 2026-09-27T23:51:24.347Z | Unknown / not recorded |
| EVD-7B1DF39313952872 | https://addp.vn/sui-dovital | console / console_log | evidence/console/9f397da04f62a067.desktop.render-stabilized-v1.json | 2026-09-27T23:51:24.347Z | Unknown / not recorded |
| EVD-FDAC392859F232F9 | https://addp.vn/sui-dovital | screenshot / initial_viewport_screenshot | evidence/screenshots/9f397da04f62a067.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:51:54.214Z | Unknown / not recorded |
| EVD-25951ECD11F537B5 | https://addp.vn/sui-dovital | screenshot / initial_full_screenshot | evidence/screenshots/9f397da04f62a067.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:51:54.549Z | Unknown / not recorded |
| EVD-CFF9A094EDC2D739 | https://addp.vn/sui-dovital | browser / render_stabilization | evidence/render/9f397da04f62a067.mobile.render-stabilized-v1.json | 2026-09-27T23:51:58.700Z | Unknown / not recorded |
| EVD-91A2524CB7C652D0 | https://addp.vn/sui-dovital | browser / rendered_html | evidence/html/9f397da04f62a067.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:51:58.721Z | Unknown / not recorded |
| EVD-30DDD40B25555E6E | https://addp.vn/sui-dovital | seo / rendered_seo | evidence/seo/9f397da04f62a067.mobile.render-stabilized-v1.json | 2026-09-27T23:51:58.770Z | Unknown / not recorded |
| EVD-EDDAD1FAFA69798C | https://addp.vn/sui-dovital | structured-data / jsonld | evidence/schema/9f397da04f62a067.mobile.render-stabilized-v1.json | 2026-09-27T23:51:58.771Z | Unknown / not recorded |
| EVD-9B7514F9C1D9F906 | https://addp.vn/sui-dovital | dom / visible_controls | evidence/dom/9f397da04f62a067.mobile.render-stabilized-v1.json | 2026-09-27T23:51:58.982Z | Unknown / not recorded |
| EVD-1964859DD63DD62B | https://addp.vn/sui-dovital | analytics / tracking_signals | evidence/analytics/9f397da04f62a067.mobile.render-stabilized-v1.json | 2026-09-27T23:51:58.984Z | Unknown / not recorded |
| EVD-9175C04DA21427CA | https://addp.vn/sui-dovital | screenshot / stabilized_viewport_screenshot | evidence/screenshots/9f397da04f62a067.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:51:59.053Z | Unknown / not recorded |
| EVD-A56C5E202BFD212A | https://addp.vn/sui-dovital | screenshot / stabilized_full_screenshot | evidence/screenshots/9f397da04f62a067.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:51:59.288Z | Unknown / not recorded |
| EVD-3B04A9D3DDC17AE0 | https://addp.vn/sui-dovital | axe / accessibility | evidence/accessibility/9f397da04f62a067.mobile.render-stabilized-v1.json | 2026-09-27T23:52:05.223Z | Unknown / not recorded |
| EVD-9EA71D28792733BF | https://addp.vn/sui-dovital | performance / lab_metrics | evidence/lighthouse/9f397da04f62a067.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:52:05.240Z | Unknown / not recorded |
| EVD-A8A3D82B6DD3EE49 | https://addp.vn/sui-dovital | network / network_log | evidence/network/9f397da04f62a067.mobile.render-stabilized-v1.json | 2026-09-27T23:52:05.254Z | Unknown / not recorded |
| EVD-0C5075894E280CB6 | https://addp.vn/sui-dovital | console / console_log | evidence/console/9f397da04f62a067.mobile.render-stabilized-v1.json | 2026-09-27T23:52:05.254Z | Unknown / not recorded |
| EVD-C2EAC2F670625414 | https://addp.vn/thiet-bi-y-te.html | raw-http / raw_html | evidence/html/822aca87bad7ae37.render-stabilized-v1.raw.html | 2026-09-27T23:52:06.322Z | Unknown / not recorded |
| EVD-9AB9FCBA5F4756DE | https://addp.vn/thiet-bi-y-te.html | seo / raw_seo | evidence/seo/822aca87bad7ae37.render-stabilized-v1.raw.json | 2026-09-27T23:52:06.348Z | Unknown / not recorded |
| EVD-97F7F266E0DD375C | https://addp.vn/thiet-bi-y-te.html | screenshot / initial_viewport_screenshot | evidence/screenshots/822aca87bad7ae37.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:52:26.122Z | Unknown / not recorded |
| EVD-E7A5EAFDBACE275F | https://addp.vn/thiet-bi-y-te.html | screenshot / initial_full_screenshot | evidence/screenshots/822aca87bad7ae37.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:52:26.291Z | Unknown / not recorded |
| EVD-4CB7C450418ACF9B | https://addp.vn/thiet-bi-y-te.html | browser / render_stabilization | evidence/render/822aca87bad7ae37.desktop.render-stabilized-v1.json | 2026-09-27T23:52:27.031Z | Unknown / not recorded |
| EVD-74F293652B6C0C52 | https://addp.vn/thiet-bi-y-te.html | browser / rendered_html | evidence/html/822aca87bad7ae37.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:52:27.044Z | Unknown / not recorded |
| EVD-B2DACE1783E3393E | https://addp.vn/thiet-bi-y-te.html | seo / rendered_seo | evidence/seo/822aca87bad7ae37.desktop.render-stabilized-v1.json | 2026-09-27T23:52:27.071Z | Unknown / not recorded |
| EVD-AFE5C3E00F7637A2 | https://addp.vn/thiet-bi-y-te.html | structured-data / jsonld | evidence/schema/822aca87bad7ae37.desktop.render-stabilized-v1.json | 2026-09-27T23:52:27.072Z | Unknown / not recorded |
| EVD-D1E80743D0B7BE05 | https://addp.vn/thiet-bi-y-te.html | dom / visible_controls | evidence/dom/822aca87bad7ae37.desktop.render-stabilized-v1.json | 2026-09-27T23:52:27.228Z | Unknown / not recorded |
| EVD-47D3FD7CFE899BFE | https://addp.vn/thiet-bi-y-te.html | analytics / tracking_signals | evidence/analytics/822aca87bad7ae37.desktop.render-stabilized-v1.json | 2026-09-27T23:52:27.229Z | Unknown / not recorded |
| EVD-6C7DD2217E303EF4 | https://addp.vn/thiet-bi-y-te.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/822aca87bad7ae37.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:52:27.307Z | Unknown / not recorded |
| EVD-224161C5EB1EB0D1 | https://addp.vn/thiet-bi-y-te.html | screenshot / stabilized_full_screenshot | evidence/screenshots/822aca87bad7ae37.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:52:27.442Z | Unknown / not recorded |
| EVD-04767BB1308DA0E2 | https://addp.vn/thiet-bi-y-te.html | axe / accessibility | evidence/accessibility/822aca87bad7ae37.desktop.render-stabilized-v1.json | 2026-09-27T23:52:33.178Z | Unknown / not recorded |
| EVD-36F98CD7BB12FB31 | https://addp.vn/thiet-bi-y-te.html | performance / lab_metrics | evidence/lighthouse/822aca87bad7ae37.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:52:33.207Z | Unknown / not recorded |
| EVD-C3A672A1523F16A8 | https://addp.vn/thiet-bi-y-te.html | network / network_log | evidence/network/822aca87bad7ae37.desktop.render-stabilized-v1.json | 2026-09-27T23:52:33.233Z | Unknown / not recorded |
| EVD-FBAC851D45986194 | https://addp.vn/thiet-bi-y-te.html | console / console_log | evidence/console/822aca87bad7ae37.desktop.render-stabilized-v1.json | 2026-09-27T23:52:33.233Z | Unknown / not recorded |
| EVD-1D64A9B1791C8E62 | https://addp.vn/thiet-bi-y-te.html | screenshot / initial_viewport_screenshot | evidence/screenshots/822aca87bad7ae37.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:52:53.017Z | Unknown / not recorded |
| EVD-0905D1C66E25323E | https://addp.vn/thiet-bi-y-te.html | screenshot / initial_full_screenshot | evidence/screenshots/822aca87bad7ae37.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:52:53.122Z | Unknown / not recorded |
| EVD-AA768E95BF015DD3 | https://addp.vn/thiet-bi-y-te.html | browser / render_stabilization | evidence/render/822aca87bad7ae37.mobile.render-stabilized-v1.json | 2026-09-27T23:52:54.049Z | Unknown / not recorded |
| EVD-809B0F4EA5FF72B6 | https://addp.vn/thiet-bi-y-te.html | browser / rendered_html | evidence/html/822aca87bad7ae37.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:52:54.062Z | Unknown / not recorded |
| EVD-B2080DEFB780A815 | https://addp.vn/thiet-bi-y-te.html | seo / rendered_seo | evidence/seo/822aca87bad7ae37.mobile.render-stabilized-v1.json | 2026-09-27T23:52:54.083Z | Unknown / not recorded |
| EVD-A3054FC1D414D00C | https://addp.vn/thiet-bi-y-te.html | structured-data / jsonld | evidence/schema/822aca87bad7ae37.mobile.render-stabilized-v1.json | 2026-09-27T23:52:54.084Z | Unknown / not recorded |
| EVD-D387041272D88A18 | https://addp.vn/thiet-bi-y-te.html | dom / visible_controls | evidence/dom/822aca87bad7ae37.mobile.render-stabilized-v1.json | 2026-09-27T23:52:54.196Z | Unknown / not recorded |
| EVD-383F5BD59724C6FA | https://addp.vn/thiet-bi-y-te.html | analytics / tracking_signals | evidence/analytics/822aca87bad7ae37.mobile.render-stabilized-v1.json | 2026-09-27T23:52:54.198Z | Unknown / not recorded |
| EVD-C4D7B6B1D2A90F61 | https://addp.vn/thiet-bi-y-te.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/822aca87bad7ae37.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:52:54.234Z | Unknown / not recorded |
| EVD-ED90B8FB128C20BE | https://addp.vn/thiet-bi-y-te.html | screenshot / stabilized_full_screenshot | evidence/screenshots/822aca87bad7ae37.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:52:54.326Z | Unknown / not recorded |
| EVD-B4428BD8026CBC78 | https://addp.vn/thiet-bi-y-te.html | axe / accessibility | evidence/accessibility/822aca87bad7ae37.mobile.render-stabilized-v1.json | 2026-09-27T23:53:00.136Z | Unknown / not recorded |
| EVD-454F688FD1B9C968 | https://addp.vn/thiet-bi-y-te.html | performance / lab_metrics | evidence/lighthouse/822aca87bad7ae37.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:53:00.153Z | Unknown / not recorded |
| EVD-07E96E1FD8DEEEA2 | https://addp.vn/thiet-bi-y-te.html | network / network_log | evidence/network/822aca87bad7ae37.mobile.render-stabilized-v1.json | 2026-09-27T23:53:00.156Z | Unknown / not recorded |
| EVD-0802D50FBD7231BF | https://addp.vn/thiet-bi-y-te.html | console / console_log | evidence/console/822aca87bad7ae37.mobile.render-stabilized-v1.json | 2026-09-27T23:53:00.156Z | Unknown / not recorded |
| EVD-EEA082D0A959FD99 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | raw-http / raw_html | evidence/html/73a54115e4258fcb.render-stabilized-v1.raw.html | 2026-09-27T23:53:00.957Z | Unknown / not recorded |
| EVD-9D178D295121426D | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | seo / raw_seo | evidence/seo/73a54115e4258fcb.render-stabilized-v1.raw.json | 2026-09-27T23:53:00.974Z | Unknown / not recorded |
| EVD-D4EA379D32C7D64E | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | screenshot / initial_viewport_screenshot | evidence/screenshots/73a54115e4258fcb.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:53:20.346Z | Unknown / not recorded |
| EVD-BB436FA8B3CA7846 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | screenshot / initial_full_screenshot | evidence/screenshots/73a54115e4258fcb.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:53:20.541Z | Unknown / not recorded |
| EVD-8146F89273E67A28 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | browser / render_stabilization | evidence/render/73a54115e4258fcb.desktop.render-stabilized-v1.json | 2026-09-27T23:53:21.288Z | Unknown / not recorded |
| EVD-89F269324AD9E1BE | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | browser / rendered_html | evidence/html/73a54115e4258fcb.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:53:21.300Z | Unknown / not recorded |
| EVD-71759640ED2FFABE | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | seo / rendered_seo | evidence/seo/73a54115e4258fcb.desktop.render-stabilized-v1.json | 2026-09-27T23:53:21.325Z | Unknown / not recorded |
| EVD-75549310B78E850E | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | structured-data / jsonld | evidence/schema/73a54115e4258fcb.desktop.render-stabilized-v1.json | 2026-09-27T23:53:21.326Z | Unknown / not recorded |
| EVD-0A5CF5E3943D0810 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | dom / visible_controls | evidence/dom/73a54115e4258fcb.desktop.render-stabilized-v1.json | 2026-09-27T23:53:21.475Z | Unknown / not recorded |
| EVD-04D20ED9D263DC4A | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | analytics / tracking_signals | evidence/analytics/73a54115e4258fcb.desktop.render-stabilized-v1.json | 2026-09-27T23:53:21.477Z | Unknown / not recorded |
| EVD-3B91CD687BAD7FBF | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/73a54115e4258fcb.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:53:21.558Z | Unknown / not recorded |
| EVD-04BC7FDE348ABD26 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | screenshot / stabilized_full_screenshot | evidence/screenshots/73a54115e4258fcb.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:53:21.736Z | Unknown / not recorded |
| EVD-2E97BDCE3E5C50F0 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | axe / accessibility | evidence/accessibility/73a54115e4258fcb.desktop.render-stabilized-v1.json | 2026-09-27T23:53:27.480Z | Unknown / not recorded |
| EVD-9AB7D7AA7E23C9E5 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | performance / lab_metrics | evidence/lighthouse/73a54115e4258fcb.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:53:27.500Z | Unknown / not recorded |
| EVD-0AC776DA4597EEE8 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | network / network_log | evidence/network/73a54115e4258fcb.desktop.render-stabilized-v1.json | 2026-09-27T23:53:27.508Z | Unknown / not recorded |
| EVD-6A84ED8593F8B851 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | console / console_log | evidence/console/73a54115e4258fcb.desktop.render-stabilized-v1.json | 2026-09-27T23:53:27.508Z | Unknown / not recorded |
| EVD-0899D8B19AEBF1DC | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | screenshot / initial_viewport_screenshot | evidence/screenshots/73a54115e4258fcb.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:53:47.241Z | Unknown / not recorded |
| EVD-8201B7C69B48C4F5 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | screenshot / initial_full_screenshot | evidence/screenshots/73a54115e4258fcb.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:53:47.388Z | Unknown / not recorded |
| EVD-10A59D0E10C6B763 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | browser / render_stabilization | evidence/render/73a54115e4258fcb.mobile.render-stabilized-v1.json | 2026-09-27T23:53:48.301Z | Unknown / not recorded |
| EVD-BA63C40099F3F7B1 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | browser / rendered_html | evidence/html/73a54115e4258fcb.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:53:48.322Z | Unknown / not recorded |
| EVD-9060639997454327 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | seo / rendered_seo | evidence/seo/73a54115e4258fcb.mobile.render-stabilized-v1.json | 2026-09-27T23:53:48.356Z | Unknown / not recorded |
| EVD-79BE148700CBACF3 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | structured-data / jsonld | evidence/schema/73a54115e4258fcb.mobile.render-stabilized-v1.json | 2026-09-27T23:53:48.358Z | Unknown / not recorded |
| EVD-AA0627307B3FD716 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | dom / visible_controls | evidence/dom/73a54115e4258fcb.mobile.render-stabilized-v1.json | 2026-09-27T23:53:48.489Z | Unknown / not recorded |
| EVD-68DCB9564B03F790 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | analytics / tracking_signals | evidence/analytics/73a54115e4258fcb.mobile.render-stabilized-v1.json | 2026-09-27T23:53:48.490Z | Unknown / not recorded |
| EVD-49EDABD19B210194 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/73a54115e4258fcb.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:53:48.542Z | Unknown / not recorded |
| EVD-CD52DF3CC3489A5F | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | screenshot / stabilized_full_screenshot | evidence/screenshots/73a54115e4258fcb.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:53:48.623Z | Unknown / not recorded |
| EVD-38779351817AE2A2 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | axe / accessibility | evidence/accessibility/73a54115e4258fcb.mobile.render-stabilized-v1.json | 2026-09-27T23:53:54.345Z | Unknown / not recorded |
| EVD-AF5D50ED16ED7C62 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | performance / lab_metrics | evidence/lighthouse/73a54115e4258fcb.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:53:54.367Z | Unknown / not recorded |
| EVD-970E559291F1C4FA | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | network / network_log | evidence/network/73a54115e4258fcb.mobile.render-stabilized-v1.json | 2026-09-27T23:53:54.381Z | Unknown / not recorded |
| EVD-AA7A1247204B194C | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | console / console_log | evidence/console/73a54115e4258fcb.mobile.render-stabilized-v1.json | 2026-09-27T23:53:54.381Z | Unknown / not recorded |
| EVD-47254F3DB76A4804 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | raw-http / raw_html | evidence/html/8810ec56bb8edbc1.render-stabilized-v1.raw.html | 2026-09-27T23:53:55.222Z | Unknown / not recorded |
| EVD-7BBEEC0FFDD593C4 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | seo / raw_seo | evidence/seo/8810ec56bb8edbc1.render-stabilized-v1.raw.json | 2026-09-27T23:53:55.234Z | Unknown / not recorded |
| EVD-A0721D13298F99E0 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | screenshot / initial_viewport_screenshot | evidence/screenshots/8810ec56bb8edbc1.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:54:14.234Z | Unknown / not recorded |
| EVD-09442D74A4F84A9B | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | screenshot / initial_full_screenshot | evidence/screenshots/8810ec56bb8edbc1.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:54:14.451Z | Unknown / not recorded |
| EVD-62C673CB5983BEFE | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | browser / render_stabilization | evidence/render/8810ec56bb8edbc1.desktop.render-stabilized-v1.json | 2026-09-27T23:54:15.195Z | Unknown / not recorded |
| EVD-D230B1FA81E7DD97 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | browser / rendered_html | evidence/html/8810ec56bb8edbc1.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:54:15.208Z | Unknown / not recorded |
| EVD-2F95ED2647F68982 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | seo / rendered_seo | evidence/seo/8810ec56bb8edbc1.desktop.render-stabilized-v1.json | 2026-09-27T23:54:15.241Z | Unknown / not recorded |
| EVD-D067684A65795698 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | structured-data / jsonld | evidence/schema/8810ec56bb8edbc1.desktop.render-stabilized-v1.json | 2026-09-27T23:54:15.242Z | Unknown / not recorded |
| EVD-FED4DF8A1D775B34 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | dom / visible_controls | evidence/dom/8810ec56bb8edbc1.desktop.render-stabilized-v1.json | 2026-09-27T23:54:15.380Z | Unknown / not recorded |
| EVD-50639E3C46E3B35B | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | analytics / tracking_signals | evidence/analytics/8810ec56bb8edbc1.desktop.render-stabilized-v1.json | 2026-09-27T23:54:15.382Z | Unknown / not recorded |
| EVD-BA33A84D72D47D00 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/8810ec56bb8edbc1.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:54:15.450Z | Unknown / not recorded |
| EVD-B5BF491EBD30FBBB | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | screenshot / stabilized_full_screenshot | evidence/screenshots/8810ec56bb8edbc1.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:54:15.586Z | Unknown / not recorded |
| EVD-C9C0B466E96ECA18 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | axe / accessibility | evidence/accessibility/8810ec56bb8edbc1.desktop.render-stabilized-v1.json | 2026-09-27T23:54:21.450Z | Unknown / not recorded |
| EVD-1E9D0ED626A7B94A | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | performance / lab_metrics | evidence/lighthouse/8810ec56bb8edbc1.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:54:21.480Z | Unknown / not recorded |
| EVD-485CDBA2394F0B69 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | network / network_log | evidence/network/8810ec56bb8edbc1.desktop.render-stabilized-v1.json | 2026-09-27T23:54:21.484Z | Unknown / not recorded |
| EVD-C87477CF71E62897 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | console / console_log | evidence/console/8810ec56bb8edbc1.desktop.render-stabilized-v1.json | 2026-09-27T23:54:21.484Z | Unknown / not recorded |
| EVD-DDAE29D55820CDE6 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | screenshot / initial_viewport_screenshot | evidence/screenshots/8810ec56bb8edbc1.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:54:43.146Z | Unknown / not recorded |
| EVD-7B041668CE80425B | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | screenshot / initial_full_screenshot | evidence/screenshots/8810ec56bb8edbc1.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:54:43.267Z | Unknown / not recorded |
| EVD-E17AE462740E6AE6 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | browser / render_stabilization | evidence/render/8810ec56bb8edbc1.mobile.render-stabilized-v1.json | 2026-09-27T23:54:44.199Z | Unknown / not recorded |
| EVD-51DDCE666309114E | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | browser / rendered_html | evidence/html/8810ec56bb8edbc1.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:54:44.211Z | Unknown / not recorded |
| EVD-F4DF9DD4EAB5A22F | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | seo / rendered_seo | evidence/seo/8810ec56bb8edbc1.mobile.render-stabilized-v1.json | 2026-09-27T23:54:44.233Z | Unknown / not recorded |
| EVD-90F38CAF072CF9D0 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | structured-data / jsonld | evidence/schema/8810ec56bb8edbc1.mobile.render-stabilized-v1.json | 2026-09-27T23:54:44.234Z | Unknown / not recorded |
| EVD-25764F56D7C73932 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | dom / visible_controls | evidence/dom/8810ec56bb8edbc1.mobile.render-stabilized-v1.json | 2026-09-27T23:54:44.339Z | Unknown / not recorded |
| EVD-99C5E57AD8D148E2 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | analytics / tracking_signals | evidence/analytics/8810ec56bb8edbc1.mobile.render-stabilized-v1.json | 2026-09-27T23:54:44.340Z | Unknown / not recorded |
| EVD-937DB352643F5889 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/8810ec56bb8edbc1.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:54:44.370Z | Unknown / not recorded |
| EVD-4C36414528C6A895 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | screenshot / stabilized_full_screenshot | evidence/screenshots/8810ec56bb8edbc1.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:54:44.444Z | Unknown / not recorded |
| EVD-EEC514646DB5CEDD | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | axe / accessibility | evidence/accessibility/8810ec56bb8edbc1.mobile.render-stabilized-v1.json | 2026-09-27T23:54:50.126Z | Unknown / not recorded |
| EVD-2080494CABB9E3EA | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | performance / lab_metrics | evidence/lighthouse/8810ec56bb8edbc1.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:54:50.144Z | Unknown / not recorded |
| EVD-CBD68B0814E4B1A5 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | network / network_log | evidence/network/8810ec56bb8edbc1.mobile.render-stabilized-v1.json | 2026-09-27T23:54:50.147Z | Unknown / not recorded |
| EVD-098D945BC65EE208 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | console / console_log | evidence/console/8810ec56bb8edbc1.mobile.render-stabilized-v1.json | 2026-09-27T23:54:50.147Z | Unknown / not recorded |
| EVD-090D310C5D47BAE4 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | raw-http / raw_html | evidence/html/106798c90fc40ccb.render-stabilized-v1.raw.html | 2026-09-27T23:54:51.035Z | Unknown / not recorded |
| EVD-09372307D553B8DD | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | seo / raw_seo | evidence/seo/106798c90fc40ccb.render-stabilized-v1.raw.json | 2026-09-27T23:54:51.049Z | Unknown / not recorded |
| EVD-55B1322586430446 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | screenshot / initial_viewport_screenshot | evidence/screenshots/106798c90fc40ccb.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:55:10.151Z | Unknown / not recorded |
| EVD-B644881C5F6107A0 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | screenshot / initial_full_screenshot | evidence/screenshots/106798c90fc40ccb.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:55:10.381Z | Unknown / not recorded |
| EVD-961A7F414E4A8EB3 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | browser / render_stabilization | evidence/render/106798c90fc40ccb.desktop.render-stabilized-v1.json | 2026-09-27T23:55:11.125Z | Unknown / not recorded |
| EVD-0F103CB28A67D8D6 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | browser / rendered_html | evidence/html/106798c90fc40ccb.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:55:11.138Z | Unknown / not recorded |
| EVD-BE18F4D00CE5CF75 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | seo / rendered_seo | evidence/seo/106798c90fc40ccb.desktop.render-stabilized-v1.json | 2026-09-27T23:55:11.157Z | Unknown / not recorded |
| EVD-F6D7D0A0590DA553 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | structured-data / jsonld | evidence/schema/106798c90fc40ccb.desktop.render-stabilized-v1.json | 2026-09-27T23:55:11.158Z | Unknown / not recorded |
| EVD-1AA87E370CB9A9F0 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | dom / visible_controls | evidence/dom/106798c90fc40ccb.desktop.render-stabilized-v1.json | 2026-09-27T23:55:11.296Z | Unknown / not recorded |
| EVD-B15F359CEC5824D0 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | analytics / tracking_signals | evidence/analytics/106798c90fc40ccb.desktop.render-stabilized-v1.json | 2026-09-27T23:55:11.298Z | Unknown / not recorded |
| EVD-81706C4CC32D347D | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/106798c90fc40ccb.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:55:11.360Z | Unknown / not recorded |
| EVD-000EE2EDB5405B95 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | screenshot / stabilized_full_screenshot | evidence/screenshots/106798c90fc40ccb.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:55:11.549Z | Unknown / not recorded |
| EVD-1AC1F38552A0047E | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | axe / accessibility | evidence/accessibility/106798c90fc40ccb.desktop.render-stabilized-v1.json | 2026-09-27T23:55:17.440Z | Unknown / not recorded |
| EVD-A69601CF86DCDBDE | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | performance / lab_metrics | evidence/lighthouse/106798c90fc40ccb.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:55:17.458Z | Unknown / not recorded |
| EVD-33127509562B694A | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | network / network_log | evidence/network/106798c90fc40ccb.desktop.render-stabilized-v1.json | 2026-09-27T23:55:17.461Z | Unknown / not recorded |
| EVD-FCEC172978EB44B8 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | console / console_log | evidence/console/106798c90fc40ccb.desktop.render-stabilized-v1.json | 2026-09-27T23:55:17.461Z | Unknown / not recorded |
| EVD-42E3F1768E510F1F | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | screenshot / initial_viewport_screenshot | evidence/screenshots/106798c90fc40ccb.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:55:37.362Z | Unknown / not recorded |
| EVD-104F3F957CFA8DC3 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | screenshot / initial_full_screenshot | evidence/screenshots/106798c90fc40ccb.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:55:37.498Z | Unknown / not recorded |
| EVD-42CD00B4B9816087 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | browser / render_stabilization | evidence/render/106798c90fc40ccb.mobile.render-stabilized-v1.json | 2026-09-27T23:55:38.444Z | Unknown / not recorded |
| EVD-DB810084023FAB4B | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | browser / rendered_html | evidence/html/106798c90fc40ccb.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:55:38.456Z | Unknown / not recorded |
| EVD-E3FD919706DE248C | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | seo / rendered_seo | evidence/seo/106798c90fc40ccb.mobile.render-stabilized-v1.json | 2026-09-27T23:55:38.485Z | Unknown / not recorded |
| EVD-78890A0B373D953F | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | structured-data / jsonld | evidence/schema/106798c90fc40ccb.mobile.render-stabilized-v1.json | 2026-09-27T23:55:38.486Z | Unknown / not recorded |
| EVD-EE2C8A616C1B66F0 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | dom / visible_controls | evidence/dom/106798c90fc40ccb.mobile.render-stabilized-v1.json | 2026-09-27T23:55:38.626Z | Unknown / not recorded |
| EVD-72F15BF8AFFC465D | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | analytics / tracking_signals | evidence/analytics/106798c90fc40ccb.mobile.render-stabilized-v1.json | 2026-09-27T23:55:38.629Z | Unknown / not recorded |
| EVD-E7E9D9E062EE020F | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/106798c90fc40ccb.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:55:38.673Z | Unknown / not recorded |
| EVD-F7119C6FF0CC515A | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | screenshot / stabilized_full_screenshot | evidence/screenshots/106798c90fc40ccb.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:55:38.756Z | Unknown / not recorded |
| EVD-23C70021018FAADE | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | axe / accessibility | evidence/accessibility/106798c90fc40ccb.mobile.render-stabilized-v1.json | 2026-09-27T23:55:44.430Z | Unknown / not recorded |
| EVD-8E3045B8BBD06831 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | performance / lab_metrics | evidence/lighthouse/106798c90fc40ccb.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:55:44.447Z | Unknown / not recorded |
| EVD-315AA3141F5614BA | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | network / network_log | evidence/network/106798c90fc40ccb.mobile.render-stabilized-v1.json | 2026-09-27T23:55:44.451Z | Unknown / not recorded |
| EVD-38D773AE990B6F66 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | console / console_log | evidence/console/106798c90fc40ccb.mobile.render-stabilized-v1.json | 2026-09-27T23:55:44.451Z | Unknown / not recorded |
| EVD-94A11B7DA60E5E3A | https://addp.vn/thiet-bi-y-te/khau-trang.html | raw-http / raw_html | evidence/html/1479934c307717d8.render-stabilized-v1.raw.html | 2026-09-27T23:55:45.336Z | Unknown / not recorded |
| EVD-019F621350CF8CAB | https://addp.vn/thiet-bi-y-te/khau-trang.html | seo / raw_seo | evidence/seo/1479934c307717d8.render-stabilized-v1.raw.json | 2026-09-27T23:55:45.348Z | Unknown / not recorded |
| EVD-2F5FC6FAB90EE0EE | https://addp.vn/thiet-bi-y-te/khau-trang.html | screenshot / initial_viewport_screenshot | evidence/screenshots/1479934c307717d8.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:56:04.978Z | Unknown / not recorded |
| EVD-91A8566F0A9A18ED | https://addp.vn/thiet-bi-y-te/khau-trang.html | screenshot / initial_full_screenshot | evidence/screenshots/1479934c307717d8.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:56:05.169Z | Unknown / not recorded |
| EVD-97A6CEA785A0B79B | https://addp.vn/thiet-bi-y-te/khau-trang.html | browser / render_stabilization | evidence/render/1479934c307717d8.desktop.render-stabilized-v1.json | 2026-09-27T23:56:05.914Z | Unknown / not recorded |
| EVD-81B7376DE48FC5C9 | https://addp.vn/thiet-bi-y-te/khau-trang.html | browser / rendered_html | evidence/html/1479934c307717d8.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:56:05.927Z | Unknown / not recorded |
| EVD-2D6857DECDD8755D | https://addp.vn/thiet-bi-y-te/khau-trang.html | seo / rendered_seo | evidence/seo/1479934c307717d8.desktop.render-stabilized-v1.json | 2026-09-27T23:56:05.958Z | Unknown / not recorded |
| EVD-568E2D528C54E3DB | https://addp.vn/thiet-bi-y-te/khau-trang.html | structured-data / jsonld | evidence/schema/1479934c307717d8.desktop.render-stabilized-v1.json | 2026-09-27T23:56:05.959Z | Unknown / not recorded |
| EVD-2C2C5D3E8DCE6B2C | https://addp.vn/thiet-bi-y-te/khau-trang.html | dom / visible_controls | evidence/dom/1479934c307717d8.desktop.render-stabilized-v1.json | 2026-09-27T23:56:06.080Z | Unknown / not recorded |
| EVD-EC5AF3EF17D640EF | https://addp.vn/thiet-bi-y-te/khau-trang.html | analytics / tracking_signals | evidence/analytics/1479934c307717d8.desktop.render-stabilized-v1.json | 2026-09-27T23:56:06.082Z | Unknown / not recorded |
| EVD-F5601BD77BD02262 | https://addp.vn/thiet-bi-y-te/khau-trang.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/1479934c307717d8.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:56:06.158Z | Unknown / not recorded |
| EVD-F2762E159763E60E | https://addp.vn/thiet-bi-y-te/khau-trang.html | screenshot / stabilized_full_screenshot | evidence/screenshots/1479934c307717d8.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:56:06.286Z | Unknown / not recorded |
| EVD-90B90830D582839F | https://addp.vn/thiet-bi-y-te/khau-trang.html | axe / accessibility | evidence/accessibility/1479934c307717d8.desktop.render-stabilized-v1.json | 2026-09-27T23:56:12.039Z | Unknown / not recorded |
| EVD-729A34224B1F49B8 | https://addp.vn/thiet-bi-y-te/khau-trang.html | performance / lab_metrics | evidence/lighthouse/1479934c307717d8.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:56:12.058Z | Unknown / not recorded |
| EVD-C0E942DA7FC1206D | https://addp.vn/thiet-bi-y-te/khau-trang.html | network / network_log | evidence/network/1479934c307717d8.desktop.render-stabilized-v1.json | 2026-09-27T23:56:12.072Z | Unknown / not recorded |
| EVD-F5B9E9B76D1599E0 | https://addp.vn/thiet-bi-y-te/khau-trang.html | console / console_log | evidence/console/1479934c307717d8.desktop.render-stabilized-v1.json | 2026-09-27T23:56:12.072Z | Unknown / not recorded |
| EVD-655E464137C0E75D | https://addp.vn/thiet-bi-y-te/khau-trang.html | screenshot / initial_viewport_screenshot | evidence/screenshots/1479934c307717d8.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:56:31.577Z | Unknown / not recorded |
| EVD-854052C84ACF72DD | https://addp.vn/thiet-bi-y-te/khau-trang.html | screenshot / initial_full_screenshot | evidence/screenshots/1479934c307717d8.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:56:31.708Z | Unknown / not recorded |
| EVD-56E61900C3440692 | https://addp.vn/thiet-bi-y-te/khau-trang.html | browser / render_stabilization | evidence/render/1479934c307717d8.mobile.render-stabilized-v1.json | 2026-09-27T23:56:32.637Z | Unknown / not recorded |
| EVD-7284E97A114A54B8 | https://addp.vn/thiet-bi-y-te/khau-trang.html | browser / rendered_html | evidence/html/1479934c307717d8.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:56:32.649Z | Unknown / not recorded |
| EVD-8FB59E5CCEFDA689 | https://addp.vn/thiet-bi-y-te/khau-trang.html | seo / rendered_seo | evidence/seo/1479934c307717d8.mobile.render-stabilized-v1.json | 2026-09-27T23:56:32.667Z | Unknown / not recorded |
| EVD-02F1359088CD73B7 | https://addp.vn/thiet-bi-y-te/khau-trang.html | structured-data / jsonld | evidence/schema/1479934c307717d8.mobile.render-stabilized-v1.json | 2026-09-27T23:56:32.669Z | Unknown / not recorded |
| EVD-1EC733B51BBF2EA3 | https://addp.vn/thiet-bi-y-te/khau-trang.html | dom / visible_controls | evidence/dom/1479934c307717d8.mobile.render-stabilized-v1.json | 2026-09-27T23:56:32.784Z | Unknown / not recorded |
| EVD-60139237AF63410B | https://addp.vn/thiet-bi-y-te/khau-trang.html | analytics / tracking_signals | evidence/analytics/1479934c307717d8.mobile.render-stabilized-v1.json | 2026-09-27T23:56:32.786Z | Unknown / not recorded |
| EVD-097DCCF33537726A | https://addp.vn/thiet-bi-y-te/khau-trang.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/1479934c307717d8.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:56:32.832Z | Unknown / not recorded |
| EVD-555EB450EF9C467F | https://addp.vn/thiet-bi-y-te/khau-trang.html | screenshot / stabilized_full_screenshot | evidence/screenshots/1479934c307717d8.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:56:32.901Z | Unknown / not recorded |
| EVD-0339C54A82B97AF0 | https://addp.vn/thiet-bi-y-te/khau-trang.html | axe / accessibility | evidence/accessibility/1479934c307717d8.mobile.render-stabilized-v1.json | 2026-09-27T23:56:38.582Z | Unknown / not recorded |
| EVD-372B1A46276500C0 | https://addp.vn/thiet-bi-y-te/khau-trang.html | performance / lab_metrics | evidence/lighthouse/1479934c307717d8.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:56:38.602Z | Unknown / not recorded |
| EVD-ACEBD1A4D3CDC351 | https://addp.vn/thiet-bi-y-te/khau-trang.html | network / network_log | evidence/network/1479934c307717d8.mobile.render-stabilized-v1.json | 2026-09-27T23:56:38.605Z | Unknown / not recorded |
| EVD-209A8C1A5563EBB6 | https://addp.vn/thiet-bi-y-te/khau-trang.html | console / console_log | evidence/console/1479934c307717d8.mobile.render-stabilized-v1.json | 2026-09-27T23:56:38.605Z | Unknown / not recorded |
| EVD-1E3FE93534B5120A | https://addp.vn/thuc-pham-chuc-nang.html | raw-http / raw_html | evidence/html/359fa2d7a8da5081.render-stabilized-v1.raw.html | 2026-09-27T23:56:39.352Z | Unknown / not recorded |
| EVD-B62119190A5BC0B4 | https://addp.vn/thuc-pham-chuc-nang.html | seo / raw_seo | evidence/seo/359fa2d7a8da5081.render-stabilized-v1.raw.json | 2026-09-27T23:56:39.377Z | Unknown / not recorded |
| EVD-7788EA4F0A063B85 | https://addp.vn/thuc-pham-chuc-nang.html | screenshot / initial_viewport_screenshot | evidence/screenshots/359fa2d7a8da5081.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:56:59.981Z | Unknown / not recorded |
| EVD-B440A65F31527E53 | https://addp.vn/thuc-pham-chuc-nang.html | screenshot / initial_full_screenshot | evidence/screenshots/359fa2d7a8da5081.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:57:00.666Z | Unknown / not recorded |
| EVD-F648C0E27B6FC8A4 | https://addp.vn/thuc-pham-chuc-nang.html | browser / render_stabilization | evidence/render/359fa2d7a8da5081.desktop.render-stabilized-v1.json | 2026-09-27T23:57:02.217Z | Unknown / not recorded |
| EVD-F567B2ED3210BDD3 | https://addp.vn/thuc-pham-chuc-nang.html | browser / rendered_html | evidence/html/359fa2d7a8da5081.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:57:02.252Z | Unknown / not recorded |
| EVD-9A38BB5935EDEB44 | https://addp.vn/thuc-pham-chuc-nang.html | seo / rendered_seo | evidence/seo/359fa2d7a8da5081.desktop.render-stabilized-v1.json | 2026-09-27T23:57:02.329Z | Unknown / not recorded |
| EVD-E6632A21E5661D5A | https://addp.vn/thuc-pham-chuc-nang.html | structured-data / jsonld | evidence/schema/359fa2d7a8da5081.desktop.render-stabilized-v1.json | 2026-09-27T23:57:02.335Z | Unknown / not recorded |
| EVD-5DC31FEA1CDC5AD0 | https://addp.vn/thuc-pham-chuc-nang.html | dom / visible_controls | evidence/dom/359fa2d7a8da5081.desktop.render-stabilized-v1.json | 2026-09-27T23:57:02.761Z | Unknown / not recorded |
| EVD-D24A5C811BF28E11 | https://addp.vn/thuc-pham-chuc-nang.html | analytics / tracking_signals | evidence/analytics/359fa2d7a8da5081.desktop.render-stabilized-v1.json | 2026-09-27T23:57:02.765Z | Unknown / not recorded |
| EVD-FA8D2177A2A82094 | https://addp.vn/thuc-pham-chuc-nang.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/359fa2d7a8da5081.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:57:02.911Z | Unknown / not recorded |
| EVD-A68B250AA0E20740 | https://addp.vn/thuc-pham-chuc-nang.html | screenshot / stabilized_full_screenshot | evidence/screenshots/359fa2d7a8da5081.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:57:03.558Z | Unknown / not recorded |
| EVD-ADA51C99D8698600 | https://addp.vn/thuc-pham-chuc-nang.html | axe / accessibility | evidence/accessibility/359fa2d7a8da5081.desktop.render-stabilized-v1.json | 2026-09-27T23:57:10.223Z | Unknown / not recorded |
| EVD-5158D4356ABF8035 | https://addp.vn/thuc-pham-chuc-nang.html | performance / lab_metrics | evidence/lighthouse/359fa2d7a8da5081.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:57:10.244Z | Unknown / not recorded |
| EVD-323F883574D82577 | https://addp.vn/thuc-pham-chuc-nang.html | network / network_log | evidence/network/359fa2d7a8da5081.desktop.render-stabilized-v1.json | 2026-09-27T23:57:10.248Z | Unknown / not recorded |
| EVD-D5B9C474B43FA370 | https://addp.vn/thuc-pham-chuc-nang.html | console / console_log | evidence/console/359fa2d7a8da5081.desktop.render-stabilized-v1.json | 2026-09-27T23:57:10.248Z | Unknown / not recorded |
| EVD-23385B0711A2D363 | https://addp.vn/thuc-pham-chuc-nang.html | screenshot / initial_viewport_screenshot | evidence/screenshots/359fa2d7a8da5081.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:57:30.912Z | Unknown / not recorded |
| EVD-6D209792B310F146 | https://addp.vn/thuc-pham-chuc-nang.html | screenshot / initial_full_screenshot | evidence/screenshots/359fa2d7a8da5081.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:57:31.125Z | Unknown / not recorded |
| EVD-063A2BF2E458EDF1 | https://addp.vn/thuc-pham-chuc-nang.html | browser / render_stabilization | evidence/render/359fa2d7a8da5081.mobile.render-stabilized-v1.json | 2026-09-27T23:57:32.596Z | Unknown / not recorded |
| EVD-798CB32E304602C6 | https://addp.vn/thuc-pham-chuc-nang.html | browser / rendered_html | evidence/html/359fa2d7a8da5081.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:57:32.612Z | Unknown / not recorded |
| EVD-4A709D08AB1B3102 | https://addp.vn/thuc-pham-chuc-nang.html | seo / rendered_seo | evidence/seo/359fa2d7a8da5081.mobile.render-stabilized-v1.json | 2026-09-27T23:57:32.656Z | Unknown / not recorded |
| EVD-40B6B2F16D27F5AE | https://addp.vn/thuc-pham-chuc-nang.html | structured-data / jsonld | evidence/schema/359fa2d7a8da5081.mobile.render-stabilized-v1.json | 2026-09-27T23:57:32.657Z | Unknown / not recorded |
| EVD-10672D0F1E18C62E | https://addp.vn/thuc-pham-chuc-nang.html | dom / visible_controls | evidence/dom/359fa2d7a8da5081.mobile.render-stabilized-v1.json | 2026-09-27T23:57:32.847Z | Unknown / not recorded |
| EVD-E5CDA8EAAA775375 | https://addp.vn/thuc-pham-chuc-nang.html | analytics / tracking_signals | evidence/analytics/359fa2d7a8da5081.mobile.render-stabilized-v1.json | 2026-09-27T23:57:32.849Z | Unknown / not recorded |
| EVD-199CBF066EBA1B08 | https://addp.vn/thuc-pham-chuc-nang.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/359fa2d7a8da5081.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:57:32.899Z | Unknown / not recorded |
| EVD-98CE7F563E92F7C6 | https://addp.vn/thuc-pham-chuc-nang.html | screenshot / stabilized_full_screenshot | evidence/screenshots/359fa2d7a8da5081.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:57:33.057Z | Unknown / not recorded |
| EVD-30FFF2AAB83B7337 | https://addp.vn/thuc-pham-chuc-nang.html | axe / accessibility | evidence/accessibility/359fa2d7a8da5081.mobile.render-stabilized-v1.json | 2026-09-27T23:57:38.915Z | Unknown / not recorded |
| EVD-C2F74341CF920AA3 | https://addp.vn/thuc-pham-chuc-nang.html | performance / lab_metrics | evidence/lighthouse/359fa2d7a8da5081.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:57:38.934Z | Unknown / not recorded |
| EVD-4E220EF04BE321D6 | https://addp.vn/thuc-pham-chuc-nang.html | network / network_log | evidence/network/359fa2d7a8da5081.mobile.render-stabilized-v1.json | 2026-09-27T23:57:38.948Z | Unknown / not recorded |
| EVD-83ECFD9EFCF16909 | https://addp.vn/thuc-pham-chuc-nang.html | console / console_log | evidence/console/359fa2d7a8da5081.mobile.render-stabilized-v1.json | 2026-09-27T23:57:38.948Z | Unknown / not recorded |
| EVD-ADE1E042C7D93940 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | raw-http / raw_html | evidence/html/439c2df490fa3169.render-stabilized-v1.raw.html | 2026-09-27T23:57:39.663Z | Unknown / not recorded |
| EVD-98BC2CC55047B35A | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | seo / raw_seo | evidence/seo/439c2df490fa3169.render-stabilized-v1.raw.json | 2026-09-27T23:57:39.686Z | Unknown / not recorded |
| EVD-376E21B89D12733A | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | screenshot / initial_viewport_screenshot | evidence/screenshots/439c2df490fa3169.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:58:00.103Z | Unknown / not recorded |
| EVD-0827B7AC759AF453 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | screenshot / initial_full_screenshot | evidence/screenshots/439c2df490fa3169.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:58:00.433Z | Unknown / not recorded |
| EVD-7D3FD22EA3FF95D7 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | browser / render_stabilization | evidence/render/439c2df490fa3169.desktop.render-stabilized-v1.json | 2026-09-27T23:58:01.550Z | Unknown / not recorded |
| EVD-96774DEF63714308 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | browser / rendered_html | evidence/html/439c2df490fa3169.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:58:01.570Z | Unknown / not recorded |
| EVD-9A8016BAFBE6E5A8 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | seo / rendered_seo | evidence/seo/439c2df490fa3169.desktop.render-stabilized-v1.json | 2026-09-27T23:58:01.609Z | Unknown / not recorded |
| EVD-0584D6F0C3EF93C3 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | structured-data / jsonld | evidence/schema/439c2df490fa3169.desktop.render-stabilized-v1.json | 2026-09-27T23:58:01.610Z | Unknown / not recorded |
| EVD-D434D72A22DD933F | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | dom / visible_controls | evidence/dom/439c2df490fa3169.desktop.render-stabilized-v1.json | 2026-09-27T23:58:01.755Z | Unknown / not recorded |
| EVD-2FA52BA94C11E8BB | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | analytics / tracking_signals | evidence/analytics/439c2df490fa3169.desktop.render-stabilized-v1.json | 2026-09-27T23:58:01.758Z | Unknown / not recorded |
| EVD-C467227F75A7BAC8 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/439c2df490fa3169.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:58:01.895Z | Unknown / not recorded |
| EVD-811CA3E10E25CD75 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | screenshot / stabilized_full_screenshot | evidence/screenshots/439c2df490fa3169.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:58:02.215Z | Unknown / not recorded |
| EVD-92E8190409F44937 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | axe / accessibility | evidence/accessibility/439c2df490fa3169.desktop.render-stabilized-v1.json | 2026-09-27T23:58:08.252Z | Unknown / not recorded |
| EVD-7D32178DFE6D09B1 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | performance / lab_metrics | evidence/lighthouse/439c2df490fa3169.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:58:08.272Z | Unknown / not recorded |
| EVD-3AB29CBD8AA9D640 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | network / network_log | evidence/network/439c2df490fa3169.desktop.render-stabilized-v1.json | 2026-09-27T23:58:08.286Z | Unknown / not recorded |
| EVD-7AF2D25D440821CF | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | console / console_log | evidence/console/439c2df490fa3169.desktop.render-stabilized-v1.json | 2026-09-27T23:58:08.286Z | Unknown / not recorded |
| EVD-EFCCDC0606E41442 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | screenshot / initial_viewport_screenshot | evidence/screenshots/439c2df490fa3169.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:58:28.262Z | Unknown / not recorded |
| EVD-D89470FF00E74F15 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | screenshot / initial_full_screenshot | evidence/screenshots/439c2df490fa3169.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:58:28.429Z | Unknown / not recorded |
| EVD-D0F5CC858501A0F3 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | browser / render_stabilization | evidence/render/439c2df490fa3169.mobile.render-stabilized-v1.json | 2026-09-27T23:58:29.798Z | Unknown / not recorded |
| EVD-050B53AB679FD737 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | browser / rendered_html | evidence/html/439c2df490fa3169.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:58:29.818Z | Unknown / not recorded |
| EVD-656126F155955C0F | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | seo / rendered_seo | evidence/seo/439c2df490fa3169.mobile.render-stabilized-v1.json | 2026-09-27T23:58:29.865Z | Unknown / not recorded |
| EVD-D1F03471CCEF0AAF | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | structured-data / jsonld | evidence/schema/439c2df490fa3169.mobile.render-stabilized-v1.json | 2026-09-27T23:58:29.866Z | Unknown / not recorded |
| EVD-ADE767153E1FEE27 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | dom / visible_controls | evidence/dom/439c2df490fa3169.mobile.render-stabilized-v1.json | 2026-09-27T23:58:30.096Z | Unknown / not recorded |
| EVD-5474D9099819DA67 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | analytics / tracking_signals | evidence/analytics/439c2df490fa3169.mobile.render-stabilized-v1.json | 2026-09-27T23:58:30.097Z | Unknown / not recorded |
| EVD-BFAB8C7BA6FED7D3 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/439c2df490fa3169.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:58:30.153Z | Unknown / not recorded |
| EVD-72A408B128B82AE8 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | screenshot / stabilized_full_screenshot | evidence/screenshots/439c2df490fa3169.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:58:30.372Z | Unknown / not recorded |
| EVD-D79010F9D90BE59C | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | axe / accessibility | evidence/accessibility/439c2df490fa3169.mobile.render-stabilized-v1.json | 2026-09-27T23:58:36.468Z | Unknown / not recorded |
| EVD-48A80ECB1D9C985C | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | performance / lab_metrics | evidence/lighthouse/439c2df490fa3169.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:58:36.486Z | Unknown / not recorded |
| EVD-5C6A8DA583836270 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | network / network_log | evidence/network/439c2df490fa3169.mobile.render-stabilized-v1.json | 2026-09-27T23:58:36.489Z | Unknown / not recorded |
| EVD-EBCCDD9D43AA8976 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | console / console_log | evidence/console/439c2df490fa3169.mobile.render-stabilized-v1.json | 2026-09-27T23:58:36.489Z | Unknown / not recorded |
| EVD-6067E3F073E347FA | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | raw-http / raw_html | evidence/html/01ab04fda61832b1.render-stabilized-v1.raw.html | 2026-09-27T23:58:37.416Z | Unknown / not recorded |
| EVD-CB19BF5C8FFE33ED | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | seo / raw_seo | evidence/seo/01ab04fda61832b1.render-stabilized-v1.raw.json | 2026-09-27T23:58:37.437Z | Unknown / not recorded |
| EVD-A673409DD3B657B2 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | screenshot / initial_viewport_screenshot | evidence/screenshots/01ab04fda61832b1.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:58:57.213Z | Unknown / not recorded |
| EVD-DD80BCFAD5E9EA31 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | screenshot / initial_full_screenshot | evidence/screenshots/01ab04fda61832b1.desktop.render-stabilized-v1.initial.full.png | 2026-09-27T23:58:57.460Z | Unknown / not recorded |
| EVD-7B373F0B4217350A | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | browser / render_stabilization | evidence/render/01ab04fda61832b1.desktop.render-stabilized-v1.json | 2026-09-27T23:58:58.194Z | Unknown / not recorded |
| EVD-65CEFA2132184FC8 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | browser / rendered_html | evidence/html/01ab04fda61832b1.desktop.render-stabilized-v1.rendered.html | 2026-09-27T23:58:58.207Z | Unknown / not recorded |
| EVD-4669E75101DBA563 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | seo / rendered_seo | evidence/seo/01ab04fda61832b1.desktop.render-stabilized-v1.json | 2026-09-27T23:58:58.237Z | Unknown / not recorded |
| EVD-7EA44CDB91EDF114 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | structured-data / jsonld | evidence/schema/01ab04fda61832b1.desktop.render-stabilized-v1.json | 2026-09-27T23:58:58.238Z | Unknown / not recorded |
| EVD-4FED9D5829B4D39F | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | dom / visible_controls | evidence/dom/01ab04fda61832b1.desktop.render-stabilized-v1.json | 2026-09-27T23:58:58.365Z | Unknown / not recorded |
| EVD-9CE2C839612BA3E0 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | analytics / tracking_signals | evidence/analytics/01ab04fda61832b1.desktop.render-stabilized-v1.json | 2026-09-27T23:58:58.366Z | Unknown / not recorded |
| EVD-9041AB75631DF5FE | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/01ab04fda61832b1.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:58:58.429Z | Unknown / not recorded |
| EVD-F12643740507624D | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | screenshot / stabilized_full_screenshot | evidence/screenshots/01ab04fda61832b1.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:58:58.631Z | Unknown / not recorded |
| EVD-560C53A26A390A1F | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | axe / accessibility | evidence/accessibility/01ab04fda61832b1.desktop.render-stabilized-v1.json | 2026-09-27T23:59:04.413Z | Unknown / not recorded |
| EVD-201C4962187EAD79 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | performance / lab_metrics | evidence/lighthouse/01ab04fda61832b1.desktop.render-stabilized-v1.lab.json | 2026-09-27T23:59:04.432Z | Unknown / not recorded |
| EVD-6AE5E85913474F07 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | network / network_log | evidence/network/01ab04fda61832b1.desktop.render-stabilized-v1.json | 2026-09-27T23:59:04.435Z | Unknown / not recorded |
| EVD-30E347BA0C94DF14 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | console / console_log | evidence/console/01ab04fda61832b1.desktop.render-stabilized-v1.json | 2026-09-27T23:59:04.435Z | Unknown / not recorded |
| EVD-CD93DD11CB4E3829 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | screenshot / initial_viewport_screenshot | evidence/screenshots/01ab04fda61832b1.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-27T23:59:23.411Z | Unknown / not recorded |
| EVD-43634BD495FC5072 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | screenshot / initial_full_screenshot | evidence/screenshots/01ab04fda61832b1.mobile.render-stabilized-v1.initial.full.png | 2026-09-27T23:59:23.532Z | Unknown / not recorded |
| EVD-C742D0992BF1C032 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | browser / render_stabilization | evidence/render/01ab04fda61832b1.mobile.render-stabilized-v1.json | 2026-09-27T23:59:24.467Z | Unknown / not recorded |
| EVD-861C747B32E292DA | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | browser / rendered_html | evidence/html/01ab04fda61832b1.mobile.render-stabilized-v1.rendered.html | 2026-09-27T23:59:24.481Z | Unknown / not recorded |
| EVD-47FA48BB4CCCEC7D | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | seo / rendered_seo | evidence/seo/01ab04fda61832b1.mobile.render-stabilized-v1.json | 2026-09-27T23:59:24.572Z | Unknown / not recorded |
| EVD-F080633BB178D98F | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | structured-data / jsonld | evidence/schema/01ab04fda61832b1.mobile.render-stabilized-v1.json | 2026-09-27T23:59:24.573Z | Unknown / not recorded |
| EVD-0DE35C0B6669A2E5 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | dom / visible_controls | evidence/dom/01ab04fda61832b1.mobile.render-stabilized-v1.json | 2026-09-27T23:59:24.730Z | Unknown / not recorded |
| EVD-9C87A9B28AFF1CF0 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | analytics / tracking_signals | evidence/analytics/01ab04fda61832b1.mobile.render-stabilized-v1.json | 2026-09-27T23:59:24.732Z | Unknown / not recorded |
| EVD-F6E56176F0CCA0F1 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/01ab04fda61832b1.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-27T23:59:24.768Z | Unknown / not recorded |
| EVD-7B59782C7FA548C8 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | screenshot / stabilized_full_screenshot | evidence/screenshots/01ab04fda61832b1.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-27T23:59:24.847Z | Unknown / not recorded |
| EVD-BC96F3F6D1B7990A | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | axe / accessibility | evidence/accessibility/01ab04fda61832b1.mobile.render-stabilized-v1.json | 2026-09-27T23:59:30.486Z | Unknown / not recorded |
| EVD-380690096634D5F3 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | performance / lab_metrics | evidence/lighthouse/01ab04fda61832b1.mobile.render-stabilized-v1.lab.json | 2026-09-27T23:59:30.505Z | Unknown / not recorded |
| EVD-E6BF5D03B54A6B38 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | network / network_log | evidence/network/01ab04fda61832b1.mobile.render-stabilized-v1.json | 2026-09-27T23:59:30.518Z | Unknown / not recorded |
| EVD-00CF88A2EA573D92 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | console / console_log | evidence/console/01ab04fda61832b1.mobile.render-stabilized-v1.json | 2026-09-27T23:59:30.518Z | Unknown / not recorded |
| EVD-571CE21693716D24-0 | https://addp.vn/ | persona-first_time / journey | evidence/journeys/first_time-0.json | 2026-09-28T04:13:26.275Z | Unknown / not recorded |
| EVD-571CE21693716D24-0-SHOT | https://addp.vn/ | persona-first_time / screenshot | evidence/journeys/first_time-0.png | 2026-09-28T04:13:26.275Z | Unknown / not recorded |
| EVD-28869D62E349AE02-0 | https://addp.vn/ | persona-high_intent / journey | evidence/journeys/high_intent-0.json | 2026-09-28T04:13:50.119Z | Unknown / not recorded |
| EVD-28869D62E349AE02-0-SHOT | https://addp.vn/ | persona-high_intent / screenshot | evidence/journeys/high_intent-0.png | 2026-09-28T04:13:50.119Z | Unknown / not recorded |
| EVD-3C63ACE8EED6B470-0 | https://addp.vn/ | persona-research-continuation / journey | evidence/journeys/research-continuation-0.json | 2026-09-28T04:21:08.960Z | Unknown / not recorded |
| EVD-3C63ACE8EED6B470-0-SHOT | https://addp.vn/ | persona-research-continuation / screenshot | evidence/journeys/research-continuation-0.png | 2026-09-28T04:21:08.960Z | Unknown / not recorded |
| EVD-D67F1CCFC3746E81-1 | https://addp.vn/sua-hat-glucare-plus | persona-research-continuation / journey | evidence/journeys/research-continuation-1.json | 2026-09-28T04:21:17.665Z | FND-PER-HIGH-001, FND-PER-RESEARCH-001, FND-SPEC-CONTENT-001 |
| EVD-D67F1CCFC3746E81-1-SHOT | https://addp.vn/sua-hat-glucare-plus | persona-research-continuation / screenshot | evidence/journeys/research-continuation-1.png | 2026-09-28T04:21:17.665Z | Unknown / not recorded |
| EVD-B61797A9CD1390CF-2 | https://addp.vn/gioi-thieu | persona-research-continuation / journey | evidence/journeys/research-continuation-2.json | 2026-09-28T04:21:20.721Z | Unknown / not recorded |
| EVD-B61797A9CD1390CF-2-SHOT | https://addp.vn/gioi-thieu | persona-research-continuation / screenshot | evidence/journeys/research-continuation-2.png | 2026-09-28T04:21:20.721Z | Unknown / not recorded |
| EVD-C087DF8FD18C7192-3 | https://addp.vn/chinh-sach-dat-hang | persona-research-continuation / journey | evidence/journeys/research-continuation-3.json | 2026-09-28T04:21:24.289Z | Unknown / not recorded |
| EVD-C087DF8FD18C7192-3-SHOT | https://addp.vn/chinh-sach-dat-hang | persona-research-continuation / screenshot | evidence/journeys/research-continuation-3.png | 2026-09-28T04:21:24.289Z | Unknown / not recorded |
| EVD-998DA9C93EAB1C0B-0 | https://addp.vn/ | persona-mobile-continuation / journey | evidence/journeys/mobile-continuation-0.json | 2026-09-28T04:21:42.680Z | Unknown / not recorded |
| EVD-998DA9C93EAB1C0B-0-SHOT | https://addp.vn/ | persona-mobile-continuation / screenshot | evidence/journeys/mobile-continuation-0.png | 2026-09-28T04:21:42.680Z | Unknown / not recorded |
| EVD-E500EB5EAF7D49CB-1 | https://addp.vn/sua-hat-glucare-plus | persona-mobile-continuation / journey | evidence/journeys/mobile-continuation-1.json | 2026-09-28T04:21:51.453Z | Unknown / not recorded |
| EVD-E500EB5EAF7D49CB-1-SHOT | https://addp.vn/sua-hat-glucare-plus | persona-mobile-continuation / screenshot | evidence/journeys/mobile-continuation-1.png | 2026-09-28T04:21:51.453Z | Unknown / not recorded |
| EVD-A6F4FB1EBECEC2DF | https://addp.vn/vien-an-duong | raw-http / raw_html | evidence/html/324d2a6661dc99c8.render-stabilized-v1.raw.html | 2026-09-28T09:16:44.616Z | Unknown / not recorded |
| EVD-BA9F6C2BC097CDFF | https://addp.vn/vien-an-duong | seo / raw_seo | evidence/seo/324d2a6661dc99c8.render-stabilized-v1.raw.json | 2026-09-28T09:16:44.716Z | Unknown / not recorded |
| EVD-E2D494AFDD252225 | https://addp.vn/vien-an-duong | screenshot / initial_viewport_screenshot | evidence/screenshots/324d2a6661dc99c8.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-28T09:17:07.992Z | Unknown / not recorded |
| EVD-2E5E5A76810F0F0A | https://addp.vn/vien-an-duong | screenshot / initial_full_screenshot | evidence/screenshots/324d2a6661dc99c8.desktop.render-stabilized-v1.initial.full.png | 2026-09-28T09:17:09.225Z | Unknown / not recorded |
| EVD-918E2FB7256FF1CF | https://addp.vn/vien-an-duong | browser / render_stabilization | evidence/render/324d2a6661dc99c8.desktop.render-stabilized-v1.json | 2026-09-28T09:17:11.966Z | Unknown / not recorded |
| EVD-FEA7A1313B5D6D86 | https://addp.vn/vien-an-duong | browser / rendered_html | evidence/html/324d2a6661dc99c8.desktop.render-stabilized-v1.rendered.html | 2026-09-28T09:17:11.985Z | Unknown / not recorded |
| EVD-00B101C2913FE2D5 | https://addp.vn/vien-an-duong | seo / rendered_seo | evidence/seo/324d2a6661dc99c8.desktop.render-stabilized-v1.json | 2026-09-28T09:17:12.063Z | Unknown / not recorded |
| EVD-40486071775CB482 | https://addp.vn/vien-an-duong | structured-data / jsonld | evidence/schema/324d2a6661dc99c8.desktop.render-stabilized-v1.json | 2026-09-28T09:17:12.064Z | Unknown / not recorded |
| EVD-B5C22B7BC339F8E4 | https://addp.vn/vien-an-duong | dom / visible_controls | evidence/dom/324d2a6661dc99c8.desktop.render-stabilized-v1.json | 2026-09-28T09:17:12.222Z | Unknown / not recorded |
| EVD-2AD2D55B07F767A2 | https://addp.vn/vien-an-duong | analytics / tracking_signals | evidence/analytics/324d2a6661dc99c8.desktop.render-stabilized-v1.json | 2026-09-28T09:17:12.224Z | Unknown / not recorded |
| EVD-1624C8425C9F8C46 | https://addp.vn/vien-an-duong | screenshot / stabilized_viewport_screenshot | evidence/screenshots/324d2a6661dc99c8.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-28T09:17:12.476Z | Unknown / not recorded |
| EVD-567189A91674BC87 | https://addp.vn/vien-an-duong | screenshot / stabilized_full_screenshot | evidence/screenshots/324d2a6661dc99c8.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-28T09:17:13.170Z | Unknown / not recorded |
| EVD-DE4D5D353C8109B1 | https://addp.vn/vien-an-duong | axe / accessibility | evidence/accessibility/324d2a6661dc99c8.desktop.render-stabilized-v1.json | 2026-09-28T09:17:18.979Z | Unknown / not recorded |
| EVD-E3C513C45DBF8D2F | https://addp.vn/vien-an-duong | performance / lab_metrics | evidence/lighthouse/324d2a6661dc99c8.desktop.render-stabilized-v1.lab.json | 2026-09-28T09:17:19.001Z | Unknown / not recorded |
| EVD-E0492DC2003FEC33 | https://addp.vn/vien-an-duong | network / network_log | evidence/network/324d2a6661dc99c8.desktop.render-stabilized-v1.json | 2026-09-28T09:17:19.005Z | Unknown / not recorded |
| EVD-32229B7C84F6B0B4 | https://addp.vn/vien-an-duong | console / console_log | evidence/console/324d2a6661dc99c8.desktop.render-stabilized-v1.json | 2026-09-28T09:17:19.005Z | Unknown / not recorded |
| EVD-6A67AFC8FD19028E | https://addp.vn/vien-an-duong | screenshot / initial_viewport_screenshot | evidence/screenshots/324d2a6661dc99c8.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-28T09:17:46.533Z | Unknown / not recorded |
| EVD-67321823E1C01103 | https://addp.vn/vien-an-duong | screenshot / initial_full_screenshot | evidence/screenshots/324d2a6661dc99c8.mobile.render-stabilized-v1.initial.full.png | 2026-09-28T09:17:46.849Z | Unknown / not recorded |
| EVD-66CD440D71CCBD30 | https://addp.vn/vien-an-duong | browser / render_stabilization | evidence/render/324d2a6661dc99c8.mobile.render-stabilized-v1.json | 2026-09-28T09:17:57.582Z | Unknown / not recorded |
| EVD-390D363F1BEE13C8 | https://addp.vn/vien-an-duong | browser / rendered_html | evidence/html/324d2a6661dc99c8.mobile.render-stabilized-v1.rendered.html | 2026-09-28T09:17:57.601Z | Unknown / not recorded |
| EVD-772D8F4A458D0B44 | https://addp.vn/vien-an-duong | seo / rendered_seo | evidence/seo/324d2a6661dc99c8.mobile.render-stabilized-v1.json | 2026-09-28T09:17:57.700Z | Unknown / not recorded |
| EVD-794570DF64BF2BB2 | https://addp.vn/vien-an-duong | structured-data / jsonld | evidence/schema/324d2a6661dc99c8.mobile.render-stabilized-v1.json | 2026-09-28T09:17:57.701Z | Unknown / not recorded |
| EVD-16B84E94AF7BF257 | https://addp.vn/vien-an-duong | dom / visible_controls | evidence/dom/324d2a6661dc99c8.mobile.render-stabilized-v1.json | 2026-09-28T09:17:57.879Z | Unknown / not recorded |
| EVD-F1CF56F49E999BE2 | https://addp.vn/vien-an-duong | analytics / tracking_signals | evidence/analytics/324d2a6661dc99c8.mobile.render-stabilized-v1.json | 2026-09-28T09:17:57.880Z | Unknown / not recorded |
| EVD-FB8956751D5399BE | https://addp.vn/vien-an-duong | screenshot / stabilized_viewport_screenshot | evidence/screenshots/324d2a6661dc99c8.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-28T09:17:57.980Z | Unknown / not recorded |
| EVD-60C8A16514496F46 | https://addp.vn/vien-an-duong | screenshot / stabilized_full_screenshot | evidence/screenshots/324d2a6661dc99c8.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-28T09:17:58.264Z | Unknown / not recorded |
| EVD-3A0DABAE7E4E1762 | https://addp.vn/vien-an-duong | axe / accessibility | evidence/accessibility/324d2a6661dc99c8.mobile.render-stabilized-v1.json | 2026-09-28T09:18:04.012Z | Unknown / not recorded |
| EVD-D69D2285D6CE4BC5 | https://addp.vn/vien-an-duong | performance / lab_metrics | evidence/lighthouse/324d2a6661dc99c8.mobile.render-stabilized-v1.lab.json | 2026-09-28T09:18:04.031Z | Unknown / not recorded |
| EVD-94542C7BD661D5CB | https://addp.vn/vien-an-duong | network / network_log | evidence/network/324d2a6661dc99c8.mobile.render-stabilized-v1.json | 2026-09-28T09:18:04.033Z | Unknown / not recorded |
| EVD-79157A4CE00507AB | https://addp.vn/vien-an-duong | console / console_log | evidence/console/324d2a6661dc99c8.mobile.render-stabilized-v1.json | 2026-09-28T09:18:04.033Z | Unknown / not recorded |
| EVD-8B09867D19F1496E | https://addp.vn/vien-an-duong-addp.html | raw-http / raw_html | evidence/html/db93fc388a5ba278.render-stabilized-v1.raw.html | 2026-09-28T09:18:06.906Z | FND-SPEC-HEALTH-002 |
| EVD-927DDAF696B5D339 | https://addp.vn/vien-an-duong-addp.html | seo / raw_seo | evidence/seo/db93fc388a5ba278.render-stabilized-v1.raw.json | 2026-09-28T09:18:06.980Z | FND-SPEC-HEALTH-002 |
| EVD-D1A4789253FA3D20 | https://addp.vn/vien-an-duong-addp.html | screenshot / initial_viewport_screenshot | evidence/screenshots/db93fc388a5ba278.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-28T09:18:26.149Z | Unknown / not recorded |
| EVD-01C70981DA625991 | https://addp.vn/vien-an-duong-addp.html | screenshot / initial_full_screenshot | evidence/screenshots/db93fc388a5ba278.desktop.render-stabilized-v1.initial.full.png | 2026-09-28T09:18:26.425Z | Unknown / not recorded |
| EVD-8A9869EF48387B07 | https://addp.vn/vien-an-duong-addp.html | browser / render_stabilization | evidence/render/db93fc388a5ba278.desktop.render-stabilized-v1.json | 2026-09-28T09:18:27.567Z | Unknown / not recorded |
| EVD-AD18B204CB25AAFE | https://addp.vn/vien-an-duong-addp.html | browser / rendered_html | evidence/html/db93fc388a5ba278.desktop.render-stabilized-v1.rendered.html | 2026-09-28T09:18:27.584Z | Unknown / not recorded |
| EVD-C4AE99238E385779 | https://addp.vn/vien-an-duong-addp.html | seo / rendered_seo | evidence/seo/db93fc388a5ba278.desktop.render-stabilized-v1.json | 2026-09-28T09:18:27.672Z | Unknown / not recorded |
| EVD-02D7356CC02B574B | https://addp.vn/vien-an-duong-addp.html | structured-data / jsonld | evidence/schema/db93fc388a5ba278.desktop.render-stabilized-v1.json | 2026-09-28T09:18:27.673Z | Unknown / not recorded |
| EVD-BAEB862925DCDBD6 | https://addp.vn/vien-an-duong-addp.html | dom / visible_controls | evidence/dom/db93fc388a5ba278.desktop.render-stabilized-v1.json | 2026-09-28T09:18:27.895Z | Unknown / not recorded |
| EVD-142BC3400E9FB9F7 | https://addp.vn/vien-an-duong-addp.html | analytics / tracking_signals | evidence/analytics/db93fc388a5ba278.desktop.render-stabilized-v1.json | 2026-09-28T09:18:27.896Z | Unknown / not recorded |
| EVD-FF8E9901B30017D5 | https://addp.vn/vien-an-duong-addp.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/db93fc388a5ba278.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-28T09:18:27.978Z | Unknown / not recorded |
| EVD-8AF2F6C046D10D13 | https://addp.vn/vien-an-duong-addp.html | screenshot / stabilized_full_screenshot | evidence/screenshots/db93fc388a5ba278.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-28T09:18:28.186Z | Unknown / not recorded |
| EVD-93BD722A664FB9ED | https://addp.vn/vien-an-duong-addp.html | axe / accessibility | evidence/accessibility/db93fc388a5ba278.desktop.render-stabilized-v1.json | 2026-09-28T09:18:34.153Z | Unknown / not recorded |
| EVD-59FEA6B0424B92A9 | https://addp.vn/vien-an-duong-addp.html | performance / lab_metrics | evidence/lighthouse/db93fc388a5ba278.desktop.render-stabilized-v1.lab.json | 2026-09-28T09:18:34.171Z | Unknown / not recorded |
| EVD-7668B3077211D003 | https://addp.vn/vien-an-duong-addp.html | network / network_log | evidence/network/db93fc388a5ba278.desktop.render-stabilized-v1.json | 2026-09-28T09:18:34.173Z | Unknown / not recorded |
| EVD-7446D5E17852368D | https://addp.vn/vien-an-duong-addp.html | console / console_log | evidence/console/db93fc388a5ba278.desktop.render-stabilized-v1.json | 2026-09-28T09:18:34.173Z | Unknown / not recorded |
| EVD-185355071BE6733D | https://addp.vn/vien-an-duong-addp.html | screenshot / initial_viewport_screenshot | evidence/screenshots/db93fc388a5ba278.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-28T09:18:52.759Z | Unknown / not recorded |
| EVD-927257E0837F865D | https://addp.vn/vien-an-duong-addp.html | screenshot / initial_full_screenshot | evidence/screenshots/db93fc388a5ba278.mobile.render-stabilized-v1.initial.full.png | 2026-09-28T09:18:53.124Z | Unknown / not recorded |
| EVD-9F31B8FF6B967C0B | https://addp.vn/vien-an-duong-addp.html | browser / render_stabilization | evidence/render/db93fc388a5ba278.mobile.render-stabilized-v1.json | 2026-09-28T09:18:54.434Z | Unknown / not recorded |
| EVD-8B52A19F88C406F7 | https://addp.vn/vien-an-duong-addp.html | browser / rendered_html | evidence/html/db93fc388a5ba278.mobile.render-stabilized-v1.rendered.html | 2026-09-28T09:18:54.448Z | Unknown / not recorded |
| EVD-B7C8035A64CF2E79 | https://addp.vn/vien-an-duong-addp.html | seo / rendered_seo | evidence/seo/db93fc388a5ba278.mobile.render-stabilized-v1.json | 2026-09-28T09:18:54.512Z | Unknown / not recorded |
| EVD-BDF90743647332F7 | https://addp.vn/vien-an-duong-addp.html | structured-data / jsonld | evidence/schema/db93fc388a5ba278.mobile.render-stabilized-v1.json | 2026-09-28T09:18:54.513Z | Unknown / not recorded |
| EVD-A48B7E534C94B7C3 | https://addp.vn/vien-an-duong-addp.html | dom / visible_controls | evidence/dom/db93fc388a5ba278.mobile.render-stabilized-v1.json | 2026-09-28T09:18:54.720Z | Unknown / not recorded |
| EVD-4080642C5235F8C5 | https://addp.vn/vien-an-duong-addp.html | analytics / tracking_signals | evidence/analytics/db93fc388a5ba278.mobile.render-stabilized-v1.json | 2026-09-28T09:18:54.721Z | Unknown / not recorded |
| EVD-32E528AD927E9E20 | https://addp.vn/vien-an-duong-addp.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/db93fc388a5ba278.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-28T09:18:54.757Z | Unknown / not recorded |
| EVD-65661C6225D2AAFA | https://addp.vn/vien-an-duong-addp.html | screenshot / stabilized_full_screenshot | evidence/screenshots/db93fc388a5ba278.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-28T09:18:54.928Z | Unknown / not recorded |
| EVD-BD625D8C0113FBEA | https://addp.vn/vien-an-duong-addp.html | axe / accessibility | evidence/accessibility/db93fc388a5ba278.mobile.render-stabilized-v1.json | 2026-09-28T09:19:00.881Z | Unknown / not recorded |
| EVD-72E1A5FAECEBA7B5 | https://addp.vn/vien-an-duong-addp.html | performance / lab_metrics | evidence/lighthouse/db93fc388a5ba278.mobile.render-stabilized-v1.lab.json | 2026-09-28T09:19:00.902Z | Unknown / not recorded |
| EVD-843AD8C8CEF92AD0 | https://addp.vn/vien-an-duong-addp.html | network / network_log | evidence/network/db93fc388a5ba278.mobile.render-stabilized-v1.json | 2026-09-28T09:19:00.915Z | Unknown / not recorded |
| EVD-896E9963B41C5CEB | https://addp.vn/vien-an-duong-addp.html | console / console_log | evidence/console/db93fc388a5ba278.mobile.render-stabilized-v1.json | 2026-09-28T09:19:00.915Z | Unknown / not recorded |
| EVD-CB952D69E3E21F68 | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | raw-http / raw_html | evidence/html/dace973208f2be9b.render-stabilized-v1.raw.html | 2026-09-28T09:19:03.619Z | FND-SPEC-CONVERSION-006 |
| EVD-1B8FE822419C5EFC | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | seo / raw_seo | evidence/seo/dace973208f2be9b.render-stabilized-v1.raw.json | 2026-09-28T09:19:03.670Z | Unknown / not recorded |
| EVD-00363F18A4B63EAE | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | screenshot / initial_viewport_screenshot | evidence/screenshots/dace973208f2be9b.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-28T09:19:22.221Z | Unknown / not recorded |
| EVD-C6F541458C61F567 | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | screenshot / initial_full_screenshot | evidence/screenshots/dace973208f2be9b.desktop.render-stabilized-v1.initial.full.png | 2026-09-28T09:19:22.506Z | Unknown / not recorded |
| EVD-5609C03023BDDBFB | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | browser / render_stabilization | evidence/render/dace973208f2be9b.desktop.render-stabilized-v1.json | 2026-09-28T09:19:23.617Z | Unknown / not recorded |
| EVD-141BD363983F8CA5 | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | browser / rendered_html | evidence/html/dace973208f2be9b.desktop.render-stabilized-v1.rendered.html | 2026-09-28T09:19:23.632Z | Unknown / not recorded |
| EVD-45C86D374F7231FA | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | seo / rendered_seo | evidence/seo/dace973208f2be9b.desktop.render-stabilized-v1.json | 2026-09-28T09:19:23.728Z | Unknown / not recorded |
| EVD-EC1D08ED0030B2F3 | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | structured-data / jsonld | evidence/schema/dace973208f2be9b.desktop.render-stabilized-v1.json | 2026-09-28T09:19:23.729Z | Unknown / not recorded |
| EVD-F58D6F5D6D910D3D | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | dom / visible_controls | evidence/dom/dace973208f2be9b.desktop.render-stabilized-v1.json | 2026-09-28T09:19:23.926Z | Unknown / not recorded |
| EVD-5681A6AB9A7072B3 | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | analytics / tracking_signals | evidence/analytics/dace973208f2be9b.desktop.render-stabilized-v1.json | 2026-09-28T09:19:23.927Z | Unknown / not recorded |
| EVD-607BA69DCFB3E038 | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/dace973208f2be9b.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-28T09:19:24.008Z | Unknown / not recorded |
| EVD-AC8A85ED8DFB1A15 | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | screenshot / stabilized_full_screenshot | evidence/screenshots/dace973208f2be9b.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-28T09:19:24.191Z | Unknown / not recorded |
| EVD-F5A855E8ECD360FD | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | axe / accessibility | evidence/accessibility/dace973208f2be9b.desktop.render-stabilized-v1.json | 2026-09-28T09:19:30.058Z | Unknown / not recorded |
| EVD-2E71824683192C74 | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | performance / lab_metrics | evidence/lighthouse/dace973208f2be9b.desktop.render-stabilized-v1.lab.json | 2026-09-28T09:19:30.077Z | Unknown / not recorded |
| EVD-A7BBCA43026F12BB | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | network / network_log | evidence/network/dace973208f2be9b.desktop.render-stabilized-v1.json | 2026-09-28T09:19:30.090Z | Unknown / not recorded |
| EVD-E8BA92561885B18D | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | console / console_log | evidence/console/dace973208f2be9b.desktop.render-stabilized-v1.json | 2026-09-28T09:19:30.090Z | Unknown / not recorded |
| EVD-4CD725FF1E9CAA2D | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | screenshot / initial_viewport_screenshot | evidence/screenshots/dace973208f2be9b.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-28T09:19:51.928Z | Unknown / not recorded |
| EVD-22385970136B0981 | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | screenshot / initial_full_screenshot | evidence/screenshots/dace973208f2be9b.mobile.render-stabilized-v1.initial.full.png | 2026-09-28T09:19:52.103Z | Unknown / not recorded |
| EVD-0412EF6B9B22A7DD | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | browser / render_stabilization | evidence/render/dace973208f2be9b.mobile.render-stabilized-v1.json | 2026-09-28T09:19:53.452Z | Unknown / not recorded |
| EVD-4E50AA1AC2062B52 | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | browser / rendered_html | evidence/html/dace973208f2be9b.mobile.render-stabilized-v1.rendered.html | 2026-09-28T09:19:53.466Z | Unknown / not recorded |
| EVD-07CB4722CB2976CF | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | seo / rendered_seo | evidence/seo/dace973208f2be9b.mobile.render-stabilized-v1.json | 2026-09-28T09:19:53.528Z | Unknown / not recorded |
| EVD-A2DFC42A3E98E1FB | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | structured-data / jsonld | evidence/schema/dace973208f2be9b.mobile.render-stabilized-v1.json | 2026-09-28T09:19:53.529Z | Unknown / not recorded |
| EVD-BC13FF7A930D69BA | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | dom / visible_controls | evidence/dom/dace973208f2be9b.mobile.render-stabilized-v1.json | 2026-09-28T09:19:53.689Z | Unknown / not recorded |
| EVD-CB4848B48C0CAAED | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | analytics / tracking_signals | evidence/analytics/dace973208f2be9b.mobile.render-stabilized-v1.json | 2026-09-28T09:19:53.690Z | Unknown / not recorded |
| EVD-77BF7CA825976135 | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/dace973208f2be9b.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-28T09:19:53.738Z | Unknown / not recorded |
| EVD-C587F8F3737091EE | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | screenshot / stabilized_full_screenshot | evidence/screenshots/dace973208f2be9b.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-28T09:19:53.871Z | Unknown / not recorded |
| EVD-789E389340CACD98 | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | axe / accessibility | evidence/accessibility/dace973208f2be9b.mobile.render-stabilized-v1.json | 2026-09-28T09:19:59.763Z | Unknown / not recorded |
| EVD-BFD2A219B296926D | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | performance / lab_metrics | evidence/lighthouse/dace973208f2be9b.mobile.render-stabilized-v1.lab.json | 2026-09-28T09:19:59.783Z | Unknown / not recorded |
| EVD-2571AD0BA925A73D | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | network / network_log | evidence/network/dace973208f2be9b.mobile.render-stabilized-v1.json | 2026-09-28T09:19:59.785Z | Unknown / not recorded |
| EVD-D0A7AB97A4FFA7C8 | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | console / console_log | evidence/console/dace973208f2be9b.mobile.render-stabilized-v1.json | 2026-09-28T09:19:59.785Z | Unknown / not recorded |
| EVD-E744CA9DD952F84A | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | raw-http / raw_html | evidence/html/2dcff7b0a97be809.render-stabilized-v1.raw.html | 2026-09-28T09:20:02.396Z | FND-SPEC-CONVERSION-006 |
| EVD-A27A80D35B6C440F | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | seo / raw_seo | evidence/seo/2dcff7b0a97be809.render-stabilized-v1.raw.json | 2026-09-28T09:20:02.446Z | Unknown / not recorded |
| EVD-415D616C33C3D32D | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | screenshot / initial_viewport_screenshot | evidence/screenshots/2dcff7b0a97be809.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-28T09:20:20.771Z | Unknown / not recorded |
| EVD-4571B4BD4E720D75 | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | screenshot / initial_full_screenshot | evidence/screenshots/2dcff7b0a97be809.desktop.render-stabilized-v1.initial.full.png | 2026-09-28T09:20:21.067Z | Unknown / not recorded |
| EVD-9A66C67F64AEBC63 | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | browser / render_stabilization | evidence/render/2dcff7b0a97be809.desktop.render-stabilized-v1.json | 2026-09-28T09:20:22.193Z | Unknown / not recorded |
| EVD-D75EA94CD99E4BCD | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | browser / rendered_html | evidence/html/2dcff7b0a97be809.desktop.render-stabilized-v1.rendered.html | 2026-09-28T09:20:22.206Z | Unknown / not recorded |
| EVD-6D52969A36979527 | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | seo / rendered_seo | evidence/seo/2dcff7b0a97be809.desktop.render-stabilized-v1.json | 2026-09-28T09:20:22.243Z | Unknown / not recorded |
| EVD-CDC7C53484C34862 | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | structured-data / jsonld | evidence/schema/2dcff7b0a97be809.desktop.render-stabilized-v1.json | 2026-09-28T09:20:22.244Z | Unknown / not recorded |
| EVD-5F2A997BBD086830 | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | dom / visible_controls | evidence/dom/2dcff7b0a97be809.desktop.render-stabilized-v1.json | 2026-09-28T09:20:22.411Z | Unknown / not recorded |
| EVD-67FF5B31AFC99220 | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | analytics / tracking_signals | evidence/analytics/2dcff7b0a97be809.desktop.render-stabilized-v1.json | 2026-09-28T09:20:22.412Z | Unknown / not recorded |
| EVD-7492AD7EF343FC38 | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/2dcff7b0a97be809.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-28T09:20:22.494Z | Unknown / not recorded |
| EVD-CE13C47922974400 | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | screenshot / stabilized_full_screenshot | evidence/screenshots/2dcff7b0a97be809.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-28T09:20:22.706Z | Unknown / not recorded |
| EVD-5B0E0C733EB6044C | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | axe / accessibility | evidence/accessibility/2dcff7b0a97be809.desktop.render-stabilized-v1.json | 2026-09-28T09:20:28.566Z | Unknown / not recorded |
| EVD-93C7CF5438BA44FE | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | performance / lab_metrics | evidence/lighthouse/2dcff7b0a97be809.desktop.render-stabilized-v1.lab.json | 2026-09-28T09:20:28.587Z | Unknown / not recorded |
| EVD-12CE94826C9128B3 | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | network / network_log | evidence/network/2dcff7b0a97be809.desktop.render-stabilized-v1.json | 2026-09-28T09:20:28.590Z | Unknown / not recorded |
| EVD-75005AD6A1D980F4 | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | console / console_log | evidence/console/2dcff7b0a97be809.desktop.render-stabilized-v1.json | 2026-09-28T09:20:28.590Z | Unknown / not recorded |
| EVD-7E28F3B4B9A5C603 | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | screenshot / initial_viewport_screenshot | evidence/screenshots/2dcff7b0a97be809.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-28T09:20:50.769Z | Unknown / not recorded |
| EVD-82AA56A463D7A2A8 | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | screenshot / initial_full_screenshot | evidence/screenshots/2dcff7b0a97be809.mobile.render-stabilized-v1.initial.full.png | 2026-09-28T09:20:50.966Z | Unknown / not recorded |
| EVD-0624D1429397F0BB | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | browser / render_stabilization | evidence/render/2dcff7b0a97be809.mobile.render-stabilized-v1.json | 2026-09-28T09:20:52.493Z | Unknown / not recorded |
| EVD-73CE5A902CD4CEDB | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | browser / rendered_html | evidence/html/2dcff7b0a97be809.mobile.render-stabilized-v1.rendered.html | 2026-09-28T09:20:52.512Z | Unknown / not recorded |
| EVD-45FE03313582341B | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | seo / rendered_seo | evidence/seo/2dcff7b0a97be809.mobile.render-stabilized-v1.json | 2026-09-28T09:20:52.609Z | Unknown / not recorded |
| EVD-9CF5FC3D678D6137 | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | structured-data / jsonld | evidence/schema/2dcff7b0a97be809.mobile.render-stabilized-v1.json | 2026-09-28T09:20:52.610Z | Unknown / not recorded |
| EVD-B29CDCC4F135562C | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | dom / visible_controls | evidence/dom/2dcff7b0a97be809.mobile.render-stabilized-v1.json | 2026-09-28T09:20:52.809Z | Unknown / not recorded |
| EVD-AD77EA15266AFBA0 | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | analytics / tracking_signals | evidence/analytics/2dcff7b0a97be809.mobile.render-stabilized-v1.json | 2026-09-28T09:20:52.810Z | Unknown / not recorded |
| EVD-39B0FC8C55898AB7 | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/2dcff7b0a97be809.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-28T09:20:52.883Z | Unknown / not recorded |
| EVD-C88592EE4369BB9D | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | screenshot / stabilized_full_screenshot | evidence/screenshots/2dcff7b0a97be809.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-28T09:20:53.068Z | Unknown / not recorded |
| EVD-37DC51B13F6A035B | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | axe / accessibility | evidence/accessibility/2dcff7b0a97be809.mobile.render-stabilized-v1.json | 2026-09-28T09:20:58.974Z | Unknown / not recorded |
| EVD-1ECFCBC697EDCEBD | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | performance / lab_metrics | evidence/lighthouse/2dcff7b0a97be809.mobile.render-stabilized-v1.lab.json | 2026-09-28T09:20:58.996Z | Unknown / not recorded |
| EVD-BBEC7F9B07DA447A | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | network / network_log | evidence/network/2dcff7b0a97be809.mobile.render-stabilized-v1.json | 2026-09-28T09:20:58.999Z | Unknown / not recorded |
| EVD-CAFCC16C0F279F3A | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | console / console_log | evidence/console/2dcff7b0a97be809.mobile.render-stabilized-v1.json | 2026-09-28T09:20:58.999Z | Unknown / not recorded |
| EVD-64F79412948E2E74 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | raw-http / raw_html | evidence/html/f63cda436b621780.render-stabilized-v1.raw.html | 2026-09-28T09:21:01.585Z | Unknown / not recorded |
| EVD-6829F253D543AA00 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | seo / raw_seo | evidence/seo/f63cda436b621780.render-stabilized-v1.raw.json | 2026-09-28T09:21:01.683Z | Unknown / not recorded |
| EVD-424E0712C86F4DDD | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | screenshot / initial_viewport_screenshot | evidence/screenshots/f63cda436b621780.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-28T09:21:20.082Z | Unknown / not recorded |
| EVD-26CCF81945888744 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | screenshot / initial_full_screenshot | evidence/screenshots/f63cda436b621780.desktop.render-stabilized-v1.initial.full.png | 2026-09-28T09:21:20.386Z | Unknown / not recorded |
| EVD-F45901359CBE6FDF | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | browser / render_stabilization | evidence/render/f63cda436b621780.desktop.render-stabilized-v1.json | 2026-09-28T09:21:21.524Z | Unknown / not recorded |
| EVD-73EEABB23C0AE267 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | browser / rendered_html | evidence/html/f63cda436b621780.desktop.render-stabilized-v1.rendered.html | 2026-09-28T09:21:21.538Z | Unknown / not recorded |
| EVD-F30092BBC7C579F9 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | seo / rendered_seo | evidence/seo/f63cda436b621780.desktop.render-stabilized-v1.json | 2026-09-28T09:21:21.630Z | Unknown / not recorded |
| EVD-42E20B8A87A0AE1E | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | structured-data / jsonld | evidence/schema/f63cda436b621780.desktop.render-stabilized-v1.json | 2026-09-28T09:21:21.631Z | Unknown / not recorded |
| EVD-666A20CBC9102059 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | dom / visible_controls | evidence/dom/f63cda436b621780.desktop.render-stabilized-v1.json | 2026-09-28T09:21:21.825Z | Unknown / not recorded |
| EVD-EE962536F374D21A | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | analytics / tracking_signals | evidence/analytics/f63cda436b621780.desktop.render-stabilized-v1.json | 2026-09-28T09:21:21.828Z | Unknown / not recorded |
| EVD-80B23683B26FB81F | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/f63cda436b621780.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-28T09:21:21.929Z | Unknown / not recorded |
| EVD-29ECF538E1F7F287 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | screenshot / stabilized_full_screenshot | evidence/screenshots/f63cda436b621780.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-28T09:21:22.101Z | Unknown / not recorded |
| EVD-16831D79F73BB26A | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | axe / accessibility | evidence/accessibility/f63cda436b621780.desktop.render-stabilized-v1.json | 2026-09-28T09:21:27.922Z | Unknown / not recorded |
| EVD-05E3B5ADFC472913 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | performance / lab_metrics | evidence/lighthouse/f63cda436b621780.desktop.render-stabilized-v1.lab.json | 2026-09-28T09:21:27.939Z | Unknown / not recorded |
| EVD-002878670EA7AB33 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | network / network_log | evidence/network/f63cda436b621780.desktop.render-stabilized-v1.json | 2026-09-28T09:21:27.953Z | Unknown / not recorded |
| EVD-A2A14EBEC08108C2 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | console / console_log | evidence/console/f63cda436b621780.desktop.render-stabilized-v1.json | 2026-09-28T09:21:27.953Z | Unknown / not recorded |
| EVD-1C7E8D1499017F52 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | screenshot / initial_viewport_screenshot | evidence/screenshots/f63cda436b621780.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-28T09:21:46.275Z | Unknown / not recorded |
| EVD-A17E5F54B2DADECF | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | screenshot / initial_full_screenshot | evidence/screenshots/f63cda436b621780.mobile.render-stabilized-v1.initial.full.png | 2026-09-28T09:21:46.495Z | Unknown / not recorded |
| EVD-D6B53FAC39250C2C | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | browser / render_stabilization | evidence/render/f63cda436b621780.mobile.render-stabilized-v1.json | 2026-09-28T09:21:47.825Z | Unknown / not recorded |
| EVD-4208F7044BF96AEC | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | browser / rendered_html | evidence/html/f63cda436b621780.mobile.render-stabilized-v1.rendered.html | 2026-09-28T09:21:47.840Z | Unknown / not recorded |
| EVD-A0B6B69633CD321A | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | seo / rendered_seo | evidence/seo/f63cda436b621780.mobile.render-stabilized-v1.json | 2026-09-28T09:21:47.895Z | Unknown / not recorded |
| EVD-599FDCAEBF5A65AE | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | structured-data / jsonld | evidence/schema/f63cda436b621780.mobile.render-stabilized-v1.json | 2026-09-28T09:21:47.907Z | Unknown / not recorded |
| EVD-21E3DAAEE7087643 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | dom / visible_controls | evidence/dom/f63cda436b621780.mobile.render-stabilized-v1.json | 2026-09-28T09:21:48.050Z | Unknown / not recorded |
| EVD-43BCC845C1543BC8 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | analytics / tracking_signals | evidence/analytics/f63cda436b621780.mobile.render-stabilized-v1.json | 2026-09-28T09:21:48.054Z | Unknown / not recorded |
| EVD-24680ED40E336C26 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | screenshot / stabilized_viewport_screenshot | evidence/screenshots/f63cda436b621780.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-28T09:21:48.097Z | Unknown / not recorded |
| EVD-70A8A002F5D748FD | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | screenshot / stabilized_full_screenshot | evidence/screenshots/f63cda436b621780.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-28T09:21:48.245Z | Unknown / not recorded |
| EVD-422DF7558C8B49FA | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | axe / accessibility | evidence/accessibility/f63cda436b621780.mobile.render-stabilized-v1.json | 2026-09-28T09:21:49.068Z | Unknown / not recorded |
| EVD-C98AEF87C0D7B4AA | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | performance / lab_metrics | evidence/lighthouse/f63cda436b621780.mobile.render-stabilized-v1.lab.json | 2026-09-28T09:21:49.088Z | Unknown / not recorded |
| EVD-AF8302F83BEA533E | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | network / network_log | evidence/network/f63cda436b621780.mobile.render-stabilized-v1.json | 2026-09-28T09:21:49.091Z | Unknown / not recorded |
| EVD-856F6433FD510A49 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | console / console_log | evidence/console/f63cda436b621780.mobile.render-stabilized-v1.json | 2026-09-28T09:21:49.091Z | Unknown / not recorded |
| EVD-6EBE19F9F509FEE8 | https://addp.vn/vien-sui-dovital | raw-http / raw_html | evidence/html/6c7fd006301e7f83.render-stabilized-v1.raw.html | 2026-09-28T09:21:51.239Z | Unknown / not recorded |
| EVD-965DD7D7F355CF33 | https://addp.vn/vien-sui-dovital | seo / raw_seo | evidence/seo/6c7fd006301e7f83.render-stabilized-v1.raw.json | 2026-09-28T09:21:51.263Z | Unknown / not recorded |
| EVD-D7F0E2489A816B7D | https://addp.vn/vien-sui-dovital | screenshot / initial_viewport_screenshot | evidence/screenshots/6c7fd006301e7f83.desktop.render-stabilized-v1.initial.viewport.png | 2026-09-28T09:22:05.621Z | Unknown / not recorded |
| EVD-948BEDE80DAFEE7F | https://addp.vn/vien-sui-dovital | screenshot / initial_full_screenshot | evidence/screenshots/6c7fd006301e7f83.desktop.render-stabilized-v1.initial.full.png | 2026-09-28T09:22:06.100Z | Unknown / not recorded |
| EVD-BF7DE6BB777C2DFD | https://addp.vn/vien-sui-dovital | browser / render_stabilization | evidence/render/6c7fd006301e7f83.desktop.render-stabilized-v1.json | 2026-09-28T09:22:06.738Z | Unknown / not recorded |
| EVD-8D2F6FC8A600CAEB | https://addp.vn/vien-sui-dovital | browser / rendered_html | evidence/html/6c7fd006301e7f83.desktop.render-stabilized-v1.rendered.html | 2026-09-28T09:22:06.750Z | Unknown / not recorded |
| EVD-8CB1EC08A5CD3681 | https://addp.vn/vien-sui-dovital | seo / rendered_seo | evidence/seo/6c7fd006301e7f83.desktop.render-stabilized-v1.json | 2026-09-28T09:22:06.775Z | Unknown / not recorded |
| EVD-93639CE56205D6C9 | https://addp.vn/vien-sui-dovital | structured-data / jsonld | evidence/schema/6c7fd006301e7f83.desktop.render-stabilized-v1.json | 2026-09-28T09:22:06.776Z | Unknown / not recorded |
| EVD-8A4252F03DFEAB90 | https://addp.vn/vien-sui-dovital | dom / visible_controls | evidence/dom/6c7fd006301e7f83.desktop.render-stabilized-v1.json | 2026-09-28T09:22:06.898Z | Unknown / not recorded |
| EVD-5F3B9A6F001AE52E | https://addp.vn/vien-sui-dovital | analytics / tracking_signals | evidence/analytics/6c7fd006301e7f83.desktop.render-stabilized-v1.json | 2026-09-28T09:22:06.899Z | Unknown / not recorded |
| EVD-A7E342E03D7C4C9B | https://addp.vn/vien-sui-dovital | screenshot / stabilized_viewport_screenshot | evidence/screenshots/6c7fd006301e7f83.desktop.render-stabilized-v1.stabilized.viewport.png | 2026-09-28T09:22:07.246Z | Unknown / not recorded |
| EVD-AC1D92805EBDD479 | https://addp.vn/vien-sui-dovital | screenshot / stabilized_full_screenshot | evidence/screenshots/6c7fd006301e7f83.desktop.render-stabilized-v1.stabilized.full.png | 2026-09-28T09:22:07.698Z | Unknown / not recorded |
| EVD-783FCA095569B579 | https://addp.vn/vien-sui-dovital | axe / accessibility | evidence/accessibility/6c7fd006301e7f83.desktop.render-stabilized-v1.json | 2026-09-28T09:22:13.402Z | Unknown / not recorded |
| EVD-6436B3721BD61378 | https://addp.vn/vien-sui-dovital | performance / lab_metrics | evidence/lighthouse/6c7fd006301e7f83.desktop.render-stabilized-v1.lab.json | 2026-09-28T09:22:13.420Z | Unknown / not recorded |
| EVD-7165CEA1066B16CC | https://addp.vn/vien-sui-dovital | network / network_log | evidence/network/6c7fd006301e7f83.desktop.render-stabilized-v1.json | 2026-09-28T09:22:13.422Z | Unknown / not recorded |
| EVD-4C05D770E79D5551 | https://addp.vn/vien-sui-dovital | console / console_log | evidence/console/6c7fd006301e7f83.desktop.render-stabilized-v1.json | 2026-09-28T09:22:13.422Z | Unknown / not recorded |
| EVD-61C7A41B2FBD0135 | https://addp.vn/vien-sui-dovital | screenshot / initial_viewport_screenshot | evidence/screenshots/6c7fd006301e7f83.mobile.render-stabilized-v1.initial.viewport.png | 2026-09-28T09:22:32.519Z | Unknown / not recorded |
| EVD-8B7A32D761461DDB | https://addp.vn/vien-sui-dovital | screenshot / initial_full_screenshot | evidence/screenshots/6c7fd006301e7f83.mobile.render-stabilized-v1.initial.full.png | 2026-09-28T09:22:32.674Z | Unknown / not recorded |
| EVD-E580DFDABDBDFA85 | https://addp.vn/vien-sui-dovital | browser / render_stabilization | evidence/render/6c7fd006301e7f83.mobile.render-stabilized-v1.json | 2026-09-28T09:22:33.283Z | Unknown / not recorded |
| EVD-15492BDAE39A92A5 | https://addp.vn/vien-sui-dovital | browser / rendered_html | evidence/html/6c7fd006301e7f83.mobile.render-stabilized-v1.rendered.html | 2026-09-28T09:22:33.295Z | Unknown / not recorded |
| EVD-9B2899B00BBE17A7 | https://addp.vn/vien-sui-dovital | seo / rendered_seo | evidence/seo/6c7fd006301e7f83.mobile.render-stabilized-v1.json | 2026-09-28T09:22:33.373Z | Unknown / not recorded |
| EVD-73F945DEF4174055 | https://addp.vn/vien-sui-dovital | structured-data / jsonld | evidence/schema/6c7fd006301e7f83.mobile.render-stabilized-v1.json | 2026-09-28T09:22:33.374Z | Unknown / not recorded |
| EVD-89EE03FE2064C1DE | https://addp.vn/vien-sui-dovital | dom / visible_controls | evidence/dom/6c7fd006301e7f83.mobile.render-stabilized-v1.json | 2026-09-28T09:22:33.496Z | Unknown / not recorded |
| EVD-1B5D77D879F0E304 | https://addp.vn/vien-sui-dovital | analytics / tracking_signals | evidence/analytics/6c7fd006301e7f83.mobile.render-stabilized-v1.json | 2026-09-28T09:22:33.497Z | Unknown / not recorded |
| EVD-798C360216CDA350 | https://addp.vn/vien-sui-dovital | screenshot / stabilized_viewport_screenshot | evidence/screenshots/6c7fd006301e7f83.mobile.render-stabilized-v1.stabilized.viewport.png | 2026-09-28T09:22:33.569Z | Unknown / not recorded |
| EVD-C432FC47A8D3C2EE | https://addp.vn/vien-sui-dovital | screenshot / stabilized_full_screenshot | evidence/screenshots/6c7fd006301e7f83.mobile.render-stabilized-v1.stabilized.full.png | 2026-09-28T09:22:33.645Z | Unknown / not recorded |
| EVD-CF17BA036461CAAD | https://addp.vn/vien-sui-dovital | axe / accessibility | evidence/accessibility/6c7fd006301e7f83.mobile.render-stabilized-v1.json | 2026-09-28T09:22:39.273Z | Unknown / not recorded |
| EVD-0F84AF7A93DFE237 | https://addp.vn/vien-sui-dovital | performance / lab_metrics | evidence/lighthouse/6c7fd006301e7f83.mobile.render-stabilized-v1.lab.json | 2026-09-28T09:22:39.294Z | Unknown / not recorded |
| EVD-E026453CF5245CC8 | https://addp.vn/vien-sui-dovital | network / network_log | evidence/network/6c7fd006301e7f83.mobile.render-stabilized-v1.json | 2026-09-28T09:22:39.296Z | Unknown / not recorded |
| EVD-C9BA4D02B9B988B8 | https://addp.vn/vien-sui-dovital | console / console_log | evidence/console/6c7fd006301e7f83.mobile.render-stabilized-v1.json | 2026-09-28T09:22:39.297Z | Unknown / not recorded |
| EVD-B4E970182A871FB8-0 | https://addp.vn/ | persona-first_time-coverage-v1 / journey | evidence/journeys/first_time-coverage-0-.json | 2026-09-28T09:25:00.359Z | Unknown / not recorded |
| EVD-B4E970182A871FB8-0-SHOT | https://addp.vn/ | persona-first_time-coverage-v1 / screenshot | evidence/journeys/first_time-coverage-0-.png | 2026-09-28T09:25:00.359Z | Unknown / not recorded |
| EVD-72EEA95DB9F0EDD5-1 | https://addp.vn/vien-an-duong | persona-first_time-coverage-v1 / journey | evidence/journeys/first_time-coverage-1-vien-an-duong.json | 2026-09-28T09:25:09.190Z | Unknown / not recorded |
| EVD-72EEA95DB9F0EDD5-1-SHOT | https://addp.vn/vien-an-duong | persona-first_time-coverage-v1 / screenshot | evidence/journeys/first_time-coverage-1-vien-an-duong.png | 2026-09-28T09:25:09.190Z | Unknown / not recorded |
| EVD-E6D0865F197D96B9-2 | https://addp.vn/vien-an-duong-addp.html | persona-first_time-coverage-v1 / journey | evidence/journeys/first_time-coverage-2-vien-an-duong-addp_html.json | 2026-09-28T09:25:15.505Z | Unknown / not recorded |
| EVD-E6D0865F197D96B9-2-SHOT | https://addp.vn/vien-an-duong-addp.html | persona-first_time-coverage-v1 / screenshot | evidence/journeys/first_time-coverage-2-vien-an-duong-addp_html.png | 2026-09-28T09:25:15.505Z | Unknown / not recorded |
| EVD-95A7A385066B4767-0 | https://addp.vn/vien-an-duong-addp.html | persona-high_intent-coverage-v1 / journey | evidence/journeys/high_intent-coverage-0-vien-an-duong-addp_html.json | 2026-09-28T09:25:32.567Z | Unknown / not recorded |
| EVD-95A7A385066B4767-0-SHOT | https://addp.vn/vien-an-duong-addp.html | persona-high_intent-coverage-v1 / screenshot | evidence/journeys/high_intent-coverage-0-vien-an-duong-addp_html.png | 2026-09-28T09:25:32.567Z | Unknown / not recorded |
| EVD-4904299128015771-1 | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | persona-high_intent-coverage-v1 / journey | evidence/journeys/high_intent-coverage-1-vien-an-duong-addp-combo-mua-2-tang-2_html.json | 2026-09-28T09:25:34.768Z | Unknown / not recorded |
| EVD-4904299128015771-1-SHOT | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | persona-high_intent-coverage-v1 / screenshot | evidence/journeys/high_intent-coverage-1-vien-an-duong-addp-combo-mua-2-tang-2_html.png | 2026-09-28T09:25:34.768Z | Unknown / not recorded |
| EVD-3AF216AB0137661E-2 | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | persona-high_intent-coverage-v1 / journey | evidence/journeys/high_intent-coverage-2-vien-an-duong-addp-combo-mua-3-tang-4_html.json | 2026-09-28T09:25:36.707Z | Unknown / not recorded |
| EVD-3AF216AB0137661E-2-SHOT | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | persona-high_intent-coverage-v1 / screenshot | evidence/journeys/high_intent-coverage-2-vien-an-duong-addp-combo-mua-3-tang-4_html.png | 2026-09-28T09:25:36.707Z | Unknown / not recorded |
| EVD-EAD334DEA5DC1406-3 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | persona-high_intent-coverage-v1 / journey | evidence/journeys/high_intent-coverage-3-vien-an-duong-addp-combo-hai-hop_html.json | 2026-09-28T09:25:38.573Z | Unknown / not recorded |
| EVD-EAD334DEA5DC1406-3-SHOT | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | persona-high_intent-coverage-v1 / screenshot | evidence/journeys/high_intent-coverage-3-vien-an-duong-addp-combo-hai-hop_html.png | 2026-09-28T09:25:38.573Z | Unknown / not recorded |
| EVD-A5A2EC5D07364AA0-0 | https://addp.vn/vien-an-duong-addp.html | persona-research-coverage-v1 / journey | evidence/journeys/research-coverage-0-vien-an-duong-addp_html.json | 2026-09-28T09:25:55.685Z | Unknown / not recorded |
| EVD-A5A2EC5D07364AA0-0-SHOT | https://addp.vn/vien-an-duong-addp.html | persona-research-coverage-v1 / screenshot | evidence/journeys/research-coverage-0-vien-an-duong-addp_html.png | 2026-09-28T09:25:55.685Z | Unknown / not recorded |
| EVD-600B2A843FE0B546-1 | https://addp.vn/chinh-sach-dat-hang | persona-research-coverage-v1 / journey | evidence/journeys/research-coverage-1-chinh-sach-dat-hang.json | 2026-09-28T09:25:58.256Z | Unknown / not recorded |
| EVD-600B2A843FE0B546-1-SHOT | https://addp.vn/chinh-sach-dat-hang | persona-research-coverage-v1 / screenshot | evidence/journeys/research-coverage-1-chinh-sach-dat-hang.png | 2026-09-28T09:25:58.256Z | Unknown / not recorded |
| EVD-A52D49B4C5C8E378-2 | https://addp.vn/gioi-thieu | persona-research-coverage-v1 / journey | evidence/journeys/research-coverage-2-gioi-thieu.json | 2026-09-28T09:26:00.589Z | Unknown / not recorded |
| EVD-A52D49B4C5C8E378-2-SHOT | https://addp.vn/gioi-thieu | persona-research-coverage-v1 / screenshot | evidence/journeys/research-coverage-2-gioi-thieu.png | 2026-09-28T09:26:00.589Z | Unknown / not recorded |
| EVD-6934AB226B4221DC-0 | https://addp.vn/vien-an-duong | persona-mobile-coverage-v1 / journey | evidence/journeys/mobile-coverage-0-vien-an-duong.json | 2026-09-28T09:26:19.237Z | Unknown / not recorded |
| EVD-6934AB226B4221DC-0-SHOT | https://addp.vn/vien-an-duong | persona-mobile-coverage-v1 / screenshot | evidence/journeys/mobile-coverage-0-vien-an-duong.png | 2026-09-28T09:26:19.237Z | Unknown / not recorded |
| EVD-051C12B979C427BA-1 | https://addp.vn/vien-an-duong-addp.html | persona-mobile-coverage-v1 / journey | evidence/journeys/mobile-coverage-1-vien-an-duong-addp_html.json | 2026-09-28T09:26:21.497Z | Unknown / not recorded |
| EVD-051C12B979C427BA-1-SHOT | https://addp.vn/vien-an-duong-addp.html | persona-mobile-coverage-v1 / screenshot | evidence/journeys/mobile-coverage-1-vien-an-duong-addp_html.png | 2026-09-28T09:26:21.497Z | Unknown / not recorded |
| EVD-089A1FB6C49C9064 | https://addp.vn/ | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/e4e0c9a45799894e.desktop.record.json | 2026-09-28T09:56:51.354Z | Unknown / not recorded |
| EVD-465168A6A71EDB38 | https://addp.vn/ | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/e4e0c9a45799894e.desktop.postscroll.viewport.png | 2026-09-28T09:56:51.354Z | Unknown / not recorded |
| EVD-790C8DBC086983DA | https://addp.vn/ | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/e4e0c9a45799894e.desktop.postscroll.full.png | 2026-09-28T09:56:51.354Z | Unknown / not recorded |
| EVD-0700C791CC4FFB89 | https://addp.vn/ | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/e4e0c9a45799894e.mobile.record.json | 2026-09-28T09:57:15.369Z | Unknown / not recorded |
| EVD-54E1A17F79123C44 | https://addp.vn/ | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/e4e0c9a45799894e.mobile.postscroll.viewport.png | 2026-09-28T09:57:15.369Z | Unknown / not recorded |
| EVD-C1DECAC3B7AA313C | https://addp.vn/ | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/e4e0c9a45799894e.mobile.postscroll.full.png | 2026-09-28T09:57:15.369Z | Unknown / not recorded |
| EVD-0D7CED19D5BA3DC8 | https://addp.vn/benh-ly | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/65e3d78cc6db4646.desktop.record.json | 2026-09-28T09:57:38.018Z | Unknown / not recorded |
| EVD-979BBA3145240F0A | https://addp.vn/benh-ly | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/65e3d78cc6db4646.desktop.postscroll.viewport.png | 2026-09-28T09:57:38.018Z | Unknown / not recorded |
| EVD-7DDE0A144D5D4568 | https://addp.vn/benh-ly | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/65e3d78cc6db4646.desktop.postscroll.full.png | 2026-09-28T09:57:38.018Z | Unknown / not recorded |
| EVD-95FE8CF98EB31674 | https://addp.vn/benh-ly | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/65e3d78cc6db4646.mobile.record.json | 2026-09-28T09:58:28.666Z | Unknown / not recorded |
| EVD-2DE9113757C5098B | https://addp.vn/benh-ly | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/65e3d78cc6db4646.mobile.postscroll.viewport.png | 2026-09-28T09:58:28.666Z | Unknown / not recorded |
| EVD-8C411BD64414E89F | https://addp.vn/benh-ly | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/65e3d78cc6db4646.mobile.postscroll.full.png | 2026-09-28T09:58:28.666Z | Unknown / not recorded |
| EVD-0AC2F1965C226C72 | https://addp.vn/blog/category/suc-khoe-tieu-duong | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/b929b6c94da55a49.desktop.record.json | 2026-09-28T09:58:52.795Z | Unknown / not recorded |
| EVD-0B3C366283BDE1C0 | https://addp.vn/blog/category/suc-khoe-tieu-duong | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/b929b6c94da55a49.desktop.postscroll.viewport.png | 2026-09-28T09:58:52.795Z | Unknown / not recorded |
| EVD-BF4BAEB334B0DEEF | https://addp.vn/blog/category/suc-khoe-tieu-duong | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/b929b6c94da55a49.desktop.postscroll.full.png | 2026-09-28T09:58:52.795Z | Unknown / not recorded |
| EVD-F0C4955D80448E0F | https://addp.vn/blog/category/suc-khoe-tieu-duong | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/b929b6c94da55a49.mobile.record.json | 2026-09-28T09:59:42.691Z | Unknown / not recorded |
| EVD-4C938C96A06110BB | https://addp.vn/blog/category/suc-khoe-tieu-duong | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/b929b6c94da55a49.mobile.postscroll.viewport.png | 2026-09-28T09:59:42.691Z | Unknown / not recorded |
| EVD-FA563B01D552FF60 | https://addp.vn/blog/category/suc-khoe-tieu-duong | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/b929b6c94da55a49.mobile.postscroll.full.png | 2026-09-28T09:59:42.691Z | Unknown / not recorded |
| EVD-1C7341398E15893E | https://addp.vn/chinh-sach-dat-hang | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/9e2bc4d9801a94db.desktop.record.json | 2026-09-28T10:00:03.450Z | Unknown / not recorded |
| EVD-62399FE9F0830B25 | https://addp.vn/chinh-sach-dat-hang | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/9e2bc4d9801a94db.desktop.postscroll.viewport.png | 2026-09-28T10:00:03.450Z | Unknown / not recorded |
| EVD-2F628F1E3E5B0262 | https://addp.vn/chinh-sach-dat-hang | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/9e2bc4d9801a94db.desktop.postscroll.full.png | 2026-09-28T10:00:03.450Z | Unknown / not recorded |
| EVD-5B6D7DB454A36B9F | https://addp.vn/chinh-sach-dat-hang | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/9e2bc4d9801a94db.mobile.record.json | 2026-09-28T10:00:53.160Z | Unknown / not recorded |
| EVD-CF932E0B419E6C48 | https://addp.vn/chinh-sach-dat-hang | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/9e2bc4d9801a94db.mobile.postscroll.viewport.png | 2026-09-28T10:00:53.160Z | Unknown / not recorded |
| EVD-0076B37D4D54BC4B | https://addp.vn/chinh-sach-dat-hang | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/9e2bc4d9801a94db.mobile.postscroll.full.png | 2026-09-28T10:00:53.160Z | Unknown / not recorded |
| EVD-F7967085FBC95C50 | https://addp.vn/contact | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/c08fc3972f30bc5d.desktop.record.json | 2026-09-28T10:01:14.625Z | Unknown / not recorded |
| EVD-EB232AC42DC8EA7F | https://addp.vn/contact | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/c08fc3972f30bc5d.desktop.postscroll.viewport.png | 2026-09-28T10:01:14.625Z | Unknown / not recorded |
| EVD-6AC4E762342F88AB | https://addp.vn/contact | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/c08fc3972f30bc5d.desktop.postscroll.full.png | 2026-09-28T10:01:14.625Z | Unknown / not recorded |
| EVD-A91272ABA0B81C3E | https://addp.vn/contact | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/c08fc3972f30bc5d.mobile.record.json | 2026-09-28T10:02:04.591Z | Unknown / not recorded |
| EVD-2916D48A64756F80 | https://addp.vn/contact | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/c08fc3972f30bc5d.mobile.postscroll.viewport.png | 2026-09-28T10:02:04.591Z | Unknown / not recorded |
| EVD-C54FFEDB4873384D | https://addp.vn/contact | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/c08fc3972f30bc5d.mobile.postscroll.full.png | 2026-09-28T10:02:04.591Z | Unknown / not recorded |
| EVD-05FD5EA26B723B54 | https://addp.vn/gioi-thieu | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/d6027b0617e26ca1.desktop.record.json | 2026-09-28T10:02:20.019Z | Unknown / not recorded |
| EVD-322BD45F7C89FF17 | https://addp.vn/gioi-thieu | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/d6027b0617e26ca1.desktop.postscroll.viewport.png | 2026-09-28T10:02:20.019Z | Unknown / not recorded |
| EVD-9410265A412D9A83 | https://addp.vn/gioi-thieu | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/d6027b0617e26ca1.desktop.postscroll.full.png | 2026-09-28T10:02:20.019Z | Unknown / not recorded |
| EVD-6C642DCA9554ECFD | https://addp.vn/gioi-thieu | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/d6027b0617e26ca1.mobile.record.json | 2026-09-28T10:03:09.665Z | Unknown / not recorded |
| EVD-9BB5826034C3BF9C | https://addp.vn/gioi-thieu | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/d6027b0617e26ca1.mobile.postscroll.viewport.png | 2026-09-28T10:03:09.665Z | Unknown / not recorded |
| EVD-55A4919F83571052 | https://addp.vn/gioi-thieu | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/d6027b0617e26ca1.mobile.postscroll.full.png | 2026-09-28T10:03:09.665Z | Unknown / not recorded |
| EVD-36D2DEF9374A73B8 | https://addp.vn/sua-hat-glucare-plus | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/ebd40bf592e2f9a7.desktop.record.json | 2026-09-28T10:05:29.564Z | Unknown / not recorded |
| EVD-4D6E0CF37038A422 | https://addp.vn/sua-hat-glucare-plus | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/ebd40bf592e2f9a7.desktop.postscroll.viewport.png | 2026-09-28T10:05:29.564Z | Unknown / not recorded |
| EVD-DA93A46BF94664C8 | https://addp.vn/sua-hat-glucare-plus | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/ebd40bf592e2f9a7.desktop.postscroll.full.png | 2026-09-28T10:05:29.564Z | Unknown / not recorded |
| EVD-75F4EB9FC911A73B | https://addp.vn/sua-hat-glucare-plus | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/ebd40bf592e2f9a7.mobile.record.json | 2026-09-28T10:07:54.909Z | Unknown / not recorded |
| EVD-2428C5B7D856AA8B | https://addp.vn/sua-hat-glucare-plus | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/ebd40bf592e2f9a7.mobile.postscroll.viewport.png | 2026-09-28T10:07:54.909Z | Unknown / not recorded |
| EVD-8BF3FB60FCBEF54C | https://addp.vn/sua-hat-glucare-plus | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/ebd40bf592e2f9a7.mobile.postscroll.full.png | 2026-09-28T10:07:54.909Z | Unknown / not recorded |
| EVD-A97F675078FE3A16 | https://addp.vn/catalogsearch/advanced/ | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/39382f2ae8662c52.desktop.record.json | 2026-09-28T10:08:16.951Z | Unknown / not recorded |
| EVD-BE928C1B20A3F90C | https://addp.vn/catalogsearch/advanced/ | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/39382f2ae8662c52.desktop.postscroll.viewport.png | 2026-09-28T10:08:16.951Z | Unknown / not recorded |
| EVD-8CE5A1918EA590DB | https://addp.vn/catalogsearch/advanced/ | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/39382f2ae8662c52.desktop.postscroll.full.png | 2026-09-28T10:08:16.951Z | Unknown / not recorded |
| EVD-730945664696CDDB | https://addp.vn/catalogsearch/advanced/ | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/39382f2ae8662c52.mobile.record.json | 2026-09-28T10:09:06.547Z | Unknown / not recorded |
| EVD-398A0FF390125D29 | https://addp.vn/catalogsearch/advanced/ | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/39382f2ae8662c52.mobile.postscroll.viewport.png | 2026-09-28T10:09:06.547Z | Unknown / not recorded |
| EVD-6C4BD31279A0F225 | https://addp.vn/catalogsearch/advanced/ | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/39382f2ae8662c52.mobile.postscroll.full.png | 2026-09-28T10:09:06.547Z | Unknown / not recorded |
| EVD-D2C4AD9017387D49 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/dfb21dfb6ffbbe60.desktop.record.json | 2026-09-28T10:09:28.388Z | Unknown / not recorded |
| EVD-34050BAB0B701688 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/dfb21dfb6ffbbe60.desktop.postscroll.viewport.png | 2026-09-28T10:09:28.388Z | Unknown / not recorded |
| EVD-69E4D656FAC58CF3 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/dfb21dfb6ffbbe60.desktop.postscroll.full.png | 2026-09-28T10:09:28.388Z | Unknown / not recorded |
| EVD-EB82D682B2FD4FAE | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/dfb21dfb6ffbbe60.mobile.record.json | 2026-09-28T10:10:17.871Z | Unknown / not recorded |
| EVD-6C9F79AA741D7F8A | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/dfb21dfb6ffbbe60.mobile.postscroll.viewport.png | 2026-09-28T10:10:17.871Z | Unknown / not recorded |
| EVD-5ECA26D6A83068D4 | https://addp.vn/chinh-sach-doi-tra-va-hoan-tien | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/dfb21dfb6ffbbe60.mobile.postscroll.full.png | 2026-09-28T10:10:17.871Z | Unknown / not recorded |
| EVD-FF40F43ECF222CF8 | https://addp.vn/chinh-sach-thanh-toan | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/0c8d7a240125a53f.desktop.record.json | 2026-09-28T10:10:39.330Z | Unknown / not recorded |
| EVD-1F47BFE82736F2BB | https://addp.vn/chinh-sach-thanh-toan | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/0c8d7a240125a53f.desktop.postscroll.viewport.png | 2026-09-28T10:10:39.330Z | Unknown / not recorded |
| EVD-6EC513E14E9B2B61 | https://addp.vn/chinh-sach-thanh-toan | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/0c8d7a240125a53f.desktop.postscroll.full.png | 2026-09-28T10:10:39.330Z | Unknown / not recorded |
| EVD-9FC9F876C0093821 | https://addp.vn/chinh-sach-thanh-toan | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/0c8d7a240125a53f.mobile.record.json | 2026-09-28T10:11:28.697Z | Unknown / not recorded |
| EVD-AC2EB101A827FE20 | https://addp.vn/chinh-sach-thanh-toan | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/0c8d7a240125a53f.mobile.postscroll.viewport.png | 2026-09-28T10:11:28.697Z | Unknown / not recorded |
| EVD-DE8BE756F39DF1C5 | https://addp.vn/chinh-sach-thanh-toan | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/0c8d7a240125a53f.mobile.postscroll.full.png | 2026-09-28T10:11:28.697Z | Unknown / not recorded |
| EVD-5CEA94821D60417B | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/180692c5706f9ac0.desktop.record.json | 2026-09-28T10:11:49.632Z | Unknown / not recorded |
| EVD-8A6FE318B25A7E6A | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/180692c5706f9ac0.desktop.postscroll.viewport.png | 2026-09-28T10:11:49.632Z | Unknown / not recorded |
| EVD-BDA2CA112F68A70C | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/180692c5706f9ac0.desktop.postscroll.full.png | 2026-09-28T10:11:49.632Z | Unknown / not recorded |
| EVD-35133524BB812264 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/180692c5706f9ac0.mobile.record.json | 2026-09-28T10:12:39.304Z | Unknown / not recorded |
| EVD-C42BF9E6B7ABF368 | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/180692c5706f9ac0.mobile.postscroll.viewport.png | 2026-09-28T10:12:39.304Z | Unknown / not recorded |
| EVD-D42759C578D22EAB | https://addp.vn/chinh-sach-van-chuyen-va-giao-nhan | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/180692c5706f9ac0.mobile.postscroll.full.png | 2026-09-28T10:12:39.304Z | Unknown / not recorded |
| EVD-479E7848533540D0 | https://addp.vn/contact/ | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/38cf47871e33fcbf.desktop.record.json | 2026-09-28T10:13:00.772Z | Unknown / not recorded |
| EVD-0D018F426912F612 | https://addp.vn/contact/ | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/38cf47871e33fcbf.desktop.postscroll.viewport.png | 2026-09-28T10:13:00.772Z | Unknown / not recorded |
| EVD-4893D934503F2F02 | https://addp.vn/contact/ | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/38cf47871e33fcbf.desktop.postscroll.full.png | 2026-09-28T10:13:00.772Z | Unknown / not recorded |
| EVD-2FB9F859295D23B9 | https://addp.vn/contact/ | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/38cf47871e33fcbf.mobile.record.json | 2026-09-28T10:13:52.014Z | Unknown / not recorded |
| EVD-97884A7703CC0D13 | https://addp.vn/contact/ | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/38cf47871e33fcbf.mobile.postscroll.viewport.png | 2026-09-28T10:13:52.014Z | Unknown / not recorded |
| EVD-98E508D5BCFC875C | https://addp.vn/contact/ | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/38cf47871e33fcbf.mobile.postscroll.full.png | 2026-09-28T10:13:52.014Z | Unknown / not recorded |
| EVD-917AB020FFA00E6A | https://addp.vn/gioi-thieu/ | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/89d3ac41d651a1ea.desktop.record.json | 2026-09-28T10:14:13.447Z | Unknown / not recorded |
| EVD-6975616F91355D5D | https://addp.vn/gioi-thieu/ | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/89d3ac41d651a1ea.desktop.postscroll.viewport.png | 2026-09-28T10:14:13.447Z | Unknown / not recorded |
| EVD-9BD20343DD53E3FE | https://addp.vn/gioi-thieu/ | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/89d3ac41d651a1ea.desktop.postscroll.full.png | 2026-09-28T10:14:13.447Z | Unknown / not recorded |
| EVD-95E4A5EE32C07A68 | https://addp.vn/gioi-thieu/ | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/89d3ac41d651a1ea.mobile.record.json | 2026-09-28T10:15:03.803Z | Unknown / not recorded |
| EVD-A815ABB9D6ED5AE2 | https://addp.vn/gioi-thieu/ | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/89d3ac41d651a1ea.mobile.postscroll.viewport.png | 2026-09-28T10:15:03.803Z | Unknown / not recorded |
| EVD-914A5D90409FC79C | https://addp.vn/gioi-thieu/ | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/89d3ac41d651a1ea.mobile.postscroll.full.png | 2026-09-28T10:15:03.803Z | Unknown / not recorded |
| EVD-E5E3CD0F2179F7BC | https://addp.vn/sua-dinh-duong.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/2c478556874d1edb.desktop.record.json | 2026-09-28T10:15:26.501Z | Unknown / not recorded |
| EVD-7997C0115816B56D | https://addp.vn/sua-dinh-duong.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/2c478556874d1edb.desktop.postscroll.viewport.png | 2026-09-28T10:15:26.501Z | Unknown / not recorded |
| EVD-1D98B6ACFD4C3661 | https://addp.vn/sua-dinh-duong.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/2c478556874d1edb.desktop.postscroll.full.png | 2026-09-28T10:15:26.501Z | Unknown / not recorded |
| EVD-8F69A940FD386833 | https://addp.vn/sua-dinh-duong.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/2c478556874d1edb.mobile.record.json | 2026-09-28T10:16:16.355Z | Unknown / not recorded |
| EVD-17091DCF68FF7171 | https://addp.vn/sua-dinh-duong.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/2c478556874d1edb.mobile.postscroll.viewport.png | 2026-09-28T10:16:16.355Z | Unknown / not recorded |
| EVD-EDAD41D01FAC1338 | https://addp.vn/sua-dinh-duong.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/2c478556874d1edb.mobile.postscroll.full.png | 2026-09-28T10:16:16.355Z | Unknown / not recorded |
| EVD-A71AC50EFE087806 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/508a000452c9f248.desktop.record.json | 2026-09-28T10:16:39.066Z | Unknown / not recorded |
| EVD-BEC0BA46557D7F49 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/508a000452c9f248.desktop.postscroll.viewport.png | 2026-09-28T10:16:39.066Z | Unknown / not recorded |
| EVD-5BC811A3761465A8 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/508a000452c9f248.desktop.postscroll.full.png | 2026-09-28T10:16:39.066Z | Unknown / not recorded |
| EVD-E00E02A68A1DCB8A | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/508a000452c9f248.mobile.record.json | 2026-09-28T10:17:29.874Z | Unknown / not recorded |
| EVD-63ABFEE768622428 | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/508a000452c9f248.mobile.postscroll.viewport.png | 2026-09-28T10:17:29.874Z | Unknown / not recorded |
| EVD-F66906D07221BEEE | https://addp.vn/sua-dinh-duong/sua-nguoi-lon.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/508a000452c9f248.mobile.postscroll.full.png | 2026-09-28T10:17:29.874Z | Unknown / not recorded |
| EVD-898DBB76CC97FFF8 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/abab69424c4844fc.desktop.record.json | 2026-09-28T10:17:51.401Z | Unknown / not recorded |
| EVD-EA5698F824201A3E | https://addp.vn/sua-dinh-duong/sua-tre-em.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/abab69424c4844fc.desktop.postscroll.viewport.png | 2026-09-28T10:17:51.401Z | Unknown / not recorded |
| EVD-E04BEFED2B15EBE5 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/abab69424c4844fc.desktop.postscroll.full.png | 2026-09-28T10:17:51.401Z | Unknown / not recorded |
| EVD-8D867BC70A9CEB62 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/abab69424c4844fc.mobile.record.json | 2026-09-28T10:18:40.903Z | Unknown / not recorded |
| EVD-EACE940255D8FE13 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/abab69424c4844fc.mobile.postscroll.viewport.png | 2026-09-28T10:18:40.903Z | Unknown / not recorded |
| EVD-E68E70A76B7F24E5 | https://addp.vn/sua-dinh-duong/sua-tre-em.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/abab69424c4844fc.mobile.postscroll.full.png | 2026-09-28T10:18:40.903Z | Unknown / not recorded |
| EVD-C6DDA1B5A22991D6 | https://addp.vn/sui-dovital | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/9f397da04f62a067.desktop.record.json | 2026-09-28T10:19:08.622Z | Unknown / not recorded |
| EVD-F868A8D42BF25BB7 | https://addp.vn/sui-dovital | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/9f397da04f62a067.desktop.postscroll.viewport.png | 2026-09-28T10:19:08.622Z | Unknown / not recorded |
| EVD-4F6B6D8A7B754356 | https://addp.vn/sui-dovital | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/9f397da04f62a067.desktop.postscroll.full.png | 2026-09-28T10:19:08.622Z | Unknown / not recorded |
| EVD-27F73BB817BF1129 | https://addp.vn/sui-dovital | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/9f397da04f62a067.mobile.record.json | 2026-09-28T10:20:12.663Z | Unknown / not recorded |
| EVD-D4C974CA64C63492 | https://addp.vn/sui-dovital | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/9f397da04f62a067.mobile.postscroll.viewport.png | 2026-09-28T10:20:12.663Z | Unknown / not recorded |
| EVD-28EEDD3A4EDB514D | https://addp.vn/sui-dovital | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/9f397da04f62a067.mobile.postscroll.full.png | 2026-09-28T10:20:12.663Z | Unknown / not recorded |
| EVD-3EC78446FD0C303F | https://addp.vn/thiet-bi-y-te.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/822aca87bad7ae37.desktop.record.json | 2026-09-28T10:20:34.624Z | Unknown / not recorded |
| EVD-BD72CDD02E88C91C | https://addp.vn/thiet-bi-y-te.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/822aca87bad7ae37.desktop.postscroll.viewport.png | 2026-09-28T10:20:34.624Z | Unknown / not recorded |
| EVD-D2A3E1E802283121 | https://addp.vn/thiet-bi-y-te.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/822aca87bad7ae37.desktop.postscroll.full.png | 2026-09-28T10:20:34.624Z | Unknown / not recorded |
| EVD-DC4F8A18B69EA3D4 | https://addp.vn/thiet-bi-y-te.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/822aca87bad7ae37.mobile.record.json | 2026-09-28T10:21:24.201Z | Unknown / not recorded |
| EVD-3223065A9656E5D1 | https://addp.vn/thiet-bi-y-te.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/822aca87bad7ae37.mobile.postscroll.viewport.png | 2026-09-28T10:21:24.201Z | Unknown / not recorded |
| EVD-EF424A45F3D6E238 | https://addp.vn/thiet-bi-y-te.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/822aca87bad7ae37.mobile.postscroll.full.png | 2026-09-28T10:21:24.201Z | Unknown / not recorded |
| EVD-E637CB4FDA49BA5D | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/73a54115e4258fcb.desktop.record.json | 2026-09-28T10:21:46.650Z | Unknown / not recorded |
| EVD-D3213300DC2D74D4 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/73a54115e4258fcb.desktop.postscroll.viewport.png | 2026-09-28T10:21:46.650Z | Unknown / not recorded |
| EVD-F85C70BF95F10A7F | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/73a54115e4258fcb.desktop.postscroll.full.png | 2026-09-28T10:21:46.650Z | Unknown / not recorded |
| EVD-4B33E08B22E60D62 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/73a54115e4258fcb.mobile.record.json | 2026-09-28T10:22:36.270Z | Unknown / not recorded |
| EVD-91CE2DDB15C8A773 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/73a54115e4258fcb.mobile.postscroll.viewport.png | 2026-09-28T10:22:36.270Z | Unknown / not recorded |
| EVD-D513D6135D02A4A4 | https://addp.vn/thiet-bi-y-te/dung-cu-so-cuu.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/73a54115e4258fcb.mobile.postscroll.full.png | 2026-09-28T10:22:36.270Z | Unknown / not recorded |
| EVD-6D69EAC80B1ABB74 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/8810ec56bb8edbc1.desktop.record.json | 2026-09-28T10:22:58.643Z | Unknown / not recorded |
| EVD-B27E903C6C84EC7D | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/8810ec56bb8edbc1.desktop.postscroll.viewport.png | 2026-09-28T10:22:58.643Z | Unknown / not recorded |
| EVD-89930EC8E0846F93 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/8810ec56bb8edbc1.desktop.postscroll.full.png | 2026-09-28T10:22:58.643Z | Unknown / not recorded |
| EVD-E64434A0BAE56EE1 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/8810ec56bb8edbc1.mobile.record.json | 2026-09-28T10:23:48.138Z | Unknown / not recorded |
| EVD-86DE7215C89B7034 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/8810ec56bb8edbc1.mobile.postscroll.viewport.png | 2026-09-28T10:23:48.138Z | Unknown / not recorded |
| EVD-6082A8047C77FC59 | https://addp.vn/thiet-bi-y-te/dung-cu-theo-doi.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/8810ec56bb8edbc1.mobile.postscroll.full.png | 2026-09-28T10:23:48.138Z | Unknown / not recorded |
| EVD-BF862494C0143C7C | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/106798c90fc40ccb.desktop.record.json | 2026-09-28T10:24:10.374Z | Unknown / not recorded |
| EVD-4F7F2BCA5A1C63A7 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/106798c90fc40ccb.desktop.postscroll.viewport.png | 2026-09-28T10:24:10.374Z | Unknown / not recorded |
| EVD-ABDA6A46613C4B72 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/106798c90fc40ccb.desktop.postscroll.full.png | 2026-09-28T10:24:10.374Z | Unknown / not recorded |
| EVD-9F5ED9DB500571D0 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/106798c90fc40ccb.mobile.record.json | 2026-09-28T10:25:00.255Z | Unknown / not recorded |
| EVD-926BC46EF97C3E60 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/106798c90fc40ccb.mobile.postscroll.viewport.png | 2026-09-28T10:25:00.255Z | Unknown / not recorded |
| EVD-8D7A4C6ABDF5FE70 | https://addp.vn/thiet-bi-y-te/dung-cu-y-te.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/106798c90fc40ccb.mobile.postscroll.full.png | 2026-09-28T10:25:00.255Z | Unknown / not recorded |
| EVD-0A4365A082C31FA6 | https://addp.vn/thiet-bi-y-te/khau-trang.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/1479934c307717d8.desktop.record.json | 2026-09-28T10:25:22.321Z | Unknown / not recorded |
| EVD-50BB5A3542531E9A | https://addp.vn/thiet-bi-y-te/khau-trang.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/1479934c307717d8.desktop.postscroll.viewport.png | 2026-09-28T10:25:22.321Z | Unknown / not recorded |
| EVD-845EEE6911EC3EF3 | https://addp.vn/thiet-bi-y-te/khau-trang.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/1479934c307717d8.desktop.postscroll.full.png | 2026-09-28T10:25:22.321Z | Unknown / not recorded |
| EVD-2F84BF2FC138861E | https://addp.vn/thiet-bi-y-te/khau-trang.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/1479934c307717d8.mobile.record.json | 2026-09-28T10:26:11.835Z | Unknown / not recorded |
| EVD-CBE3CEA37D6F76B0 | https://addp.vn/thiet-bi-y-te/khau-trang.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/1479934c307717d8.mobile.postscroll.viewport.png | 2026-09-28T10:26:11.835Z | Unknown / not recorded |
| EVD-E5183D73C6BAE4E5 | https://addp.vn/thiet-bi-y-te/khau-trang.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/1479934c307717d8.mobile.postscroll.full.png | 2026-09-28T10:26:11.835Z | Unknown / not recorded |
| EVD-30237D60B6EF8C10 | https://addp.vn/thuc-pham-chuc-nang.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/359fa2d7a8da5081.desktop.record.json | 2026-09-28T10:26:34.777Z | Unknown / not recorded |
| EVD-F5A7DCC0E968E5DB | https://addp.vn/thuc-pham-chuc-nang.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/359fa2d7a8da5081.desktop.postscroll.viewport.png | 2026-09-28T10:26:34.777Z | Unknown / not recorded |
| EVD-F374B776F4BBE7CF | https://addp.vn/thuc-pham-chuc-nang.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/359fa2d7a8da5081.desktop.postscroll.full.png | 2026-09-28T10:26:34.777Z | Unknown / not recorded |
| EVD-191E35806D1D09D3 | https://addp.vn/thuc-pham-chuc-nang.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/359fa2d7a8da5081.mobile.record.json | 2026-09-28T10:27:24.565Z | Unknown / not recorded |
| EVD-FBDE8DBDDD2A9BC4 | https://addp.vn/thuc-pham-chuc-nang.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/359fa2d7a8da5081.mobile.postscroll.viewport.png | 2026-09-28T10:27:24.565Z | Unknown / not recorded |
| EVD-E85CEB2778112C05 | https://addp.vn/thuc-pham-chuc-nang.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/359fa2d7a8da5081.mobile.postscroll.full.png | 2026-09-28T10:27:24.565Z | Unknown / not recorded |
| EVD-50826814952800B4 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/439c2df490fa3169.desktop.record.json | 2026-09-28T10:27:46.857Z | Unknown / not recorded |
| EVD-67A83C2DA88DF3ED | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/439c2df490fa3169.desktop.postscroll.viewport.png | 2026-09-28T10:27:46.857Z | Unknown / not recorded |
| EVD-2D70B1B55174F99A | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/439c2df490fa3169.desktop.postscroll.full.png | 2026-09-28T10:27:46.857Z | Unknown / not recorded |
| EVD-6509219B6F6BADA5 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/439c2df490fa3169.mobile.record.json | 2026-09-28T10:28:36.713Z | Unknown / not recorded |
| EVD-AFC2CF10BB3B3202 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/439c2df490fa3169.mobile.postscroll.viewport.png | 2026-09-28T10:28:36.713Z | Unknown / not recorded |
| EVD-0D45E0EE4AD894A5 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/439c2df490fa3169.mobile.postscroll.full.png | 2026-09-28T10:28:36.713Z | Unknown / not recorded |
| EVD-6AF432294A4A4B14 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/01ab04fda61832b1.desktop.record.json | 2026-09-28T10:28:59.090Z | Unknown / not recorded |
| EVD-B46FC25A1E1CEA0F | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/01ab04fda61832b1.desktop.postscroll.viewport.png | 2026-09-28T10:28:59.090Z | Unknown / not recorded |
| EVD-306A4D3F5B1F7C48 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/01ab04fda61832b1.desktop.postscroll.full.png | 2026-09-28T10:28:59.090Z | Unknown / not recorded |
| EVD-22EB4D0651B5EA1D | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/01ab04fda61832b1.mobile.record.json | 2026-09-28T10:29:48.926Z | Unknown / not recorded |
| EVD-ACA3BC07E787C7B5 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/01ab04fda61832b1.mobile.postscroll.viewport.png | 2026-09-28T10:29:48.926Z | Unknown / not recorded |
| EVD-0E6435327A280485 | https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang/bo-mat-bao-ve-mat.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/01ab04fda61832b1.mobile.postscroll.full.png | 2026-09-28T10:29:48.926Z | Unknown / not recorded |
| EVD-6EAF81BA51F6356C | https://addp.vn/vien-an-duong | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/324d2a6661dc99c8.desktop.record.json | 2026-09-28T10:30:18.488Z | Unknown / not recorded |
| EVD-296ABB588A854CFE | https://addp.vn/vien-an-duong | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/324d2a6661dc99c8.desktop.postscroll.viewport.png | 2026-09-28T10:30:18.488Z | Unknown / not recorded |
| EVD-45FE1EC2507D9E99 | https://addp.vn/vien-an-duong | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/324d2a6661dc99c8.desktop.postscroll.full.png | 2026-09-28T10:30:18.488Z | Unknown / not recorded |
| EVD-84945E739183EB9C | https://addp.vn/vien-an-duong | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/324d2a6661dc99c8.mobile.record.json | 2026-09-28T10:32:43.821Z | Unknown / not recorded |
| EVD-BE1D8562DEEF9E28 | https://addp.vn/vien-an-duong | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/324d2a6661dc99c8.mobile.postscroll.viewport.png | 2026-09-28T10:32:43.821Z | Unknown / not recorded |
| EVD-226FCECD5E09866F | https://addp.vn/vien-an-duong | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/324d2a6661dc99c8.mobile.postscroll.full.png | 2026-09-28T10:32:43.821Z | Unknown / not recorded |
| EVD-4BCBA20813B4309A | https://addp.vn/vien-an-duong-addp.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/db93fc388a5ba278.desktop.record.json | 2026-09-28T10:33:04.884Z | Unknown / not recorded |
| EVD-88E037DFB34CF12F | https://addp.vn/vien-an-duong-addp.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/db93fc388a5ba278.desktop.postscroll.viewport.png | 2026-09-28T10:33:04.884Z | Unknown / not recorded |
| EVD-A58A8606F90DECE7 | https://addp.vn/vien-an-duong-addp.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/db93fc388a5ba278.desktop.postscroll.full.png | 2026-09-28T10:33:04.884Z | Unknown / not recorded |
| EVD-0279C2AAA7F5E8CF | https://addp.vn/vien-an-duong-addp.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/db93fc388a5ba278.mobile.record.json | 2026-09-28T10:33:55.182Z | Unknown / not recorded |
| EVD-6C20A9F5A1626FB1 | https://addp.vn/vien-an-duong-addp.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/db93fc388a5ba278.mobile.postscroll.viewport.png | 2026-09-28T10:33:55.182Z | Unknown / not recorded |
| EVD-77D5440C4566BDAA | https://addp.vn/vien-an-duong-addp.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/db93fc388a5ba278.mobile.postscroll.full.png | 2026-09-28T10:33:55.182Z | Unknown / not recorded |
| EVD-13CB271E16C8BFE1 | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/dace973208f2be9b.desktop.record.json | 2026-09-28T10:34:16.576Z | Unknown / not recorded |
| EVD-27ED14C459DA678C | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/dace973208f2be9b.desktop.postscroll.viewport.png | 2026-09-28T10:34:16.576Z | Unknown / not recorded |
| EVD-357E080108F7CE9D | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/dace973208f2be9b.desktop.postscroll.full.png | 2026-09-28T10:34:16.576Z | Unknown / not recorded |
| EVD-F3E8A02CB94B559A | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/dace973208f2be9b.mobile.record.json | 2026-09-28T10:35:06.782Z | Unknown / not recorded |
| EVD-6C9E0D1D0779E69D | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/dace973208f2be9b.mobile.postscroll.viewport.png | 2026-09-28T10:35:06.782Z | Unknown / not recorded |
| EVD-970DBC1F4BFCF856 | https://addp.vn/vien-an-duong-addp-combo-mua-2-tang-2.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/dace973208f2be9b.mobile.postscroll.full.png | 2026-09-28T10:35:06.782Z | Unknown / not recorded |
| EVD-4C905D6D0DB5496A | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/2dcff7b0a97be809.desktop.record.json | 2026-09-28T10:35:22.261Z | Unknown / not recorded |
| EVD-943E81A1E31DC3AA | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/2dcff7b0a97be809.desktop.postscroll.viewport.png | 2026-09-28T10:35:22.261Z | Unknown / not recorded |
| EVD-EF873D90D6E3A627 | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/2dcff7b0a97be809.desktop.postscroll.full.png | 2026-09-28T10:35:22.261Z | Unknown / not recorded |
| EVD-A212883E7E0E483B | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/2dcff7b0a97be809.mobile.record.json | 2026-09-28T10:36:12.352Z | Unknown / not recorded |
| EVD-BA0EEBBD6C47190B | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/2dcff7b0a97be809.mobile.postscroll.viewport.png | 2026-09-28T10:36:12.352Z | Unknown / not recorded |
| EVD-1BF03C7E50E6A768 | https://addp.vn/vien-an-duong-addp-combo-mua-3-tang-4.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/2dcff7b0a97be809.mobile.postscroll.full.png | 2026-09-28T10:36:12.352Z | Unknown / not recorded |
| EVD-AB93047E2CF1CA5D | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/f63cda436b621780.desktop.record.json | 2026-09-28T10:36:33.261Z | Unknown / not recorded |
| EVD-863EF55AC6740E80 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/f63cda436b621780.desktop.postscroll.viewport.png | 2026-09-28T10:36:33.261Z | Unknown / not recorded |
| EVD-7378F56F301E69B0 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/f63cda436b621780.desktop.postscroll.full.png | 2026-09-28T10:36:33.261Z | Unknown / not recorded |
| EVD-21BEF951930FD234 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/f63cda436b621780.mobile.record.json | 2026-09-28T10:37:23.308Z | Unknown / not recorded |
| EVD-1C5B0B5157B560E4 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/f63cda436b621780.mobile.postscroll.viewport.png | 2026-09-28T10:37:23.308Z | Unknown / not recorded |
| EVD-67081B636FE7D257 | https://addp.vn/vien-an-duong-addp-combo-hai-hop.html | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/f63cda436b621780.mobile.postscroll.full.png | 2026-09-28T10:37:23.308Z | Unknown / not recorded |
| EVD-6E5F21150CA4B46D | https://addp.vn/vien-sui-dovital | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/6c7fd006301e7f83.desktop.record.json | 2026-09-28T10:37:45.246Z | Unknown / not recorded |
| EVD-D07A7E238E6358F0 | https://addp.vn/vien-sui-dovital | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/6c7fd006301e7f83.desktop.postscroll.viewport.png | 2026-09-28T10:37:45.246Z | Unknown / not recorded |
| EVD-FF9AB7DCEC3050D7 | https://addp.vn/vien-sui-dovital | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/6c7fd006301e7f83.desktop.postscroll.full.png | 2026-09-28T10:37:45.246Z | Unknown / not recorded |
| EVD-5C42B789B18C1EAE | https://addp.vn/vien-sui-dovital | quality-remediation-scroll-v1 / render_remediation_record | evidence/quality-remediation-2026-09-28T09-56-36-700Z/6c7fd006301e7f83.mobile.record.json | 2026-09-28T10:38:35.604Z | Unknown / not recorded |
| EVD-7AAF9F8D8DC77774 | https://addp.vn/vien-sui-dovital | quality-remediation-scroll-v1 / stabilized_postscroll_viewport_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/6c7fd006301e7f83.mobile.postscroll.viewport.png | 2026-09-28T10:38:35.604Z | Unknown / not recorded |
| EVD-C31ECC2FB4E19961 | https://addp.vn/vien-sui-dovital | quality-remediation-scroll-v1 / stabilized_postscroll_full_screenshot | evidence/quality-remediation-2026-09-28T09-56-36-700Z/6c7fd006301e7f83.mobile.postscroll.full.png | 2026-09-28T10:38:35.604Z | Unknown / not recorded |
| EVD-A074CD7312C698E2 | https://addp.vn/ | quality-remediation-scroll-v1 / render_quality_summary | evidence/quality-remediation-2026-09-28T09-56-36-700Z/summary.json | 2026-09-28T10:45:27.108Z | Unknown / not recorded |


## Independent review and post-scroll render remediation

The independent evidence review assessed 20 deduplicated findings: 11 accepted, 3 rejected, 6 retained for manual review, and 0 blocked. The supplemental reviewer inspected the three visually affected findings against 124 desktop/mobile screenshot comparisons. Its saved decisions retain the mobile contrast and homepage hero findings, and move the company-page mixed-language/whitespace finding to manual review because the new mobile capture no longer shows the earlier large opening void. The requested reviewer model was GPT-5.6 Sol / High; runtime metadata did not verify the effective model.

The read-only render pass revisited all 31 selected URLs in desktop and mobile viewports. 0 pages reached a complete render; 31 remain partial. Pixel comparison marked 30 pages as materially changed, and scroll-triggered content changes were confirmed on 30 pages. Remaining observed failures include 6 stylesheet requests, 124 image decode/load occurrences, and 24 pending images; browser/policy blocked requests are tracked separately in the remediation summary. No cart, payment, order, account creation, or form submission was performed.
