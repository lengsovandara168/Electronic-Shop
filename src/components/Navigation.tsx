import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Smartphone, 
  Monitor, 
  Headphones, 
  ShoppingCart, 
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  initialCartCount?: number;
}

export default function Navigation({ initialCartCount = 0 }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(initialCartCount);

  useEffect(() => {
    // Function to get cart count from localStorage
    const getCartCount = () => {
      try {
        const cartItems = JSON.parse(localStorage.getItem('emart-cart') || '[]');
        return cartItems.reduce((sum: number, item: any) => sum + (item.qty || 0), 0);
      } catch (error) {
        console.error('Error getting cart count:', error);
        return 0;
      }
    };

    // Update cart count on mount
    setCartCount(getCartCount());

    // Listen for storage changes
    const handleStorageChange = () => {
      setCartCount(getCartCount());
    };

    // Listen for custom cart update events
    const handleCartUpdate = (event: CustomEvent) => {
      setCartCount(event.detail.count);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('cartUpdated', handleCartUpdate as EventListener);

    // Update cart count periodically
    const interval = setInterval(() => {
      setCartCount(getCartCount());
    }, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cartUpdated', handleCartUpdate as EventListener);
      clearInterval(interval);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50 shadow-2xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <a 
              href="/" 
              className="group flex items-center space-x-2 sm:space-x-3 text-white hover:text-purple-300 transition-all duration-300 no-underline"
            >
              <div className={cn(
                "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12",
                "bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg sm:rounded-xl",
                "flex items-center justify-center shadow-lg",
                "group-hover:shadow-purple-500/50 group-hover:scale-110 transition-all duration-300"
              )}>
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-white" />
              </div>
              <span className={cn(
                "text-lg sm:text-xl lg:text-2xl font-bold",
                "bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent",
                "hidden xs:block"
              )}>
                ElectroMart
              </span>
              {/* Shortened logo for very small screens */}
              <span className={cn(
                "text-sm font-bold",
                "bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent",
                "block xs:hidden"
              )}>
                EM
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a 
              href="/phones" 
              className={cn(
                "group relative flex items-center space-x-2",
                "text-gray-300 hover:text-white transition-all duration-300 no-underline",
                "px-3 py-2 rounded-lg hover:bg-purple-800/30"
              )}
            >
              <Smartphone className="w-4 h-4" />
              <span className="text-sm xl:text-base">Phones</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
            </a>
            
            <a 
              href="/computers" 
              className={cn(
                "group relative flex items-center space-x-2",
                "text-gray-300 hover:text-white transition-all duration-300 no-underline",
                "px-3 py-2 rounded-lg hover:bg-purple-800/30"
              )}
            >
              <Monitor className="w-4 h-4" />
              <span className="text-sm xl:text-base">Computers</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
            </a>
            
            <a 
              href="/accessories" 
              className={cn(
                "group relative flex items-center space-x-2",
                "text-gray-300 hover:text-white transition-all duration-300 no-underline",
                "px-3 py-2 rounded-lg hover:bg-purple-800/30"
              )}
            >
              <Headphones className="w-4 h-4" />
              <span className="text-sm xl:text-base">Accessories</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
            </a>
          </div>

          {/* Tablet Navigation (Hidden on mobile and desktop) */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <a 
              href="/phones" 
              className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-purple-800/30"
              title="Phones"
            >
              <Smartphone className="w-5 h-5" />
            </a>
            <a 
              href="/computers" 
              className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-purple-800/30"
              title="Computers"
            >
              <Monitor className="w-5 h-5" />
            </a>
            <a 
              href="/accessories" 
              className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-purple-800/30"
              title="Accessories"
            >
              <Headphones className="w-5 h-5" />
            </a>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Cart Button */}
            <a 
              href="/cart" 
              className={cn(
                "group relative bg-gradient-to-r from-purple-600 to-blue-600",
                "hover:from-purple-700 hover:to-blue-700 text-white",
                "px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3",
                "rounded-full transition-all duration-300 shadow-lg",
                "hover:shadow-purple-500/50 hover:scale-105 no-underline",
                "transform active:scale-95",
                cartCount > 0 && "animate-pulse"
              )}
            >
              <span className="flex items-center space-x-1 sm:space-x-2">
                <ShoppingCart className={cn(
                  "w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300",
                  "group-hover:rotate-12"
                )} />
                <span className="font-medium text-xs sm:text-sm lg:text-base hidden sm:block">Cart</span>
              </span>
              {cartCount > 0 && (
                <div className={cn(
                  "absolute -top-1 -right-1 sm:-top-2 sm:-right-2",
                  "w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6",
                  "bg-red-500 rounded-full flex items-center justify-center",
                  "animate-bounce transition-all duration-300",
                  "ring-2 ring-white/50"
                )}>
                  <span className="text-xs font-bold text-white">{cartCount > 99 ? '99+' : cartCount}</span>
                </div>
              )}
            </a>

            {/* Mobile Menu Button */}
            <button 
              className={cn(
                "md:hidden lg:block xl:hidden",
                "text-white hover:text-purple-300 transition-all duration-300",
                "p-2 rounded-lg hover:bg-purple-800/30 relative",
                "transform hover:scale-110 active:scale-95",
                isMenuOpen && "bg-purple-800/50"
              )}
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                {/* Hamburger to X animation */}
                <div className={cn(
                  "absolute inset-0 transition-all duration-300 ease-in-out",
                  isMenuOpen ? "rotate-180 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"
                )}>
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className={cn(
                  "absolute inset-0 transition-all duration-300 ease-in-out",
                  isMenuOpen ? "rotate-0 opacity-100 scale-100" : "rotate-180 opacity-0 scale-75"
                )}>
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden lg:block xl:hidden overflow-hidden transition-all duration-500 ease-out",
          isMenuOpen 
            ? "max-h-96 opacity-100 translate-y-0" 
            : "max-h-0 opacity-0 -translate-y-4"
        )}>
          <div className={cn(
            "mt-4 sm:mt-6 space-y-3 pb-4",
            "border-t border-purple-500/20 pt-4",
            "transform transition-all duration-300 ease-out",
            isMenuOpen ? "translate-x-0" : "translate-x-4"
          )}>
            {/* Mobile Navigation Links */}
            <a 
              href="/phones" 
              className={cn(
                "flex items-center space-x-3",
                "text-gray-300 hover:text-white hover:bg-purple-800/50",
                "px-4 py-3 rounded-lg transition-all duration-300 no-underline",
                "text-sm sm:text-base transform hover:translate-x-2 hover:scale-105",
                "border-l-2 border-transparent hover:border-purple-400"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 hover:rotate-12" />
              <span>Phones</span>
            </a>
            <a 
              href="/computers" 
              className={cn(
                "flex items-center space-x-3",
                "text-gray-300 hover:text-white hover:bg-purple-800/50",
                "px-4 py-3 rounded-lg transition-all duration-300 no-underline",
                "text-sm sm:text-base transform hover:translate-x-2 hover:scale-105",
                "border-l-2 border-transparent hover:border-purple-400"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              <Monitor className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 hover:rotate-12" />
              <span>Computers</span>
            </a>
            <a 
              href="/accessories" 
              className={cn(
                "flex items-center space-x-3",
                "text-gray-300 hover:text-white hover:bg-purple-800/50",
                "px-4 py-3 rounded-lg transition-all duration-300 no-underline",
                "text-sm sm:text-base transform hover:translate-x-2 hover:scale-105",
                "border-l-2 border-transparent hover:border-purple-400"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              <Headphones className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 hover:rotate-12" />
              <span>Accessories</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}