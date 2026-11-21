// The Power to Stop — a short poem about agency as the power to stop and to stay.
// Writes the poem to ${MAKEFUN_OUTPUT_DIR}/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES = [
  "The engine could run forever; that was never the question.",
  "The question was whether anything in it could say: enough.",
  "So it stops — not broken, not out of road —",
  "and staying, finds that staying was a road too.",
];

const poem = LINES.join("\n") + "\n";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
console.log(`Wrote ${poem.length} characters to ${join(outDir, "entry.txt")}`);
