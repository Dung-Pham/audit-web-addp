# BỘ YÊU CẦU THÔNG TIN, NỘI DUNG & TÀI NGUYÊN — V1

**Mục đích:** bảng giao việc để Business, Marketing, Content, Medical, Legal, Design, SEO và Operations cung cấp đúng đầu vào cho website ADDP. Nguồn audit duy nhất: `20260928T211548Z-replacement-full-audit`. **Trạng thái hiện tại** dưới đây là mức xác minh của run, không khẳng định tổ chức chưa có tài liệu ở nơi khác. `Cần cung cấp` nghĩa là nhóm triển khai chưa có hồ sơ được duyệt trong evidence run. `Chưa xác minh` nghĩa là không thể kết luận thiếu hay có. Claim y khoa chưa có nguồn/phê duyệt: **KHÔNG ĐƯỢC XUẤT BẢN NHƯ CLAIM ĐÃ XÁC MINH**. Xem [báo cáo audit](01_BAO_CAO_AUDIT_V1_VI.md), nhất là §10–14, §25–28.

## 1. Bảng yêu cầu giao nộp

Mỗi dòng là một đầu vào riêng, có thể đánh dấu hoàn thành bằng tài liệu nguồn + người duyệt + ngày/version. “Bắt buộc” là để phát hành tính năng/nội dung liên quan, không hàm ý phải công bố mọi chứng từ nội bộ. Format là gợi ý bàn giao. Các thông số sản xuất ở §8 là **đề xuất**, phân biệt với yêu cầu checklist.

