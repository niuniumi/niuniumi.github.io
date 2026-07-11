import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import assert from "node:assert/strict";

function readSource(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = join(directory, entry.name);
    return entry.isDirectory() ? readSource(file) : entry.name.endsWith(".tsx") || entry.name.endsWith(".ts") ? [readFileSync(file, "utf8")] : [];
  });
}

const source = readSource("src").join("\n");

for (const id of ["work", "approach", "background", "contact"]) {
  assert.match(source, new RegExp(`id="${id}"`), `missing #${id} section`);
}

assert.match(source, /彭怡姿/);
assert.doesNotMatch(source, /cloudfront\.net/);
