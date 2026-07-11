import { workflow } from "../content";

export function WorkflowSection() {
  return (
    <section id="approach" className="section workflow-section" aria-labelledby="approach-title">
      <div className="workflow-intro">
        <p className="eyebrow">How I work</p>
        <h2 id="approach-title">从一个模糊想法，<br />走到<span>可以交付。</span></h2>
        <p>AI 能提高速度，但不能代替判断。我将过程拆成能核对、能反馈、能迭代的四个节点。</p>
      </div>
      <ol className="workflow-list">
        {workflow.map(([number, title, detail]) => (
          <li key={number}>
            <span>{number}</span>
            <div><h3>{title}</h3><p>{detail}</p></div>
          </li>
        ))}
      </ol>
    </section>
  );
}