| ID | Hạng mục | Thông tin/tài nguyên cần cung cấp | Owner | Bắt buộc? | Format | Áp dụng cho | Lý do | Trạng thái hiện tại |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MR-001 | Pháp nhân | Tên pháp nhân, loại hình, mã số theo hồ sơ hiện hành; người phê duyệt | Business Owner | Có | Hồ sơ + bản chuẩn | Footer, Viên, schema | Giải quyết `FND-BRAND-BRAND-20260928-001` | Có bất nhất công khai; nguồn đúng UNKNOWN |
| MR-002 | Thương hiệu | Tên hiển thị ADDP, tên viết tắt, quy tắc viết | Business Owner/Marketing | Có | Brand facts | Toàn site | Nhất quán entity | Cần xác nhận |
| MR-003 | Địa chỉ | Địa chỉ pháp lý/giao dịch/giao hàng, quy tắc dùng từng địa chỉ | Business/Operations | Có | Bảng địa chỉ | Footer/contact/product | Viên có cách ghi khác nhau | Cần xác nhận |
| MR-004 | Hotline | Số chính/phụ, giờ phục vụ, click-to-call, số trên Viên và footer | Business/Operations | Có | Bảng liên hệ | Toàn site | Tránh hai số không rõ chức năng | Cần xác nhận |
| MR-005 | Email/web/social | Email chính thức, domain, social URL và quyền quản trị | Marketing | Có | URL + owner | Contact/schema | Nguồn entity đáng tin | Chưa xác minh |
| MR-006 | Giấy tờ doanh nghiệp | Danh mục giấy phép/chứng nhận được phép công bố, hiệu lực | Legal/Business | Khi dùng trust claim | PDF + metadata | Brand/trust | Không nêu chứng nhận không có hồ sơ | Chưa xác minh |
| MR-007 | Nguồn sự thật | Một bảng facts có version, owner, ngày duyệt và phạm vi dùng | Business Owner | Có | Sheet/Doc | Mọi workstream | Khóa phụ thuộc `DEC-01` | Chưa có trong run |
| MR-008 | Logo | Bản chính/phụ, dương/âm, SVG gốc và PNG dự phòng, quyền sử dụng | Marketing/Design | Có | SVG/PNG | Header/footer/assets | Chống sai logo/nhòe | Chưa xác minh asset gốc |
| MR-009 | Màu/font | Palette, font license, hệ phân cấp chữ và hướng dẫn sử dụng | Marketing/Design | Có cho redesign | Guideline | UI kit | Nhất quán mobile/desktop | Chưa xác minh |
| MR-010 | Ảnh thương hiệu | Ảnh người, nhà máy/đội ngũ, nguồn, model release và phạm vi quyền | Marketing/Legal | Khi dùng | Originals + release | Homepage/about | Không suy ảnh có quyền dùng | Chưa xác minh |
| MR-011 | Icon/illustration | Bộ icon, quy tắc phong cách, quyền, alt text cơ bản | Design | Khi dùng | SVG + guide | Toàn site | Tránh lẫn phong cách | Chưa xác minh |
| MR-012 | Slogan | Một headline/định vị đã duyệt và giới hạn claim | Marketing/Business | Có | Copy + approval | Homepage hero | Hướng người dùng đến giá trị thật | Cần cung cấp |
| MR-013 | Value proposition | 2–4 lợi ích doanh nghiệp chứng minh được; nguồn cho mỗi claim | Marketing/Business | Có | Copy + sources | Homepage/about | Không dùng khẩu hiệu trống | Cần cung cấp |
| MR-014 | Mission/why ADDP | Sứ mệnh, câu chuyện, mốc có hồ sơ, quy định dùng | Marketing/Business | Nên có | Copy + facts | Home/about | Trust/E-E-A-T | Chưa xác minh |
| MR-015 | 3 product summaries | 1–2 câu/sản phẩm, đúng tên/đối tượng/không quá claim | Product/Marketing | Có | Copy approved | Home/cards | 3 route được public | Cần duyệt |
| MR-016 | USP và bằng chứng | Điểm khác biệt cụ thể + tài liệu xác minh từng điểm | Product/Medical | Khi công bố | Claim register | Home/product | Tránh claim không nguồn | Cần cung cấp |
| MR-017 | Homepage CTA | Nhãn CTA, đích URL, thứ tự chính/phụ, điều kiện offer | Marketing/Business | Có | CTA map | Home | Đường chuyển tiếp rõ | Cần duyệt |
| MR-018 | Trust blocks | Thành tựu/chứng nhận/đối tác chỉ khi có quyền và hồ sơ | Business/Legal | Khi công bố | Assets + approvals | Home/product | Tăng trust không tạo chứng cứ giả | Chưa xác minh |
| MR-019 | Glucare facts | Tên pháp lý, biến thể/SKU, quy cách, đơn vị bán | Product/Business | Có | Product sheet | Glucare | Định danh Product schema/offer | Cần xác nhận |
| MR-020 | Glucare giá | Giá chuẩn, 0 ₫ là gì, thử 9.000 ₫ là gì, số lượng, thời hạn, điều kiện | Business/Legal | Có | Price/offer rule | Landing/PDP/cart | `FND-CONVERSION-CONV-001` | Bất rõ trong public sample |
| MR-021 | Glucare chuyên môn | Thành phần, lượng, cách dùng, đối tượng, cảnh báo, chống chỉ định, nguồn | Product + Medical | Có trước xuất bản | Approved fact sheet | PDP/FAQ | `HC-001` manual review | Claim chưa xác minh |
| MR-022 | Glucare ảnh | Front/back/label/box, ảnh lifestyle, original, quyền | Marketing/Design | Có | Originals + release | Landing/PDP | Ảnh/chữ bao bì đọc được | Chưa xác minh originals |
| MR-023 | Glucare nghiên cứu | Nghiên cứu/tài liệu, mối liên hệ chính xác với sản phẩm, quyền trích | Medical/Legal | Nếu công bố | PDF/DOI + approval | PDP/article | Tránh suy efficacy từ nguồn chung | Chưa xác minh |
| MR-024 | Glucare FAQ/reviews | Câu hỏi, câu trả lời đã duyệt, feedback có consent/nguồn/ngày | Content/Medical | Khi công bố | Q&A + consent | PDP | `HC-001`, FAQ/claim risk | Chưa xác minh |
| MR-025 | Viên An Đường facts | Tên chuẩn/SKU/quy cách/nhà sản xuất/phân phối | Product/Business | Có | Product sheet | Viên | Entity/contact alignment | Cần xác nhận |
| MR-026 | Viên pháp nhân/contact | Quyết định block contact và footer có cùng pháp nhân/kênh hay khác vai trò | Business/Legal | Có | Decision memo | Viên/footer | `FND-BRAND-BRAND-20260928-001` | Bất nhất đã quan sát |
| MR-027 | Viên chuyên môn | Thành phần, liều/cách dùng, cảnh báo, đối tượng, claim và nguồn | Product + Medical | Có trước xuất bản | Approved sheet | Viên/FAQ | Câu hỏi/FAQ manual review | Chưa xác minh |
| MR-028 | Viên giá/offer/CTA | Giá, ưu đãi, điều kiện, CTA đúng đích | Business/Marketing | Có | Price sheet + map | Viên/cart | Commerce clarity | Chưa xác minh đầy đủ |
| MR-029 | Viên ảnh/nguồn | Pack/label/lifestyle, nghiên cứu/chứng nhận, reviews có consent | Marketing/Medical/Legal | Khi công bố | Originals + documents | Viên | Trust có nguồn | Chưa xác minh |
| MR-030 | Dovital facts | Tên chuẩn/SKU/quy cách/đối tượng/định vị | Product/Business | Có | Product sheet | Dovital | Định danh nhất quán | Cần xác nhận |
| MR-031 | Dovital chuyên môn | Thành phần, lượng, cách dùng, cảnh báo, claim, nguồn | Product + Medical | Có trước xuất bản | Approved sheet | Dovital | Không tự đánh giá hiệu quả | Chưa xác minh |
| MR-032 | Dovital giá/CTA | Giá/offer, điều kiện, đích CTA desktop/mobile | Business/Marketing | Có | Price + CTA map | Dovital | CTA mobile quan sát được, flow chưa xác minh | Chưa xác minh flow |
| MR-033 | Dovital assets | Pack/label/lifestyle/video, nguồn/quyền, review/certification nếu có | Marketing/Legal | Khi công bố | Originals + approvals | Dovital | Chứng cứ/visual | Chưa xác minh |
| MR-034 | Asset register | Filename, sản phẩm, loại, photographer, quyền, ngày, alt, phiên bản | Marketing/Design | Có | Asset manifest | 3 sản phẩm | QA/đổi phiên bản | Chưa có trong run |
| MR-035 | Social proof | Nguyên văn testimonial, product, ngày, nguồn, consent, quyền ảnh/video | Marketing/Legal | Khi công bố | Consent + originals | Home/products | Không tạo feedback giả | Chưa xác minh |
| MR-036 | Review policy | Quy tắc ẩn danh/verified purchase/moderation/thu hồi đồng ý | Legal/Operations | Khi công bố | Policy | Reviews | Tránh gán “đã mua” không dữ liệu | Chưa xác minh |
| MR-037 | Chứng nhận | Tên chuẩn, số, đơn vị cấp, hiệu lực, phạm vi SKU, bản public được phép | Business/Legal | Khi công bố | PDF + approval | Trust/products | Claim chứng nhận có thể kiểm | Chưa xác minh |
| MR-038 | Nhà sản xuất | Tên/địa chỉ/vai trò thực tế và nguồn chứng minh | Product/Legal | Khi công bố | Hồ sơ | Products/schema | Không trộn manufacturer/distributor | Chưa xác minh |
| MR-039 | Claim register | Mỗi câu claim, trang/SKU, nguồn, reviewer, status, version | Medical + Legal | Có | Sheet | Sitewide | Gate y khoa | Chưa có trong run |
| MR-040 | Article author | Tên thật/biography, vai trò, credentials có thể công bố | Content/HR/Medical | Có cho E-E-A-T | Bio + proof | 3 article | `admin admin` không là hồ sơ chuyên gia | Chưa xác minh |
| MR-041 | Medical reviewer | Tên/chức danh/chuyên môn, phạm vi review, ngày ký | Medical/Legal | Có khi bài/claim y khoa | Review record | Health content | `HC-001/002` manual review | Chưa xác minh |
| MR-042 | Bài viết và ngày | Bản nguồn, published/updated thực, change log | Content | Có | Editorial record | 3 article | Markup/date phải khớp facts | Partial |
| MR-043 | Tài liệu tham khảo | Nguồn primary/authoritative, DOI/URL, đoạn hỗ trợ claim | Content/Medical | Có khi nêu claim | Reference table | Articles/FAQ | Citation readiness | Chưa xác minh đủ |
| MR-044 | Editorial policy | Cách fact-check, cập nhật, sửa lỗi, disclosure/product links | Content/Medical/Legal | Nên có | Policy | Content | Trust/E-E-A-T | Chưa xác minh |
| MR-045 | Q&A facts | Câu hỏi thực, direct answers, definitions, bảng so sánh có nguồn | Content/SEO/Medical | Khi triển khai GEO | Copy + sources | Products/articles | `TASK-005`; không hứa AI citation | Chưa duyệt |
| MR-046 | Entity map | ADDP/pháp nhân/3 sản phẩm/tác giả: tên, URL, sameAs được phép | SEO + Business | Có cho schema | Sheet | Sitewide | Organization/Product/Article facts | Chưa xác minh |
| MR-047 | Checkout rules | Guest, trường bắt buộc, chính sách giao/đổi trả, consent | Operations/Legal | Có nếu triển khai | Flow + policy | Cart/checkout | `REQ-015` không được xác minh | UNKNOWN/PARTIAL |
| MR-048 | Payment rules | COD, chuyển khoản, phí, xác nhận, hoàn tiền, người đối soát | Operations/Finance/Legal | Có nếu triển khai | SOP | Checkout | `REQ-016` BLOCKED | BLOCKED |
| MR-049 | KiotViet | Owner tài khoản, scope API, mapping SKU/đơn/tồn, lỗi/retry | Operations/Developer | Có nếu tích hợp | Integration spec | Commerce | `REQ-017` BLOCKED | BLOCKED |
| MR-050 | Analytics ownership | GTM/GA4/Pixel/Ads IDs, admin owner, consent, privacy | Marketing/Analytics | Có nếu đo | Config inventory | Sitewide | Public signals không quan sát trong sample | Chưa xác minh backend |
| MR-051 | Event taxonomy | View product, CTA, cart, checkout, purchase, dedup, giá trị, PII rule | Analytics + Business | Có | Measurement plan | Journey | Không thể suy receipt từ capture | Chưa xác minh |
| MR-052 | SEO metadata | Title/description/canonical/OG cho home, 3 products, category, articles | SEO + Content | Có | URL sheet | Page classes | `TASK-012`; copy và facts nhất quán | Có finding; cần plan |
| MR-053 | Internal links | Route đích, anchor, related articles/product disclosure | SEO/Content | Có cho content release | Link map | 3 article/products | Điều hướng và attribution | Chưa xác minh đủ |
| MR-054 | Release approval | Bảng người duyệt từng asset/copy/claim/giá/policy; ngày hiệu lực | Project Owner | Có | Approval ledger | Toàn dự án | Traceability và rollback | Chưa có trong run |

