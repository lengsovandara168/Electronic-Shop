import { useState } from 'react';
import { ShoppingCart, Star, Package, Truck } from 'lucide-react';
import { CartStore } from './CartStore';

interface Product {
  id: string;
  name: string;
  category: "phones" | "computers" | "accessories";
  brand: string;
  price: number;
  currency: string;
  image: string;
  rating: number;
  stock: number;
  specs: Record<string, string>;
  description: string;
}

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    CartStore.add(product.id, quantity);
    
    // Dispatch custom event to update cart counter in navigation
    const cartItems = CartStore.load();
    const totalCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { count: totalCount } }));
    
    // Show visual feedback
    setIsAdded(true);
    
    // Remove visual feedback after 3 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-5 h-5 ${
            i <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-6">
      {/* Product Image */}
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full rounded-lg border object-cover shadow-lg"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop&crop=center";
          }}
        />
        {product.stock < 10 && product.stock > 0 && (
          <div className="absolute top-4 left-4 bg-orange-500 text-white text-sm px-3 py-1 rounded-full">
            Only {product.stock} left
          </div>
        )}
        {product.stock === 0 && (
          <div className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
            Out of Stock
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.brand}</p>
          
          {/* Rating */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex">
              {renderStars(product.rating)}
            </div>
            <span className="text-gray-600">({product.rating} out of 5)</span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <span className="text-4xl font-bold text-blue-600">${product.price}</span>
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>

        {/* Quantity Selector and Add to Cart */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
              Quantity:
            </label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={product.stock === 0}
            >
              {Array.from({ length: Math.min(product.stock, 10) }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-200 ${
              product.stock === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : isAdded
                ? 'bg-green-600 text-white'
                : 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
            <span>
              {product.stock === 0 
                ? 'Out of Stock' 
                : isAdded 
                ? '✓ Added to Cart!' 
                : 'Add to Cart'
              }
            </span>
          </button>
        </div>

        {/* Product Features */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <div className="flex items-center space-x-3">
            <Package className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-700">Free shipping on orders over $50</span>
          </div>
          <div className="flex items-center space-x-3">
            <Truck className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-700">Fast delivery in 2-3 business days</span>
          </div>
        </div>

        {/* Specifications */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Specifications</h3>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            {Object.entries(product.specs).map(([key, value], index) => (
              <div
                key={key}
                className={`px-4 py-3 ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } border-b border-gray-200 last:border-b-0`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700 capitalize">{key}:</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}