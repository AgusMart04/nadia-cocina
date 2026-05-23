import { Instagram, MessageCircle, MapPin } from "lucide-react";
import { waLink } from "./data";
import logo from "@/assets/logo recortado.png";

export function Footer() {
  return (
    <footer className="bg-cocoa text-cream/85">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Nadia Cocina" className="h-9 w-auto" />
              <span className="font-display text-xl text-cream">
                Nadia <span className="text-gold">Cocina</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-cream/65 leading-relaxed">
              Comida casera artesanal en Marcos Paz. Hecho con amor para
              compartir.
            </p>
          </div>

          <div>
            <h4 className="font-display text-base text-cream mb-4">Navegar</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Productos", "#productos"],
                ["Menú", "#menu"],
                ["Promos", "#promos"],
                ["Nosotros", "#nosotros"],
                ["Opiniones", "#opiniones"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="text-cream/65 hover:text-gold transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base text-cream mb-4">Horarios</h4>
            <p className="text-sm text-cream/65 leading-relaxed">
              Lunes a sábado<br />10:00 – 12:30 · 16:00 – 20:00<br />
              <span className="text-cream/45">Miércoles y domingo: cerrado</span>
            </p>
          </div>

          <div>
            <h4 className="font-display text-base text-cream mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <a
                href={waLink("¡Hola Nadia!")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-cream/75 hover:text-gold transition"
              >
                <MessageCircle size={16} />
                +54 9 11 5097-0593
              </a>
              <a
                href="https://www.instagram.com/nadia_cocinamp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-cream/75 hover:text-gold transition"
              >
                <Instagram size={16} />
                @nadia_cocinamp
              </a>
              <div className="flex items-start gap-2.5 text-cream/75">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                San Juan 694, Marcos Paz, BA
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/45">
          <span>© {new Date().getFullYear()} Nadia Cocina. Todos los derechos reservados.</span>
          <span>Hecho con 🤎 en Marcos Paz, Argentina.</span>
        </div>
      </div>
    </footer>
  );
}
