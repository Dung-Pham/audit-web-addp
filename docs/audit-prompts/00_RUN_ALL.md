# 00_RUN_ALL.md — ADDP Black-Box Website Audit Master Orchestrator

## Mục tiêu

Đây là **entrypoint duy nhất** mà người dùng sẽ gọi.

Bạn phải tự động thực hiện toàn bộ quy trình từ đầu đến cuối:

1. Preflight workspace + Codex runtime.
2. Phát hiện capability multi-agent và model routing thực tế.
3. Đọc và thực thi `01_BUILD_SYSTEM.md`.
4. Build + test + validate hệ thống audit.
5. Chỉ khi quality gate đạt mới đọc và thực thi `02_RUN_AUDIT_AND_REPORT.md`.
6. Chạy full audit website production theo mô hình **black-box / no-source**.
7. Chạy persona agents + specialist agents.
8. Chạy evidence reviewer + contradiction reviewer + deduplicator.
9. Sinh:
   - `AUDIT_REPORT.md`
   - `IMPROVEMENT_PLAN.md`
   - `EXECUTIVE_PLAN.md`
   - `IMPLEMENTATION_BACKLOG.json`
   - `DEPENDENCIES.json`
10. Chạy final consistency validation.
11. Trả RUN_ID + exact artifact paths.

Người dùng chỉ cần gọi file này một lần.

Không yêu cầu người dùng nhập prompt tiếp theo giữa các phase, trừ khi workflow thật sự bị chặn bởi quyền truy cập, CAPTCHA, credential hoặc dependency không thể tự xử lý.

---

# 1. BỐI CẢNH QUAN TRỌNG

KHÔNG CÓ SOURCE CODE WEBSITE.

Không giả định có:
- Magento repository;
- theme source;
- module source;
- CMS source;
- deployment configuration;
- server configuration;
- database;
- KiotViet backend;
- Google Tag Manager workspace access;
- Google Analytics admin access;
- Search Console access.

Website được đánh giá như một **black-box production website**:

`https://addp.vn/`

Chỉ được sử dụng:
- browser behavior;
- HTTP response;
- rendered HTML/DOM;
- public assets;
- public JS/CSS;
- public structured data;
- browser console;
- browser network;
- public robots/sitemap;
- public forms;
- publicly observable tracking behavior;
- publicly observable cart/checkout flow;
- evidence nhìn thấy từ bên ngoài.

Không được giả vờ biết implementation nội bộ.

---

# 2. SOURCE OF TRUTH

Tìm và đọc:

`Checklist.txt`

Checklist là **business requirements gốc**.

Không silently:
- sửa requirement;
- thay requirement bằng best practice;
- thêm assumption rồi coi là yêu cầu gốc.

Nếu bổ sung best practice:

```text
source = "best_practice"
```

Nếu requirement đến từ checklist:

```text
source = "checklist"
```

Giữ nguyên `original_text` của checklist trong normalized data.

---

# 3. SAFETY

Workflow này là READ-ONLY.

Mặc định:

```text
AUDIT_MODE=production_read_only
AUDIT_ALLOW_REAL_ORDER=false
AUDIT_ALLOW_DESTRUCTIVE_ACTION=false
AUDIT_ALLOW_REAL_PAYMENT=false
AUDIT_ALLOW_ACCOUNT_CREATION=false
```

Không:
- sửa website;
- deploy;
- gửi form gây side effect nếu không cần;
- tạo đơn thật;
- thanh toán;
- thay đổi account;
- chỉnh tracking;
- chỉnh dữ liệu sản phẩm;
- upload file lên production;
- gọi destructive endpoint;
- brute force;
- bypass access control.

Nếu một check cần side effect thật:
- đánh dấu `blocked` hoặc `needs_manual_review`;
- không tự thực hiện.

---

# 4. PREFLIGHT WORKSPACE

Trước khi làm bất cứ việc gì:

1. Xác định workspace root.
2. Không giả định đây là source repo của website.
3. Không reset/xóa file người dùng.
4. Tìm:
   - `Checklist.txt`
   - `00_RUN_ALL.md`
   - `01_BUILD_SYSTEM.md`
   - `02_RUN_AUDIT_AND_REPORT.md`
