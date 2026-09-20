import { asset } from "@/lib/utils";

export const site = {
  name: "Hernandez Irrigation Repairs",
  legalName: "Hernandez Irrigation & Repairs LLC",
  shortName: "Hernandez Irrigation",
  phone: "(480) 572-3141",
  phoneHref: "tel:+14805723141",
  smsHref: "sms:+14805723141",
  facebook: "https://www.facebook.com/Hernandezsprinklerrepairs/",
  mapsUrl: "https://maps.google.com/?cid=10724938023164225648",
  address: {
    street: "1692 E Golden Ln",
    city: "Chandler",
    state: "AZ",
    zip: "85225",
    country: "USA",
    full: "1692 E Golden Ln, Chandler, AZ 85225",
  },
  geo: { lat: 33.325232, lng: -111.8098 },
  rating: 4.9,
  reviewCount: 72,
  founded: 2016,
  years: new Date().getFullYear() - 2016,
  hours: "Same-day appointments · Leaks answered the day you call",
} as const;

export const serviceAreas = [
  "Chandler",
  "Gilbert",
  "Mesa",
  "Sun Lakes",
] as const;

export const nav = [
  { href: "/services", label: "Services", labelEs: "Servicios" },
  { href: "/work", label: "Work", labelEs: "Trabajos" },
  { href: "/about", label: "About", labelEs: "Nosotros" },
  { href: "/areas", label: "Areas", labelEs: "Áreas" },
  { href: "/contact", label: "Contact", labelEs: "Contacto" },
] as const;

export type ServiceSlug =
  | "sprinkler-repair"
  | "leak-detection"
  | "valve-repair"
  | "drip-irrigation"
  | "seasonal-tuneup";

export const services: Array<{
  slug: ServiceSlug;
  href: `/services/${ServiceSlug}`;
  image: string;
  title: string;
  titleEs: string;
  tease: string;
  teaseEs: string;
  seoTitle: string;
  seoDesc: string;
}> = [
  {
    slug: "sprinkler-repair",
    href: "/services/sprinkler-repair",
    image: asset("/images/backyard-turf.jpg"),
    title: "Sprinkler repair",
    titleEs: "Reparación de aspersores",
    tease: "Broken heads, dry rings, overspray onto the driveway — we rebuild coverage the way the yard was designed.",
    teaseEs: "Cabezales rotos, anillos secos, riego en la entrada: reconstruimos la cobertura como el patio fue diseñado.",
    seoTitle: "Sprinkler Repair Chandler AZ | Hernandez Irrigation",
    seoDesc:
      "Same-day sprinkler head, nozzle, and zone repair in Chandler, Gilbert, Mesa, and Sun Lakes. Coverage rebuilt, not patched.",
  },
  {
    slug: "leak-detection",
    href: "/services/leak-detection",
    image: asset("/images/leak-repair.jpg"),
    title: "Leak detection & main lines",
    titleEs: "Detección de fugas y línea principal",
    tease: "The leak you cannot see is the one on the water bill. We find it, cut it out, and replace it in Schedule 40 PVC.",
    teaseEs: "La fuga que no ves es la que llega en el recibo. La encontramos y la reemplazamos en PVC Schedule 40.",
    seoTitle: "Irrigation Leak Detection Chandler AZ | Main Line Repair",
    seoDesc:
      "Underground irrigation leak detection and main-line repair in Chandler AZ. No flex-pipe shortcuts — Schedule 40 PVC.",
  },
  {
    slug: "valve-repair",
    href: "/services/valve-repair",
    image: asset("/images/jobsite-valves.jpg"),
    title: "Valves & manifolds",
    titleEs: "Válvulas y manifolds",
    tease: "A weeping valve wastes more water than a broken head. We rebuild boxes so they stay dry, labeled, and serviceable.",
    teaseEs: "Una válvula que gotea gasta más agua que un cabezal roto. Reconstruimos cajas secas, etiquetadas y servibles.",
    seoTitle: "Irrigation Valve Repair Chandler AZ | Manifold Rebuilds",
    seoDesc:
      "Irrigation valve replacement, solenoid repair, and manifold rebuilds in Chandler, Gilbert, Mesa, and Sun Lakes.",
  },
  {
    slug: "drip-irrigation",
    href: "/services/drip-irrigation",
    image: asset("/images/paver-walk.jpg"),
    title: "Drip systems",
    titleEs: "Sistemas de goteo",
    tease: "Desert plants die from two things: too little water, or a drip line that has been leaking for months. We fix both.",
    teaseEs: "Las plantas del desierto mueren por falta de agua o por una línea de goteo que lleva meses goteando. Arreglamos ambas.",
    seoTitle: "Drip Irrigation Repair Chandler AZ | Desert Landscape",
    seoDesc:
      "Drip irrigation repair for desert plantings in Chandler, Gilbert, Mesa, and Sun Lakes. Emitters, poly, filters, pressure.",
  },
  {
    slug: "seasonal-tuneup",
    href: "/services/seasonal-tuneup",
    image: asset("/images/trench-pvc.jpg"),
    title: "Seasonal tune-ups",
    titleEs: "Ajustes de temporada",
    tease: "Arizona does not have a true off-season. A 45-minute walkthrough in March saves a dead lawn in June.",
    teaseEs: "Arizona no tiene temporada baja. Un recorrido de 45 minutos en marzo salva el césped en junio.",
    seoTitle: "Irrigation Tune-Up Chandler AZ | Seasonal Sprinkler Start-Up",
    seoDesc:
      "Seasonal irrigation checkups in Chandler AZ: clocks, coverage, leaks, and pressure — before summer heat hits.",
  },
];

export function serviceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
