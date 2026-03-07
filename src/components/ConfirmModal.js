import React from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";

export default function ConfirmModal({ visible, lote, onClose, onConfirm }) {
  if (!lote) return null;

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.bg}>
        <View style={styles.card}>
          <Text style={styles.titulo}>Definir Status: {lote.nome}</Text>
          
          <View style={styles.gridBotoes}>
            {/* APROVAR */}
            <Pressable 
              style={[styles.btnStatus, { backgroundColor: "#4CAF50" }]} 
              onPress={() => onConfirm("Aprovado", "#4CAF50")}
            >
              <Text style={styles.txtBtn}>Aprovar</Text>
            </Pressable>

            {/* PENDENTE */}
            <Pressable 
              style={[styles.btnStatus, { backgroundColor: "#FFC107" }]} 
              onPress={() => onConfirm("Pendente", "#FFC107")}
            >
              <Text style={styles.txtBtn}>Pendente</Text>
            </Pressable>

            {/* REPROVAR */}
            <Pressable 
              style={[styles.btnStatus, { backgroundColor: "#e53935" }]} 
              onPress={() => onConfirm("Reprovado", "#e53935")}
            >
              <Text style={styles.txtBtn}>Reprovar</Text>
            </Pressable>
          </View>

          <Pressable style={styles.btnCancelar} onPress={onClose}>
            <Text style={{ color: "#666" }}>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

// Estilos do Modal
const styles = StyleSheet.create({
  bg: { flex: 1, backgroundColor: "rgba(0,0,0,0.6)", justifyContent: "center", padding: 20 },
  card: { backgroundColor: "#fff", borderRadius: 15, padding: 20, alignItems: "center" },
  titulo: { fontSize: 18, fontWeight: "bold", marginBottom: 20 },
  gridBotoes: { width: "100%", gap: 10 },
  btnStatus: { padding: 15, borderRadius: 8, alignItems: "center", width: "100%" },
  txtBtn: { color: "#fff", fontWeight: "bold" },
  btnCancelar: { marginTop: 20, padding: 10 }
});