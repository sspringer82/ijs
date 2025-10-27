import { snapshotMemory, diffMemory, humanizeMemory } from '../util/metrics.js';
import { runCpuScenario } from '../services/cpu/cpuService.js';

export async function handleCpuIntensive(req, res) {
  const before = snapshotMemory();
  const result = runCpuScenario();
  const after = snapshotMemory();
  const diff = diffMemory(before, after);
  res.json({
    type: 'cpu-intensive',
    scenario: result,
    memoryDiffBytes: diff,
    memoryDiffHuman: humanizeMemory(diff),
  });
}

// ESM export above
