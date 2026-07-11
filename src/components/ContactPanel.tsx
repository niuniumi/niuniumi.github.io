import { ArrowUpRight, Copy, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { profile } from "../content";

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(value);
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

export function ContactPanel() {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await copyText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-orbit" aria-hidden="true"><i /><b /><span /></div>
      <div className="contact-content">
        <p className="eyebrow">Available for opportunities</p>
        <h2 id="contact-title">让我们从一段<br /><span>具体的问题</span>聊起。</h2>
        <p>欢迎联系我讨论 AI 应用、Agent 工作流与 AI 协作开发机会。我愿意带着可运行作品和复盘过程，面对真实业务问题继续成长。</p>
        <div className="contact-actions">
          <a href={`mailto:${profile.email}`}><Mail size={18} />写封邮件 <ArrowUpRight size={16} /></a>
          <button type="button" onClick={handleCopy} aria-label="复制邮箱"><Copy size={17} />{copied ? "邮箱已复制" : "复制邮箱"}</button>
        </div>
        <div className="contact-details">
          <a href={`tel:${profile.phoneRaw}`}><Phone size={16} />{profile.phone}</a>
          <a href={`mailto:${profile.email}`}><Mail size={16} />{profile.email}</a>
        </div>
      </div>
      <footer>© 2026 彭怡姿 · AI Applications Portfolio <a href="#home">回到顶部 ↑</a></footer>
    </section>
  );
}
