import type { ServiceSlug } from "./site";

export const serviceCopy: Record<
  ServiceSlug,
  {
    heroEn: string;
    heroEs: string;
    bodyEn: string[];
    bodyEs: string[];
    includesEn: string[];
    includesEs: string[];
  }
> = {
  "sprinkler-repair": {
    heroEn: "Heads that throw water where grass used to be.",
    heroEs: "Cabezales que tiran agua donde ya no hay pasto.",
    bodyEn: [
      "A Chandler lawn does not fail all at once. It fails in rings, in corners the last landscaper never walked, in a single station that has been skipping for a month. Sprinkler repair here is not swapping a $6 head and leaving. It is finding why that head broke — pressure, a leaning riser, a nozzle that never matched the arc, a zone valve that only half-opens.",
      "We run the clock, station by station, with you if you want. We rebuild coverage so the driveway stays dry and the turf actually greens. If the laterals under the lawn are flex pipe that has pinched, we tell you — and we quote Schedule 40, not another coupler.",
    ],
    bodyEs: [
      "Un césped en Chandler no se muere de un día para otro. Se muere en anillos, en esquinas que el último jardinero no recorrió, en una estación que lleva un mes saltándose. Reparar aspersores aquí no es cambiar un cabezal de $6 y irse. Es encontrar por qué se rompió: presión, un riser inclinado, una boquilla que nunca coincidió con el arco, una válvula que solo abre a medias.",
      "Corremos el reloj, estación por estación, contigo si quieres. Reconstruimos la cobertura para que la entrada quede seca y el césped verdée. Si los laterales bajo el pasto son tubo flex pellizcado, te lo decimos — y cotizamos Schedule 40, no otro cople.",
    ],
    includesEn: [
      "Broken heads, risers, and nozzles",
      "Dry spots and overspray onto hardscape",
      "Low-head drainage and fogging from high pressure",
      "Zone-by-zone coverage rebuild",
    ],
    includesEs: [
      "Cabezales, risers y boquillas rotas",
      "Manchones secos y riego sobre concreto",
      "Drenaje por cabezal bajo y niebla por alta presión",
      "Reconstrucción de cobertura zona por zona",
    ],
  },
  "leak-detection": {
    heroEn: "If the meter is spinning and every head is off, the leak is underground.",
    heroEs: "Si el medidor gira y todos los cabezales están apagados, la fuga está bajo tierra.",
    bodyEn: [
      "East Valley soil hides water until the bill arrives or the pavers start to rock. We isolate valves, watch the meter, and open the trench where the failure actually is — not where the grass is wettest.",
      "When we find it, we do not sleeve a flex patch over a split. We cut back to good pipe and replace with Schedule 40 PVC, primer, and fittings that belong in this climate. Pedro has said it on Nextdoor: it is not flex pipe. It is a 1-inch Sch40 line, and a different strategy.",
    ],
    bodyEs: [
      "La tierra del East Valley esconde el agua hasta que llega el recibo o se mueven los pavers. Aislamos válvulas, vemos el medidor, y abrimos la zanja donde realmente está la falla — no donde el pasto se ve más mojado.",
      "Cuando la encontramos, no ponemos un parche de flex sobre la raja. Cortamos hasta tubo bueno y reemplazamos con PVC Schedule 40, primer, y conexiones que sí pertenecen a este clima. Pedro lo ha dicho en Nextdoor: no es tubo flex. Es una línea de 1 pulgada Sch40, y otra estrategia.",
    ],
    includesEn: [
      "Main line splits under turf, gravel, and pavers",
      "Meter isolation and zone shut-down",
      "Poly-to-PVC conversions on failing laterals",
      "Clean backfill and surface restored",
    ],
    includesEs: [
      "Líneas principales partidas bajo césped, grava y pavers",
      "Aislamiento del medidor y cierre de zonas",
      "Conversión de poli a PVC en laterales que fallan",
      "Relleno limpio y superficie restaurada",
    ],
  },
  "valve-repair": {
    heroEn: "A valve that will not close is a leak that never looks like a leak.",
    heroEs: "Una válvula que no cierra es una fuga que nunca se ve como fuga.",
    bodyEn: [
      "Weeping diaphragms, dead solenoids, manifolds glued together with no labels, boxes full of mud — this is most of the week. A valve that hisses with the clock off will waste more water than any broken head on the lawn.",
      "We rebuild boxes so they stay dry and serviceable. New valves where the old ones are tired, wiring that actually lands, labels you can read in July. If the manifold was assembled like a science project, we redo it so the next visit takes twenty minutes, not two hours.",
    ],
    bodyEs: [
      "Diafragmas que lloran, solenoides muertos, manifolds pegados sin etiquetas, cajas llenas de lodo — eso es la mayor parte de la semana. Una válvula que silba con el reloj apagado gasta más agua que cualquier cabezal roto en el césped.",
      "Reconstruimos cajas para que queden secas y servibles. Válvulas nuevas donde las viejas ya no dan, cableado que sí llega, etiquetas que se leen en julio. Si el manifold se armó como un proyecto de ciencias, lo rehacemos para que la próxima visita dure veinte minutos, no dos horas.",
    ],
    includesEn: [
      "Solenoid, diaphragm, and full valve replacement",
      "Manifold rebuilds and labeled boxes",
      "Wiring, anti-siphon, and pressure issues",
      "Valve boxes set so they do not flood",
    ],
    includesEs: [
      "Cambio de solenoides, diafragmas y válvulas completas",
      "Reconstrucción de manifolds y cajas etiquetadas",
      "Cableado, anti-sifón y problemas de presión",
      "Cajas de válvulas colocadas para que no se inunden",
    ],
  },
  "drip-irrigation": {
    heroEn: "Desert plants do not forgive a drip line that has been dry since March.",
    heroEs: "Las plantas del desierto no perdonan una línea de goteo seca desde marzo.",
    bodyEn: [
      "Chandler HOA yards live and die on drip. Poly that was stapled in 2008, emitters that clogged with well grit, a filter that was never installed — we see it every week. The plant looks like heat stress. The real problem is a pinched 1/2-inch line under the granite.",
      "We pressure-test, replace failed poly, add filters and regulators where they belong, and set emitter counts to the plants you have now — not the plants the builder sketched.",
    ],
    bodyEs: [
      "Los patios de HOA en Chandler viven y mueren del goteo. Poli grapado en 2008, goteros tapados de sarro, un filtro que nunca se instaló — lo vemos cada semana. La planta parece estrés de calor. El problema real es una línea de 1/2 pulgada pellizcada bajo la grava.",
      "Probamos presión, cambiamos el poli que falló, ponemos filtros y reguladores donde van, y ajustamos goteros a las plantas que tienes ahora — no a las que dibujó el constructor.",
    ],
    includesEn: [
      "Leaking and pinched poly tubing",
      "Clogged emitters, micro-spray, and bubblers",
      "Filters, pressure regulators, and flush ends",
      "New drip for beds, trees, and desert conversions",
    ],
    includesEs: [
      "Tubo de poli que gotea o está pellizcado",
      "Goteros, micro-aspersión y bubblers tapados",
      "Filtros, reguladores de presión y extremos de lavado",
      "Goteo nuevo para arriates, árboles y conversiones desérticas",
    ],
  },
  "seasonal-tuneup": {
    heroEn: "Arizona does not winterize the way the Midwest does. It just gets hotter.",
    heroEs: "Arizona no se inverna como el Medio Oeste. Solo se pone más caliente.",
    bodyEn: [
      "A 45-minute walkthrough in March is cheaper than sod in June. We run every zone, catch the leaks while they are still small, set seasonal adjust, and write the program where you can find it.",
      "Bring us the clock you have been afraid to touch. We will map the zones, kill the station that waters the sidewalk, and leave you a schedule that matches this month — not last October.",
    ],
    bodyEs: [
      "Un recorrido de 45 minutos en marzo es más barato que césped nuevo en junio. Corremos cada zona, cachamos las fugas mientras son chicas, ajustamos la temporada, y escribimos el programa donde lo puedas encontrar.",
      "Tráenos el reloj al que le tienes miedo. Mapeamos las zonas, apagamos la estación que riega la banqueta, y te dejamos un horario de este mes — no del octubre pasado.",
    ],
    includesEn: [
      "Full system run and leak check",
      "Head adjustment and nozzle matching",
      "Controller programming and seasonal adjust",
      "Filter clean and pressure check",
    ],
    includesEs: [
      "Corrida completa y revisión de fugas",
      "Ajuste de cabezales y boquillas",
      "Programación del controlador y ajuste de temporada",
      "Limpieza de filtro y revisión de presión",
    ],
  },
};
