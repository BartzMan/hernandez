import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "es";

const STORAGE_KEY = "hir-lang";

const dict = {
  en: {
    brandKicker: "East Valley · Since 2016",
    navAria: "Primary",
    call: "Call",
    textUs: "Text us",
    getEstimate: "Get a same-day look",
    menu: "Menu",
    close: "Close",
    english: "EN",
    spanish: "ES",
    langToggle: "Language",
    heroKicker: "Chandler · Gilbert · Mesa · Sun Lakes",
    heroTitle: "The leak you cannot see is the one that costs you.",
    heroLead:
      "Hernandez Irrigation Repairs is the East Valley crew neighbors send when a valve is weeping, a zone is dead, or last year’s patch job failed in the heat. We diagnose first. We rebuild in Schedule 40 PVC. We walk the yard with you before we leave.",
    heroPrimary: "Call (480) 572-3141",
    heroSecondary: "Request an estimate",
    heroPhotoCredit: "Work from this crew — Chandler backyards, finished.",
    trustRating: "4.9 from 72 Google reviews",
    trustYears: "Years in Chandler",
    trustSameDay: "Same-day leak calls",
    trustPvc: "Schedule 40 — not flex pipe",
    trustBilingual: "English & Español",
    problemKicker: "Arizona water is not cheap",
    problemTitle: "A stuck valve can spend more in a week than the repair.",
    problemLead:
      "East Valley yards fail in the same handful of ways: a solenoid that will not close, a poly line that split under the pavers, a clock that still thinks it is February. We find the real failure — not the nearest head — and we fix it so it does not come back in July.",
    problemStat1: "1,000+",
    problemStat1Label: "gallons a broken valve can waste in a day",
    problemStat2: "Sch. 40",
    problemStat2Label: "PVC on repairs that used to be flex",
    problemStat3: "Same day",
    problemStat3Label: "for active leaks across the East Valley",
    servicesKicker: "What we actually do",
    servicesTitle: "Repair, rebuild, and make the yard drink evenly.",
    servicesLead:
      "We are irrigation specialists — not a landscaping crew that “also does sprinklers.” Every visit is diagnose, repair, pressure-test, and a walk-through you can understand.",
    servicesAll: "See every service",
    processKicker: "How a visit works",
    processTitle: "No mystery invoice. No disappearing after the trench is filled.",
    process: [
      {
        n: "01",
        title: "You call or text",
        body: "Tell us the city, the symptom, and a photo if you have one. Active leaks get first priority the same day.",
      },
      {
        n: "02",
        title: "We diagnose on site",
        body: "Clock, valves, pressure, and every zone. You get a plain-English explanation and a number before we cut pipe.",
      },
      {
        n: "03",
        title: "We rebuild it right",
        body: "Schedule 40 PVC, proper primer, labeled valves, heads set to the bed — not a coupler buried and hoped for.",
      },
      {
        n: "04",
        title: "We run it with you",
        body: "Every zone on. Coverage checked. Yard left clean. You know what was done and how to run the clock.",
      },
    ],
    craftKicker: "The Hernandez standard",
    craftTitle: "If it was flex pipe, that is why it failed.",
    craftLead:
      "Pedro does not “patch poly and pray.” On main lines and laterals that keep splitting, we cut the failure out and replace it with Schedule 40 PVC — the pipe that belongs under Arizona soil. Neighbors on Nextdoor notice. The water bill notices.",
    craftPoints: [
      { title: "Diagnose before you dig", body: "We do not sell a new system to hide a $40 solenoid." },
      { title: "Clean work, filled right", body: "Trenches compacted, gravel raked, turf seams set. Your yard should not look like a jobsite when we leave." },
      { title: "You understand the clock", body: "We program it for this season and show you how to change it when monsoon hits." },
    ],
    workKicker: "From this crew",
    workTitle: "Real trenches. Real backyards. Real finish.",
    workLead: "These are Hernandez jobs — not stock photos of someone else’s work.",
    workCta: "See the full gallery",
    reviewsKicker: "Neighbors, not ads",
    reviewsTitle: "4.9 stars. Seventy-two Google reviews. The East Valley already knows.",
    reviewsLead:
      "We do not invent testimonials. What follows is how neighbors actually talk about this crew — on Nextdoor, and in the Google rating sitting on the listing.",
    reviewsGoogle: "Read Google reviews",
    reviews: [
      {
        quote: "Very clean work.",
        attr: "Sun Lakes neighbor · Nextdoor",
      },
      {
        quote:
          "Pedro Hernandez. Competent, trustworthy. Accepts Zelle for payment too.",
        attr: "Sun Lakes neighbor · Nextdoor referral",
      },
      {
        quote:
          "Neighbors send Pedro for valves, reroutes, and old systems that need to come out of poly and go into PVC. Prompt, efficient, and he explains the system so you can actually run it.",
        attr: "East Valley neighbors · Nextdoor",
      },
    ],
    areasKicker: "Service area",
    areasTitle: "Chandler first. The East Valley next.",
    areasLead:
      "Based in Chandler. We run daily through Gilbert, Mesa, Tempe, Sun Lakes, Queen Creek, Ahwatukee, and the rest of the East Valley. If your water is in Maricopa County and a zone is dead, call.",
    areasCta: "See every city we cover",
    calcKicker: "The quiet bill",
    calcTitle: "What is a leak actually costing you?",
    calcLead:
      "Arizona municipal water is not theoretical. Use this to put a number on the puddle. Then call — the repair is almost always cheaper than another month of it.",
    faqKicker: "Before you call",
    faqTitle: "Straight answers.",
    ctaTitle: "A wet spot in September is a dead tree in June.",
    ctaLead:
      "Text a photo of the valve box, the puddle, or the dry ring. We will tell you whether it is a $ head or a main line — before we put a shovel in the ground.",
    ctaCall: "Call now",
    ctaEstimate: "Send photos & get a look",
    footerTag: "Irrigation, rebuilt properly.",
    footerCopy: "Hernandez Irrigation & Repairs LLC · Chandler, Arizona",
    footerPrivacy: "We do not sell your number. Estimates are a conversation, not a contract.",
    stickyCall: "Call for a leak",
    stickyText: "Text a photo",
    formTitle: "Request a look",
    formLead: "Name, city, and what is failing. We call back. Active leaks: just dial.",
    formName: "Name",
    formPhone: "Phone",
    formCity: "City",
    formService: "What do you need?",
    formMessage: "What are you seeing?",
    formMessagePh: "Puddle by the valve box, zone 3 dry, heads misting the sidewalk…",
    formSubmit: "Send request",
    formSuccessTitle: "Request saved. Now call so we can lock a time.",
    formSuccessBody:
      "We stored this on your device so you can screenshot it. The fastest path is still a phone call — tap below.",
    formError: "Add a name and a working phone number.",
    serviceNeed: "Choose one",
    symptomKicker: "Not sure what failed",
    symptomTitle: "Tell us what the yard is doing.",
    symptomLead: "Pick the closest symptom. We will tell you what we usually find — and what to do next.",
    faqItems: [
      {
        q: "Do you charge just to come look?",
        a: "If it is an active leak or a dead zone, the visit is a working diagnostic — we come ready to repair. You get a number before we cut. No surprise trip fee buried in the invoice.",
      },
      {
        q: "Can you come today?",
        a: "Leaks that are running get first place on the board. Non-emergency tune-ups usually land within a few days. Call or text (480) 572-3141 with the city and a photo.",
      },
      {
        q: "Do you only repair, or do you install new systems?",
        a: "Both. Most of our week is repair — valves, heads, drip, main lines. We also add zones, convert poly to PVC, and install new systems when a yard is being rebuilt or turf is going in.",
      },
      {
        q: "What is Schedule 40 and why does it matter?",
        a: "It is rigid PVC, not the cheap flexible pipe builders staple under new sod. Flex pipe pinches, splits, and leaks at every fitting after a few Arizona summers. Where a line has failed, we replace it with Schedule 40 so you are not calling us again for the same trench.",
      },
      {
        q: "Do you work in HOAs and 55+ communities?",
        a: "Yes. Chandler, Sun Lakes, and the East Valley HOAs are a large part of the book. We keep work clean, restore gravel and turf, and can work around access rules.",
      },
      {
        q: "English and Spanish?",
        a: "Yes. Pedro and the family run the company in both. Ask for whichever is easier.",
      },
      {
        q: "How do I pay?",
        a: "Neighbors mention Zelle, and we also take conventional payment after the work is done. Ask when we quote.",
      },
      {
        q: "Will you look at a system another company installed?",
        a: "That is most of the work. Builder poly, weekend patches, valves that were never labeled — we inherit other people’s systems every week and make them honest.",
      },
    ],
    aboutKicker: "The people in the trench",
    aboutTitle: "A Chandler family company that still answers the phone.",
    aboutP1:
      "Hernandez Irrigation & Repairs LLC has been on the Arizona Corporation Commission books since 2016. Pedro Hernandez Giron runs the work. Ana Ramos Pacheco keeps the company standing. That is the whole pitch: a family that lives in Chandler and spends the week in other people’s valve boxes.",
    aboutP2:
      "The reputation is not a slogan. East Valley neighbors send Pedro because he diagnoses fast, he does not sell you a new clock to hide a bad solenoid, and when a main line has been flex pipe for ten years he will tell you the truth — and put Schedule 40 in the ground.",
    aboutP3:
      "We are not a call center. You get the person who will be in the yard. You get a yard that is raked when we leave. You get a clock you can actually run.",
    aboutStat1: "2016",
    aboutStat1Label: "LLC filed in Chandler",
    aboutStat2: "4.9",
    aboutStat2Label: "Google rating · 72 reviews",
    aboutStat3: "East Valley",
    aboutStat3Label: "Chandler home base",
    workPageTitle: "The work, not the brochure.",
    workPageLead:
      "Trench, valves, turf, pavers, drip. These photographs are from Hernandez jobs in the East Valley.",
    areasPageTitle: "If you can drive it in 30 minutes from Chandler, we can be there.",
    areasPageLead:
      "Irrigation does not care about city limits. Leaks, dead zones, and bad clocks look the same in Gilbert as they do in Sun Lakes. We run the East Valley.",
    contactKicker: "Start here",
    contactTitle: "Call, text a photo, or send the form.",
    contactLead:
      "Active water in the yard: call now. Everything else — a dry zone, a misting head, a clock you cannot program — send the form or a text and we will get you on the board.",
    contactAddress: "Chandler, Arizona",
    contactHours: "Leaks answered the day you call. Tune-ups booked in a few days.",
    mapCta: "Open in Google Maps",
    fbCta: "Facebook",
  },
  es: {
    brandKicker: "East Valley · Desde 2016",
    navAria: "Principal",
    call: "Llamar",
    textUs: "Envíanos un texto",
    getEstimate: "Pide una visita hoy",
    menu: "Menú",
    close: "Cerrar",
    english: "EN",
    spanish: "ES",
    langToggle: "Idioma",
    heroKicker: "Chandler · Gilbert · Mesa · Sun Lakes",
    heroTitle: "La fuga que no ves es la que te cuesta.",
    heroLead:
      "Hernandez Irrigation Repairs es el equipo del East Valley al que los vecinos llaman cuando una válvula gotea, una zona está muerta, o el parche del año pasado no aguantó el calor. Primero diagnosticamos. Reconstruimos en PVC Schedule 40. Recorremos el patio contigo antes de irnos.",
    heroPrimary: "Llama al (480) 572-3141",
    heroSecondary: "Pide un estimado",
    heroPhotoCredit: "Trabajos de este equipo — patios de Chandler, terminados.",
    trustRating: "4.9 de 72 reseñas en Google",
    trustYears: "Años en Chandler",
    trustSameDay: "Fugas el mismo día",
    trustPvc: "Schedule 40 — no manguera flex",
    trustBilingual: "Inglés y español",
    problemKicker: "El agua en Arizona no es barata",
    problemTitle: "Una válvula atorada puede gastar más en una semana que la reparación.",
    problemLead:
      "Los patios del East Valley fallan de las mismas formas: un solenoides que no cierra, poliducto partido bajo los pavers, un reloj que sigue en febrero. Encontramos la falla real — no el cabezal más cercano — y la reparamos para que no vuelva en julio.",
    problemStat1: "1,000+",
    problemStat1Label: "galones que una válvula rota puede desperdiciar al día",
    problemStat2: "Sch. 40",
    problemStat2Label: "PVC en reparaciones que antes eran flex",
    problemStat3: "Mismo día",
    problemStat3Label: "para fugas activas en el East Valley",
    servicesKicker: "Lo que realmente hacemos",
    servicesTitle: "Reparar, reconstruir, y que el patio beba parejo.",
    servicesLead:
      "Somos especialistas en riego — no una cuadrilla de jardinería que “también hace aspersores.” Cada visita es diagnóstico, reparación, prueba de presión, y un recorrido que sí se entiende.",
    servicesAll: "Ver todos los servicios",
    processKicker: "Cómo es una visita",
    processTitle: "Sin factura misteriosa. Sin desaparecer cuando se tapa la zanja.",
    process: [
      {
        n: "01",
        title: "Llamas o mandas texto",
        body: "Ciudad, síntoma, y una foto si tienes. Las fugas activas van primero el mismo día.",
      },
      {
        n: "02",
        title: "Diagnosticamos en sitio",
        body: "Reloj, válvulas, presión y cada zona. Explicación clara y un precio antes de cortar tubo.",
      },
      {
        n: "03",
        title: "Lo reconstruimos bien",
        body: "PVC Schedule 40, primer correcto, válvulas etiquetadas, cabezales al arriate — no un cople enterrado y a rezar.",
      },
      {
        n: "04",
        title: "Lo corremos contigo",
        body: "Cada zona encendida. Cobertura revisada. Patio limpio. Sabes qué se hizo y cómo usar el reloj.",
      },
    ],
    craftKicker: "El estándar Hernandez",
    craftTitle: "Si era tubo flex, por eso falló.",
    craftLead:
      "Pedro no “parchea poli y reza.” En líneas principales y laterales que se siguen partiendo, cortamos la falla y la reemplazamos con PVC Schedule 40 — el tubo que sí pertenece bajo tierra en Arizona. Los vecinos en Nextdoor lo notan. El recibo del agua también.",
    craftPoints: [
      { title: "Diagnosticar antes de cavar", body: "No te vendemos un sistema nuevo para esconder un solenoide de $40." },
      { title: "Trabajo limpio, tapado bien", body: "Zanjas compactadas, grava rastrillada, césped asentado. El patio no debe parecer un taller cuando nos vamos." },
      { title: "Entiendes el reloj", body: "Lo programamos para esta temporada y te enseñamos a cambiarlo cuando llegue el monzón." },
    ],
    workKicker: "De este equipo",
    workTitle: "Zanjas de verdad. Patios de verdad. Acabado de verdad.",
    workLead: "Estos son trabajos Hernandez — no fotos de catálogo de otro.",
    workCta: "Ver la galería completa",
    reviewsKicker: "Vecinos, no anuncios",
    reviewsTitle: "4.9 estrellas. Setenta y dos reseñas en Google. El East Valley ya los conoce.",
    reviewsLead:
      "No inventamos testimonios. Esto es cómo hablan los vecinos de este equipo — en Nextdoor, y en la calificación de Google del negocio.",
    reviewsGoogle: "Leer reseñas de Google",
    reviews: [
      {
        quote: "Trabajo muy limpio.",
        attr: "Vecino de Sun Lakes · Nextdoor",
      },
      {
        quote: "Pedro Hernandez. Competente, de confianza. También acepta Zelle.",
        attr: "Vecino de Sun Lakes · Nextdoor",
      },
      {
        quote:
          "Los vecinos mandan a Pedro para válvulas, desviaciones, y sistemas viejos que hay que sacar de poli y pasar a PVC. Rápido, eficiente, y explica el sistema para que lo puedas usar.",
        attr: "Vecinos del East Valley · Nextdoor",
      },
    ],
    areasKicker: "Área de servicio",
    areasTitle: "Chandler primero. El East Valley después.",
    areasLead:
      "Con base en Chandler. Rodamos diario por Gilbert, Mesa, Tempe, Sun Lakes, Queen Creek, Ahwatukee y el resto del East Valley. Si tu agua está en el condado de Maricopa y una zona está muerta, llama.",
    areasCta: "Ver cada ciudad",
    calcKicker: "El recibo silencioso",
    calcTitle: "¿Cuánto te está costando esa fuga?",
    calcLead:
      "El agua municipal en Arizona no es teórica. Ponle número al charco. Luego llama — la reparación casi siempre es más barata que otro mes así.",
    faqKicker: "Antes de llamar",
    faqTitle: "Respuestas directas.",
    ctaTitle: "Un charco en septiembre es un árbol muerto en junio.",
    ctaLead:
      "Manda foto de la caja de válvulas, el charco, o el anillo seco. Te decimos si es un cabezal o la línea principal — antes de meter la pala.",
    ctaCall: "Llama ahora",
    ctaEstimate: "Manda fotos y pide visita",
    footerTag: "Riego, reconstruido bien.",
    footerCopy: "Hernandez Irrigation & Repairs LLC · Chandler, Arizona",
    footerPrivacy: "No vendemos tu número. El estimado es una conversación, no un contrato.",
    stickyCall: "Llama por una fuga",
    stickyText: "Manda una foto",
    formTitle: "Pide una visita",
    formLead: "Nombre, ciudad, y qué está fallando. Te llamamos. Fuga activa: marca.",
    formName: "Nombre",
    formPhone: "Teléfono",
    formCity: "Ciudad",
    formService: "¿Qué necesitas?",
    formMessage: "¿Qué estás viendo?",
    formMessagePh: "Charco en la caja de válvulas, zona 3 seca, cabezales mojando la banqueta…",
    formSubmit: "Enviar solicitud",
    formSuccessTitle: "Solicitud guardada. Ahora llama para agendar.",
    formSuccessBody:
      "La guardamos en tu dispositivo para que le tomes captura. Lo más rápido sigue siendo una llamada — toca abajo.",
    formError: "Agrega un nombre y un teléfono que funcione.",
    serviceNeed: "Elige uno",
    symptomKicker: "No sabes qué falló",
    symptomTitle: "Dinos qué está haciendo el patio.",
    symptomLead: "Elige el síntoma más cercano. Te decimos lo que solemos encontrar — y el siguiente paso.",
    faqItems: [
      {
        q: "¿Cobran solo por ir a ver?",
        a: "Si hay fuga activa o una zona muerta, la visita es un diagnóstico de trabajo — llegamos listos para reparar. Recibes un precio antes de cortar. Sin cargo sorpresa escondido en la factura.",
      },
      {
        q: "¿Pueden ir hoy?",
        a: "Las fugas que están corriendo van primero. Los ajustes sin emergencia suelen quedar en unos días. Llama o manda texto al (480) 572-3141 con la ciudad y una foto.",
      },
      {
        q: "¿Solo reparan, o también instalan sistemas nuevos?",
        a: "Ambas. La mayor parte de la semana es reparación — válvulas, cabezales, goteo, líneas principales. También agregamos zonas, convertimos poli a PVC, e instalamos sistemas nuevos cuando se reconstruye un patio o se pone césped.",
      },
      {
        q: "¿Qué es Schedule 40 y por qué importa?",
        a: "Es PVC rígido, no el tubo flexible barato que los constructores grapán bajo el césped nuevo. El flex se pellizca, se parte, y gotea en cada conexión después de unos veranos. Donde una línea ya falló, la reemplazamos con Schedule 40 para que no nos vuelvas a llamar por la misma zanja.",
      },
      {
        q: "¿Trabajan en HOAs y comunidades 55+?",
        a: "Sí. Chandler, Sun Lakes y los HOAs del East Valley son gran parte de la agenda. Dejamos el trabajo limpio, reponemos grava y césped, y podemos trabajar con las reglas de acceso.",
      },
      {
        q: "¿Inglés y español?",
        a: "Sí. Pedro y la familia llevan la empresa en los dos. Pide el que te quede más fácil.",
      },
      {
        q: "¿Cómo pago?",
        a: "Los vecinos mencionan Zelle, y también aceptamos pago convencional cuando termina el trabajo. Pregunta al cotizar.",
      },
      {
        q: "¿Revisan un sistema que instaló otra compañía?",
        a: "Eso es la mayor parte del trabajo. Poli de constructor, parches de fin de semana, válvulas sin etiqueta — heredamos sistemas de otros cada semana y los dejamos honestos.",
      },
    ],
    aboutKicker: "La gente en la zanja",
    aboutTitle: "Una empresa familiar de Chandler que todavía contesta el teléfono.",
    aboutP1:
      "Hernandez Irrigation & Repairs LLC está en los libros de la Comisión de Corporaciones de Arizona desde 2016. Pedro Hernandez Giron lleva el trabajo. Ana Ramos Pacheco sostiene la empresa. Ese es todo el discurso: una familia que vive en Chandler y pasa la semana en las cajas de válvulas de otros.",
    aboutP2:
      "La reputación no es un eslogan. Los vecinos del East Valley mandan a Pedro porque diagnostica rápido, no te vende un reloj nuevo para esconder un solenoide malo, y cuando una línea principal lleva diez años en tubo flex te dice la verdad — y pone Schedule 40 bajo tierra.",
    aboutP3:
      "No somos un call center. Hablas con quien va a estar en el patio. El patio queda rastrillado. El reloj lo puedes usar.",
    aboutStat1: "2016",
    aboutStat1Label: "LLC registrada en Chandler",
    aboutStat2: "4.9",
    aboutStat2Label: "Calificación Google · 72 reseñas",
    aboutStat3: "East Valley",
    aboutStat3Label: "Base en Chandler",
    workPageTitle: "El trabajo, no el folleto.",
    workPageLead:
      "Zanja, válvulas, césped, pavers, goteo. Estas fotos son de trabajos Hernandez en el East Valley.",
    areasPageTitle: "Si se llega en 30 minutos desde Chandler, podemos estar ahí.",
    areasPageLead:
      "El riego no respeta límites de ciudad. Fugas, zonas muertas y relojes malos se ven igual en Gilbert que en Sun Lakes. Corremos el East Valley.",
    contactKicker: "Empieza aquí",
    contactTitle: "Llama, manda una foto, o llena el formulario.",
    contactLead:
      "Agua corriendo en el patio: llama ahora. Lo demás — zona seca, cabezal que rocía, reloj que no programas — manda el formulario o un texto y te agendamos.",
    contactAddress: "Chandler, Arizona",
    contactHours: "Fugas el día que llamas. Ajustes en unos días.",
    mapCta: "Abrir en Google Maps",
    fbCta: "Facebook",
  },
} as const;

export type Copy = (typeof dict)[Lang];

type Ctx = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") setLangState(stored);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next === "es" ? "es" : "en";
    } catch {
      /* ignore */
    }
  };

  const value = useMemo<Ctx>(() => ({ lang, setLang, t: dict[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
