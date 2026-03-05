import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function LoteItem({ lote, onPress }) {
  return (
    <Pressable style={styles.card} onPress={() => onPress(lote)}>
      <Text style={styles.titulo}>{lote.nome}</Text>
      <Text>{lote.data}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 14,
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 8,
    elevation: 2,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
