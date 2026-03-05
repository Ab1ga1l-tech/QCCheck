import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Alert, StyleSheet } from "react-native";

export default function InspectionScreen({ navigation }) {

  const [values, setValues] = useState({
    nome: "",
    data: "",
    responsavel: "",
    cargo: "",
    descricao: "",
  });

  function atualizar(campo, valor) {
    setValues({ ...values, [campo]: valor });
  }

  function salvar() {

    if (
      !values.nome ||
      !values.data ||
      !values.responsavel ||
      !values.descricao
    ) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const novoLote = {
      id: Date.now().toString(),
      ...values,
    };

    Alert.alert("Sucesso", "Lote cadastrado!");

    navigation.navigate("Lotes", {
      novoLote: novoLote,
    });

    setValues({
      nome: "",
      data: "",
      responsavel: "",
      cargo: "",
      descricao: "",
    });
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Cadastro de Lote</Text>

      <TextInput
        placeholder="Nome do Lote"
        style={styles.input}
        value={values.nome}
        onChangeText={(t) => atualizar("nome", t)}
      />

      <TextInput
        placeholder="Data"
        style={styles.input}
        value={values.data}
        onChangeText={(t) => atualizar("data", t)}
      />

      <TextInput
        placeholder="Responsável"
        style={styles.input}
        value={values.responsavel}
        onChangeText={(t) => atualizar("responsavel", t)}
      />

      <TextInput
        placeholder="Cargo"
        style={styles.input}
        value={values.cargo}
        onChangeText={(t) => atualizar("cargo", t)}
      />

      <TextInput
        placeholder="Descrição"
        style={[styles.input, { height: 100 }]}
        value={values.descricao}
        onChangeText={(t) => atualizar("descricao", t)}
        multiline
      />

      <Pressable style={styles.botao} onPress={salvar}>
        <Text style={styles.botaoTexto}>Salvar Lote</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
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
    marginTop: 10,
  },

  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },

});