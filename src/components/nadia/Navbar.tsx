import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, Menu as MenuIcon, X } from "lucide-react";
import { waLink } from "./data";
import logo from "@/assets/logo.png";

const INSTAGRAM_URL = "https://www.instagram.com/nadia_cocinamp/";

const links = [
  { to: "/" as const, label: "Inicio" },
  { to: "/productos" as const, label: "Productos" },
  { to: "/menu" as const, label: "Menú" },
  { to: "/promos" as const, label: "Promos" },
  { to: "/nosotros" as const, label: "Nosotros" },
  { to: "/opiniones" as const, label: "Opiniones" },
  { to: "/contacto" as const, label: "Contacto" },
  { href: INSTAGRAM_URL, label: "Instagram", external: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-border/60 py-3 shadow-soft"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Nadia Cocina" className="h-9 w-auto" />
          <span className="font-display text-xl tracking-tight">
            <span style={{ color: "#f5d47a" }}>Nadia</span> <span className="text-gold">Cocina</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) =>
            l.external ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-sm transition-colors text-cocoa/50 hover:text-terracotta after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-terracotta after:transition-all hover:after:w-full"
              >
                <Instagram size={15} className="inline -mt-0.5 mr-1" />
                {l.label}
              </a>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                className="relative text-sm transition-colors text-cocoa/80 hover:text-terracotta after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-terracotta after:transition-all hover:after:w-full"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink("¡Hola Nadia! Quiero hacer un pedido 🍕")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-terracotta px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-lift hover:-translate-y-0.5"
          >
            Pedir ahora
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full bg-cream text-cocoa shadow-soft hover:shadow-lift transition-all"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full bg-cream text-cocoa shadow-soft"
            aria-label="Menú"
          >
            {open ? <X size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mx-5 mt-3 rounded-2xl glass p-5 shadow-card animate-fade-in">
          <nav className="flex flex-col gap-3">
            {links.map((l) =>
              l.external ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cocoa/85 py-1.5 flex items-center gap-1.5"
              >
                <Instagram size={14} />
                {l.label}
              </a>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-cocoa/85 py-1.5 flex items-center gap-1.5"
              >
                {l.label}
              </Link>
              )
            )}
            <a
              href={waLink("¡Hola Nadia! Quiero hacer un pedido 🍕")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center rounded-full bg-gradient-terracotta px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Pedir por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
