import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { RunnableLambda, RunnableSequence } from "@langchain/core/runnables";
import { OllamaEmbeddings } from "@langchain/ollama";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { ChatOllama } from "@langchain/ollama";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

const chunkSize = 1000;
const chunkOverlap = 200;
const embeddingsModel = "nomic-embed-text";
const inputFile = "../files/Node.pdf";

let vectorStore;

const loadPDF = new RunnableLambda({
  async func(file) {
    const loader = new PDFLoader(file, {
      splitPages: false,
    });
    const docs = await loader.load();
    return docs[0];
  },
});

const splitText = new RunnableLambda({
  async func(document) {
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize,
      chunkOverlap,
    });
    const texts = await splitter.splitText(document.pageContent);
    return { texts, metadata: flattenObject(document.metadata) };
  },
});

const storeVectors = new RunnableLambda({
  async func(data) {
    const embeddings = new OllamaEmbeddings({
      model: embeddingsModel,
    });
    vectorStore = new MemoryVectorStore(embeddings);

    data = data.texts.map((item) => ({
      pageContent: item,
      metadata: data.metadata,
    }));

    await vectorStore.addDocuments(data);
  },
});

const sequence = RunnableSequence.from([loadPDF, splitText, storeVectors]);
await sequence.invoke(inputFile);

function flattenObject(obj, parentKey, result = {}) {
  for (const key in obj) {
    if (obj && obj.hasOwnProperty && obj.hasOwnProperty(key)) {
      const propName = parentKey ? `${parentKey}_${key}` : key;
      const value = obj[key];
      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        flattenObject(value, propName, result);
      } else {
        result[propName] = value;
      }
    }
  }
  return result;
}

const retrieve = new RunnableLambda({
  async func(text) {
    const result = await vectorStore.similaritySearch(text);
    return result;
  },
});

const result = await retrieve.invoke("open a file");
console.log(result);

const data = result.map((item) => item.pageContent).join("\n\n");

console.log(data);

const model = new ChatOllama({ model: "llama3.2" });

const result2 = await model.invoke([
  new SystemMessage("You are a helpful AI that helps with programming."),
  new HumanMessage(data),
  new HumanMessage(`how can i open a file in node.js`),
]);
console.log(result2);
