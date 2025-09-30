# Task: Use the ollama JavaScript SDK

1. Initialize project

   - Create a new folder, run npm init -y, and set "type": "module" in package.json.
   - Install the official SDK with npm install ollama.
   - Ensure Ollama is installed and running locally with the desired model (e.g. llama3.2:1b).

2. Create helper function

   - Define an async function that uses ollama.generate() with the given model and prompt.
   - Return only the text part of the model’s response.

3. Create demo script

   - Import the helper function.
   - Call it with a test prompt like “What is the capital of the USA?”.
   - Print the model’s response.

4. Run and verify

   - Execute the script with Node.
   - Confirm that the model responds (should return Washington, D.C.).
