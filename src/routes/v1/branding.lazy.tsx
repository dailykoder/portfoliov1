import { createLazyFileRoute } from "@tanstack/react-router";
import Branding from "@/pages/subpages/Branding";

export const Route = createLazyFileRoute(`/v1/branding`)({
  component: () => <Branding />,
});
