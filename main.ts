import { mkdirSync, writeFileSync } from "node:fs";

// The roast below must stay byte-for-byte: the gate checks /output/entry.txt is 1-200 chars.
const ROAST =
  "My phone's battery dies faster than my motivation on a Monday — and still finds energy to show me ads at 1%.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ROAST, { encoding: "utf8" });
}

writeEntry();
