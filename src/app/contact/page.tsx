import Link from "next/link";

import { ShellContainer } from "@/components/layout/primitives";
import { ContactPageContent } from "@/components/sections/contact-page";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch about developer relations, community building, developer programs, ecosystems, and open source.",
};

export default function ContactRoutePage() {
  return (
    <ShellContainer>
      <div className="case-study-page-wrapper">
        <nav className="case-study-breadcrumb" aria-label="Breadcrumb">
          <Link href="/" className="case-study-breadcrumb-home">
            Home
          </Link>
          <span className="case-study-breadcrumb-separator">/</span>
          <span className="case-study-breadcrumb-current">Contact</span>
        </nav>

        <ContactPageContent />
      </div>
    </ShellContainer>
  );
}
