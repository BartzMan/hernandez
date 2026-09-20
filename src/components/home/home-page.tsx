import { Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, Phone, Star } from "lucide-react";
import { EstimateForm } from "@/components/forms/estimate-form";
import { SymptomChecker } from "@/components/tools/symptom-checker";
import { WasteCalculator } from "@/components/tools/waste-calculator";
import { buttonVariants } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { serviceAreas, services, site } from "@/lib/site";
import { cn, asset } from "@/lib/utils";

export function HomePage() {
  const { t, lang } = useLang();

  return (
    <>
      <section className="relative min-h-[100dvh] overflow-hidden bg-ink text-cream">
        <img
          src={asset("/images/backyard-turf.jpg")}
          alt="Chandler backyard after irrigation repair — even green lawn and trees"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink/88 via-ink/62 to-ink/25" />
        <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-ink/35" />

        <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end px-4 pb-28 pt-36 sm:px-6 sm:pb-20 sm:pt-40">
          <p className="text-xs uppercase tracking-[0.22em] text-cream/70">{t.heroKicker}</p>
          <h1 className="mt-4 max-w-3xl font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
            {t.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-base text-cream/80 sm:text-lg">{t.heroLead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.phoneHref} className={cn(buttonVariants({ variant: "cream", size: "lg" }))}>
              <Phone className="size-4" />
              {t.heroPrimary}
            </a>
            <Link to="/contact" className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}>
              {t.heroSecondary}
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-cream/75">
            <span className="inline-flex items-center gap-1.5">
              <Star className="size-3.5 fill-cream text-cream" />
              {t.trustRating}
            </span>
            <span>{site.years}+ {t.trustYears.toLowerCase()}</span>
            <span>{t.trustBilingual}</span>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-cream">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            { k: "4.9 / 72", v: t.trustRating },
            { k: String(site.years), v: t.trustYears },
            { k: t.trustSameDay, v: site.hours },
            { k: "Sch. 40", v: t.trustPvc },
          ].map((item) => (
            <div key={item.k}>
              <p className="font-display text-2xl text-ink">{item.k}</p>
              <p className="mt-1 text-sm text-muted">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">{t.problemKicker}</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">{t.problemTitle}</h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-lg text-muted">{t.problemLead}</p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { n: t.problemStat1, l: t.problemStat1Label },
              { n: t.problemStat2, l: t.problemStat2Label },
              { n: t.problemStat3, l: t.problemStat3Label },
            ].map((s) => (
              <div key={s.n} className="border-t border-line pt-4">
                <dt className="font-display text-3xl text-sage">{s.n}</dt>
                <dd className="mt-2 text-sm text-muted">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">{t.servicesKicker}</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">{t.servicesTitle}</h2>
              <p className="mt-4 text-muted">{t.servicesLead}</p>
            </div>
            <Link to="/services" className={cn(buttonVariants({ variant: "outline", size: "md" }))}>
              {t.servicesAll}
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group overflow-hidden rounded-xl bg-paper shadow-[var(--shadow-border)]"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={s.image}
                    alt=""
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl">
                    {lang === "es" ? s.titleEs : s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{lang === "es" ? s.teaseEs : s.tease}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sage">
                    {lang === "es" ? "Ver" : "Read"}
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SymptomChecker />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">{t.processKicker}</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">{t.processTitle}</h2>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.map((step) => (
            <li key={step.n} className="rounded-xl bg-cream p-6 shadow-[var(--shadow-border)]">
              <p className="font-display text-sm text-sage">{step.n}</p>
              <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div className="overflow-hidden rounded-xl">
            <img
              src={asset("/images/trench-pvc.jpg")}
              alt="Schedule 40 PVC irrigation pipe in an open trench with valve wiring"
              className="aspect-4/3 w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">{t.craftKicker}</p>
            <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">{t.craftTitle}</h2>
            <p className="mt-5 text-muted">{t.craftLead}</p>
            <ul className="mt-8 space-y-5">
              {t.craftPoints.map((p) => (
                <li key={p.title} className="border-t border-line pt-4">
                  <p className="font-medium text-ink">{p.title}</p>
                  <p className="mt-1 text-sm text-muted">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">{t.workKicker}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">{t.workTitle}</h2>
            <p className="mt-4 text-muted">{t.workLead}</p>
          </div>
          <Link to="/work" className={cn(buttonVariants({ variant: "outline", size: "md" }))}>
            {t.workCta}
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            asset("/images/jobsite-valves.jpg"),
            asset("/images/trench-pvc.jpg"),
            asset("/images/leak-repair.jpg"),
            asset("/images/backyard-turf.jpg"),
          ].map((src) => (
            <div key={src} className="overflow-hidden rounded-lg">
              <img src={src} alt="" className="aspect-4/5 w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">{t.reviewsKicker}</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl sm:text-5xl">{t.reviewsTitle}</h2>
          <p className="mt-4 max-w-2xl text-muted">{t.reviewsLead}</p>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {t.reviews.map((r) => (
              <blockquote
                key={r.quote}
                className="rounded-xl bg-paper p-6 shadow-[var(--shadow-border)]"
              >
                <div className="flex gap-0.5 text-sage" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-sage" />
                  ))}
                </div>
                <p className="mt-4 font-display text-xl leading-snug">“{r.quote}”</p>
                <footer className="mt-4 text-sm text-muted">{r.attr}</footer>
              </blockquote>
            ))}
          </div>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "md" }), "mt-8")}
          >
            {t.reviewsGoogle}
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src={asset("/images/paver-walk.jpg")}
          alt="Chandler Arizona yard after irrigation work"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/72" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="text-xs uppercase tracking-[0.18em] text-cream/60">{t.areasKicker}</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl text-cream sm:text-5xl">
            {t.areasTitle}
          </h2>
          <p className="mt-4 max-w-xl text-cream/75">{t.areasLead}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {serviceAreas.map((city) => (
              <span
                key={city}
                className="rounded-full bg-cream/10 px-3.5 py-1.5 text-sm text-cream"
              >
                {city}
              </span>
            ))}
          </div>
          <Link
            to="/areas"
            className={cn(buttonVariants({ variant: "cream", size: "md" }), "mt-8")}
          >
            {t.areasCta}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <WasteCalculator />
      </section>

      <section className="bg-paper-deep">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">{t.faqKicker}</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">{t.faqTitle}</h2>
          </div>
          <div className="lg:col-span-7">
            <dl className="divide-y divide-line">
              {t.faqItems.slice(0, 5).map((item) => (
                <details key={item.q} className="group py-4">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-medium">
                    {item.q}
                    <Droplets className="size-4 shrink-0 text-sage" />
                  </summary>
                  <p className="mt-3 text-muted">{item.a}</p>
                </details>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl">{t.ctaTitle}</h2>
          <p className="mt-4 max-w-md text-muted">{t.ctaLead}</p>
          <a
            href={site.phoneHref}
            className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-8")}
          >
            <Phone className="size-4" />
            {t.ctaCall} · {site.phone}
          </a>
        </div>
        <EstimateForm />
      </section>
    </>
  );
}