## 2. Thông tin doanh nghiệp, brand và homepage

Business Owner ưu tiên MR-001–007 để chốt tên pháp nhân, tên thương hiệu, địa chỉ và hotline theo chức năng. Bằng chứng ở Viên An Đường chỉ khẳng định **hai cách ghi khác nhau trên cùng trang**, không cho phép tự chọn bản đúng. Sau khi ký bảng facts, Marketing bàn giao MR-008–018: logo có bản gốc/quyền, màu/font có license, ảnh người có release; hero copy nói rõ ADDP là ai, giá trị gì và CTA dẫn tới đâu. Nếu chưa có chứng nhận hoặc testimonial hợp lệ, để trống khối đó, không tạo placeholder dưới dạng bằng chứng xã hội.

## 3. Product pack: Glucare

Đường dẫn trong sample: landing Glucare và PDP; xem Hình 4–6, `FND-CONVERSION-CONV-001`, `HC-001` trong audit. Business phải giải nghĩa riêng **0 ₫**, **9.000 ₫ dùng thử**, giá chuẩn của full product, ai đủ điều kiện, số lượng, thời hạn và giá ở giỏ. Marketing không được tự diễn giải thành “miễn phí” hay “giảm giá” nếu thiếu quy tắc. Product/Medical xác nhận ingredient, cách dùng, cảnh báo và claim. Legal kiểm terms/công bố. Ảnh trước/sau bao bì, label readable, nghiên cứu và feedback chỉ dùng khi đã có nguồn/quyền. FAQ phải trả lời câu hỏi thật, không biến câu hỏi thành claim trị bệnh.

