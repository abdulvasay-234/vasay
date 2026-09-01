import Link from "next/link";

import { CommunityDetailPage } from "@/components/sections/community-detail-page";
import { ShellContainer } from "@/components/layout/primitives";

export const metadata = {
  title: "Ecosystem Partnerships",
  description: "Partnership-led community work connecting institutions, communities, and builder opportunities.",
};

export default function EcosystemPartnershipsPage() {
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
          <span className="case-study-breadcrumb-current">Ecosystem Partnerships</span>
        </nav>

        <CommunityDetailPage
          title="Ecosystem Partnerships"
          number="05"
          intro="Community work grows stronger when it brings communities, institutions, and ecosystem partners into the same pathway for participation and opportunity."
          points={[
            "Building relationships between campuses, communities, and potential partners.",
            "Creating access to relevant conversations, opportunities, and networked support.",
            "Making ecosystem participation more visible and easier to discover for students.",
            "Developing the trust and continuity required for long-term community growth.",
          ]}
          url="/work/community-work"
          ctaLabel="Back to Community Work"
        />
      </div>
    </ShellContainer>
  );
}
