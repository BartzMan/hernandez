import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { gallery } from "@/lib/gallery";
import { useLang } from "@/lib/i18n";
import { asset } from "@/lib/utils";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Irrigation Work Gallery | Hernandez Irrigation Chandler AZ" },
      {
        name: "description",
        content:
          "Real Hernandez Irrigation jobs in the East Valley: Schedule 40 trenches, valve manifolds, leak repairs, turf, and paver-edge systems.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero
        kicker={t.workKicker}
        title={t.workPageTitle}
        lead={t.workPageLead}
        image={asset("/images/backyard-turf.jpg")}
        imageAlt="Finished Chandler backyard with turf and pavers"
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((item) => (
            <figure key={item.src} className="mb-4 break-inside-avoid overflow-hidden rounded-xl">
              <img src={item.src} alt={item.alt} className="w-full object-cover" />
              <figcaption className="bg-cream px-4 py-3 text-sm text-muted">
                {lang === "es" ? item.captionEs : item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
