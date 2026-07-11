import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import { heroCopy, profile } from "../content";

export function HeroPanel() {
  const visualRef = useRef<HTMLDivElement>(null);
  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    visualRef.current?.style.setProperty("--pointer-x", `${x * 16}px`);
    visualRef.current?.style.setProperty("--pointer-y", `${y * 16}px`);
  };
  const resetPointer = () => {
    visualRef.current?.style.setProperty("--pointer-x", "0px");
    visualRef.current?.style.setProperty("--pointer-y", "0px");
  };

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow"><Sparkles size={13} /> {heroCopy.eyebrow}</p>
        <h1 id="hero-title">{heroCopy.titleA}<br /><span>{heroCopy.titleB}</span></h1>
        <p className="hero-summary">{heroCopy.summary}</p>
        <div className="hero-actions">
          <a className="button-primary" href="#work">查看作品 <ArrowDownRight size={18} /></a>
          <a className="button-secondary" href={`mailto:${profile.email}`}>发起联系 <ArrowUpRight size={17} /></a>
        </div>
        <div className="hero-caption"><span>SCU · 2026</span><span>AI Agent / AI Applications</span></div>
      </div>
      <div className="hero-visual-wrap" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
        <div className="hero-visual" ref={visualRef} aria-label="交互式 AI 工作流视觉">
          <span className="visual-label label-one">PROMPT</span>
          <span className="visual-label label-two">TEST</span>
          <span className="visual-label label-three">SHIP</span>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="signal-core"><i /><b /><em /></div>
          <div className="visual-chip chip-one">INPUT</div><div className="visual-chip chip-two">VERIFY</div>
          <p className="visual-hint">move to explore</p>
        </div>
      </div>
    </section>
  );
}
