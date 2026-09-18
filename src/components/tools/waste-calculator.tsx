import { useMemo, useState } from "react";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const RATE = 3.65; // approx Chandler / East Valley $ per 1,000 gal

const leaks = [
  { id: "head", gal: 180, en: "Broken sprinkler head", es: "Cabezal de aspersor roto" },
  { id: "drip", gal: 120, en: "Drip line leak", es: "Fuga en línea de goteo" },
  { id: "valve", gal: 900, en: "Weeping / stuck valve", es: "Válvula que gotea o no cierra" },
  { id: "main", gal: 2200, en: "Main line split", es: "Línea principal partida" },
] as const;

export function WasteCalculator() {
  const { t, lang } = useLang();
  const [id, setId] = useState<(typeof leaks)[number]["id"]>("valve");
  const [days, setDays] = useState(14);

  const leak = leaks.find((l) => l.id === id) ?? leaks[2];
  const math = useMemo(() => {
    const gallons = leak.gal * days;
    const cost = (gallons / 1000) * RATE;
    return { gallons, cost };
  }, [leak, days]);

  return (
    <div className="rounded-xl bg-ink p-6 text-cream sm:p-8">
      <p className="text-xs uppercase tracking-[0.18em] text-cream/50">{t.calcKicker}</p>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl">{t.calcTitle}</h2>
      <p className="mt-3 max-w-xl text-cream/70">{t.calcLead}</p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {leaks.map((l) => (
          <button
            key={l.id}
            type="button"
            onClick={() => setId(l.id)}
            className={cn(
              "min-h-12 rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors duration-150",
              id === l.id ? "bg-cream text-ink" : "bg-cream/8 text-cream/80 hover:bg-cream/12",
            )}
          >
            {lang === "es" ? l.es : l.en}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <label htmlFor="days" className="text-sm text-cream/70">
          {lang === "es" ? "Días que lleva así" : "Days it has been like this"} · {days}
        </label>
        <input
          id="days"
          type="range"
          min={1}
          max={60}
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          className="mt-3 w-full accent-sage"
        />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-cream/8 p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-cream/50">
            {lang === "es" ? "Galones desperdiciados" : "Gallons wasted"}
          </p>
          <p className="mt-2 font-display text-4xl tabular-nums">
            {math.gallons.toLocaleString()}
          </p>
        </div>
        <div className="rounded-lg bg-cream/8 p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-cream/50">
            {lang === "es" ? "Agua aproximada" : "Approx. water cost"}
          </p>
          <p className="mt-2 font-display text-4xl tabular-nums">${math.cost.toFixed(0)}</p>
        </div>
      </div>
      <p className="mt-4 text-xs text-cream/45">
        {lang === "es"
          ? "Estimación a ~$3.65 / 1,000 gal. El desagüe y las multas del HOA no están incluidas."
          : "Estimate at ~$3.65 / 1,000 gal. Sewer charges and HOA fines are not included."}
      </p>
      <a
        href={site.phoneHref}
        className={cn(buttonVariants({ variant: "cream", size: "lg" }), "mt-6")}
      >
        {t.ctaCall} · {site.phone}
      </a>
    </div>
  );
}
