# Bộ yêu cầu Marketing/Doanh nghiệp cung cấp cho landing Glucare Plus V2

**Mục đích:** đầu vào có thể nghiệm thu cho [kế hoạch triển khai](02_KE_HOACH_CHINH_SUA_LANDING_GLUCARE_PLUS_V2_VI.md). Mỗi tài liệu phải nêu owner, ngày hiệu lực, phiên bản, SKU áp dụng và quyền công bố. “Chưa thấy trên landing” không có nghĩa doanh nghiệp không sở hữu. Không đưa dữ liệu y tế khách hàng cá nhân vào bộ bàn giao.

## 1. Product master và positioning

| ID | Input phải bàn giao | Target section | Evidence hiện tại/khoảng thiếu | Owner; blocking |
|---|---|---|---|---|
| M-01 | Tên thương mại chuẩn, tên trên nhãn, brand, SKU của lon 400g và gói thử; variant/GTIN nếu có | T01/T02/T11, schema | Hero ghi 400g, card gói; mapping chưa rõ | Product; **P0** |
| M-02 | Quy cách, khối lượng tịnh, số khẩu phần, số gói/lon, serving size, đơn vị đo | T02/T05/T07/T11 | Chỉ thấy 400g và “4 muỗng” | Product; **P0** |
| M-03 | Manufacturer, pháp nhân chịu trách nhiệm, nơi sản xuất, xuất xứ, địa chỉ, support | T08/T13, Product/Organization | Footer có contact, chưa nối tới manufacturer sản phẩm | QA/Legal; P1 |
| M-04 | Giá từng SKU, giá trước/sau khuyến mãi, tiền tệ, tồn kho, thời gian áp dụng, nguồn giá và luồng PDP/cart | T02/T11/T12, Offer | `0,00đ` cạnh `9.000đ` (`FND-CONVERSION-CONV-001`) | Commerce/Finance; **P0** |
| M-05 | Định vị: target user, vấn đề chính, value proposition, khác biệt có thể chứng minh, short/long description | T02–T06 | Copy hiện nặng claim | Marketing/Product/Medical; **P0** |
| M-06 | Bảng đối tượng phù hợp/không phù hợp; tuổi, bệnh lý, dị ứng hạt, thuốc đồng dùng, thai kỳ nếu có | T06/T10 | S06 nói bệnh nhân/đối tượng phục hồi, chưa có exclusion | Product/Medical; **P0** |

## 2. Ingredient/nutrition data và claim matrix

Mỗi thành phần/nhóm: tên chuẩn Việt/Latin nếu trên nhãn, dạng nguyên liệu, hàm lượng mỗi 100g/mỗi khẩu phần, đơn vị, thứ tự nhãn, phạm vi sai số/cách kiểm, vai trò được phép truyền thông, tài liệu nguồn, SKU áp dụng, owner và trạng thái duyệt. Cần giải thích chính xác “11 loại hạt” và “7 loại hạt” (cách đếm, nguồn), không tiếp tục dùng song song khi chưa thống nhất. Với Quả Nhàu/Đông Trùng, cung cấp tên chiết xuất và hàm lượng, chứng cứ đúng dạng và đúng mức claim; nếu không có, chỉ mô tả fact trên nhãn. Vitamin/vi chất: bảng lượng, % RNI/NRV nếu hợp lệ, khẩu phần tham chiếu, cách làm tròn và phương pháp thử. Hình thành phần không được ám chỉ tỷ lệ khác công thức.

| Claim/câu hiện có | Section | Type | Evidence cần | Medical/Legal approval | Trạng thái |
|---|---|---|---|---|---|
| “Không lactose” | T03/T04 | nutrition fact | Nhãn/kiểm nghiệm | Product/Legal | Chưa xác minh |
| “Đường Isomalt chỉ số GI thấp” | T02/T04 | nutrition/health support | Thành phần, lượng, định nghĩa GI, nguồn | Medical/Legal | `NEEDS_MEDICAL_REVIEW` |
| “Dùng được cho người tiểu đường”, “ổn định đường huyết an toàn” | T02/T06/T10 | medical-sensitive | Công bố/nhãn, nghiên cứu phù hợp, giới hạn đối tượng | Medical/Legal | `NEEDS_MEDICAL_REVIEW` |
| “Không gây đầy bụng khó tiêu”, “dễ hấp thu” | T04/T06 | health support | Nghiên cứu phù hợp thành phẩm | Medical/Legal | `NEEDS_MEDICAL_REVIEW` |
| “Proxeronine/Scopoletin bền vững mạch” | T05B | medical-sensitive | Nguồn trực tiếp, lượng, cơ chế đã kiểm | Medical/Legal | `NEEDS_MEDICAL_REVIEW` |
| “Cordycepin/Adenosine tăng cường tế bào miễn dịch” | T05B | medical-sensitive | Nguồn trực tiếp, lượng | Medical/Legal | `NEEDS_MEDICAL_REVIEW` |
| “20+ vitamin/vi chất” | T05C | nutrition/marketing | Danh sách, lượng, cách đếm | Product/Legal | Chưa xác minh |
| “Công thức/chuẩn y khoa”, “bảo chứng chất lượng” | T02/T05/T10 | marketing/authority | Định nghĩa, chứng từ, người chịu trách nhiệm | Medical/Legal | Chưa xác minh |
| “Biến tính enzym quý” khi pha nước sôi | T07 | health/technical | Nhãn, nghiên cứu độ ổn định | Product/Medical | `NEEDS_MEDICAL_REVIEW` |
| “Trợ giá”, “số lượng giới hạn”, “9.000đ/gói” | T11/T12 | marketing/Offer | Quyết định chương trình, T&C, tồn kho | Finance/Legal | Chưa xác minh |

