import { createServer } from "node:http";

const PORT = 3000;

const server = createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("Hello from Node.js 🚀");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
