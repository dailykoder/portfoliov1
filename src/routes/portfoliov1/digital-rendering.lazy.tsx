import { createLazyFileRoute } from "@tanstack/react-router";
import DigitalRendering from "@/pages/subpages/DigitalRendering";

export const Route = createLazyFileRoute(`/portfoliov1/digital-rendering`)({
  component: () => <DigitalRendering />,
});
