import ollama from "ollama";

async function sendPrompt(prompt, model = "llama3.2:1b") {
  const response = await ollama.generate({
    model,
    prompt,
  });

  return response.response;
}

const prompt = "Explain the color red in one sentence.";
const response = await sendPrompt(prompt);
console.log("Response from model:", response);
