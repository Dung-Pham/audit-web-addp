# Kế hoạch chỉnh sửa và triển khai landing Glucare Plus V2

**Nguồn:** [audit section-level](01_BAO_CAO_PHAN_TICH_CHUYEN_SAU_LANDING_GLUCARE_PLUS_V2_VI.md), canonical run `20260928T211548Z-replacement-full-audit`. Đây là đặc tả target; không tự thay giá, claim, URL hay thực hiện checkout. Mọi câu chữ sức khỏe cần Product/Medical/Legal duyệt. Priority: P0 chặn xuất bản, P1 cần trước release, P2 cải tiến tiếp, P3 thí nghiệm.

## 1. Kiến trúc đích và quyết định section

| Thứ tự | Target section | Nguồn hiện tại | Quyết định | Buyer stage | Vì sao |
|---:|---|---|---|---|---|
| 1 | Header + breadcrumb | S01 | KEEP/IMPROVE | GLOBAL | Tên Glucare Plus nhất quán |
| 2 | Hero + SKU/offer facts + CTA | S02 | IMPROVE | HOT | Cho biết giá/đường mua sớm |
| 3 | Trust strip tối giản, có nguồn | S03 | IMPROVE | SKEPTICAL | Không dùng “bảo chứng” vô căn cứ |
| 4 | Lợi ích/điểm khác biệt được duyệt | S03 | IMPROVE | RESEARCH | Tách fact và claim |
| 5 | Thành phần + bảng dinh dưỡng | S05/A/B/C | IMPROVE | RESEARCH | Visual đi với lượng, nguồn, cảnh báo |
| 6 | Đối tượng/không phù hợp | S06 | IMPROVE | RESEARCH | Giải đáp sử dụng an toàn |
| 7 | Cách pha, dùng, bảo quản | S08/09 | KEEP/IMPROVE | RESEARCH | Bốn bước hiện là điểm mạnh |
| 8 | Hồ sơ sản phẩm/chất lượng | chưa có | ADD | SKEPTICAL | Chứng cứ trước offer |
| 9 | Chuyên gia/khách hàng xác thực | chưa có | ADD nếu có consent | SKEPTICAL | Proof đúng cấp độ |
| 10 | FAQ objection | chưa có | ADD | SKEPTICAL | Giải thích bệnh, thuốc, giá, ship |
| 11 | Product choice + offer | S04/S07/S11 | MERGE/MOVE | HOT | Một nguồn SKU/giá; bỏ listing lặp |
| 12 | Form/route đặt hàng + final CTA | S10/S11 | IMPROVE | HOT | Rõ “đăng ký” hay “mua” |
| 13 | Footer/policy | S12 | IMPROVE | GLOBAL | Policy và contact thật |

![Before — hero](visual-recapture/GLU-S02-DESKTOP.png)

**Before S02:** hero có CTA nhưng chưa có giá/quy cách/điều kiện. **Required change:** fact strip dưới H1 (loại sản phẩm, quy cách, SKU hoặc lối chọn SKU) và CTA đặt tên đúng đích. **Expected result:** người mua nóng hiểu bước kế tiếp trong first viewport; kiểm bằng usability test, không gán mức tăng conversion trước khi đo.

![Before — giá card](visual-recapture/GLU-S04A-DESKTOP.png)

**Before S04:** `0,00đ` cạnh trial `9.000đ` (`FND-CONVERSION-CONV-001`). **Required change:** Product xác nhận giá/availability, mapping từng card/PDP/form; frontend hiển thị đúng trạng thái nếu chưa có giá. **Expected result:** không có giá gây hiểu nhầm trên landing/category/PDP.

![Before — thành phần](visual-recapture/GLU-S05B-DESKTOP.png)

**Before S05B:** tab thảo dược gắn cơ chế y khoa không có nguồn tại điểm đọc. **Required change:** claim register, copy đã duyệt, citations có liên quan trực tiếp hoặc bỏ claim. **Expected result:** người nghiên cứu đọc được thành phần mà không nhầm thành hiệu quả điều trị.

