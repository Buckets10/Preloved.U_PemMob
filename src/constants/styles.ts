import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F6FA", padding: 20, paddingTop: 50 },
  title: { fontSize: 28, fontWeight: "bold", color: "#14213D" },
  subtitle: { fontSize: 14, color: "#6B7280", marginBottom: 16 },
  statBox: { backgroundColor: "#14213D", borderRadius: 12, padding: 12, marginBottom: 8 },
  statValue: { fontSize: 18, fontWeight: "bold", color: "#FCA311" },
  statLabel: { fontSize: 12, color: "white" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#14213D", marginTop: 12, marginBottom: 8 },
  card: { backgroundColor: "white", borderRadius: 14, padding: 16, marginBottom: 12, elevation: 3, shadowColor: "#000" },
  cardTitle: { fontSize: 16, fontWeight: "bold", color: "#14213D" },
  cardPrice: { fontSize: 16, fontWeight: "bold", color: "#B45309", marginTop: 4 },
  cardInfo: { fontSize: 13, color: "#6B7280", marginTop: 2 },
  button: { backgroundColor: "#FCA311", borderRadius: 10, padding: 10, marginTop: 10, alignItems: "center" },
  buttonText: { fontWeight: "bold", color: "#14213D" },


  outlineButton: { borderWidth: 1, borderColor: "#FCA311", borderRadius: 10, padding: 10, marginTop: 10, alignItems: "center" },
  chipRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: { backgroundColor: "white", borderWidth: 1, borderColor: "#7e11a9", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 12 },
  chipActive: { backgroundColor: "#7e11a9" },
  chipText: { color: "#7e11a9", fontSize: 13 },
  chipTextActive: { color: "white" },
  input: { backgroundColor: "white", borderRadius: 10, padding: 10, borderWidth: 1, borderColor: "#D1D5DB" },
});