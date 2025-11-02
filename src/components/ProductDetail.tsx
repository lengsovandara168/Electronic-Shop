import React, { useMemo, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Star, Package, Truck, ShoppingCart } from "lucide-react";
import { CartStore } from "./CartStore";

interface Product {
  id: string;
  name: string;
  category: "phones" | "computers" | "accessories";
  brand: string;
  price: number;
  currency: string;
  image: string;
  images?: string[];
  rating: number;
  stock: number;
  specs: Record<string, string>;
  description: string;
}

interface ProductDetailProps {
  product?: Product; // optional: will fetch from DummyJSON if not provided
}

const queryClient = new QueryClient();

function parseNumericIdFromSlug(slug: string): number | null {
  const parts = slug.split("-");
  const last = parts[parts.length - 1];
  const n = Number(last);
  return Number.isFinite(n) ? n : null;
}

function useSmartphoneDetail(slugId: string | null, initial?: Product) {
  const numericId = useMemo(
    () => (slugId ? parseNumericIdFromSlug(slugId) : null),
    [slugId]
  );
  return useQuery({
    queryKey: ["product", numericId],
    enabled: !!numericId && !initial,
    queryFn: async (): Promise<Product> => {
      const res = await fetch(`https://dummyjson.com/products/${numericId}`);
      if (!res.ok) throw new Error(`Failed to fetch product (${res.status})`);
      const it = await res.json();
      const name: string = it.title ?? "Unnamed";
      const brand: string = it.brand ?? "Generic";
      const normalize = (s: string) =>
        String(s)
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "");
      const slug = `phn-${normalize(name)}-${normalize(brand)}-${it.id}`;
      const image =
        (Array.isArray(it.images) && it.images.length
          ? it.images[0]
          : it.thumbnail) || "/favicon.svg";
      const images: string[] =
        Array.isArray(it.images) && it.images.length ? it.images : [image];
      const specs: Record<string, string> = {};
      if (it.weight) specs.weight = String(it.weight);
      if (it.dimensions) {
        const d = it.dimensions;
        specs.dimensions = [d.width, d.height, d.depth]
          .filter(Boolean)
          .join("x");
      }
      specs.sku = String(it.sku ?? it.id);
      const catMap: Record<string, Product["category"]> = {
        smartphones: "phones",
        tablets: "phones",
        smartwatches: "phones",
        laptops: "computers",
        "desktop-pcs": "computers",
        monitors: "computers",
        "pc-accessories": "computers",
        "mobile-accessories": "accessories",
        audio: "accessories",
        cameras: "accessories",
      };
      const rawCat = String(it.category);
      const mappedCategory =
        catMap[rawCat] ??
        (/laptop|pc|desktop|monitor|computer|ssd|hdd|keyboard|mouse/i.test(
          rawCat
        )
          ? "computers"
          : /phone|smart|tablet|watch/i.test(rawCat)
          ? "phones"
          : "accessories");
      return {
        id: slugId || slug,
        name,
        category: mappedCategory,
        brand,
        price: Number(it.price ?? 0),
        currency: "USD",
        image,
        images,
        rating: Number(it.rating ?? 4),
        stock: Number(it.stock ?? 10),
        specs,
        description: String(it.description ?? ""),
      } as Product;
    },
    staleTime: 1000 * 60 * 10,
  });
}

