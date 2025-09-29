async function sendPrompt(prompt, model = "llama3.2:1b") {
  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      prompt,
    }),
  });

  return response.body;
}

const decoder = new TextDecoder("utf-8");

const response = await sendPrompt("What is a tree?");

for await (const chunk of response) {
  const data = decoder.decode(chunk, { stream: true });
  const obj = JSON.parse(data);
  process.stdout.write(obj.response);
}
console.log();
