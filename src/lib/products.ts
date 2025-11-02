// Unified Product type used across the app
export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  rating: number;
  stock: number;
  category?: string;
};

let CACHE: Product[] | null = null;

async function fetchAll(): Promise<Product[]> {
  if (CACHE) return CACHE;
  const res = await fetch("https://dummyjson.com/products?limit=200");
  if (!res.ok) throw new Error("Failed to load products");
  const data = await res.json();
  const items = (data?.products ?? []) as any[];
  CACHE = items.map((p) => ({
    id: String(p.id),
    name: p.title as string,
    brand: (p.brand ?? "Unknown") as string,
    price: Number(p.price ?? 0),
    image: (p.thumbnail || p.images?.[0] || "") as string,
    rating: Number(p.rating ?? 0),
    stock: Number(p.stock ?? 0),
    category: p.category as string | undefined,
  }));
  return CACHE;
}

export async function getAllProducts(): Promise<Product[]> {
  return fetchAll();
}

export async function getByCategory(category: string): Promise<Product[]> {
  const list = await fetchAll();
  return list.filter((p) => p.category === category);
}

export async function getById(id: string): Promise<Product | null> {
  const list = await fetchAll();
  return list.find((p) => p.id === id) ?? null;
}

export async function searchProducts(q: string): Promise<Product[]> {
  const list = await fetchAll();
  const query = q.toLowerCase();
  return list.filter((p) =>
    [p.name, p.brand, p.category ?? ""].join(" ").toLowerCase().includes(query)
  );
}
