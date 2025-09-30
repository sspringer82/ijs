# Task: Load and Process Documents using LangChain RunnableLambda

### Goal

Use LangChain's `RunnableLambda` to load and process content from different sources: Markdown files, PDF files, and web pages.

### Steps

1. **Initialize project**

   - Create a new folder, run `npm init -y`, and set `"type": "module"` in `package.json`.
   - Install required packages:
     - `@langchain/core`
     - `markdown-to-txt`
     - `@langchain/community`
     - `cheerio`

2. **Create Markdown loader**

   - Define a `RunnableLambda` that:
     - Reads a Markdown file using `fs/promises.readFile`.
     - Converts it to plain text using `markdown-to-txt`.
     - Handles any read errors.
   - Invoke the lambda with the Markdown file path and log the result.

3. **Create PDF loader**

   - Define a `RunnableLambda` that:
     - Uses `PDFLoader` to load PDF content.
     - Optionally disables page splitting (`splitPages: false`).
     - Returns the first document loaded.
   - Invoke the lambda with a PDF file path and log the result.

4. **Create web page loader**

   - Define a `RunnableLambda` that:
     - Fetches HTML content from a URL.
     - Loads it into `cheerio` for parsing.
     - Extracts text from a given CSS selector (default to `body`).
     - Returns the cleaned text.
   - Invoke the lambda with a URL and optional selector, then log the result.

5. **Run and verify**

   - Execute each script with Node.
   - Confirm that:
     - Markdown is converted to plain text.
     - PDF content is read correctly.
     - Web pages return the desired text content.