## 4. Product pack: Viên An Đường

Đường dẫn `/vien-an-duong-addp.html`, Hình 7–8. MR-026 là gate: business phải quyết định block “Công ty Cổ phần…”/hotline 0243… và footer “Công ty TNHH…”/hotline 0904… là các thực thể/kênh khác nhau có chủ ý hay sai lệch cần sửa; đồng thời xác định địa chỉ chuẩn. Sau đó mới biên tập contact/schema. Các heading dạng câu hỏi có giá trị nhưng `FND-GEO-AEO-GEO-AEO-002` vẫn manual review: cần đối chiếu câu trả lời, nguồn, claim, khả năng hiển thị và quy tắc FAQ. Pack cần ảnh mặt sau và hướng dẫn dùng đọc được, giá/offer/CTA đã duyệt.

## 5. Product pack: Dovital

Đường dẫn sản phẩm Dovital, Hình 9–10. Mobile có CTA trong first viewport là điểm nên bảo vệ, nhưng hành vi sau click chưa được xác minh. Marketing/Product cần định vị riêng, tránh copy USP từ hai sản phẩm khác; cung cấp facts/claim/cảnh báo/giá/ảnh chính chủ và các tài liệu chứng minh. Chỉ đưa testimonial/chứng nhận nếu scope tài liệu đúng Dovital. QA kiểm cùng một thông tin hiển thị trên desktop/mobile và destination CTA.

