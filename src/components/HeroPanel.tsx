import { ArrowDownRight, CheckCircle, CursorClick, PaperPlaneTilt } from "@phosphor-icons/react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { useState } from "react";
import { heroCopy, profile } from "../content";

const agentStages = [
  { key: "理解", role: "Planner", detail: "拆解目标与约束" },
  { key: "行动", role: "Coder", detail: "调用工具执行" },
  { key: "校验", role: "Critic", detail: "检查结果并反馈" },
];

export function HeroPanel() {
  const [activeStage, setActiveStage] = useState(0);
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 24 });
  const layerX = useTransform(smoothX, [-0.5, 0.5], reducedMotion ? [0, 0] : [-9, 9]);
  const layerY = useTransform(smoothY, [-0.5, 0.5], reducedMotion ? [0, 0] : [-7, 7]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" />{heroCopy.eyebrow}</p>
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.56, ease: [0, 0, 0.2, 1] }}
        >
          让 AI 不只<br />回答问题，<br /><em>也真正参与创造。</em>
        </motion.h1>
        <p className="hero-summary">{heroCopy.summary}</p>
        <div className="hero-actions">
          <a className="button-primary" href="#work">看看我是怎么做的 <ArrowDownRight size={19} weight="bold" /></a>
          <a className="button-text" href={`mailto:${profile.email}`}>直接联系我 <span aria-hidden="true">↗</span></a>
        </div>
        <p className="hero-note"><CursorClick size={17} /> {heroCopy.note}</p>
      </div>

      <motion.div
        className="workbench"
        onPointerMove={handlePointerMove}
        onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}
        style={{ x: layerX, y: layerY }}
        aria-label="AI Agent 协作流程演示"
      >
        <div className="workbench-bar">
          <span><i /> WORKING LOG · 2026</span>
          <span>v2.1 / HUMAN IN THE LOOP</span>
        </div>

        <motion.article className="prompt-sheet" whileHover={reducedMotion ? undefined : { y: -5, rotate: -0.6 }}>
          <div className="sheet-kicker"><PaperPlaneTilt size={16} /> Prompt 正在优化中…</div>
          <p>目标：把一个模糊想法，整理成可以测试的产品原型。</p>
          <ul>
            <li>先确认使用场景与限制</li>
            <li>再拆成模型可以执行的步骤</li>
            <li>保留人工判断与验收节点</li>
          </ul>
          <strong>让 AI 先理解，再一起创造。</strong>
        </motion.article>

        <div className="agent-map">
          <p className="map-title">AGENT 协作流程</p>
          <div className="agent-nodes">
            {agentStages.map((stage, index) => (
              <button
                key={stage.role}
                type="button"
                className={index === activeStage ? "agent-node is-active" : "agent-node"}
                onClick={() => setActiveStage(index)}
                aria-pressed={index === activeStage}
              >
                <span>{stage.role}</span>
                <small>{stage.key}</small>
              </button>
            ))}
          </div>
          <div className="agent-connector" aria-hidden="true"><span /><span /></div>
          <p className="map-caption">点击节点，查看一次协作如何向前推进。</p>
        </div>

        <div className="terminal-sheet">
          <div className="terminal-top"><span>terminal / run.log</span><span className="terminal-lights" /></div>
          <code aria-live="polite">
            <span>$ agent run --stage {activeStage + 1}</span>
            <span className="terminal-success">[ready] {agentStages[activeStage].role}</span>
            <span>[task] {agentStages[activeStage].detail}</span>
            <span className="terminal-success">[human] checkpoint retained ✓</span>
          </code>
        </div>

        <motion.aside className="workbench-output" whileHover={reducedMotion ? undefined : { y: -7, rotate: -0.4 }}>
          <img src="/assets/ashen-battle.png" alt="灰烬圣途战斗界面输出样本" />
          <p><CheckCircle size={17} weight="fill" /><span><strong>PLAYTEST OUTPUT</strong>从 Agent 协作到真实可玩的结果。</span></p>
        </motion.aside>
      </motion.div>

      <a className="scroll-cue" href="#work"><span>向下滚动</span><i /></a>
    </section>
  );
}
