# Task: Use LangChain with Ollama and Runnable Sequences (Parser Error Handling)

### Goal

Demonstrate how to safely handle errors when parsing model outputs with a `JsonOutputParser`.

### Steps

1. **Initialize project**

   - Create a new folder, run `npm init -y`, and set `"type": "module"` in `package.json`.
   - Install required packages:
     - `@langchain/ollama`
     - `@langchain/core`

2. **Create parser**

   - Instantiate a `JsonOutputParser` from `@langchain/core/output_parsers`.

3. **Handle parsing errors**

   - Wrap `parser.parse()` in a `try/catch` block.
   - Log an informative error message if parsing fails.

4. **Test the parser**

   - Provide invalid JSON input like `'{"ok:true}'`.
   - Confirm that the error is caught and logged.
