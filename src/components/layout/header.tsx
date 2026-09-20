import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "./logo";
import { PreviewBanner } from "./preview-banner";

export function Header() {
  const { t, lang, setLang } = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHero = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const inverted = onHero && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50",
      )}
    >
      <PreviewBanner />
      <div
        className={cn(
          "transition-[background-color,box-shadow,backdrop-filter] duration-200",
          inverted
            ? "bg-transparent"
            : "bg-paper/95 backdrop-blur-md shadow-[var(--shadow-border)]",
        )}
      >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-[4.25rem] sm:px-6">
        <Logo inverted={inverted} />

        <nav className="hidden items-center gap-7 lg:flex" aria-label={t.navAria}>
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors duration-150",
                inverted ? "text-cream/85 hover:text-cream" : "text-ink-soft hover:text-ink",
              )}
            >
              {lang === "es" ? item.labelEs : item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className={cn(
              "hidden items-center rounded-full p-0.5 text-xs font-medium sm:flex",
              inverted ? "bg-cream/10 text-cream/80" : "bg-paper-deep text-muted",
            )}
            role="group"
            aria-label={t.langToggle}
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              className={cn(
                "h-8 rounded-full px-2.5",
                lang === "en" ? (inverted ? "bg-cream text-ink" : "bg-ink text-cream") : "",
              )}
            >
              {t.english}
            </button>
            <button
              type="button"
              onClick={() => setLang("es")}
              className={cn(
                "h-8 rounded-full px-2.5",
                lang === "es" ? (inverted ? "bg-cream text-ink" : "bg-ink text-cream") : "",
              )}
            >
              {t.spanish}
            </button>
          </div>

          <a
            href={site.phoneHref}
            className={cn(
              buttonVariants({ variant: inverted ? "cream" : "primary", size: "sm" }),
              "hidden sm:inline-flex",
            )}
          >
            <Phone className="size-3.5" />
            {site.phone}
          </a>

          <button
            type="button"
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-full lg:hidden",
              inverted ? "text-cream" : "text-ink",
            )}
            aria-expanded={open}
            aria-label={open ? t.close : t.menu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-paper lg:hidden">
          <nav className="flex flex-col px-4 py-4" aria-label={t.navAria}>
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex min-h-12 items-center border-b border-line text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {lang === "es" ? item.labelEs : item.label}
              </Link>
            ))}
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={cn(
                  "h-11 flex-1 rounded-full text-sm font-medium",
                  lang === "en" ? "bg-ink text-cream" : "bg-paper-deep text-ink",
                )}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang("es")}
                className={cn(
                  "h-11 flex-1 rounded-full text-sm font-medium",
                  lang === "es" ? "bg-ink text-cream" : "bg-paper-deep text-ink",
                )}
              >
                Español
              </button>
            </div>
            <a
              href={site.phoneHref}
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-3 w-full")}
            >
              <Phone className="size-4" />
              {site.phone}
            </a>
          </nav>
        </div>
      ) : null}
      </div>
    </header>
  );
}
