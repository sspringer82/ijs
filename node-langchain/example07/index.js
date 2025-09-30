import express from "express";
import session from "express-session";
import { InMemoryChatMessageHistory } from "@langchain/core/chat_history";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import {
  RunnableSequence,
  RunnableWithMessageHistory,
} from "@langchain/core/runnables";
import { ChatOllama } from "@langchain/ollama";

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(
  session({
    secret: "t0p_5ecret",
    resave: false,
    saveUninitialized: true,
  })
);

const messageHistories = {};

const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "You are a helpful AI. Please explain the following animals in one sentence each.",
  ],
  ["placeholder", "{chat_history}"],
  ["human", "{input}"],
]);

const model = new ChatOllama({
  model: "llama3.2:1b",
});

const parser = new StringOutputParser();

const chain = RunnableSequence.from([prompt, model, parser]);

const withMessageHistory = new RunnableWithMessageHistory({
  runnable: chain,
  getMessageHistory: async (sessionId) => {
    if (messageHistories[sessionId] === undefined) {
      messageHistories[sessionId] = new InMemoryChatMessageHistory();
    }
    return messageHistories[sessionId];
  },
  inputMessagesKey: "input",
  historyMessagesKey: "chat_history",
});

app.post("/api/messages", async (request, response) => {
  try {
    const userMessage = request.body.message;
    const sessionId = request.sessionID;

    const config = {
      configurable: {
        sessionId,
      },
    };

    response.setHeader("Content-Type", "text/plain; charset=utf-8");

    const stream = await withMessageHistory.stream(
      { input: userMessage },
      config
    );

    for await (const chunk of stream) {
      response.write(chunk);
    }

    response.end();
  } catch (err) {
    console.error("Error in /api/messages:", err);
    response.status(500).send("Something went wrong.");
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
