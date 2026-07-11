import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const workflow = readFileSync(".github/workflows/deploy.yml", "utf8");

for (const token of [
  "pages: write",
  "id-token: write",
  "pnpm install --frozen-lockfile",
  "pnpm build",
  "actions/upload-pages-artifact",
  "path: ./dist",
  "actions/deploy-pages",
]) {
  assert.ok(workflow.includes(token), `missing ${token}`);
}
