# SECTION INVENTORY — 8 TRANG TRỌNG YẾU ADDP V2

Lập inventory **trước khi đánh giá section** từ canonical screenshot/SEO/HTML và visual recapture tuần tự. Thứ tự dưới là thứ tự đọc/scroll nhìn thấy, không phải cấu trúc component trong source. `SVR` = `SUPPLEMENTAL_VISUAL_RECAPTURE` sau run; các section VAD **không có canonical Evidence ID** vì `/vien-an-duong` được discover nhưng `fetched=false`. File ảnh và timestamp ở [INDEX recapture](visual-recapture/INDEX.md). Với section dùng screenshot scan, chỉ liên kết ảnh khi nội dung thực sự nằm trong viewport; ảnh blank/đang reveal không dùng làm bằng chứng.

## 1. Homepage — `https://addp.vn/`

| ID | Section / vị trí | Vai trò và câu hỏi người dùng | CTA/đường tiếp | Evidence |
| --- | --- | --- | --- | --- |
| HOME-S01 | Header/nav, đầu | Tôi đi đâu để xem sản phẩm/kiến thức/chính sách? | Menu, tìm kiếm, giỏ | `EVD-8C749E8D6F00DF83`; `SVR-HOME-S01-DESKTOP` |
| HOME-S02 | Hero, vùng đầu | ADDP là ai, tại sao ở đây? | Khám phá ngay, tư vấn miễn phí | `EVD-8C749E8D6F00DF83`, `EVD-4256DF417284230A` |
| HOME-S03 | Khối trust/USP ngay sau hero | Có lý do tin không? | Dẫn tiếp xuống sản phẩm | `EVD-702877ACD4E72E55`; ảnh full chỉ cho biết bố cục, hồ sơ chưa xác minh |
| HOME-S04 | Gateway ba sản phẩm | Tôi nên xem Glucare, Viên hay Dovital? | Product routes | `EVD-A81704E1324D31CC`; `SVR-HOME-S02-DESKTOP` |
| HOME-S05 | Form tư vấn | Tôi hỏi trước khi mua thế nào? | Form (không submit) | `EVD-A81704E1324D31CC`; `SVR-HOME-S03-DESKTOP` |
| HOME-S06 | Footer/chính sách/contact | Ai vận hành, chính sách gì? | Giới thiệu/chính sách/contact | `SVR-HOME-S04-DESKTOP`; journey `EVD-F3C54C45BCE8336A-research-2-SHOT` |

## 2. Glucare landing — `https://addp.vn/sua-hat-glucare-plus`

