import Link from "next/link";

import { ShellContainer } from "@/components/layout/primitives";
import { AboutPageContent } from "@/components/sections/about-page";

export const metadata = {
  title: "About",
  description:
    "The story behind community building, developer programs, HackUnion, OpenBuild Week, and open source developer education.",
};

export default function AboutRoutePage() {
  return (
    <ShellContainer>
      <div className="case-study-page-wrapper">
        <nav className="case-study-breadcrumb" aria-label="Breadcrumb">
          <Link href="/" className="case-study-breadcrumb-home">
            Home
          </Link>
          <span className="case-study-breadcrumb-separator">/</span>
          <span className="case-study-breadcrumb-current">About</span>
        </nav>

        <AboutPageContent />

        <footer className="case-study-footer">
          <div className="case-study-footer-content">
            <p className="case-study-footer-text">
              Interested in community, ecosystem, or program work?
            </p>
            <Link href="/contact" className="case-study-footer-link">
              Get in touch <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </footer>
      </div>
    </ShellContainer>
  );
}
