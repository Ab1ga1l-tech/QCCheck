import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function EventoItem({ evento, onPress }) {
  return (
    <Pressable style={styles.card} onPress={() => onPress(evento)}>
      <Text style={styles.titulo}>{evento.nome}</Text>
      <Text>{evento.data}</Text>
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
