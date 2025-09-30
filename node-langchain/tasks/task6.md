# Task: Maintain Chat History with LangChain and Ollama

### Goal

Build a LangChain pipeline that keeps track of conversation history per session, allowing context-aware responses from the model.

### Steps

1. **Initialize project**

   - Create a new folder, run `npm init -y`, and set `"type": "module"` in `package.json`.
   - Install required packages:
     - `@langchain/ollama`
     - `@langchain/core`

2. **Set up message storage**

   - Use an in-memory chat history to store messages per session.
   - Ensure each session has its own message list.

3. **Define prompt with history**

   - Include a system instruction describing the AI’s role.
   - Add a placeholder for the chat history.
   - Add a slot for new user input.

4. **Initialize model and parser**

   - Instantiate `ChatOllama` with the desired model (e.g., `llama3.2:1b`).
   - Add a `StringOutputParser` to convert model responses into plain text.

5. **Build a chain**

   - Sequence together the prompt → model → parser using `RunnableSequence`.

6. **Wrap with message history handling**

   - Use `RunnableWithMessageHistory` to automatically retrieve and update session history.
   - Specify which input represents new user messages and where to inject previous messages.

7. **Configure the session**

   - Set a session ID to track conversation history.
   - Optionally pre-fill with some initial messages (both human and AI).

8. **Stream responses with history**

   - Send a prompt through the history-aware chain.
   - Stream the output to the console.
   - Repeat with another prompt to observe context-aware, session-based responses.

9. **Run and verify**

   - Execute the script with Node.
   - Confirm that subsequent responses take previous messages into account.
