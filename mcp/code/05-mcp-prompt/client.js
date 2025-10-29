import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

const transport = new StdioClientTransport({
  command: 'node',
  args: ['index.js'],
});

const client = new Client({
  name: 'mcp-client',
  version: '1.0.0',
});

await client.connect(transport);

const prompts = await client.listPrompts();
console.log(JSON.stringify(prompts));

console.log('\n ---- \n');

const promptResult = await client.getPrompt({
  name: 'product-description',
  arguments: {
    productName: 'SuperWidget 3000',
    length: 'medium',
  },
});
console.log('Prompt result:', promptResult.messages);

process.exit(0);
