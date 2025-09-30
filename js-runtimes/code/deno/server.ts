import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import type { Request } from "https://deno.land/std@0.224.0/http/server.ts";

const PORT = 3000;

console.log(`Server running at http://localhost:${PORT}`);

await serve(
  (request: Request) => {
    return new Response("Hello from Deno 🚀", {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  },
  { port: PORT }
);
