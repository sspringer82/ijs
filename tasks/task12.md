# Task: Generate Text Embeddings using LangChain RunnableLambda and Ollama

### Goal

Use LangChain's `RunnableLambda` together with `OllamaEmbeddings` to convert text into numerical embeddings for downstream processing.

### Steps

1. **Initialize project**

   - Create a new folder, run `npm init -y`, and set `"type": "module"` in `package.json`.
   - Install required packages:
     - `@langchain/core`
     - `@langchain/ollama`

2. **Create embeddings lambda**

   - Define a `RunnableLambda` that:
     - Instantiates `OllamaEmbeddings` with a chosen model (e.g., `'nomic-embed-text'`).
     - Calls `.embedDocuments()` with an array containing the input text.
     - Returns the embeddings.

3. **Invoke the lambda**

   - Call `.invoke()` on the lambda with a sample text (e.g., `'The weather is nice in New York.'`).
   - Capture the returned embeddings array.

4. **Display results**

   - Print the length of the first embedding vector to confirm dimensions.
   - Optionally, print the entire embeddings array to inspect the values.

5. **Run and verify**

   - Execute the script with Node.
   - Confirm that the text is converted into a numerical embedding vector.
