import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Smartphone,
  Monitor,
  Headphones,
  ShoppingCart,
} from "lucide-react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { cn } from "@/lib/utils";
import { CartStore } from "./CartStore";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Separator } from "./ui/Separator";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(CartStore.getItemCount());

    const handleCartUpdate = () => {
      const newCount = CartStore.getItemCount();
      setCartCount(newCount);
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = [
    {
      name: "Phones",
      href: "/phones",
      icon: Smartphone,
      description: "Latest smartphones and mobile devices",
    },
    {
      name: "Computers",
      href: "/computers",
      icon: Monitor,
      description: "Laptops, desktops, and accessories",
    },
    {
      name: "Accessories",
      href: "/accessories",
      icon: Headphones,
      description: "Headphones, cases, and more",
    },
  ];

  return (
    <header className="bg-white/95 border-b border-gray-200 sticky top-0 z-50 shadow-sm backdrop-blur-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <a
              href="/"
              className="group flex items-center space-x-3 no-underline"
            >
              <div
                className={cn(
                  "w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl",
                  "flex items-center justify-center shadow-lg shadow-indigo-500/30",
                  " transition-all duration-300"
                )}
              >
                <img
                  className="w-9 h-9 rounded-xl"
                  src="/profile.png"
                  alt="Logo"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-800 to-purple-700 bg-clip-text text-transparent hidden sm:block">
                Trio-God
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <a
              href="/products"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-all no-underline"
            >
              All Products
            </a>

            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <HoverCard.Root key={category.name} openDelay={200}>
                  <HoverCard.Trigger asChild>
                    <a
                      href={category.href}
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-all no-underline flex items-center gap-2"
                    >
                      <Icon className="w-4 h-4" />
                      {category.name}
                    </a>
                  </HoverCard.Trigger>
                  <HoverCard.Portal>
                    <HoverCard.Content
                      className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-64 z-50"
                      sideOffset={5}
                    >
                      <div className="flex gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {category.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <HoverCard.Arrow className="fill-white" />
                    </HoverCard.Content>
                  </HoverCard.Portal>
                </HoverCard.Root>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <a href="/cart" className="no-underline">
              <Button variant="outline" size="default" className="relative">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Cart
                {cartCount > 0 && (
                  <Badge variant="default" className="ml-2">
                    {cartCount > 99 ? "99+" : cartCount}
                  </Badge>
                )}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a href="/cart" className="no-underline">
              <Button
                variant="ghost"
                size="icon"
                className="relative rounded-full"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs"
                  >
                    {cartCount > 9 ? "9+" : cartCount}
                  </Badge>
                )}
              </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 space-y-1">
            <a
              href="/products"
              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-all no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              All Products
            </a>
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <a
                  key={category.name}
                  href={category.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-all no-underline flex items-center gap-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <div>
                    <div>{category.name}</div>
                    <div className="text-xs text-gray-500">
                      {category.description}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
