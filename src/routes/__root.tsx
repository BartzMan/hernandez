import { HeadContent, Link, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/layout/site-shell";
import { LocalBusinessJsonLd } from "@/components/seo/json-ld";
import { LanguageProvider } from "@/lib/i18n";
import { asset } from "@/lib/utils";
import appCss from "../styles.css?url";

const APP_NAME = "Hernandez Irrigation Repairs";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Same-day sprinkler, drip, valve, and main-line repair in Chandler, Gilbert, Mesa, and Sun Lakes. 4.9 stars from 72 Google reviews. Call (480) 572-3141.",
      },
      { name: "theme-color", content: "#1E5746" },
      { name: "robots", content: "noindex, nofollow" },
      { name: "geo.region", content: "US-AZ" },
      { name: "geo.placename", content: "Chandler" },
      {
        name: "keywords",
        content:
          "irrigation repair Chandler AZ, sprinkler repair Chandler, leak detection Gilbert, valve replacement Mesa, drip irrigation Sun Lakes, Hernandez Irrigation",
      },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: asset("/favicon.svg") },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Outfit:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: RootDocument,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-32 text-center">
      <p className="text-xs uppercase tracking-[0.18em] text-muted">404</p>
      <h1 className="mt-3 font-display text-4xl">This page is not on the map.</h1>
      <p className="mt-4 text-muted">
        The yard is still here. The URL is not. Head home or call the shop.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex h-12 items-center rounded-full bg-sage px-5 font-medium text-cream"
      >
        Back to home
      </Link>
    </section>
  );
}

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
        <LocalBusinessJsonLd />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <LanguageProvider>
            <SiteShell>
              <Outlet />
            </SiteShell>
          </LanguageProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
