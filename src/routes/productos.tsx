import { createFileRoute } from "@tanstack/react-router";
import { Destacados } from "@/components/nadia/Destacados";

export const Route = createFileRoute("/productos")({
  component: ProductosRoute,
});

function ProductosRoute() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Destacados />
    </main>
  );
}
