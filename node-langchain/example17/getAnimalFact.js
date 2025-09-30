import { tool } from '@langchain/core/tools';
import { z } from 'zod/v4';

export const getAnimalFact = tool(
  async ({ animal }) => {
    console.log(`Tool called with animal: ${animal}`);
    const facts = {
      cow: 'Cows have almost 360° panoramic vision.',
      chicken: 'Chickens can remember over 100 different faces.',
      cat: 'Cats have whiskers on the backs of their front legs.',
    };
    return facts[animal.toLowerCase()] ?? `No fact found for ${animal}`;
  },
  {
    name: 'getAnimalFact',
    description: 'Get a fun fact about a given animal',
    schema: z.object({
      animal: z.string(),
    }),
  }
);
