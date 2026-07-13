import { ArrowUpRight, CheckCircle, Copy, EnvelopeSimple, Phone } from "@phosphor-icons/react";
import { useState } from "react";
import { profile } from "../content";

async function copyText(value: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try {
      await Promise.race([
        navigator.clipboard.writeText(value),
        new Promise<never>((_, reject) => {
          window.setTimeout(() => reject(new Error("clipboard timeout")), 400);
        }),
      ]);
      return true;
    } catch {
      // Clipboard access can be denied in embedded browsers; use the selection fallback below.
    }
  }
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    textarea.remove();
  }
}

export function ContactPanel() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const handleCopy = async () => {
    const didCopy = await copyText(profile.email);
    setCopyState(didCopy ? "copied" : "failed");
    window.setTimeout(() => setCopyState("idle"), 2200);
  };

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-kicker"><span />AVAILABLE FOR OPPORTUNITIES · 2026</div>
      <div className="contact-content">
        <h2 id="contact-title">如果你也在想，<br />AI 还能<strong>做成什么。</strong></h2>
        <p>欢迎从一个具体的问题聊起。我会带着真实作品、过程记录和清晰的能力边界，认真回应每一次合作与机会。</p>
        <div className="contact-actions">
          <a href={`mailto:${profile.email}`}><EnvelopeSimple size={20} weight="bold" />写封邮件 <ArrowUpRight size={17} weight="bold" /></a>
          <button type="button" onClick={handleCopy} aria-label="复制邮箱">
            {copyState === "copied" ? <CheckCircle size={19} weight="fill" /> : <Copy size={19} weight="bold" />}
            {copyState === "copied" ? "邮箱已复制" : copyState === "failed" ? "请手动复制" : "复制邮箱"}
          </button>
        </div>
        <p className="copy-status" aria-live="polite">
          {copyState === "copied" ? `已复制：${profile.email}` : copyState === "failed" ? "复制失败，请手动选择邮箱" : ""}
        </p>
      </div>
      <div className="contact-details">
        <a href={`tel:${profile.phoneRaw}`}><Phone size={18} weight="fill" /><span>PHONE</span>{profile.phone}</a>
        <a href={`mailto:${profile.email}`}><EnvelopeSimple size={18} weight="fill" /><span>EMAIL</span>{profile.email}</a>
      </div>
      <footer><span>© 2026 彭怡姿 · AI Applications Portfolio</span><a href="#home">回到顶部 ↑</a></footer>
    </section>
  );
}
