export type Category = "Buku" | "Elektronik" | "Fashion" | "Perabot Kos" | "Alat Sholat";

export interface Product {
  readonly id: string;
  title: string;
  price: number;
  seller: string;
  category: Category;
  condition: string;
  faculty?: string;
}

// Bentuk data mentah dari DummyJSON (https://dummyjson.com/products)
export interface ApiProduct {
  id: number;
  title: string;
  price: number; // dalam USD
  category: string;
  brand?: string;
  rating: number;
}

export interface ProductsResponse {
  products: ApiProduct[];
  total: number;
  skip: number;
  limit: number;
}