import { Category, Product } from "./types";

// Data lokal (untuk kategori yang tidak ada di API: Buku & Alat Sholat)
export const localProducts: Product[] = [
  { id: "1", title: "Kalkulus Jilid 1", price: 45000, seller: "Rafi", category: "Buku", condition: "Baik", faculty: "Teknik" },
  { id: "2", title: "Kipas Angin Mini", price: 35000, seller: "Rivan", category: "Perabot Kos", condition: "Seperti baru" },
  { id: "3", title: "Jaket Almamater", price: 90000, seller: "Farhan", category: "Fashion", condition: "Baik", faculty: "FEB" },
  { id: "4", title: "Mouse Wireless", price: 60000, seller: "Fajar", category: "Elektronik", condition: "Layak pakai", faculty: "Teknik" },
  { id: "5", title: "Sajadah Travel", price: 25000, seller: "Naufal", category: "Alat Sholat", condition: "Seperti baru" },
  { id: "6", title: "Mukena Katun", price: 55000, seller: "Aisyah", category: "Alat Sholat", condition: "Baik", faculty: "FAI" },
];

export const categories: Category[] = ["Buku", "Elektronik", "Fashion", "Perabot Kos", "Alat Sholat"];

export const formatPrice = (price: number) => "Rp " + price.toLocaleString("id-ID");