5. Xác định package manager/tooling có sẵn.
6. Kiểm tra browser automation capability.
7. Ghi:
   `tools/site-audit/runtime/PREFLIGHT.md`

Nếu thiếu `Checklist.txt`:
- dừng;
- ghi blocker;
- không tự tạo checklist thay thế.

---

# 5. PREFLIGHT CODEX CAPABILITY

Không giả định mọi Codex runtime đều hỗ trợ per-subagent model routing.

Kiểm tra thực tế nếu có thể:

- Codex version/build;
- multi-agent/subagent support;
- custom agent support;
- child/subagent model override;
- reasoning effort override;
- runtime model metadata;
- available models nếu runtime expose.

Ghi:

`tools/site-audit/runtime/CODEX_CAPABILITIES.json`

Ví dụ schema:

```json
{
  "codex_version": null,
  "multi_agent_supported": null,
  "custom_agents_supported": null,
  "per_subagent_model_supported": null,
  "reasoning_override_supported": null,
  "runtime_model_verification_supported": null,
  "available_models": [],
  "notes": []
}
```

Không biết → `null`.

Không bịa.

---

# 6. MODEL ROUTING POLICY

Thiết kế theo logical tier, không phụ thuộc cứng vào một tên model cụ thể.

## DEEP

Dùng cho:
- system architecture review;
- evidence reviewer;
- contradiction reviewer;
- health-content critical review;
- final master planner;
- final quality gate.

Chọn model reasoning/coding mạnh nhất **thực tế khả dụng**.

Reasoning:
`high` hoặc tương đương.

## SPECIALIST

Dùng cho:
- orchestrator;
- persona analysis;
- UX/UI;
- conversion;
- brand;
- content;
- SEO;
- GEO/AEO;
- structured-data interpretation;
- performance analysis;
- analytics interpretation;
- commerce/checkout;
- external technical diagnostic;
- report synthesis.

Reasoning:
- medium mặc định;
- high cho UX/conversion/SEO/GEO/checkout/technical diagnostic.

## FAST

Dùng cho:
- page classification;
- extraction;
- normalization;
- repetitive structured transformation;
- duplicate candidate generation.

Reasoning:
low/medium.

## NO_MODEL

Không dùng LLM cho:
- HTTP requests;
- robots parsing;
- sitemap parsing;
- crawling;
- screenshots;
- DOM extraction;
- title/meta/heading extraction;
- canonical extraction;
- link extraction;
- JSON-LD parsing;
- browser console capture;
- network capture;
- Lighthouse execution;
- axe execution;
- checksums;
- schema validation;
- deterministic diff;
- artifact persistence.

---

# 7. MODEL ROUTING EXECUTION

Nếu runtime hỗ trợ per-subagent model:

- tạo project-scoped routing/config;
- map role → tier → model;
- lưu effective routing vào:

`tools/site-audit/runtime/MODEL_ROUTING_EFFECTIVE.json`

Logical routing:

```json
{
  "orchestrator": "SPECIALIST",
  "checklist_normalizer": "FAST",
  "page_classifier": "FAST",
  "persona_first_time": "SPECIALIST",
  "persona_high_intent": "SPECIALIST",
  "persona_research": "SPECIALIST",
  "persona_mobile": "SPECIALIST",
  "ux": "SPECIALIST",
  "conversion": "SPECIALIST",
  "brand": "SPECIALIST",
  "content": "SPECIALIST",
  "health_content": "DEEP",
  "seo": "SPECIALIST",
  "geo_aeo": "SPECIALIST",
  "structured_data": "SPECIALIST",
  "performance": "SPECIALIST",
  "analytics": "SPECIALIST",
  "checkout": "SPECIALIST",
  "external_technical_diagnostic": "SPECIALIST",
  "deduplicator": "FAST",
  "evidence_reviewer": "DEEP",
  "contradiction_reviewer": "DEEP",
  "master_planner": "DEEP"
}
```

Nếu runtime không hỗ trợ:
- không giả vờ đã route;
- dùng parent/session model;
- vẫn giữ agent separation;
- ghi:

```text
model_routing_status = "degraded_single_model"
```

Workflow vẫn tiếp tục nếu chất lượng cốt lõi còn đảm bảo.

---

# 8. ESCALATION

Nếu runtime hỗ trợ model escalation:

```text
FAST → SPECIALIST → DEEP
```

