# Task: Call a Local Ollama Model

1. Initialize project

   - Create a new folder, run npm init -y, and set "type": "module" in package.json.
   - Ensure Ollama is installed and a model (e.g. llama3.2:1b) is running locally.

2. Create helper function

   - Write an async function that sends a POST request with fetch to http://localhost:11434/v1/chat/completions.
   - Include headers (Content-Type, Authorization) and a JSON body with the prompt and model name.
   - Handle errors if the response is not OK.
   - Extract and return the text from the model’s response.

3. Create a demo script

   - Import the helper function.
   - Call it with a test prompt like “What is the capital of the USA?”.
   - Print the model’s response.

4. Run and verify
   - Execute the script with Node.
   - Confirm that the model responds (should return Washington, D.C.).
