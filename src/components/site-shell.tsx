import type { PropsWithChildren } from "react";

import { SiteFooter } from "@/components/navigation/site-footer";
import { SiteNav } from "@/components/navigation/site-nav";

export function SiteShell({ children }: PropsWithChildren) {
  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteNav />
      <main id="main-content" className="main-shell">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
