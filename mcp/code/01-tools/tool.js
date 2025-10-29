import { tool } from '@langchain/core/tools';
import { z } from 'zod';

export const currencyConverter = tool(
  async ({ from, to, amount }) => {
    const rate = await Promise.resolve(0.85);
    if (from === 'USD' && to === 'EUR') {
      return (amount * rate).toFixed(2);
    } else if (from === 'EUR' && to === 'USD') {
      return (amount / rate).toFixed(2);
    } else {
      throw new Error('Invalid currency conversion');
    }
  },
  {
    name: 'currency_converter',
    description: 'Converts EUR to USD or USD to EUR.',
    schema: z.object({
      from: z.enum(['USD', 'EUR']),
      to: z.enum(['USD', 'EUR']),
      amount: z.coerce.number(),
    }),
  }
);
