import {
  McpServer,
  ResourceTemplate,
} from '@modelcontextprotocol/sdk/server/mcp.js';
import z from 'zod';

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

server.registerResource(
  'cities',
  new ResourceTemplate('cities://{country}', {
    list: async () => ({
      resources: [
        { uri: 'cities://Germany', name: 'German Cities' },
        { uri: 'cities://USA', name: 'US Cities' },
      ],
    }),
  }),
  {
    title: 'List of cities per country',
    description: 'List all bigger cities in a country',
  },
  async (uri, { country }) => {
    let cities = '';
    if (country === 'Germany') {
      cities = 'Berlin, Hamburg, Munich, Cologne, Frankfurt';
    } else if (country === 'USA') {
      cities = 'New York, Los Angeles, Chicago, Houston, Phoenix';
    } else {
      cities = 'Unknown country';
    }
    return {
      contents: [
        {
          uri: uri.href,
          text: await Promise.resolve(cities),
          json: cities.split(', '),
        },
      ],
    };
  }
);

server.registerPrompt(
  'product-description',
  {
    title: 'Product Description Generator',
    description: 'Generate a product description based on given parameters',
    argsSchema: {
      productName: z.string().describe('The name of the product.'),
      length: z
        .enum(['short', 'medium', 'long'])
        .optional()
        .describe('The desired length of the description.'),
    },
  },
  async (input) => {
    const { productName, length } = input;

    let promptInstructions = `Please generate a compelling product description.`;

    let promptCore = `The product is named "${productName}". `;
    promptCore += `Focus on its general benefits and appeal. `;

    let refinements = '';

    if (length) {
      let lengthGuidance = '';
      if (length === 'short')
        lengthGuidance = 'Keep it concise, around 1-2 sentences. ';
      if (length === 'medium')
        lengthGuidance = 'Aim for a paragraph of about 3-5 sentences. ';
      if (length === 'long')
        lengthGuidance =
          'Provide a detailed description, potentially multiple paragraphs. ';
      refinements += lengthGuidance;
    }

    const fullPrompt = `${promptInstructions}\n\nProduct Details:\n${promptCore}\n\nStyle and Constraints:\n${refinements.trim()}`;

    return {
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: fullPrompt,
          },
        },
      ],
    };
  }
);

export default server;
