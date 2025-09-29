import { OllamaEmbeddings } from "@langchain/ollama";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

const embeddings = new OllamaEmbeddings({ model: "nomic-embed-text" });
const vectorStore = new MemoryVectorStore(embeddings);

await vectorStore.addDocuments([
  { pageContent: "LangChain helps with RAG", metadata: { id: 1 } },
  { pageContent: "Embeddings are vector representations", metadata: { id: 2 } },
]);

const results = await vectorStore.similaritySearch(
  "What is retrieval augmented generation?",
  1
);
console.log(results[0].pageContent);
