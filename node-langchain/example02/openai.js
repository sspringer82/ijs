import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "http://localhost:11434/v1",
  apiKey: "none",
});

async function sendPrompt(prompt, model = "llama3.2:1b") {
  const response = await client.chat.completions.create({
    model,
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
}

const prompt = "What is the capital of the USA?";
const response = await sendPrompt(prompt);
console.log("Response from model:", response);
