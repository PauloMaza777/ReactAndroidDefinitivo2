import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Image
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { SafeAreaView } from "react-native-safe-area-context";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const logo2 = require("../../imagenes/logo2.png"); //Logo

const NoticeScreen = (): React.JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const guardarForo = async () => {
    if (!title || !author || !date || !description) {
      Alert.alert("Error", "Por favor complete todos los campos");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "noticias"), {
        title: title,
        author: author,
        date: date,
        description: description,
      });
      console.log("Documento escrito con ID: ", docRef.id);
      Alert.alert("Noticia agregada", "La noticia ha sido agregada con éxito.");
      setTitle("");
      setAuthor("");
      setDate("");
      setDescription("");
      navigation.goBack();
    } catch (e) {
      console.error("Error al agregar el documento: ", e);
      Alert.alert("Error", "Hubo un problema al agregar la noticia.");
    }
  };

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
            <TextInput
              style={styles.textInput}
              value={date}
              onChangeText={setDate}
              placeholder="Fecha (YYYY-MM-DD)"
            />
            <Text style={styles.label}>Descripción</Text>
            <TextInput
              style={styles.textInput}
              value={description}
              onChangeText={setDescription}
              placeholder="Descripción de la noticia"
              multiline
              numberOfLines={4}
            />
            <TouchableOpacity style={styles.button} onPress={guardarForo}>
              <Text style={styles.buttonText}>Agregar Noticia</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
});

export default NoticeScreen;