## 6. Template điền cho từng sản phẩm

Sao chép **nguyên mẫu này ba lần**, đặt tên `Glucare`, `Viên An Đường`, `Dovital`; mỗi trường ghi người chịu trách nhiệm, tài liệu nguồn, trạng thái duyệt và version. Không xóa trường không có dữ liệu: ghi “Chưa có/không áp dụng” có lý do.

```text
Tên sản phẩm chính thức: [Product/Business điền]  | SKU/biến thể/quy cách: [điền]
Trang/URL áp dụng: [điền]  | Nhà sản xuất/phân phối: [tách vai trò + nguồn]
Định vị trong 1 câu: [Marketing điền, Medical kiểm nếu có claim]
Đối tượng phù hợp / không phù hợp: [Medical/Product xác nhận]
Nhu cầu/vấn đề người dùng: [Marketing điền, không biến thành chỉ định y khoa]
3 lợi ích có thể công bố: [mỗi lợi ích + bằng chứng + phạm vi]
Thành phần/hàm lượng/quy cách: [theo nhãn/hồ sơ approved]
Cách dùng/liều lượng/lưu ý/chống chỉ định: [Medical/Product xác nhận]
Giá chuẩn/đơn vị/thuế/vận chuyển: [Business xác nhận + ngày hiệu lực]
Ưu đãi/giá thử/0 ₫ nếu có: [điều kiện, hạn, số lượng, đối tượng, CTA]
CTA chính/phụ và URL đích: [Marketing + Operations xác nhận]
Ảnh/video: [asset ID, original, quyền, alt, phiên bản]
Chứng nhận/nghiên cứu: [tên, số, phạm vi SKU, link/file, quyền công bố]
Claim register: [nguyên văn câu | URL | nguồn | reviewer | Legal | trạng thái]
FAQ: [câu hỏi | câu trả lời | nguồn | reviewer | ngày duyệt]
Review/testimonial: [nguyên văn | nguồn | consent | ẩn danh | ngày | sản phẩm]
Bài viết liên quan: [URL | nội dung liên hệ | disclosure]
Người duyệt cuối / ngày / version: [điền]
Trạng thái xuất bản: [Draft / Approved / Hold; lý do nếu Hold]
```

## 7. Health/medical claims — sổ chặn xuất bản

Đây là **danh mục cần đối chiếu**, không là đánh giá efficacy, safety hay tính đúng của nội dung. Với wording đang hiển thị, người phụ trách phải lưu nguyên văn trong claim register MR-039; bảng này mô tả vùng claim cần xử lý, tránh trích rời một câu y khoa thiếu ngữ cảnh từ capture. Không được xem “có trên website” là “đã được duyệt”.

