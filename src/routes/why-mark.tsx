import { createFileRoute } from "@tanstack/react-router";
import WhyMarkPage from "../pages/WhyMarkPage";

export const Route = createFileRoute("/why-mark")({
  head: () => ({
    meta: [{ title: "Why Mark Gormley for thornton city council?" }],
  }),
  component: WhyMarkPage,
});
