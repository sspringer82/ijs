# Task: Build a Chat API with LangChain, Ollama, and Session-based History

### Goal

Create an Express API that allows users to chat with an AI, maintaining session-specific conversation history using LangChain and Ollama.

### Steps

1. **Initialize project**

   - Create a new folder, run `npm init -y`, and set `"type": "module"` in `package.json`.
   - Install required packages:
     - `express`
     - `express-session`
     - `@langchain/ollama`
     - `@langchain/core`

2. **Set up Express server**

   - Create an Express app and configure JSON parsing and static file serving.
   - Serve a simple frontend from the `public` directory.
   - Add `express-session` middleware to handle user sessions with a secret key.

3. **Set up message histories**

   - Use an in-memory object to store chat histories keyed by session ID.
   - Ensure each session initializes its own `InMemoryChatMessageHistory` on first access.

4. **Define prompt template**

   - Create a `ChatPromptTemplate` with:
     - A system message instructing the AI to provide concise animal explanations.
     - A placeholder for chat history.
     - A slot for new user input.

5. **Initialize model and parser**

   - Instantiate `ChatOllama` with the chosen model (default `llama3.2:1b`).
   - Use `StringOutputParser` to convert responses into plain text.

6. **Build chain and wrap with history**

   - Combine prompt → model → parser into a `RunnableSequence`.
   - Wrap it in `RunnableWithMessageHistory`:
     - Retrieve session-specific history.
     - Specify input and history keys.

7. **Create API endpoint**

   - Add a POST route `/api/messages` to handle incoming messages.
   - Retrieve the session ID from the request.
   - Stream the response from the chain to the client chunk by chunk.
   - Handle errors and set appropriate HTTP response headers.

8. **Run the server**

   - Start the Express server on port 3000.
   - Confirm it is accessible at `http://localhost:3000`.

9. **Test chat session**

   - Send multiple messages in the same session.
   - Confirm that responses are context-aware and maintain history across messages.
