// Paulo Esteban Maza Rivera - 20460351
// Interfaz para que el usuario se registre con un correo personal y una contraseña

import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Icon } from "react-native-elements";
import { db } from "../../firebase"; 
import { collection, addDoc } from "firebase/firestore";

type RootStackParamList = {
  HomeScreen: undefined;
  Login: undefined;
  Register: undefined; 
};

type RegisterProps = {
  navigation: StackNavigationProp<RootStackParamList, "Login">; // Navegación hacia la pantalla de login
};

const logo2 = require("../../imagenes/logo2.png"); //Importamos el Logo para usarlo

//Componente principal RegisterScreen
const RegisterScreen = ({ navigation }: RegisterProps): React.JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const btnRegistrarOnPress = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Por favor complete todos los campos");
      return;
    }

    try {
      // Agregar el usuario a Firebase Firestore
      const docRef = await addDoc(collection(db, "registro"), {
        email,
        password, // Considera usar un hash para la contraseña en un entorno real
      });
      console.log("Usuario registrado con ID: ", docRef.id);
      Alert.alert("Registro exitoso", "Usuario registrado con éxito.");
      navigation.navigate("Login"); // Redirigir al login
    } catch (e) {
      console.error("Error al registrar el usuario: ", e);
      Alert.alert("Error", "Hubo un problema al registrar el usuario.");
    }
  };

  //Renderizar la interfaz para realizar el registro del usuario
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo2} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Registro</Text>
        <View style={styles.inputContainer}>
          <Icon name="envelope" type="font-awesome" size={20} color="#828894" />
          <TextInput
            style={styles.textInput}
            placeholder="Correo Electrónico"
            placeholderTextColor="#828894"
            onChangeText={(e) => setEmail(e)}
            value={email}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" type="font-awesome" size={20} color="#828894" />
          <TextInput
            style={styles.textInput}
            placeholder="Contraseña"
            placeholderTextColor="#828894"
            secureTextEntry={true}
            onChangeText={(p) => setPassword(p)}
            value={password}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={btnRegistrarOnPress}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Estilos para los componentes visuales de la pantalla
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#323844",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 0,
  },
  formContainer: {
    width: "90%",
    alignItems: "center",
    backgroundColor: "#4a5a6a",
    padding: 20,
    borderRadius: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    color: "white",
    marginBottom: 25,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "white",
    width: "80%",
    margin: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    color: "black",
  },
  button: {
    backgroundColor: "purple",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: 16,
    width: "80%",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
    marginTop: 50,
  },
});

export default RegisterScreen;

// Paulo Esteban Maza Rivera - 20460351
