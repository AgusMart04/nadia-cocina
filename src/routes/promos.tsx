import { createFileRoute } from "@tanstack/react-router";
import { Promos } from "@/components/nadia/Promos";

export const Route = createFileRoute("/promos")({
  component: PromosRoute,
});

function PromosRoute() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Promos />
    </main>
  );
}
