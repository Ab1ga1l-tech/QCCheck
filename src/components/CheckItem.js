import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function CheckItem({ item, onPress }) {
  return (
    <Pressable style={styles.card} onPress={() => onPress(item)}>
      <Text style={styles.titulo}>{item.nome}</Text>
      <Text>{item.data}</Text>
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