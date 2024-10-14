import { createLazyFileRoute } from "@tanstack/react-router";
import Styling from "@/pages/subpages/Styling";

export const Route = createLazyFileRoute(`/v1/styling`)({
  component: () => <Styling />,
});
