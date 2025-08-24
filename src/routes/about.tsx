import { createFileRoute } from "@tanstack/react-router";
import AboutMarkPage from "../pages/AboutMarkPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: "About Mark Gormley" }],
  }),
  component: AboutMarkPage,
});
