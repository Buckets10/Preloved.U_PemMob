import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Preloved.U" }} />
      <Stack.Screen name="detail" options={{ title: "Detail Barang" }} />
      <Stack.Screen name="sell" options={{ title: "Jual Barang" }} />
    </Stack>
  );
}
