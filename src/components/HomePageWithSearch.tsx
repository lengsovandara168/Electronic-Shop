import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import ProductGrid from './ProductGrid';

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

interface HomePageWithSearchProps {
  allProducts: Product[];
}

export default function HomePageWithSearch({ allProducts }: HomePageWithSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return allProducts;
    }
    
    const query = searchQuery.toLowerCase();
    return allProducts.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      Object.values(product.specs).some(spec => 
        spec.toLowerCase().includes(query)
      )
    );
  }, [allProducts, searchQuery]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const handleQuickSearch = (term: string) => {
    setSearchQuery(term);
  };

  // Popular searches for homepage
  const popularSearches = [
    'iPhone', 'Samsung', 'MacBook', 'Gaming', 'Wireless', 'Camera',
    'Bluetooth', 'Laptop', 'Tablet', 'Headphones'
  ];

  // Featured categories
  const categoryStats = useMemo(() => {
    const stats = allProducts.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    return stats;
  }, [allProducts]);

  return (
    <div className="space-y-8">
      {/* Hero Section with Search */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-6 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to ElectroMart
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover the latest electronics at unbeatable prices
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div
              className={`relative flex items-center bg-white rounded-full overflow-hidden transition-all duration-300 ${
                isSearchFocused ? 'ring-4 ring-white/30 shadow-2xl' : 'shadow-xl'
              }`}
            >
              <Search className="absolute left-4 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for phones, computers, accessories..."
                value={searchQuery}
                onChange={handleSearchInputChange}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full pl-12 pr-12 py-4 text-gray-900 placeholder-gray-500 text-lg focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Search Results Info */}
      {searchQuery && (
        <div className="text-center py-4">
          <p className="text-lg text-gray-700">
            {filteredProducts.length > 0 ? (
              <>
                Found <span className="font-bold text-blue-600">{filteredProducts.length}</span> 
                {filteredProducts.length === 1 ? ' product' : ' products'} 
                {searchQuery && (
                  <> for "<span className="font-bold">{searchQuery}</span>"</>
                )}
              </>
            ) : (
              <>
                No products found for "<span className="font-bold">{searchQuery}</span>"
              </>
            )}
          </p>
        </div>
      )}

      {/* Popular Searches - Show when no search or no results */}
      {(!searchQuery || filteredProducts.length === 0) && (
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            {!searchQuery ? 'Popular Searches' : 'Try These Popular Searches'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((term) => (
              <button
                key={term}
                onClick={() => handleQuickSearch(term)}
                className="px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Category Overview - Show when no search */}
      {!searchQuery && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">📱 Phones</h3>
            <p className="opacity-90 mb-3">Latest smartphones and accessories</p>
            <p className="text-sm opacity-75">{categoryStats.phones || 0} products available</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">💻 Computers</h3>
            <p className="opacity-90 mb-3">Laptops, desktops, and components</p>
            <p className="text-sm opacity-75">{categoryStats.computers || 0} products available</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">🎧 Accessories</h3>
            <p className="opacity-90 mb-3">Headphones, cases, and more</p>
            <p className="text-sm opacity-75">{categoryStats.accessories || 0} products available</p>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div>
        {!searchQuery && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">All Products</h2>
            <p className="text-gray-600">Browse our complete collection of electronics</p>
          </div>
        )}
        
        <ProductGrid items={filteredProducts} />
        
        {filteredProducts.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any products matching "{searchQuery}". Try different keywords or browse our categories.
            </p>
            <button
              onClick={clearSearch}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}