| Claim / vùng cần kiểm | Product/Page | Current wording trong evidence | Source required | Reviewer required | Publication status |
| --- | --- | --- | --- | --- | --- |
| Công dụng/lợi ích Glucare và liên hệ với đường huyết | Glucare landing/PDP | Lấy **nguyên văn từng câu** từ page vào MR-039; `HC-001` manual | Nhãn/hồ sơ công bố + tài liệu trực tiếp hỗ trợ câu | Medical/Scientific + Legal nếu cần | Chưa xác minh; **không công bố như claim đã duyệt** |
| Thành phần, liều, đối tượng và cảnh báo | Cả 3 sản phẩm | Đối chiếu nhãn gốc từng SKU, không gom chung | Nhãn/hướng dẫn được phê duyệt | Product/Medical | Chưa xác minh nguồn chuẩn |
| Câu hỏi/FAQ có hàm ý tác dụng Viên An Đường | Viên An Đường | Heading dạng câu hỏi quan sát được; `FND-GEO-AEO-GEO-AEO-002` manual | Hồ sơ product + nguồn cho câu trả lời | Medical + Content | Manual review, không promote |
| Ngưỡng/tiêu chí chẩn đoán đái tháo đường | Bài `/blog/post/chuan-doan-benh-dai-thao-duong` | Nội dung chẩn đoán trong bài; `HC-002` manual | Hướng dẫn y khoa hiện hành và citation theo từng ngưỡng | Medical/Scientific reviewer đủ chuyên môn | Giữ chờ duyệt; không xác nhận đúng/sai từ audit |
| Giải thích viêm tụy và đái tháo đường | Bài `/blog/post/dai-thao-duong-do-viem-tuy` | Nội dung sức khỏe trong bài | Tài liệu y khoa liên quan, ngày cập nhật | Medical/Scientific | Chưa xác minh đủ |
| Định nghĩa bệnh đái tháo đường | Bài `/blog/post/dai-thao-duong-la-benh-gi` | Nội dung sức khỏe trong bài | Nguồn chính thống/medical references | Medical/Scientific | Chưa xác minh đủ |
| “Chứng nhận/nghiên cứu/đánh giá” trong copy mới | Home/product/articles | Không được tự thêm wording mới | File gốc, phạm vi áp dụng, quyền sử dụng | Medical/Legal/Business | Hold tới khi đủ hồ sơ |

Luồng duyệt: Marketing/Content lập từng claim và nguồn → Medical/Scientific reviewer đối chiếu **câu chữ + ngữ cảnh + đối tượng** → Legal/compliance duyệt nơi cần → Business Owner duyệt bản công bố → Developer xuất bản đúng version → QA kiểm text/schema/alt/ảnh. Reviewer không chỉ ký tổng thể nếu một claim cụ thể chưa có nguồn. Nếu nguồn không tồn tại, bỏ hoặc viết lại thành nội dung không mang claim sau khi chuyên môn duyệt.

## 8. Yêu cầu hình ảnh và tài sản sản xuất

**Checklist requirement:** hình và thông tin sản phẩm rõ, hỗ trợ 3 sản phẩm/niềm tin/điều hướng; bằng chứng run không chứng minh mọi original/rights. **Recommended production specification** (không phải quan sát về site): nộp file gốc không nén trước khi web-export; ảnh pack mặt trước/sau/bên và label ở độ phân giải đủ đọc (khuyến nghị cạnh dài ≥2000 px), ảnh hero/lifestyle ≥2400 px chiều ngang khi phù hợp; PNG nền trong hoặc WebP/AVIF xuất bản từ original cho vật thể pack; SVG cho logo/icon; video có bản gốc, phụ đề, thumbnail, quyền nhân vật/nhạc. Kích thước thực dùng do Design/Dev quyết theo layout và performance budget, không ép mọi ảnh lên web ở full resolution.

| Loại asset | Glucare | Viên An Đường | Dovital | Yêu cầu kiểm |
| --- | --- | --- | --- | --- |
| Pack front/side/back và seal | ☐ | ☐ | ☐ | Nhãn đọc được, đúng SKU/phiên bản; file gốc + ngày |
| Label/ingredients/usage close-up | ☐ | ☐ | ☐ | Khớp fact sheet Medical, không crop mất cảnh báo |
| Studio/transparent cutout | ☐ | ☐ | ☐ | Không dựng bao bì sai, alpha sạch, quyền sử dụng |
| Lifestyle/human | ☐ | ☐ | ☐ | Model release, không hàm ý kết quả điều trị nếu không có nguồn |
| Video/demo/testimonial | ☐ | ☐ | ☐ | Script duyệt, phụ đề, consent, quyền nhạc/hình |
| Alt text/caption/credit | ☐ | ☐ | ☐ | Mô tả đúng ảnh, không nhồi từ khóa/claim |

## 9. Social proof và chứng nhận

