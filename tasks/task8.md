# Task: Use LangChain with Ollama and Tools

### Goal

Create a LangChain pipeline where the AI can call external tools to fetch information, then integrate tool responses into its conversation.

### Steps

1. **Initialize project**

   - Create a new folder, run `npm init -y`, and set `"type": "module"` in `package.json`.
   - Install required packages:
     - `@langchain/ollama`
     - `@langchain/core`
     - `zod`

2. **Define a tool**

   - Create a tool using `tool()` that takes an input (e.g., `animal`) and returns a result (e.g., a fun fact about that animal).
   - Define a schema using `zod` for input validation.
   - Provide a name and description for the tool.

3. **Initialize model with tools**

   - Instantiate a `ChatOllama` model.
   - Bind the tool(s) to the model so it can call them during conversation.

4. **Prepare messages**

   - Create initial messages including:
     - A `SystemMessage` to instruct the AI about available tools.
     - A `HumanMessage` containing the user query (e.g., asking about an animal).

5. **Invoke model and handle tool calls**

   - Send messages to the model and capture its response.
   - Check for any tool calls in the response.
   - Invoke the called tools and append the results to the message list.

6. **Generate final response**

   - Send the updated messages back to the model to produce the final output.
   - Print the final response to the console.

7. **Run and verify**

   - Execute the script with Node.
   - Confirm that the AI uses the tool to fetch facts and includes them in its response.
