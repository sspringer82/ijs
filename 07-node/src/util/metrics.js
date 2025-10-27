export function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  const units = ['KB', 'MB', 'GB', 'TB'];
  let i = -1;
  do {
    bytes = bytes / 1024;
    i++;
  } while (bytes >= 1024 && i < units.length - 1);
  return bytes.toFixed(2) + ' ' + units[i];
}

export function snapshotMemory() {
  const m = process.memoryUsage();
  return {
    rss: m.rss,
    heapTotal: m.heapTotal,
    heapUsed: m.heapUsed,
    external: m.external,
    arrayBuffers: m.arrayBuffers,
  };
}

export function diffMemory(before, after) {
  const keys = Object.keys(before);
  return keys.reduce((acc, k) => {
    acc[k] = after[k] - before[k];
    return acc;
  }, {});
}

export function humanizeMemory(mem) {
  const out = {};
  for (const k of Object.keys(mem)) {
    out[k] = formatBytes(mem[k]);
  }
  return out;
}

export function time(fn, label) {
  const start = process.hrtime.bigint();
  const result = fn();
  const end = process.hrtime.bigint();
  const ms = Number(end - start) / 1e6;
  return { label, ms, result };
}

// ESM exports already declared individually
