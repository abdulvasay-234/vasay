import Link from "next/link";

import { CommunityDetailPage } from "@/components/sections/community-detail-page";
import { ShellContainer } from "@/components/layout/primitives";

export const metadata = {
  title: "Developer Events & Activations",
  description: "Event design and activation work built to create connection, participation, and momentum across communities.",
};

export default function DeveloperEventsActivationsPage() {
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
          <span className="case-study-breadcrumb-current">Developer Events &amp; Activations</span>
        </nav>

        <CommunityDetailPage
          title="Developer Events & Activations"
          number="03"
          intro="Events are most effective when they are designed as activations for connection, learning, and continued participation rather than one-time moments."
          points={[
            "Designing events that help people meet builders, communities, and peers in practical ways.",
            "Structuring sessions around curiosity, interaction, and concrete opportunities to explore.",
            "Making event experiences feel connected to the broader ecosystem instead of isolated moments.",
            "Ensuring follow-up and community continuity remain part of the activation strategy.",
          ]}
          url="/work/community-work"
          ctaLabel="Back to Community Work"
        />
      </div>
    </ShellContainer>
  );
}
