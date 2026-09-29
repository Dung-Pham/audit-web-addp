# MA TRẬN CHECKLIST × 8 TRANG — V2

**Nguồn:** `Checklist.txt`, `checklist.normalized.json`, `review/checklist-checks.json` và evidence của `20260928T211548Z-replacement-full-audit`. Ma trận theo trang là **ASSESSMENT dẫn xuất**, không thay canonical checklist. Cột `VAD` là landing live `https://addp.vn/vien-an-duong`: URL được `inventory/discovery.json` phát hiện nhưng `fetched=false`, không có canonical Evidence ID; trạng thái VAD chỉ từ `SUPPLEMENTAL_VISUAL_RECAPTURE` sau 29/09/2026 và cần đối chiếu backend/SEO riêng. PDP Viên trong canonical là URL khác.

**Ký hiệu:** P=PASS cục bộ; T=PARTIAL; F=FAIL cục bộ có bằng chứng với tiêu chí cụ thể; U=UNKNOWN/NEEDS VERIFICATION; B=BLOCKED; N=NOT_APPLICABLE. PASS của một cell không nâng requirement canonical thành PASS. Cột `Canonical` giữ đúng status gốc.

| Requirement / mục tiêu | Canonical | HOME | GLU | DOV | VAD live | PDP Glu | CAT sữa | BLOG cat | ARTICLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| REQ-001 nhận diện/màu | UNKNOWN | T | T | T | U | T | T | T | T |
| REQ-002 typography/dễ đọc | UNKNOWN | T | T | T | U | T | T | T | T |
| REQ-003 hình sản phẩm/con người | UNKNOWN | T | T | T | U | T | T | T | T |
| REQ-004 above-the-fold | UNKNOWN | T | T | T | U | T | N | N | N |
| REQ-005 CTA hiển thị/dễ chạm | UNKNOWN | T | T | T | U | T | T | N | N |
| REQ-006 homepage sứ mệnh/3 sản phẩm/trust | UNKNOWN | T | N | N | N | N | N | N | N |
| REQ-007 PDP 4 khu vực | PARTIAL | N | N | N | N | T | N | N | N |
| REQ-008 landing 3 tầng nhu cầu | UNKNOWN | N | T | T | U | N | N | N | N |
| REQ-009 bài y khoa/E-E-A-T | PARTIAL | N | N | N | N | N | N | T | T |
| REQ-010 JSON-LD Organization/Product/FAQ | PARTIAL | T | T | T | U | T | T | T | T |
| REQ-011 AI bot policy | PARTIAL | U | U | U | U | U | U | U | U |
| REQ-012 SSR/source HTML | UNKNOWN | U | U | U | U | U | U | U | U |
| REQ-013 mobile/tốc độ 2,5 s/PSI 85+ | PARTIAL | F | F | F | U | F | F | F | F |
| REQ-014 tracking/conversion | PARTIAL | U | U | U | U | U | U | U | U |
| REQ-015 HTTPS/sitemap/SEO | PARTIAL | T | T | T | U | T | T | T | T |
| REQ-016 checkout/guest | BLOCKED | N | B | B | B | B | N | N | N |
| REQ-017 payment/KiotViet | BLOCKED | N | B | B | B | B | N | N | N |

## Cách đọc các dòng dễ hiểu nhầm

- `REQ-013=F` ở bảy URL có LAB nghĩa là **LCP một lần đo** vượt mục tiêu 2,5 s, không chứng minh field CWV fail hoặc PSI dưới 85. VAD live không có LAB trong run và prompt cấm chạy Lighthouse, nên `U`.
- `REQ-001–005` không thể PASS chỉ vì ảnh trông ổn. Chưa đo font, contrast, touch targets, quyền ảnh và tính nhất quán ở mọi viewport; `T/U` là thận trọng.
- `REQ-010` nói JSON-LD trong checklist; `jsonld` artifact có 0 valid ở các page mẫu trừ article (`BlogPosting` valid=1). PDP có microdata theo specialist review; không được ghi “không schema”. `T` nghĩa là một phần cơ sở hoặc yêu cầu khác chưa đóng, không chứng minh full markup.
- `REQ-011` là chính sách sitewide: robots 200 (`EVD-C51AC48D3DB98538`) không cho phép chấm từng trang `PASS`; policy/AI exposure và sự xuất hiện trong AI answers còn chưa xác minh.
- `REQ-012` cần raw-vs-rendered audit trên các fact/giá/FAQ. Run có cả raw/rendered files nhưng chưa đủ để kết luận toàn bộ site SSR; VAD không có raw canonical.
- `REQ-016/017` BLOCKED chỉ với tuyến giao dịch. Product/listing/article không có test đặt đơn vì production_read_only; payment logo không là payment receipt.

## Bằng chứng then chốt theo page type

| Trang | Canonical/visual evidence chính | Khoảng chưa đóng |
| --- | --- | --- |
| HOME | `EVD-8C749E8D6F00DF83`, `EVD-4256DF417284230A`, SEO `EVD-A81704E1324D31CC`, LAB `EVD-85956D06B433ABCA`/`EVD-3D15DCDB359887BF` | H1, trust docs, mobile product access, event receipt |
| GLU | `EVD-C86C629E938B1E14`, `EVD-E178F1827F773846`, `EVD-EA78205F3017C505`, SEO `EVD-D1249648026B4D96` | Giá/offer 0–9.000, claim approvals, checkout |
| DOV | `EVD-6695052421D33FF3`, `EVD-9175C04DA21427CA`, SEO `EVD-239333BC638CDEBA` | Variant/combo truth, claims, flow |
| VAD live | `SVR-VAD-*`; discovery candidate `fetched=false`, **không có canonical Evidence ID cho URL này** | SEO/LAB/source/medical claims riêng, form/CTA behavior |
| PDP Glu | `EVD-B59288AF81EE6CF7`, `EVD-846147B5C20C3C37`, rendered HTML `EVD-C07AE1B67F5FAB1D` | Gói thử vs 400g, tabs/reviews/FAQ, giao dịch |
| CAT sữa | `EVD-240556FCB8CFEF2B`, `EVD-C714797EAE48D11F`, SEO `EVD-A358414AEA018603` | Placeholder, 0/9.000, filter behavior |
| BLOG cat | `EVD-65674D7855E4F693`, `EVD-70BB53F1B279EAEE`, SEO `EVD-193B911618A48573` | Topic cluster, author/reviewer card, date overlap |
| ARTICLE | `EVD-DDFFD3BFCCF0CDB6`, `EVD-2773831F8B2D63A5`, SEO `EVD-01E8B99B0727F6CF`, `BlogPosting` `EVD-2326A9C7428D947E` | Medical review `HC-002`, sources, author credentials |

## Nghiệm thu để nâng trạng thái sau triển khai

Một đội triển khai mới có thể dùng ma trận như test plan: mỗi cell `T/F` cần URL, viewport, expected state và before–after screenshot/HTML; mỗi `U/B` cần owner, quyền, môi trường và điều kiện test cụ thể. Quyết định claim/giá/pháp nhân thuộc Business/Medical/Legal, không thuộc người làm screenshot. Không chỉnh status canonical của run đã hoàn tất để biểu diễn kết quả release mới.
