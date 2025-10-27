import { snapshotMemory, diffMemory, humanizeMemory } from '../util/metrics.js';
import { runMemoryAllocation } from '../services/memory/allocator.js';

export async function handleMemoryIntensive(req, res) {
  const before = snapshotMemory();
  const result = runMemoryAllocation();
  const after = snapshotMemory();
  const diff = diffMemory(before, after);
  res.json({
    type: 'memory-intensive',
    allocation: result,
    memoryDiffBytes: diff,
    memoryDiffHuman: humanizeMemory(diff),
  });
}

// ESM export above