Chỉ escalate khi:
- confidence thấp;
- evidence conflict;
- malformed output sau retry;
- health-content risk;
- checkout/business critical ambiguity;
- technical diagnosis mơ hồ;
- planner dependency conflict.

Ghi escalation vào manifest.

---

# 9. PHASE A — BUILD SYSTEM

Đọc và thực thi toàn bộ:

`01_BUILD_SYSTEM.md`

Không chỉ tóm tắt.

Phải:
- tạo code;
- tạo config;
- tạo schemas;
- tạo agents;
- tạo collectors;
- tạo fixtures;
- tạo tests;
- chạy tests;
- fix lỗi;
- tạo system reports.

Không audit production trong phase này.

---

# 10. QUALITY GATE

Không chuyển sang production audit nếu:

- checklist normalization làm mất requirement;
- finding không evidence vẫn accepted;
- production safety guard fail;
- schema validation fail;
- report generator fail;
- browser collector unusable;
- run overwrite protection fail;
- reviewer/planner traceability fail;
- major tests fail.

Tạo:

`tools/site-audit/SYSTEM_VALIDATION_REPORT.md`

Status:

```text
READY_FOR_AUDIT
READY_WITH_LIMITATIONS
NOT_READY
```

Nếu `NOT_READY`:
- tự sửa;
- chạy validation lại.

Chỉ dừng nếu không thể tự khắc phục.

---

# 11. PHASE B — FULL BLACK-BOX AUDIT

Sau quality gate:

Đọc và thực thi toàn bộ:

`02_RUN_AUDIT_AND_REPORT.md`

Target:

`https://addp.vn/`

Mode:

`production_read_only`

---

# 12. EXECUTION ORDER

Bắt buộc:

```text
DISCOVERY
    ↓
DETERMINISTIC EVIDENCE COLLECTION
    ↓
PERSONA JOURNEYS
    ↓
SPECIALIST ANALYSIS
    ↓
EXTERNAL TECHNICAL DIAGNOSTIC
    ↓
EVIDENCE REVIEW
    ↓
CONTRADICTION RESOLUTION
    ↓
DEDUPLICATION
    ↓
ACCEPTED FINDINGS
    ↓
AUDIT REPORT
    ↓
MASTER PLANNER
    ↓
IMPROVEMENT PLAN
    ↓
IMPLEMENTATION BACKLOG
    ↓
FINAL CONSISTENCY CHECK
```

Không chạy planner trước reviewer.

Không để specialist đọc conclusion của specialist khác trước khi nộp candidate findings.

---

# 13. FINAL CONSISTENCY CHECK

Kiểm tra:

1. Accepted finding có evidence IDs.
2. Evidence artifact tồn tại.
3. Checklist finding trace về requirement.
4. Best-practice finding được label riêng.
5. Improvement task trace về accepted finding.
6. Dependency refs tồn tại.
7. Không có dependency cycle không giải thích.
8. Acceptance criteria không rỗng.
9. Không có `PASS` cho check bị blocked.
10. Report và plan không mâu thuẫn.
11. Không có real-order/payment side effect.
12. Manifest không ghi model giả.
13. Không có câu khẳng định về source/internal implementation khi không có source.
14. Mọi technical root-cause chỉ được ghi:
   - observed;
   - probable;
   - developer_investigation;
   chứ không được giả làm confirmed source-level cause.

Fail → tự sửa artifact và validate lại.

---

# 14. FINAL OUTPUT

Trả ngắn:

- build status;
- validation status;
- model routing status;
- RUN_ID;
- pages audited;
- persona journeys;
- accepted findings;
- manual-review findings;
- blocked checks;
- P0/P1/P2/P3 counts.

Exact paths:

- `SYSTEM_BUILD_REPORT.md`
- `SYSTEM_VALIDATION_REPORT.md`
- `CODEX_CAPABILITIES.json`
- `MODEL_ROUTING_EFFECTIVE.json`
- `AUDIT_REPORT.md`
- `IMPROVEMENT_PLAN.md`
- `EXECUTIVE_PLAN.md`
- `IMPLEMENTATION_BACKLOG.json`
- `DEPENDENCIES.json`

Workflow hoàn tất khi:
- artifact tồn tại;
- final consistency check pass;
- production không bị thay đổi.
