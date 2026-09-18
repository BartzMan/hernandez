import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { nav, serviceAreas, services, site } from "@/lib/site";
import { Logo } from "./logo";

export function Footer() {
  const { t, lang } = useLang();

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo inverted />
          <p className="mt-5 max-w-sm text-cream/70">{t.footerTag}</p>
          <a
            href={site.phoneHref}
            className="mt-6 inline-block font-display text-3xl tracking-tight text-cream"
          >
            {site.phone}
          </a>
          <p className="mt-2 text-sm text-cream/55">{site.address.full}</p>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.18em] text-cream/45">
            {lang === "es" ? "Sitio" : "Site"}
          </p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="text-cream/80 hover:text-cream">
                  {lang === "es" ? item.labelEs : item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.18em] text-cream/45">
            {lang === "es" ? "Servicios" : "Services"}
          </p>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="text-cream/80 hover:text-cream">
                  {lang === "es" ? s.titleEs : s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-cream/45 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {t.footerCopy}
          </p>
          <p className="max-w-md md:text-right">{t.footerPrivacy}</p>
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
          <p className="text-xs leading-relaxed text-cream/35">
            {serviceAreas.join(" · ")} ·{" "}
            {lang === "es" ? "Riego y aspersores" : "Irrigation & sprinkler repair"}
          </p>
        </div>
      </div>
    </footer>
  );
}
