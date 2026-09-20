import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageSquare, Phone } from "lucide-react";
import { EstimateForm } from "@/components/forms/estimate-form";
import { PageHero } from "@/components/layout/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";
import { cn, asset } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Hernandez Irrigation Repairs | (480) 572-3141" },
      {
        name: "description",
        content:
          "Call or text (480) 572-3141 for same-day irrigation repair in Chandler AZ. 1692 E Golden Ln.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  return (
    <>
      <PageHero
        kicker={t.contactKicker}
        title={t.contactTitle}
        lead={t.contactLead}
        image={asset("/images/leak-repair.jpg")}
        imageAlt="Irrigation leak excavated in Arizona soil"
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20">
        <div className="space-y-6 lg:col-span-5">
          <a
            href={site.phoneHref}
            className="flex min-h-16 items-center gap-4 rounded-xl bg-cream px-5 shadow-[var(--shadow-border)]"
          >
            <Phone className="size-5 text-sage" />
            <span>
              <span className="block text-xs uppercase tracking-[0.16em] text-muted">{t.call}</span>
              <span className="font-display text-2xl">{site.phone}</span>
            </span>
          </a>
          <a
            href={site.smsHref}
            className="flex min-h-16 items-center gap-4 rounded-xl bg-cream px-5 shadow-[var(--shadow-border)]"
          >
            <MessageSquare className="size-5 text-sage" />
            <span>
              <span className="block text-xs uppercase tracking-[0.16em] text-muted">
                {t.textUs}
              </span>
              <span className="font-medium">{t.stickyText}</span>
            </span>
          </a>
          <div className="rounded-xl bg-cream p-5 shadow-[var(--shadow-border)]">
            <div className="flex gap-4">
              <MapPin className="size-5 text-sage" />
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted">{t.contactAddress}</p>
                <p className="mt-1 font-medium">{site.address.full}</p>
                <p className="mt-2 text-sm text-muted">{t.contactHours}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
              >
                {t.mapCta}
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <EstimateForm />
        </div>
      </section>
    </>
  );
}
