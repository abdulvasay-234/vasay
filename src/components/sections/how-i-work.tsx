import { processStages } from "@/content/homepage";

export function HowIWorkSection() {
  return (
    <section id="how-i-work" className="process" aria-labelledby="process-title">
      <header className="process-header">
        <p className="process-label">03 / How I Work</p>
        <h2 id="process-title" className="process-title">
          A repeatable way of turning context into participation.
        </h2>
        <p className="process-support">
          The same sequence shows up across campus programs, community activations, and
          ecosystem work. The scale changes; the order rarely does.
        </p>
      </header>

      <ol className="process-track" aria-label="Working process">
        {processStages.map((stage, index) => (
          <li key={stage.id} className="process-stage">
            <p className="process-stage-number">
              {String(index + 1).padStart(2, "0")}
            </p>
            <div className="process-stage-body">
              <h3 className="process-stage-title">{stage.stage}</h3>
              <p className="process-stage-copy">{stage.description}</p>
            </div>
            {index < processStages.length - 1 ? (
              <span className="process-stage-arrow" aria-hidden="true">
                &darr;
              </span>
            ) : null}
          </li>
        ))}
      </ol>

      <div className="process-next" aria-label="Section transition">
        <div className="intro-next-rule" />
        <p className="intro-next-label">04 / Work In The Real World</p>
      </div>
    </section>
  );
}
