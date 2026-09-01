import Link from "next/link";

import { ShellContainer } from "@/components/layout/primitives";
import { PlaygroundSection } from "@/components/sections/playground";

export const metadata = {
  title: "Playground",
  description: "A place for exploring ecosystem design and interactive thinking experiments.",
};

export default function PlaygroundRoutePage() {
  return (
    <ShellContainer>
      <div className="case-study-page-wrapper">
        <nav className="case-study-breadcrumb" aria-label="Breadcrumb">
          <Link href="/" className="case-study-breadcrumb-home">
            Home
          </Link>
          <span className="case-study-breadcrumb-separator">/</span>
          <span className="case-study-breadcrumb-current">Playground</span>
        </nav>

        <section className="case-study-section case-study-starting-point" aria-labelledby="playground-page-title">
          <div className="case-study-section-grid">
            <header className="case-study-section-header">
              <p className="case-study-section-number">06</p>
              <h1 id="playground-page-title" className="case-study-section-title">
                Playground
              </h1>
            </header>

            <div className="case-study-section-content">
              <div className="case-study-narrative">
                <p className="case-study-narrative-statement">
                  This space is for experimenting with system thinking, community design, and the kind
                  of problems that appear when ecosystems are built with intention.
                </p>
              </div>

              <div className="case-study-context">
                <p className="case-study-context-intro">Current theme</p>
                <ul className="case-study-context-list">
                  <li className="case-study-context-item">Ecosystem patterns</li>
                  <li className="case-study-context-item">Participation loops</li>
                  <li className="case-study-context-item">Design experiments</li>
                  <li className="case-study-context-item">Learning by making</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <PlaygroundSection />

        <footer className="case-study-footer">
          <div className="case-study-footer-content">
            <p className="case-study-footer-text">Return to the portfolio.</p>
            <Link href="/#selected-work" className="case-study-footer-link">
              Browse selected work <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </footer>
      </div>
    </ShellContainer>
  );
}
