// kategory hanya boleh salah satu dari 4 ini
export type Category = "Buku" | "Elektronik" | "Fashion" | "Perabot Kos";

// bentuk setiap barang
export interface Product {
  readonly id: string; // readonly = tidak bisa diubah setelah dibuat
  title: string;
  price: number;
  seller: string;
  category: Category;
  condition: string;
  faculty?: string; // tanda ? = opsional
}