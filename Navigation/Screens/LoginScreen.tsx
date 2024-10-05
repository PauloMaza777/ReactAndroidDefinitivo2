// Paulo Esteban Maza Rivera - 20460351
// Interfaz para que el usuario inicie sesión con una cuenta existente

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
import { useUser } from "./UserContext"; // Importa el contexto de usuario
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase"; // Importa la configuración de Firebase
import RegisterScreen from "./RegisterScreen"; // Importa la pantalla de registro

type RootStackParamList = {
  HomeScreen: undefined;
  Login: undefined;
  RegisterScreen: undefined;
};

type LoginProps = {
  navigation: StackNavigationProp<RootStackParamList, "HomeScreen">;
};

const logo2 = require("../../imagenes/logo2.png"); //Importamos el Logo para usarlo

// Componente principal Login
function Login({ navigation }: LoginProps): React.JSX.Element {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const { setUser } = useUser(); // Obtén el setter del usuario del contexto

  const btnRegister = () => {
    navigation.navigate("RegisterScreen");
  };

  const btnIngresarOnPress = async () => {
    if (!usuario || !contrasena) {
      Alert.alert("Error", "Por favor ingrese su correo y contraseña");
      return;
    }

    try {
      // Crear la consulta para encontrar el usuario con el correo ingresado
      const q = query(
        collection(db, "registro"),
        where("email", "==", usuario)
      );
      const querySnapshot = await getDocs(q);

      // Si el correo no está en la base de datos, mostrar error
      if (querySnapshot.empty) {
        Alert.alert("Error", "Correo electrónico no encontrado");
        return;
      }

      let usuarioEncontrado = false;
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        // Validar la contraseña
        if (data.password === contrasena) {
          usuarioEncontrado = true;
          setUser(usuario); // Guarda el usuario en el contexto
          navigation.replace("HomeScreen");
        }
      });

      if (!usuarioEncontrado) {
        Alert.alert("Error", "Contraseña incorrecta");
      }
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);
      Alert.alert("Error", "Hubo un problema al iniciar sesión");
    }
  };

  // Renderizar la interfaz de los grupos disponibles
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo2} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <View style={styles.inputContainer}>
          <Icon name="envelope" type="font-awesome" size={20} color="#828894" />
          <TextInput
            style={styles.textInput}
            placeholder="Correo Electrónico"
            placeholderTextColor="#828894"
            onChangeText={(u) => setUsuario(u)}
            value={usuario}
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
            onChangeText={(p) => setContrasena(p)}
            value={contrasena}
          />
        </View>

        <TouchableOpacity style={styles.buttonRegister} onPress={btnRegister}>
          <Text style={styles.register}>
            ¿No tienes cuenta?
            <Text style={styles.buttonTextRegister}> Crea una...</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={btnIngresarOnPress}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

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
  register: {
    fontSize: 15,
    color: "white",
    marginBottom: 10,
  },
  buttonTextRegister: {
    fontSize: 15,
    color: "#0270ff",
  },
  buttonRegister: {
    alignItems: "center",
    width: "70%",
    marginBottom: 10,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
    marginTop: 50,
  },
});

export default Login;

// Paulo Esteban Maza Rivera - 20460351