import { createFileRoute } from "@tanstack/react-router";
import { Nosotros } from "@/components/nadia/Nosotros";

export const Route = createFileRoute("/nosotros")({
  component: NosotrosRoute,
});

function NosotrosRoute() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Nosotros />
    </main>
  );
}
