# YÊU CẦU MARKETING/DOANH NGHIỆP CUNG CẤP CHO LANDING DOVITAL V2

**Mục tiêu:** cung cấp source-of-truth để Product, Medical, Legal, Content, Design và Development triển khai [kế hoạch](02_KE_HOACH_CHINH_SUA_LANDING_DOVITAL_V2_VI.md). Không điền dữ liệu thiếu bằng suy đoán.  
**Trạng thái:** `DOVITAL_LANDING_DEEP_AUDIT_V2_READY_FOR_REVIEW`

## 1. Quy tắc bàn giao

Mỗi input phải có owner, source file/link, applicable SKU, version, effective date, expiry nếu có, approval status và publish rights. Dữ liệu claim/usage không được publish nếu thiếu Medical/Legal approval. Giá/stock/campaign phải đến từ commerce source, không từ artwork. Ảnh/testimonial/expert phải có consent/quyền sử dụng.

Trạng thái input: `AVAILABLE_VERIFIED`, `AVAILABLE_NEEDS_REVIEW`, `MISSING`, `BLOCKING`, `NOT_APPLICABLE`.

## 2. Dovital product-family master — BLOCKING

| Field bắt buộc | Ví dụ kiểu dữ liệu, không phải giá trị | Map section/component | Owner |
|---|---|---|---|
| Official family name | text | T02 hero, SEO entity | Product/Brand |
| Family definition | 40–70 words approved | T02, GEO/AEO | Product/Medical |
| Official number of lines/variants/flavors | integer + definitions | T02/T03/T04 | Product |
| Relation `line → flavor → SKU` | IDs | selector/schema | Product/PIM |
| SKU code/barcode/GTIN/MPN | string | cards/PDP/schema | Product/Commerce |
| Official product name | text | cards/comparison/PDP | Product/Legal |
| Format/package/count | tube/20 tablets etc. | T04/T05/T08 | Product |
| Lifecycle/status | active/inactive/planned | all | Product |
| Primary approved use case | controlled text | selector/card | Medical/Product |
| Canonical PDP URL | URL | card/internal link/ItemList | SEO/Commerce |

Business phải giải thích rõ: “3 vị” là flavor, variant hay SKU; “bộ đôi” là product concept hay combo offer; pack tím “Thảo Mộc Cao Cấp/Phục Hồi” map vào SKU nào; vì sao live page có hai combo tên gần nhau.

## 3. Variant comparison dataset — BLOCKING

| Variant/SKU | Target audience approved | Key difference | Composition source | Flavor | Format/quy cách | Price source | Approved claim | PDP URL |
|---|---|---|---|---|---|---|---|---|
| MultiVitamin — vị cam | MISSING | MISSING | MISSING | Cam | MISSING | MISSING | MISSING | needs confirm |
| MultiVitamin — vị chanh leo/tím | MISSING | MISSING | MISSING | needs confirm | MISSING | MISSING | MISSING | needs confirm |
| Mát Gan — râu ngô/xanh | MISSING | MISSING | MISSING | needs confirm | MISSING | MISSING | MISSING | needs confirm |
| Combo/bộ đôi/3 vị record A | MISSING | MISSING | component SKU IDs | mixed | MISSING | live shows `0 ₫`; BLOCKING | N/A/confirm | existing URL needs audit |
| Combo/3 vị record B | MISSING | MISSING | component SKU IDs | mixed | MISSING | live shows `130.000 ₫`; verify | N/A/confirm | existing URL needs audit |

Không publish comparison cho tới khi mỗi row có official SKU identity và applicable evidence.

## 4. Price, offer, stock và campaign — BLOCKING

Cho mỗi SKU/offer:

- regular price, sale price, currency, tax display rule;
- stock/availability, backorder behavior;
- offer ID, component SKU IDs, quantities;
- discount condition, voucher, shipping, minimum order;
- campaign start/end timezone Asia/Saigon;
- inventory/source system and refresh frequency;
- landing/PDP/cart destination and fallback;
- owner authorized to approve price.

Map: T03 selector, T04 comparison, T05 cards, T12 final CTA, Product/Offer schema. First decision required: `0 ₫` is legitimate free offer, missing price fallback, inactive record or data error. Audit không tự kết luận.

## 5. Composition/specification data — BLOCKING

Cho từng SKU:

| Field | Required format | Map |
|---|---|---|
| Ingredient/vitamin/mineral/botanical | official label name | T06/T04 |
| Amount per serving | numeric | T06/schema-visible facts |
| Unit | mg/µg/IU… controlled | T06 |
| Serving size | tablet(s), water volume | T08 |
| Daily reference value | value + legal basis, if applicable | T06 |
| Extract ratio/standardization | exact label, if applicable | T06 |
| Full excipients/allergens | approved text | PDP/T08 warning |
| Applicable SKU/label version | ID + date | all |
| Source | label/công bố/test report page | evidence link |

Current visible mentions (not verified): vitamin C/B1/B2/B5/B6/B9, hồng sâm, linh chi, đông trùng hạ thảo, rau má `200 mg`, râu ngô `200 mg`, actiso, silymarin. Product must confirm spelling (`Sylimarin/Silymarin`), amount basis and applicable SKU.

