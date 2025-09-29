import ollama from "ollama";

const response = await ollama.chat({
  model: "llama3.2-vision",
  messages: [
    {
      role: "user",
      content: "Describe the image in detail",
      images: ["../files/cat.jpg"],
    },
  ],
});

console.log(response);
