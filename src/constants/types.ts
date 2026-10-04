export type Category = "Buku" | "Elektronik" | "Fashion" | "Perabot Kos";

export type Condition = "Seperti baru" | "Baik" | "Layak pakai";

export interface Product {
  readonly id: string;
  title: string;
  price: number;
  seller: string;
  category: Category;
  condition: Condition;
  faculty?: string; 
}