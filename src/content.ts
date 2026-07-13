export const profile = {
  name: "彭怡姿",
  role: "AI Agent / AI 应用实践",
  phone: "181-1313-9285",
  phoneRaw: "18113139285",
  email: "hahahi824@163.com",
  site: "https://niuniumi.github.io/",
  game: "https://niuniumi.github.io/ashen-pilgrimage/",
  gameRepo: "https://github.com/niuniumi/ashen-pilgrimage",
  direction: "AI Agent / AI 应用 / AI 产品助理 / AI 工具链实践 / AI 运营",
};

export const heroCopy = {
  eyebrow: "AI APPLICATIONS · WORKING PORTFOLIO",
  title: "让 AI 不只回答问题，也真正参与创造。",
  summary:
    "我关注 AI Agent 与 AI 应用，把模糊的想法拆成可执行的流程，再通过提示设计、原型构建、测试与迭代，把它做成可以体验的作品。",
  note: "从需求拆解，到可运行的原型。",
};

export const siteNavigation = [
  { label: "作品", href: "#work" },
  { label: "方法", href: "#approach" },
  { label: "背景", href: "#background" },
  { label: "联系", href: "#contact" },
];

export const workflow = [
  ["01", "先问清楚", "确认目标、使用场景、限制条件与真正需要被解决的问题。"],
  ["02", "再搭起来", "把提示、工具和界面组织成可运行的最小闭环，让想法尽快接受检验。"],
  ["03", "认真找错", "通过运行、截图与交互测试记录问题，不用“看起来能用”代替验收。"],
  ["04", "交付再复盘", "部署可访问成果，说明能力边界，并把反馈带进下一轮迭代。"],
] as const;

export const strengths = [
  "能把模糊需求拆成可执行步骤",
  "熟悉多模型与本地 AI 工具链",
  "能借助 AI 完成前端原型与排错",
  "具备光学、电子与工程系统训练",
];

export const projects = [
  {
    number: "01",
    tag: "AGENT PROTOTYPE",
    title: "多模型 AI Agent 构建",
    subtitle: "让不同模型各司其职，完成从理解任务到调用工具的协作。",
    meta: "2026.04—06 · 独立探索",
    description:
      "基于 Open Interpreter 搭建本地与云端混合推理 Agent，接入 Ollama 本地模型与 GPT、Claude、DeepSeek 等云端模型，探索代码执行、文件操作、脚本生成与自动化任务处理。",
    points: ["轻量任务优先调用本地模型", "复杂推理切换云端模型", "沉淀提示词与使用流程"],
    stack: ["Open Interpreter", "Ollama", "GPT", "Claude", "DeepSeek", "Python"],
    status: "流程演示 · 本地实践记录",
    tone: "cobalt",
  },
  {
    number: "02",
    tag: "PLAYABLE DEMO",
    title: "灰烬圣途 Ashen Pilgrimage",
    subtitle: "一次从世界观、机制设计到可玩 Demo 的 AI 协作开发实验。",
    meta: "2026.06—07 · 独立设计与 AI 协作开发",
    description:
      "以 AI 协作方式推进网页卡牌游戏：我负责方向、规则、开发指令和验收，通过多轮运行与截图 QA 修复战斗、地图、存档和响应式体验，最终部署为可访问版本。",
    points: ["世界观、角色与玩法机制", "卡牌、遗物、地图和战斗闭环", "截图 QA、回归测试与部署修复"],
    stack: ["Phaser 3", "Vite", "Canvas", "JavaScript", "GitHub Pages"],
    status: "可在线体验 · v2.0",
    tone: "vermilion",
    href: profile.game,
    repo: profile.gameRepo,
    images: ["/assets/ashen-battle.png", "/assets/ashen-menu.png"],
  },
  {
    number: "03",
    tag: "ENGINEERING PROJECT",
    title: "51 单片机光照度计",
    subtitle: "把光学、电路与嵌入式系统连成一次完整的工程验证。",
    meta: "2023.09—10 · 核心成员",
    description:
      "参与实时光照度测量系统设计，围绕光探测、信号调理、AD 采集和数据显示完成方案论证，并配合硬件搭建、系统调试与功能验证。",
    points: ["器件选型与电路方案论证", "原理图绘制与模块联调", "从传感输入到数据显示的验证"],
    stack: ["51 单片机", "光传感器", "信号调理", "PCB", "系统调试"],
    status: "课程工程 · 实物验证",
    tone: "leaf",
  },
];

export const experience = {
  company: "成都贝瑞光电科技有限公司",
  role: "光学元件工艺工程师助理",
  time: "2024.07—08",
  description:
    "参与光学元件加工、检测与质量控制流程，协助记录工艺参数、整理生产数据、编写技术文档，并参与异常分析和样品测试验证。",
};

export const education = {
  school: "四川大学",
  major: "光电信息科学与工程 · 本科",
  time: "2020.09—2026.06",
  detail: "2026 届本科毕业生。主修应用光学、光电子技术、模拟与数字电子技术、信号与系统、通信原理等。",
  thesis: "毕业设计：光学仿生微结构减反特性研究",
};

export const skills = {
  ai: ["Ollama", "Open WebUI", "Open Interpreter", "GPT", "Claude", "DeepSeek"],
  workflow: ["Claude Code", "Codex", "Prompt Engineering", "Workflow Design", "QA Feedback"],
  frontend: ["HTML", "CSS", "JavaScript", "Phaser 3", "Vite", "GitHub Pages"],
  engineering: ["Zemax", "Lumerical FDTD", "51 单片机", "PCB", "Premiere Pro"],
};

export const certificates = ["英语 CET-4 · 503", "CAAC 民用无人航空器操控执照"];
