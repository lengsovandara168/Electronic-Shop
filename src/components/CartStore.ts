export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  brand: string;
}

const STORAGE_KEY = "emart-cart";

export class CartStore {
  static getCart(): CartItem[] {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  static saveCart(items: CartItem[]): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event("cartUpdated"));
  }

  static addItem(item: Omit<CartItem, "quantity">): void {
    const cart = this.getCart();
    const existing = cart.find((i) => i.id === item.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    this.saveCart(cart);
  }

  static updateQuantity(id: string, quantity: number): void {
    const cart = this.getCart();
    const item = cart.find((i) => i.id === id);

    if (item) {
      item.quantity = Math.max(0, quantity);
    }

    this.saveCart(cart.filter((i) => i.quantity > 0));
  }

  static removeItem(id: string): void {
    const cart = this.getCart().filter((i) => i.id !== id);
    this.saveCart(cart);
  }

  static clearCart(): void {
    this.saveCart([]);
  }

  static getItemCount(): number {
    return this.getCart().reduce((sum, item) => sum + item.quantity, 0);
  }

  static getTotal(): number {
    return this.getCart().reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }
}
