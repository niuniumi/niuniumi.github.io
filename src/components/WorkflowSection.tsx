import { ArrowBendDownRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { workflow } from "../content";

export function WorkflowSection() {
  const reducedMotion = useReducedMotion();
  return (
    <section id="approach" className="workflow-section" aria-labelledby="approach-title">
      <div className="workflow-intro">
        <p className="eyebrow">HOW I WORK</p>
        <h2 id="approach-title">AI 可以很快，<br /><em>判断不能省略。</em></h2>
        <p>我把一次协作拆成四个可以核对的节点。速度来自工具，方向、取舍与验收仍由人负责。</p>
        <div className="workflow-annotation"><ArrowBendDownRight size={22} />每一步，都留下下一步能用的证据。</div>
      </div>
      <ol className="workflow-list">
        {workflow.map(([number, title, detail], index) => (
          <motion.li
            key={number}
            initial={{ opacity: 0, x: reducedMotion ? 0 : 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.42, delay: index * 0.055 }}
          >
            <span>{number}</span>
            <div><h3>{title}</h3><p>{detail}</p></div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
