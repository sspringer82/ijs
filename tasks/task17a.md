# Task: Test LangChain Runnable with Ollama

### Goal

Write automated tests for a LangChain pipeline using Ollama that applies a prompt template, runs the model, and parses the output.

### Steps

1. **Initialize project**

   - Ensure `"type": "module"` is set in `package.json`.
   - Install required packages:
     - `@langchain/ollama`
     - `@langchain/core`
     - Node's built-in `node:test` module (or another test framework of your choice).

2. **Create helper function**

   - Define `sendRunnablePrompt` that:
     - Instantiates `ChatOllama`.
     - Sets up a `StringOutputParser`.
     - Builds a `ChatPromptTemplate` for system and user messages.
     - Combines prompt → model → parser into a `RunnableSequence`.
     - Invokes the sequence with the given prompt.

3. **Write test cases**

   - Verify that simple prompts return non-empty strings.
   - Check that sequential calls do not throw errors.
   - Test explicit model parameter handling.
   - Ensure empty prompts are handled gracefully.
   - Optionally mock `ChatOllama` for deterministic tests.

4. **Run tests**

   - Execute `node --test` or your test runner.
   - Confirm that all assertions pass.
