import { createFileRoute } from "@tanstack/react-router";
import WhyMarkPage from "../pages/WhyMarkPage";

export const Route = createFileRoute("/why-mark")({
  component: WhyMarkPage,
});
