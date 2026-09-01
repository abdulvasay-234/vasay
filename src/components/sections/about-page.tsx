import Link from "next/link";

import {
  aboutFinalCta,
  aboutHero,
  approachSectionMeta,
  approachSteps,
  careSectionMeta,
  careStatements,
  exploreCards,
  forwardFocusAreas,
  forwardSectionMeta,
  forwardStatement,
  gapsAreas,
  gapsSectionMeta,
  outsideSectionMeta,
  outsideStatement,
  storySectionMeta,
  storyTimeline,
} from "@/content/about-page";

function HeroSection() {
  return (
    <section className="case-study-hero" aria-labelledby="about-hero-title">
      <div className="case-study-hero-grid">
        <div className="case-study-hero-main">
          <p className="case-study-hero-label">{aboutHero.kicker}</p>
          <h1 id="about-hero-title" className="about-page-hero-title">
            {aboutHero.headline}
          </h1>
        </div>

        <div className="about-page-hero-supporting">
          {aboutHero.supporting.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="case-study-section" aria-labelledby="about-story-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{storySectionMeta.number}</p>
          <h2 id="about-story-title" className="case-study-section-title">
            {storySectionMeta.title}
          </h2>
        </header>

        <p className="case-study-section-intro">{storySectionMeta.intro}</p>

        <div className="case-study-timeline-track">
          {storyTimeline.map((milestone, idx) => (
            <div key={milestone.id} className="case-study-timeline-item">
              <div className="case-study-timeline-marker">
                <span className="case-study-timeline-number">{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <div className="case-study-timeline-content">
                <p className="case-study-timeline-stage">{milestone.stage}</p>
                <p className="case-study-work-title">{milestone.title}</p>
                <p className="case-study-timeline-description">{milestone.description}</p>
                {milestone.links ? (
                  <div className="about-timeline-link-list">
                    {milestone.links.map((link) => (
                      <Link key={link.href} href={link.href} className="about-timeline-link">
                        {link.label} <span aria-hidden="true">&rarr;</span>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareSection() {
  return (
    <section className="case-study-section" aria-labelledby="about-care-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{careSectionMeta.number}</p>
          <h2 id="about-care-title" className="case-study-section-title">
            {careSectionMeta.title}
          </h2>
        </header>

        <div className="about-care-list">
          {careStatements.map((item) => (
            <div key={item.id} className="about-care-item">
              <p className="about-care-term">{item.term}</p>
              <p className="about-care-statement">{item.statement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="case-study-section" aria-labelledby="about-approach-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{approachSectionMeta.number}</p>
          <h2 id="about-approach-title" className="case-study-section-title">
            {approachSectionMeta.title}
          </h2>
        </header>

        <p className="case-study-section-intro">{approachSectionMeta.intro}</p>

        <div className="case-study-timeline-track">
          {approachSteps.map((item, idx) => (
            <div key={item.id} className="case-study-timeline-item">
              <div className="case-study-timeline-marker">
                <span className="case-study-timeline-number">{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <div className="case-study-timeline-content">
                <p className="case-study-timeline-stage">{item.step}</p>
                <p className="case-study-timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GapsSection() {
  return (
    <section className="case-study-section" aria-labelledby="about-gaps-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{gapsSectionMeta.number}</p>
          <h2 id="about-gaps-title" className="case-study-section-title">
            {gapsSectionMeta.title}
          </h2>
        </header>

        <p className="about-gaps-statement">{gapsSectionMeta.statement}</p>

        <div className="case-study-current-areas">
          <p className="case-study-current-label">Where the work has lived</p>
          <ul className="case-study-current-list">
            {gapsAreas.map((area) => (
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

function ForwardSection() {
  return (
    <section className="case-study-section" aria-labelledby="about-forward-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{forwardSectionMeta.number}</p>
          <h2 id="about-forward-title" className="case-study-section-title">
            {forwardSectionMeta.title}
          </h2>
        </header>

        <p className="case-study-narrative-statement">{forwardStatement}</p>

        <div className="about-forward-focus-list">
          {forwardFocusAreas.map((area) => (
            <span key={area} className="about-forward-focus-item">
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutsideSection() {
  return (
    <section className="case-study-section" aria-labelledby="about-outside-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{outsideSectionMeta.number}</p>
          <h2 id="about-outside-title" className="case-study-section-title">
            {outsideSectionMeta.title}
          </h2>
        </header>

        <p className="about-outside-statement">{outsideStatement}</p>
      </div>
    </section>
  );
}

function ExploreSection() {
  return (
    <section className="case-study-section" aria-labelledby="about-explore-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">07</p>
          <h2 id="about-explore-title" className="case-study-section-title">
            Explore the Work
          </h2>
        </header>

        <div className="case-study-explore-links">
          {exploreCards.map((card) => (
            <Link key={card.id} href={card.href} className="case-study-explore-item">
              <div className="case-study-explore-content">
                <h3 className="case-study-explore-title">{card.title}</h3>
                <p className="case-study-explore-action">
                  {card.description} <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="case-study-section" aria-labelledby="about-final-cta-title">
      <div className="about-final-cta">
        <h2 id="about-final-cta-title" className="about-final-cta-title">
          {aboutFinalCta.title}
        </h2>
        <p className="about-final-cta-copy">{aboutFinalCta.copy}</p>

        <div className="about-final-cta-actions">
          <Link href="/contact" className="button button-primary">
            Get in touch <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link href="/work" className="button button-secondary">
            Explore my work <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AboutPageContent() {
  return (
    <div className="case-study-container">
      <HeroSection />
      <StorySection />
      <CareSection />
      <ApproachSection />
      <GapsSection />
      <ForwardSection />
      <OutsideSection />
      <ExploreSection />
      <FinalCtaSection />
    </div>
  );
}
