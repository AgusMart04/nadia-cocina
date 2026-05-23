import { useState } from "react";
import pizza from "@/assets/pizza.jpg";
import pizza1 from "@/assets/pizza-1.jpg";
import pizza2 from "@/assets/pizza-2.jpg";
import pizza3 from "@/assets/pizza-3.jpg";
import miga from "@/assets/miga.jpg";
import miga1 from "@/assets/miga-1.jpg";
import miga2 from "@/assets/miga-2.jpg";
import medialunas from "@/assets/medialunas.jpg";
import medialunas1 from "@/assets/medialunas-1.jpg";
import medialunas2 from "@/assets/medialunas-2.jpg";
import medialunas3 from "@/assets/medialunas-3.jpg";
import medialunas4 from "@/assets/medialunas-4.jpg";
import medialunas5 from "@/assets/medialunas-5.jpg";
import medialunas6 from "@/assets/medialunas-6.jpg";
import medialunas7 from "@/assets/medialunas-7.jpg";
import catering from "@/assets/catering.jpg";
import catering1 from "@/assets/catering-1.jpg";
import catering2 from "@/assets/catering-2.jpg";
import catering3 from "@/assets/catering-3.jpg";
import catering4 from "@/assets/catering-4.jpg";
import catering5 from "@/assets/catering-5.jpg";
import catering6 from "@/assets/catering-6.jpg";
import catering7 from "@/assets/catering-7.jpg";
import empanadas from "@/assets/empanadas.jpg";
import empanadas1 from "@/assets/empanadas-1.jpg";
import empanadas2 from "@/assets/empanadas-2.jpg";
import { ImageGallery } from "./ImageGallery";

const items = [
  { img: pizza, title: "Pizzas listas para hornear", text: "Listas en solo 10 minutos.", tag: "Más pedido", gallery: [pizza, pizza1, pizza2, pizza3] },
  { img: miga, title: "Tortas de miga", text: "Ideales para reuniones y eventos.", tag: "Encargo", gallery: [miga, miga1, miga2] },
  { img: medialunas, title: "Panadería artesanal", text: "Medialunas, fosforitos, chipá y más.", tag: "Diario", gallery: [medialunas, medialunas1, medialunas2, medialunas3, medialunas4, medialunas5, medialunas6, medialunas7] },
  { img: catering, title: "Catering frío", text: "Soluciones para cumpleaños y eventos.", tag: "Eventos", gallery: [catering, catering1, catering2, catering3, catering4, catering5, catering6, catering7] },
  { img: empanadas, title: "Empanadas caseras", text: "Sabores clásicos hechos artesanalmente.", tag: "Clásico", gallery: [empanadas, empanadas1, empanadas2] },
];

export function Destacados() {
  const [selected, setSelected] = useState<typeof items[0] | null>(null);

  return (
    <section id="productos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 max-w-2xl reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-terracotta font-medium">
            Nuestros productos
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-cocoa leading-tight">
            Hecho cada día con <span className="italic text-terracotta">manos y tiempo</span>
          </h2>
          <p className="mt-4 text-cocoa/70 leading-relaxed">
            Desde la masa hasta el último detalle: ingredientes simples, recetas
            de siempre y mucha dedicación.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <article
              key={it.title}
              onClick={() => setSelected(it)}
              className="group reveal hover-lift relative overflow-hidden rounded-3xl bg-card shadow-card cursor-pointer"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="img-zoom relative aspect-[4/3]">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa/80 via-cocoa/10 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-medium text-cocoa">
                  {it.tag}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl text-cream leading-tight">
                    {it.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-cream/85">{it.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <ImageGallery
          images={selected.gallery}
          title={selected.title}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
