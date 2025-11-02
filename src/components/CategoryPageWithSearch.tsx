import { useState, useMemo, useEffect, useRef } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ProductGrid from "@/components/ProductGrid.tsx";

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

const queryClient = new QueryClient();

interface CategoryPageProps {
  category: string;
  allProducts?: Product[];
}

function CategoryPageInner({ category, allProducts }: CategoryPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const catToEndpoints: Record<
    "phones" | "computers" | "accessories",
    string[]
  > = {
    phones: ["smartphones", "tablets", "smartwatches"],
    computers: ["laptops", "desktop-pcs", "monitors", "pc-accessories"],
    accessories: ["mobile-accessories", "audio", "cameras"],
  } as const;

  const endpoints = (catToEndpoints as any)[category] ?? [];

  const productsQuery = useQuery({
    queryKey: ["products", "category", ...endpoints],
    enabled: endpoints.length > 0,
    queryFn: async (): Promise<Product[]> => {
      const normalize = (s: string) =>
        s
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "");
      const results = await Promise.all(
        endpoints.map(async (ep: string) => {
          const res = await fetch(
            `https://dummyjson.com/products/category/${ep}?limit=100`
          );
          if (!res.ok) return [] as Product[];
          const json = await res.json();
          const items = Array.isArray(json.products) ? json.products : [];
          return items.map((it: any) => {
            const name = String(it.title ?? "Unnamed");
            const brand = String(it.brand ?? "Generic");
            const slug = `phn-${normalize(name)}-${normalize(brand)}-${it.id}`;
            const image =
              (Array.isArray(it.images) && it.images.length
                ? it.images[0]
                : it.thumbnail) || "/favicon.svg";
            const specs: Record<string, string> = {};
            if (it.weight) specs.weight = String(it.weight);
            if (it.dimensions) {
              const d = it.dimensions;
              specs.dimensions = [d.width, d.height, d.depth]
                .filter(Boolean)
                .join("x");
            }
            specs.sku = String(it.sku ?? it.id);
            return {
              id: slug,
              name,
              category: category as Product["category"],
              brand,
              price: Number(it.price ?? 0),
              currency: "USD",
              image,
              rating: Number(it.rating ?? 4),
              stock: Number(it.stock ?? 10),
              specs,
              description: String(it.description ?? ""),
            } as Product;
          });
        })
      );
      const flat = results.flat();
      // Dedupe by id across multiple endpoints
      const unique = Array.from(new Map(flat.map((p) => [p.id, p])).values());
      return unique;
    },
    staleTime: 1000 * 60 * 10,
  });

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    const source = productsQuery.data ?? [];
    if (!searchQuery.trim()) {
      return source;
    }
    const query = searchQuery.toLowerCase();
    return source.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        Object.values(product.specs).some((spec) =>
          spec.toLowerCase().includes(query)
        )
    );
  }, [productsQuery.data, searchQuery]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const setQuickSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Client-side pagination / infinite scroll
  const PAGE_SIZE = 24;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const loadMore = () =>
    setVisibleCount((c) => Math.min(c + PAGE_SIZE, filteredProducts.length));
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [searchQuery, productsQuery.data]);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!sentinelRef.current) return;
    const el = sentinelRef.current;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMore();
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentinelRef.current, filteredProducts.length]);
  const visibleProducts = useMemo(
    () => filteredProducts.slice(0, visibleCount),
    [filteredProducts, visibleCount]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/20 to-blue-50/20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 capitalize">
            {category}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {searchQuery
              ? `Search results for "${searchQuery}" in ${category}`
              : `Discover the latest ${category} and find the perfect product for you`}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-10">
          <div className="max-w-3xl mx-auto">
            <div
              className={cn(
                "relative w-full",
                "bg-white border-2",
                isSearchFocused
                  ? "border-purple-500 shadow-2xl shadow-purple-500/20"
                  : "border-gray-200 hover:border-purple-300",
                "rounded-2xl transition-all duration-300"
              )}
            >
              <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
                <Search className={`w-6 h-6 ${isSearchFocused ? 'text-purple-500' : 'text-gray-400'} transition-colors`} />
              </div>

              <input
                type="text"
                placeholder={`Search for ${category}...`}
                value={searchQuery}
                onChange={handleSearchInputChange}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={cn(
                  "w-full bg-transparent text-gray-900 placeholder-gray-500",
                  "pl-14 pr-14 py-5 rounded-2xl",
                  "focus:outline-none focus:ring-0",
                  "text-lg"
                )}
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className={cn(
                    "absolute right-5 top-1/2 transform -translate-y-1/2",
                    "text-gray-400 hover:text-white hover:bg-red-500 transition-all duration-200",
                    "p-2 rounded-full"
                  )}
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Popular searches */}
            <div className="mt-5 flex flex-wrap gap-2 justify-center items-center">
              <span className="text-sm text-gray-600 font-medium">Popular:</span>
              {category === "phones" && (
                <>
                  <button
                    onClick={() => setQuickSearch("iPhone")}
                    className="px-4 py-2 bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white border border-gray-200 hover:border-transparent rounded-full text-sm font-medium text-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    iPhone
                  </button>
                  <button
                    onClick={() => setQuickSearch("Samsung")}
                    className="px-4 py-2 bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white border border-gray-200 hover:border-transparent rounded-full text-sm font-medium text-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Samsung
                  </button>
                  <button
                    onClick={() => setQuickSearch("Android")}
                    className="px-4 py-2 bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white border border-gray-200 hover:border-transparent rounded-full text-sm font-medium text-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Android
                  </button>
                </>
              )}
              {category === "computers" && (
                <>
                  <button
                    onClick={() => setQuickSearch("laptop")}
                    className="px-4 py-2 bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white border border-gray-200 hover:border-transparent rounded-full text-sm font-medium text-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Laptop
                  </button>
                  <button
                    onClick={() => setQuickSearch("gaming")}
                    className="px-4 py-2 bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white border border-gray-200 hover:border-transparent rounded-full text-sm font-medium text-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Gaming
                  </button>
                  <button
                    onClick={() => setQuickSearch("MacBook")}
                    className="px-4 py-2 bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white border border-gray-200 hover:border-transparent rounded-full text-sm font-medium text-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    MacBook
                  </button>
                </>
              )}
              {category === "accessories" && (
                <>
                  <button
                    onClick={() => setQuickSearch("wireless")}
                    className="px-4 py-2 bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white border border-gray-200 hover:border-transparent rounded-full text-sm font-medium text-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Wireless
                  </button>
                  <button
                    onClick={() => setQuickSearch("headphones")}
                    className="px-4 py-2 bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white border border-gray-200 hover:border-transparent rounded-full text-sm font-medium text-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Headphones
                  </button>
                  <button
                    onClick={() => setQuickSearch("case")}
                    className="px-4 py-2 bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white border border-gray-200 hover:border-transparent rounded-full text-sm font-medium text-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Case
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

      {/* Results Section */}
      {productsQuery.isLoading && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600 mb-4"></div>
          <p className="text-gray-600 text-lg">Loading {category}...</p>
        </div>
      )}
      {productsQuery.isError && (
        <div className="text-center py-20">
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-red-600 text-lg font-semibold">
              {String(
                (productsQuery.error as any)?.message || "Failed to load products"
              )}
            </p>
          </div>
        </div>
      )}
      {filteredProducts.length > 0 ? (
        <>
          {searchQuery && (
            <div className="mb-8 text-center">
              <p className="text-gray-600 text-lg">
                Found <span className="font-bold text-purple-600">{filteredProducts.length}</span> {filteredProducts.length === 1 ? "product" : "products"} matching "{searchQuery}"
              </p>
            </div>
          )}
          <ProductGrid items={visibleProducts} />
          {visibleProducts.length < filteredProducts.length && (
            <div className="flex flex-col items-center gap-4 mt-12">
              <button
                onClick={loadMore}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-bold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Load More ({Math.min(filteredProducts.length - visibleProducts.length, PAGE_SIZE)} remaining)
              </button>
              <div ref={sentinelRef} className="h-1 w-full" />
            </div>
          )}
        </>
      ) : searchQuery ? (
        <div className="text-center py-20">
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-10">
            <svg
              className="w-28 h-28 text-gray-300 mx-auto mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              No products found
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              No {category} found matching "<span className="font-semibold">{searchQuery}</span>". Try different keywords.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Show All {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md mx-auto">
            <p className="text-gray-600 text-lg">No products available in this category.</p>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default function CategoryPage(props: CategoryPageProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CategoryPageInner {...props} />
    </QueryClientProvider>
  );
}
