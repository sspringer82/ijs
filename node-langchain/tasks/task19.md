# Task: Use LangChain with Ollama and Runnable Sequences with Output Limiting

### Goal

Demonstrate how to use LangChain's `ChatOllama` model with a token limit to restrict the length of the generated output.

### Steps

1. **Initialize project**

   - Create a new folder, run `npm init -y`, and set `"type": "module"` in `package.json`.
   - Install required packages:
     - `@langchain/ollama`
     - `@langchain/core`

2. **Instantiate the ChatOllama model**

   - Set the model to `"llama3.2:1b"`.
   - Use the `numPredict` parameter to limit the number of tokens the model can generate (e.g., `10`).

3. **Send a prompt**

   - Call `invoke()` with a simple question, e.g., `"What is a cat?"`.
   - The model will return a short answer limited to the specified token count.

4. **Run and verify**

   - Execute the script with Node.
   - Check that the output is concise and does not exceed the token limit.
