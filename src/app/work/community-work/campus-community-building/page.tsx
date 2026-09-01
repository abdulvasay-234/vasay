import Link from "next/link";

import { CommunityDetailPage } from "@/components/sections/community-detail-page";
import { ShellContainer } from "@/components/layout/primitives";

export const metadata = {
  title: "Campus Community Building",
  description: "Building community pathways that help students connect, participate, and grow beyond campus events.",
};

export default function CampusCommunityBuildingPage() {
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
          <span className="case-study-breadcrumb-current">Campus Community Building</span>
        </nav>

        <CommunityDetailPage
          title="Campus Community Building"
          number="01"
          intro="Campus communities become stronger when students are given repeated ways to connect, learn, and participate with real builders and opportunities."
          points={[
            "Helping students discover a wider ecosystem beyond classroom learning.",
            "Turning one-off events into sustained participation and follow-up pathways.",
            "Creating spaces where builders and students can continue learning together.",
            "Working with institutions and communities to make participation easier to access.",
          ]}
          url="/work/community-work"
          ctaLabel="Back to Community Work"
        />
      </div>
    </ShellContainer>
  );
}
