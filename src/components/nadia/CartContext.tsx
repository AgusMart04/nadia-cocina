import { createContext, useContext, useState, type ReactNode } from "react";

export type CartState = Record<string, number>;

type CartContextType = {
  cart: CartState;
  setCart: React.Dispatch<React.SetStateAction<CartState>>;
  clear: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartState>({});
  const clear = () => setCart({});
  return (
    <CartContext.Provider value={{ cart, setCart, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
