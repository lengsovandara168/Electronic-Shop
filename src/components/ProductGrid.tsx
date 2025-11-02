import ProductCard from "./ProductCard";
import type { Product } from "../lib/products";

export default function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="grid items-stretch grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
      {items.map((p, index) => (
        <div
          key={p.id}
          className="animate-in fade-in slide-in-from-bottom-4 h-full"
          style={{
            animationDelay: `${index * 100}ms`,
            animationDuration: "600ms",
            animationFillMode: "backwards",
          }}
        >
          <ProductCard p={p} />
        </div>
      ))}
    </div>
  );
}
