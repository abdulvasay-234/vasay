"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Playground", href: "/playground" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

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

  // The trigger is hidden at desktop widths, so a resize past the breakpoint must close the panel.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 960px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      closeRef.current?.focus();
    }
  }, [isMenuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <header className="site-header" data-menu-open={isMenuOpen ? "true" : "false"}>
      <nav className="site-nav" aria-label="Primary">
        <Link className="wordmark" href="/" aria-current={pathname === "/" ? "page" : undefined}>
          vasay
        </Link>

        <button
          type="button"
          ref={triggerRef}
          className="menu-trigger"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          Menu
        </button>

        <ul className="desktop-nav-list">
          {navItems.map((item) => {
            const isActive = !item.href.includes("#") && pathname.startsWith(item.href);
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
          href="/contact"
          className="button button-primary contact-desktop"
          aria-current={pathname.startsWith("/contact") ? "page" : undefined}
        >
          Contact
        </Link>
      </nav>

      <div
        id="mobile-menu"
        className="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!isMenuOpen}
      >
        <div className="mobile-menu-bar">
          <Link className="wordmark" href="/" onClick={() => setMenuOpen(false)}>
            vasay
          </Link>

          <button
            type="button"
            ref={closeRef}
            className="menu-close"
            onClick={closeMenu}
          >
            Close <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navItems.map((item) => {
            const isActive = !item.href.includes("#") && pathname.startsWith(item.href);
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
              href="/contact"
              className="button button-primary mobile-contact"
              aria-current={pathname.startsWith("/contact") ? "page" : undefined}
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
