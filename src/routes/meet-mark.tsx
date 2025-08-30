import { createFileRoute } from "@tanstack/react-router";
import AboutMarkPage from "../pages/AboutMarkPage";

export const Route = createFileRoute("/meet-mark")({
  head: () => ({
    meta: [{ title: "Meet Mark Gormley" }],
  }),
  component: AboutMarkPage,
});
