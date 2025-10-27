import { config } from '../util/config.js';

// This store intentionally never frees memory to simulate a leak
const leakBuckets = [];
let backgroundTimerStarted = false;

function startBackgroundGrowth() {
  if (backgroundTimerStarted) return;
  backgroundTimerStarted = true;
  setInterval(() => {
    leakBuckets.push(generateChunk(Math.ceil(config.leak.chunkSize / 2)));
  }, config.leak.timerIntervalMs).unref();
}

function generateChunk(size) {
  const arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = {
      id: i + ':' + Date.now() + ':' + Math.random(),
      buffer: Buffer.alloc(256, i % 255),
      nested: { stamp: Date.now(), flag: i % 2 === 0 },
    };
  }
  return arr;
}

export function addLeakChunk() {
  startBackgroundGrowth();
  const chunk = generateChunk(config.leak.chunkSize);
  leakBuckets.push(chunk);
  return {
    totalBuckets: leakBuckets.length,
    totalObjects: leakBuckets.reduce((acc, b) => acc + b.length, 0),
  };
}

// ESM export above
