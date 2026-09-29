# TÓM TẮT ĐIỀU HÀNH AUDIT WEBSITE ADDP — V1

**Dành cho:** Ban quản lý, Project Owner, Marketing Lead, Tech Lead. **Nguồn:** duy nhất run `20260928T211548Z-replacement-full-audit`, không thay thế [báo cáo chi tiết](01_BAO_CAO_AUDIT_V1_VI.md). Đây là audit black-box, không đánh giá source/backend, tính đúng y khoa hay giao dịch thành công. Bản kế hoạch thực thi ở [tài liệu 02](02_KE_HOACH_CHINH_SUA_TRIEN_KHAI_V1_VI.md); đầu vào cần cấp ở [tài liệu 03](03_YEU_CAU_NOI_DUNG_TAI_NGUYEN_MARKETING_V1_VI.md).

## 1. Kết luận cần ra quyết định

Audit đã đủ điều kiện hoàn tất theo contract của run: 25/25 trang usable (16 COMPLETE, 9 PARTIAL), homepage, ba tuyến sản phẩm, ba bài chi tiết, trang công ty/chính sách; 12 specialist có artifact terminal; review/final consistency hợp lệ. Sau review có **14 finding accepted** (15 trước dedup, 1 trùng được gộp) và **3 mục manual review** chưa phải lỗi xác nhận. Trong 17 yêu cầu checklist, 8 UNKNOWN, 7 PARTIAL, 2 BLOCKED, không có PASS. Điều này không có nghĩa website “trượt” 17 mục; nhiều khả năng không thể được kết luận từ collection và các hành trình read-only. `UNKNOWN ≠ FAIL`.

**Quyết định sớm nhất cần từ phía ADDP:** xác nhận một nguồn dữ liệu pháp nhân/liên hệ; giải nghĩa 0 ₫ và 9.000 ₫ trong Glucare cùng giá/điều kiện chính thức; chỉ định người duyệt claim sức khỏe và nguồn nghiên cứu; cấp quy định checkout/payment/KiotViet, consent và quyền kiểm thử nếu muốn đóng các khoảng trống. Đây là các phụ thuộc khóa nội dung, thiết kế, schema và analytics; không nên giao Dev tự đoán.

## 2. Những gì run chứng minh và những gì chưa

