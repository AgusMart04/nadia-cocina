import { UtensilsCrossed, MessageCircle, Truck, Heart } from "lucide-react";

const steps = [
  { icon: UtensilsCrossed, title: "Elegí", text: "Mirá el menú y armá tu pedido." },
  { icon: MessageCircle, title: "Escribinos", text: "Enviá tu orden por WhatsApp." },
  { icon: Truck, title: "Coordinamos", text: "Día, horario y forma de entrega." },
  { icon: Heart, title: "Disfrutá", text: "Comida casera artesanal en tu mesa." },
];

export function ComoPedir() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-background to-sand/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 text-center reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-terracotta font-medium">
            Cómo pedir
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-cocoa leading-tight">
            Simple, <span className="italic text-terracotta">como en casa</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="reveal relative rounded-2xl bg-card p-7 shadow-soft border border-border/60 hover-lift"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute -top-3 left-7 grid h-7 w-7 place-items-center rounded-full bg-cocoa text-cream text-xs font-medium">
                {i + 1}
              </div>
              <s.icon className="text-terracotta" size={32} strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-xl text-cocoa">{s.title}</h3>
              <p className="mt-1.5 text-sm text-cocoa/65 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
