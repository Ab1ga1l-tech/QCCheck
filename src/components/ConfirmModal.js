import React from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";

export default function ConfirmModal({ visible, lote, onClose, onConfirm }) {
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

          <Text style={styles.alerta}>
            Deseja realmente reprovar este lote?
          </Text>

          <View style={styles.botoes}>

            <Pressable style={styles.cancelar} onPress={onClose}>
              <Text style={styles.textoBotao}>Cancelar</Text>
            </Pressable>

            <Pressable style={styles.reprovar} onPress={onConfirm}>
              <Text style={styles.textoBotao}>Reprovar</Text>
            </Pressable>

          </View>
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
  alerta: {
    marginTop: 15,
    fontWeight: "bold",
    color: "#e53935",
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cancelar: {
    backgroundColor: "#999",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  reprovar: {
    backgroundColor: "#e53935",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});