# Preflight

Workspace: D:/PhpstormProjects/addp-analys

The workspace initially contained only the three runbooks and the source XLSX. It is not a Git repository and contains no website source. No AGENTS.md was found in workspace/ancestor guidance locations.

## Inputs

- Master: docs/audit-prompts/00_RUN_ALL.md
- Build: docs/audit-prompts/01_BUILD_SYSTEM.md
- Audit: docs/audit-prompts/02_RUN_AUDIT_AND_REPORT.md (to be read after quality gate)
- Original Checklist.txt was missing. User explicitly authorized the supplied Excel checklist as authoritative and its exact extraction into Checklist.txt. Blocker resolved. Workbook unchanged.
- Workbook OOXML cells and sheet/cell references preserved in checklist/workbook.extracted.json.

## Runtime

Node 22.17.0, npm 10.5.0, Python 3.14.7; bundled Python used for extraction. Codex CLI 0.158.0-alpha.2.1. Chrome 153.0.8010.54 and Edge 154.0.4258.37 installed. Playwright/axe/Ajv/Lighthouse/cheerio initially unavailable in workspace; project dependencies are being installed. Browser capability must pass a local fixture before production collection. Live subagents expose model/reasoning overrides. See CODEX_CAPABILITIES.json.

## Safety

Production read-only. No orders, payment, accounts, form submission, administrative/source access, tracking changes or upload. Production requests are deferred until system validation. Browser session/cart mutations are also blocked; downstream checks can be manual/blocked rather than false passes.
