import { config } from '../../util/config.js';

function makeNested(depth, base) {
  if (depth === 0) return base;
  return { level: depth, payload: base, next: makeNested(depth - 1, base) };
}

function allocateObjects(count, depth) {
  const arr = new Array(count);
  for (let i = 0; i < count; i++) {
    const base = {
      idx: i,
      stamp: Date.now(),
      random: Math.random(),
      text: Buffer.from(String(Math.random())).toString('base64'),
    };
    arr[i] = makeNested(depth, base);
  }
  return arr;
}

export function runMemoryAllocation() {
  const data = allocateObjects(
    config.memory.objects,
    config.memory.nestedDepth
  );
  // Summarize a little so response isn't enormous
  return {
    allocated: data.length,
    sample: data.slice(0, 2),
    depth: config.memory.nestedDepth,
  };
}

// ESM export above
