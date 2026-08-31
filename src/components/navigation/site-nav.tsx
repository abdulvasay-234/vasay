"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Work", href: "/#selected-work" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Writing", href: "/#writing" },
  { label: "Speaking & Events", href: "/#speaking-events" },
  { label: "About", href: "/#about" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="site-header" data-menu-open={isMenuOpen ? "true" : "false"}>
      <nav className="site-nav" aria-label="Primary">
        <Link className="wordmark" href="/" aria-current={pathname === "/" ? "page" : undefined}>
          vasay
        </Link>

        <button
          type="button"
          className="menu-trigger"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          Menu
        </button>

        <ul className="desktop-nav-list">
          {navItems.map((item) => {
            const isActive = pathname === "/" && item.href === "/";
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link"
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/#contact"
          className="button button-primary contact-desktop"
        >
          Contact
        </Link>
      </nav>

      <div id="mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Site menu">
        <ul className="mobile-nav-list">
          {navItems.map((item) => {
            const isActive = pathname === "/" && item.href === "/";
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="mobile-nav-link"
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/#contact"
              className="button button-primary mobile-contact"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
