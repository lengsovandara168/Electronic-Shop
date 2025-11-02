import React from "react";

type ProductImageProps = {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
};

export default function ProductImage({
  src,
  alt,
  className = "",
  children,
}: ProductImageProps) {
  return (
    <div className="relative overflow-hidden">
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src =
            "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=center";
        }}
      />
      {children}
    </div>
  );
}
