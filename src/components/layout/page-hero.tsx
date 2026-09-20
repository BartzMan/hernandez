import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  lead,
  image,
  imageAlt,
}: {
  kicker: string;
  title: string;
  lead?: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 text-cream sm:pt-36">
      <div className="mx-auto grid max-w-6xl items-end gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-12 lg:pb-16">
        <div className="lg:col-span-6 lg:pb-4">
          <p className="text-xs uppercase tracking-[0.2em] text-cream/55">{kicker}</p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
          {lead ? <p className="mt-5 max-w-xl text-cream/75">{lead}</p> : null}
        </div>
        <div className="overflow-hidden rounded-xl lg:col-span-6">
          <img src={image} alt={imageAlt} className="aspect-4/3 w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
