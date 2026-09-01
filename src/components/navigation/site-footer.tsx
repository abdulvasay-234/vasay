import Link from "next/link";

import { contactChannels } from "@/content/contact";

const footerNavItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Playground", href: "/playground" },
  { label: "Contact", href: "/contact" },
];

const footerSocialIds = ["github", "linkedin", "hackunion"] as const;

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const socialChannels = contactChannels.filter((channel) =>
    footerSocialIds.includes(channel.id as (typeof footerSocialIds)[number]),
  );

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <p className="site-footer-name">vasay</p>
          <p className="site-footer-tagline">
            Building communities, programs, and ecosystems for builders.
          </p>
        </div>

        <nav className="site-footer-nav" aria-label="Footer navigation">
          {footerNavItems.map((item) => (
            <Link key={item.href} href={item.href} className="site-footer-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-footer-social" aria-label="Social and professional links">
          {socialChannels.map((channel) =>
            channel.href ? (
              <a
                key={channel.id}
                href={channel.href}
                target={channel.isExternal ? "_blank" : undefined}
                rel={channel.isExternal ? "noreferrer" : undefined}
                className="site-footer-link"
              >
                {channel.label}
              </a>
            ) : (
              <span key={channel.id} className="site-footer-link site-footer-link-muted" aria-hidden="true">
                {channel.label}
              </span>
            ),
          )}
        </div>

        <div className="site-footer-bottom">
          <p className="site-footer-copy">&copy; {currentYear} Vasay</p>
          <a href="#main-content" className="site-footer-top">
            Back to top <span aria-hidden="true">&uarr;</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
