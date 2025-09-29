import { ChatOllama } from "@langchain/ollama";

const model = new ChatOllama({
  model: "llama3.2",
});

const res = await model.invoke("Explain RAG (in ai) in one sentence");
console.log(res);
