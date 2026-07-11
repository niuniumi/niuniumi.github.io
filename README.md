# 彭怡姿 · AI Applications Portfolio

面向 AI Agent / AI 应用方向机会的个人作品站。内容严格基于已核对的履历，展示 AI 工具链实践、AI 协作开发项目与光电工程背景。

线上地址：<https://niuniumi.github.io/>

## 本地运行

```powershell
pnpm install --frozen-lockfile
pnpm dev
```

本机若未将 Node 加入 `PATH`，请先将 Codex 内置 Node 目录加入当前 PowerShell 会话：

```powershell
$env:Path = "C:\Users\16224\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;$env:Path"
```

## 验证

```powershell
pnpm build
node qa/page-contract.mjs
node qa/deploy-contract.mjs
```

## 发布

推送到 `main` 会触发 `.github/workflows/deploy.yml`，由 GitHub Pages 构建并发布 `dist/`。项目不依赖 Netlify Functions、Netlify 构建或远程背景视频。
