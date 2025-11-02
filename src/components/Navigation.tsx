import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Smartphone,
  Monitor,
  Headphones,
  Zap,
  ShoppingCart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CartStore } from "./CartStore";
// Removed gsap-driven effects to disable navigation animations

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  // Removed: navRef and gsap mount animation
  const cartBadgeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Initial count
    setCartCount(CartStore.getItemCount());

    // Listen for cart updates
    const handleCartUpdate = () => {
      const newCount = CartStore.getItemCount();
      setCartCount(newCount);

      // Animate cart badge when items are added
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, [cartCount]);

  // Removed: navigation mount animation

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
              <div
                className={cn(
                  "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12",
                  "bg-gradient-to-br from-purple-500 to-blue-500 rounded-full",
                  "flex items-center justify-center shadow-lg",
                  "group-hover:shadow-purple-500/50 group-hover:scale-110 transition-all duration-300"
                )}
              >
                <img
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-10 lg:h-10 text-white rounded-full"
                  src="/public/profile.png"
                />
              </div>
              <span
                className={cn(
                  "text-lg sm:text-xl lg:text-2xl font-bold",
                  "bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent",
                  "hidden xs:block"
                )}
              >
                Trio-God Store
              </span>
              {/* Shortened logo for very small screens */}
              <span
                className={cn(
                  "text-sm font-bold",
                  "bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent",
                  "block xs:hidden"
                )}
              >
                Trio-God Store
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a
              href="/products"
              className={cn(
                "group relative flex items-center space-x-2",
                "text-gray-300 hover:text-white transition-all duration-300 no-underline",
                "px-3 py-2 rounded-lg hover:bg-purple-800/30"
              )}
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm xl:text-base">All</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
            </a>
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

          {/* Cart Button (Desktop & Tablet) */}
          <div className="hidden md:flex items-center">
            <a
              href="/cart"
              className={cn(
                "relative flex items-center space-x-2",
                "text-gray-300 hover:text-white transition-all duration-300 no-underline",
                "px-4 py-2 rounded-lg hover:bg-purple-800/30"
              )}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span
                  ref={cartBadgeRef}
                  className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </a>
          </div>

          {/* Mobile Menu and Cart */}
          <div className="flex md:hidden items-center space-x-2 sm:space-x-3">
            {/* Mobile Cart Button */}
            <a
              href="/cart"
              className={cn(
                "relative text-white hover:text-purple-300 transition-all duration-300",
                "p-2 rounded-lg hover:bg-purple-800/30"
              )}
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
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
                <div
                  className={cn(
                    "absolute inset-0 transition-all duration-300 ease-in-out",
                    isMenuOpen
                      ? "rotate-180 opacity-0 scale-75"
                      : "rotate-0 opacity-100 scale-100"
                  )}
                >
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div
                  className={cn(
                    "absolute inset-0 transition-all duration-300 ease-in-out",
                    isMenuOpen
                      ? "rotate-0 opacity-100 scale-100"
                      : "rotate-180 opacity-0 scale-75"
                  )}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden lg:block xl:hidden overflow-hidden transition-all duration-500 ease-out",
            isMenuOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
          )}
        >
          <div
            className={cn(
              "mt-4 sm:mt-6 space-y-3 pb-4",
              "border-t border-purple-500/20 pt-4",
              "transform transition-all duration-300 ease-out",
              isMenuOpen ? "translate-x-0" : "translate-x-4"
            )}
          >
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
