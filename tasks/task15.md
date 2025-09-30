# Task: Use LangChain with Ollama and Retrieve Usage Metadata

### Goal

Create a small LangChain pipeline that uses Ollama to run a prompt and retrieve model usage metadata.

### Steps

1. **Initialize project**

   - Create a new folder, run `npm init -y`, and set `"type": "module"` in `package.json`.
   - Install required package:
     - `@langchain/ollama`

2. **Instantiate model**

   - Create a `ChatOllama` instance with the desired model (`llama3.2:1b`).

3. **Send a prompt**

   - Call `.invoke()` with a prompt string (e.g., `"Explain RAG in one sentence"`).

4. **Retrieve metadata**

   - Access `usage_metadata` from the model’s response to inspect token usage or other metrics.

5. **Run and verify**

   - Execute the script with Node.
   - Confirm that `usage_metadata` prints relevant information about the model usage.
