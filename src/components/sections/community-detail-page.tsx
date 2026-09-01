import Link from "next/link";

export function CommunityDetailPage({
  title,
  number,
  intro,
  points,
  url,
  ctaLabel,
}: {
  title: string;
  number: string;
  intro: string;
  points: string[];
  url: string;
  ctaLabel: string;
}) {
  return (
    <>
      <section className="case-study-hero" aria-labelledby="community-detail-title">
        <div className="case-study-hero-grid">
          <div className="case-study-hero-main">
            <p className="case-study-hero-label">Community Work</p>
            <h1 id="community-detail-title" className="case-study-hero-title">
              {title}
            </h1>
            <p className="case-study-hero-headline">{intro}</p>
          </div>

          <aside className="case-study-hero-meta">
            <div className="case-study-meta-item">
              <p className="case-study-meta-label">Context</p>
              <p className="case-study-meta-value">Community • Ecosystem • Participation</p>
            </div>
            <div className="case-study-meta-item">
              <p className="case-study-meta-label">Focus</p>
              <p className="case-study-meta-value">{number}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="case-study-section" aria-labelledby="community-detail-overview-title">
        <div className="case-study-section-grid">
          <header className="case-study-section-header">
            <p className="case-study-section-number">01</p>
            <h2 id="community-detail-overview-title" className="case-study-section-title">
              Overview
            </h2>
          </header>

          <div className="case-study-context">
            <p className="case-study-context-intro">This work focuses on</p>
            <ul className="case-study-context-list">
              {points.map((point, idx) => (
                <li key={idx} className="case-study-context-item">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="case-study-footer">
        <div className="case-study-footer-content">
          <p className="case-study-footer-text">Continue exploring the broader community work.</p>
          <Link href={url} className="case-study-footer-link">
            {ctaLabel} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </footer>
    </>
  );
}
