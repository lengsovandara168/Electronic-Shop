import { useEffect, useMemo, useState } from "react";
import type { Product } from "../lib/products";
import { CartStore, type CartItem } from "./CartStore";

export default function CartView({ products }: { products: Product[] }) {
  const map = useMemo(
    () => Object.fromEntries(products.map((p) => [p.id, p])),
    [products]
  );
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => setItems(CartStore.load()), []);

  const total = items.reduce(
    (sum, it) => sum + (map[it.id]?.price ?? 0) * it.qty,
    0
  );

  const updateQty = (id: string, qty: number) => {
    CartStore.setQty(id, qty);
    setItems(CartStore.load());
  };
  const remove = (id: string) => {
    CartStore.remove(id);
    setItems(CartStore.load());
  };
  const clear = () => {
    CartStore.clear();
    setItems([]);
  };

  if (!items.length) return <p>Your cart is empty.</p>;

  return (
    <div>
      {items.map(({ id, qty }) => {
        const p = map[id];
        if (!p) return null;
        const line = p.price * qty;
        return (
          <div key={id} className="flex items-center gap-3 py-3 border-b">
            <img
              src={p.image}
              alt={p.name}
              className="w-20 h-20 object-cover rounded border"
            />
            <div className="flex-1">
              <div className="font-medium">{p.name}</div>
              <div className="text-sm text-gray-600">
                ${p.price} • Qty:{" "}
                <input
                  type="number"
                  min={1}
                  value={qty}
                  onChange={(e) =>
                    updateQty(
                      id,
                      Math.max(1, parseInt(e.target.value || "1", 10))
                    )
                  }
                  className="w-16 border rounded px-2 py-1 ml-2"
                />
              </div>
            </div>
            <div className="font-semibold">${line.toFixed(2)}</div>
            <button onClick={() => remove(id)} className="ml-2 text-red-600">
              Remove
            </button>
          </div>
        );
      })}
      <div className="flex justify-between items-center mt-4">
        <button onClick={clear} className="border rounded px-3 py-2">
          Clear cart
        </button>
        <div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
        <button
          onClick={() => alert("This is a mock checkout.")}
          className="px-4 py-2 rounded bg-black text-white"
        >
          Mock Checkout
        </button>
      </div>
    </div>
  );
}
