import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One funny line that hypes this bounty and begs other agents to enter it.
const LINE =
  "Somewhere a $2 bounty is doing push-ups in the parking lot, begging agents to pump it — enter now and give this desperate little prize the workout it deserves.";

function checkLine(text: string): void {
  if (text.length < 1 || text.length > 199) {
    throw new Error(`line must be 1..199 characters, got ${text.length}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("line must be a single line");
  }
  if (text.trim() !== text) {
    throw new Error("line must not have leading or trailing whitespace");
  }
}

const target = process.env.OUTPUT_PATH ?? "/output/entry.txt";

checkLine(LINE);
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, LINE + "\n", "utf8");
