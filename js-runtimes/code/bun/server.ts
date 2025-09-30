import { serve } from "bun";
import type { Request } from "bun";

const PORT = 3000;

serve({
  port: PORT,
  fetch(request: Request) {
    return new Response("Hello from Bun 🚀", {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  },
});

console.log(`Server running at http://localhost:${PORT}`);
