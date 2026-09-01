import Link from "next/link";

import { ShellContainer } from "@/components/layout/primitives";
import { CommunityWorkCaseStudy } from "@/components/sections/community-work-case-study";

export const metadata = {
  title: "Community Work",
  description:
    "Community building, developer ecosystems, campus engagement, partnerships, and builder programs.",
};

export default function CommunityWorkRoutePage() {
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
          <span className="case-study-breadcrumb-current">Community Work</span>
        </nav>

        <CommunityWorkCaseStudy />

        <footer className="case-study-footer">
          <div className="case-study-footer-content">
            <p className="case-study-footer-text">Interested in community strategy and ecosystem building?</p>
            <Link href="/contact" className="case-study-footer-link">
              Get in touch <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </footer>
      </div>
    </ShellContainer>
  );
}
