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
import DateTimePicker from '@react-native-community/datetimepicker';

const logo2 = require("../../imagenes/logo2.png"); //Logo

const NoticeScreen = (): React.JSX.Element => {
  // usamos el useState para cambiar el estado del componente
  //Le pasamos el valor inicial para almacenarlos del estado como argumento
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    //El setShowDatePicker se utiliza para mostrar el selector 
    //de fecha cuando el usuario toca el campo de fecha.
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleSubmit = () => {
    // Aquí se agregara la lógica para enviar los datos a una API
    // Por ahora, simplemente mostramos una alerta con los datos ingresados
    Alert.alert("Datos ingresados correctamente...");
    // Alert.alert("Datos ingresados correctamente...", 
    // `Título: ${title}\nAutor: ${author}\nFecha: ${date.toLocaleDateString()}\nDescripción: ${description}`);

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
          <Text style={styles.tittle}>AGREGAR NOTICIA</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Título"
            value={title}
            onChangeText={setTitle}
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Autor"
            value={author}
            onChangeText={setAuthor}
            placeholderTextColor="#999"
          />
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={[styles.textInput, { justifyContent: 'center' }]}
          >
            <Text style={{ color: 'black' }}>{date.toDateString()}</Text>
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
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Agregar Noticia</Text>
          </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
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
    marginBottom: 50,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "85%",
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
});
