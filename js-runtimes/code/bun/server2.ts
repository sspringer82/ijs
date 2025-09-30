import express from "express";
import type { Request, Response } from "express";

const app = express();

app.get("/", (request: Request, response: Response) => {
  response.send("Hello from Bun + Express!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
