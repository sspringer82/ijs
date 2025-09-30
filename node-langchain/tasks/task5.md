# Task: Stream Responses with LangChain and Ollama

### Goal

Use LangChain’s `RunnableSequence` with `ChatOllama` to stream model output chunk by chunk and print it directly to the console.

---

### Steps

1. **Initialize project**

   - Create a new folder, run `npm init -y`, and set `"type": "module"` in `package.json`.
   - Install required packages:
     - `@langchain/ollama`
     - `@langchain/core`
   - Ensure Ollama is installed and a model (e.g. `llama3.2:1b`) is running locally.

2. **Set up the chain**

   - Instantiate `ChatOllama` with the desired model.
   - Add a `StringOutputParser` to process raw model output.
   - Define a system message (`"You are a helpful assistant."`) and a user message placeholder (`"{question}"`).
   - Build a `ChatPromptTemplate` from these messages.
   - Combine prompt → model → parser into a `RunnableSequence`.

3. **Stream the output**

   - Call the chain with `.stream()` passing a `question`.
   - Iterate over the returned async stream with `for await`.
   - Write each chunk directly to the console.

4. **Verify behavior**
   - Run the script with Node.
   - Observe the model’s answer appearing gradually in the terminal (should eventually output _Washington, D.C._).

---