| ID | Section / vị trí | Vai trò / câu hỏi | CTA | Visual evidence |
| --- | --- | --- | --- | --- |
| GLU-S01 | Header, đầu | Định hướng thương hiệu và điều hướng | Nav | `SVR-GLU-S01-DESKTOP/MOBILE` |
| GLU-S02 | Hero, đầu | Sản phẩm gì, phù hợp ai? | Đặt mua/khám phá thành phần | `SVR-GLU-S01-DESKTOP/MOBILE`; canonical `EVD-C86C629E938B1E14` |
| GLU-S03 | Ba USP, ngay sau hero | Có điểm khác biệt gì? | Scroll/khám phá | `SVR-GLU-SCAN-01-DESKTOP`, `SVR-GLU-SCAN-01-MOBILE` |
| GLU-S04 | Featured product cards | Mua loại/gói nào, giá nào? | Thêm vào giỏ | `SVR-GLU-SCAN-01/02-DESKTOP`, `SVR-GLU-SCAN-02-MOBILE` |
| GLU-S05 | Khám phá bên trong lon 400g | Trong sản phẩm có gì? | Tab/nhóm ingredients | `SVR-GLU-SCAN-02-DESKTOP`, `SVR-GLU-SCAN-03-MOBILE` |
| GLU-S05A | Nhóm 11 hạt | Tên và vai trò từng hạt? | Tab/interaction | `SVR-GLU-SCAN-02-DESKTOP`, `SVR-GLU-SCAN-04-MOBILE` |
| GLU-S05B | Quả Nhàu/Đông Trùng | Nguồn/cơ chế thảo dược? | Tab/interaction | `EVD-D1249648026B4D96`; `SVR-GLU-S05B-DESKTOP` (tab read-only) |
| GLU-S05C | Vitamin/vi chất | Có hàm lượng nào và nguồn? | Tab/interaction | `EVD-D1249648026B4D96`; `SVR-GLU-S05C-DESKTOP` (tab read-only) |
| GLU-S06 | Đối tượng sử dụng | Có phù hợp với tôi? | Tiếp tục khám phá/mua | `SVR-GLU-SCAN-03-DESKTOP`, `SVR-GLU-SCAN-05/06-MOBILE` |
| GLU-S07 | Danh sách sản phẩm | SKU/giá so ra sao? | Card/PDP | `SVR-GLU-SCAN-04-DESKTOP`, `SVR-GLU-SCAN-07-MOBILE` |
| GLU-S08 | Pha đúng cách | Dùng thế nào? | Không nhất thiết CTA | `SVR-GLU-SCAN-08/09-MOBILE`; `SVR-GLU-S08-DESKTOP` |
| GLU-S09 | Lưu ý nhiệt độ nước | Có cảnh báo thao tác nào? | Tiếp tục | `SVR-GLU-SCAN-06-DESKTOP`, `SVR-GLU-SCAN-10/11-MOBILE` |
| GLU-S10 | Habit/CTA hằng ngày | Có lý do hành động bây giờ? | Mua/tư vấn | `SVR-GLU-SCAN-06/07-DESKTOP`, `SVR-GLU-SCAN-11/12-MOBILE` |
| GLU-S11 | Offer gói thử 9.000 | Tôi nhận gì/điều kiện nào? | Đăng ký gói thử | `SVR-GLU-SCAN-07-DESKTOP`, `SVR-GLU-SCAN-13-MOBILE`; `FND-CONVERSION-CONV-001` |
| GLU-S12 | Form đăng ký/CTA | Tôi cần cung cấp gì? | Submit **không được thử trong audit** | `SVR-GLU-SCAN-07-DESKTOP`, `SVR-GLU-SCAN-14-MOBILE` |
| GLU-S13 | Footer | Nguồn doanh nghiệp/chính sách | Links/contact | `SVR-GLU-SCAN-08/09-DESKTOP` |

## 3. Dovital landing — `https://addp.vn/sui-dovital`

