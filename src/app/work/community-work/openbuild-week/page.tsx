import Link from "next/link";

import { CommunityDetailPage } from "@/components/sections/community-detail-page";
import { ShellContainer } from "@/components/layout/primitives";

export const metadata = {
  title: "OpenBuild Week",
  description: "Campus-focused community and ecosystem work bringing builder experiences to students and communities.",
};

export default function OpenBuildWeekCommunityPage() {
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
          <span className="case-study-breadcrumb-current">OpenBuild Week</span>
        </nav>

        <CommunityDetailPage
          title="OpenBuild Week"
          number="01"
          intro="OpenBuild Week brings builder experiences, technology conversations, and opportunity discovery directly into campus communities."
          points={[
            "Creating accessible entry points into developer communities and open source participation.",
            "Designing builder experiences around learning, contribution, and real-world ecosystem exposure.",
            "Helping students move from passive consumption to active participation and experimentation.",
            "Building sustainable campus pathways that continue beyond a single event or session.",
          ]}
          url="/work/community-work"
          ctaLabel="Back to Community Work"
        />
      </div>
    </ShellContainer>
  );
}
