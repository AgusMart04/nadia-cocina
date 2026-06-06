import { createFileRoute } from "@tanstack/react-router";
import { Resenas } from "@/components/nadia/Resenas";

export const Route = createFileRoute("/opiniones")({
  component: OpinionesRoute,
});

function OpinionesRoute() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Resenas />
    </main>
  );
}
