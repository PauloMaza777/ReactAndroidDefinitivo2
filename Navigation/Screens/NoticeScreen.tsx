import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { SafeAreaView } from "react-native-safe-area-context";
import { db } from "../../firebase"; 
import { collection, addDoc } from "firebase/firestore";

const NoticeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const guardarForo = async () => {
    if (!title || !author || !date || !description) {
      Alert.alert('Error', 'Por favor complete todos los campos');
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "noticias"), {
        title: title,
        author: author,
        date: date,
        description: description
      });
      console.log('Documento escrito con ID: ', docRef.id);
      Alert.alert('Noticia agregada', 'La noticia ha sido agregada con éxito.');
      setTitle('');
      setAuthor('');
      setDate('');
      setDescription('');
      navigation.goBack();
    } catch (e) {
      console.error('Error al agregar el documento: ', e);
      Alert.alert('Error', 'Hubo un problema al agregar la noticia.');
    }
    
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Título de la noticia"
        />
        <Text style={styles.label}>Autor</Text>
        <TextInput
          style={styles.input}
          value={author}
          onChangeText={setAuthor}
          placeholder="Nombre del autor"
        />
        <Text style={styles.label}>Fecha</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={setDate}
          placeholder="Fecha (YYYY-MM-DD)"
        />
        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={styles.textarea}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginBottom: 16,
    backgroundColor: "#fff",
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
    backgroundColor: "#527a8d",
    borderRadius: 5,
    padding: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default NoticeScreen;
