import { promises as fs } from "node:fs";

async function readFile() {
  try {
    const data = await fs.readFile("input.txt", "utf-8");
    console.log("File contents:\n", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

readFile();
