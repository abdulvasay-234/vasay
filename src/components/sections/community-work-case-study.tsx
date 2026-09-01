import Link from "next/link";

import {
  communityApproachCards,
  communityExploreItems,
  communityFocusTags,
  communityFlow,
  communityImpactCards,
  communityProjects,
  communityValues,
  communityWorkMetadata,
} from "@/content/community-work";

function HeroSection() {
  return (
    <section className="case-study-hero" aria-labelledby="community-work-hero-title">
      <div className="case-study-hero-grid">
        <div className="case-study-hero-main">
          <p className="case-study-hero-label">{communityWorkMetadata.label}</p>
          <h1 id="community-work-hero-title" className="case-study-hero-title">
            {communityWorkMetadata.title}
          </h1>
          <p className="case-study-hero-headline">{communityWorkMetadata.headline}</p>
          <p className="case-study-hero-supporting">{communityWorkMetadata.shortDescription}</p>

          <div className="case-study-hero-actions">
            {communityWorkMetadata.links.map((link) => (
              <Link key={link.label} href={link.href} className="case-study-hero-link">
                {link.label} <span aria-hidden="true">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>

        <aside className="case-study-hero-meta">
          <div className="case-study-meta-item">
            <p className="case-study-meta-label">Focus</p>
            <p className="case-study-meta-value">{communityWorkMetadata.focus}</p>
          </div>
          <div className="case-study-meta-item">
            <p className="case-study-meta-label">Approach</p>
            <p className="case-study-meta-value">{communityWorkMetadata.approach}</p>
          </div>
          <div className="case-study-meta-item">
            <p className="case-study-meta-label">Status</p>
            <p className="case-study-meta-value">{communityWorkMetadata.status}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="case-study-section" aria-labelledby="community-approach-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">02</p>
          <h2 id="community-approach-title" className="case-study-section-title">
            How I Think About Communities
          </h2>
        </header>

        <div className="community-approach-grid">
          {communityApproachCards.map((card, idx) => (
            <article key={idx} className="community-approach-card">
              <p className="community-approach-number">{String(idx + 1).padStart(2, "0")}</p>
              <h3 className="community-approach-title">{card.title}</h3>
              <p className="community-approach-copy">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcosystemWorkSection() {
  return (
    <section id="work" className="case-study-section" aria-labelledby="community-work-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">03</p>
          <h2 id="community-work-title" className="case-study-section-title">
            Work in the Ecosystem
          </h2>
        </header>

        <div className="community-project-grid">
          {communityProjects.map((project) => (
            <article key={project.title} className="community-project-card">
              <p className="community-project-label">{project.category}</p>
              <h3 className="community-project-title">{project.title}</h3>
              <p className="community-project-description">{project.description}</p>
              <Link href={project.href} className="community-project-link">
                View case study <span aria-hidden="true">&rarr;</span>
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
    <section className="case-study-section" aria-labelledby="community-impact-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">04</p>
          <h2 id="community-impact-title" className="case-study-section-title">
            Community Impact
          </h2>
        </header>

        <div className="community-impact-grid">
          {communityImpactCards.map((impact) => (
            <article key={impact.label} className="community-impact-card">
              <p className="community-impact-label">{impact.label}</p>
              <p className="community-impact-copy">{impact.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunityFlowSection() {
  return (
    <section className="case-study-section" aria-labelledby="community-flow-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">05</p>
          <h2 id="community-flow-title" className="case-study-section-title">
            More Than Just Events
          </h2>
        </header>

        <div className="community-flow">
          {communityFlow.map((step, idx) => (
            <div key={step} className="community-flow-step">
              <span className="community-flow-step-number">{String(idx + 1).padStart(2, "0")}</span>
              <span className="community-flow-step-label">{step}</span>
              {idx < communityFlow.length - 1 && (
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

function ValuesSection() {
  return (
    <section className="case-study-section" aria-labelledby="community-values-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">06</p>
          <h2 id="community-values-title" className="case-study-section-title">
            What I Value
          </h2>
        </header>

        <div className="community-value-list">
          {communityValues.map((value) => (
            <blockquote key={value} className="community-value-item">
              “{value}”
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function CurrentFocusSection() {
  return (
    <section className="case-study-section" aria-labelledby="community-focus-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">07</p>
          <h2 id="community-focus-title" className="case-study-section-title">
            Current Focus
          </h2>
        </header>

        <div className="case-study-current-areas">
          <p className="case-study-current-label">Areas</p>
          <ul className="case-study-current-list">
            {communityFocusTags.map((tag) => (
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

function ExploreSection() {
  return (
    <section className="case-study-section" aria-labelledby="community-explore-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">08</p>
          <h2 id="community-explore-title" className="case-study-section-title">
            Explore More
          </h2>
        </header>

        <div className="case-study-explore-links">
          {communityExploreItems.map((item) => (
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

function FinalCtaSection() {
  return (
    <section className="case-study-section" aria-labelledby="community-cta-title">
      <div className="case-study-section-grid">
        <header className="case-study-section-header">
          <p className="case-study-section-number">09</p>
          <h2 id="community-cta-title" className="case-study-section-title">
            Let&apos;s build something that brings people together.
          </h2>
        </header>

        <div className="community-cta-box">
          <p className="community-cta-copy">
            I am interested in working on communities, developer ecosystems, builder programs,
            partnerships, and experiences that help people move from curiosity to participation.
          </p>
          <Link href="/contact" className="case-study-footer-link">
            Get in touch <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CommunityWorkCaseStudy() {
  return (
    <div className="case-study-container">
      <HeroSection />
      <ApproachSection />
      <EcosystemWorkSection />
      <ImpactSection />
      <CommunityFlowSection />
      <ValuesSection />
      <CurrentFocusSection />
      <ExploreSection />
      <FinalCtaSection />
    </div>
  );
}
