import { addLeakChunk } from '../../store/leakStore.js';

export function growLeakyStore() {
  return addLeakChunk();
}
