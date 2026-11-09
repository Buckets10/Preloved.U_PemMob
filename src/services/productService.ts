import { localProducts } from "@/constants/data";
import { ApiProduct, Category, Product, ProductsResponse } from "@/constants/types";

const BASE_URL = "https://dummyjson.com";

// Kategori API -> kategori Preloved.U
const categoryMap: Record<string, Category> = {
  smartphones: "Elektronik",
  laptops: "Elektronik",
  tablets: "Elektronik",
  "mobile-accessories": "Elektronik",
  "mens-shirts": "Fashion",
  "mens-shoes": "Fashion",
  "womens-dresses": "Fashion",
  "womens-bags": "Fashion",
  furniture: "Perabot Kos",
  "home-decoration": "Perabot Kos",
  "kitchen-accessories": "Perabot Kos",
};

const conditionFromRating = (rating: number) =>
  rating >= 4.5 ? "Seperti baru" : rating >= 3.5 ? "Baik" : "Layak pakai";

// Ubah data mentah API menjadi Product milik aplikasi
const toProduct = (p: ApiProduct): Product => ({
  id: "api-" + p.id, // prefix supaya tidak bentrok dengan id data lokal
  title: p.title,
  price: Math.round(p.price * 16000), // kurs kira-kira
  seller: p.brand ?? "Mahasiswa UMM",
  category: categoryMap[p.category],
  condition: conditionFromRating(p.rating),
});

// Versi Promise manual: new Promise + resolve() + reject() + .then()
export function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/products?limit=100&select=title,price,category,brand,rating`)
      .then((response) => {
        if (!response.ok) throw new Error("Gagal mengambil data barang");
        return response.json();
      })
      .then((data: ProductsResponse) => {
        const apiItems = data.products
          .filter((p) => p.category in categoryMap)
          .map(toProduct);
        resolve([...localProducts, ...apiItems]);
      })
      .catch((err: Error) => reject(err.message));
  });
}

// Versi async/await: async function buatan sendiri + fetch bawaan
export async function fetchProductById(id: string): Promise<Product | undefined> {
  // Barang lokal tidak perlu fetch
  if (!id.startsWith("api-")) {
    return localProducts.find((p) => p.id === id);
  }

  const response = await fetch(`${BASE_URL}/products/${id.replace("api-", "")}`);
  if (!response.ok) return undefined;

  const data: ApiProduct = await response.json();
  return categoryMap[data.category] ? toProduct(data) : undefined;
}