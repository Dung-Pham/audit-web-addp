# Production render-evidence diagnosis

Run: `20260927T180655Z-85e584`

Status: **BLOCKED_PENDING_COLLECTOR_REVALIDATION**

This diagnosis uses only artifacts already saved by the production run. No new production request was made for this review.

## Scope at the checkpoint

- Selected pages: 25.
- Pages with browser collection artifacts: 25 (24 marked complete, 1 marked partial by the former collector).
- Viewport runs: 50 (desktop and mobile for every selected page).
- Existing screenshots: 100 (one viewport and one full-page capture per viewport run).
- Screenshots considered provisional/incomplete for visual conclusions: 100. The 50 full-page screenshots are specifically unsuitable as final-page evidence because the former collector did not perform real incremental scrolling.

## Confirmed collector-induced resource failures

Across the 50 saved network logs, the former browser policy recorded:

- 200 stylesheet requests blocked as `robots disallow` (four per viewport run).
- 150 font requests blocked as `robots disallow` (three per viewport run).
- 100 same-origin static JavaScript requests blocked as `mutating GET endpoint` because action words appeared in `.js` filenames (two per viewport run).
- 200 CSS requests made through XHR blocked as `robots disallow` (four per viewport run).
- 99 POST/XHR requests blocked by the intended read-only safety guard; these remain correctly blocked and are not render assets.
- 2 third-party AddThis script failures caused by DNS resolution; the affected blog category page was marked partial.

Every selected page was affected by the stylesheet/font/static-script policy error. The homepage desktop and mobile screenshots visibly show unstyled navigation and long blank/unrevealed regions. These artifacts do not represent a complete finished render.

## Evidence gaps in the former collector

The former artifacts contain network, console, rendered HTML, DOM, screenshots, and performance resource entries, but they do not contain a structured snapshot of `document.styleSheets`, `document.fonts`, per-image completion, animation state, or before/after scroll state. Consequently, those runtime states cannot be reconstructed conclusively from the old artifacts. Their absence is part of this blocker and is addressed by the proposed collector amendment.

## Required disposition

- Do not use the provisional screenshots for persona, UX/UI, conversion, brand, or other visual conclusions.
- Preserve the old evidence index, screenshots, rendered HTML, network logs, and console logs as historical/provisional evidence.
- After the collector amendment passes independent review and the Phase A freeze is refreshed, recollect browser evidence for all 25 selected pages in this same immutable run.
- Keep navigation, mutation, popup, WebSocket, telemetry, cross-origin credential, checkout, account, form, order, and payment safeguards enforced.
