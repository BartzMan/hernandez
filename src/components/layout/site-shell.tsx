import type { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { StickyCall } from "./sticky-call";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <Header />
      <main className="pb-20 sm:pb-0">{children}</main>
      <Footer />
      <StickyCall />
    </div>
  );
}
