import { Star } from "lucide-react";

const reviews = [
  { name: "Lucía M.", text: "Excelente servicio y calidad. Las pizzas son una maravilla, listas en minutos.", initial: "L" },
  { name: "Marcos P.", text: "Excelente todo y muy rico. La torta de miga fue el éxito del cumpleaños.", initial: "M" },
  { name: "Carolina F.", text: "Las medialunas son una locura, recién horneadas. Recomiendo 100%.", initial: "C" },
  { name: "Diego R.", text: "Pedí la mesa de copetín para 30 personas. Calidad, presentación y puntualidad.", initial: "D" },
];

export function Resenas() {
  return (
    <section id="opiniones" className="relative py-24 sm:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 text-center reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-terracotta font-medium">
            Opiniones
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-cocoa leading-tight">
            <span className="italic text-terracotta">5.0</span> en Google
          </h2>
          <div className="mt-4 flex justify-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="fill-current" />
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              className="reveal rounded-2xl bg-card p-6 shadow-soft border border-border/60 hover-lift"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex gap-0.5 text-gold mb-3">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={14} className="fill-current" />
                ))}
              </div>
              <p className="text-cocoa/80 text-sm leading-relaxed mb-5">
                “{r.text}”
              </p>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-terracotta text-primary-foreground font-display">
                  {r.initial}
                </div>
                <div>
                  <div className="text-sm font-medium text-cocoa">{r.name}</div>
                  <div className="text-[11px] text-cocoa/55">Cliente</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
