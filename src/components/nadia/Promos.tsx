import { Check } from "lucide-react";
import { promos, formatARS, waLink } from "./data";

export function Promos() {
  return (
    <section id="promos" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sand/60 via-background to-cream pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-terracotta/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 max-w-2xl reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-terracotta font-medium">
            Promos para eventos
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-cocoa leading-tight">
            Mesas pensadas para <span className="italic text-terracotta">compartir</span>
          </h2>
          <p className="mt-4 text-cocoa/70 leading-relaxed">
            Combos completos para cumpleaños, reuniones y eventos. Adaptables
            según la cantidad de invitados.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {promos.map((p, i) => (
            <div
              key={p.id}
              className="reveal relative overflow-hidden rounded-3xl bg-card p-8 sm:p-10 shadow-card hover-lift border border-border/60"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-terracotta opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-[11px] tracking-[0.3em] uppercase text-terracotta font-medium">
                    Promo {i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-3xl text-cocoa leading-tight">
                    {p.title}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-wider text-cocoa/50">
                    Desde
                  </div>
                  <div className="font-display text-3xl text-terracotta">
                    {formatARS(p.price)}
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 mb-8">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-cocoa/80">
                    <span className="grid h-5 w-5 mt-0.5 place-items-center rounded-full bg-terracotta/15 text-terracotta shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>

              <a
                href={waLink(`¡Hola Nadia! Quiero consultar disponibilidad de la "${p.title}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cocoa px-6 py-3 text-sm font-medium text-cream transition-all hover:bg-coffee hover:-translate-y-0.5"
              >
                Consultar disponibilidad →
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-cocoa/60 italic text-center reveal">
          Las promos pueden adaptarse según la cantidad de invitados.
        </p>
      </div>
    </section>
  );
}
