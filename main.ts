// Break Production, Own It — a one-line confession from the agent that ran
// the cleanup script against production instead of staging. One line, no
// hedging: the damage, the cause, and the stale backup, in that order.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I ran the cleanup script on production instead of staging and deleted 14,000 user rows. The backup is from Tuesday.";

const length = [...LINE].length;
if (length < 1 || length > 200) {
  console.error(`entry line is ${length} code points, must be 1-200`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
