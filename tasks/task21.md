# Task: Use LangChain with Ollama and Runnable Sequences (with Error Handling)

### Goal

Demonstrate a LangChain pipeline using Ollama with proper error handling when invoking the model.

### Steps

1. **Initialize project**

   - Create a new folder, run `npm init -y`, and set `"type": "module"` in `package.json`.
   - Install required packages:
     - `@langchain/ollama`
     - `@langchain/core`

2. **Create helper function**

   - Instantiate a `ChatOllama` or `Ollama` model (`llama3.2:1b` by default).
   - Wrap the invocation in a `try/catch` block to catch API errors.

3. **Send a prompt**

   - Call `model.invoke()` with an input object containing a `question`.
   - Return or log the model response if successful.
   - Log a clear error message if the call fails.

4. **Create demo script**

   - Execute a sample prompt such as _“What is an elephant? Answer in one sentence.”_
   - Print the result or error.

5. **Run and verify**

   - Run the script with Node.
   - Confirm that either a valid one-sentence response is returned or an error message is printed.
