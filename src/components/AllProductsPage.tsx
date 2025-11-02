import { useMemo, useState, useEffect, useRef } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Search, X } from "lucide-react";
import ProductGrid from "@/components/ProductGrid.tsx";
import gsap from "gsap";

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

function AllProductsInner() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);

  // Animate page entrance
  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
    if (searchBarRef.current) {
      gsap.fromTo(
        searchBarRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, delay: 0.3, ease: "back.out(1.7)" }
      );
    }
  }, []);

  const productsQuery = useQuery({
    queryKey: ["products", "all"],
    queryFn: async (): Promise<Product[]> => {
      const res = await fetch("https://dummyjson.com/products?limit=500");
      if (!res.ok) throw new Error("Failed to load products");
      const json = await res.json();
      const items: any[] = Array.isArray(json.products) ? json.products : [];
      const normalize = (s: string) =>
        s
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "");
      const mapHeuristic = (cat: string): Product["category"] => {
        const c = String(cat).toLowerCase();
        if (
          /(laptop|pc|desktop|monitor|computer|ssd|hdd|keyboard|mouse)/.test(c)
        )
          return "computers";
        if (/(phone|smart|tablet|watch)/.test(c)) return "phones";
        return "accessories";
      };

      // Allow only smartphones & electronics categories
      const allowedCategories = new Set([
        "smartphones",
        "tablets",
        "smartwatches",
        "laptops",
        "desktop-pcs",
        "monitors",
        "pc-accessories",
        "mobile-accessories",
        "audio",
        "cameras",
      ]);

      // Keep only items whose raw category is clearly electronics
      const filteredItems = items.filter((it) => {
        const cat = String(it.category ?? "").toLowerCase();
        return allowedCategories.has(cat);
      });

      return filteredItems.map((it) => {
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
          category: mapHeuristic(String(it.category ?? "")),
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
    },
    staleTime: 1000 * 60 * 10,
  });

  const filtered = useMemo(() => {
    const data = productsQuery.data ?? [];
    if (!searchQuery.trim()) return data;
    const q = searchQuery.toLowerCase();
    return data.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        Object.values(p.specs).some((s) => s.toLowerCase().includes(q))
    );
  }, [productsQuery.data, searchQuery]);

  const PAGE_SIZE = 24;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const loadMore = () =>
    setVisibleCount((c) => Math.min(c + PAGE_SIZE, filtered.length));
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
  }, [sentinelRef.current, filtered.length]);

  const visible = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/20 to-blue-50/20">
      <div className="container mx-auto px-4 py-12">
        <div ref={titleRef} className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Discover Our Collection
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Browse through our curated selection of smartphones, computers, and accessories
          </p>
        </div>

        <div ref={searchBarRef} className="mb-10 max-w-3xl mx-auto">
          <div
            className={`relative w-full bg-white border-2 ${
              isSearchFocused
                ? "border-purple-500 shadow-2xl shadow-purple-500/20"
                : "border-gray-200 hover:border-purple-300"
            } rounded-2xl transition-all duration-300`}
          >
            <div className="absolute left-5 top-1/2 -translate-y-1/2">
              <Search className={`w-6 h-6 ${isSearchFocused ? 'text-purple-500' : 'text-gray-400'} transition-colors`} />
            </div>
            <input
              type="text"
              placeholder="Search for products, brands, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full bg-transparent text-gray-900 placeholder-gray-500 text-lg pl-14 pr-14 py-5 rounded-2xl focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white hover:bg-red-500 p-2 rounded-full transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-center mt-4 text-gray-600">
              Found <span className="font-bold text-purple-600">{filtered.length}</span> result{filtered.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {productsQuery.isLoading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600 mb-4"></div>
            <p className="text-gray-600 text-lg">Loading amazing products...</p>
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

        {productsQuery.data && <ProductGrid items={visible} />}

        {visible.length < filtered.length && (
          <div className="flex flex-col items-center gap-4 mt-12">
            <button
              onClick={loadMore}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-bold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Load More Products ({Math.min(filtered.length - visible.length, PAGE_SIZE)}{" "}
              remaining)
            </button>
            <div ref={sentinelRef} className="h-1 w-full" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function AllProductsPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <AllProductsInner />
    </QueryClientProvider>
  );
}
