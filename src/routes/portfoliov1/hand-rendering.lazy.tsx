import { createLazyFileRoute } from "@tanstack/react-router";
import HandRendering from "@/pages/subpages/HandRendering";

export const Route = createLazyFileRoute(`/portfoliov1/hand-rendering`)({
  component: () => <HandRendering />,
});
