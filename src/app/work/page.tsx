import Link from "next/link";
import { ShellContainer } from "@/components/layout/primitives";
import { selectedWorkItems } from "@/content/selected-work";

export const metadata = {
  title: "Work",
  description:
    "Case studies and program work across developer communities, campus builder programs, open source education, and ecosystem collaboration.",
};

const supportingWork = [
  {
    href: "/work/community-work",
    title: "Community Work",
    category: "Community, events, and partnerships",
    description:
      "The wider body of campus community building, activations, builder programs, and ecosystem partnerships.",
  },
  {
    href: "/work/lsa",
    title: "LSA",
    category: "Technical programs and operations",
    description:
      "Program operations, institutional engagement, and execution across technical and community initiatives.",
  },
];

export default function WorkIndexPage() {
  return (
    <ShellContainer>
      <div className="case-study-page-wrapper">
        <nav className="case-study-breadcrumb" aria-label="Breadcrumb">
          <Link href="/" className="case-study-breadcrumb-home">
            Home
          </Link>
          <span className="case-study-breadcrumb-separator">/</span>
          <span className="case-study-breadcrumb-current">Work</span>
        </nav>

        <section className="work-index" aria-labelledby="work-index-title">
          <header className="work-index-header">
            <p className="work-index-label">Work</p>
            <h1 id="work-index-title" className="work-index-title">
              Every case study, in one place.
            </h1>
            <p className="work-index-support">
              Communities, campus programs, open source education, and program design.
              Each entry links to its own case study.
            </p>
          </header>

          <ul className="work-index-list" aria-label="Case studies">
            {selectedWorkItems.map((item) => (
              <li key={item.id} className="work-index-item">
                <Link href={item.href} className="work-index-link">
                  <span className="work-index-number">{item.number}</span>
                  <span className="work-index-body">
                    <span className="work-index-category">{item.category}</span>
                    <span className="work-index-item-title">{item.title}</span>
                    <span className="work-index-copy">{item.summary}</span>
                  </span>
                  <span className="work-index-action" aria-hidden="true">
                    View case study &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="work-index-list work-index-list-supporting" aria-label="Supporting work">
            {supportingWork.map((item, index) => (
              <li key={item.href} className="work-index-item">
                <Link href={item.href} className="work-index-link">
                  <span className="work-index-number">
                    {String(selectedWorkItems.length + index + 1).padStart(2, "0")}
                  </span>
                  <span className="work-index-body">
                    <span className="work-index-category">{item.category}</span>
                    <span className="work-index-item-title">{item.title}</span>
                    <span className="work-index-copy">{item.description}</span>
                  </span>
                  <span className="work-index-action" aria-hidden="true">
                    View work &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <footer className="case-study-footer">
          <div className="case-study-footer-content">
            <p className="case-study-footer-text">
              Interested in community, ecosystem, or program work?
            </p>
            <Link href="/contact" className="case-study-footer-link">
              Get in touch <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </footer>
      </div>
    </ShellContainer>
  );
}