Run quan sát được các route công khai, nội dung render, ảnh, CTA, metadata/endpoint và đo hiệu năng lab theo điều kiện thu thập. Các screenshot minh họa trong báo cáo chi tiết: [trang chủ Hình 2–3](01_BAO_CAO_AUDIT_V1_VI.md#9-đánh-giá-trang-chủ), [ba sản phẩm Hình 4–10](01_BAO_CAO_AUDIT_V1_VI.md#10-đánh-giá-glucare), [ba bài Hình 11–13](01_BAO_CAO_AUDIT_V1_VI.md#14-đánh-giá-bài-viết-và-nội-dung). Ví dụ, trang Viên An Đường công bố hai dạng pháp nhân, hai cách ghi địa chỉ và hai hotline trong contact block/footer (`FND-BRAND-BRAND-20260928-001`, `EVD-AD18B204CB25AAFE`, `EVD-927DDAF696B5D339`); bằng chứng **không chỉ ra bản nào đúng**. Glucare có cách đặt giá/đề nghị 0 ₫ và 9.000 ₫ cần làm rõ (`FND-CONVERSION-CONV-001`, `EVD-337D55BF44B7E909`); không được tự coi 0 ₫ là giá sản phẩm.

Không có bằng chứng đủ để xác nhận guest checkout, thanh toán, xác nhận đơn, receipt analytics hay đồng bộ KiotViet. Public analytics sample không thấy GTM/GA4/dataLayer nhưng collector chặn telemetry theo phạm vi read-only; không thể kết luận backend không có đo lường (`FND-ANALYTICS-analytics-public-signals-not-observed-sample`). Bốn persona đều PARTIAL; lỗi runner/interruption không phải lỗi UX của website. Ba mục cần medical/content review (`FND-GEO-AEO-GEO-AEO-002`, `FND-HEALTH-CONTENT-HC-001`, `FND-HEALTH-CONTENT-HC-002`) **không được đưa vào danh sách defect đã xác nhận**.

## 3. Homepage và trải nghiệm ba sản phẩm

Trang chủ có nhận diện ADDP, hero sức khỏe, hai lối hành động, card/link tới Glucare, điều hướng đến Giới thiệu/chính sách và robots/canonical cơ bản; đây là các điểm phải giữ khi làm lại (`EVD-8C749E8D6F00DF83`, `EVD-4256DF417284230A`, các journey evidence trong audit §29). Phân tích trực quan: trên mobile, ảnh/hero chiếm first viewport, ba sản phẩm chưa xuất hiện ngay; CTA nhỏ hơn CTA mobile Dovital và các khối thông điệp dồn sau ảnh. Đây là **expert visual review**, không tự đổi `REQ-004=UNKNOWN` hay chứng minh tỷ lệ chuyển đổi. Finding homepage/mobile `FND-UX-UI-UXUI-001` và lab performance cần giải quyết bằng thử nghiệm layout + đo trước–sau, không chỉ thay hình.

| Sản phẩm | Điều có bằng chứng | Rủi ro/việc cần xác minh | Quyết định cần |
| --- | --- | --- | --- |
| Glucare | Landing và PDP công khai; PDP thấy giá 9.000 đ, quantity, Add to Cart/Buy Now (Hình 4–6; `EVD-B59288AF81EE6CF7`) | 0 ₫/giá thử/giá chuẩn dễ nhập nhằng; claim sức khỏe manual review; CTA sau click/checkout chưa xác minh | Giá/offer rules, nhãn và claim approved |
| Viên An Đường | PDP có giá 250.000 đ, giá gạch 550.000 đ, CTA; heading dạng câu hỏi (Hình 7–8; `EVD-FF8E9901B30017D5`) | Pháp nhân/contact bất nhất; cơ sở giá gạch/FAQ/claim và flow chưa xác minh | Nguồn pháp nhân, liên hệ, giá và nội dung Medical |
| Dovital | Landing có ba biến thể và CTA cam rõ trên first viewport mobile (Hình 9–10; `EVD-9175C04DA21427CA`) | Giá cụ thể không nằm trong vùng screenshot đầu; hành vi CTA/offer/schema và research chưa đủ bằng chứng | Pack sản phẩm, giá/offer và nguồn claim |

Ba sản phẩm cần **ba bộ nội dung riêng**: SKU/tên chuẩn, định vị, đối tượng, nhãn/thành phần/cảnh báo, giá/điều kiện, ảnh gốc và quyền, chứng nhận đúng phạm vi, claim có nguồn, FAQ đã duyệt, review có consent. Không chuyển claim từ sản phẩm này sang sản phẩm khác.

## 4. Content, GEO/AEO và niềm tin

Ba bài chi tiết về chẩn đoán đái tháo đường, đái tháo đường do viêm tụy và bệnh đái tháo đường đã được phân tích riêng; cả ba collection status PARTIAL. H1 dạng câu hỏi và `BlogPosting` có trong artifact là nền tảng hữu ích, nhưng author hiển thị/markup, credentials, reviewer, references, ngày cập nhật, disclosure và citation readiness chưa đủ để xác nhận chất lượng y khoa hoặc E-E-A-T hoàn chỉnh. Riêng các ngưỡng chẩn đoán thuộc manual review `HC-002`; chỉ Medical/Scientific reviewer có nguồn và thẩm quyền mới quyết định sửa/giữ câu chữ. Content hiện có placeholder accepted (`FND-CONTENT-CONTENT-001`); cần thay đúng instance sau duyệt.

GEO/AEO (khả năng nội dung trả lời rõ và có thể được hệ thống trích dẫn) không đồng nghĩa thêm JSON-LD. Cần entity ADDP/pháp nhân/sản phẩm nhất quán, câu trả lời trực tiếp khi phù hợp, FAQ có căn cứ, bảng facts, nguồn, tác giả/reviewer và internal link có disclosure. Schema phải phản ánh dữ liệu hiển thị đã duyệt; hợp lệ cú pháp không bảo đảm được AI trích dẫn hoặc rich result. Chính sách bot/robots cần business và SEO chốt, không mặc định mọi AI crawler được hoặc nên truy cập.

## 5. Kỹ thuật và đo lường

Các finding hiệu năng bao phủ homepage, `/benh-ly` và article template (`FND-PERFORMANCE-PERF-001/002/003`). Đây là quan sát lab; không tự gán nguyên nhân cho ảnh, máy chủ hoặc JavaScript. Team kỹ thuật cần trace phần tử LCP (Largest Contentful Paint – thời gian hiển thị nội dung lớn nhất), tải tài nguyên, render delay và CLS (Cumulative Layout Shift – dịch chuyển bố cục) nếu có dữ liệu, rồi đo lại cùng profile. Cần tránh tối ưu điểm đo bằng cách loại nội dung/CTA quan trọng.

Technical SEO có các finding riêng cho sitemap, robots và metadata (`TASK-010/011/012`); `robots.txt` reachable không đồng nghĩa toàn bộ policy đúng, và canonical/meta của ba bài có trong artifact SEO chi tiết dù ma trận article tổng hợp đánh dấu một số trường `ABSENT_IN_CAPTURE`. Đội SEO cần đối chiếu endpoint, HTML/source và rendered output sau sửa. Structured data (`TASK-013`) phải dựa trên pháp nhân, sản phẩm, giá và nội dung được ký duyệt. Analytics (`TASK-001`) cần quyền admin, consent và môi trường test trước khi khẳng định event receipt. Commerce/checkout/KiotViet là validation/transformation work, **không phải finding về một lỗi backend đã chứng minh**.

## 6. Ưu tiên triển khai và phụ thuộc

1. **Wave 0 – khóa dữ liệu sự thật:** Business xác nhận pháp nhân/contact, giá/offer, product facts; Medical/Legal nhận claim register; Operations/Analytics định nghĩa checkout và đo lường. Đây là gate để không sửa rồi phải rút lại.
2. **Wave 1 – niềm tin và nền kỹ thuật:** sửa mâu thuẫn Viên/Glucare có evidence, xử lý sitemap/robots/meta trên URL mẫu.
3. **Wave 2 – trải nghiệm:** UI kit, homepage mobile và ba product experiences; đo lab/visual trong cùng điều kiện, bảo vệ route/CTA đang có.
4. **Wave 3 – nội dung/máy đọc:** 3 bài mẫu, FAQ/facts và claim đã duyệt, schema bám dữ liệu hiển thị; điều tra performance article.
5. **Wave 4 – xác minh:** QA visual/crawl, analytics events và commerce test trong môi trường/ủy quyền phù hợp; giữ UNKNOWN/BLOCKED nếu không có test.

Kế hoạch chi tiết gồm 10 workstream, 14 task remediation canonical và 10 card transformation/validation dẫn xuất. Dependency đề xuất: business identity → copy/schema; giá/offer → product UX/structured data/event value; UI kit → homepage/product build; approved content → FAQ/GEO; checkout spec → transaction test → conversion receipt. Dependency artifact gốc trống, nên đây là logic lập kế hoạch, không phải kết quả audit quan sát.

## 7. Quyết định cần cấp và rủi ro còn lại

| Cần quyết định/cấp | Ai | Nếu chưa có |
| --- | --- | --- |
| Bản chuẩn pháp nhân, địa chỉ, hotline, social và quyền dùng chứng nhận | Business + Legal | Không thể sửa chính xác bất nhất Viên hay Organization facts |
| Giá/offer Glucare và hai sản phẩm còn lại, điều kiện khuyến mại | Business + Marketing + Legal | UI/schema/checkout có thể sai giá; không được đoán |
| Claim register, nguồn y khoa, reviewer có credentials | Medical/Scientific + Legal | Giữ claim ở trạng thái chưa xác minh, không thêm social proof/medical assertion |
| Brand originals, product originals và quyền sử dụng | Marketing + Design | Không thể bàn giao visual production hoàn chỉnh |
| Flow checkout/payment/KiotViet, môi trường test và quyền | Operations + Dev + QA | `REQ-016/017` giữ BLOCKED; không tuyên bố bán hàng end-to-end |
| GTM/GA4/Pixel ownership, consent và event taxonomy | Marketing/Analytics/Legal | Không thể xác nhận attribution/conversion receipt |

**Giá trị cần bảo vệ:** các route ba sản phẩm đang công khai; homepage có lối vào Glucare; Giới thiệu/chính sách mở được; PDP có CTA và giá hiển thị; Dovital mobile có CTA nổi; bài có `BlogPosting`/canonical trong SEO artifact; robots endpoint reachable. Mỗi thay đổi cần regression test các điểm này, không “redesign” làm mất đường mua/đường tin cậy.

## 8. Bước tiếp theo

Project Owner chỉ định owner cho MR-001–054 trong [bộ yêu cầu Marketing](03_YEU_CAU_NOI_DUNG_TAI_NGUYEN_MARKETING_V1_VI.md) và chọn phiên bản nguồn sự thật. Dev/Design/SEO nhận [plan](02_KE_HOACH_CHINH_SUA_TRIEN_KHAI_V1_VI.md), thực hiện code discovery và ước lượng thực tế sau khi input được duyệt. QA định nghĩa test staging; không lặp production audit để “cải thiện status”. Sau mỗi release, lập bằng chứng triển khai mới và nghiệm thu theo URL; không sửa evidence canonical run này. Toàn bộ 14 accepted finding và 3 manual-review item được truy vết trong báo cáo chi tiết.
