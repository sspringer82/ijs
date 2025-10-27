import { snapshotMemory, diffMemory, humanizeMemory } from '../util/metrics.js';
import { growLeakyStore } from '../services/leak/leakService.js';

export async function handleMemoryLeak(req, res) {
  const before = snapshotMemory();
  const state = growLeakyStore();
  const after = snapshotMemory();
  const diff = diffMemory(before, after);
  res.json({
    type: 'memory-leak',
    leakState: state,
    memoryDiffBytes: diff,
    memoryDiffHuman: humanizeMemory(diff),
    warning:
      'This endpoint intentionally grows memory and never frees it. Restart process to recover.',
  });
}

// ESM export above
