import Link from "next/link";

import { ShellContainer } from "@/components/layout/primitives";
import { LordsGithubCaseStudy } from "@/components/sections/lords-github-case-study";

export const metadata = {
  title: "Lords Institute × GitHub",
  description:
    "Open source education and developer ecosystem work introducing students to GitHub, collaboration, and public project workflows.",
};

export default function LordsGithubRoutePage() {
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
          <span className="case-study-breadcrumb-current">Lords Institute × GitHub</span>
        </nav>

        <LordsGithubCaseStudy />

        <footer className="case-study-footer">
          <div className="case-study-footer-content">
            <p className="case-study-footer-text">Interested in developer education or open-source community work?</p>
            <Link href="/contact" className="case-study-footer-link">
              Get in touch <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </footer>
      </div>
    </ShellContainer>
  );
}