![Before — offer](visual-recapture/GLU-S11-DESKTOP.png)

**Before S11:** giá 9.000đ và form hiện rõ nhưng điều kiện, ship, privacy chưa thấy; “7 loại hạt” khác “11 loại”. **Required change:** offer terms, consistency review, form notice. **Expected result:** biết nhận gì và quá trình sau submit trước khi cung cấp dữ liệu.

## 2. Spec từng target section

| Section | Purpose/target state | Copy + visual + component | Data/approval/evidence | SEO/GEO/schema | Mobile/performance/analytics | Acceptance |
|---|---|---|---|---|---|---|
| T01 Header | Dẫn đường | Logo/crumb tên chuẩn, nav rõ | Brand, URL | BreadcrumbList nếu hợp lệ | Keyboard, contrast | Không link `#` giả; crumb tới đúng route |
| T02 Hero | Trả lời 5 câu hỏi đầu | H1 ngắn, packshot thật, fact strip, primary/secondary CTA | SKU, giá/offer, claim duyệt; S02 before | H1/entity, Product fact text | Crop-safe 390px, responsive/preload LCP image; `hero_cta_click` | 390×844 thấy tên/CTA; CTA đúng đích; copy trùng nhãn |
| T03 Trust strip | Tạo an tâm có bằng chứng | Chỉ 2–3 facts có link chứng từ, tránh badge trống | Chứng nhận/issuer/expiry | Cites nguồn, không fake schema | Lightweight icons | Mỗi badge có tài liệu đúng sản phẩm |
| T04 Benefits | Diễn giải khác biệt | 3 thẻ USP, “fact → ý nghĩa”, không hứa quá mức | Claim matrix; Medical/Legal | H2/H3 và answer snippets | Card stack hợp lý | Không có claim ngoài register |
| T05 Ingredients | Giải thích công thức | Orbit tùy chọn + bảng thành phần/khẩu phần, tabs accessible | Nhãn, lượng, nguồn; S05B/C | Bảng HTML đọc được, Product attributes khi đúng | Reduced-motion, no-JS content; `ingredient_section_view` | Tên/11/7 nhất quán; keyboard đọc được tab; số liệu khớp nhãn |
| T06 Audience | Ai dùng/không dùng | Bảng phù hợp/lưu ý, link FAQ | Product/Medical | Direct answers | Text ngắn, heading rõ | Claim bệnh/sau phẫu thuật được duyệt; có ngoại lệ |
| T07 Usage | Dùng đúng | 4 bước + liều, thời điểm, bảo quản | Nhãn/Medical; S08/09 | How-to text, không tự giả HowTo schema | Ảnh nhỏ, lazy below fold | Số đo, nhiệt độ, tần suất khớp nhãn |
| T08 Evidence | Chứng minh | Document cards: tên, số, ngày, issuer, applicable SKU | Scan, quyền công bố, Legal | Citation/source links | PDF thumbnail nhẹ | Link hoạt động; chứng từ đúng sản phẩm/còn hiệu lực |
| T09 Proof | Kinh nghiệm/chuyên môn | Video/quote xác thực, không tự động phát | Consent, expert credentials | Review schema chỉ khi đủ điều kiện | Poster/lazy video; `testimonial_play` | Consent/claim kiểm; không dùng testimonial như nghiên cứu |
| T10 FAQ | Xử lý phản đối | Accordion, câu trả lời ngắn, nguồn | CS/Product/Medical/Legal | FAQ visible; FAQPage khi phù hợp | Keyboard, `faq_expand` | Mọi answer có owner/version; schema trùng text |
| T11 Product choice | Chọn đúng SKU | So sánh gói thử/lon, giá, quy cách, hàng, ship | Product master/offer; S04/S11 | Offer đúng SKU, link PDP | CTA chạm dễ; `product_link_click` | Không `0đ` chưa duyệt; không lặp listing |
| T12 Action | Mua/đăng ký minh bạch | Form tối thiểu hoặc PDP/cart theo funnel chốt | T&C, privacy, CS/Legal | Không schema nhạy cảm | `begin_order`, `offer_cta_click`; no PII | Biết sau submit xảy ra gì, consent hợp lệ, error/success accessible |
| T13 Footer | Liên hệ/hậu mãi | Contact/policy link thật | Company/CS | Organization chỉ khi facts chắc | CSS gọn | Link và thông tin thống nhất với checkout |

