# Task: Store and Query Text Embeddings using LangChain and Ollama

### Goal

Use `OllamaEmbeddings` to convert text into embeddings and store them in a memory vector store. Perform similarity search queries on the stored embeddings.

### Steps

1. **Initialize project**

   - Create a new folder, run `npm init -y`, and set `"type": "module"` in `package.json`.
   - Install required packages:
     - `@langchain/ollama`
     - `langchain`

2. **Set up embeddings and vector store**

   - Instantiate `OllamaEmbeddings` with a chosen model (e.g., `'nomic-embed-text'`).
   - Create a `MemoryVectorStore` using the embeddings object.
   - Add documents to the vector store, each with `pageContent` and optional `metadata`.

3. **Query the vector store**

   - Call `similaritySearch()` with a query string and number of top results.
   - Capture the resulting documents ranked by similarity.

4. **Display results**

   - Print the most relevant document’s `pageContent` to the console.
   - Optionally inspect the metadata for additional information.

5. **Run and verify**

   - Execute the script with Node.
   - Confirm that the query returns the most semantically relevant document.
