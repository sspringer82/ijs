import express from 'express';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import server from './server.js';

const app = express();
app.use(express.json());
app.post('/mcp', async (request, response) => {
  try {
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
    });
    await server.connect(transport);
    await transport.handleRequest(request, response, request.body);
  } catch (error) {
    response.status(500).json({
      message: 'Internal server error',
    });
  }
});
app.listen(8080);
