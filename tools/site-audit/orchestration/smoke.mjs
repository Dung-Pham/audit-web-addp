import path from 'node:path';
import { readJSON, writeJSON } from './pipeline.mjs';

export async function writeSmokeSummary(runDir, requestedUrls) {
  const [pages, evidence] = await Promise.all([readJSON(path.join(runDir, 'inventory/pages.json'), []), readJSON(path.join(runDir, 'evidence/index.json'), [])]);
  const entries = [];
  for (const url of requestedUrls) for (const viewport of ['desktop', 'mobile']) {
    const related = evidence.filter(item => item.url === url && item.viewport === viewport);
    const find = type => related.filter(item => item.type === type);
    const stabilizationEvidence = find('render_stabilization')[0];
    const stabilization = stabilizationEvidence ? await readJSON(path.join(runDir, stabilizationEvidence.artifact), {}) : {};
    const initial = find('initial_viewport_screenshot'); const perf = find('lab_metrics'); const final = find('stabilized_full_screenshot');
    const page = pages.find(page => page.requested_url === url || page.url === url);
    const performanceArtifacts = await Promise.all(perf.map(item => readJSON(path.join(runDir, item.artifact), {})));
    const scrollBeforeMeasurement = performanceArtifacts.length && performanceArtifacts.every(item => item.synthetic_scroll_before_measurement === false) ? false : performanceArtifacts.some(item => item.synthetic_scroll_before_measurement === true) ? true : null;
    entries.push({ requested_url: url, final_url: page?.final_url ?? null, url, viewport, first_viewport: { captured: Boolean(initial.length), evidence_ids: initial.map(item => item.evidence_id) }, performance_clean_load: { captured: Boolean(perf.length), lab: true, synthetic_scroll_before_measurement: scrollBeforeMeasurement, evidence_ids: perf.map(item => item.evidence_id) }, scroll_stabilized: { captured: Boolean(final.length), reached_bottom: Boolean(stabilization.scroll?.reached_bottom), scroll_iterations: stabilization.scroll?.iterations ?? 0, initial_height: stabilization.scroll?.initial_height ?? null, final_height: stabilization.scroll?.final_height ?? null, height_increased: Boolean(stabilization.scroll?.height_increased), images_before: stabilization.initial_assets?.images?.discovered_at_start ?? 0, images_after: stabilization.post_scroll_assets?.images?.discovered_at_end ?? 0, images_discovered_after_scroll: stabilization.post_scroll_assets?.images?.discovered_after_start ?? 0, loaded_images: stabilization.post_scroll_assets?.images?.complete ?? 0, failed_images: stabilization.post_scroll_assets?.images?.failed ?? 0, pending_images: stabilization.post_scroll_assets?.images?.pending ?? 0, visible_asset_failures: stabilization.decode_failures?.images ?? 0, render_reason_codes: stabilization.render_reason_codes ?? ['render_partial_unclassified'], budget_exhausted: Boolean(stabilization.scroll?.budget_exhausted), evidence_ids: [stabilizationEvidence, ...final].filter(Boolean).map(item => item.evidence_id) }, collection_status: page?.collection_status ?? 'error' });
  }
  const summary = { run_kind: 'smoke', requested_urls: requestedUrls, entries };
  await writeJSON(path.join(runDir, 'smoke/summary.json'), summary); return summary;
}
