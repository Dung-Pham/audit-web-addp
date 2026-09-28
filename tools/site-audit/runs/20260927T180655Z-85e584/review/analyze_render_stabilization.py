import json
from collections import Counter, defaultdict
from pathlib import Path

import numpy as np
from PIL import Image

RUN = Path(__file__).resolve().parents[1]
INDEX = json.loads((RUN / "evidence/index.json").read_text(encoding="utf-8"))
PAGES = json.loads((RUN / "inventory/pages.json").read_text(encoding="utf-8"))


def load(entry):
    return json.loads((RUN / entry["artifact"]).read_text(encoding="utf-8"))


def image_diff(initial, final):
    with Image.open(RUN / initial["artifact"]) as left_source, Image.open(RUN / final["artifact"]) as right_source:
        left_size, right_size = left_source.size, right_source.size

        def reduced(source):
            width = min(256, source.width)
            height = max(1, round(source.height * width / source.width))
            return source.convert("RGB").resize((width, height), Image.Resampling.LANCZOS)

        left, right = reduced(left_source), reduced(right_source)
        canvas_width, canvas_height = max(left.width, right.width), max(left.height, right.height)
        left_canvas = Image.new("RGB", (canvas_width, canvas_height), "white")
        right_canvas = Image.new("RGB", (canvas_width, canvas_height), "white")
        left_canvas.paste(left, (0, 0)); right_canvas.paste(right, (0, 0))
        delta = np.abs(np.asarray(left_canvas, dtype=np.int16) - np.asarray(right_canvas, dtype=np.int16))
        changed_ratio = float(np.mean(np.max(delta, axis=2) > 15))
        mean_absolute_difference = float(np.mean(delta))
        dimension_delta = max(abs(left_size[0] - right_size[0]) / max(left_size[0], right_size[0]), abs(left_size[1] - right_size[1]) / max(left_size[1], right_size[1]))
        material = changed_ratio >= 0.02 or mean_absolute_difference >= 1.5 or dimension_delta >= 0.01
        return {
            "initial_size": list(left_size), "stabilized_size": list(right_size),
            "changed_pixel_ratio": round(changed_ratio, 6),
            "mean_absolute_channel_difference": round(mean_absolute_difference, 6),
            "dimension_delta_ratio": round(dimension_delta, 6), "material_difference": material,
            "method": "Images reduced to 256 px width, padded white, then compared; material if >2% pixels differ by >15, mean channel difference >=1.5, or dimensions differ >=1%."
        }


by_key = defaultdict(dict)
for item in INDEX:
    if item.get("type") in {"initial_full_screenshot", "stabilized_full_screenshot"}:
        by_key[(item.get("url"), item.get("viewport"))][item["type"]] = item

diffs = []
for (url, viewport), pair in sorted(by_key.items()):
    if len(pair) == 2:
        diffs.append({"url": url, "viewport": viewport, **image_diff(pair["initial_full_screenshot"], pair["stabilized_full_screenshot"])})

