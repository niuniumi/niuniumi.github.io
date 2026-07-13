import { ArrowSquareOut, Check, CirclesThreePlus, GithubLogo, LightbulbFilament, TerminalWindow } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { projects } from "../content";

function AgentProjectVisual() {
  return (
    <div className="agent-project-visual" aria-label="多模型路由流程示意">
      <div className="routing-input"><small>INPUT</small><strong>用户任务</strong><span>上下文 + 目标</span></div>
      <div className="routing-models">
        <p><i />Ollama <span>本地 / 轻量</span></p>
        <p><i />Claude <span>推理 / 规划</span></p>
        <p><i />DeepSeek <span>代码 / 复核</span></p>
      </div>
      <div className="routing-output"><small>ROUTER</small><strong>选择合适模型</strong><span>执行 → 校验 → 汇总</span></div>
      <div className="routing-log">
        <span>$ run agent --task "整理文件"</span>
        <span>[router] local model selected</span>
        <span className="ok">[done] result checked by human ✓</span>
      </div>
    </div>
  );
}

function GameProjectVisual({ images }: { images: string[] }) {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className="game-project-visual">
      <motion.img
        key={images[activeImage]}
        src={images[activeImage]}
        alt={activeImage === 0 ? "灰烬圣途战斗界面真实截图" : "灰烬圣途主菜单真实截图"}
        initial={{ opacity: 0.35, scale: 1.015 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.36 }}
      />
      <div className="image-switcher" aria-label="切换项目截图">
        {images.map((image, index) => (
          <button key={image} type="button" onClick={() => setActiveImage(index)} aria-pressed={activeImage === index}>
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
      <p aria-live="polite">{activeImage === 0 ? "战斗回合与卡牌交互" : "像素重制主菜单"}</p>
    </div>
  );
}

function HardwareProjectVisual() {
  const stages = ["光信号", "传感采集", "信号调理", "AD 转换", "数值显示"];
  return (
    <div className="hardware-project-visual" aria-label="光照度计信号链示意">
      <div className="hardware-heading"><LightbulbFilament size={38} weight="duotone" /><span>LIGHT / SIGNAL / DATA</span></div>
      <div className="signal-chain">
        {stages.map((stage, index) => <span key={stage}><small>0{index + 1}</small>{stage}</span>)}
      </div>
      <div className="hardware-data">
        <p><span>采样输入</span><strong>光敏信号</strong></p>
        <p><span>调试重点</span><strong>稳定性与误差</strong></p>
        <p><span>验收结果</span><strong>实时数据显示</strong></p>
      </div>
      <p className="engineering-note">工程不是把模块接起来，而是让整条信号链经得起验证。</p>
    </div>
  );
}

export function ProjectGrid() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="work" className="work-section" aria-labelledby="work-title">
      <div className="work-heading">
        <p className="eyebrow"><span className="status-dot" />SELECTED WORK · 01—03</p>
        <h2 id="work-title">正在发生的实验</h2>
        <p>不堆工具名，也不虚构商业结果。这里记录的是我如何定义问题、组织 AI、验证过程，并把想法推进到真实成果。</p>
      </div>

      <div className="project-stack">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className={`project-sheet project-${project.tone}`}
            initial={{ opacity: 0, y: reducedMotion ? 0 : 48, rotate: reducedMotion ? 0 : index % 2 ? 0.5 : -0.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.56, ease: [0, 0, 0.2, 1] }}
          >
            <header className="project-header">
              <span className="project-number">{project.number}</span>
              <div><p>{project.tag}</p><span>{project.status}</span></div>
              <span className="project-meta">{project.meta}</span>
            </header>

            <div className="project-layout">
              <div className="project-copy">
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                <ul>{project.points.map((point) => <li key={point}><Check size={15} weight="bold" />{point}</li>)}</ul>
                <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                {project.href && (
                  <div className="project-actions">
                    <a href={project.href} target="_blank" rel="noreferrer">打开可玩版本 <ArrowSquareOut size={18} weight="bold" /></a>
                    <a className="repo-link" href={project.repo} target="_blank" rel="noreferrer"><GithubLogo size={18} weight="fill" />查看源码</a>
                  </div>
                )}
              </div>

              <div className="project-visual">
                {index === 0 && <AgentProjectVisual />}
                {index === 1 && project.images && <GameProjectVisual images={project.images} />}
                {index === 2 && <HardwareProjectVisual />}
              </div>
            </div>

            <footer className="project-footer">
              {index === 0 ? <TerminalWindow size={20} /> : index === 1 ? <CirclesThreePlus size={20} /> : <LightbulbFilament size={20} />}
              <span>{index === 0 ? "从模型能力到任务路由" : index === 1 ? "从创意设定到可玩闭环" : "从传感输入到工程输出"}</span>
            </footer>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
