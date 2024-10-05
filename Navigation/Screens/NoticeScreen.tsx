// Paulo Esteban Maza Rivera - 20460351
// Interfaz para que el usuario realice una publicación sobre Noticias de videojuegos

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
  ActivityIndicator, // Para mostrar feedback de carga
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView } from "react-native-safe-area-context";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const logo2 = require("../../imagenes/logo2.png"); //Logo

//Componente principal NoticeScreen
const NoticeScreen = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false); // Estado para mostrar loading
  const [showDatePicker, setShowDatePicker] = useState(false); // Estado para el selector de fecha

    //Metodo POST para el guardado de los datos de las noticias
  const guardarForo = async () => {
    if (!title || !author || !date || !description) {
      Alert.alert("Error", "Por favor complete todos los campos");
      return;
    }
    try {
      setLoading(true); // Iniciar loading
      const docRef = await addDoc(collection(db, "noticias"), {
        title,
        author,
        date,
        description,
      });
      console.log("Documento escrito con ID: ", docRef.id);
      Alert.alert("Noticia agregada", "La noticia ha sido agregada con éxito.");
      setTitle("");
      setAuthor("");
      setDate("");
      setDescription("");
      setLoading(false); // Finalizar loading
      navigation.goBack();
    } catch (e) {
      console.error("Error al agregar el documento: ", e);
      setLoading(false); // Finalizar loading en caso de error
      Alert.alert("Error", "Hubo un problema al agregar la noticia.");
    }
  };

  //Renderizar la interfaz con los detalles para agregar una publicación sobre las noticias
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Image style={styles.logo} source={logo2} />
          <Text style={styles.tittle}>AGREGAR NOTICIA</Text>
          <View style={styles.formContainer}>
            
            <Text style={styles.label}>Titulo</Text>
            <TextInput
              style={styles.textInput}
              value={title}
              onChangeText={setTitle}
              placeholder="Título de la noticia"
            />
            <Text style={styles.label}>Autor</Text>
            <TextInput
              style={styles.textInput}
              value={author}
              onChangeText={setAuthor}
              placeholder="Nombre del autor"
            />
            <Text style={styles.label}>Fecha</Text>
            <TouchableOpacity
              style={styles.textInput}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.dateText}>
                {date ? date : "Fecha de la noticia"}
              </Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={new Date()}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowDatePicker(false);
                  const currentDate = selectedDate || new Date();
                  setDate(currentDate.toISOString().split("T")[0]); // Formato YYYY-MM-DD
                }}
              />
            )}
            <Text style={styles.label}>Descripción</Text>
            <TextInput
              style={styles.textInput}
              value={description}
              onChangeText={setDescription}
              placeholder="Descripción de la noticia"
              multiline
              numberOfLines={4}
            />
            <TouchableOpacity style={styles.button} onPress={guardarForo} disabled={loading}>
            {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text style={styles.buttonText}>Agregar Noticia</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Estilos para los componentes visuales de la pantalla
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flexGrow: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#527a8d",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  formContainer: {
    width: "90%",
    backgroundColor: "#e0e0e0",
    padding: 20,
    borderRadius: 10,
  },
  tittle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: "black",
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
    marginVertical: 10,
    color: "black",
  },
  textarea: {
    height: 80,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "purple",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: 20,
  },
  dateText: {
    color: "black",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
});

export default NoticeScreen;

// Paulo Esteban Maza Rivera - 20460351