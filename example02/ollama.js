import ollama from 'ollama';

async function sendPrompt(prompt, model = 'llama3.2:1b') {
  const response = await ollama.generate({
    model,
    prompt,
  });

  return response.response;
}

const prompt = 'What is the capital of the USA?';
const response = await sendPrompt(prompt);
console.log('Response from model:', response);
