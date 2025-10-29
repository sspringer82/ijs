import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import z from 'zod';
import { setTimeout } from 'node:timers/promises';

const server = new McpServer({
  name: 'mcp-server',
  version: '1.0.0',
});

server.registerTool(
  'distance',
  {
    title: 'Distance Tool',
    description: 'Calculate the distance between two cities',
    inputSchema: {
      cityA: z.string().describe('First city'),
      cityB: z.string().describe('Second city'),
    },
  },
  async ({ cityA, cityB }) => {
    const distance = await Promise.resolve(Math.random() * 1000);

    await setTimeout(1000);

    return {
      content: [
        {
          type: 'text',
          text: `Distance between ${cityA} and ${cityB} is ${distance.toFixed(
            2
          )} km`,
        },
      ],
    };
  }
);

export default server;
