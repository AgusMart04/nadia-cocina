import { useState, useEffect } from "react";
import { X, ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";

type Props = {
  images: string[];
  title: string;
  onClose: () => void;
};

export function ImageGallery({ images, title, onClose }: Props) {
  const [mode, setMode] = useState<"grid" | "full">(
    images.length === 1 ? "full" : "grid"
  );
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (mode === "full") setMode("grid");
        else onClose();
      }
      if (mode === "full") {
        if (e.key === "ArrowLeft")
          setCurrent((i) => Math.max(0, i - 1));
        if (e.key === "ArrowRight")
          setCurrent((i) => Math.min(images.length - 1, i + 1));
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [mode, images.length, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center animate-fade-in"
      onClick={() => {
        if (mode === "full") setMode("grid");
        else onClose();
      }}
    >
      {mode === "grid" ? (
        <div
          className="relative max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto scrollbar-hide"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-xl text-white">{title}</h3>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i);
                  setMode("full");
                }}
                className="group overflow-hidden rounded-xl bg-white/5"
              >
                <img
                  src={img}
                  alt={`${title} ${i + 1}`}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div
          className="relative flex items-center justify-center w-full h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setMode("grid")}
            className="absolute top-4 left-4 z-10 rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
            title="Ver todas las fotos"
          >
            <LayoutGrid size={20} />
          </button>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setCurrent((i) => Math.max(0, i - 1))
                }
                disabled={current === 0}
                className="absolute left-4 z-10 rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ArrowLeft size={28} />
              </button>
              <button
                onClick={() =>
                  setCurrent((i) =>
                    Math.min(images.length - 1, i + 1)
                  )
                }
                disabled={current === images.length - 1}
                className="absolute right-4 z-10 rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ArrowRight size={28} />
              </button>
            </>
          )}

          <img
            src={images[current]}
            alt={`${title} ${current + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain select-none"
            draggable={false}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium">
            {current + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
