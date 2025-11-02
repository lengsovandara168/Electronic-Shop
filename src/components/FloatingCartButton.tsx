import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { CartStore } from './CartStore';

export default function FloatingCartButton() {
  const [cartCount, setCartCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after scrolling down
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setCartCount(CartStore.getItemCount());

    const handleCartUpdate = () => {
      setCartCount(CartStore.getItemCount());
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  if (!isVisible && cartCount === 0) return null;

  return (
    <motion.a
      href="/cart"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: isVisible || cartCount > 0 ? 1 : 0, opacity: isVisible || cartCount > 0 ? 1 : 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-shadow"
    >
      <ShoppingCart className="w-6 h-6" />
      {cartCount > 0 && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
        >
          {cartCount > 99 ? '99+' : cartCount}
        </motion.span>
      )}
    </motion.a>
  );
}
