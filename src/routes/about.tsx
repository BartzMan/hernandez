import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";
import { cn, asset } from "@/lib/utils";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Hernandez Irrigation Repairs | Chandler AZ since 2016" },
      {
        name: "description",
        content:
          "Family-run irrigation company in Chandler, Arizona. Pedro Hernandez Giron and Ana Ramos Pacheco. 4.9 stars, Schedule 40 PVC, East Valley neighbors since 2016.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();
  return (
    <>
      <PageHero
        kicker={t.aboutKicker}
        title={t.aboutTitle}
        lead={t.aboutP1}
        image={asset("/images/craft-hands.jpg")}
        imageAlt="Hands assembling a Schedule 40 PVC irrigation manifold"
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7">
          <p className="text-lg text-muted">{t.aboutP2}</p>
          <p className="mt-5 text-lg text-muted">{t.aboutP3}</p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { n: t.aboutStat1, l: t.aboutStat1Label },
              { n: t.aboutStat2, l: t.aboutStat2Label },
              { n: t.aboutStat3, l: t.aboutStat3Label },
            ].map((s) => (
              <div key={s.l} className="border-t border-line pt-4">
                <dt className="font-display text-3xl text-sage">{s.n}</dt>
                <dd className="mt-2 text-sm text-muted">{s.l}</dd>
              </div>
            ))}
          </dl>
          <a
            href={site.phoneHref}
            className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-10")}
          >
            <Phone className="size-4" />
            {site.phone}
          </a>
        </div>
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-xl">
            <img
              src={asset("/images/jobsite-valves.jpg")}
              alt="Valve manifold, tools, and pressure regulators on a Hernandez jobsite"
              className="aspect-4/5 w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
