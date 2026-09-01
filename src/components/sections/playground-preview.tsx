import Link from "next/link";

import { playgroundPreviews } from "@/content/homepage";

export function PlaygroundPreviewSection() {
  return (
    <section
      id="playground"
      className="playground-preview"
      aria-labelledby="playground-preview-title"
    >
      <header className="playground-preview-header">
        <p className="playground-preview-label">06 / The Playground</p>
        <h2 id="playground-preview-title" className="playground-preview-title">
          The Playground.
        </h2>
        <p className="playground-preview-support">
          A space for experimenting with interactive ideas around ecosystems, communities,
          and developer relations.
        </p>
      </header>

      <ul className="playground-preview-grid" aria-label="Playground experiments">
        {playgroundPreviews.map((item) => (
          <li key={item.id} className="playground-preview-card">
            <p className="playground-preview-kicker">{item.kicker}</p>
            <h3 className="playground-preview-card-title">{item.title}</h3>
            <p className="playground-preview-card-copy">{item.description}</p>
          </li>
        ))}
      </ul>

      <div className="playground-preview-footer">
        <Link href="/playground" className="intro-link">
          Explore the playground <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className="playground-preview-next" aria-label="Section transition">
        <div className="intro-next-rule" />
        <p className="intro-next-label">07 / What I&apos;m Building Toward</p>
      </div>
    </section>
  );
}
