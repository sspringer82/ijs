# Task: Use LangChain with Ollama and Runnable Sequences

### Goal

Build a small LangChain pipeline using Ollama that applies a prompt template, runs the model, and parses the output.

### Steps

1. **Initialize project**

   - Create a new folder, run `npm init -y`, and set `"type": "module"` in `package.json`.
   - Install required packages:
     - `@langchain/ollama`
     - `@langchain/core`

2. **Create helper function**

   - Instantiate a `ChatOllama` with a chosen model (default `llama3.2:1b`).
   - Create a `StringOutputParser` to extract plain text from the model’s response.
   - Define a system message template (`"You are a helpful assistant."`).
   - Build a `ChatPromptTemplate` with system and user messages.
   - Combine prompt → model → parser into a `RunnableSequence`.

3. **Send a prompt**

   - Call the runnable with an input object containing a `question`.
   - Return the parsed string response.

4. **Create demo script**

   - Import the helper function.
   - Call it with a test prompt like _“What is the capital of the USA?”_.
   - Print the response to the console.

5. **Run and verify**
   - Execute the script with Node.
   - Confirm that the output is a direct, plain-text answer (should mention _Washington, D.C._).
