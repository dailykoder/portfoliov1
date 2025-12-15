import { createLazyFileRoute } from "@tanstack/react-router";
import Csuf from "@/pages/subpages/Csuf";

export const Route = createLazyFileRoute("/v1/csuf")({
  component: () => <Csuf />,
});
