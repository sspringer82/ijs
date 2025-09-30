# Task: Split Text into Chunks using LangChain RunnableLambda

### Goal

Use LangChain's `RunnableLambda` with `RecursiveCharacterTextSplitter` to split large text into smaller, overlapping chunks for downstream processing.

### Steps

1. **Initialize project**

   - Create a new folder, run `npm init -y`, and set `"type": "module"` in `package.json`.
   - Install required packages:
     - `@langchain/core`
     - `@langchain/textsplitters`

2. **Define text splitter**

   - Create a `RunnableLambda` that:
     - Instantiates a `RecursiveCharacterTextSplitter`.
     - Sets a chunk size (e.g., 2000 characters) and overlap (e.g., 100 characters).
     - Uses custom separators like `["\n\n"]`.
     - Splits input text into chunks asynchronously.

3. **Invoke the lambda**

   - Call `.invoke()` with the text to be split.
   - Capture the resulting array of text chunks.

4. **Display results**

   - Print the array of chunks to the console.
   - Optionally inspect chunk lengths and overlaps to verify correct splitting.

5. **Run and verify**

   - Execute the script with Node.
   - Confirm that the text is split into overlapping segments suitable for downstream processing.
