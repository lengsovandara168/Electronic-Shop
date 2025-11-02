import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';
import { CartStore } from './CartStore';
import toast from 'react-hot-toast';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  rating: number;
  stock: number;
  description: string;
}

interface ProductQuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductQuickView({ product, isOpen, onClose }: ProductQuickViewProps) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      CartStore.addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        brand: product.brand,
      });
    }
    toast.success(`Added ${quantity} ${quantity === 1 ? 'item' : 'items'} to cart!`, {
      icon: '🛒',
    });
    onClose();
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover rounded-xl shadow-lg"
                  />
                  {product.stock < 10 && product.stock > 0 && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                      Only {product.stock} left!
                    </div>
                  )}
                </motion.div>

                {/* Details */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-4">{product.brand}</p>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="flex">{renderStars(product.rating)}</div>
                    <span className="text-sm text-gray-600">
                      ({product.rating} out of 5)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      ${product.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Quantity Selector */}
                  <div className="flex items-center space-x-4 mb-6">
                    <label className="text-sm font-semibold text-gray-700">
                      Quantity:
                    </label>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      disabled={product.stock === 0}
                    >
                      {Array.from({ length: Math.min(product.stock, 10) }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleAddToCart}
                      disabled={product.stock === 0}
                      className={`flex-1 py-4 px-6 rounded-xl font-bold text-white text-lg flex items-center justify-center space-x-2 shadow-lg ${
                        product.stock > 0
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                          : 'bg-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>
                        {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                      </span>
                    </motion.button>

                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={`/${product.id}`}
                      className="px-6 py-4 border-2 border-purple-600 text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-colors flex items-center justify-center"
                    >
                      View Details
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
