import { styles } from "@/constants/styles"; // external style
import { Category, Product } from "@/constants/types";
import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  FlatList,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

const products: Product[] = [
  {
    id: "1",
    title: "Kalkulus Jilid 1 (Purcell)",
    price: 45000,
    seller: "Rina",
    category: "Buku",
    condition: "Baik",
    faculty: "Teknik",
  },
  {
    id: "2",
    title: "Kipas Angin Mini",
    price: 35000,
    seller: "Dimas",
    category: "Perabot Kos",
    condition: "Seperti baru",
  },
  {
    id: "3",
    title: "Jaket Almamater UMM",
    price: 90000,
    seller: "Salsa",
    category: "Fashion",
    condition: "Baik",
    faculty: "FEB",
  },
  {
    id: "4",
    title: "Mouse Wireless Logitech",
    price: 60000,
    seller: "Fajar",
    category: "Elektronik",
    condition: "Layak pakai",
    faculty: "Teknik",
  },
  {
    id: "5",
    title: "Rak Buku Lipat",
    price: 75000,
    seller: "Nadia",
    category: "Perabot Kos",
    condition: "Baik",
  },
];

const categories: Category[] = ["Buku", "Elektronik", "Fashion", "Perabot Kos"];

const formatPrice = (price: number): string => {
  return "Rp " + price.toLocaleString("id-ID");
};

export default function Index() {
  const handleBuy = (item: Product) => {
    Alert.alert(
      "Tertarik?",
      `${item.title} dijual ${item.seller}. Hubungi penjual untuk COD di kampus.`,
    );
  };

  const renderProductCard = (item: Product) => {
    return (
      <View key={item.id} style={styles.card}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardPrice}>{formatPrice(item.price)}</Text>
        <Text style={styles.cardMeta}>
          {item.category} • {item.condition}
        </Text>
        <Text style={styles.cardMeta}>
          Dijual {item.seller}
          {/* Kondisi: faculty bersifat opsional */}
          {item.faculty ? ` (${item.faculty})` : ""}
        </Text>
        <Pressable style={styles.buyButton} onPress={() => handleBuy(item)}>
          <Text style={styles.buyButtonText}>Tanya penjual</Text>
        </Pressable>
      </View>
    );
  };

  let totalValue = 0;
  for (let i = 0; i < products.length; i++) {
    totalValue += products[i].price;
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Ionicons name="school" size={30} color="#FCA311" />
        <Text style={styles.brand}>Preloved.U</Text>
      </View>
      <Text style={styles.tagline}>
        Barang bekas mahasiswa, harga ramah kantong.
      </Text>

      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{products.length}</Text>
          <Text style={styles.statLabel}>Barang dijual</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{formatPrice(totalValue)}</Text>
          <Text style={styles.statLabel}>Total nilai</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Kategori</Text>

      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <View
            key={cat}
            // INLINE STYLE
            style={{
              backgroundColor: "#14213D",
              paddingHorizontal: 14,
              paddingVertical: 8,
              borderRadius: 20,
              marginRight: 8,
              marginBottom: 8,
            }}
          >
            <Text style={{ color: "white", fontSize: 13 }}>{cat}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Baru diunggah</Text>
      <FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#FCA311",
              borderRadius: 12,
              padding: 14,
              marginRight: 10,
              width: 150,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#14213D" }}>
              {item.title}
            </Text>
            <Text style={{ color: "#14213D", marginTop: 6 }}>
              {formatPrice(item.price)}
            </Text>
          </View>
        )}
      />

      <Text style={styles.sectionTitle}>Semua barang</Text>
      {products.map((item) => renderProductCard(item))}
    </ScrollView>
  );
}
