import Link from "next/link";

import { MediaFrame } from "@/components/ui/media-frame";
import {
  aboutForwardFocus,
  aboutNarrativeColumns,
  aboutPortraitFrame,
  aboutPracticeAreas,
  aboutPrinciples,
} from "@/content/about";

export function AboutSection() {
  const [leftColumn, rightColumn] = aboutNarrativeColumns;

  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <header className="about-header">
        <p className="about-label">06 / About</p>
        <h2 id="about-title" className="about-title">
          Building at the intersection of technology, developers, and community.
        </h2>
      </header>

      <div className="about-story" aria-label="About narrative">
        <article className="about-column about-column-left" aria-labelledby="about-left-title">
          <h3 id="about-left-title" className="about-column-title">
            {leftColumn.heading}
          </h3>
          {leftColumn.paragraphs.map((paragraph) => (
            <p key={paragraph} className="about-column-copy">
              {paragraph}
            </p>
          ))}
        </article>

        <article className="about-column about-column-right" aria-labelledby="about-right-title">
          <h3 id="about-right-title" className="about-column-title">
            {rightColumn.heading}
          </h3>
          {rightColumn.paragraphs.map((paragraph) => (
            <p key={paragraph} className="about-column-copy">
              {paragraph}
            </p>
          ))}

          <Link href="/work" className="about-inline-link">
            View HackUnion <span aria-hidden="true">&rarr;</span>
          </Link>
        </article>
      </div>

      <div className="about-practice" aria-label="Areas of practice">
        {aboutPracticeAreas.map((area) => (
          <p key={area} className="about-practice-item">
            {area}
          </p>
        ))}
      </div>

      <div className="about-method" aria-label="How I work">
        <p className="about-method-label">How I work</p>
        <div className="about-method-list" role="list">
          {aboutPrinciples.map((principle) => (
            <article key={principle.id} className="about-method-item" role="listitem">
              <h3 className="about-method-title">{principle.title}</h3>
              <p className="about-method-copy">{principle.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="about-forward" aria-label="What I am building toward">
        <div className="about-forward-copy">
          <p className="about-forward-label">What I am building toward</p>
          <p>{aboutForwardFocus}</p>
        </div>

        <MediaFrame
          media={aboutPortraitFrame.media}
          label={aboutPortraitFrame.label}
          pendingLabel={aboutPortraitFrame.pendingLabel}
          className="about-media"
          sizes="(min-width: 960px) 30vw, 100vw"
        />
      </div>

      <div className="about-footer">
          <Link href="/#contact" className="intro-link">
          Let&apos;s build something useful <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className="about-next" aria-label="Section transition">
        <div className="intro-next-rule" />
        <p className="intro-next-label">07 / Contact</p>
      </div>
    </section>
  );
}
