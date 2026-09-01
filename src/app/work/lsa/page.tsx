import Link from "next/link";

import { ShellContainer } from "@/components/layout/primitives";

export const metadata = {
  title: "LSA",
  description: "Technical programs, institutional initiatives, and community-led execution.",
};

export default function LsaPage() {
  return (
    <ShellContainer>
      <div className="case-study-page-wrapper">
        <nav className="case-study-breadcrumb" aria-label="Breadcrumb">
          <Link href="/" className="case-study-breadcrumb-home">
            Home
          </Link>
          <span className="case-study-breadcrumb-separator">/</span>
          <Link href="/work" className="case-study-breadcrumb-home">
            Work
          </Link>
          <span className="case-study-breadcrumb-separator">/</span>
          <span className="case-study-breadcrumb-current">LSA</span>
        </nav>

        <section className="case-study-section case-study-starting-point" aria-labelledby="lsa-title">
          <div className="case-study-section-grid">
            <header className="case-study-section-header">
              <p className="case-study-section-number">04</p>
              <h1 id="lsa-title" className="case-study-section-title">
                LSA
              </h1>
            </header>

            <div className="case-study-section-content">
              <div className="case-study-narrative">
                <p className="case-study-narrative-statement">
                  Program operations, institutional initiatives, and community-based execution all
                  rely on the same principle: strong execution is built through clarity, trust, and
                  repeatable systems.
                </p>
              </div>

              <div className="case-study-context">
                <p className="case-study-context-intro">Program scope</p>
                <ul className="case-study-context-list">
                  <li className="case-study-context-item">Technical program support</li>
                  <li className="case-study-context-item">Institutional engagement</li>
                  <li className="case-study-context-item">Startup and lab execution</li>
                  <li className="case-study-context-item">Content adaptation and community formats</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="case-study-footer">
          <div className="case-study-footer-content">
            <p className="case-study-footer-text">Want to talk about program design or community strategy?</p>
            <Link href="/contact" className="case-study-footer-link">
              Get in touch <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </footer>
      </div>
    </ShellContainer>
  );
}
