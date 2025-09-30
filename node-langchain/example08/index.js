import { ChatOllama } from "@langchain/ollama";
import { tool } from "@langchain/core/tools";
import { z } from "zod/v4";
import { SystemMessage, HumanMessage } from "@langchain/core/messages";

const getAnimalFact = tool(
  async ({ animal }) => {
    console.log(`Tool called with animal: ${animal}`);
    const facts = {
      cow: "Cows have almost 360° panoramic vision.",
      chicken: "Chickens can remember over 100 different faces.",
      cat: "Cats have whiskers on the backs of their front legs.",
    };
    return facts[animal.toLowerCase()] ?? `No fact found for ${animal}`;
  },
  {
    name: "getAnimalFact",
    description: "Get a fun fact about a given animal",
    schema: z.object({
      animal: z.string().describe("The type of animal to get a fact about"),
    }),
  }
);

const toolsByName = {
  getAnimalFact,
};

const model = new ChatOllama({
  model: "llama3.2:1b",
});
const tools = [getAnimalFact];
const modelWithTools = model.bindTools(tools);

const messages = [
  new SystemMessage(
    "You are a helpful AI that has access to some tools. Use them! If you get info from a tool, only use this information and do NOT add anything else"
  ),
  new HumanMessage("Tell me something about chickens."),
];

try {
  const response = await modelWithTools.invoke(messages);

  for (const toolCall of response.tool_calls) {
    const selectedTool = toolsByName[toolCall.name];
    const toolMessage = await selectedTool.invoke(toolCall);
    messages.push(toolMessage);
  }

  const finalResponse = await modelWithTools.invoke(messages);

  console.log(finalResponse.content);
} catch (error) {
  console.error("Error during model invocation:", error);
}
