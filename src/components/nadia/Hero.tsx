import { Link } from "@tanstack/react-router";
import { Star, Truck, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { waLink } from "./data";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={hero}
        alt="Mesa artesanal con pizza, medialunas y sándwiches de miga"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cocoa/55 via-cocoa/35 to-cocoa/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(199,154,99,0.25),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 sm:px-8 pt-28 pb-16">
        <div className="max-w-3xl">
          <div className="mb-6 flex flex-wrap gap-2">
            <Badge icon={<Star size={14} className="fill-current" />} text="5.0 en Google" />
            <Badge icon={<Truck size={14} />} text="Delivery local" />
            <Badge icon={<Sparkles size={14} />} text="Hecho artesanalmente" />
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-cream leading-[1.05] text-balance">
            Comida casera
            <br />
            <span className="italic text-gold">hecha con amor</span>
            <br />
            en Marcos Paz
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-cream/85 leading-relaxed">
            Pizzas listas para hornear, tortas de miga, panadería artesanal y
            catering para compartir momentos especiales.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={waLink("¡Hola Nadia! Quiero hacer un pedido 🍕")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-terracotta px-7 py-4 text-sm sm:text-base font-medium text-primary-foreground shadow-lift transition-all hover:-translate-y-0.5 hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)]"
            >
              Hacer pedido por WhatsApp
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-cream/10 px-7 py-4 text-sm sm:text-base font-medium text-cream backdrop-blur transition-all hover:bg-cream/20"
            >
              Ver menú
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 text-xs tracking-[0.3em] uppercase float-slow hidden sm:block">
          scroll
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-cocoa border border-cream/40">
      <span className="text-terracotta">{icon}</span>
      {text}
    </span>
  );
}
