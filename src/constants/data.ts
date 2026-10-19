import { Category, Product } from "./types";

export const products: Product[] = [
  { id: "1", title: "Kalkulus Jilid 1", price: 45000, seller: "Rafi", category: "Buku", condition: "Baik", faculty: "Teknik" },
  { id: "2", title: "Kipas Angin Mini", price: 35000, seller: "Rivan", category: "Perabot Kos", condition: "Seperti baru" },
  { id: "3", title: "Jaket Almamater", price: 90000, seller: "Farhan", category: "Fashion", condition: "Baik", faculty: "FEB" },
  { id: "4", title: "Mouse Wireless", price: 60000, seller: "Fajar", category: "Elektronik", condition: "Layak pakai", faculty: "Teknik" },
];

export const categories: Category[] = ["Buku", "Elektronik", "Fashion", "Perabot Kos", "Alat Sholat"];

export const formatPrice = (price: number) => "Rp " + price;