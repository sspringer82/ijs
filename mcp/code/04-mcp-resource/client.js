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

const resources = await client.listResources();
console.log(JSON.stringify(resources));

console.log('\n ---- \n');

const resourceResult = await client.readResource({
  uri: 'cities://USA',
});
console.log('Resource result:', resourceResult.contents[0].text);

process.exit(0);
