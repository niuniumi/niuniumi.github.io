import { certificates, education, experience, profile, skills, strengths } from "../content";

export function ProfileSection() {
  return (
    <section id="background" className="section profile-section" aria-labelledby="background-title">
      <div className="section-heading profile-heading">
        <p className="eyebrow">Background & capability</p>
        <h2 id="background-title">工程训练给我<br /><span>更扎实的判断框架。</span></h2>
      </div>
      <div className="profile-grid">
        <aside className="identity-panel">
          <p className="identity-kicker">ABOUT ME</p>
          <h3>{profile.name}</h3>
          <p>{profile.role}</p>
          <div className="identity-rule" />
          <p className="identity-copy">四川大学光电信息科学与工程本科背景，正在寻找 AI Agent、AI 应用、AI 产品助理、AI 工具链实践与 AI 运营方向的机会。</p>
          <div className="certificate-list">
            {certificates.map((item) => <span key={item}>{item}</span>)}
          </div>
        </aside>
        <div className="profile-detail">
          <article className="detail-entry">
            <p>EDUCATION</p><h3>{education.school}</h3>
            <strong>{education.major}</strong><span>{education.time}</span>
            <div>{education.detail}</div><div>{education.thesis}</div>
          </article>
          <article className="detail-entry">
            <p>EXPERIENCE</p><h3>{experience.company}</h3>
            <strong>{experience.role} · {experience.time}</strong><div>{experience.description}</div>
          </article>
          <article className="detail-entry skill-entry">
            <p>TOOLS & WORKFLOW</p>
            <div className="skill-groups">
              <div><span>AI</span>{skills.ai.map((item) => <b key={item}>{item}</b>)}</div>
              <div><span>WORKFLOW</span>{skills.workflow.map((item) => <b key={item}>{item}</b>)}</div>
              <div><span>ENGINEERING</span>{skills.engineering.map((item) => <b key={item}>{item}</b>)}</div>
            </div>
          </article>
        </div>
      </div>
      <div className="strengths-line">{strengths.map((item) => <span key={item}>{item}</span>)}</div>
    </section>
  );
}
