import Link from "next/link";

import { realWorldAreas } from "@/content/homepage";

export function RealWorldSection() {
  return (
    <section id="real-world" className="real-world" aria-labelledby="real-world-title">
      <header className="real-world-header">
        <p className="real-world-label">04 / Work In The Real World</p>
        <h2 id="real-world-title" className="real-world-title">
          Where the work has actually happened.
        </h2>
        <p className="real-world-support">
          Categories of execution rather than headline numbers. Each one links to the work
          that supports it.
        </p>
      </header>

      <ul className="real-world-grid" aria-label="Areas of execution">
        {realWorldAreas.map((area) => (
          <li key={area.id} className="real-world-item">
            <Link href={area.href} className="real-world-link">
              <span className="real-world-item-label">{area.label}</span>
              <span className="real-world-item-copy">{area.description}</span>
              <span className="real-world-item-action" aria-hidden="true">
                View work &rarr;
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="real-world-next" aria-label="Section transition">
        <div className="intro-next-rule" />
        <p className="intro-next-label">05 / About</p>
      </div>
    </section>
  );
}
