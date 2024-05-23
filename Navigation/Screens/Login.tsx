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

type RootStackParamList = {
  HomeScreen: undefined;
  Login: undefined;
};

type LoginProps = {
  navigation: StackNavigationProp<RootStackParamList, "HomeScreen">;
};

const logo2 = require("../../imagenes/logo2.png"); // Logo

function Login({ navigation }: LoginProps): React.JSX.Element {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const { setUser } = useUser(); // Obtén el setter del usuario del contexto

  const btnIngresarOnPress = function () {
    if (usuario && contrasena) {
      setUser(usuario); // Guarda el nombre de usuario en el contexto
      navigation.replace("HomeScreen");
      return;
    }
    Alert.alert("Fallido", "Datos incorrectos...");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo2} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        <View style={styles.inputContainer}>
          <Icon name="user" type="font-awesome" size={20} color="#828894" />
          <TextInput
            style={styles.textInput}
            placeholder="Usuario"
            placeholderTextColor="#828894"
            onChangeText={(u) => setUsuario(u)}
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
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={btnIngresarOnPress}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#323844",
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    // flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
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
    // marginHorizontal: ,
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

export default Login;
