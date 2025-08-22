import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/why-mark")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/why-mark"!</div>;
}
