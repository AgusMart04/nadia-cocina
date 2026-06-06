import { useMemo, useState } from "react";
import { ChevronUp, Minus, Plus, ShoppingBag } from "lucide-react";
import { categories, menu, formatARS, waLink, type MenuItem } from "./data";
import { useCart } from "./CartContext";

export function MenuSection() {
  const { cart, setCart } = useCart();
  const [active, setActive] = useState<string>("pizzas");
  const visible = useMemo(() => menu.filter((m) => m.category === active), [active]);

  const add = (id: string) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const sub = (id: string) =>
    setCart((c) => {
      const next = { ...c };
      const v = (next[id] || 0) - 1;
      if (v <= 0) delete next[id];
      else next[id] = v;
      return next;
    });

  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 reveal">
          <div className="max-w-xl">
            <span className="text-xs tracking-[0.3em] uppercase text-terracotta font-medium">
              Menú completo
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-cocoa leading-tight">
              Elegí, sumá y <span className="italic text-terracotta">pedí por WhatsApp</span>
            </h2>
          </div>
          <p className="text-sm text-cocoa/70 max-w-sm">
            Armá tu pedido sin compromiso. Al finalizar, te llevamos a WhatsApp
            con el detalle listo para enviar.
          </p>
        </div>

        <div className="-mx-5 sm:mx-0 px-5 sm:px-0 mb-10 overflow-x-auto scrollbar-hide reveal">
          <div className="flex gap-2 min-w-max">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  active === c.id
                    ? "bg-gradient-terracotta text-primary-foreground shadow-soft"
                    : "bg-card text-cocoa/75 hover:text-cocoa hover:bg-sand"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <MenuCard
              key={item.id}
              item={item}
              qty={cart[item.id] || 0}
              add={() => add(item.id)}
              sub={() => sub(item.id)}
              delay={i * 40}
            />
          ))}
        </div>

        {active === "tortas" && (
          <div className="mt-8 rounded-2xl border border-terracotta/30 bg-terracotta/5 px-6 py-4 text-sm text-cocoa reveal">
            <strong className="text-terracotta">Importante:</strong> Las tortas de miga
            se encargan con <strong>1 semana de anticipación</strong>.
          </div>
        )}

        <div className="mt-12 rounded-3xl bg-gradient-warm p-8 sm:p-10 shadow-soft reveal">
          <p className="font-display text-2xl text-cocoa">
            ¿Listo para pedir? Tocá el carrito flotante para enviar tu orden directo
            a WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}

function MenuCard({
  item,
  qty,
  add,
  sub,
  delay,
}: {
  item: MenuItem;
  qty: number;
  add: () => void;
  sub: () => void;
  delay: number;
}) {
  return (
    <article
      className="reveal group flex flex-col rounded-2xl bg-card p-5 shadow-soft transition-all hover:shadow-card hover:-translate-y-0.5 border border-border/60"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg text-cocoa leading-snug">{item.name}</h3>
        {item.badge && (
          <span className="shrink-0 rounded-full bg-gold/20 px-2.5 py-0.5 text-[10px] tracking-wider uppercase text-coffee font-medium">
            {item.badge}
          </span>
        )}
      </div>
      {item.desc && (
        <p className="mt-1.5 text-sm text-cocoa/65 leading-relaxed">{item.desc}</p>
      )}
      <div className="mt-5 flex items-center justify-between">
        <span className="font-display text-2xl text-terracotta">
          {formatARS(item.price)}
        </span>
        {qty === 0 ? (
          <button
            onClick={add}
            className="inline-flex items-center gap-1.5 rounded-full bg-cocoa px-4 py-2 text-xs font-medium text-cream transition-all hover:bg-coffee active:scale-95"
          >
            <Plus size={14} /> Agregar
          </button>
        ) : (
          <div className="inline-flex items-center gap-1 rounded-full bg-cocoa text-cream p-1">
            <button
              onClick={sub}
              className="grid h-7 w-7 place-items-center rounded-full hover:bg-coffee active:scale-95 transition"
              aria-label="Quitar"
            >
              <Minus size={14} />
            </button>
            <span className="min-w-6 text-center text-sm font-medium tabular-nums">{qty}</span>
            <button
              onClick={add}
              className="grid h-7 w-7 place-items-center rounded-full hover:bg-coffee active:scale-95 transition"
              aria-label="Agregar"
            >
              <Plus size={14} />
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

export function CartBar() {
  const { cart, clear } = useCart();
  const [open, setOpen] = useState(false);
  const entries = Object.entries(cart);
  const total = entries.reduce((acc, [id, q]) => {
    const m = menu.find((x) => x.id === id);
    return acc + (m ? m.price * q : 0);
  }, 0);
  const count = entries.reduce((a, [, q]) => a + q, 0);

  if (count === 0) return null;

  const buildMessage = () => {
    const lines = ["¡Hola Nadia! Quiero hacer este pedido:", ""];
    entries.forEach(([id, q]) => {
      const m = menu.find((x) => x.id === id);
      if (!m) return;
      lines.push(`• ${q} × ${m.name} — ${formatARS(m.price * q)}`);
    });
    lines.push("", `*Total estimado:* ${formatARS(total)}`, "", "¡Muchas gracias! 🤎");
    return lines.join("\n");
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 sm:px-6 sm:pb-6 pointer-events-none">
      <div className="mx-auto max-w-3xl pointer-events-auto rounded-2xl bg-cocoa text-cream shadow-lift border border-coffee/40 animate-fade-in overflow-hidden">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center gap-3 p-3 sm:p-4 transition hover:bg-coffee/20"
        >
          <div className="relative grid h-11 w-11 place-items-center rounded-full bg-gradient-terracotta shrink-0">
            <ShoppingBag size={18} />
            <span className="absolute -top-0.5 -right-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-gold text-cocoa text-[10px] font-bold px-1">
              {count}
            </span>
          </div>
          <div className="min-w-0 flex-1 text-left">
            <div className="text-[11px] uppercase tracking-[0.2em] text-cream/60">
              Tu pedido
            </div>
            <div className="font-display text-lg leading-tight truncate">
              {formatARS(total)}
            </div>
          </div>
          <ChevronUp
            size={18}
            className={`text-cream/60 transition-transform duration-300 ${open ? "" : "rotate-180"}`}
          />
        </button>

        {open && (
          <div className="border-t border-coffee/40 animate-fade-in">
            <div className="px-4 pb-1 sm:px-6 pt-3 space-y-3 max-h-[50vh] overflow-y-auto">
              {entries.map(([id, qty]) => {
                const item = menu.find((m) => m.id === id);
                if (!item) return null;
                return (
                  <div key={id} className="flex justify-between items-center text-sm bg-white/5 rounded-xl px-3 py-2.5">
                    <span className="truncate pr-2">
                      {item.name} <span className="text-cream/50">×{qty}</span>
                    </span>
                    <span className="shrink-0 font-medium">{formatARS(item.price * qty)}</span>
                  </div>
                );
              })}
            </div>

            <div className="px-4 sm:px-6 pt-3 pb-4 space-y-3">
              <div className="flex justify-between items-center font-display text-xl pt-1">
                <span>Total</span>
                <span>{formatARS(total)}</span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={clear}
                  className="text-xs text-cream/50 hover:text-cream transition px-2 py-1.5"
                >
                  Vaciar pedido
                </button>
                <a
                  href={waLink(buildMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-terracotta px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft hover:shadow-lift transition-all whitespace-nowrap"
                >
                  Enviar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
