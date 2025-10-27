// Entry point for performance demonstration server (ESM)
// Provides endpoints under /perf for cpu-intensive, memory-intensive, and memory leak scenarios.
import { start } from './src/server.js';

start();
