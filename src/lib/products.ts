import data from "@/data/products.json";

// product type
export type Product = {
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
};

// Ensure all specs values are strings (replace undefined with empty string)
const products: Product[] = (data as any[]).map((item) => ({
  ...item,
  specs: Object.fromEntries(
    Object.entries(item.specs ?? {}).map(([k, v]) => [k, v ?? ""])
  ),
})) as Product[];

export function getAllProducts(): Product[] {
  return products;
}

export function getByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}

export function getById(id: string): Product | null {
  return products.find((p) => p.id === id) ?? null;
}

export function searchProducts(q: string): Product[] {
  const query = q.toLowerCase();
  return products.filter((p) =>
    [p.name, p.brand, p.category, ...Object.values(p.specs)]
      .join(" ")
      .toLowerCase()
      .includes(query)
  );
}