## 3. CRO, content và funnel

Primary CTA hero phải phản ánh lựa chọn thực: **đăng ký gói thử** nếu dẫn form; **xem lon 400g** nếu dẫn PDP. Secondary CTA dẫn bảng thành phần, không đưa người mua nóng vào orbit quá dài. CTA cadence: hero → sau bảng product facts → sau proof/FAQ → final offer; dùng một màu/action hierarchy, không tăng nút theo cảm tính. Trước CTA final phải có điều kiện trial, ship/COD, quy trình xác nhận, đổi trả. Mọi thay đổi conversion đo theo view/click/begin order/submit thành công bằng funnel không PII; chưa có baseline nên không hứa uplift.

| Section | Content required | Evidence needed | Owner | Approval |
|---|---|---|---|---|
| T02–04 | Định vị, USP, claim wording | Nhãn/công bố/source | Marketing + Product | Medical/Legal |
| T05 | Bảng thành phần, lượng, định nghĩa 11/7 | Nhãn, COA nếu liên quan | Product | Medical/Legal |
| T06–07 | Đối tượng, chống chỉ định/lưu ý, pha/dùng | HDSD được phê duyệt | Product + Medical | Legal |
| T08–09 | Chứng từ, hồ sơ chuyên gia, quote | Scan/consent | QA + Marketing | Legal |
| T10 | Top objections và answer | CS logs không PII + nguồn | CS + Content | Medical/Legal |
| T11–12 | Giá/SKU/offer/T&C/privacy | Price list, promotion approval | Commerce + Marketing | Finance/Legal |

## 4. SEO/GEO/AEO và technical

Title hiện “Sữa hạt Glucare”, meta `Default Description`; thay bằng tên chuẩn và mô tả có mục đích sau khi Product chốt route landing/PDP. Một H1, H2 theo chủ đề, H3 trong subsection, tránh dùng heading chỉ vì style. Đưa facts “là gì/cho ai/thành phần/cách dùng/giá/nguồn” vào text/bảng HTML, không chỉ hình hoặc tab khó truy cập. Canonical landing tự trỏ nếu nội dung khác biệt; liên kết SKU đến PDP tương ứng, breadcrumb đến category. Product/Offer markup chỉ khi giá, availability, brand, SKU nhất quán; FAQPage chỉ cho FAQ hiển thị; BreadcrumbList theo nav thật; không tạo Review/AggregateRating khi thiếu review hợp lệ.

Performance: điều tra TTFB ~5,9–6,1s từ canonical, profile origin/cache trước; xác định LCP element desktop/mobile; chuyển hero sang ảnh responsive định cỡ, cân nhắc preload đúng asset; ảnh dưới fold lazy, video chỉ tải poster; giảm JS/CSS cho orbit và third-party, giữ nội dung đọc được khi animation không chạy. Mục tiêu QA là LCP lab cải thiện qua cùng cấu hình đo và checklist load <2,5s/PSI mobile 85+, nhưng run hiện **không có PSI score** nên không gọi hiện trạng là fail score. Theo dõi CLS; không đo lại Lighthouse trong phạm vi audit này, chỉ ở vòng triển khai được phê duyệt.

## 5. Analytics và QA

Event contract: `hero_cta_click` (cta_id,destination), `offer_cta_click` (offer_id), `section_cta_click` (section_id), `ingredient_section_view` (tab_id), `faq_expand` (question_id), `testimonial_play` (asset_id), `product_link_click` (sku,destination), `begin_order` (sku,offer_id). Không đưa tên, điện thoại, tình trạng sức khỏe, nội dung form vào analytics. Consent và cấu hình tag do owner xác nhận; public run không đủ chứng minh analytics vắng mặt. QA desktop 1440×1000/mobile 390×844, keyboard/reader, reduced motion, no-JS, tab interaction, responsive crop, giá mọi route, canonical/schema validation, link policy, form success/error trong môi trường test được phép. Không test mua thật khi chưa được yêu cầu.

