import { RunnableLambda } from "@langchain/core/runnables";
import { OllamaEmbeddings } from "@langchain/ollama";

const model = "nomic-embed-text";

const getEmbeddings = new RunnableLambda({
  async func(text) {
    const embeddings = new OllamaEmbeddings({
      model,
    });
    const embeddedDocuments = await embeddings.embedDocuments([text]);
    return embeddedDocuments;
  },
});

const result = await getEmbeddings.invoke("cat");

console.log(result[0].length);
console.log(result);
