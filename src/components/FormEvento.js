import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Alert, StyleSheet } from "react-native";

export default function FormEvento({ onSalvar }) {
  const [form, setForm] = useState({
    nome: "",
    data: "",
    responsavel: "",
    descricao: "",
  });

  function atualizar(campo, valor) {
    setForm({ ...form, [campo]: valor });
  }

  function salvar() {
    if (
      !form.nome.trim() ||
      !form.data.trim() ||
      !form.responsavel.trim() ||
      !form.descricao.trim()
    ) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    onSalvar({
      id: Date.now().toString(),
      ...form,
    });

    setForm({
      nome: "",
      data: "",
      responsavel: "",
      descricao: "",
    });

    Alert.alert("Sucesso", "Evento cadastrado!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Eventos</Text>

      <TextInput
        placeholder="Nome do Evento"
        style={styles.input}
        value={form.nome}
        onChangeText={(t) => atualizar("nome", t)}
        autoCapitalize="words"
      />

      <TextInput
        placeholder="Data"
        style={styles.input}
        value={form.data}
        onChangeText={(t) => atualizar("data", t)}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Responsável"
        style={styles.input}
        value={form.responsavel}
        onChangeText={(t) => atualizar("responsavel", t)}
      />

      <TextInput
        placeholder="Descrição"
        style={[styles.input, { height: 100 }]}
        value={form.descricao}
        onChangeText={(t) => atualizar("descricao", t)}
        multiline
      />

      <Pressable style={styles.botao} onPress={salvar}>
        <Text style={styles.botaoTexto}>Salvar Evento</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f2f2f2",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: "#4CAF50",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
});
