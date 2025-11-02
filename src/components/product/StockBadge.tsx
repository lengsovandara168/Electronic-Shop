import React from "react";

type StockBadgeProps = {
  stock: number;
};

export default function StockBadge({ stock }: StockBadgeProps) {
  if (stock < 10 && stock > 0) {
    return (
      <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded animate-pulse">
        Only {stock} left
      </div>
    );
  }
  if (stock === 0) {
    return (
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded animate-bounce">
        Out of Stock
      </div>
    );
  }
  return null;
}