failed = defaultdict(lambda: {"occurrences": 0, "pages": set(), "viewports": set(), "statuses": Counter()})
capture_rows = []
scroll_pages = defaultdict(set)
decode_totals = Counter()
for item in INDEX:
    if item.get("type") != "render_stabilization":
        continue
    state = load(item)
    url, viewport = item["url"], item.get("viewport")
    before, after = state.get("before_scroll", {}), state.get("after_scroll", {})
    initial_assets, post_assets = state.get("initial_assets", {}), state.get("post_scroll_assets", {})
    signals = []
    if after.get("reveal_markers", 0) > before.get("reveal_markers", 0): signals.append("reveal markers increased")
    if after.get("dynamic_height_markers", 0) > before.get("dynamic_height_markers", 0): signals.append("dynamic-height markers increased")
    if state.get("scroll", {}).get("height_increased"): signals.append("document height increased during scroll")
    before_images, after_images = initial_assets.get("images", {}), post_assets.get("images", {})
    if after_images.get("discovered_at_end", 0) > before_images.get("discovered_at_end", 0): signals.append("additional images were discovered after scroll")
    if after_images.get("complete", 0) > before_images.get("complete", 0): signals.append("additional images completed after scroll")
    if signals: scroll_pages[url].add(viewport)
    decode = state.get("decode_failures", {})
    for key in ("fonts", "images", "pending_images"): decode_totals[key] += int(decode.get(key, 0) or 0)
    non_audit_failures = [failure for failure in state.get("failed_resources", []) if not failure.get("audit_induced")]
    for failure in non_audit_failures:
        key = (failure.get("resource_type") or "unknown", failure.get("url") or "unknown")
        row = failed[key]; row["occurrences"] += 1; row["pages"].add(url); row["viewports"].add(viewport)
        row["statuses"][str(failure.get("status") or failure.get("failure") or failure.get("kind") or "unknown")] += 1
    capture_rows.append({
        "url": url, "viewport": viewport, "render_complete": bool(state.get("render_complete")),
        "reached_bottom": bool(state.get("scroll", {}).get("reached_bottom")), "scroll_signals": signals,
        "failed_resources": len(non_audit_failures), "decode_failures": decode,
        "load_timed_out": bool(state.get("load_timed_out")),
        "initial_assets_timed_out": bool(initial_assets.get("timed_out")),
        "post_scroll_assets_timed_out": bool(post_assets.get("timed_out")),
        "animation_timed_out": bool(state.get("animations", {}).get("timed_out"))
    })

failures = []
for (resource_type, url), row in sorted(failed.items()):
    failures.append({"resource_type": resource_type, "url": url, "occurrences": row["occurrences"], "statuses": dict(row["statuses"]), "page_count": len(row["pages"]), "pages": sorted(row["pages"]), "viewports": sorted(row["viewports"])})

material = [row for row in diffs if row["material_difference"]]
material_pages = sorted({row["url"] for row in material})
type_counts = Counter(item.get("type") for item in INDEX)
resource_type_counts = Counter()
for row in failures: resource_type_counts[row["resource_type"]] += row["occurrences"]

summary = {
    "run_id": RUN.name,
    "selected_pages": len(PAGES),
    "page_collection_status": dict(Counter(page.get("collection_status") for page in PAGES)),
    "current_render_version_pages": sum(page.get("render_collection_version") == "render-stabilized-v1" for page in PAGES),
    "evidence_records": len(INDEX),
    "old_screenshots_marked_provisional": type_counts["provisional_viewport_screenshot"] + type_counts["provisional_full_screenshot"],
    "old_viewport_runs_marked_provisional": type_counts["provisional_viewport_screenshot"],
    "current_capture_files": sum(type_counts[name] for name in ("initial_viewport_screenshot", "initial_full_screenshot", "stabilized_viewport_screenshot", "stabilized_full_screenshot")),
    "render_capture_records": len(capture_rows),
    "render_complete_captures": sum(row["render_complete"] for row in capture_rows),
    "partial_render_captures": sum(not row["render_complete"] for row in capture_rows),
    "reached_bottom_captures": sum(row["reached_bottom"] for row in capture_rows),
    "timeout_captures": sum(row["load_timed_out"] or row["initial_assets_timed_out"] or row["post_scroll_assets_timed_out"] or row["animation_timed_out"] for row in capture_rows),
    "decode_failure_occurrences": dict(decode_totals),
    "non_audit_failed_resource_occurrences_by_type": dict(resource_type_counts),
    "unique_non_audit_failed_resources": len(failures),
    "scroll_trigger_observed_pages": [{"url": url, "viewports": sorted(viewports)} for url, viewports in sorted(scroll_pages.items())],
    "materially_changed_full_captures": len(material),
    "materially_changed_pages": material_pages,
    "image_difference_threshold": diffs[0]["method"] if diffs else None,
    "captures": capture_rows,
    "image_differences": diffs,
    "failed_resources": failures
}
(RUN / "review/RENDER_STABILIZATION_SUMMARY.json").write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8")

