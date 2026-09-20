import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { serviceAreas, site } from "@/lib/site";
import { cn, asset } from "@/lib/utils";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      {
        title: "Irrigation Repair Service Area | Chandler, Gilbert, Mesa, Sun Lakes",
      },
      {
        name: "description",
        content:
          "Hernandez Irrigation Repairs serves Chandler, Gilbert, Mesa, and Sun Lakes, Arizona.",
      },
    ],
  }),
  component: AreasPage,
});

const areaNotes: Record<string, { en: string; es: string }> = {
  Chandler: {
    en: "Home base. Same-day leak calls across 85224, 85225, 85226, 85248, 85249, and 85286.",
    es: "Base. Fugas el mismo día en 85224, 85225, 85226, 85248, 85249 y 85286.",
  },
  Gilbert: {
    en: "Power Ranch, Agritopia, and the HOAs that run drip all summer. Valves and poly conversions weekly.",
    es: "Power Ranch, Agritopia y los HOAs que corren goteo todo el verano. Válvulas y conversiones de poli cada semana.",
  },
  Mesa: {
    en: "East Mesa laterals, older clocks, and main lines that have been flex since the house was built.",
    es: "Laterales del este de Mesa, relojes viejos y líneas principales que son flex desde que se construyó la casa.",
  },
  "Sun Lakes": {
    en: "55+ communities that want clean work and a tech who will explain the clock. Neighbors already send Pedro.",
    es: "Comunidades 55+ que quieren trabajo limpio y un técnico que explique el reloj. Los vecinos ya mandan a Pedro.",
  },
};

function AreasPage() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero
        kicker={t.areasKicker}
        title={t.areasPageTitle}
        lead={t.areasPageLead}
        image={asset("/images/backyard-turf.jpg")}
        imageAlt="Chandler backyard after irrigation repair"
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2">
          {serviceAreas.map((city) => (
            <article key={city} className="rounded-xl bg-cream p-6 shadow-[var(--shadow-border)]">
              <h2 className="font-display text-2xl">{city}, AZ</h2>
              <p className="mt-3 text-sm text-muted">
                {lang === "es" ? areaNotes[city].es : areaNotes[city].en}
              </p>
            </article>
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
