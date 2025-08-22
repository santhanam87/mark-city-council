import { createFileRoute } from "@tanstack/react-router";
import AboutMarkPage from "../pages/AboutMarkPage";

export const Route = createFileRoute("/about")({
  component: AboutMarkPage,
});