| ID | Section / vị trí | Vai trò / câu hỏi | CTA | Evidence |
| --- | --- | --- | --- | --- |
| DOV-S01 | Header | Đường tới category/kiến thức | Nav | `SVR-DOV-SCAN-00-DESKTOP/MOBILE` |
| DOV-S02 | Hero ba vị | Đây là dòng/biến thể gì? | Đặt combo | Canonical `EVD-6695052421D33FF3`, `EVD-9175C04DA21427CA`; `SVR-DOV-SCAN-00-*` |
| DOV-S03 | “Bộ đôi” benefit | Tại sao kết hợp? | Mua ngay | `SVR-DOV-SCAN-00/01-DESKTOP`, `SVR-DOV-SCAN-01-MOBILE` |
| DOV-S04 | Hai dòng MultiVitamin/Mát Gan | Khác biệt hai dòng? | Chọn gói | `SVR-DOV-SCAN-01-DESKTOP`, `SVR-DOV-SCAN-02-MOBILE` |
| DOV-S05 | Chăm sóc từ điều nhỏ | Message/habit | Tiếp tục | `SVR-DOV-SCAN-02-DESKTOP`, `SVR-DOV-SCAN-03-MOBILE` |
| DOV-S06 | Sản phẩm nổi bật | Combo nào có? | Card/giỏ | `SVR-DOV-SCAN-02/03-DESKTOP`, `SVR-DOV-SCAN-04-MOBILE` |
| DOV-S07 | Thành phần dược liệu | Có gì bên trong? | Chuyển giữa dòng | `SVR-DOV-SCAN-03-DESKTOP`, `SVR-DOV-SCAN-05/06-MOBILE` |
| DOV-S08 | MultiVitamin details/benefits | Lợi ích theo dòng? | Tiếp tục | `SVR-DOV-SCAN-04-DESKTOP`, `SVR-DOV-SCAN-07/08-MOBILE` |
| DOV-S09 | Mát Gan details/benefits | Lợi ích theo dòng thứ hai? | Tiếp tục | `SVR-DOV-SCAN-05-DESKTOP`, `SVR-DOV-SCAN-09/11-MOBILE` |
| DOV-S10 | Hành trình/CTA | Người đọc đã sẵn sàng chưa? | Mua | `SVR-DOV-SCAN-06-DESKTOP`, `SVR-DOV-SCAN-12-MOBILE` |
| DOV-S11 | Danh sách sản phẩm dài | Combo/SKU/giá? | Product cards | `SVR-DOV-S11-DESKTOP`, `SVR-DOV-SCAN-13-MOBILE` |
| DOV-S12 | Hướng dẫn sử dụng | Dùng viên sủi thế nào? | Không nhất thiết CTA | `SVR-DOV-S12-DESKTOP`, `SVR-DOV-SCAN-14/15-MOBILE` |
| DOV-S13 | Lời mời cuối | Bước kế tiếp? | CTA | `SVR-DOV-S13-DESKTOP`, `SVR-DOV-SCAN-16-MOBILE` |
| DOV-S14 | Footer | Contact/chính sách | Links | `SVR-DOV-SCAN-09-DESKTOP` |

## 4. Viên An Đường landing — `https://addp.vn/vien-an-duong`

**Chú ý nguồn:** chỉ có live visual supplemental. PDP `/vien-an-duong-addp.html` là route khác; mọi Evidence ID canonical được nhắc sau đây chỉ để đối chiếu PDP, **không** gán cho section landing.

| ID | Section / vị trí | Vai trò / câu hỏi | CTA | Visual evidence |
| --- | --- | --- | --- | --- |
| VAD-S01 | Header | Điều hướng/ADDP identity | Nav | `SVR-VAD-SCAN-00-DESKTOP/MOBILE` |
| VAD-S02 | Hero | Sản phẩm gì, hỗ trợ thế nào? | Tư vấn miễn phí | `SVR-VAD-SCAN-00-DESKTOP/MOBILE` |
| VAD-S03 | Ba lời hứa 10/1/bền vững/minh bạch | Vì sao tin? | Tiếp tục | `SVR-VAD-SCAN-00/01-DESKTOP`, `SVR-VAD-SCAN-01/02-MOBILE` |
| VAD-S04 | “Không hứa phép màu” | Giới hạn kỳ vọng? | Tiếp tục | `SVR-VAD-SCAN-01-DESKTOP`, `SVR-VAD-SCAN-02-MOBILE` |
| VAD-S05 | Sản phẩm nổi bật | Có gì để mua/xem? | Xem 24+ sản phẩm | `SVR-VAD-SCAN-02-DESKTOP`, `SVR-VAD-SCAN-04-MOBILE` |
| VAD-S06 | Sức mạnh từ thiên nhiên/ingredients | Thành phần và hàm lượng? | Chọn nhóm | `SVR-VAD-SCAN-03-DESKTOP`, `SVR-VAD-SCAN-05-MOBILE` |
| VAD-S07 | Liều dùng hai giai đoạn | Dùng thế nào? | Tiếp tục | `SVR-VAD-SCAN-04-DESKTOP`, `SVR-VAD-SCAN-06/07-MOBILE` |
| VAD-S08 | Danh sách combo/SKU | Giá/điều kiện? | Thêm giỏ **không click** | `SVR-VAD-SCAN-05/06-DESKTOP`, `SVR-VAD-SCAN-08/09-MOBILE` |
| VAD-S09 | Khuyến cáo/chống chỉ định | Ai không nên dùng? | Tư vấn bác sĩ | `SVR-VAD-S09-DESKTOP`, `SVR-VAD-SCAN-11-MOBILE` |
| VAD-S10 | Final CTA | Bước tiếp theo an toàn? | Tư vấn miễn phí | `SVR-VAD-S10-DESKTOP`, `SVR-VAD-SCAN-12-MOBILE` |
| VAD-S11 | Footer | Pháp nhân/contact/chính sách | Links | `SVR-VAD-SCAN-08-DESKTOP`, `SVR-VAD-SCAN-13-MOBILE` |

