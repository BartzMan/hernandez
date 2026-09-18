import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { EstimateForm } from "@/components/forms/estimate-form";
import { PageHero } from "@/components/layout/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { serviceCopy } from "@/lib/service-copy";
import { serviceBySlug, services, site, type ServiceSlug } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.service.seoTitle },
          { name: "description", content: loaderData.service.seoDesc },
        ]
      : [],
  }),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const { lang } = useLang();
  const copy = serviceCopy[service.slug as ServiceSlug];
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        kicker={lang === "es" ? service.titleEs : service.title}
        title={lang === "es" ? copy.heroEs : copy.heroEn}
        lead={lang === "es" ? service.teaseEs : service.tease}
        image={service.image}
        imageAlt={lang === "es" ? service.titleEs : service.title}
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20">
        <article className="lg:col-span-7">
          {(lang === "es" ? copy.bodyEs : copy.bodyEn).map((p) => (
            <p key={p} className="mt-5 text-lg text-muted first:mt-0">
              {p}
            </p>
          ))}
          <h2 className="mt-10 font-display text-3xl">
            {lang === "es" ? "Qué incluye" : "What this visit includes"}
          </h2>
          <ul className="mt-5 space-y-3">
            {(lang === "es" ? copy.includesEs : copy.includesEn).map((item) => (
              <li key={item} className="border-t border-line pt-3 text-ink-soft">
                {item}
              </li>
            ))}
          </ul>
          <a
            href={site.phoneHref}
            className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-10")}
          >
            <Phone className="size-4" />
            {site.phone}
          </a>
        </article>
        <aside className="lg:col-span-5">
          <EstimateForm />
        </aside>
      </section>
      <section className="border-t border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl">
            {lang === "es" ? "También hacemos" : "Also on the truck"}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.slice(0, 3).map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="rounded-xl bg-paper p-5 shadow-[var(--shadow-border)]"
              >
                <h3 className="font-display text-xl">{lang === "es" ? s.titleEs : s.title}</h3>
                <p className="mt-2 text-sm text-muted">{lang === "es" ? s.teaseEs : s.tease}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sage">
                  {lang === "es" ? "Ver" : "See"}
                  <ArrowRight className="size-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
