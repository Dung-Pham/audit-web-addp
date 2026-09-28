# Render stabilization summary

Run: `20260927T180655Z-85e584`

## Collection status

- Selected and recollected pages: **25**.
- Page results: **25 partial**, **0 complete**, **0 error**.
- Evidence records: **854**; missing referenced artifacts were checked separately by the production checkpoint and were zero.
- Earlier screenshots marked provisional and replaced for interpretation: **100 files** (50 viewport captures plus 50 full-page captures).
- Current initial/stabilized screenshot files: **200** across **50** page/viewport runs.

The deterministic collection is usable with limitations. Page-level status remains partial because every viewport recorded at least one residual resource or decode failure; no page status has been promoted to complete.

## Stabilization outcome

- Reached page bottom: **50/50** captures.
- Stabilization timeouts: **6/50** captures.
- Materially different stabilized full screenshots: **9/50** captures across **5** pages.
- Pixel comparison method: Images reduced to 256 px width, padded white, then compared; material if >2% pixels differ by >15, mean channel difference >=1.5, or dimensions differ >=1%.

## Direct scroll-trigger signals

- `https://addp.vn/sua-hat-glucare-plus` — desktop
- `https://addp.vn/sui-dovital` — desktop, mobile

## Residual CSS, font, image, and script failures

Decode counters across captures: images **100**, fonts **0**, pending images **21**.

### Stylesheet

- `https://addp.vn/pub/static_custom/custom.css?v=1.0` — 50 occurrence(s), 25 page(s), status/failure net::ERR_ABORTED: 50.
- `https://addp.vn/style-addp.css` — 5 occurrence(s), 2 page(s), status/failure net::ERR_ABORTED: 5.

### Font

No non-audit-induced failed resource entry of this type was recorded.

### Image

- `https://addp.vn/static/version1790061737/frontend/Codazon/unlimited_child/vi_VN/images/flags/flag_en.gif` — 50 occurrence(s), 25 page(s), status/failure 404: 50.
- `https://addp.vn/static/version1790061737/frontend/Codazon/unlimited_child/vi_VN/images/flags/flag_vn.gif` — 50 occurrence(s), 25 page(s), status/failure 404: 50.

### Script

No non-audit-induced failed resource entry of this type was recorded.

## Pages with material initial-to-stabilized differences

- `https://addp.vn/`
- `https://addp.vn/sua-dinh-duong.html`
- `https://addp.vn/sui-dovital`
- `https://addp.vn/thuc-pham-chuc-nang.html`
- `https://addp.vn/thuc-pham-chuc-nang/cai-thien-tang-cuong-chuc-nang.html`

Detailed per-capture differences, scroll signals, decode counts, and failed-resource page mappings are in `review/RENDER_STABILIZATION_SUMMARY.json`.