## 6. Master backlog có nghiệm thu

| ID | Section/source | Objective; priority; owner | Dependency/input | Implementation | Acceptance; automated/manual verification | Evidence |
|---|---|---|---|---|---|---|
| GLU-01 | T11 `FND-CONVERSION-CONV-001` | Giá/SKU nhất quán; P0; Commerce | Product price list | Map trial/lon/listing/PDP | Không giá 0đ chưa duyệt; compare feeds/screens | S04 screenshot |
| GLU-02 | T05/T11 professional assessment | Giải quyết 7/11; P0; Product | Nhãn/công thức | Thay copy/visual | Một con số có định nghĩa xuyên trang; text diff/manual | S05/S11 |
| GLU-03 | T02–07 professional assessment | Claim register; P0; Medical/Legal | Claim evidence | Duyệt/loại từng câu | 100% claim hiển thị có trạng thái approved; manual source audit | S02/S05B/S06 |
| GLU-04 | T11/12 professional assessment | Offer rõ; P0; Marketing/Legal | T&C, ship, expiry | Facts cạnh 9.000đ | Đọc được what/when/who/ship/next step trên mobile; manual | S11 |
| GLU-05 | T12 professional assessment | Quyền riêng tư form; P0; Legal/Frontend | Privacy notice | Minimize fields/consent | Không thu health status không cần; QA test env | S11 |
| GLU-06 | T02 professional assessment | First fold rõ; P1; Design/Content | SKU/offer | Recompose hero | 390px có H1/CTA, packshot không crop; screenshot | S02 |
| GLU-07 | T05 professional assessment | Bảng facts; P1; Product/Frontend | Nutrition table | Semantic table + tabs | Keyboard/no-JS đọc được, khớp nhãn | S05B/C |
| GLU-08 | T08 professional assessment | Tài liệu trust; P1; QA/Content | Document scans | Document cards | Số/ngày/issuer/product đúng, link hoạt động | gap S08 |
| GLU-09 | T10 professional assessment | FAQ objection; P1; CS/Medical | Approved answers | Accordion | 10 nhóm hỏi, answer duyệt, schema parity | gap FAQ |
| GLU-10 | T11 `FND-CONTENT-CONTENT-001` | PDP liên quan sạch placeholder; P1; Content | PDP facts | Sửa tab PDP | Không placeholder ở route nhận traffic | finding gốc |
| GLU-11 | T01–13 professional assessment | SEO/schema; P1; SEO/Dev | Product master | Meta/heading/internal/schema | Rich result validation, canonical parity, no fake review | SEO/schema artifacts |
| GLU-12 | T02–12 professional assessment | Giảm thời gian tải; P1; FE/Infra | Profile | Cache/assets/JS | So cùng lab config, LCP/CLS cải thiện; manual UX | LAB EVD IDs |
| GLU-13 | T04–12 professional assessment | Tracking; P1; Analytics | Consent spec | Event contract | DebugView test env, payload không PII | tracking artifact |
| GLU-14 | T07/S07 professional assessment | Bỏ listing lặp; P2; Design/CRO | Funnel decision | Merge cards | Chỉ một chooser; user test tìm SKU | S04/S07 |
| GLU-15 | T13 professional assessment | Link/contact sạch; P2; Content/FE | Contact master | Fix dead social | Crawl/check all links; manual | S12 |
| GLU-16 | T09 professional assessment | Social proof; P3; Marketing | Consent/assets | Add only if authentic | Source, consent, claim QA | current gap |

**Release gate:** GLU-01–05 hoàn thành trước publish. GLU-06–13 trong cùng release nếu dữ liệu sẵn; task thiếu input chuyển thành `BLOCKED_BY_BUSINESS_INPUT`, không tự bịa câu trả lời. Không thay URL/canonical trước khi xem dữ liệu index và quyết định SEO.
