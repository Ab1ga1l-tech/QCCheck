import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from "react-native";
import { globalStyles } from "../styles/globalstyles";
import AuthContext from "../context/AutoContext";

const USUARIO_FIXO = "admin@gmail.com";
const SENHA_FIXA = "123456";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { signIn } = React.useContext(AuthContext);

  function handleLogin() {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha email e senha!");
      return;
    }

    if (email !== USUARIO_FIXO || senha !== SENHA_FIXA) {
      Alert.alert("Erro", "E-mail ou senha incorretos!");
      return;
    }

    signIn(email, senha);
  }

  return (
    <View style={[globalStyles.container, styles.centralizar]}>

      <Text style={styles.titulo}>QCCheck</Text>
      <Text style={styles.subtitulo}>Faça login para continuar</Text>
      
      <TextInput
        placeholder="E-mail"
        style={globalStyles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Senha"
        style={globalStyles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <Pressable style={globalStyles.button} onPress={handleLogin}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  centralizar: {
    justifyContent: "center",
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
    color: "#4CAF50",
  },
  subtitulo: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 30,
    color: "#666",
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
