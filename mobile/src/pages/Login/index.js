import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import api from "../../services/api";

import logoImg from "../../assets/logo2x.png";

import styles from "./styles";

export default function Login() {
  const [id, setId] = useState("");

  const navigation = useNavigation();

  async function handleLogin() {
    try {
      if (id == "") {
        Alert.alert(`Campo em branco, digite a id da sua empresa!`);
        return;
      }

      const response = await api.post("sessions", { id });

      const error = response.data.error;

      if (error === "inexistente") {
        const enterprise = response.data.enterprise;

        navigation.navigate("Home", { enterprise });
      } else {
        Alert.alert(`Falha no login. ${error}`);
      }
    } catch (err) {
      Alert.alert("Erro no servidor. Por favor tente novamente mais tarde!");
    }
  }

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.image} />

      <View style={styles.iconKey}>
        <MaterialIcons
          name="vpn-key"
          size={50}
          color="black"
          style={{
            transform: [{ rotateZ: "40deg" }],
          }}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Insira a ID da empresa"
        onChangeText={(id) => setId(id)}
        placeholderTextColor="#A9A9A9"
      />
      <TouchableOpacity onPress={() => handleLogin()} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
