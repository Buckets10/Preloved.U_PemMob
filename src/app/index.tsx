import { Alert, FlatList, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "@/constants/styles"; // external style
import { Category, Product } from "@/constants/types";

const products: Product[] = [
  { id: "1", title: "Kalkulus Jilid 1", price: 45000, seller: "Rafi", category: "Buku", condition: "Baik", faculty: "Teknik" },
  { id: "2", title: "Kipas Angin Mini", price: 35000, seller: "Rivan", category: "Perabot Kos", condition: "Seperti baru" },
  { id: "3", title: "Jaket Almamater", price: 90000, seller: "Farhan", category: "Fashion", condition: "Baik", faculty: "FEB" },
  { id: "4", title: "Mouse Wireless", price: 60000, seller: "Fajar", category: "Elektronik", condition: "Layak pakai", faculty: "Teknik" },
];

const categories: Category[] = ["Buku", "Elektronik", "Fashion", "Perabot Kos"];

// menambah "Rp" 
const formatPrice = (price: number) => {
  return "Rp " + price;
};

export default function Index() {
  // membungkus fungsi bawaan Alert
  const handleBuy = (item: Product) => {
    Alert.alert("Tertarik?", `${item.title} dijual oleh ${item.seller}`);
  };

  // membuat 1 kartu dari 1 barang
  const renderProductCard = (item: Product) => {
    return (
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardPrice}>{formatPrice(item.price)}</Text>
        <Text style={styles.cardInfo}>
          {item.category} - {item.condition}
        </Text>
        {/* TERNARY: kalau ada faculty tampilkan, kalau tidak tampilkan teks lain */}
        <Text style={styles.cardInfo}>
          Penjual: {item.seller} {item.faculty ? "(" + item.faculty + ")" : "(umum)"}
        </Text>
        <Pressable style={styles.button} onPress={() => handleBuy(item)}>
          <Text style={styles.buttonText}>Tanya penjual</Text>
        </Pressable>
      </View>
    );
  };

  // LOOP BIASA (for): dijalankan di luar return
  let totalValue = 0;
  for (let i = 0; i < products.length; i++) {
    totalValue = totalValue + products[i].price;
  }

  return (
    <View style={styles.container}>
      <Ionicons name="cart" size={40} color="#FCA311" />
      <Text style={styles.title}>Preloved.U</Text>
      <Text style={styles.subtitle}>Barang bekas mahasiswa, harga ramah kantong</Text>

      <View style={styles.statBox}>
        <Text style={styles.statValue}>{products.length} barang</Text>
        <Text style={styles.statLabel}>Total nilai: {formatPrice(totalValue)}</Text>
      </View>

      <Text style={styles.sectionTitle}>Kategori</Text>
      {/* LOOP map() + key + INLINE STYLE */}
      {categories.map((cat) => (
        <View
          key={cat}
          style={{
            backgroundColor: "#14213D",
            padding: 8,
            borderRadius: 10,
            marginBottom: 6,
          }}
        >
          <Text style={{ color: "white", fontSize: 13 }}>{cat}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Semua barang</Text>
      {/* FLATLIST: data, keyExtractor, renderItem */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderProductCard(item)}
      />
    </View>
  );
}