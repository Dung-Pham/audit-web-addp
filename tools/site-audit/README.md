# ADDP external audit system

This framework audits public behavior and artifacts without website source or backend access. It never asserts a Magento module/file, deployment configuration, database state, GA administration setting or KiotViet success that cannot be observed externally.

## Source and requirements

The original XLSX in `docs/audit-prompts` is authoritative by explicit user authorization. `extract_checklist.py` reads OOXML without modifying the workbook. Root `Checklist.txt` preserves cell text with sheet/cell markers; `checklist/workbook.extracted.json` retains all cells and the source checksum. `checklist/normalize.mjs` validates exact text and produces 17 requirements, 30 original clauses, and a coverage matrix. Strategic objective text is retained separately. The checklist's search/AI visibility promises are business aims, not scientifically verified guarantees.

## Architecture and roles

Discovery and deterministic collection precede four persona journeys. Eleven specialists independently examine evidence. An external technical diagnostic role distinguishes observed facts, probable causes and developer investigation. Evidence review and contradiction review precede deduplication and accepted findings. Only accepted findings enter the master planner and implementation backlog. The final validator checks traceability, schemas, dependencies, safety and blocked states.

Collectors use public GET responses, robots/sitemaps, Playwright Chrome snapshots, DOM, public JS and JSON-LD, console/network logs, axe-core and Performance APIs. Evidence is timestamped, indexed and backed by local artifacts. Desktop and mobile viewport/full-page screenshots are captured. The `first_viewport` capture is preserved before audit scrolling, `performance_clean_load` LAB metrics are measured before synthetic scrolling, and `scroll_stabilized` evidence follows bounded natural scrolling. Render completeness has explicit reason codes and is separate from resource health. Measured timing is LAB; FIELD/INP/PSI scores are unavailable unless separately measured and clearly labelled. The framework does not manufacture Lighthouse scores. Production remains read-only; `authorizedTransactionTest` is a disabled future scaffold.

Agent role instructions are in `agents/`. Runtime capabilities and routing are under `runtime/`. Live Codex dispatch uses DEEP/SPECIALIST/FAST tiers when available. Requested models and actual verified model metadata are separate; unknown actual metadata stays null. HTTP, screenshots, parsing, schemas, hashing and persistence use no model.

## Commands

Run from this directory with Node 22 and installed Chrome:

```powershell
npm ci --no-fund --no-audit
node checklist/normalize.mjs
npm test
node cli.mjs full --target https://addp.vn/ --environment production --max-pages 25 --allow-real-order=false
node cli.mjs discovery --target https://addp.vn/
node cli.mjs collect --resume RUN_ID
node cli.mjs personas --resume RUN_ID
node cli.mjs analyze --resume RUN_ID
node cli.mjs review --resume RUN_ID
node cli.mjs report --resume RUN_ID
node cli.mjs validate --resume RUN_ID
node cli.mjs regression --before RUN_A --after RUN_B
```

The CLI handles deterministic stages and produces role-specific agent packets. Live model dispatch is performed by the Codex session using its exposed multi-agent tools, not an embedded API key. `full` explicitly reports awaiting live-agent stages when the reviewed outputs are absent; it does not pretend to have run model review. The requested master-runbook workflow is coordinated automatically in this session through all those stages. `review`, `report`, and `validate` consume completed reviewer/contradiction outputs. No manual phase-start prompts are needed during the session workflow.

`SYSTEM_VALIDATION_REPORT.md` must state READY_FOR_AUDIT or READY_WITH_LIMITATIONS before production runs can be created. `npm test` uses localhost fixtures and never depends on production. Browser executable, scope, delay, depth, representative sampling and page budget are in `config/audit.json`.

## Safety and limitations

Production mode is read-only. Orders, payment, account creation, cart mutation, real form submission, uploads, deployment and destructive endpoints are prohibited. Browser interception blocks non-GET, dangerous GET actions and audit-induced telemetry. Console/network failures caused by interception are distinguished from observed site failures. This can limit analytics and dynamic checkout evidence; blocked checks are never PASS.

Cart and checkout are inspected only if safely reachable without mutation. Purchase events, thank-you behavior, real payment and KiotViet transfer require a later authorized test environment or manual validation. No CAPTCHA or access control is bypassed. Public robots rules are respected. Absence in a bounded sample never establishes absence across the entire site.

Runs live in `runs/<RUN_ID>`. Creating an existing run ID fails. Resume retains complete artifacts and stage history. Framework hashes refer to this audit framework, never website source. Evidence paths are relative to their run. Regression comparisons require equivalent scope and collection conditions; disappearance from a smaller sample does not prove a fix.

## Main outputs

Each completed run contains an inventory, evidence index and artifacts, persona/specialist/diagnostic analyses, accepted/rejected/manual findings, checklist compliance, an audit report, improvement plan, executive plan, implementation backlog, dependency graph and final consistency result. Recommendations describe observable target behavior and developer investigations, with no invented source paths or delivery timelines.
