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
    "我擅长在 AI 协作中承担目标定义、方向判断与质量验收：把还不够清楚的想法拆成可执行步骤，组织模型、工具与反馈回路，再通过原型、测试和迭代，把它推进成可以体验、可以验证的作品。",
  note: "会提问、会判断，也会把结果推进到上线。",
};

export const workflowCopy = {
  titleLead: "AI 可以加速执行，",
  titleEmphasis: "人的判断决定方向。",
  summary:
    "持续的 AI 协作实践让我更明确：高质量不是一次生成出来的，而是在目标、风格、内容、交互与验证之间不断校准出来的。",
  annotation: "每一步，都留下下一步能用的证据。",
};

export const profileCopy = {
  titleLead: "既能把问题想清楚，",
  titleEmphasis: "也愿意把结果做出来。",
  summary:
    "光学与电子训练让我重视系统、误差和验证；持续的 AI 实践，则让我形成从需求判断、工作流设计到原型、测试和部署的完整习惯。",
  opportunity:
    "希望参与 AI Agent、AI 应用与 AI 产品方向的工作。相比单纯“会用工具”，我更擅长定义目标、组织协作、校准质量，并把结果推进到可体验、可验证的状态。",
  toolsTitle: "工具不是标签，而是把想法做成结果的路径。",
};

export const contactCopy = {
  summary:
    "如果你在寻找一个能把问题想清楚、会与 AI 共同推进、又对结果保持判断的人，欢迎从一个具体的问题聊起。这里的每件作品，都可以继续打开、体验和讨论。",
};

export const siteNavigation = [
  { label: "作品", href: "#work" },
  { label: "方法", href: "#approach" },
  { label: "背景", href: "#background" },
  { label: "联系", href: "#contact" },
];

export const workflow = [
  ["01", "把真正的问题问出来", "先确认目标、使用场景与限制，避免在一个错误方向上快速执行。"],
  ["02", "把方向变成可执行任务", "拆解提示、工具、界面与验收节点，让 AI 协作成为连续流程。"],
  ["03", "在真实体验里持续校准", "通过运行、截图和交互测试发现偏差，不用“看起来能用”代替验收。"],
  ["04", "把结果交付到真实环境", "完成修复、部署与回归验证，再把反馈带进下一轮迭代。"],
] as const;

export const strengths = [
  {
    title: "目标感与判断力",
    detail: "能从模糊需求中抓住真正目标，也能在方案偏离时及时校准。",
  },
  {
    title: "AI 协作与组织力",
    detail: "会把模型、工具、提示与人工验收组织成连续的工作流。",
  },
  {
    title: "从原型到上线",
    detail: "不止停在概念展示，能推动作品完成测试、修复与部署。",
  },
  {
    title: "跨学科整合力",
    detail: "把理工科的系统思维、内容表达与视觉感受放进同一条产品链路。",
  },
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
    points: ["拆分本地与云端模型职责", "设计工具调用与任务路由", "保留人工校验与复盘节点"],
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
    points: ["从叙事与机制推进到可玩闭环", "用截图 QA 驱动视觉与交互修复", "完成响应式、存档与部署验证"],
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
