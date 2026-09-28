import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const runDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contextArtifacts = ['context/ADDP_CUSTOMER_CONTEXT.md', 'context/customer-context.json'];
const shared = 'Consider both an older or middle-aged product user/self-purchaser and an adult child researching or purchasing for a parent. Do not stereotype. Observe and cite actual evidence only; this context cannot create findings.';
const persona = {
  first_time: 'Assess identity, offering, intended users, trust, product route, next action, legibility, navigation, differentiation, hierarchy, CTA clarity, animation and visual complexity for a first-time middle-aged or older visitor.',
  high_intent: 'Evaluate both an older self-purchaser and an adult child purchaser for a parent. Seek product, intended user, price, quantity/package, promotions, trust, purchase information, CTA, cart path, visible checkout path and support. Stay read-only and record the exact safe stop point.',
  mobile: 'Represent a middle-aged or older phone user with ordinary or limited digital confidence. Assess legibility, contrast, density, navigation, target size, labels, scroll burden, overlays, motion, precision, gestures, orientation, recovery, product, price, CTA and help.',
  research: 'Represent a digitally capable adult child researching for a parent. Separate website-present information, website-linked support and unknowns across ingredients, claims, sources, documents, company identity, credentials, reviews, FAQ, boundaries, price, support and purchase. Do not infer validity, authenticity or suitability.'
};
const specialist = {
  ux: 'Interpret age-related legibility, hierarchy, target-size, navigation, movement, gesture, orientation and recovery evidence within UX/UI.',
  conversion: 'Treat trust and confidence as part of conversion. Interpret product/price clarity, evidence, support, CTA and purchase-path evidence for self-purchasers and adult-child purchasers.',
  brand: 'Interpret company identity, credibility, real imagery, credentials, consistency and trust evidence for both product users and adult-child decision-makers.',
  content: 'Interpret audience clarity, product explanation, ingredients, documents, claims, price, support and next-step content without adding facts absent from evidence.',
  health_content: 'Interpret ingredients, intended use, health/nutrition claims, sources, boundaries and supporting evidence. Do not infer medical validity, effectiveness, authenticity or suitability.',
  checkout: 'Interpret the visible read-only cart and checkout path, package/price clarity, support and whether an adult child can understand purchasing for a parent. Do not mutate cart or submit anything.'
};

async function patchPacket(stage, role, overlay) {
  const file = path.join(runDir, 'agent-packets', stage, `${role}.json`);
  const packet = JSON.parse(await fs.readFile(file, 'utf8'));
  packet.allowed_inputs = [...new Set([...(packet.allowed_inputs ?? []), ...contextArtifacts, 'review/RENDER_STABILIZATION_SUMMARY.md', 'review/RENDER_STABILIZATION_SUMMARY.json', 'analyses/personas/journeys.json'])];
  packet.customer_context_artifact = contextArtifacts[0];
  packet.customer_context_json = contextArtifacts[1];
  packet.customer_context_overlay = `${shared} ${overlay}`;
  packet.instructions = `${packet.instructions} Apply the run-level ADDP customer context. Preserve distinct persona impacts when supported and avoid duplicate underlying findings.`;
  await fs.writeFile(file, JSON.stringify(packet, null, 2));
}

for (const [role, overlay] of Object.entries(persona)) await patchPacket('personas', role, overlay);
for (const [role, overlay] of Object.entries(specialist)) await patchPacket('specialists', role, overlay);

const manifestPath = path.join(runDir, 'manifest.json');
const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
manifest.run_context = {
  customer_context: contextArtifacts[1],
  narrative: contextArtifacts[0],
  render_stabilization_summary: 'review/RENDER_STABILIZATION_SUMMARY.json',
  propagated_personas: Object.keys(persona),
  propagated_specialists: Object.keys(specialist),
  framework_change: false
};
await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
console.log(JSON.stringify({ personas: Object.keys(persona), specialists: Object.keys(specialist), contextArtifacts }, null, 2));
