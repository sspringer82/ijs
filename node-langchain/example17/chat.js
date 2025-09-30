import { ChatOllama } from "@langchain/ollama";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";

export async function sendRunnablePrompt(prompt, model = "llama3.2:1b") {
  const chat = new ChatOllama({
    model,
  });

  const parser = new StringOutputParser();

  const systemTemplate = `You are a helpful assistant.`;

  const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", systemTemplate],
    ["user", "{question}"],
  ]);

  const llmChain = RunnableSequence.from([promptTemplate, chat, parser]);

  const response = await llmChain.invoke({ question: prompt });
  return response;
}
