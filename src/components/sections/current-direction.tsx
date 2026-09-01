import { directionFocus } from "@/content/homepage";

export function CurrentDirectionSection() {
  return (
    <section id="direction" className="direction" aria-labelledby="direction-title">
      <header className="direction-header">
        <p className="direction-label">07 / What I&apos;m Building Toward</p>
        <h2 id="direction-title" className="direction-title">
          Going deeper into developer ecosystems.
        </h2>
      </header>

      <ul className="direction-list" aria-label="Focus areas">
        {directionFocus.map((focus) => (
          <li key={focus.id} className="direction-item">
            <p className="direction-item-label">{focus.label}</p>
            <p className="direction-item-copy">{focus.description}</p>
          </li>
        ))}
      </ul>

      <div className="direction-next" aria-label="Section transition">
        <div className="intro-next-rule" />
        <p className="intro-next-label">08 / Contact</p>
      </div>
    </section>
  );
}
