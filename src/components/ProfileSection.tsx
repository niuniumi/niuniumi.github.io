import { GraduationCap, MapPin, Toolbox } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { certificates, education, experience, profile, profileCopy, skills, strengths } from "../content";

export function ProfileSection() {
  return (
    <section id="background" className="profile-section" aria-labelledby="background-title">
      <div className="profile-heading">
        <p className="eyebrow">BACKGROUND & CAPABILITY</p>
        <h2 id="background-title">{profileCopy.titleLead}<br /><em>{profileCopy.titleEmphasis}</em></h2>
        <p>{profileCopy.summary}</p>
      </div>

      <div className="profile-editorial">
        <motion.aside className="identity-panel" whileHover={{ y: -5, rotate: -0.35 }}>
          <p>ABOUT / 2026</p>
          <h3>{profile.name}</h3>
          <strong>{profile.role}</strong>
          <span><MapPin size={17} weight="fill" />四川 · 成都</span>
          <div className="identity-statement">{profileCopy.opportunity}</div>
          <div className="certificate-list">{certificates.map((item) => <span key={item}>{item}</span>)}</div>
        </motion.aside>

        <div className="background-ledger">
          <article>
            <div className="ledger-icon"><GraduationCap size={25} weight="duotone" /></div>
            <p>EDUCATION</p>
            <h3>{education.school}</h3>
            <strong>{education.major}</strong><span>{education.time}</span>
            <div>{education.detail}</div><div className="ledger-note">{education.thesis}</div>
          </article>
          <article>
            <div className="ledger-icon"><Toolbox size={25} weight="duotone" /></div>
            <p>EXPERIENCE</p>
            <h3>{experience.company}</h3>
            <strong>{experience.role}</strong><span>{experience.time}</span>
            <div>{experience.description}</div>
          </article>
          <article className="tools-ledger">
            <p>TOOLS / NOT A CHECKLIST</p>
            <h3>{profileCopy.toolsTitle}</h3>
            <div className="skill-groups">
              <div><span>AI</span>{skills.ai.map((item) => <b key={item}>{item}</b>)}</div>
              <div><span>WORKFLOW</span>{skills.workflow.map((item) => <b key={item}>{item}</b>)}</div>
              <div><span>BUILD</span>{skills.frontend.map((item) => <b key={item}>{item}</b>)}</div>
              <div><span>ENGINEERING</span>{skills.engineering.map((item) => <b key={item}>{item}</b>)}</div>
            </div>
          </article>
        </div>
      </div>

      <div className="strengths-line">
        {strengths.map((item, index) => (
          <span key={item.title}>
            <small>0{index + 1}</small>
            <strong>{item.title}</strong>
            <em>{item.detail}</em>
          </span>
        ))}
      </div>
    </section>
  );
}