## 5. PDP Glucare gói thử

| ID | Section | Vai trò | CTA | Evidence |
| --- | --- | --- | --- | --- |
| PDP-S01 | Breadcrumb/gallery/tên/SKU | Định danh gói thử | Product navigation | `EVD-B59288AF81EE6CF7`; `SVR-PDP-S01-DESKTOP/MOBILE` |
| PDP-S02 | Giá/quantity/Buy Now | Transactional truth | Add to Cart/Buy Now | `EVD-B59288AF81EE6CF7`; `SVR-PDP-S02-MOBILE` |
| PDP-S03 | Quick overview | Tóm tắt thành phần/đối tượng | Tiếp tục | `EVD-C07AE1B67F5FAB1D`; `SVR-PDP-S02-DESKTOP` |
| PDP-S04 | Details | Composition/usage/specification | More View | `EVD-90958BB0A35F4C7E`; `SVR-PDP-S03-DESKTOP` |
| PDP-S05 | Reviews/shipping/custom tabs | Proof và điều kiện cuối | Mở tab | `EVD-90958BB0A35F4C7E`; cần kiểm nội dung từng tab |
| PDP-S06 | Footer | Contact/chính sách | Links | `SVR-PDP-S04-DESKTOP` |

## 6. Product category — Sữa dinh dưỡng

| ID | Section | Vai trò | CTA | Evidence |
| --- | --- | --- | --- | --- |
| CAT-S01 | Header/breadcrumb/H1 | Định vị danh mục | Nav | `EVD-0EAEC5DEAE31B4D3`; `SVR-CAT-S01-*` |
| CAT-S02 | Category thumbnails | Chọn sữa trẻ em/người lớn | Category link | `EVD-240556FCB8CFEF2B` (placeholder) |
| CAT-S03 | Sidebar filters | Thu hẹp tập 4 sản phẩm | Filter/Go | `EVD-240556FCB8CFEF2B`; `SVR-CAT-S02-DESKTOP` |
| CAT-S04 | Sort/toolbar | Đổi thứ tự/view | Sort | `EVD-240556FCB8CFEF2B`; `SVR-CAT-S01-MOBILE` |
| CAT-S05 | Product grid/card | So tên/ảnh/giá/quy cách | Card/giỏ | `EVD-240556FCB8CFEF2B`; `SVR-CAT-S02/03-DESKTOP` |
| CAT-S06 | Price/review display | Đánh giá chi phí/social proof | PDP/giỏ | `EVD-240556FCB8CFEF2B`; 0/9.000 cần Business truth |
| CAT-S07 | Pagination/SEO/footer | Chuyển trang và chủ đề | Page links | Full screenshot; nếu không có thêm trang ghi N/A |

## 7. Blog category — Sức khỏe Tiểu đường

