import Link from "next/link";

import {
  approachSection,
  campusActivations,
  collaborationSection,
  challengeSection,
  experienceSection,
  gallerySection,
  howIWorkedSection,
  impactSection,
  learnings,
  nextSection,
  openBuildWeekMetadata,
  opportunitySection,
  exploreTheWork,
} from "@/content/openbuild-week-case-study";

function CaseStudyHero() {
  return (
    <section className="case-study-hero" aria-labelledby="openbuild-week-hero-title">
      <div className="case-study-hero-grid">
        <div className="case-study-hero-main">
          <p className="case-study-hero-label">{openBuildWeekMetadata.label}</p>
          <h1 id="openbuild-week-hero-title" className="case-study-hero-title">
            {openBuildWeekMetadata.title}
          </h1>
          <p className="case-study-hero-headline">{openBuildWeekMetadata.headline}</p>
          <p className="case-study-hero-supporting">{openBuildWeekMetadata.shortDescription}</p>

          <div className="case-study-hero-actions">
            {openBuildWeekMetadata.links.map((link) => (
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
            <p className="case-study-meta-value">{openBuildWeekMetadata.category}</p>
          </div>
          <div className="case-study-meta-item">
            <p className="case-study-meta-label">Focus</p>
            <p className="case-study-meta-value">{openBuildWeekMetadata.focus}</p>
          </div>
          <div className="case-study-meta-item">
            <p className="case-study-meta-label">Initiative</p>
            <p className="case-study-meta-value">{openBuildWeekMetadata.initiative}</p>
          </div>
          <div className="case-study-meta-item">
            <p className="case-study-meta-label">Status</p>
            <p className="case-study-meta-value">{openBuildWeekMetadata.status}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function OpportunitySection() {
  return (
    <section className="case-study-section case-study-starting-point" aria-labelledby="opportunity-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{opportunitySection.number}</p>
          <h2 id="opportunity-title" className="case-study-section-title">
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
            <p className="case-study-context-intro">The gap</p>
            <ul className="case-study-context-list">
              {opportunitySection.context.map((item, idx) => (
                <li key={idx} className="case-study-context-item">
                  {idx === 0 ? item : item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChallengeSection() {
  return (
    <section className="case-study-section case-study-challenge" aria-labelledby="challenge-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{challengeSection.number}</p>
          <h2 id="challenge-title" className="case-study-section-title">
            {challengeSection.title}
          </h2>
        </header>

        <div className="case-study-problem-grid">
          {challengeSection.points.map((point, idx) => (
            <article key={idx} className="case-study-problem-card">
              <p className="case-study-problem-index">{String(idx + 1).padStart(2, "0")}</p>
              <p className="case-study-problem-copy">{point}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="case-study-section case-study-approach" aria-labelledby="approach-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{approachSection.number}</p>
          <h2 id="approach-title" className="case-study-section-title">
            {approachSection.title}
          </h2>
        </header>

        <p className="case-study-section-intro">{approachSection.intro}</p>

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

function ExperienceSection() {
  return (
    <section className="case-study-section case-study-experience" aria-labelledby="experience-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{experienceSection.number}</p>
          <h2 id="experience-title" className="case-study-section-title">
            {experienceSection.title}
          </h2>
        </header>

        <p className="case-study-section-intro">{experienceSection.intro}</p>

        <div className="case-study-pillars">
          {experienceSection.cards.map((card, idx) => (
            <article key={idx} className="case-study-pillar">
              <h3 className="case-study-pillar-title">{card.title}</h3>
              <p className="case-study-pillar-description">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CampusActivationsSection() {
  return (
    <section className="case-study-section case-study-campus-activations" aria-labelledby="campus-activations-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">05</p>
          <h2 id="campus-activations-title" className="case-study-section-title">
            Taking the Ecosystem to Campuses
          </h2>
        </header>

        <div className="case-study-campus-list">
          {campusActivations.map((campus, idx) => (
            <article key={idx} className="case-study-campus-item">
              <p className="case-study-campus-kicker">Campus Activation</p>
              <h3 className="case-study-campus-name">{campus.name}</h3>
              <div className="case-study-campus-meta">
                <span>{campus.location}</span>
                <span>{campus.date}</span>
              </div>
              <p className="case-study-campus-description">{campus.description}</p>
              <div className="case-study-campus-actions">
                <span className="case-study-campus-gallery">{campus.galleryLabel}</span>
                {campus.href ? (
                  <Link href={campus.href} className="case-study-campus-link">
                    View details <span aria-hidden="true">&rarr;</span>
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CollaborationSection() {
  return (
    <section className="case-study-section case-study-collaboration" aria-labelledby="collaboration-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">06</p>
          <h2 id="collaboration-title" className="case-study-section-title">
            {collaborationSection.title}
          </h2>
        </header>

        <p className="case-study-section-intro">{collaborationSection.description}</p>

        <div className="case-study-working-areas">
          {collaborationSection.partners.map((partner) => (
            <article key={partner.name} className="case-study-working-area">
              <h3 className="case-study-working-area-title">{partner.name}</h3>
              <p className="case-study-working-area-description">{partner.description}</p>
            </article>
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
          <p className="case-study-section-number">{howIWorkedSection.number}</p>
          <h2 id="how-worked-title" className="case-study-section-title">
            {howIWorkedSection.title}
          </h2>
        </header>

        <div className="case-study-working-areas">
          {howIWorkedSection.cards.map((area, idx) => (
            <article key={idx} className="case-study-working-area">
              <h3 className="case-study-working-area-title">{area.title}</h3>
              <p className="case-study-working-area-description">{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="case-study-section case-study-impact" aria-labelledby="impact-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{impactSection.number}</p>
          <h2 id="impact-title" className="case-study-section-title">
            {impactSection.title}
          </h2>
        </header>

        <p className="case-study-section-intro">{impactSection.description}</p>

        <div className="case-study-impact-grid">
          {impactSection.outcomes.map((outcome) => (
            <article key={outcome.label} className="case-study-impact-card">
              <p className="case-study-impact-card-label">{outcome.label}</p>
              <p className="case-study-impact-card-value">{outcome.value}</p>
              <p className="case-study-impact-card-description">{outcome.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="case-study-section case-study-gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{gallerySection.number}</p>
          <h2 id="gallery-title" className="case-study-section-title">
            {gallerySection.title}
          </h2>
        </header>

        <div className="case-study-gallery-grid">
          {gallerySection.items.map((item, idx) => (
            <div key={idx} className={`case-study-gallery-item ${item.tone}`}>
              <div className="case-study-gallery-item-overlay">
                <p className="case-study-gallery-item-label">{item.label}</p>
                <p className="case-study-gallery-item-title">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningsSection() {
  return (
    <section className="case-study-section case-study-learned" aria-labelledby="learned-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">10</p>
          <h2 id="learned-title" className="case-study-section-title">
            What OpenBuild Week Taught Me
          </h2>
        </header>

        <div className="case-study-insights">
          {learnings.map((item, idx) => (
            <div key={item} className="case-study-insight">
              <p className="case-study-insight-number">{String(idx + 1).padStart(2, "0")}</p>
              <p className="case-study-insight-text">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NextSection() {
  return (
    <section className="case-study-section case-study-current-direction" aria-labelledby="still-building-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">{nextSection.number}</p>
          <h2 id="still-building-title" className="case-study-section-title">
            {nextSection.title}
          </h2>
        </header>

        <p className="case-study-section-intro">{nextSection.description}</p>

        <div className="case-study-current-areas">
          <p className="case-study-current-label">Direction</p>
          <ul className="case-study-current-list">
            {nextSection.tags.map((tag) => (
              <li key={tag} className="case-study-current-item">
                {tag}
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
    <section className="case-study-section case-study-explore" aria-labelledby="explore-work-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">12</p>
          <h2 id="explore-work-title" className="case-study-section-title">
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

export function OpenBuildWeekCaseStudy() {
  return (
    <div className="case-study-container">
      <CaseStudyHero />
      <OpportunitySection />
      <ChallengeSection />
      <ApproachSection />
      <ExperienceSection />
      <CampusActivationsSection />
      <CollaborationSection />
      <HowIWorkedSection />
      <ImpactSection />
      <GallerySection />
      <LearningsSection />
      <NextSection />
      <ExploreTheWorkSection />
    </div>
  );
}
