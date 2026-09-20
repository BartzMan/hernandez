import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { services, site } from "@/lib/site";
import { cn, asset } from "@/lib/utils";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Irrigation Services in Chandler AZ | Hernandez Irrigation" },
      {
        name: "description",
        content:
          "Sprinkler repair, leak detection, valves, drip, and seasonal tune-ups in Chandler, Gilbert, Mesa, and Sun Lakes.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { lang } = useLang();
  return (
    <>
      <PageHero
        kicker={lang === "es" ? "Servicios" : "Services"}
        title={
          lang === "es"
            ? "Cada falla del patio tiene un nombre. Nosotros lo encontramos."
            : "Every yard failure has a name. We find it."
        }
        lead={
          lang === "es"
            ? "Aspersores, fugas, válvulas, goteo, ajustes de temporada. Un equipo, un estándar: Schedule 40, cajas etiquetadas, patio limpio."
            : "Sprinklers, leaks, valves, drip, seasonal tune-ups. One crew, one standard: Schedule 40, labeled boxes, a clean yard."
        }
        image={asset("/images/jobsite-valves.jpg")}
        imageAlt="Irrigation valve manifold and tools on a Chandler jobsite"
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-8">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group grid overflow-hidden rounded-xl bg-cream shadow-[var(--shadow-border)] md:grid-cols-5"
            >
              <div className="md:col-span-2">
                <img
                  src={s.image}
                  alt=""
                  className="aspect-4/3 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:col-span-3 md:p-10">
                <h2 className="font-display text-3xl">
                  {lang === "es" ? s.titleEs : s.title}
                </h2>
                <p className="mt-3 max-w-xl text-muted">{lang === "es" ? s.teaseEs : s.tease}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-sage">
                  {lang === "es" ? "Leer más" : "Read more"}
                  <ArrowRight className="size-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <a
          href={site.phoneHref}
          className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-12")}
        >
          <Phone className="size-4" />
          {site.phone}
        </a>
      </section>
    </>
  );
}
