import React from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";

export default function ConfirmModal({ visible, lote, onClose }) {
  if (!lote) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.bg}>
        <View style={styles.card}>
          <Text style={styles.titulo}>{lote.nome}</Text>

          <Text>📅 Data: {lote.data}</Text>
          <Text>👤 Responsável: {lote.responsavel}</Text>

          <Text style={{ marginTop: 10 }}>
            📝 {lote.descricao}
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
