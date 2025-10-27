import { generateSyntheticDataset } from './dataset.js';
import { transformDataset } from './transform.js';
import { iterativeHash } from './hash.js';
import { computePrimes } from '../../algorithms/prime.js';
import { config } from '../../util/config.js';
import { time } from '../../util/metrics.js';

export function runCpuScenario() {
  const steps = [];
  steps.push(
    time(
      () => generateSyntheticDataset(config.cpu.dataSize),
      'generateSyntheticDataset'
    )
  );
  const transformed = time(
    () => transformDataset(steps[0].result),
    'transformDataset'
  );
  steps.push(transformed);
  steps.push(time(() => computePrimes(config.cpu.primeLimit), 'computePrimes'));
  steps.push(
    time(
      () => iterativeHash(steps[1].result, config.cpu.hashRounds),
      'iterativeHash'
    )
  );

  return {
    timingsMs: steps.map((s) => ({ step: s.label, ms: s.ms.toFixed(2) })),
    primesCount: steps[2].result.length,
    hashSample: steps[3].result.slice(0, 32),
    topTransformedSample: steps[1].result.slice(0, 3),
  };
}

// ESM export above
