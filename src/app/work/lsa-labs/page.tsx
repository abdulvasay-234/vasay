import Link from "next/link";

import { ShellContainer } from "@/components/layout/primitives";
import { LsaLabsCaseStudy } from "@/components/sections/lsa-labs-case-study";

export const metadata = {
  title: "LSA Labs",
  description:
    "Program design, student learning experiences, institution collaboration, and technical operations within LSA Labs.",
};

export default function LsaLabsRoutePage() {
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
          <span className="case-study-breadcrumb-current">LSA Labs</span>
        </nav>

        <LsaLabsCaseStudy />

        <footer className="case-study-footer">
          <div className="case-study-footer-content">
            <p className="case-study-footer-text">Interested in program design, education operations, or community-building work?</p>
            <Link href="/contact" className="case-study-footer-link">
              Get in touch <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </footer>
      </div>
    </ShellContainer>
  );
}
