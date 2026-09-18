import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home/home-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Irrigation Repair Chandler AZ | Hernandez Irrigation Repairs",
      },
      {
        name: "description",
        content:
          "Same-day sprinkler, drip, valve, and main-line repair in Chandler, Gilbert, Mesa & the East Valley. 4.9 stars from 72 neighbors. Schedule 40 PVC — not flex pipe. Call (480) 572-3141.",
      },
    ],
  }),
  component: HomePage,
});
