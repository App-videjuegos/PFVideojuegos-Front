import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";

const Purchase = ({ navigation }) => {
  const [amount, setAmount] = useState("");
  const [videoGame, setVideoGame] = useState("");
  // Agregar otros estados para recopilar más información de la compra si es necesario

  const onSubmit = async () => {
    // Aca se envian los datos de la compra al backend
    try {
      const response = await axios.post(
        "https://tu_servidor_backend/compra", // Reemplazar esta URL con la del backend para realizar la compra
        {
          amount,
          videoGame,
          // Agrega otros campos de información de la compra si es necesario
        }
      );

      console.log("Respuesta del servidor:", response.data);

      // Si la compra es exitosa, enviar el correo electrónico de confirmación al usuario
      const emailResponse = await axios.post(
        "https://tu_servidor_backend/correo-carrito", // Reemplazar esta URL con la del backend para enviar el correo de confirmación
        {
          correo: "correo_del_usuario@gmail.com", // Reemplazar esto con el correo del usuario registrado en el componente Register
          amount,
          videoGame,
          // Agrega otros campos de información de la compra si es necesario
        }
      );

      console.log("Respuesta del servidor de correo:", emailResponse.data);

      Alert.alert("Purchase Completed!", "Email confirmation sent.");
    } catch (error) {
      console.log("Error en el backend:", error);
      Alert.alert("Oops! Something went wrong");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Purchase Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Video Game"
        value={videoGame}
        onChangeText={setVideoGame}
      />
      {/* Agregar otros campos para recopilar información de la compra si es necesario */}

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Make Purchase</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Purchase;
