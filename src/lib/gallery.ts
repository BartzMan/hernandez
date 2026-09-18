import { asset } from "@/lib/utils";

export const gallery = [
  {
    src: asset("/images/backyard-turf.jpg"),
    alt: "Finished Chandler backyard with turf, pavers, and desert planting after irrigation work",
    caption: "Finished yard — turf, pavers, drip beds",
    captionEs: "Patio terminado — césped, pavers, goteo",
  },
  {
    src: asset("/images/paver-walk.jpg"),
    alt: "Paver walkway and turf edge at a Chandler home after irrigation and hardscape finish",
    caption: "Paver edge, turf in, irrigation hidden",
    captionEs: "Orilla de pavers, césped puesto, riego oculto",
  },
  {
    src: asset("/images/trench-pvc.jpg"),
    alt: "Schedule 40 PVC irrigation main with valve wiring in an open East Valley trench",
    caption: "Schedule 40 in the trench — not flex",
    captionEs: "Schedule 40 en la zanja — no flex",
  },
  {
    src: asset("/images/leak-repair.jpg"),
    alt: "Irrigation leak excavated in Arizona clay with poly line isolated for repair",
    caption: "Leak found. Isolated. Ready to cut.",
    captionEs: "Fuga encontrada. Aislada. Lista para cortar.",
  },
  {
    src: asset("/images/jobsite-valves.jpg"),
    alt: "Valve manifold, pressure regulators, and irrigation tools on a Chandler jobsite",
    caption: "Manifolds built on site, not guessed",
    captionEs: "Manifolds armados en sitio, no adivinados",
  },
  {
    src: asset("/images/valve-box.jpg"),
    alt: "Open irrigation valve box with four valves in a maintained Arizona lawn",
    caption: "A box you can actually service",
    captionEs: "Una caja que sí se puede servir",
  },
  {
    src: asset("/images/craft-hands.jpg"),
    alt: "Hands assembling a Schedule 40 PVC irrigation valve manifold",
    caption: "Primer, fittings, torque — the unglamorous part",
    captionEs: "Primer, conexiones, torque — la parte sin glamour",
  },
  {
    src: asset("/images/drip-desert.jpg"),
    alt: "Drip irrigation emitters watering desert plants in decomposed granite",
    caption: "Drip that matches the plants you have",
    captionEs: "Goteo acorde a las plantas que tienes",
  },
  {
    src: asset("/images/dusk-mist.jpg"),
    alt: "Twilight sprinklers running in an Arizona backyard",
    caption: "Coverage you only notice when it is wrong",
    captionEs: "Cobertura que solo notas cuando está mal",
  },
] as const;