**Quy tắc duyệt:** mỗi claim có ID, exact wording được phép, location, nguồn gốc, mức chắc chắn, caveat, reviewer, ngày/phiên bản, quyết định `APPROVED / REWRITE / REMOVE`. Testimonial và bài nghiên cứu nguyên liệu không tự chứng minh hiệu quả thành phẩm. Copywriter không tự trả lời câu hỏi y khoa.

## 3. Chứng từ và nguồn

| Input | Trường bắt buộc | Section | Blocking |
|---|---|---|---|
| Công bố/đăng ký sản phẩm | Số, tên SKU, cơ quan, ngày, bản scan, hiệu lực, phần được công bố | T08/T03/T05 | P0 cho claim phụ thuộc |
| Kết quả kiểm nghiệm dinh dưỡng/an toàn | Lab, method, batch, date, chỉ tiêu, giới hạn, SKU | T05/T08 | P1 |
| Chứng nhận nhà máy/quality | Issuer, scope, site, product applicability, expiry, scan | T08 | P1 |
| Nhãn/hướng dẫn sử dụng hiện hành | Ảnh rõ mọi mặt, bản text phê duyệt, revision | T02/T05/T06/T07/T11 | **P0** |
| Tài liệu khoa học/nguồn y khoa | Tác giả, năm, URL/DOI, population, product/ingredient, kết luận đúng mức, quyền trích | T04/T05/T06/T10 | P0 khi giữ claim |
| Reviewer chuyên môn | Họ tên, học vị/chứng chỉ, vai trò, phạm vi đã duyệt, ngày duyệt, quyền hiển thị | T08/T09/T10 | P1 nếu đưa “y khoa/chuyên gia” |

## 4. Offer 9.000đ, commerce và hậu mãi

Marketing + Commerce cung cấp **tên chương trình, đúng thứ khách nhận (một gói? trọng lượng?), giá thường, giá thử, tiết kiệm, phí ship, vùng giao, COD/phương thức thanh toán, đối tượng đủ điều kiện, số lượng tối đa/người, giới hạn tồn kho, thời gian bắt đầu/kết thúc, quy tắc đổi/hoàn, T&C URL, route sau CTA, người gọi xác nhận và thời gian phản hồi**. Finance xác nhận đồng bộ landing, card, PDP gói, PDP lon, category và checkout. Không dùng “chỉ hôm nay/số lượng giới hạn” nếu không có điều kiện thật. S11 hiện có form Họ tên/SĐT/Tình trạng/Lời nhắn: Legal/Privacy phải quyết định tính cần thiết của trường sức khỏe, văn bản thông báo và nơi lưu/retention; Analytics không nhận các trường này.

## 5. Photo/video asset plan và shoot list

Mỗi asset: file gốc chất lượng cao, tên SKU, crop-safe desktop/mobile, alt factual, quyền sử dụng (photographer/model/location), ngày chụp, hạn license, phiên bản bao bì, người duyệt. Không sửa nhãn/bao bì trong ảnh để tạo thông tin không có thật.

