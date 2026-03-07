import React, { useState, useLayoutEffect } from "react";
import { View, FlatList, Text, Pressable, StyleSheet } from "react-native";
import ListContext from "../context/ListContext";
import ConfirmModal from "../components/ConfirmModal"; 
import AuthContext from "../context/AutoContext";

export default function LoteListScreen({ navigation }) {
  const { list, updateListItem } = React.useContext(ListContext);
  const { signOut } = React.useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [loteSelecionado, setLoteSelecionado] = useState(null);
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={signOut} style={{ marginRight: 15 }}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Sair</Text>
        </Pressable>
      ),
    });
  }, [navigation, signOut]);  
  
  async function mudarStatus(status, cor) {
    if (loteSelecionado) {
      const loteAtualizado = { ...loteSelecionado, status, cor };
      await updateListItem(loteAtualizado);
      setModalVisible(false);
      setLoteSelecionado(null);
    }
  }
  
  function abrirModal(item) {
    setLoteSelecionado(item);
    setModalVisible(true);
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }} // Espaço extra para o botão não cobrir o último item
        renderItem={({ item }) => (
          <View style={styles.containerItem}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.tituloLote, { color: item.cor || "#333" }]}>
                {item.nome}
              </Text>
              <Text style={styles.statusTexto}>
                {item.status || "Pendente"}
              </Text>
            </View>

            <View style={styles.areaBotoes}>
              <Pressable 
                style={[styles.botaoIcone, { backgroundColor: "#2196F3" }]} 
                onPress={() => navigation.navigate("EditarLote", { lote: item })}
              >
                <Text style={styles.textoIcone}>✏️</Text>
              </Pressable>

              <Pressable 
                style={[styles.botaoIcone, { backgroundColor: "#4CAF50" }]} 
                onPress={() => abrirModal(item)}
              >
                <Text style={styles.textoIcone}>✔️</Text>
              </Pressable>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Nenhum lote cadastrado</Text>}
      />

      <ConfirmModal 
        visible={modalVisible}
        lote={loteSelecionado}
        onClose={() => setModalVisible(false)}
        onConfirm={(status, cor) => mudarStatus(status, cor)}
      />

      {/* BOTÃO ADICIONAR (FAB) */}
      <Pressable 
        style={styles.fab} 
        onPress={() => navigation.navigate("NovoLote")}
      >
        <Text style={styles.fabText}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000", // Sombras para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tituloLote: { fontSize: 16, fontWeight: "bold" },
  statusTexto: { fontSize: 12, color: "#666" },
  areaBotoes: { flexDirection: "row" },
  botaoIcone: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  textoIcone: { color: "#fff", fontSize: 16 },
  empty: { textAlign: "center", marginTop: 50, fontSize: 16, color: "#999" },
  
  // ESTILOS DO BOTÃO QUE ESTAVAM FALTANDO:
  fab: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#4CAF50",
    width: 65,
    height: 65,
    borderRadius: 32.5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8, // Aumentei a elevação para garantir que fique por cima
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    zIndex: 999, // Garante que fique na frente de tudo
  },
  fabText: { 
    color: "#fff", 
    fontSize: 35, 
    fontWeight: "bold",
    lineHeight: 40, // Centraliza melhor o símbolo de +
  },
});