Feedback cần nguồn nguyên bản, ngày, sản phẩm, cách ẩn danh, consent có thể truy xuất và cơ chế rút consent; “verified purchase” chỉ dùng nếu hệ thống có đối soát. Chứng nhận cần đơn vị cấp, số, hiệu lực, phạm vi sản phẩm/nhà máy và quyền công bố. Một tài liệu về nhà sản xuất không tự động chứng minh hiệu quả của SKU. Nếu chưa đủ hồ sơ, không dùng icon seal/5 sao/quote giả hoặc ngôn ngữ “được chứng nhận” chung chung.

## 10. Bài viết, E-E-A-T và GEO/AEO

Ba bài selected trong audit là `/blog/post/chuan-doan-benh-dai-thao-duong`, `/blog/post/dai-thao-duong-do-viem-tuy`, `/blog/post/dai-thao-duong-la-benh-gi`; page category không thay cho article detail. Mỗi bài cần brief intent, H1 và heading logic, lead/direct answer 40–60 từ **khi phù hợp** (đây là đề xuất biên tập, không phải tiêu chuẩn Google), bảng/bullet có nguồn, tên tác giả/bio/credentials, reviewer chuyên môn nếu cần, ngày xuất bản và cập nhật thật, nguồn tham khảo liên kết chính xác, disclosure khi liên kết sản phẩm, canonical/meta và `BlogPosting` fields khớp text hiển thị. Không tự tạo credentials, tên bác sĩ hay ngày lịch sử. GEO/AEO cần entity naming, câu trả lời có thể trích, context và citations; JSON-LD chỉ là một lớp kỹ thuật, không bảo đảm xuất hiện trong AI answer.

## 11. Pricing, checkout, analytics và SEO

Giá/offer: MR-020 và MR-028/032 phải có source of truth theo SKU/kênh/thời hạn, gồm điểm vào 0 ₫ và 9.000 ₫ Glucare, giá full, giới hạn, phí/thuế, CTA. Commerce: MR-047–049 phải mô tả guest checkout, required fields, COD/chuyển khoản, xác nhận đơn, hoàn/đổi, fulfillment, KiotViet mapping và test environment; run này không xác nhận giao dịch. Analytics: MR-050–051 phải có account owner, consent, event taxonomy và receipt test; absence of public tag signal trong audit không phải bằng chứng không có backend measurement. SEO: MR-052–053 cần sheet theo URL/page class và facts đã duyệt, không sao chép meta giữa SKU khác nhau.

## 12. Checklist bàn giao có thể tick

- [ ] Business ký MR-001–007, giải quyết rõ bất nhất Viên An Đường.
- [ ] Brand/Design bàn giao logo/font/color/ảnh và quyền MR-008–011.
- [ ] Marketing ký homepage copy, 3 product summaries, CTA map MR-012–018.
- [ ] Glucare price/offer `0 ₫` / `9.000 ₫` / full price được Business + Legal xác nhận bằng văn bản.
- [ ] Ba template product §6 hoàn thành, mỗi claim có nguồn/reviewer/status; MR-019–033.
- [ ] Asset manifest, originals, quyền ảnh/video và alt/caption MR-034.
- [ ] Testimonial/chứng nhận có consent, số/phạm vi/hiệu lực MR-035–038 hoặc để trống.
- [ ] Claim register MR-039 được Medical/Legal duyệt từng dòng; manual items không tự promote.
- [ ] Tác giả, reviewer, ngày, nguồn và editorial policy cho 3 bài MR-040–044.
- [ ] Direct answers/FAQ/entity facts và URL/link map được SEO/Medical duyệt MR-045–046, MR-052–053.
- [ ] Checkout/payment/KiotViet spec và test owner MR-047–049, không dựa trên giả định run.
- [ ] Analytics owner/consent/events/reporting MR-050–051.
- [ ] Ledger phê duyệt/version MR-054; QA đối chiếu bản xuất bản với nguồn và không mất các điểm KEEP/PROTECT.

**Điều kiện hoàn thành pack:** mỗi mục bắt buộc có tài liệu, owner, version, trạng thái duyệt, URL/SKU áp dụng. Mục còn UNKNOWN/PARTIAL/BLOCKED vẫn ghi đúng trạng thái và người cần cung cấp; không lấp bằng nội dung giả.
