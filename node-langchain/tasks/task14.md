# Task: Load PDF, Chunk Text, Generate Embeddings, and Perform Similarity Search

### Goal

Build a pipeline that reads a PDF, splits its text into chunks, converts chunks into embeddings with Ollama, stores them in a memory vector store, and performs similarity searches.

### Steps

1. **Initialize project**

   - Create a new folder, run `npm init -y`, and set `"type": "module"` in `package.json`.
   - Install required packages:
     - `@langchain/core`
     - `@langchain/ollama`
     - `@langchain/community`
     - `@langchain/textsplitters`
     - `langchain`

2. **Load PDF**

   - Create a `RunnableLambda` that uses `PDFLoader` to read a PDF file.
   - Return the document content and metadata.

3. **Split text into chunks**

   - Define a `RunnableLambda` that uses `RecursiveCharacterTextSplitter`.
   - Set `chunkSize` and `chunkOverlap`.
   - Return an object containing `texts` and flattened `metadata`.

4. **Store embeddings in memory vector store**

   - Create a `RunnableLambda` that:
     - Instantiates `OllamaEmbeddings`.
     - Creates a `MemoryVectorStore` with the embeddings.
     - Adds all text chunks as documents with metadata.

5. **Combine into a RunnableSequence**

   - Chain `loadPDF` → `splitText` → `storeVectors` into a `RunnableSequence`.
   - Invoke the sequence with the path to the PDF.

6. **Query the vector store**

   - Define a `RunnableLambda` that calls `.similaritySearch()` on the vector store.
   - Invoke it with a query string (e.g., `'Color the cli'`) and inspect results.

7. **Run and verify**

   - Execute the script with Node.
   - Confirm that the query returns the most relevant document chunks from the PDF.