| ID | Section | Vai trò | CTA | Evidence |
| --- | --- | --- | --- | --- |
| BLOG-S01 | Breadcrumb/H1 | Topic orientation | Category links | `EVD-65674D7855E4F693`; `SVR-BLOG-S01-*` |
| BLOG-S02 | Article card đầu | Tìm bài đúng câu hỏi | Read more/title | `EVD-65674D7855E4F693`; `SVR-BLOG-S01-MOBILE` |
| BLOG-S03 | Các article cards | Quét risk/prevention/diagnosis | Article links | `EVD-1D1316F928585A48`; `SVR-BLOG-S02/03-*` |
| BLOG-S04 | Card metadata | Author/date/excerpt | Article | `EVD-70BB53F1B279EAEE`; author chưa thấy trong viewport |
| BLOG-S05 | Search/sidebar/recent posts | Đường vào khác | Search/links | `EVD-65674D7855E4F693` |
| BLOG-S06 | Pagination/archive/footer | Duyệt sâu/chính sách | Archives | `EVD-1D1316F928585A48` |

## 8. Article detail — bài chẩn đoán

| ID | Section | Vai trò / câu hỏi | CTA | Evidence |
| --- | --- | --- | --- | --- |
| ART-S01 | Breadcrumb/H1/date | Tôi đang đọc bài nào, từ khi nào? | Category link | `EVD-DDFFD3BFCCF0CDB6`; `SVR-ART-S01-MOBILE` |
| ART-S02 | Author/reviewer | Ai chịu trách nhiệm? | Bio nếu có | `EVD-2326A9C7428D947E` (`admin admin` markup); credentials UNKNOWN |
| ART-S03 | Infographic đầu | Cách chẩn đoán tổng quan | Scroll | `EVD-10A64944D2AB6612`; `SVR-ART-S01-DESKTOP` |
| ART-S04 | Opening/direct answer | Trả lời câu hỏi H1 ngay? | Related question | `EVD-DDFFD3BFCCF0CDB6`; `SVR-ART-S02-MOBILE` |
| ART-S05 | Tầm quan trọng chẩn đoán sớm | Vì sao cần khám sớm? | Tiếp tục | `EVD-01E8B99B0727F6CF`; full screenshot |
| ART-S06 | Tiêu chí/ngưỡng | Những tiêu chí nào? | Không tự chẩn đoán | `EVD-01E8B99B0727F6CF`; `HC-002` manual |
| ART-S07 | Các xét nghiệm | Xét nghiệm khác nhau thế nào? | Tiếp tục | `EVD-01E8B99B0727F6CF`; `SVR-ART-S03-DESKTOP` |
| ART-S08 | Chuẩn bị/theo dõi/tái khám | Tôi cần làm gì trước/sau? | Tư vấn chuyên môn | `EVD-01E8B99B0727F6CF`; `SVR-ART-S04-DESKTOP` |
| ART-S09 | Tổng kết | Điều quan trọng cần nhớ? | Related articles | `EVD-01E8B99B0727F6CF` |
| ART-S10 | Related images/links/comments | Đọc tiếp, phản hồi | Related article | `EVD-2773831F8B2D63A5`; `SVR-ART-S05-DESKTOP` |
| ART-S11 | Sources/disclosure/FAQ/author bio | Trust và kiểm chứng | Source link nếu có | **UNKNOWN**: cần đối chiếu đầy đủ, không invent section hiện có |
| ART-S12 | Footer | Contact/chính sách | Links | `EVD-2773831F8B2D63A5` |

## Điểm cần QA trước khi gọi inventory hoàn chỉnh

Một số heading ban đầu bị dịch chuyển bởi reveal/animation; vì vậy tên ảnh từ bản recapture thử theo tọa độ heading cũ không luôn khớp viewport. Các screenshot scan tuần tự được dùng để map lại. Các state Glucare thảo mộc/vitamin và Dovital usage/final CTA đã chụp lại riêng; chỉ ảnh được liệt kê trong [INDEX](visual-recapture/INDEX.md) là evidence supplemental được duyệt. Đây là **vấn đề chất lượng supplemental capture**, không phải lỗi website đã accepted. Mọi điều chưa có ảnh/HTML hợp lệ vẫn giữ `UNKNOWN`.
