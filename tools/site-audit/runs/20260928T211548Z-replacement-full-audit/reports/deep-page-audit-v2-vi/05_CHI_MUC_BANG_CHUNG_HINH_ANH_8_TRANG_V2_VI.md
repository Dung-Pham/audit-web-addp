# CHỈ MỤC BẰNG CHỨNG HÌNH ẢNH — 8 TRANG ADDP V2

Run nguồn: `20260928T211548Z-replacement-full-audit`. `EVD-*` là evidence canonical trong `evidence/index.json`; `SVR-*` là ảnh quan sát live sau run, **không** được dùng để thay EVD hay nâng status coverage. Mọi ảnh SVR đã chọn và metadata nằm tại [visual-recapture/INDEX.md](visual-recapture/INDEX.md). Section mapping chi tiết nằm trong [inventory](06_SECTION_INVENTORY_8_TRANG_V2_VI.md).

| Trang | Canonical visual/evidence | Ảnh supplemental được dùng | Phạm vi kết luận |
| --- | --- | --- | --- |
| Homepage `/` | `EVD-8C749E8D6F00DF83`, `EVD-A81704E1324D31CC`, `EVD-702877ACD4E72E55` | HOME-S01–S04, HOME mobile | Hero, gateway, form, footer; submit chưa kiểm |
| Glucare `/sua-hat-glucare-plus` | `EVD-C86C629E938B1E14`, `EVD-D1249648026B4D96`, `EVD-EA78205F3017C505` | GLU-SCAN + GLU-S05B/S05C/S08/S11 | Tab thành phần, offer, form; claim/giá cần duyệt |
| Dovital `/sui-dovital` | `EVD-6695052421D33FF3`, `EVD-9175C04DA21427CA` | DOV-SCAN + DOV-S11/S12/S13 | Hai dòng, card giá, usage; không test mua |
| Viên An Đường landing `/vien-an-duong` | **Không có**; discovered `fetched=false` | VAD-SCAN + VAD-S09/S10 | Chỉ quan sát visual; DOM/schema/performance `UNKNOWN` |
| PDP Glucare gói thử | `EVD-B59288AF81EE6CF7`, `EVD-C07AE1B67F5FAB1D`, `EVD-90958BB0A35F4C7E` | PDP-S01–S04 | PDP khác landing Glucare; không xác nhận order |
| Category Sữa | `EVD-0EAEC5DEAE31B4D3`, `EVD-240556FCB8CFEF2B` | CAT-S01–S03 | Grid/filter, chưa test interaction |
| Blog Sức khỏe Tiểu đường | `EVD-65674D7855E4F693`, `EVD-1D1316F928585A48`, `EVD-70BB53F1B279EAEE` | BLOG-S01–S03 | Listing/cards, author credentials chưa biết |
| Bài chẩn đoán | `EVD-DDFFD3BFCCF0CDB6`, `EVD-2326A9C7428D947E`, `EVD-01E8B99B0727F6CF`, `EVD-2773831F8B2D63A5` | ART-S01–S05 | Nội dung bài, không xác nhận tiêu chí y khoa |

## Quy tắc đọc hình

Một ảnh chỉ xác nhận thứ nhìn thấy trong viewport và thời điểm chụp; không xác nhận hành vi CTA, dữ liệu backend, tính chính xác y khoa hay tình trạng index/rich result. Ảnh chụp sau run có thể phản ánh site đã thay đổi. Nếu ảnh live và canonical khác nhau, giữ cả hai cùng timestamp và ghi `LIVE VISUAL DIFFERENCE`, không sửa evidence cũ. Đặc biệt, PDP `/vien-an-duong-addp.html` có canonical EVD nhưng **không phải** landing `/vien-an-duong`; không gán EVD của PDP cho landing.

## Điểm cần owner xác thực trước triển khai

1. Business/Commerce: SKU, đơn vị, combo, giá `0,00 đ`, offer gói thử `9.000 đ`, điều kiện ship và thời hạn.
2. Product/Medical/Legal: mọi claim liên quan đường huyết, gan, thành phần, liều và chống chỉ định, dựa nhãn/công bố có phiên bản.
3. Business/Legal: pháp nhân/contact/chính sách dùng chung và sự đồng nhất landing–PDP.
4. Dev/QA: form, cart, mobile focus, DOM/structured data của landing Viên trên staging được phép; production audit này không submit hay mua.
