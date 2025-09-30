import { Ollama } from "@langchain/ollama";
import { InMemoryCache } from "@langchain/core/caches";
import crypto from "crypto";

class SecureInMemoryCache extends InMemoryCache {
  async key(key) {
    return crypto.createHash("sha256").update(key).digest("hex");
  }
}

const model = new Ollama({
  model: "llama3.2",
  cache: new SecureInMemoryCache(),
});

console.time();
const res = await model.invoke("Tell me a joke");
console.log(res);
console.timeEnd();

console.time();
const res2 = await model.invoke("Tell me a joke");
console.log(res2);
console.timeEnd();