## 6. Health claim matrix — BLOCKING

| Claim hiện tại/candidate | Variant | Section | Type | Evidence required | Medical | Legal | Status |
|---|---|---|---|---|---|---|---|
| Bổ sung vitamin thiết yếu | family/Multi | Hero/detail | product/nutrition | label/công bố | required | required | MISSING |
| Tăng sức đề kháng | Multi | Hero/S02/S06 | health-support | approved dossier | required | required | MISSING |
| Hỗ trợ giải độc/mát gan | Mát Gan | Hero/S02/S07 | health-sensitive | approved claim evidence | required | required | MISSING |
| Chống tác nhân gây bệnh | Multi | ingredient | medical-sensitive | strong legal-approved basis | required | required | BLOCKING |
| Tái tạo tế bào gan/bảo vệ men gan | Mát Gan | ingredient | medical-sensitive | product-level evidence | required | required | BLOCKING |
| Giảm vàng da/mẩn ngứa/mề đay | Mát Gan | benefit | symptom/treatment-adjacent | regulatory/medical evidence | required | required | BLOCKING |
| Dùng sau rượu bia để bảo vệ cơ thể | Mát Gan | usage | medical-sensitive | approved label/evidence | required | required | BLOCKING |
| Phù hợp trẻ từ 2 tuổi | Multi | audience | safety/audience | label + pediatric approval basis | required | required | BLOCKING |

Mỗi approved record cần exact wording, prohibited wording, source page, evidence quality, approver names/roles, approval date, review/expiry date và applicable channel.

## 7. Usage, dosage, warnings, contraindications, storage — BLOCKING

Cho từng SKU:

- number of tablets per use/day;
- water volume and allowed temperature;
- frequency and maximum daily use;
- approved timing (morning/evening/with food) or state none;
- minimum age and audience;
- pregnancy/breastfeeding/chronic condition/medication cautions as legally approved;
- contraindications/allergens;
- overdose/adverse event/escalation wording if required;
- storage, shelf life after opening;
- mandatory disclaimer;
- source label version and Medical/Legal signatures.

Resolve current conflict `150–200 ml` versus `200 ml`; confirm whether MultiVitamin and Mát Gan share instructions; validate “buổi sáng/buổi tối/sau rượu bia”. Map T08, card quick facts, FAQ and PDP.

## 8. Legal/product documents — BLOCKING for trust section

| Input | Metadata required | Applicable component |
|---|---|---|
| Product declaration/registration | number, issuer, issue/expiry, SKU, scan | T09 document card |
| Testing report | lab, scope, sample/SKU, date, report number | T09/claim source |
| Manufacturer | legal name, address, role, origin | T09/PDP |
| Quality certificates | issuer, scope, validity, facility/SKU | T09 |
| Label master | front/back/side, version/effective date | all facts |
| Trademark/brand authorization | owner, territory, validity | brand trust |
| Distribution authorization | entity, scope/date | trust/footer if relevant |

Legal must specify what may be public, what needs redaction and what must not be shown. A certificate applying to a facility cannot be presented as product efficacy proof.

## 9. Product image requirements và asset plan

Mỗi SKU cần:

- front packshot; 3/4 packshot; back label; side label;
- tablet/tube/product presentation where applicable;
- transparent PNG master and layered/high-res source;
- color profile, dimensions, rights/license, owner;
- desktop/mobile derivatives or crop-safe zones;
- alt-text factual description approved by Product.

| Asset ID | Section | SKU | Subject | Master | Desktop target | Mobile target | Rights/owner |
|---|---|---|---|---|---|---|---|
| DOV-HERO-01 | T02 | family | official line-up | layered/PNG/TIFF | 2400×1600 crop-safe | 1170×1500 portrait-safe | MISSING |
| DOV-VAR-01 | T03/T04 | all | line-up + consistent scale | transparent masters | comparison | card | MISSING |
| DOV-SKU-XX-FRONT | T05 | each | front packshot | transparent PNG | 1200 px+ | 800 px+ | MISSING |
| DOV-SKU-XX-BACK | T06/T09 | each | readable label | hi-res | zoomable | zoomable | MISSING |
| DOV-USE-01 | T08 | each/applicable | approved preparation steps | photo/video master | landscape | portrait | MISSING |
| DOV-DOC-XX | T09 | each | document preview | PDF + thumbnail | responsive | responsive | MISSING |

### Shoot list

**DOV-HERO-01:** official family line-up, product names legible, negative space for HTML copy, no baked claims, desktop landscape and independent mobile crop.  
**DOV-VAR-01:** all variants at consistent scale/lighting to make family relation obvious.  
**DOV-SKU-XX:** front/3-quarter/back/side plus tablet and glass; label must match approved version.  
**DOV-USE-01:** three-step preparation matching approved water volume/temperature; no visual suggesting unapproved medical effect.  
**DOV-LIFE-01:** approved audience/scenario/emotional tone; no white-coat authority or before/after efficacy implication without substantiation.

