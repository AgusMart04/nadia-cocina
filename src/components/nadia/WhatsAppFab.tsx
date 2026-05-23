import { MessageCircle } from "lucide-react";
import { waLink } from "./data";

export function WhatsAppFab({ hidden }: { hidden?: boolean }) {
  if (hidden) return null;
  return (
    <a
      href={waLink("¡Hola Nadia! Quiero hacer un pedido 🍕")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir por WhatsApp"
      className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift hover:scale-105 transition-transform"
    >
      <MessageCircle size={24} />
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40 -z-10" />
    </a>
  );
}
