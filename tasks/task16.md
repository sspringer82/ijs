# Task: Measure Stream Responses from Ollama with LangChain

### Goal

Create a LangChain pipeline using Ollama that streams model output token by token and measures latency.

### Steps

1. **Initialize project**

   - Create a new folder, run `npm init -y`, and set `"type": "module"` in `package.json`.
   - Install required package:
     - `@langchain/ollama`

2. **Instantiate model**

   - Create a `ChatOllama` instance with the chosen model (`llama3.2:1b`).

3. **Stream prompt**

   - Call `.stream()` with a prompt (e.g., `"Tell me a joke about chickens"`).
   - Iterate over the stream to receive chunks as they are generated.

4. **Measure latency**

   - Record the start time before streaming.
   - Print the time when the first token arrives.
   - Print total latency after the stream ends.

5. **Run and verify**

   - Execute the script with Node.
   - Observe the streaming output and latency measurements in the console.
