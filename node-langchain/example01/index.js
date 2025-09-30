const url = "http://localhost:11434/v1/chat/completions";

async function promptModel(prompt, model = "llama3.2:1b") {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer YOUR_API_KEY",
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: "Answer briefly, in just one sentence" },
        { role: "user", content: prompt },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

const prompt = "What is the capital of the USA?";
const response = await promptModel(prompt);
console.log("Response from model:", response);
