import { styles } from "@/constants/styles";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

export default function Sell() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    if (!title || !price) {
      Alert.alert("Lengkapi data", "Nama barang dan harga wajib diisi.");
      return;
    }
    Alert.alert("Berhasil", `${title} berhasil diposting!`, [
      
      { text: "OK", onPress: () => router.push("/") },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Nama barang</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Contoh: Kalkulus Jilid 2" />

      <Text style={styles.sectionTitle}>Harga (Rp)</Text>
      <TextInput style={styles.input} value={price} onChangeText={setPrice} keyboardType="numeric" placeholder="50000" />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Posting</Text>
      </Pressable>
      <Pressable style={styles.outlineButton} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Batal</Text>
      </Pressable>
    </View>
  );
}