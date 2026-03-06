import React from "react";
import { View, Text, TextInput, Pressable, Alert, StyleSheet } from "react-native";
import { useForm } from "../hooks/UseForm";

export default function EditLoteScreen({ navigation, route }) {

  const { lote, atualizarLote, excluirLote } = route.params;

  const { values, handleChange } = useForm({
    nome: lote.nome,
    data: lote.data,
    responsavel: lote.responsavel,
    cargo: lote.cargo,
    descricao: lote.descricao,
  });

  function salvarEdicao() {

    const loteAtualizado = {
      ...lote,
      ...values,
    };

    atualizarLote(loteAtualizado);

    Alert.alert("Sucesso", "Lote atualizado!");

    navigation.goBack();
  }

  function deletar() {

    Alert.alert(
      "Excluir",
      "Deseja realmente excluir este lote?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => {
            excluirLote(lote.id);
            navigation.goBack();
          },
        },
      ]
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Editar Lote</Text>

      <TextInput
        style={styles.input}
        value={values.nome}
        onChangeText={(t) => handleChange("nome", t)}
      />

      <TextInput
        style={styles.input}
        value={values.data}
        onChangeText={(t) => handleChange("data", t)}
      />

      <TextInput
        style={styles.input}
        value={values.responsavel}
        onChangeText={(t) => handleChange("responsavel", t)}
      />

      <TextInput
        style={styles.input}
        value={values.cargo}
        onChangeText={(t) => handleChange("cargo", t)}
      />

      <TextInput
        style={[styles.input, { height: 100 }]}
        value={values.descricao}
        onChangeText={(t) => handleChange("descricao", t)}
        multiline
      />

      <Pressable style={styles.botaoSalvar} onPress={salvarEdicao}>
        <Text style={styles.botaoTexto}>Salvar Alterações</Text>
      </Pressable>

      <Pressable style={styles.botaoExcluir} onPress={deletar}>
        <Text style={styles.botaoTexto}>Excluir Lote</Text>
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

  botaoSalvar: {
    backgroundColor: "#4CAF50",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  botaoExcluir: {
    backgroundColor: "#e53935",
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