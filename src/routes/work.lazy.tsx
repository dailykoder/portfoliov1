import { createLazyFileRoute } from "@tanstack/react-router";
import Work from "@/pages/Work";

export const Route = createLazyFileRoute("/work")({
  component: () => <Work />,
});
