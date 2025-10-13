import ProductCard from "./ProductCard";
import type { Product } from "../lib/products";
import { CartStore } from "./CartStore";
import { useState } from "react";

export default function ProductGrid({ items }: { items: Product[] }) {
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const onAdd = (id: string) => {
    CartStore.add(id, 1);
    
    // Dispatch custom event to update cart counter in navigation
    const cartItems = CartStore.load();
    const totalCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { count: totalCount } }));
    
    // Show visual feedback
    setAddedItems(prev => new Set([...prev, id]));
    
    // Remove visual feedback after 2 seconds
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }, 2000);
  };
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((p, index) => (
        <div
          key={p.id}
          className="animate-in fade-in slide-in-from-bottom-4"
          style={{
            animationDelay: `${index * 100}ms`,
            animationDuration: '600ms',
            animationFillMode: 'backwards'
          }}
        >
          <ProductCard 
            p={p} 
            onAdd={onAdd} 
            isAdded={addedItems.has(p.id)}
          />
        </div>
      ))}
    </div>
  );
}
