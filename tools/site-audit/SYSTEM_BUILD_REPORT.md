# System build report

Build status: BUILT

The external black-box framework is implemented under `tools/site-audit`. The workspace is not a website source repository. Production has not been accessed during Phase A.

## Architecture and implemented modules

- `checklist/normalize.mjs`: exact checklist normalization, original cell provenance, 17 business requirements and 30 original clauses. `extract_checklist.py` preserves all 82 populated XLSX cells. User explicitly authorized Excel as the authoritative source after the original required text file was absent.
- `collectors/crawler.mjs`: public robots, sitemap index/urlset, bounded crawl, redirect/URL guards, representative page selection, resumable inventory.
- `collectors/browser.mjs`: actual Chrome through Playwright, desktop/mobile viewport and full screenshots, raw/rendered HTML and SEO extraction, JSON-LD, visible controls/computed typography, network/console, axe accessibility, measured LAB timing and public tracking signals.
- `orchestration/core.mjs` and `schemas`: evidence/artifact checks, supported review decisions, contradictions, deduplication, dependency DAG, final consistency, non-overwrite run creation, atomic stage save/resume and regression classification.
- `orchestration/journeys.mjs`: four observed browsing policies with real safe clicks, timestamps, screenshots, navigation provenance and explicit commerce blockers. Persona agents interpret their own evidence afterward.
- `orchestration/pipeline.mjs` and `cli.mjs`: production readiness gate, immutable new run creation, hashes/version metadata, all required CLI stage modes, agent work packets and report validation.
- `reporters`: all 27 audit sections, 29 improvement sections, executive plan, accepted-only implementation tasks and dependency JSON.
- `agents`: orchestrator, four personas, eleven specialists, external technical diagnostic, evidence/contradiction/deduplication reviewers and master planner instructions.

## Validation and commands

`npm test` runs offline unit and integration tests. See `runtime/test-results-build.txt` and `SYSTEM_VALIDATION_REPORT.md` for the final gate result. Tests cover source preservation, schemas, discovery, browser fixtures, IDs and artifacts, unsupported findings, requirement refs, duplicates, contradictions, diagnostic semantics, report generation, planner traceability, dependency cycles, production guards, interruptions/resume, regression and run non-overwrite. Real Chrome is used against localhost fixtures.

See `README.md` for discovery, collect, personas, analyze, review, report, full, validate and regression commands. Live model dispatch uses the Codex session tools; no embedded credential or hidden model is assumed. Subsequent phases in this requested run are coordinated automatically by the current session.

## Model routing

Runtime supports model and reasoning override parameters in live subagent dispatch. The Phase A build agents were requested as gpt-6-sol/high, and the architecture reviewer as gpt-6-astra/high. On 2026-09-28 the user changed future routing to gpt-5.6-sol/high by default and gpt-5.6-luna/medium for routine and persona work. gpt-6-astra/high is reserved for architecture blockers, unresolved contradictions, or final deep synthesis when Sol is insufficient. Deterministic collectors and transforms are NO_MODEL. Actual inference metadata is not returned and remains null; requested models are never recorded as verified effective models.

## Safety, prerequisites and limitations

Node 22, npm dependencies locked in package-lock.json, and local Chrome are available. Browser runs use temporary isolated contexts, safe GET navigation, network guards and no real cart/order/payment/account/form actions. No website deployment, uploads, backend or administrative changes occur. Telemetry interception is labelled audit-induced and may limit analytics inference.

This run uses Performance APIs as the permitted Lighthouse equivalent. No PSI score, field performance, actual INP, successful purchase event, order confirmation or KiotViet completion will be invented. Those checks need a separately available measurement or manual authorized environment. A bounded representative sample cannot prove sitewide absence. Public content provides no confirmed internal source-level root causes.
