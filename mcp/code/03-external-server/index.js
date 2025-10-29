import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

const transport = new StdioClientTransport({
  command: 'python3',
  args: ['-m', 'mcp_server_time'],
});

const client = new Client({
  name: 'mcp-client',
  version: '1.0.0',
});

await client.connect(transport);

const tools = await client.listTools();
console.log(JSON.stringify(tools));

console.log('\n ---- \n');

const toolResult = await client.callTool({
  name: 'get_current_time',
  arguments: {
    timezone: 'Europe/Berlin',
  },
});
console.log('Tool Result:', toolResult.content[0].text);

process.exit(0);
