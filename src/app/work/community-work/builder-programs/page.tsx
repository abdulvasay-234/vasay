import Link from "next/link";

import { CommunityDetailPage } from "@/components/sections/community-detail-page";
import { ShellContainer } from "@/components/layout/primitives";

export const metadata = {
  title: "Builder Programs",
  description: "Programs designed to help students and builders grow through participation, practice, and connection.",
};

export default function BuilderProgramsPage() {
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
          <span className="case-study-breadcrumb-current">Builder Programs</span>
        </nav>

        <CommunityDetailPage
          title="Builder Programs"
          number="04"
          intro="Builder programs work best when they support action, experimentation, and community connection rather than only information sharing."
          points={[
            "Designing experiences that help people move from learning into building with more confidence.",
            "Creating structure around participation, skill development, and opportunities to collaborate.",
            "Helping students and builders discover what they can create and where they can contribute.",
            "Making participation feel sustainable, practical, and connected to real communities.",
          ]}
          url="/work/community-work"
          ctaLabel="Back to Community Work"
        />
      </div>
    </ShellContainer>
  );
}
