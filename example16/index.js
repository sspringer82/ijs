import { ChatOllama } from "@langchain/ollama";

const model = new ChatOllama({ model: "granite3.1-dense:latest" });

const start = Date.now();
const stream = await model.stream("Tell me a chuck norris joke");
let firstTokenTime = false;
for await (const chunk of stream) {
  if (!firstTokenTime) {
    console.log("First token latency:", Date.now() - start, "ms");
    firstTokenTime = true;
  }
  process.stdout.write(chunk.content);
}
console.log("\nTotal latency:", Date.now() - start, "ms");
