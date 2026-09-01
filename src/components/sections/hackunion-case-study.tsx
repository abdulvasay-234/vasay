import Link from "next/link";
import {
  hackunionMetadata,
  startingPointSection,
  whatWeBuiltPillars,
  timelineStages,
  workingAreas,
  featuredWork,
  impactOutcomes,
  ecosystemModel,
  learnings,
  currentDirection,
  exploreTheWork,
} from "@/content/hackunion-case-study";

function CaseStudyHero() {
  return (
    <section className="case-study-hero" aria-labelledby="case-study-hero-title">
      <div className="case-study-hero-grid">
        <div className="case-study-hero-main">
          <p className="case-study-hero-label">{hackunionMetadata.label}</p>
          <h1 id="case-study-hero-title" className="case-study-hero-title">
            {hackunionMetadata.title}
          </h1>
          <p className="case-study-hero-headline">{hackunionMetadata.headline}</p>
          <p className="case-study-hero-supporting">{hackunionMetadata.shortDescription}</p>

          <div className="case-study-hero-actions">
            {hackunionMetadata.links.map((link) => (
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
            <p className="case-study-meta-label">Type</p>
            <p className="case-study-meta-value">{hackunionMetadata.category}</p>
          </div>
          <div className="case-study-meta-item">
            <p className="case-study-meta-label">Focus</p>
            <p className="case-study-meta-value">{hackunionMetadata.focus}</p>
          </div>
          <div className="case-study-meta-item">
            <p className="case-study-meta-label">Role</p>
            <p className="case-study-meta-value">{hackunionMetadata.role}</p>
          </div>
          <div className="case-study-meta-item">
            <p className="case-study-meta-label">Status</p>
            <p className="case-study-meta-value">{hackunionMetadata.status}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function StartingPointSection() {
  return (
    <section className="case-study-section case-study-starting-point" aria-labelledby="starting-point-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{startingPointSection.number}</p>
          <h2 id="starting-point-title" className="case-study-section-title">
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
            <p className="case-study-context-intro">The Problem Landscape</p>
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

function WhatWeBuiltSection() {
  return (
    <section className="case-study-section case-study-what-built" aria-labelledby="what-built-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">02</p>
          <h2 id="what-built-title" className="case-study-section-title">
            What We Built
          </h2>
        </header>

        <p className="case-study-section-intro">
          HackUnion as a connected ecosystem rather than a single initiative.
        </p>

        <div className="case-study-pillars">
          {whatWeBuiltPillars.map((pillar, idx) => (
            <article key={idx} className="case-study-pillar">
              <h3 className="case-study-pillar-title">{pillar.title}</h3>
              <p className="case-study-pillar-description">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="case-study-section case-study-timeline" aria-labelledby="timeline-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">03</p>
          <h2 id="timeline-title" className="case-study-section-title">
            From Idea to Ecosystem
          </h2>
        </header>

        <p className="case-study-section-intro">Evolution of the community and ecosystem building work.</p>

        <div className="case-study-timeline-track">
          {timelineStages.map((stage, idx) => (
            <div key={idx} className="case-study-timeline-item">
              <div className="case-study-timeline-marker">
                <span className="case-study-timeline-number">{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <div className="case-study-timeline-content">
                <p className="case-study-timeline-stage">{stage.stage}</p>
                <p className="case-study-timeline-description">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowIWorkedSection() {
  return (
    <section className="case-study-section case-study-how-worked" aria-labelledby="how-worked-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">04</p>
          <h2 id="how-worked-title" className="case-study-section-title">
            How I Worked
          </h2>
        </header>

        <p className="case-study-section-intro">Four working areas that shaped the approach.</p>

        <div className="case-study-working-areas">
          {workingAreas.map((area, idx) => (
            <div key={idx} className="case-study-working-area">
              <h3 className="case-study-working-area-title">{area.title}</h3>
              <p className="case-study-working-area-description">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkInActionSection() {
  return (
    <section className="case-study-section case-study-work-action" aria-labelledby="work-action-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">05</p>
          <h2 id="work-action-title" className="case-study-section-title">
            Work in Action
          </h2>
        </header>

        <p className="case-study-section-intro">Featured initiatives and programs.</p>

        <div className="case-study-work-grid">
          {featuredWork.map((work) => (
            <article key={work.id} className="case-study-work-item">
              <p className="case-study-work-category">{work.category}</p>
              <h3 className="case-study-work-title">{work.title}</h3>
              <p className="case-study-work-description">{work.description}</p>
              <p className="case-study-work-status">{work.status}</p>
              {work.href ? (
                <Link href={work.href} className="case-study-work-link">
                  {work.actionLabel} <span aria-hidden="true">&rarr;</span>
                </Link>
              ) : (
                <span className="case-study-work-link case-study-work-link-placeholder">
                  {work.actionLabel} <span aria-hidden="true">&rarr;</span>
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactOutcomesSection() {
  return (
    <section className="case-study-section case-study-impact" aria-labelledby="impact-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">06</p>
          <h2 id="impact-title" className="case-study-section-title">
            {impactOutcomes.title}
          </h2>
        </header>

        <p className="case-study-section-intro">{impactOutcomes.description}</p>

        <div className="case-study-impact-grid">
          {impactOutcomes.outcomes.map((outcome) => (
            <article key={outcome.title} className="case-study-impact-card">
              <h3 className="case-study-impact-card-title">{outcome.title}</h3>
              <p className="case-study-impact-card-description">{outcome.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcosystemModelSection() {
  return (
    <section className="case-study-section case-study-ecosystem" aria-labelledby="ecosystem-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">07</p>
          <h2 id="ecosystem-title" className="case-study-section-title">
            {ecosystemModel.title}
          </h2>
        </header>

        <p className="case-study-section-intro">{ecosystemModel.description}</p>

        <div className="case-study-ecosystem-flow">
          {ecosystemModel.stages.map((stage, idx) => (
            <div key={idx} className="case-study-ecosystem-stage">
              <p className="case-study-ecosystem-stage-label">{stage}</p>
              {idx < ecosystemModel.stages.length - 1 && (
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

function LearnedSection() {
  return (
    <section className="case-study-section case-study-learned" aria-labelledby="learned-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">08</p>
          <h2 id="learned-title" className="case-study-section-title">
            What I Learned
          </h2>
        </header>

        <p className="case-study-section-intro">Insights from the work.</p>

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

function CurrentDirectionSection() {
  return (
    <section className="case-study-section case-study-current-direction" aria-labelledby="current-direction-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">09</p>
          <h2 id="current-direction-title" className="case-study-section-title">
            {currentDirection.title}
          </h2>
        </header>

        <p className="case-study-section-intro">{currentDirection.description}</p>

        <div className="case-study-current-areas">
          <p className="case-study-current-label">Currently Exploring</p>
          <ul className="case-study-current-list">
            {currentDirection.areas.map((area) => (
              <li key={area} className="case-study-current-item">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ExploreTheWorkSection() {
  return (
    <section className="case-study-section case-study-explore" aria-labelledby="explore-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">10</p>
          <h2 id="explore-title" className="case-study-section-title">
            {exploreTheWork.title}
          </h2>
        </header>

        <div className="case-study-explore-links">
          {exploreTheWork.sections.map((section) => (
            <Link key={section.label} href={section.href} className="case-study-explore-item">
              <div className="case-study-explore-content">
                <p className="case-study-explore-label">{section.label}</p>
                <h3 className="case-study-explore-title">{section.title}</h3>
                <p className="case-study-explore-action">
                  {section.description} <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HackUnionCaseStudy() {
  return (
    <div className="case-study-container">
      <CaseStudyHero />
      <StartingPointSection />
      <WhatWeBuiltSection />
      <TimelineSection />
      <HowIWorkedSection />
      <WorkInActionSection />
      <ImpactOutcomesSection />
      <EcosystemModelSection />
      <LearnedSection />
      <CurrentDirectionSection />
      <ExploreTheWorkSection />
    </div>
  );
}
