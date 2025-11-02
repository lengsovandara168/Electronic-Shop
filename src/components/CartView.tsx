import React, { useState, useEffect, useRef } from "react";
import { CartStore, type CartItem } from "./CartStore";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import gsap from "gsap";
import toast from "react-hot-toast";

export default function CartView() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const cartItemsRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add a small delay to ensure client-side mounting
    setIsLoading(true);
    setItems(CartStore.getCart());
    setIsLoading(false);

    const handleUpdate = () => {
      setItems(CartStore.getCart());
    };

    window.addEventListener("cartUpdated", handleUpdate);
    return () => window.removeEventListener("cartUpdated", handleUpdate);
  }, []);

  // GSAP Animation for cart items
  useEffect(() => {
    if (items.length > 0 && cartItemsRef.current) {
      const cartItems = cartItemsRef.current.querySelectorAll(".cart-item");
      gsap.fromTo(
        cartItems,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }

    if (summaryRef.current) {
      gsap.fromTo(
        summaryRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.6, delay: 0.2, ease: "power2.out" }
      );
    }
  }, [items.length]);

  const updateQuantity = (id: string, delta: number) => {
    const item = items.find((i) => i.id === id);
    if (item) {
      CartStore.updateQuantity(id, item.quantity + delta);
    }
  };

  const removeItem = (id: string) => {
    // Animate item removal
    const element = document.querySelector(`[data-item-id="${id}"]`);
    if (element) {
      gsap.to(element, {
        opacity: 0,
        x: -100,
        scale: 0.8,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          CartStore.removeItem(id);
            toast.success('Removed from cart', {
              icon: '🗑️',
            });
        },
      });
    } else {
      CartStore.removeItem(id);
        toast.success('Removed from cart', {
          icon: '🗑️',
        });
    }
  };

  const total = items.reduce(
    (sum, item) => sum + (item.price || 0) * item.quantity,
    0
  );
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading cart...</p>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-purple-50/20 to-blue-50/20 px-4">
        <div className="text-center max-w-md">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 blur-2xl opacity-30 rounded-full"></div>
            <ShoppingBag className="relative w-28 h-28 mx-auto text-gray-300 mb-6 animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Add some amazing products to get started!
          </p>
          <a
            href="/products"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            Start Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/20 to-blue-50/20 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600 text-lg">
            {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div ref={cartItemsRef} className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                data-item-id={item.id}
                className="cart-item bg-white rounded-2xl shadow-md hover:shadow-xl p-6 flex flex-col sm:flex-row gap-6 transition-all duration-300 border border-gray-100 hover:border-purple-200 group"
              >
                <a
                  href={`/${item.id}`}
                  className="flex-shrink-0 relative overflow-hidden rounded-xl"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-32 h-48 sm:h-32 object-cover hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </a>
                <div className="flex-1 min-w-0">
                  <a
                    href={`/${item.id}`}
                    className="font-semibold text-xl text-gray-900 mb-2 hover:text-purple-600 transition-colors line-clamp-2 block"
                  >
                    {item.name}
                  </a>
                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    {item.brand}
                  </p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    ${(item.price || 0).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600 mt-2 font-medium">
                    Item total:{" "}
                    <span className="text-purple-600 font-bold">
                      ${((item.price || 0) * item.quantity).toFixed(2)}
                    </span>
                  </p>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-between gap-4">
                  <div className="flex items-center gap-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-2 border border-gray-200">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-2 hover:bg-purple-100 hover:text-purple-600 rounded-lg transition-all duration-200 active:scale-95"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-bold text-gray-900 text-lg">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-2 hover:bg-purple-100 hover:text-purple-600 rounded-lg transition-all duration-200 active:scale-95"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-white hover:bg-red-500 transition-all duration-200 p-2.5 rounded-lg active:scale-95"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div ref={summaryRef} className="bg-white rounded-2xl shadow-xl p-8 sticky top-24 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Order Summary
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-700 text-base">
                  <span className="font-medium">
                    Subtotal ({itemCount} items)
                  </span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700 text-base">
                  <span className="font-medium">Shipping</span>
                  <span className="text-green-600 font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-gray-700 text-base">
                  <span className="font-medium">Tax (10%)</span>
                  <span className="font-semibold">
                    ${(total * 0.1).toFixed(2)}
                  </span>
                </div>
                <div className="border-t-2 border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between text-2xl font-bold">
                    <span className="text-gray-900">Total</span>
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      ${(total * 1.1).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform mb-4">
                Proceed to Checkout
              </button>
              <a
                href="/products"
                className="block text-center text-purple-600 hover:text-purple-700 font-medium hover:underline transition-colors"
              >
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
