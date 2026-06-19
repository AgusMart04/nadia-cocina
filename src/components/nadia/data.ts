export const WHATSAPP = "5491150970593";
export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export type MenuItem = {
  id: string;
  name: string;
  desc?: string;
  price: number;
  category: string;
  badge?: string;
};

export const categories = [
  { id: "pizzas", label: "Pizzas" },
  { id: "prepizzas", label: "Pre-pizzas" },
  { id: "panaderia", label: "Panadería" },
  { id: "empanadas", label: "Empanadas" },
  { id: "sandwiches", label: "Sándwiches" },
  { id: "tortas", label: "Tortas de miga" },
] as const;

export const menu: MenuItem[] = [
  // Pizzas
  { id: "pz-mc-g", name: "Muzzarella Grande — Común", desc: "Harina común. Masa artesanal.", price: 7000, category: "pizzas", badge: "Más pedida" },
  { id: "pz-mc-i", name: "Muzzarella Individual — Común", desc: "Harina común. Para uno.", price: 4000, category: "pizzas" },
  { id: "pz-ec-g", name: "Especial Grande — Común", desc: "Jamón, salame, roquefort, choclo, napo, cebolla, capresse o huevo.", price: 8500, category: "pizzas" },
  { id: "pz-ec-i", name: "Especial Individual — Común", desc: "Elegí tu sabor.", price: 5000, category: "pizzas" },
  { id: "pz-mi-g", name: "Muzzarella Grande — Integral", desc: "Masa integral artesanal.", price: 7000, category: "pizzas", badge: "Integral" },
  { id: "pz-mi-i", name: "Muzzarella Individual — Integral", desc: "Masa integral, porción uno.", price: 4000, category: "pizzas" },
  { id: "pz-ei-g", name: "Especial Grande — Integral", desc: "Masa integral, sabor a elección.", price: 8500, category: "pizzas" },
  { id: "pz-ei-i", name: "Especial Individual — Integral", desc: "Integral individual a elección.", price: 5000, category: "pizzas" },
  { id: "pz-pm", name: "Pizzetas Muzzarella x12", desc: "Ideales para picada.", price: 7000, category: "pizzas", badge: "Para compartir" },
  { id: "pz-pe", name: "Pizzetas Especiales x12", desc: "Variedad de sabores.", price: 8500, category: "pizzas" },

  // Pre-pizzas
  { id: "pp-tc-g", name: "Pre-pizza Tomate Grande x2 — Común", desc: "Pack 2 unidades.", price: 2500, category: "prepizzas" },
  { id: "pp-tc-i", name: "Pre-pizza Tomate Individual — Común", desc: "Unidad.", price: 1400, category: "prepizzas" },
  { id: "pp-cc-g", name: "Pre-pizza Cebolla Grande x2 — Común", desc: "Pack 2 unidades.", price: 3000, category: "prepizzas" },
  { id: "pp-cc-i", name: "Pre-pizza Cebolla Individual — Común", desc: "Unidad.", price: 1600, category: "prepizzas" },
  { id: "pp-ti-g", name: "Pre-pizza Tomate Grande x2 — Integral", desc: "Pack 2 unidades.", price: 2500, category: "prepizzas" },
  { id: "pp-ti-i", name: "Pre-pizza Tomate Individual — Integral", desc: "Unidad.", price: 1400, category: "prepizzas" },
  { id: "pp-ci-g", name: "Pre-pizza Cebolla Grande x2 — Integral", desc: "Pack 2 unidades.", price: 3000, category: "prepizzas" },
  { id: "pp-ci-i", name: "Pre-pizza Cebolla Individual — Integral", desc: "Unidad.", price: 1600, category: "prepizzas" },

  // Panadería
  { id: "ar-jq", name: "Árabe JyQ", desc: "Pan árabe con jamón y queso.", price: 2500, category: "panaderia" },
  { id: "ar-jqt", name: "Árabe JyQ con tomate", desc: "Con tomate fresco.", price: 3600, category: "panaderia" },
  { id: "ch-c", name: "Chipá Congelados ½kg", desc: "Listos para hornear.", price: 8000, category: "panaderia" },
  { id: "ch-h", name: "Chipá Horneados ½kg", desc: "Recién horneados.", price: 9000, category: "panaderia" },
  { id: "md-s-d", name: "Medialunas Simples — docena", desc: "Manteca, doradas.", price: 10000, category: "panaderia", badge: "Favorito" },
  { id: "md-s-m", name: "Medialunas Simples — ½ docena", desc: "Pack 6 unidades.", price: 6000, category: "panaderia" },
  { id: "md-r-d", name: "Medialunas Rellenas — docena", desc: "Rellenas artesanales.", price: 13000, category: "panaderia" },
  { id: "md-r-m", name: "Medialunas Rellenas — ½ docena", desc: "Pack 6 unidades.", price: 7000, category: "panaderia" },
  { id: "md-jq-d", name: "Medialunas JyQ — docena", desc: "Con jamón y queso.", price: 13000, category: "panaderia" },
  { id: "md-jq-m", name: "Medialunas JyQ — ½ docena", desc: "Pack 6 unidades.", price: 7000, category: "panaderia" },
  { id: "fs-d", name: "Fosforitos JyQ — docena", desc: "Hojaldre crocante.", price: 7500, category: "panaderia" },
  { id: "fs-m", name: "Fosforitos JyQ — ½ docena", desc: "Pack 6 unidades.", price: 4500, category: "panaderia" },

  // Empanadas
  { id: "em-r-c", name: "Empanadas Rotiseras — Cocidas (doc.)", desc: "Carne, pollo, JyQ, verdura y queso.", price: 18000, category: "empanadas" },
  { id: "em-r-cr", name: "Empanadas Rotiseras — Crudas (doc.)", desc: "Para hornear en casa.", price: 13000, category: "empanadas" },
  { id: "em-c-c", name: "Empanadas Copetín — Cocidas (doc.)", desc: "Tamaño copetín.", price: 12000, category: "empanadas" },
  { id: "em-c-cr", name: "Empanadas Copetín — Crudas (doc.)", desc: "Para hornear en casa.", price: 9000, category: "empanadas" },

  // Sándwiches
  { id: "sd-c-d", name: "Sándwiches Clásicos JyQ — docena", desc: "Pan de miga, JyQ.", price: 17000, category: "sandwiches" },
  { id: "sd-c-m", name: "Sándwiches Clásicos JyQ — ½ docena", desc: "Pack 6 unidades.", price: 9000, category: "sandwiches" },
  { id: "sd-s-d", name: "Sándwiches Surtidos — docena", desc: "Variedad gourmet.", price: 20000, category: "sandwiches", badge: "Gourmet" },
  { id: "sd-s-m", name: "Sándwiches Surtidos — ½ docena", desc: "Pack 6 unidades.", price: 11000, category: "sandwiches" },

  // Tortas de miga
  { id: "tm-2", name: "Torta de miga — 2 personas", desc: "Encargo con 1 semana.", price: 7000, category: "tortas", badge: "Encargo previo" },
  { id: "tm-24", name: "Torta de miga — 24 sándwiches", desc: "Encargo con 1 semana.", price: 25000, category: "tortas" },
  { id: "tm-36", name: "Torta de miga — 36 sándwiches", desc: "Encargo con 1 semana.", price: 30000, category: "tortas" },
  { id: "tm-48", name: "Torta de miga — 48 sándwiches", desc: "Encargo con 1 semana.", price: 40000, category: "tortas" },
];

export const promos = [
  {
    id: "mesa-copetin",
    title: "Ideal para reuniones",
    price: 70000,
    items: [
      "20 pizzetas",
      "32 copetines de miga JyQ",
      "12 sándwich de pollo",
      "12 empanadas copetín",
      "20 sándwiches",
      "12 fosforitos JyQ",
    ],
  },
  {
    id: "mesa-copetin-grande",
    title: "Para eventos grandes",
    price: 120000,
    items: [
      "40 pizzetas",
      "48 copetines de miga",
      "30 sándwiches de pollo",
      "24 empanadas copetín",
      "40 sándwiches",
      "24 fosforitos JyQ",
    ],
  },
];

export const formatARS = (n: number) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(n);
