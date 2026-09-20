import { asset } from "@/lib/utils";

export const gallery = [
  {
    src: asset("/images/jobsite-valves.jpg"),
    alt: "Valve manifold, pressure regulators, and irrigation tools on a Chandler jobsite",
    caption: "Manifolds built on site, not guessed",
    captionEs: "Manifolds armados en sitio, no adivinados",
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
    src: asset("/images/backyard-turf.jpg"),
    alt: "Chandler backyard after irrigation repair — turf and planting beds watered evenly",
    caption: "Yard after the repair. Irrigation hidden.",
    captionEs: "Patio después de la reparación. Riego oculto.",
  },
  {
    src: asset("/images/paver-walk.jpg"),
    alt: "Paver walkway at a Chandler home after irrigation work",
    caption: "Finished surface. Lines underneath.",
    captionEs: "Superficie terminada. Líneas debajo.",
  },
] as const;
