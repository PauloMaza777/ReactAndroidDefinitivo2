import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
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
      const docRef = await addDoc(collection(db, "esport"), {
        title: title,
        author: author,
        date: date,
        description: description,
      });
      console.log("Documento escrito con ID: ", docRef.id);
      Alert.alert("E-sport agregada", "La E-sport ha sido agregada con éxito.");
      setTitle("");
      setAuthor("");
      setDate("");
      setDescription("");
      navigation.goBack();
    } catch (e) {
      console.error("Error al agregar el documento: ", e);
      Alert.alert("Error", "Hubo un problema al agregar el E-sport.");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Image style={styles.logo} source={logo2} />
          <Text style={styles.tittle}>AGREGAR E-SPORT</Text>
          <View style={styles.formContainer}>
            <Text style={styles.label}>Titulo</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Título de la noticia"
              value={title}
              onChangeText={setTitle}
            />
            <Text style={styles.label}>Autor</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Nombre del Autor"
              value={author}
              onChangeText={setAuthor}
            />
            <Text style={styles.label}>Fecha</Text>
            <TextInput
              style={styles.textInput}
              value={date}
              onChangeText={setDate}
              placeholder="Fecha (YYYY-MM-DD)"
            />
            {/* <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={styles.textInput}
            >
              <Text style={styles.dateText}>{date.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )} */}
            <TextInput
              style={[styles.textInput, styles.textArea]}
              placeholder="Descripción"
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={4}
            />
            <TouchableOpacity style={styles.button} onPress={guardarForo}>
              <Text style={styles.buttonText}>Agregar E-Sport</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NoticeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#527a8d",
  },
  scrollView: {
    flexGrow: 1,
  },
  tittle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: "black",
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "90%",
    backgroundColor: "#e0e0e0",
    padding: 20,
    borderRadius: 10,
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
  textArea: {
    height: 100,
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
  dateText: {
    color: "black",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
});
