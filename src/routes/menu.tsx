import { createFileRoute } from "@tanstack/react-router";
import { MenuSection, CartBar } from "@/components/nadia/Menu";

export const Route = createFileRoute("/menu")({
  component: MenuRoute,
});

function MenuRoute() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <MenuSection />
      <CartBar />
    </main>
  );
}
