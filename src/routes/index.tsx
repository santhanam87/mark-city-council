import { createFileRoute } from "@tanstack/react-router";
import HomePage from "../pages/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "Mark Gormley For Thornton City Council - Ward 3" }],
  }),
  component: HomePage,
});
