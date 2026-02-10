import React from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";

export default function EventoModal({ visible, evento, onClose }) {
  if (!evento) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.bg}>
        <View style={styles.card}>
          <Text style={styles.titulo}>{evento.nome}</Text>

          <Text>📅 Data: {evento.data}</Text>
          <Text>👤 Responsável: {evento.responsavel}</Text>

          <Text style={{ marginTop: 10 }}>
            📝 {evento.descricao}
          </Text>

          <Pressable style={styles.botao} onPress={onClose}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Fechar
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  botao: {
    marginTop: 20,
    backgroundColor: "#e53935",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
});
