import React, { useEffect, useState } from "react";
import { View, FlatList, Text, Pressable, StyleSheet } from "react-native";

export default function LoteListScreen({ navigation, route }) {

  const [lotes, setLotes] = useState([]);

  useEffect(() => {
    if (route.params?.novoLote) {
      setLotes((prev) => [route.params.novoLote, ...prev]);
    }
  }, [route.params?.novoLote]);

  return (
    <View style={{ flex: 1 }}>

      <FlatList
        data={lotes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.titulo}>{item.nome}</Text>
            <Text>📅 {item.data}</Text>
            <Text>👤 {item.responsavel}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>
            Nenhum lote cadastrado
          </Text>
        }
      />

      {/* BOTÃO FLUTUANTE */}
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

  empty: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
  },

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

  fab: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#4CAF50",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },

  fabText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },

});