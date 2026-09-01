import Link from "next/link";

import { CommunityDetailPage } from "@/components/sections/community-detail-page";
import { ShellContainer } from "@/components/layout/primitives";

export const metadata = {
  title: "Open Source & GitHub Programs",
  description: "Programs that help students move toward open source participation, contribution, and ecosystem discovery.",
};

export default function OpenSourceGitHubProgramsPage() {
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
          <Link href="/work/community-work" className="case-study-breadcrumb-home">
            Community Work
          </Link>
          <span className="case-study-breadcrumb-separator">/</span>
          <span className="case-study-breadcrumb-current">Open Source &amp; GitHub Programs</span>
        </nav>

        <CommunityDetailPage
          title="Open Source & GitHub Programs"
          number="02"
          intro="Open source participation becomes more meaningful when students see the practical value of contributing, collaborating, and learning inside real communities."
          points={[
            "Introducing students to contribution as a real, accessible pathway rather than a distant concept.",
            "Connecting learning moments to community practice, collaboration, and public work.",
            "Creating entry points for participation in developer ecosystems and open source communities.",
            "Designing experiences that encourage curiosity, contribution, and ongoing engagement.",
          ]}
          url="/work/community-work"
          ctaLabel="Back to Community Work"
        />
      </div>
    </ShellContainer>
  );
}
