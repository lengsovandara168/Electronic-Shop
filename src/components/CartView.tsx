import React, { useState, useEffect } from "react";
import { CartStore, type CartItem } from "./CartStore";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Package,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { Button } from "./ui/Button";
import { Card, CardContent, CardFooter } from "./ui/Card";
import { Badge } from "./ui/Badge";

export default function CartView() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setItems(CartStore.getCart());
    setIsLoading(false);

    const handleUpdate = () => {
      setItems(CartStore.getCart());
    };

    window.addEventListener("cartUpdated", handleUpdate);
    return () => window.removeEventListener("cartUpdated", handleUpdate);
  }, []);

  const updateQuantity = (id: string, delta: number) => {
    const item = items.find((i) => i.id === id);
    if (item) {
      CartStore.updateQuantity(id, item.quantity + delta);
    }
  };

  const removeItem = (id: string) => {
    CartStore.removeItem(id);
    toast.success("Removed from cart", {
      icon: "🗑️",
    });
  };

  const total = items.reduce(
    (sum, item) => sum + (item.price || 0) * item.quantity,
    0
  );
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-indigo-50/30 to-purple-50/30">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="relative">
            <div className="animate-spin rounded-full h-20 w-20 border-4 border-indigo-200"></div>
            <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-indigo-600 absolute top-0 left-0"></div>
          </div>
          <p className="text-gray-600 text-lg mt-6 font-medium">
            Loading your cart...
          </p>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50/30 to-purple-50/30 flex items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <ShoppingBag className="w-16 h-16 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Looks like you haven't added anything to your cart yet. Start
            shopping to find amazing products!
          </p>
          <Button
            onClick={() => (window.location.href = "/products")}
            size="lg"
            className="shadow-xl hover:shadow-2xl"
          >
            <Package className="w-5 h-5 mr-2" />
            Browse Products
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50/30 to-purple-50/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
            Shopping Cart
          </h1>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="text-base px-4 py-1.5">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </Badge>
            <span className="text-gray-600 text-lg">Ready for checkout</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <AnimatePresence mode="popLayout">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  layout
                >
                  <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-indigo-200 group overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row gap-6 p-6">
                        <a
                          href={`/${item.id}`}
                          className="flex-shrink-0 relative overflow-hidden rounded-xl bg-gray-100 group-hover:bg-gray-200 transition-colors"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full sm:w-36 h-52 sm:h-36 object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </a>
                        <div className="flex-1 min-w-0 flex flex-col">
                          <a
                            href={`/${item.id}`}
                            className="font-bold text-xl text-gray-900 mb-2 hover:text-indigo-600 transition-colors line-clamp-2"
                          >
                            {item.name}
                          </a>
                          <p className="text-sm text-gray-500 mb-4 font-medium">
                            {item.brand}
                          </p>
                          <div className="mt-auto">
                            <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                              ${(item.price || 0).toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                              Subtotal:{" "}
                              <span className="text-indigo-600 font-bold">
                                $
                                {((item.price || 0) * item.quantity).toFixed(2)}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4">
                          <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-1.5 border-2 border-gray-200 group-hover:border-indigo-200 transition-colors">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-2 hover:bg-indigo-100 hover:text-indigo-600 rounded-lg transition-all duration-200 active:scale-90"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-12 text-center font-bold text-gray-900 text-lg">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-2 hover:bg-indigo-100 hover:text-indigo-600 rounded-lg transition-all duration-200 active:scale-90"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-white hover:bg-red-500 transition-all duration-200 p-3 rounded-xl active:scale-90 border-2 border-transparent hover:border-red-500"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="sticky top-24 shadow-2xl border-gray-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Order Summary
                </h2>
                <div className="space-y-5 mb-8">
                  <div className="flex justify-between text-gray-700 text-base">
                    <span className="font-medium">
                      Subtotal ({itemCount} items)
                    </span>
                    <span className="font-bold text-gray-900">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-700 text-base">
                    <span className="font-medium">Shipping</span>
                    <Badge variant="success" className="font-bold">
                      FREE
                    </Badge>
                  </div>
                  <div className="flex justify-between text-gray-700 text-base">
                    <span className="font-medium">Tax (10%)</span>
                    <span className="font-semibold text-gray-900">
                      ${(total * 0.1).toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-5 mt-5">
                    <div className="flex justify-between items-baseline">
                      <span className="text-lg font-medium text-gray-700">
                        Total
                      </span>
                      <span className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        ${(total * 1.1).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-8 pt-0 flex-col gap-4">
                <Button
                  className="w-full py-6 text-lg shadow-xl hover:shadow-2xl"
                  size="lg"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => (window.location.href = "/products")}
                >
                  Continue Shopping
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
