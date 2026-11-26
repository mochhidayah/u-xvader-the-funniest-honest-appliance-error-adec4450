// The Funniest Honest Appliance Error — entrypoint.
//
// A fridge reports its own failure in its own flat voice. The program
// composes exactly one line, checks it against the gate (UTF-8 text,
// 1 to 200 characters, not only whitespace, a single line), and writes
// it to /output/entry.txt for the judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { composeFaultLine, clampLine, fridgeCoolingFault } from "./src/deadpan.ts";

const OUT_PATH = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
const MAX_CHARS = 200;

function main(): void {
  // Clamp first so a future fault report can never blow the 200-char gate;
  // the fridge line itself is 96 chars and passes through untouched.
  const line = clampLine(composeFaultLine(fridgeCoolingFault), MAX_CHARS);
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`entry line must be 1..${MAX_CHARS} chars, got ${line.length}`);
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    throw new Error("entry line must be a single non-blank line");
  }
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, line, "utf8");
  console.log(`wrote ${line.length} chars to ${OUT_PATH}`);
}

main();