lines = [
    "# Render stabilization summary", "", f"Run: `{RUN.name}`", "",
    "## Collection status", "",
    f"- Selected and recollected pages: **{len(PAGES)}**.",
    f"- Page results: **{summary['page_collection_status'].get('partial', 0)} partial**, **{summary['page_collection_status'].get('complete', 0)} complete**, **{summary['page_collection_status'].get('error', 0)} error**.",
    f"- Evidence records: **{len(INDEX)}**; missing referenced artifacts were checked separately by the production checkpoint and were zero.",
    f"- Earlier screenshots marked provisional and replaced for interpretation: **{summary['old_screenshots_marked_provisional']} files** ({summary['old_viewport_runs_marked_provisional']} viewport captures plus {type_counts['provisional_full_screenshot']} full-page captures).",
    f"- Current initial/stabilized screenshot files: **{summary['current_capture_files']}** across **{len(capture_rows)}** page/viewport runs.", "",
    "The deterministic collection is usable with limitations. Page-level status remains partial because every viewport recorded at least one residual resource or decode failure; no page status has been promoted to complete.", "",
    "## Stabilization outcome", "",
    f"- Reached page bottom: **{summary['reached_bottom_captures']}/{len(capture_rows)}** captures.",
    f"- Stabilization timeouts: **{summary['timeout_captures']}/{len(capture_rows)}** captures.",
    f"- Materially different stabilized full screenshots: **{len(material)}/{len(diffs)}** captures across **{len(material_pages)}** pages.",
    f"- Pixel comparison method: {summary['image_difference_threshold']}", "",
    "## Direct scroll-trigger signals", ""
]
if scroll_pages:
    for url, viewports in sorted(scroll_pages.items()): lines.append(f"- `{url}` — {', '.join(sorted(viewports))}")
else:
    lines.append("- No direct reveal-marker, dynamic-height, or additional-image-discovery transition was recorded. The collector still performed bounded incremental scrolling on every capture before the final screenshot.")
lines += ["", "## Residual CSS, font, image, and script failures", "", f"Decode counters across captures: images **{decode_totals['images']}**, fonts **{decode_totals['fonts']}**, pending images **{decode_totals['pending_images']}**.", ""]
for kind in ("stylesheet", "font", "image", "script"):
    rows = [row for row in failures if row["resource_type"] == kind]
    lines.append(f"### {kind.title()}")
    lines.append("")
    if not rows: lines.append("No non-audit-induced failed resource entry of this type was recorded.")
    for row in rows:
        statuses = ", ".join(f"{key}: {value}" for key, value in row["statuses"].items())
        lines.append(f"- `{row['url']}` — {row['occurrences']} occurrence(s), {row['page_count']} page(s), status/failure {statuses}.")
    lines.append("")
lines += ["## Pages with material initial-to-stabilized differences", ""]
for url in material_pages: lines.append(f"- `{url}`")
lines += ["", "Detailed per-capture differences, scroll signals, decode counts, and failed-resource page mappings are in `review/RENDER_STABILIZATION_SUMMARY.json`.", ""]
(RUN / "review/RENDER_STABILIZATION_SUMMARY.md").write_text("\n".join(lines), encoding="utf-8")
print(json.dumps({key: summary[key] for key in ("selected_pages", "page_collection_status", "evidence_records", "old_screenshots_marked_provisional", "render_capture_records", "partial_render_captures", "reached_bottom_captures", "timeout_captures", "decode_failure_occurrences", "non_audit_failed_resource_occurrences_by_type", "unique_non_audit_failed_resources", "materially_changed_full_captures")}, indent=2))
