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