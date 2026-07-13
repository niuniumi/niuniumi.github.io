import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import assert from "node:assert/strict";

function readSource(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = join(directory, entry.name);
    return entry.isDirectory()
      ? readSource(file)
      : /\.(tsx|ts|css)$/.test(entry.name)
        ? [readFileSync(file, "utf8")]
        : [];
  });
}

const source = readSource("src").join("\n");
const html = readFileSync("index.html", "utf8");

for (const id of ["work", "approach", "background", "contact"]) {
  assert.match(source, new RegExp(`id="${id}"`), `missing #${id} section`);
}

assert.match(source, /彭怡姿/);
assert.match(source, /让 AI 不只回答问题，也真正参与创造/);
assert.match(source, /看看我是怎么做的/);
assert.match(source, /多模型 AI Agent 构建/);
assert.match(source, /灰烬圣途 Ashen Pilgrimage/);
assert.match(source, /51 单片机/);
assert.match(source, /aria-label="AI Agent 协作流程演示"/);
assert.match(source, /aria-live="polite"/);
assert.match(source, /prefers-reduced-motion/);
assert.match(
  source,
  /\.workflow-section\s*\{[^}]*overflow:\s*clip/s,
  "offscreen workflow motion must not create horizontal page overflow",
);
assert.match(
  source,
  /navigator\.clipboard\.writeText\(value\)/,
  "clipboard rejection must fall back to the legacy copy path",
);
assert.match(source, /await Promise\.race/, "clipboard writes need a timeout in embedded browsers");
assert.match(source, /复制失败，请手动选择邮箱/, "copy control needs a visible failure state");
assert.doesNotMatch(source, /cloudfront\.net/);
assert.doesNotMatch(source, /ashen-pilgrimage-stage2\.netlify\.app/);
assert.doesNotMatch(html, /mcp\.figma\.com\/mcp\/html-to-design\/capture\.js/);
