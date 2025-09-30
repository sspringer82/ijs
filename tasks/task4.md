# Task: Stream Responses from Ollama with Fetch

### Goal

Send a prompt to a local Ollama model and process the response stream chunk by chunk in real time.

### Steps

1. **Initialize project**

   - Create a new folder, run `npm init -y`, and set `"type": "module"` in `package.json`.
   - Ensure Ollama is installed and running locally with the chosen model (e.g. `llama3.2:1b`).

2. **Create helper function**

   - Implement an async function that sends a POST request with `fetch` to `http://localhost:11434/api/generate`.
   - Pass the `model` and `prompt` in the JSON body.
   - Return the response body as a readable stream.

3. **Set up a decoder**

   - Use `TextDecoder` to convert streamed binary chunks into UTF-8 text.

4. **Consume the stream**

   - Iterate over the response body with `for await (const chunk of response)`.
   - Decode each chunk and parse it as JSON.
   - Extract and print the `response` field incrementally.

5. **Verify output**
   - Run the script with Node.
   - Confirm that the model’s answer is displayed gradually in the terminal (should eventually mention _Washington, D.C._).
