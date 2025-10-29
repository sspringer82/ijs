console.log('Hello World');
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { ChatOllama } from '@langchain/ollama';
import { createAgent } from 'langchain';
import { currencyConverter } from './tool.js';

const model = new ChatOllama({
  model: 'llama3.2:1b',
});

const tools = [currencyConverter];

const agent = createAgent({
  model,
  tools,
  systemPrompt:
    'You are a helpful assistant that can use tools when needed. Answer briefly.',
});

const rl = createInterface({ input, output });

console.log('Ask me anything (empty line to exit)\n');

while (true) {
  const question = await rl.question('> ');
  if (!question.trim()) {
    console.log('Goodbye!');
    break;
  }

  try {
    const result = await agent.invoke({
      messages: [{ role: 'user', content: question }],
    });
    console.log(result.messages.pop().content);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

rl.close();
process.exit(0);
