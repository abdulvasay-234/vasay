import Link from "next/link";

import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { CurrentDirectionSection } from "@/components/sections/current-direction";
import { HowIWorkSection } from "@/components/sections/how-i-work";
import { PlaygroundPreviewSection } from "@/components/sections/playground-preview";
import { RealWorldSection } from "@/components/sections/real-world";
import { SelectedWorkSection } from "@/components/sections/selected-work";
import { ShellContainer } from "@/components/layout/primitives";
import { positioningPillars } from "@/content/homepage";

export default function Home() {
  return (
    <ShellContainer>
      <section id="hero" className="hero" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-main">
            <p className="hero-kicker">
              Developer Relations / Community / Ecosystems / Builder Programs
            </p>
            <h1 id="hero-title" className="hero-title">
              I build the places developers show up to learn, build, and connect.
            </h1>
            <p className="hero-supporting">
              I design communities, builder programs, and developer ecosystems &mdash;
              on campuses, in open source, and around the people doing the building.
            </p>

            <div className="hero-actions" aria-label="Primary actions">
              <Link href="/#selected-work" className="button button-primary">
                Explore my work <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="/#how-i-work" className="button button-secondary">
                About my approach <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          <aside className="hero-meta" aria-label="Professional context">
            <p className="hero-meta-title">Field Context</p>

            <ol className="hero-meta-list" aria-label="Capability pillars">
              <li className="meta-line">01 / DEVELOPER RELATIONS</li>
              <li className="meta-line">02 / COMMUNITY</li>
              <li className="meta-line">03 / PROGRAMS</li>
              <li className="meta-line">04 / ECOSYSTEMS</li>
            </ol>

            <div className="rule-divider" />

            <div className="hero-meta-foot">
              <div className="hero-meta-group">
                <p className="meta-line">CURRENTLY BUILDING</p>
                <p className="hero-meta-value">HackUnion</p>
              </div>
              <div className="hero-meta-group">
                <p className="meta-line">FOCUS</p>
                <p className="hero-meta-value hero-meta-value-soft">
                  Developer ecosystems
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="positioning" className="intro-transition" aria-labelledby="intro-title">
        <div className="intro-grid">
          <header className="intro-lead">
            <p className="intro-label">01 / What I Do</p>
            <h2 id="intro-title" className="intro-title">
              I work at the intersection of builders, communities, programs, and
              technology ecosystems.
            </h2>
          </header>

          <div className="intro-support">
            <p className="intro-copy">
              Less strategy deck, more running the thing: designing formats, bringing
              the right people together, and making participation the default.
            </p>
            <Link href="/#selected-work" className="intro-link">
              See the work <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <ul className="pillar-grid" aria-label="Areas of work">
            {positioningPillars.map((pillar, index) => (
              <li key={pillar.id} className="pillar">
                <p className="pillar-number">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="pillar-label">{pillar.label}</h3>
                <p className="pillar-copy">{pillar.description}</p>
              </li>
            ))}
          </ul>

          <div className="intro-next" aria-label="Section transition">
            <div className="intro-next-rule" />
            <p className="intro-next-label">02 / Selected Work</p>
          </div>
        </div>
      </section>

      <SelectedWorkSection />
      <HowIWorkSection />
      <RealWorldSection />
      <AboutSection />
      <PlaygroundPreviewSection />
      <CurrentDirectionSection />
      <ContactSection />
    </ShellContainer>
  );
}
