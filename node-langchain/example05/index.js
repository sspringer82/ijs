import { ChatOllama } from "@langchain/ollama";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";

async function streamPrompt(prompt, model = "llama3.2:1b") {
  const systemTemplate = `You are a helpful assistant.`;
  const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", systemTemplate],
    ["user", "{question}"],
  ]);
  const chat = new ChatOllama({ model });
  const parser = new StringOutputParser();

  const chain = RunnableSequence.from([promptTemplate, chat, parser]);

  const stream = await chain.stream({ question: prompt });

  for await (const chunk of stream) {
    process.stdout.write(chunk);
  }
  console.log(); // Newline after streaming
}

const prompt = "What is a cat?";
await streamPrompt(prompt);
