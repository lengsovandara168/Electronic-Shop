import type { Product } from "../lib/products";

type Props = { 
  p: Product; 
  onAdd?: (id: string) => void;
  isAdded?: boolean;
};

export default function ProductCard({ p, onAdd, isAdded }: Props) {
  return (
    <a
      href={`/product/${p.id}`}
      className="block border border-gray-200 rounded-lg overflow-hidden no-underline text-inherit hover:shadow-xl transition-all duration-300 bg-white transform hover:scale-[1.02] hover:-translate-y-1 group"
    >
      <div className="relative overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            e.currentTarget.src = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=center";
          }}
        />
        {p.stock < 10 && p.stock > 0 && (
          <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded animate-pulse">
            Only {p.stock} left
          </div>
        )}
        {p.stock === 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded animate-bounce">
            Out of Stock
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 line-clamp-2">{p.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{p.brand}</p>
        
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400 text-sm group-hover:scale-110 transition-transform duration-300">
            {"★".repeat(Math.floor(p.rating))}
            {"☆".repeat(5 - Math.floor(p.rating))}
          </div>
          <span className="text-gray-500 text-sm ml-1">({p.rating})</span>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">${p.price}</p>
          {onAdd && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onAdd(p.id);
              }}
              className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium transform hover:scale-105 active:scale-95 ${
                isAdded 
                  ? "bg-green-600 text-white animate-pulse" 
                  : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg"
              } ${p.stock === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={p.stock === 0}
            >
              <span className={`inline-flex items-center ${isAdded ? "animate-bounce" : ""}`}>
                {p.stock === 0 ? "Sold Out" : isAdded ? "✓ Added!" : "Add to Cart"}
              </span>
            </button>
          )}
        </div>
      </div>
    </a>
  );
}
