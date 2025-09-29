import assert from 'assert';
import t, { describe, it } from 'node:test';
import { sendRunnablePrompt } from './chat.js';

describe('sendRunnablePrompt', (t) => {
  it('returns a non-empty string for a simple prompt (default model)', async () => {
    const result = await sendRunnablePrompt('Say hi in one word');
    assert.strictEqual(typeof result, 'string');
    assert.ok(result.length > 0, 'Result should not be empty');
  });

  it('returns a non-empty string for another prompt (checks variability)', async () => {
    const result = await sendRunnablePrompt('Provide a fun fact about oceans');
    assert.strictEqual(typeof result, 'string');
    assert.ok(result.length > 0);
  });

  it('works when an explicit model is provided', async () => {
    const result = await sendRunnablePrompt(
      'Short reply please',
      'llama3.2:1b'
    );
    assert.strictEqual(typeof result, 'string');
    assert.ok(result.length > 0);
  });

  it('handles empty prompt gracefully', async () => {
    const result = await sendRunnablePrompt('');
    assert.strictEqual(typeof result, 'string');
  });

  it('multiple sequential calls do not throw', async () => {
    const prompts = ['First', 'Second', 'Third'];
    for (const p of prompts) {
      const r = await sendRunnablePrompt(p);
      assert.strictEqual(typeof r, 'string');
      assert.ok(r.length > 0);
    }
  });

  it('mocks the model', async (t) => {
    console.log(t.mock.module);

    t.mock.module('@langchain/ollama', {
      ChatOllama: class {
        constructor() {}
        async invoke() {
          return 'mocked response';
        }
      },
    });

    const result = await sendRunnablePrompt('Any prompt', 'llama3.2:1b');
    assert.strictEqual(result, 'mocked response');

    t.mock.reset();
  });
});
