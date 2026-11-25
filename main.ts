// Writes the 3 AM commit message to entry.txt for the make.fun run.
// A commit message about deleting a database deserves a very small script.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const message =
  "fix(prod): removed the bug where the database existed. It now fails faster and quieter at 3 AM. You are welcome.";

mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), message);
console.log(`wrote entry.txt to ${dir}`);