function ProductDetailInner({ product: initialProduct }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const slug = useMemo(
    () =>
      typeof window !== "undefined"
        ? window.location.pathname.replace(/^\/+|\/+$/g, "")
        : null,
    []
  );
  const query = useSmartphoneDetail(slug, initialProduct);
  const product = initialProduct ?? query.data;

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        CartStore.addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          brand: product.brand,
        });
      }
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }
  };

  // Image gallery state
  const gallery = (
    product?.images && product.images.length
      ? product.images
      : product?.image
      ? [product.image]
      : []
  ) as string[];
  const [activeIdx, setActiveIdx] = useState(0);
  const mainImage = gallery[activeIdx] ?? product?.image ?? "/favicon.svg";

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-5 h-5 ${
            i <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <>
      {!product && query.isLoading && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-purple-50/20 to-blue-50/20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Loading product details...</p>
          </div>
        </div>
      )}
      {(query.isError || !product) && !query.isLoading && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-purple-50/20 to-blue-50/20">
          <div className="text-center max-w-md p-8 bg-white rounded-2xl shadow-xl">
            <p className="text-red-600 text-lg font-semibold">
              {String((query.error as any)?.message || "Product not found")}
            </p>
            <a
              href="/products"
              className="mt-6 inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              Back to Products
            </a>
          </div>
        </div>
      )}
      {product && (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/20 to-blue-50/20 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6">
            {/* Product Images */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={mainImage}
                  alt={product.name}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full aspect-square object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop&crop=center";
                  }}
                />
                {gallery.length > 1 && (
                  <>
                    <button
                      aria-label="Previous image"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all hover:scale-110"
                      onClick={() =>
                        setActiveIdx(
                          (i) => (i - 1 + gallery.length) % gallery.length
                        )
                      }
                    >
                      <span className="text-2xl text-gray-700">‹</span>
                    </button>
                    <button
                      aria-label="Next image"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all hover:scale-110"
                      onClick={() =>
                        setActiveIdx((i) => (i + 1) % gallery.length)
                      }
                    >
                      <span className="text-2xl text-gray-700">›</span>
                    </button>
                  </>
                )}

                {product.stock < 10 && product.stock > 0 && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    Only {product.stock} left!
                  </div>
                )}
                {product.stock === 0 && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    Out of Stock
                  </div>
                )}
              </div>
              {gallery.length > 1 && (
                <div className="mt-4 grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 gap-3">
                  {gallery.map((src, idx) => (
                    <button
                      key={src + idx}
                      aria-label={`View image ${idx + 1}`}
                      className={`border-2 rounded-xl overflow-hidden aspect-square transition-all duration-200 ${
                        idx === activeIdx
                          ? "ring-4 ring-purple-500 border-purple-500 scale-110"
                          : "border-gray-200 hover:border-purple-300 hover:scale-105"
                      }`}
                      onClick={() => setActiveIdx(idx)}
                    >
                      <img
                        src={src}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop&crop=center";
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600 mb-6 font-medium">
                  {product.brand}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-gray-600 font-medium">
                    ({product.rating} out of 5)
                  </span>
                </div>

                {/* Price */}
                <div className="mb-8 pb-6 border-b-2 border-gray-100">
                  <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    ${product.price}
                  </span>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Quantity Selector and Add to Cart */}
                <div className="space-y-5">
                  <div className="flex items-center space-x-4">
                    <label
                      htmlFor="quantity"
                      className="text-base font-semibold text-gray-700"
                    >
                      Quantity:
                    </label>
                    <select
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="border-2 border-gray-300 rounded-lg px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white font-medium"
                      disabled={!product || product.stock === 0}
                    >
                      {product &&
                        Array.from(
                          { length: Math.min(product.stock, 10) },
                          (_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          )
                        )}
                    </select>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={!product || product.stock === 0 || isAdded}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-white text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl ${
                      isAdded
                        ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                        : product && product.stock > 0
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-105"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <ShoppingCart className="w-6 h-6" />
                    <span>
                      {isAdded
                        ? "Added to Cart!"
                        : product && product.stock === 0
                        ? "Out of Stock"
                        : "Add to Cart"}
                    </span>
                  </button>
                </div>

                {/* Product Features */}
                <div className="mt-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <Package className="w-6 h-6 text-purple-600" />
                    </div>
                    <span className="text-base text-gray-700 font-medium">
                      Free shipping on orders over $50
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <Truck className="w-6 h-6 text-purple-600" />
                    </div>
                    <span className="text-base text-gray-700 font-medium">
                      Fast delivery in 2-3 business days
                    </span>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Specifications
                </h3>
                <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl overflow-hidden">
                  {Object.entries(product.specs).map(([key, value], index) => (
                    <div
                      key={key}
                      className={`px-6 py-4 ${
                        index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                      } border-b border-gray-200 last:border-b-0`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700 capitalize">
                          {key}:
                        </span>
                        <span className="text-gray-900 font-medium">
                          {value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function ProductDetail(props: ProductDetailProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductDetailInner {...props} />
    </QueryClientProvider>
  );
}
