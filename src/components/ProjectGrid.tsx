import { ArrowUpRight } from "lucide-react";
import { projects } from "../content";

const labels = ["Playable", "Agent", "Engineering"];

export function ProjectGrid() {
  return (
    <section id="work" className="section work-section" aria-labelledby="work-title">
      <div className="section-heading">
        <p className="eyebrow">Selected work / 01—03</p>
        <h2 id="work-title">不是堆叠工具，<br />而是完成一次次<span>真实的验证。</span></h2>
        <p className="section-intro">以明确角色、过程和可访问成果为线索，呈现 AI 协作实践与工程训练如何相互支撑。</p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => {
          const body = (
            <>
              <div className={`project-art project-art-${index}`} aria-hidden="true">
                <span>{labels[index]}</span>
                <i /><b /><em />
              </div>
              <div className="project-body">
                <p className="project-index">0{index + 1} / {project.tag}</p>
                <h3>{project.title}</h3>
                <p className="project-meta">{project.meta}</p>
                <p className="project-description">{project.description}</p>
                <ul className="project-points">
                  {project.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
                <div className="tag-list">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </>
          );

          return project.href ? (
            <a key={project.title} className="project-card project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`打开 ${project.title}`}>
              {body}
              <span className="open-icon"><ArrowUpRight size={18} /></span>
            </a>
          ) : <article key={project.title} className="project-card">{body}</article>;
        })}
      </div>
    </section>
  );
}
