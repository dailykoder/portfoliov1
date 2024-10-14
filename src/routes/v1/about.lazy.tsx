import { createLazyFileRoute } from "@tanstack/react-router";
import About from "@/pages/About";

export const Route = createLazyFileRoute(`/v1/about`)({
  component: () => <About />,
});
