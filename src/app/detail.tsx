import { formatPrice, products } from "@/constants/data";
import { styles } from "@/constants/styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Detail() {
  const router = useRouter();

  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === id);
  const [isFavorite, setIsFavorite] = useState(false);

  
  const goBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/");
    }
  };

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Barang tidak ditemukan</Text>
        <Pressable style={styles.button} onPress={goBack}>
          <Text style={styles.buttonText}>Kembali</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.cardPrice}>{formatPrice(product.price)}</Text>
      <Text style={styles.cardInfo}>Kategori: {product.category}</Text>
      <Text style={styles.cardInfo}>Kondisi: {product.condition}</Text>
      <Text style={styles.cardInfo}>
        Penjual: {product.seller} {product.faculty ? "(" + product.faculty + ")" : "(umum)"}
      </Text>

      <Text style={styles.sectionTitle}>
        {isFavorite ? "❤️ Favorit" : "🤍 Bukan favorit"}
      </Text>
      <Pressable style={styles.button} onPress={() => setIsFavorite(!isFavorite)}>
        <Text style={styles.buttonText}>Toggle Favorit</Text>
      </Pressable>

      <Pressable style={styles.outlineButton} onPress={goBack}>
        <Text style={styles.buttonText}>Kembali</Text>
      </Pressable>
    </View>
  );
}