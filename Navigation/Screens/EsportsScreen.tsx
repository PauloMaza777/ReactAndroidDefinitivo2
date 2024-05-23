import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from '@react-native-community/datetimepicker';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";

const logo2 = require("../../imagenes/logo2.png"); //Logo

const NoticeScreen = (): React.JSX.Element => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleSubmit = () => {
    // Aquí iría la lógica para enviar los datos a la API
    console.log({ title, author, date, description });

    // Limpiar los campos después de agregar el tema
    setTitle("");
    setAuthor("");
    setDate(new Date());
    setDescription("");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Image style={styles.logo} source={logo2} />
          <Text style={styles.tittle}>AGREGAR E-SPORT</Text>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Título"
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Autor"
              value={author}
              onChangeText={setAuthor}
            />
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.textInput}>
              <Text style={styles.dateText}>{date.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
            <TextInput
              style={[styles.textInput, styles.textArea]}
              placeholder="Descripción"
              value={description}
              onChangeText={setDescription}
              multiline
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
    color: "white",
  },
  dateText: {
    color: "black",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
