import { ChatOllama } from "@langchain/ollama";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";

async function sendRunnablePrompt(prompt, model = "llama3.2:1b") {
  const systemTemplate = `You are a doctor and answer in medical terms.`;

  const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", "{system}"],
    ["user", "answer in a concise manner."],
    ["user", "{question}"],
  ]);

  const chat = new ChatOllama({
    model,
  });

  const parser = new StringOutputParser();

  const llmChain = RunnableSequence.from([promptTemplate, chat, parser]);

  const response = await llmChain.invoke({
    question: prompt,
    system: systemTemplate,
  });
  return response;
}

const prompt = "My finger hurts. What can I do?";
const response = await sendRunnablePrompt(prompt);
console.log("Response from model (RunnableSequence):", response);
