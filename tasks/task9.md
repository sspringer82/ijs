# Task: Build a LangGraph Agent with Ollama and MCP

### Goal

Create a LangGraph agent that can interact with multiple tools and resources via an MCP server, including currency conversion and product information.

### Steps

1. **Initialize project**

   - Create a new folder, run `npm init -y`, and set `"type": "module"` in `package.json`.
   - Install required packages:
     - `@langchain/langgraph`
     - `@langchain/mcp-adapters`
     - `@langchain/ollama`
     - `express`
     - `zod`

2. **Set up MCP server**

   - Create a server using `McpServer`.
   - Define tools, such as a currency converter with input validation using `zod`.
   - Define resources, e.g., a product price list accessible via a resource URI.
   - Define prompt templates that generate structured requests for specific tasks.
   - Start the server on a port (e.g., 8080) and connect it to an HTTP transport.

3. **Create client**

   - Instantiate a `MultiServerMCPClient` and connect it to your MCP server.
   - Retrieve available tools from the server.

4. **Initialize LangChain agent**

   - Create a `ChatOllama` model.
   - Create a LangGraph agent (`createReactAgent`) with the model and the retrieved tools.

5. **Send messages**

   - Prepare messages as a list with user and system roles.
   - Invoke the agent with the messages to perform tasks such as currency conversion.

6. **Handle responses**

   - Capture the agent’s response.
   - Print results to the console.
   - Handle any errors that occur during invocation.

7. **Run and verify**

   - Start both the MCP server and your client script.
   - Send requests to the agent (e.g., convert 100 EUR to USD).
   - Confirm that the agent uses the server tools correctly and returns accurate results.
