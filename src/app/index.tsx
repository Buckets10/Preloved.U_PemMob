import { categories, formatPrice } from "@/constants/data";
import { styles } from "@/constants/styles";
import { Category, Product } from "@/constants/types";
import { fetchProducts } from "@/services/productService";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, FlatList, Pressable, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | "Semua">("Semua");
  const [filtered, setFiltered] = useState<Product[]>([]);

  // Ambil data dari API saat halaman pertama kali dibuka
  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false));
  }, []);

  // Filter ulang kalau kategori atau data berubah
  useEffect(() => {
    if (selectedCategory === "Semua") {
      setFiltered(products);
    } else {
      setFiltered(products.filter((p) => p.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  const handleBuy = (item: Product) => {
    Alert.alert("Tertarik?", `${item.title} dijual oleh ${item.seller}`);
  };

  let totalValue = 0;
  for (let i = 0; i < filtered.length; i++) {
    totalValue = totalValue + filtered[i].price;
  }

  const renderProductCard = (item: Product) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardPrice}>{formatPrice(item.price)}</Text>
      <Text style={styles.cardInfo}>
        {item.category} - {item.condition}
      </Text>
      <Text style={styles.cardInfo}>
        Penjual: {item.seller} {item.faculty ? "(" + item.faculty + ")" : "(umum)"}
      </Text>
      <Pressable
        style={styles.button}
        onPress={() =>
          router.push({ pathname: "/detail", params: { id: item.id } })
        }
      >
        <Text style={styles.buttonText}>Lihat detail</Text>
      </Pressable>
      <Pressable style={styles.outlineButton} onPress={() => handleBuy(item)}>
        <Text style={styles.buttonText}>Tanya penjual</Text>
      </Pressable>
    </View>
  );

  const header = (
    <View>
      <Ionicons name="cart" size={40} color="#FCA311" />
      <Text style={styles.title}>Preloved.U</Text>
      <Text style={styles.subtitle}>Barang bekas mahasiswa, harga ramah kantong</Text>

      <View style={styles.statBox}>
        <Text style={styles.statValue}>{filtered.length} barang</Text>
        <Text style={styles.statLabel}>Total nilai: {formatPrice(totalValue)}</Text>
      </View>

      <Pressable style={styles.button} onPress={() => router.push("/sell")}>
        <Text style={styles.buttonText}>+ Jual barang</Text>
      </Pressable>

      <Text style={styles.sectionTitle}>Kategori</Text>
      <View style={styles.chipRow}>
        {["Semua", ...categories].map((cat) => (
          <Pressable
            key={cat}
            style={[styles.chip, selectedCategory === cat && styles.chipActive]}
            onPress={() => setSelectedCategory(cat as Category | "Semua")}
          >
            <Text style={[styles.chipText, selectedCategory === cat && styles.chipTextActive]}>
              {cat}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Semua barang</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#FCA311" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Gagal memuat</Text>
        <Text style={styles.cardInfo}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      data={filtered}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderProductCard(item)}
      ListHeaderComponent={header}
    />
  );
}