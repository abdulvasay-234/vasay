import Link from "next/link";

import {
  contributionAreas,
  exploreTheWork,
  hackMiniSection,
  journeySteps,
  learnings,
  lsaInternals,
  lsaLabsMetadata,
  opportunitySection,
  programFlow,
  startupSystem,
} from "@/content/lsa-labs-case-study";

function HeroSection() {
  return (
    <section className="case-study-hero" aria-labelledby="lsa-labs-hero-title">
      <div className="case-study-hero-grid">
        <div className="case-study-hero-main">
          <p className="case-study-hero-label">{lsaLabsMetadata.label}</p>
          <h1 id="lsa-labs-hero-title" className="case-study-hero-title">
            {lsaLabsMetadata.title}
          </h1>
          <p className="case-study-hero-headline">{lsaLabsMetadata.headline}</p>
          <p className="case-study-hero-supporting">{lsaLabsMetadata.shortDescription}</p>

          <div className="case-study-hero-actions">
            {lsaLabsMetadata.links.map((link) => (
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
            <p className="case-study-meta-label">Role</p>
            <p className="case-study-meta-value">{lsaLabsMetadata.role}</p>
          </div>
          <div className="case-study-meta-item">
            <p className="case-study-meta-label">Context</p>
            <p className="case-study-meta-value">{lsaLabsMetadata.context}</p>
          </div>
          <div className="case-study-meta-item">
            <p className="case-study-meta-label">Focus</p>
            <p className="case-study-meta-value">{lsaLabsMetadata.focus}</p>
          </div>
          <div className="case-study-meta-item">
            <p className="case-study-meta-label">Started</p>
            <p className="case-study-meta-value">{lsaLabsMetadata.started}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function OpportunitySection() {
  return (
    <section className="case-study-section case-study-starting-point" aria-labelledby="lsa-opportunity-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{opportunitySection.number}</p>
          <h2 id="lsa-opportunity-title" className="case-study-section-title">
            {opportunitySection.title}
          </h2>
        </header>

        <div className="case-study-section-content">
          <div className="case-study-narrative">
            <p className="case-study-narrative-statement">{opportunitySection.narrative}</p>

            <div className="case-study-question">
              <p className="case-study-question-label">The Question</p>
              <p className="case-study-question-text">{opportunitySection.question}</p>
            </div>
          </div>

          <div className="case-study-context">
            <p className="case-study-context-intro">The progression</p>
            <ul className="case-study-context-list">
              {opportunitySection.context.map((item, idx) => (
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

function ProgramDesignSection() {
  return (
    <section className="case-study-section" aria-labelledby="lsa-program-design-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{programFlow.number}</p>
          <h2 id="lsa-program-design-title" className="case-study-section-title">
            {programFlow.title}
          </h2>
        </header>

        <p className="case-study-section-intro">{programFlow.intro}</p>

        <div className="lsa-program-flow">
          {programFlow.stages.map((stage, idx) => (
            <div key={stage.title} className="lsa-program-flow-item">
              <p className="lsa-program-flow-label">{stage.title}</p>
              <p className="lsa-program-flow-copy">{stage.description}</p>
              {idx < programFlow.stages.length - 1 && (
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

function JourneySection() {
  return (
    <section className="case-study-section" aria-labelledby="lsa-journey-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">03</p>
          <h2 id="lsa-journey-title" className="case-study-section-title">
            From Small Builds to Larger Ideas
          </h2>
        </header>

        <div className="lsa-journey-grid">
          {journeySteps.map((step, idx) => (
            <div key={step.title} className="lsa-journey-step">
              <p className="lsa-journey-index">{String(idx + 1).padStart(2, "0")}</p>
              <h3 className="lsa-journey-title">{step.title}</h3>
              <p className="lsa-journey-copy">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContributionSection() {
  return (
    <section className="case-study-section" aria-labelledby="lsa-contribution-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">04</p>
          <h2 id="lsa-contribution-title" className="case-study-section-title">
            Working Across the System
          </h2>
        </header>

        <div className="lsa-contribution-grid">
          {contributionAreas.map((area) => (
            <article key={area.title} className="lsa-contribution-card">
              <h3 className="lsa-contribution-title">{area.title}</h3>
              <p className="lsa-contribution-copy">{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InternalsSection() {
  return (
    <section className="case-study-section" aria-labelledby="lsa-internals-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{lsaInternals.number}</p>
          <h2 id="lsa-internals-title" className="case-study-section-title">
            {lsaInternals.title}
          </h2>
        </header>

        <div className="lsa-placeholder-card">
          <p className="lsa-placeholder-label">{lsaInternals.label}</p>
          <p className="lsa-placeholder-copy">{lsaInternals.description}</p>
          <p className="lsa-placeholder-note">[{lsaInternals.note}]</p>
        </div>
      </div>
    </section>
  );
}

function HackMiniSection() {
  return (
    <section className="case-study-section" aria-labelledby="lsa-hack-mini-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{hackMiniSection.number}</p>
          <h2 id="lsa-hack-mini-title" className="case-study-section-title">
            {hackMiniSection.title}
          </h2>
        </header>

        <div className="lsa-mini-grid">
          {hackMiniSection.fields.map((field) => (
            <article key={field.label} className="lsa-mini-block">
              <p className="lsa-mini-label">{field.label}</p>
              <p className="lsa-mini-copy">{field.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StartupSystemSection() {
  return (
    <section className="case-study-section" aria-labelledby="lsa-startup-system-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{startupSystem.number}</p>
          <h2 id="lsa-startup-system-title" className="case-study-section-title">
            {startupSystem.title}
          </h2>
        </header>

        <p className="case-study-section-intro">{startupSystem.statement}</p>

        <div className="lsa-system-tags">
          {startupSystem.items.map((item) => (
            <span key={item} className="lsa-system-tag">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningsSection() {
  return (
    <section className="case-study-section" aria-labelledby="lsa-learned-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">08</p>
          <h2 id="lsa-learned-title" className="case-study-section-title">
            What Building Programs Taught Me
          </h2>
        </header>

        <div className="case-study-insights">
          {learnings.map((insight, idx) => (
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
    <section className="case-study-section case-study-explore" aria-labelledby="lsa-explore-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">09</p>
          <h2 id="lsa-explore-title" className="case-study-section-title">
            {exploreTheWork.title}
          </h2>
        </header>

        <div className="case-study-explore-links">
          {exploreTheWork.items.map((item) => (
            <Link key={item.label} href={item.href} className="case-study-explore-item">
              <p className="case-study-explore-label">{item.label}</p>
              <h3 className="case-study-explore-title">{item.title}</h3>
              <p className="case-study-explore-action">
                {item.description} <span aria-hidden="true">&rarr;</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LsaLabsCaseStudy() {
  return (
    <div className="case-study-container">
      <HeroSection />
      <OpportunitySection />
      <ProgramDesignSection />
      <JourneySection />
      <ContributionSection />
      <InternalsSection />
      <HackMiniSection />
      <StartupSystemSection />
      <LearningsSection />
      <ExploreSection />
    </div>
  );
}
