import { getAnimalFact } from './getAnimalFact.js';
import assert from 'assert';
import { describe, it } from 'node:test';

describe('getAnimalFact', () => {
  it('returns correct fact for cow', async () => {
    const result = await getAnimalFact.invoke({ animal: 'cow' });
    assert.strictEqual(result, 'Cows have almost 360° panoramic vision.');
  });

  it('returns correct fact for chicken', async () => {
    const result = await getAnimalFact.invoke({ animal: 'chicken' });
    assert.strictEqual(
      result,
      'Chickens can remember over 100 different faces.'
    );
  });

  it('returns correct fact for cat', async () => {
    const result = await getAnimalFact.invoke({ animal: 'cat' });
    assert.strictEqual(
      result,
      'Cats have whiskers on the backs of their front legs.'
    );
  });

  it('returns correct fact for uppercase animal', async () => {
    const result = await getAnimalFact.invoke({ animal: 'COW' });
    assert.strictEqual(result, 'Cows have almost 360° panoramic vision.');
  });

  it('returns fallback for unknown animal', async () => {
    const result = await getAnimalFact.invoke({ animal: 'dog' });
    assert.strictEqual(result, 'No fact found for dog');
  });

  it('returns fallback for empty string', async () => {
    const result = await getAnimalFact.invoke({ animal: '' });
    assert.strictEqual(result, 'No fact found for ');
  });
});