Delivery formats: archival master plus optimized AVIF/WebP/JPEG, naming/version convention, focal point, intrinsic dimensions, `srcset` breakpoints and compression QA. Do not deliver only text baked into raster.

## 10. Lifestyle/video requirements

Brief must specify user group/age range, environment, use moment, visible SKU, approved behavior, emotional tone and excluded implications. Video requires transcript/captions, poster, duration, usage rights, consent and no autoplay audio. Map T02/T07/T08/T10. Lifestyle imagery cannot imply treatment, instant detox, reversal of symptoms or professional endorsement without approved basis.

## 11. Testimonial/review input

For each item: customer display name/pseudonym policy; verified purchase/source; exact SKU/variant; use context; unedited original quote/video/photo; date; consent/release; compensation disclosure; moderation record; permitted channels/term; claims review.

Map T10 and optional Review schema. Testimonial is social proof, never medical evidence. No aggregate rating until Business proves sample/source/method and schema eligibility.

## 12. Expert input

If used: full name, verified credentials/license where relevant, specialization, organization, profile URL, short bio, approved photo, conflict disclosure, consent, reviewed sections, review date/version, exact signed wording. Map T07/T09/T10/FAQ. Do not create honorary title or imply clinical endorsement beyond actual review.

## 13. FAQ source pack

Sales/CS/social/hotline/distributor must supply anonymized frequency-ranked questions, not raw PII. Required groups:

- Dovital là gì, có những loại nào, khác nhau thế nào?
- Chọn variant nào theo approved use case?
- Ai có thể/không nên dùng?
- Dùng bao nhiêu viên, bao nhiêu nước, lúc nào?
- Có dùng cùng thuốc/supplement khác không? (Medical answer or referral)
- Giá, combo, stock, shipping, returns?
- Bảo quản/shelf life?
- Documents/manufacturer/origin?

Each answer needs Product owner, Medical/Legal approval where relevant, source, applicable SKU and review date. Map T11; FAQ schema only after page content exists.

## 14. Offer/campaign pack

Required: campaign ID/name; included SKU and quantities; regular/sale prices; discount logic; validity with timezone; stock allocation; channel; shipping; voucher; exclusions; landing copy; destination; legal terms; fallback after expiry; approver. Map T05/T12/schema/analytics. Campaign expiry must automatically remove/update offer and schema.

## 15. Brand/product assets

- ADDP and Dovital logo masters, lockups, clear space, minimum size;
- approved relation wording between `ADDP`, `ADDP Pharmacy`, legal company and Dovital;
- color/type/icon system and accessibility contrast rules;
- official product names/capitalization/tone;
- trademark symbols and usage rules;
- prohibited visual/wording examples;
- contact/legal identity source.

This resolves observed `ADDP Pharmacy` campaign copy versus footer legal identity and hotline `19008989` versus `0904 637 007`; audit does not declare either incorrect.

## 16. Missing input matrix

| Input | Current evidence | Missing | Section | Blocking | Owner |
|---|---|---|---|---|---|
| Family taxonomy | 3 packs/2 lines visible | official model/IDs | T02–T05 | YES | Product |
| SKU/variant master | titles/URLs partial | codes/barcodes/status | T03–T05 | YES | Product/PIM |
| Price truth | 0/130k/65k observed | authoritative price/conditions | T05/T12 | YES | Commerce |
| Composition | partial ingredients/amounts | full per-serving table | T06 | YES | Product |
| Claims | marketing copy visible | evidence/approved wording | T02/T06/T07 | YES | Medical/Legal |
| Usage | steps visible | per-SKU exact instructions/warnings | T08 | YES | Medical |
| Documents | not visible | declarations/tests/certs | T09 | YES for trust | Legal |
| Product images | current rendered assets | masters/rights/mobile crops | all | YES for redesign | Marketing/Design |
| Testimonials | none evidenced | verified source/consent | T10 | NO; omit if absent | Marketing |
| Expert | none evidenced | credentials/review/consent | T10 | NO; omit if absent | Medical/Marketing |
| FAQ | absent | questions/approved answers | T11 | YES for target | CS/Medical |
| Contact identity | two numbers observed | authoritative registry | T01/T12/T13 | YES | Business |
| Manufacturer/origin | not consolidated | verified facts | T09/PDP | YES | Product/Legal |
| Analytics baseline | no receipt verified | event/dataLayer/consent spec | all | YES for measurement | Analytics |

## 17. Intake checklist và acceptance gate

For every file/dataset:

- named owner and approver;
- applicable family/line/SKU/offer IDs;
- source and version/effective date;
- Medical/Legal status;
- rights/consent/privacy status;
- expiry/review date;
- machine-readable delivery (CSV/JSON/PIM) plus human-readable source;
- no raw customer PII in analytics/testimonial working exports;
- conflicts called out, not silently overwritten.

Marketing handoff is accepted only when all `BLOCKING` rows are resolved or explicitly removed from scope. Missing testimonial/expert does not authorize fabrication; omit those components. Unknown composition/claim/price never receives placeholder factual text in production.

