import { createAgent } from 'langchain';
import { ChatOllama } from '@langchain/ollama';
import { MultiServerMCPClient } from '@langchain/mcp-adapters';
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const client = new MultiServerMCPClient({
  throwOnLoadError: true,
  prefixToolNameWithServerName: false,
  additionalToolNamePrefix: '',
  mcpServers: {
    distance: {
      transport: 'stdio',
      command: 'node',
      args: ['index.js'],
    },
  },
});

const tools = await client.getTools();

const model = new ChatOllama({
  // model: 'llama3.2:1b',
  model: 'granite4:tiny-h',
});

const agent = createAgent({
  model: model,
  tools,
  systemPrompt:
    'You are a helpful assistant. You can use a tool to calculate the distance between two cities when required.',
});

console.log('Ask me anything (empty line to exit)\n');

const rl = createInterface({ input, output });

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
