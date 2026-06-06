import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/nadia/Hero";
import { Destacados } from "@/components/nadia/Destacados";
import { MenuSection, CartBar } from "@/components/nadia/Menu";
import { Promos } from "@/components/nadia/Promos";
import { Nosotros } from "@/components/nadia/Nosotros";
import { Resenas } from "@/components/nadia/Resenas";
import { ComoPedir } from "@/components/nadia/ComoPedir";
import { Ubicacion } from "@/components/nadia/Ubicacion";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Destacados />
      <MenuSection />
      <Promos />
      <Nosotros />
      <Resenas />
      <ComoPedir />
      <Ubicacion />
      <CartBar />
    </main>
  );
}
