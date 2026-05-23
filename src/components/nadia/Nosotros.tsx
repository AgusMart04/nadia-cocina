import nosotros from "@/assets/nosotros.jpg";

export function Nosotros() {
  return (
    <section id="nosotros" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="reveal img-zoom relative rounded-3xl overflow-hidden shadow-lift aspect-[4/5] lg:aspect-[3/4]">
            <img
              src={nosotros}
              alt="Nadia amasando en su cocina"
              loading="lazy"
              width={1200}
              height={1400}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-cocoa/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl px-5 py-4 border border-cream/40">
              <div className="text-[11px] uppercase tracking-[0.25em] text-terracotta font-medium">
                Marcos Paz · Buenos Aires
              </div>
              <div className="font-display text-lg text-cocoa mt-1">
                Cocina familiar, recetas de siempre.
              </div>
            </div>
          </div>

          <div className="reveal">
            <span className="text-xs tracking-[0.3em] uppercase text-terracotta font-medium">
              Nuestra historia
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-cocoa leading-tight">
              Cada pedido,
              <br />
              <span className="italic text-terracotta">hecho con cariño</span>
            </h2>
            <div className="mt-6 space-y-4 text-cocoa/75 leading-relaxed">
              <p>
                Nadia Cocina nació de una pasión simple: cocinar con amor para
                que otros disfruten. Lo que empezó como una receta de familia
                hoy es un emprendimiento que cuida cada detalle.
              </p>
              <p className="font-display italic text-xl text-cocoa">
                “Cada pedido está hecho con dedicación, cariño y recetas
                pensadas para compartir en familia.”
              </p>
              <p>
                Trabajamos con ingredientes de calidad, masas con tiempos reales
                y la cercanía de un emprendimiento de barrio que conoce a sus
                clientes por nombre.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-5">
              {[
                { k: "+1.000", v: "Pedidos felices" },
                { k: "100%", v: "Casero" },
                { k: "5.0", v: "Reseña Google" },
              ].map((s) => (
                <div key={s.v} className="text-center sm:text-left">
                  <div className="font-display text-3xl text-terracotta">{s.k}</div>
                  <div className="text-xs text-cocoa/60 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
