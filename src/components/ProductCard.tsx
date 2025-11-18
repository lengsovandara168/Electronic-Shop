import { useState } from "react";
import type { Product } from "../lib/products";
import ProductImage from "@/components/product/ProductImage.tsx";
import StockBadge from "@/components/product/StockBadge.tsx";
import RatingStars from "@/components/product/RatingStars.tsx";
import { ShoppingCart, Eye, Heart } from "lucide-react";
import { CartStore } from "./CartStore";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import ProductQuickView from "./ProductQuickView";
import { Card, CardContent, CardFooter } from "./ui/Card";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { cn } from "@/lib/utils";

type Props = {
  p: Product;
};

export default function ProductCard({ p }: Props) {
  const [isAdded, setIsAdded] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

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
      duration: 2000,
    });

    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowQuickView(true);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist", {
      icon: isWishlisted ? "💔" : "❤️",
      duration: 2000,
    });
  };

  return (
    <>
      <ProductQuickView
        product={{ ...p, description: "" }}
        isOpen={showQuickView}
        onClose={() => setShowQuickView(false)}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ y: -8 }}
        className="h-full"
      >
        <a
          href={`/${p.id}`}
          className="no-underline text-inherit block h-full"
        >
          <Card className="group h-full hover:border-indigo-200 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
            <div className="relative overflow-hidden bg-gray-50">
              <ProductImage
                src={p.image}
                alt={p.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              >
                <StockBadge stock={p.stock} />
              </ProductImage>
              
              {/* Action Buttons Overlay */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full shadow-lg"
                  onClick={handleWishlist}
                >
                  <Heart 
                    className={cn(
                      "w-4 h-4 transition-colors",
                      isWishlisted && "fill-red-500 text-red-500"
                    )} 
                  />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full shadow-lg"
                  onClick={handleQuickView}
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </div>

              {/* Category Badge */}
              {p.category && (
                <Badge 
                  variant="secondary" 
                  className="absolute top-3 left-3"
                >
                  {p.category}
                </Badge>
              )}
            </div>

            <CardContent className="p-5 flex-1 flex flex-col">
              <div className="mb-2">
                <h3 className="text-lg font-semibold mb-1 line-clamp-2 text-gray-900 group-hover:text-indigo-600 transition-colors min-h-[3.5rem]">
                  {p.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {p.brand}
                </p>
              </div>

              <RatingStars
                rating={p.rating}
                className="mb-3 text-sm"
                showValue
              />

              <div className="flex items-center justify-between mb-4 mt-auto">
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  ${p.price}
                </span>
              </div>
            </CardContent>

            <CardFooter className="p-5 pt-0 gap-2 mt-auto">
              <Button
                variant={isAdded ? "secondary" : "default"}
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
                disabled={p.stock === 0}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {isAdded ? "Added!" : p.stock === 0 ? "Out of Stock" : "Add to Cart"}
              </Button>
            </CardFooter>
          </Card>
        </a>
      </motion.div>
    </>
  );
}
