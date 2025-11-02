import React from "react";

type RatingStarsProps = {
  rating: number;
  className?: string;
  showValue?: boolean;
};

export default function RatingStars({
  rating,
  className = "",
  showValue = false,
}: RatingStarsProps) {
  const full = Math.floor(Math.max(0, Math.min(5, rating)));
  return (
    <div
      className={`flex items-center ${className}`}
      aria-label={`Rating ${rating} out of 5`}
    >
      <div className="flex text-yellow-400">
        {"★".repeat(full)}
        {"☆".repeat(5 - full)}
      </div>
      {showValue && (
        <span className="text-gray-500 text-xs sm:text-sm ml-2">
          ({rating})
        </span>
      )}
    </div>
  );
}
