import { createFileRoute } from "@tanstack/react-router";
import { Ubicacion } from "@/components/nadia/Ubicacion";

export const Route = createFileRoute("/contacto")({
  component: ContactoRoute,
});

function ContactoRoute() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Ubicacion />
    </main>
  );
}
