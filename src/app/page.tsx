import Link from "next/link";

import { AboutSection } from "@/components/sections/about";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { ContactSection } from "@/components/sections/contact";
import { PlaygroundSection } from "@/components/sections/playground";
import { SelectedWorkSection } from "@/components/sections/selected-work";
import { SpeakingEventsSection } from "@/components/sections/speaking-events";
import { WritingSection } from "@/components/sections/writing";
import { ShellContainer } from "@/components/layout/primitives";

export default function Home() {
  return (
    <ShellContainer>
      <section id="hero" className="hero" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-main">
            <p className="hero-kicker">Developer Relations / Community / Ecosystem</p>
            <h1 id="hero-title" className="hero-title">
              I build communities where developers come to learn, build, and
              connect.
            </h1>
            <p className="hero-supporting">
              Developer Relations, community and ecosystem builder working across
              programs, events, content and technology to create better
              experiences for developers and builders.
            </p>

            <div className="hero-actions" aria-label="Primary actions">
              <Link href="/work" className="button button-primary">
                View my work
              </Link>
              <Link href="/about" className="button button-secondary">
                About me
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
            <p className="intro-label">01 / POSITIONING</p>
            <h2 id="intro-title" className="intro-title">
              I work at the intersection of technology and community, building
              programs, events, content and experiences that help developers turn
              curiosity into building.
            </h2>
          </header>

          <div className="intro-support">
            <p className="intro-copy">
              The work spans developer platforms, developer communities,
              developer education, programs, events, ecosystems and independent
              building.
            </p>
            <Link href="/work" className="intro-link">
              Explore the work <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <ul className="intro-spectrum" aria-label="Work scope">
            <li>Developer platforms</li>
            <li>Developer communities</li>
            <li>Developer education</li>
            <li>Programs</li>
            <li>Events</li>
            <li>Ecosystems</li>
            <li>Independent building</li>
          </ul>

          <div className="intro-next" aria-label="Section transition">
            <div className="intro-next-rule" />
            <p className="intro-next-label">02 / Selected Work</p>
          </div>
        </div>
      </section>

      <SelectedWorkSection />
      <CaseStudiesSection />
      <WritingSection />
      <SpeakingEventsSection />
      <AboutSection />
      <PlaygroundSection />
      <ContactSection />
    </ShellContainer>
  );
}
