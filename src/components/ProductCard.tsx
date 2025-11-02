import { useState, useRef, useEffect } from "react";
import type { Product } from "../lib/products";
import ProductImage from "@/components/product/ProductImage.tsx";
import StockBadge from "@/components/product/StockBadge.tsx";
import RatingStars from "@/components/product/RatingStars.tsx";
import { ShoppingCart, Eye } from "lucide-react";
import { CartStore } from "./CartStore";
import gsap from "gsap";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import ProductQuickView from "./ProductQuickView";

type Props = {
  p: Product;
};

export default function ProductCard({ p }: Props) {
  const [isAdded, setIsAdded] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }
  }, []);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    CartStore.addItem({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.image,
      brand: p.brand,
    });

    setIsAdded(true);
    toast.success("Added to cart!", {
      icon: "🛒",
    });

    // Animate button
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    }

    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowQuickView(true);
  };

  return (
    <>
      <ProductQuickView
        product={p}
        isOpen={showQuickView}
        onClose={() => setShowQuickView(false)}
      />
      <a
        ref={cardRef}
        href={`/${p.id}`}
        className="flex flex-col h-full border-2 border-gray-100 rounded-2xl overflow-hidden no-underline text-inherit hover:shadow-2xl transition-all duration-300 bg-white transform hover:scale-105 hover:-translate-y-2 group hover:border-purple-300"
      >
        <div className="relative overflow-hidden">
          <ProductImage
            src={p.image}
            alt={p.name}
            className="w-full h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
          >
            <StockBadge stock={p.stock} />
          </ProductImage>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6 flex-1 flex flex-col bg-gradient-to-b from-white to-gray-50/50">
          <h3 className="text-xl font-bold mb-2 line-clamp-2 break-words text-gray-900 group-hover:text-purple-600 transition-colors">
            {p.name}
          </h3>
          <p className="text-gray-500 text-sm sm:text-base mb-3 font-medium">
            {p.brand}
          </p>

          <RatingStars
            rating={p.rating}
            className="mb-4 text-sm sm:text-base"
            showValue
          />

          <div className="mt-auto space-y-4">
            <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ${p.price}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleQuickView}
              className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-all flex items-center justify-center space-x-2"
            >
              <Eye className="w-4 h-4" />
              <span>Quick View</span>
            </motion.button>

            <button
              ref={buttonRef}
              onClick={handleAddToCart}
              disabled={p.stock === 0}
              className={`w-full py-3 px-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg ${
                isAdded
                  ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                  : p.stock > 0
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-105"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              <span>
                {isAdded
                  ? "Added!"
                  : p.stock === 0
                  ? "Out of Stock"
                  : "Add to Cart"}
              </span>
            </button>
          </div>
        </div>
      </a>
    </>
  );
}
