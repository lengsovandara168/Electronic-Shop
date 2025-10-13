export type CartItem = { id: string; qty: number };
const KEY = "emart-cart";

export const CartStore = {
  load(): CartItem[] {
    if (typeof localStorage === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem(KEY) || "[]");
    } catch {
      return [];
    }
  },
  save(items: CartItem[]) {
    if (typeof localStorage === "undefined") return;
    localStorage.setItem(KEY, JSON.stringify(items));
  },
  add(id: string, qty = 1) {
    const items = this.load();
    const i = items.findIndex((it) => it.id === id);
    if (i >= 0) items[i].qty += qty;
    else items.push({ id, qty });
    this.save(items);
  },
  setQty(id: string, qty: number) {
    if (qty <= 0) return this.remove(id);
    const items = this.load().map((it) => (it.id === id ? { ...it, qty } : it));
    this.save(items);
  },
  remove(id: string) {
    this.save(this.load().filter((it) => it.id !== id));
  },
  clear() {
    this.save([]);
  },
};
