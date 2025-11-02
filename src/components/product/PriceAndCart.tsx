import React from "react";

type PriceAndCartProps = {
  price: number;
  stock: number;
  isAdded?: boolean;
  onAddClick?: () => void;
};

export default function PriceAndCart({ price, stock, isAdded, onAddClick }: PriceAndCartProps) {
  return (
    <div className="mt-auto flex flex-col  sm:items-center gap-2 sm:gap-4">
      <p className="text-lg sm:text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
        ${price}
      </p>
      <button
        type="button"
        onClick={(e) => {
          // Prevent the parent anchor from navigating and from receiving this click
          e.preventDefault();
          e.stopPropagation();
          onAddClick?.();
        }}
        data-no-card-click
        className={`w-full sm:w-auto px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl transition-all duration-300 text-sm sm:text-base font-medium transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${
          isAdded ? "bg-green-600 text-white animate-pulse" : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg"
        } ${stock === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={stock === 0}
      >
        <span className={`inline-flex items-center ${isAdded ? "animate-bounce" : ""}`}>
          {stock === 0 ? "Sold Out" : isAdded ? "✓ Added!" : "Add to Cart"}
        </span>
      </button>
    </div>
  );
}
