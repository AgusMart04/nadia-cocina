import { MapPin, Clock, Phone } from "lucide-react";
import { waLink } from "./data";

export function Ubicacion() {
  return (
    <section id="contacto" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-stretch">
          <div className="reveal">
            <span className="text-xs tracking-[0.3em] uppercase text-terracotta font-medium">
              Visitanos
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-cocoa leading-tight">
              Estamos en <span className="italic text-terracotta">Marcos Paz</span>
            </h2>

            <div className="mt-8 space-y-5">
              <InfoCard icon={<MapPin size={18} />} title="Dirección">
                <a
                  href="https://maps.app.goo.gl/aCTbdMEJxed93HeQ7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terracotta transition-colors"
                >
                  San Juan 694, Marcos Paz
                </a>
                <br />
                Buenos Aires, Argentina
              </InfoCard>

              <InfoCard icon={<Clock size={18} />} title="Horarios">
                Lunes a sábado · 10:00 a 12:30 y 16:00 a 20:00
                <br />
                <span className="text-cocoa/55">Miércoles y domingo: cerrado</span>
              </InfoCard>

              <InfoCard icon={<Phone size={18} />} title="WhatsApp">
                <a
                  href={waLink("¡Hola Nadia!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta hover:underline"
                >
                  +54 9 11 5097-0593
                </a>
              </InfoCard>
            </div>

            <a
              href={waLink("¡Hola Nadia! Quiero hacer un pedido 🍕")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-terracotta px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft hover:shadow-lift transition-all hover:-translate-y-0.5"
            >
              Escribinos por WhatsApp →
            </a>
          </div>

          <div className="reveal rounded-3xl overflow-hidden shadow-card border border-border/60 min-h-[400px]">
            <iframe
              title="Ubicación Nadia Cocina"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.100793286633!2d-58.823105000000005!3d-34.7782378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bceb96befe191b%3A0xa43a33f5794443e3!2sNadia%20Cocina!5e0!3m2!1ses-419!2ses!4v1779486651409!5m2!1ses-419!2ses"
              className="h-full w-full min-h-[400px] grayscale-[20%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl bg-card p-5 shadow-soft border border-border/60">
      <div className="grid h-11 w-11 place-items-center rounded-full bg-terracotta/10 text-terracotta shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-[0.25em] text-cocoa/55 font-medium">
          {title}
        </div>
        <div className="mt-1 text-cocoa leading-relaxed text-sm">{children}</div>
      </div>
    </div>
  );
}
