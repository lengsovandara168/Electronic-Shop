import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProductGrid from '@/components/ProductGrid.tsx';

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

interface CategoryPageProps {
  category: string;
  allProducts: Product[];
}

export default function CategoryPage({ category, allProducts }: CategoryPageProps) {
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

  const setQuickSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 capitalize">{category}</h1>
        <p className="text-gray-600">
          {searchQuery 
            ? `Search results for "${searchQuery}" in ${category}`
            : `Discover the latest ${category} and find the perfect product for you`
          }
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="max-w-2xl mx-auto">
          <div className={cn(
            "relative w-full",
            "bg-white border-2",
            isSearchFocused 
              ? "border-purple-500 shadow-lg shadow-purple-500/25" 
              : "border-gray-200 hover:border-gray-300",
            "rounded-2xl transition-all duration-300"
          )}>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            
            <input
              type="text"
              placeholder={`Search products in ${category}...`}
              value={searchQuery}
              onChange={handleSearchInputChange}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className={cn(
                "w-full bg-transparent text-gray-900 placeholder-gray-500",
                "pl-12 pr-12 py-4 rounded-2xl",
                "focus:outline-none focus:ring-0",
                "text-base md:text-lg"
              )}
            />
            
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className={cn(
                  "absolute right-4 top-1/2 transform -translate-y-1/2",
                  "text-gray-400 hover:text-gray-600 transition-colors",
                  "p-1 rounded-full hover:bg-gray-100"
                )}
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          
          {/* Popular searches */}
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-gray-500">Popular searches:</span>
            {category === 'phones' && (
              <>
                <button 
                  onClick={() => setQuickSearch('iPhone')}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                >
                  iPhone
                </button>
                <button 
                  onClick={() => setQuickSearch('Samsung')}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                >
                  Samsung
                </button>
                <button 
                  onClick={() => setQuickSearch('Android')}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                >
                  Android
                </button>
              </>
            )}
            {category === 'computers' && (
              <>
                <button 
                  onClick={() => setQuickSearch('laptop')}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                >
                  Laptop
                </button>
                <button 
                  onClick={() => setQuickSearch('gaming')}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                >
                  Gaming
                </button>
                <button 
                  onClick={() => setQuickSearch('MacBook')}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                >
                  MacBook
                </button>
              </>
            )}
            {category === 'accessories' && (
              <>
                <button 
                  onClick={() => setQuickSearch('wireless')}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                >
                  Wireless
                </button>
                <button 
                  onClick={() => setQuickSearch('headphones')}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                >
                  Headphones
                </button>
                <button 
                  onClick={() => setQuickSearch('case')}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                >
                  Case
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Results Section */}
      {filteredProducts.length > 0 ? (
        <>
          <div className="mb-6">
            <p className="text-gray-600 text-center">
              {searchQuery 
                ? `Found ${filteredProducts.length} ${filteredProducts.length === 1 ? 'product' : 'products'} matching "${searchQuery}"`
                : `Showing ${filteredProducts.length} ${filteredProducts.length === 1 ? 'product' : 'products'}`
              }
            </p>
          </div>
          <ProductGrid items={filteredProducts} />
        </>
      ) : searchQuery ? (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <svg className="w-24 h-24 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">
              No {category} found matching "{searchQuery}". Try different keywords or browse all products.
            </p>
            <button 
              onClick={() => setSearchQuery('')}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Show All {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-600">No products available in this category.</p>
        </div>
      )}
    </div>
  );
}