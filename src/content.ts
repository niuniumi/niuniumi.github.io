export const profile = {
  name: "彭怡姿",
  role: "AI Agent / AI 应用方向应届生",
  phone: "181-1313-9285",
  phoneRaw: "18113139285",
  email: "hahahi824@163.com",
  site: "https://niuniumi.github.io/",
  game: "https://ashen-pilgrimage-stage2.netlify.app/",
  direction: "AI Agent / AI 应用 / AI 产品助理 / AI 工具链实践 / AI 运营",
};

export const heroCopy = {
  eyebrow: "AI APPLICATIONS · WORKING PORTFOLIO",
  titleA: "把 AI 协作变成",
  titleB: "可验证的交付。",
  titleC: "",
  summary:
    "四川大学光电信息科学与工程本科背景，聚焦 AI Agent 与 AI 应用方向。擅长借助 Claude Code、Codex 等工具完成需求拆解、提示词设计、AI 辅助开发、运行测试、问题反馈与部署上线。",
};

export const siteNavigation = [
  { label: "作品", href: "#work" },
  { label: "方法", href: "#approach" },
  { label: "背景", href: "#background" },
  { label: "联系", href: "#contact" },
];

export const workflow = [
  ["01", "拆解", "明确目标、约束和验收边界"],
  ["02", "构建", "设计提示、搭建原型、组织工具链"],
  ["03", "校验", "运行测试、截图 QA、记录问题"],
  ["04", "交付", "部署可访问成果，并复盘下一轮迭代"],
] as const;

export const strengths = [
  "AI 工具链实践：Ollama、Open WebUI、Open Interpreter、多模型调用",
  "Vibe Coding 协作：需求拆解、提示词设计、AI 辅助代码生成、运行测试与反馈迭代",
  "前端基础理解：能借助 AI 工具完成页面搭建、样式调整与问题排查",
  "工程背景：光学、电子、电路、51 单片机、PCB 与工程系统训练",
];

export const projects = [
  {
    tag: "Agent Prototype",
    title: "多模型 AI Agent 构建",
    meta: "2026.04 - 2026.06 | 独立探索者",
    description:
      "基于 Open Interpreter 搭建本地与云端混合推理 Agent，接入 Ollama 本地模型与 GPT / Claude / DeepSeek 等云端模型，探索代码执行、文件操作、脚本生成与自动化任务处理。",
    points: ["本地模型处理轻量任务", "复杂推理切换云端模型", "沉淀 Agent 使用流程与提示词规范"],
    stack: ["Open Interpreter", "Ollama", "GPT", "Claude", "DeepSeek", "Python"],
  },
  {
    tag: "Playable Demo",
    title: "灰烬圣途 Ashen Pilgrimage",
    meta: "2026.06 | 独立设计与 AI 协作开发",
    description:
      "以 AI 协作开发方式，完成 Phaser 3 + Vite + Canvas 网页卡牌游戏 Demo 的设计、开发指令编写、测试反馈与线上部署。",
    points: ["世界观与角色机制设计", "卡牌、遗物、地图与战斗系统规划", "多轮截图 QA、交互测试与部署修复"],
    stack: ["Phaser 3", "Vite", "Canvas", "JavaScript", "Netlify"],
    href: profile.game,
  },
  {
    tag: "Hardware Project",
    title: "基于 51 单片机的光照度计设计",
    meta: "2023.09 - 2023.10 | 核心成员",
    description:
      "参与实时光照度测量系统设计，完成光探测模块、信号调理电路、AD 采集与数据显示模块方案设计，配合硬件搭建、系统调试和功能验证。",
    points: ["器件选型与电路方案论证", "原理图绘制与系统调试", "传感器系统和工程调试流程实践"],
    stack: ["51 单片机", "传感器", "信号调理", "PCB", "系统调试"],
  },
];

export const experience = {
  company: "成都贝瑞光电科技有限公司",
  role: "光学元件工艺工程师助理",
  time: "2024.07 - 2024.08",
  description:
    "参与光学元件加工、检测、质量控制等生产流程管理，协助完成工艺参数记录、生产数据整理、技术文档编写、异常分析和样品测试验证。",
};

export const education = {
  school: "四川大学",
  major: "光电信息科学与工程 | 本科",
  time: "2020.09 - 2026.06",
  detail: "2026 届本科应届毕业生，985 院校。主修应用光学、激光原理与技术、光电子技术、模拟/数字电子技术、信号与系统、通信原理等。",
  thesis: "毕业设计：光学仿生微结构减反特性研究",
};

export const skills = {
  ai: ["Ollama", "Open WebUI", "Open Interpreter", "GPT", "Claude", "DeepSeek"],
  workflow: ["Claude Code", "Codex", "Prompt Engineering", "Workflow Design", "QA Feedback"],
  frontend: ["HTML", "CSS", "JavaScript", "Phaser 3", "Vite", "Netlify"],
  engineering: ["Zemax", "Lumerical FDTD", "51 单片机", "PCB", "Office", "Premiere Pro"],
};

export const certificates = ["英语 CET-4：503", "CAAC 民用无人航空器操控执照"];
