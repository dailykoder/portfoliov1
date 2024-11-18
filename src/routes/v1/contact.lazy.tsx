import { createLazyFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact";

export const Route = createLazyFileRoute(`/v1/contact`)({
  component: () => <Contact />,
});
