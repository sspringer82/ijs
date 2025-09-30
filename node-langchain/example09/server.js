import express from 'express';
import { getServer } from './mcp-server.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';

const app = express();
app.use(express.json());

app.post('/mcp', async (request, response) => {
  const server = getServer();
  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
  });
  response.on('close', () => {
    transport.close();
    server.close();
  });
  await server.connect(transport);
  await transport.handleRequest(request, response, request.body);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`MCP Server listening on http://localhost:${PORT}`);
});
