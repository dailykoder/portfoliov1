import { createLazyFileRoute } from "@tanstack/react-router";
import Resume from "@/pages/Resume";

export const Route = createLazyFileRoute(`/v1/resume`)({
  component: () => <Resume />,
});
