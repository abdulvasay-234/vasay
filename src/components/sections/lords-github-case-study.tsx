import Link from "next/link";

import {
  approachSection,
  builderJourney,
  impactAreas,
  learnings,
  lordsGithubMetadata,
  proofBlocks,
  startingPointSection,
  workAreas,
  exploreTheWork,
} from "@/content/lords-github-case-study";

function HeroSection() {
  return (
    <section className="case-study-hero" aria-labelledby="lords-github-hero-title">
      <div className="case-study-hero-grid">
        <div className="case-study-hero-main">
          <p className="case-study-hero-label">{lordsGithubMetadata.label}</p>
          <h1 id="lords-github-hero-title" className="case-study-hero-title">
            {lordsGithubMetadata.title}
          </h1>
          <p className="case-study-hero-headline">{lordsGithubMetadata.headline}</p>
          <p className="case-study-hero-supporting">{lordsGithubMetadata.shortDescription}</p>

          <div className="case-study-hero-actions">
            {lordsGithubMetadata.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="case-study-hero-link"
              >
                {link.label} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
        </div>

        <aside className="case-study-hero-meta">
          <div className="case-study-meta-item">
            <p className="case-study-meta-label">Focus</p>
            <p className="case-study-meta-value">{lordsGithubMetadata.focus}</p>
          </div>
          <div className="case-study-meta-item">
            <p className="case-study-meta-label">Ecosystem</p>
            <p className="case-study-meta-value">{lordsGithubMetadata.ecosystem}</p>
          </div>
          <div className="case-study-meta-item">
            <p className="case-study-meta-label">Context</p>
            <p className="case-study-meta-value">{lordsGithubMetadata.context}</p>
          </div>
          <div className="case-study-meta-item">
            <p className="case-study-meta-label">Status</p>
            <p className="case-study-meta-value">{lordsGithubMetadata.status}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function StartingPointSection() {
  return (
    <section className="case-study-section case-study-starting-point" aria-labelledby="lords-starting-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{startingPointSection.number}</p>
          <h2 id="lords-starting-title" className="case-study-section-title">
            {startingPointSection.title}
          </h2>
        </header>

        <div className="case-study-section-content">
          <div className="case-study-narrative">
            <p className="case-study-narrative-statement">{startingPointSection.narrative}</p>

            <div className="case-study-question">
              <p className="case-study-question-label">The Question</p>
              <p className="case-study-question-text">{startingPointSection.question}</p>
            </div>
          </div>

          <div className="case-study-context">
            <p className="case-study-context-intro">The opportunity</p>
            <ul className="case-study-context-list">
              {startingPointSection.context.map((item, idx) => (
                <li key={idx} className="case-study-context-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="case-study-section" aria-labelledby="lords-approach-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{approachSection.number}</p>
          <h2 id="lords-approach-title" className="case-study-section-title">
            {approachSection.title}
          </h2>
        </header>

        <div className="case-study-ecosystem-flow">
          {approachSection.stages.map((stage, idx) => (
            <div key={stage.title} className="case-study-ecosystem-stage">
              <p className="case-study-ecosystem-stage-label">{stage.title}</p>
              <p className="case-study-ecosystem-stage-copy">{stage.description}</p>
              {idx < approachSection.stages.length - 1 && (
                <svg
                  className="case-study-ecosystem-arrow"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <section className="case-study-section" aria-labelledby="lords-work-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">03</p>
          <h2 id="lords-work-title" className="case-study-section-title">
            Building the Developer Workflow
          </h2>
        </header>

        <div className="case-study-pillars">
          {workAreas.map((area, idx) => (
            <article key={area.title} className="case-study-pillar">
              {area.status && <p className="case-study-work-status">{area.status}</p>}
              <h3 className="case-study-pillar-title">{area.title}</h3>
              <p className="case-study-pillar-description">{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="case-study-section" aria-labelledby="lords-journey-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">04</p>
          <h2 id="lords-journey-title" className="case-study-section-title">
            The Builder Journey
          </h2>
        </header>

        <div className="lords-journey-grid">
          {builderJourney.map((step, idx) => (
            <div key={step.title} className="lords-journey-step">
              <span className="lords-journey-index">{String(idx + 1).padStart(2, "0")}</span>
              <p className="lords-journey-title">{step.title}</p>
              <p className="lords-journey-copy">{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PracticeSection() {
  return (
    <section className="case-study-section" aria-labelledby="lords-practice-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">05</p>
          <h2 id="lords-practice-title" className="case-study-section-title">
            Turning Concepts Into Practice
          </h2>
        </header>

        <div className="lords-proof-grid">
          {proofBlocks.map((block) => (
            <article key={block.title} className="lords-proof-card">
              <p className="lords-proof-context">{block.context}</p>
              <h3 className="lords-proof-title">{block.title}</h3>
              <p className="lords-proof-description">{block.description}</p>
              <p className="lords-proof-evidence">{block.evidence}</p>
              <Link href={block.href} className="lords-proof-link">
                {block.linkLabel} <span aria-hidden="true">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="case-study-section" aria-labelledby="lords-impact-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">06</p>
          <h2 id="lords-impact-title" className="case-study-section-title">
            Creating More Visible Builders
          </h2>
        </header>

        <div className="case-study-impact-grid">
          {impactAreas.map((impact) => (
            <article key={impact.title} className="case-study-impact-card">
              <h3 className="case-study-impact-card-title">{impact.title}</h3>
              <p className="case-study-impact-card-description">{impact.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearnedSection() {
  return (
    <section className="case-study-section" aria-labelledby="lords-learned-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">07</p>
          <h2 id="lords-learned-title" className="case-study-section-title">
            What I Learned
          </h2>
        </header>

        <div className="case-study-insights">
          {learnings.map((insight) => (
            <div key={insight.number} className="case-study-insight">
              <p className="case-study-insight-number">{insight.number}</p>
              <p className="case-study-insight-text">{insight.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExploreSection() {
  return (
    <section className="case-study-section" aria-labelledby="lords-explore-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">08</p>
          <h2 id="lords-explore-title" className="case-study-section-title">
            {exploreTheWork.title}
          </h2>
        </header>

        <div className="case-study-explore-links">
          {exploreTheWork.items.map((item) => (
            <Link key={item.label} href={item.href} className="case-study-explore-item">
              <div className="case-study-explore-content">
                <p className="case-study-explore-label">{item.label}</p>
                <h3 className="case-study-explore-title">{item.title}</h3>
                <p className="case-study-explore-action">
                  {item.description} <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LordsGithubCaseStudy() {
  return (
    <div className="case-study-container">
      <HeroSection />
      <StartingPointSection />
      <ApproachSection />
      <WorkSection />
      <JourneySection />
      <PracticeSection />
      <ImpactSection />
      <LearnedSection />
      <ExploreSection />
    </div>
  );
}
