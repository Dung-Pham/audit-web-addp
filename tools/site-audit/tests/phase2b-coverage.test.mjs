import test from 'node:test';
import assert from 'node:assert/strict';
import { buildCoverageMatrix } from '../orchestration/coverage.mjs';
import { planFindings } from '../reporters/planner.mjs';

test('Phase 2B product matrix retains every canonical product and never promotes absent evidence to PASS', () => {
  const matrix = buildCoverageMatrix({ pages: [{ url: 'https://fixture.test/product/glucare', page_type: 'product_detail', collection_status: 'complete' }], evidence: [] });
  assert.deepEqual(Object.keys(matrix.products), ['glucare', 'vien_an_duong', 'dovital']);
  assert.equal(matrix.products.glucare.capabilities.price.status, 'UNKNOWN');
  assert.equal(matrix.products.vien_an_duong.capabilities.product_route.status, 'NOT_FOUND');
  assert.equal(matrix.gate.status, 'analysis_complete_with_coverage_gaps');
});

test('Phase 2B remediation tasks preserve deterministic priority rationale and dependency metadata', () => {
  const finding = id => ({ finding_id: id, title: id, area: 'SEO', page: 'https://fixture.test/a', source: 'best_practice', source_requirement_ids: [], finding_type: 'deterministic', observation: 'Observed public condition.', evidence_ids: ['EVD-1'], impact: {}, severity: 'high', confidence: 0.9, suggested_direction: 'Correct the visible condition.', unknowns: [] });
  const tasks = planFindings([finding('FND-A'), { ...finding('FND-B'), planning: { dependencies: ['FND-A'], blocking_reason: 'Base signal must be corrected first.', prerequisite_type: 'sequencing', workstream: 'Technical SEO' } }]);
  assert.match(tasks[0].priority_rationale, /severity\/risk/);
  assert.equal(tasks[1].workstream, 'Technical SEO');
  assert.deepEqual(tasks[1].dependency_details, [{ task_id: 'TASK-001', blocking_reason: 'Base signal must be corrected first.', prerequisite_type: 'sequencing' }]);
});
