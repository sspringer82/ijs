# Task: Use LangChain with Ollama and Runnable Sequences (Chain Error Handling)

### Goal

Demonstrate how to safely handle errors when executing a LangChain pipeline (RunnableSequence) with Ollama.

### Steps

1. **Initialize project**

   - Create a new folder, run `npm init -y`, and set `"type": "module"` in `package.json`.
   - Install required packages:
     - `@langchain/ollama`
     - `@langchain/core`

2. **Create chain**

   - Instantiate a `ChatOllama` model.
   - Build a `ChatPromptTemplate` for system and user messages.
   - Add a `StringOutputParser`.
   - Combine them into a `RunnableSequence`.

3. **Handle chain errors**

   - Wrap `llmChain.invoke()` in a `try/catch` block.
   - Log an informative error message if execution fails.

4. **Test the chain**

   - Provide a sample question like `"elephant"`.
   - Confirm that errors are caught and logged without crashing.
