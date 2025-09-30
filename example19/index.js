import { ChatOllama } from "@langchain/ollama";

const model = new ChatOllama({
  model: "llama3.2:1b",
  numPredict: 32, // limit output
});

const res = await model.invoke(
  "What is a cat? answer very briefly and in one sentence."
);
console.log(res.content);
