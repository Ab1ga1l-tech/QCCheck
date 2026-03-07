import React from "react";
import { View, Text, TextInput, Pressable, Alert, StyleSheet } from "react-native";
import { useForm } from "../hooks/UseForm";
import ListContext from "../context/ListContext";

export default function InspectionScreen({ navigation, route }) {
  const { addListItem } = React.useContext(ListContext);
  const { values, handleChange, resetForm, validate } = useForm({
    nome: "",
    data: "",
    responsavel: "",
    cargo: "",
    descricao: "",
  });

  async function salvar() {

    if (!validate(["nome", "data", "responsavel", "descricao"])) {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios!");
      return;
    }

    const novoLote = {
      id: Date.now().toString(),
      ...values,
    };
    await addListItem(novoLote);

    Alert.alert("Sucesso", "Lote cadastrado!");

    resetForm();

    // volta automaticamente para a lista
    navigation.goBack();
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Cadastro de Lote</Text>

      <TextInput
        placeholder="Nome do Lote"
        style={styles.input}
        value={values.nome}
        onChangeText={(t) => handleChange("nome", t)}
      />

      <TextInput
        placeholder="Data (DD/MM/AAAA)"
        style={styles.input}
        value={values.data}
        onChangeText={(t) => handleChange("data", t)}
      />

      <TextInput
        placeholder="Responsável"
        style={styles.input}
        value={values.responsavel}
        onChangeText={(t) => handleChange("responsavel", t)}
      />

      <TextInput
        placeholder="Cargo"
        style={styles.input}
        value={values.cargo}
        onChangeText={(t) => handleChange("cargo", t)}
      />

      <TextInput
        placeholder="Descrição"
        style={[styles.input, { height: 100 }]}
        value={values.descricao}
        onChangeText={(t) => handleChange("descricao", t)}
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