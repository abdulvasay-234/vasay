import Link from "next/link";

import { ShellContainer } from "@/components/layout/primitives";
import { OpenBuildWeekCaseStudy } from "@/components/sections/openbuild-week-case-study";

export const metadata = {
  title: "OpenBuild Week",
  description:
    "A campus-focused builder initiative bringing developer communities, open source learning, and opportunities directly to students.",
};

export default function OpenBuildWeekRoutePage() {
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
          <span className="case-study-breadcrumb-current">OpenBuild Week</span>
        </nav>

        <OpenBuildWeekCaseStudy />

        <footer className="case-study-footer">
          <div className="case-study-footer-content">
            <p className="case-study-footer-text">Interested in community, ecosystem, or program work?</p>
            <Link href="/contact" className="case-study-footer-link">
              Get in touch <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </footer>
      </div>
    </ShellContainer>
  );
}
