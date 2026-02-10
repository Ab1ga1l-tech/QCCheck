import React, { useState } from "react";
import { FlatList, Text, KeyboardAvoidingView, Platform } from "react-native";

import FormEvento from "./src/components/FormEvento";
import EventoItem from "./src/components/EventoItem";
import EventoModal from "./src/components/EventoModal";

export default function App() {
  const [eventos, setEventos] = useState([]);
  const [selecionado, setSelecionado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  function adicionarEvento(evento) {
    setEventos((prev) => [evento, ...prev]);
  }

  function abrirDetalhes(evento) {
    setSelecionado(evento);
    setModalVisible(true);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventoItem evento={item} onPress={abrirDetalhes} />
        )}
        ListHeaderComponent={<FormEvento onSalvar={adicionarEvento} />}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 30 }}>
            Nenhum evento cadastrado ainda
          </Text>
        }
        contentContainerStyle={{ paddingBottom: 40 }}
      />

      <EventoModal
        visible={modalVisible}
        evento={selecionado}
        onClose={() => setModalVisible(false)}
      />
    </KeyboardAvoidingView>
  );
}
