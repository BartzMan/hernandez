import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const symptoms = [
  {
    id: "puddle",
    en: "Puddle that never dries",
    es: "Charco que no se seca",
    slug: "leak-detection" as const,
    findEn:
      "Usually a main line, a bad coupling, or a valve that will not seat. We isolate the zone, cut out the failure, and replace it in Schedule 40 PVC — not another flex patch.",
    findEs:
      "Casi siempre es la línea principal, un cople malo, o una válvula que no sienta. Aislamos la zona, cortamos la falla y la reemplazamos en PVC Schedule 40 — no otro parche de flex.",
  },
  {
    id: "dry",
    en: "A dry ring or a dead zone",
    es: "Anillo seco o zona muerta",
    slug: "sprinkler-repair" as const,
    findEn:
      "Clogged nozzle, broken riser, a valve that is not opening, or a clock that skipped the zone. We run every station and rebuild coverage instead of guessing at one head.",
    findEs:
      "Boquilla tapada, riser roto, una válvula que no abre, o un reloj que se saltó la zona. Corremos cada estación y reconstruimos la cobertura en vez de adivinar un cabezal.",
  },
  {
    id: "mist",
    en: "Heads misting the sidewalk",
    es: "Cabezales mojando la banqueta",
    slug: "sprinkler-repair" as const,
    findEn:
      "Wrong nozzle, high pressure, or a head that has leaned after the soil settled. We re-set, re-nozzle, and add a regulator if the street pressure is the real problem.",
    findEs:
      "Boquilla incorrecta, presión alta, o un cabezal que se inclinó. Reubicamos, cambiamos boquilla, y ponemos regulador si la presión de la calle es el problema real.",
  },
  {
    id: "hiss",
    en: "Hiss in the valve box",
    es: "Silbido en la caja de válvulas",
    slug: "valve-repair" as const,
    findEn:
      "A diaphragm or solenoid that will not close. That is the leak that does not look dramatic and still empties a thousand gallons a day. We rebuild the manifold and label every valve.",
    findEs:
      "Un diafragma o solenoide que no cierra. Es la fuga que no se ve dramática y aun así se lleva mil galones al día. Reconstruimos el manifold y etiquetamos cada válvula.",
  },
  {
    id: "plants",
    en: "Shrubs dying on drip",
    es: "Arbustos muriendo en goteo",
    slug: "drip-irrigation" as const,
    findEn:
      "Pinched poly, clogged emitters, a missing filter, or a zone that has not run since the last landscaper left. We pressure-test the drip, replace bad line, and set emitter counts to the plants you have now.",
    findEs:
      "Poli pellizcado, goteros tapados, filtro faltante, o una zona que no corre desde que se fue el último jardinero. Probamos el goteo, cambiamos línea mala, y ajustamos goteros a las plantas que tienes ahora.",
  },
  {
    id: "clock",
    en: "Clock I cannot program",
    es: "Reloj que no sé programar",
    slug: "seasonal-tuneup" as const,
    findEn:
      "Blank display, wrong seasonal adjust, or a controller still on a winter schedule. We replace dead clocks, map your zones, and write the program on the inside of the door.",
    findEs:
      "Pantalla en blanco, ajuste de temporada mal, o un controlador todavía en horario de invierno. Cambiamos relojes muertos, mapeamos zonas, y escribimos el programa dentro de la tapa.",
  },
] as const;

export function SymptomChecker() {
  const { t, lang } = useLang();
  const [id, setId] = useState<(typeof symptoms)[number]["id"]>("puddle");
  const current = symptoms.find((s) => s.id === id) ?? symptoms[0];

  return (
    <section className="bg-paper-deep">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">{t.symptomKicker}</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">{t.symptomTitle}</h2>
        <p className="mt-4 max-w-xl text-muted">{t.symptomLead}</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-2 lg:col-span-5">
            {symptoms.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setId(s.id)}
                className={cn(
                  "min-h-12 rounded-lg px-4 text-left text-sm font-medium transition-colors duration-150",
                  id === s.id ? "bg-ink text-cream" : "bg-cream text-ink hover:bg-paper",
                )}
              >
                {lang === "es" ? s.es : s.en}
              </button>
            ))}
          </div>
          <div className="rounded-xl bg-cream p-6 shadow-[var(--shadow-border)] lg:col-span-7 lg:p-8">
            <p className="font-display text-2xl text-ink">
              {lang === "es" ? current.es : current.en}
            </p>
            <p className="mt-4 text-muted">{lang === "es" ? current.findEs : current.findEn}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/services/$slug"
                params={{ slug: current.slug }}
                className={cn(buttonVariants({ variant: "primary", size: "md" }))}
              >
                {lang === "es" ? "Ver el servicio" : "See the service"}
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={site.phoneHref}
                className={cn(buttonVariants({ variant: "outline", size: "md" }))}
              >
                <Phone className="size-4" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