| Asset ID | Section | Subject/composition | Master/orientation | Desktop/mobile | Owner/rights |
|---|---|---|---|---|---|
| GLU-HERO-01 | T02 | Lon 400g + người dùng mục tiêu/người thân; negative space H1/CTA; không tạo cảnh như lời khuyên điều trị | RAW/TIFF landscape + portrait | 1440 hero / 390 crop-safe | Marketing; model release |
| GLU-PACK-01 | T02/T11 | Packshot front, 3/4, side, back, top; nhãn đọc được; nền trong suốt riêng | RAW + PNG transparent | 2x density, responsive | Product/Marketing; photographer rights |
| GLU-LABEL-01 | T05/T07/T08 | Cận bảng dinh dưỡng, thành phần, HDSD, lot/expiry ở mẫu hợp lệ | RAW portrait | Zoom/tap mobile | Product; rights |
| GLU-ING-01 | T05A | Nhóm hạt thật trong công thức, ghi rõ minh họa nếu không thể hiện tỷ lệ | RAW still life | Desktop/mobile variants | Marketing/Product; rights |
| GLU-HERB-01 | T05B | Quả Nhàu/Đông Trùng đúng loài/dạng dùng, tránh visual tác dụng y khoa | RAW still life | Crop-safe | Product; source license |
| GLU-MIX-01..04 | T07 | 4 bước: muỗng gạt, 200ml/50–55°C, khuấy, ly dùng; đúng spec | RAW sequence/video | 1:1/4:5 + landscape | Product/Marketing; model release |
| GLU-TRIAL-01 | T11 | Chính xác gói khách nhận, front/back, không lẫn lon | RAW packshot | Desktop/mobile | Commerce; rights |
| GLU-DOC-01 | T08 | Bản scan chứng từ legible, che dữ liệu không công bố | PDF/PNG | Thumbnail + mở bản đầy đủ | QA/Legal; permission |
| GLU-EXPERT-01 | T09 | Chuyên gia xác thực, ảnh và bio | RAW portrait/video | Poster + caption | Medical; consent |
| GLU-TEST-01 | T09 | Khách hàng thật mô tả trải nghiệm cá nhân, không hứa chữa bệnh | RAW video/photo | Subtitles/mobile poster | Marketing; signed consent |

## 6. Testimonial, expert và FAQ input

Testimonial: tên/định danh được phép, tuổi/khu vực chỉ khi đồng ý, sản phẩm/SKU, thời gian sử dụng, quote nguyên văn, file gốc, ngày, kênh nguồn, mẫu đồng ý công bố, quyền chỉnh sửa/cắt ghép, medical claim check. Không tạo review giả, không suy ra AggregateRating từ vài câu quote. Expert: họ tên, chức danh, credential xác thực, nơi công tác, lĩnh vực, bio/ảnh, phần copy đã review, bằng chứng phép dùng hình/tên, ngày hết hạn hợp tác.

FAQ đầu vào từ hotline/inbox/sales/CS dưới dạng **câu hỏi tổng hợp đã loại PII** và tần suất: ai dùng/không dùng, tiểu đường, dùng cùng thuốc, liều và giờ uống, dị ứng, bao lâu hết lon, bảo quản sau mở/pha, giá trial, ship/COD, đổi trả. Product/Medical cung cấp câu trả lời approved kèm nguồn/ngoại lệ; Legal duyệt wording liên quan bệnh; CS xác nhận chính sách giao hàng. Chỉ FAQ hiển thị mới xét FAQPage schema.

## 7. Missing input matrix và bàn giao

| Input | Evidence hiện tại | Missing | Section | Blocking | Owner |
|---|---|---|---|---|---|
| Giá lon và bản chất gói thử | `0,00đ` vs `9.000đ` | Price master + promotion T&C | T02/T11/T12 | **Yes** | Commerce/Finance |
| Số loại hạt | 11 ở T05, 7 ở T11 | Công thức/cách đếm approved | T05/T11 | **Yes** | Product |
| Claim đường huyết/bệnh nhân | Hero/S06 | Claim dossier + reviewer | T02/T06 | **Yes** | Medical/Legal |
| Thành phần và dinh dưỡng | Tab tên thành phần | Lượng/khẩu phần/nhãn | T05 | **Yes** | Product |
| Đối tượng ngoại lệ | S06 chỉ nhóm dùng | Exclusion, dị ứng, thuốc | T06/T10 | **Yes** | Medical |
| Hướng dẫn pha | S08/09 có con số | Nhãn xác nhận/bảo quản | T07 | **Yes** | Product |
| Chứng từ và manufacturer | Không thấy trên landing | Scans + metadata | T08 | **Yes** nếu dùng badge/claim | QA/Legal |
| Testimonial/expert | Không thấy | Source/consent/credential | T09 | No; bỏ section nếu thiếu | Marketing/Medical |
| FAQ | Không thấy | Approved answers | T10 | Yes trước publish FAQ | CS/Product/Medical |
| Ảnh mới | Packshot/ingredient visual đã có | Shot list đúng bao bì, mobile crop, rights | T02/T05/T07/T11 | P1 | Marketing |
| Privacy/form | Form có health selector | Purpose/legal basis/retention | T12 | **Yes** | Legal/Privacy |

**Format bàn giao:** một master sheet có ID, SKU, section, nội dung exact, source file, owner, status, ngày duyệt, expiry; thư mục assets đặt theo Asset ID; claim register là nguồn quyết định cuối cùng cho copy. Designer/Developer chỉ dùng mục `APPROVED`. Khi thiếu input blocking, giữ hiện trạng chưa xuất bản các claim/offer mới; không tự điền bằng suy luận.
