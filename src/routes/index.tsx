import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/nadia/Navbar";
import { Hero } from "@/components/nadia/Hero";
import { Destacados } from "@/components/nadia/Destacados";
import { MenuSection, CartBar, type CartState } from "@/components/nadia/Menu";
import { Promos } from "@/components/nadia/Promos";
import { Nosotros } from "@/components/nadia/Nosotros";
import { Resenas } from "@/components/nadia/Resenas";
import { ComoPedir } from "@/components/nadia/ComoPedir";
import { Ubicacion } from "@/components/nadia/Ubicacion";
import { Footer } from "@/components/nadia/Footer";
import { WhatsAppFab } from "@/components/nadia/WhatsAppFab";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [cart, setCart] = useState<CartState>({});
  useReveal();

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Destacados />
      <MenuSection cart={cart} setCart={setCart} />
      <Promos />
      <Nosotros />
      <Resenas />
      <ComoPedir />
      <Ubicacion />
      <Footer />
      <WhatsAppFab hidden={cartCount > 0} />
      <CartBar cart={cart} clear={() => setCart({})} />
    </main>
  );
}
