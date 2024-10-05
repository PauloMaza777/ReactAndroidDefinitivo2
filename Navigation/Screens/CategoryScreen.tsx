// Paulo Esteban Maza Rivera - 20460351
// Interfaz para el usuario asigne las categorias de su agrado que se guardaran de manera local

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CheckBox, Icon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Componente principal CategoryScreen
// Permite al usuario seleccionar categorías y guardar su preferencia localmente
const CategoryScreen = () => {
  // useState para manejar el estado de las categorías y si están seleccionadas o no
  const [categories, setCategories] = useState([
    { icon: "gamepad", name: "Videojuegos", checked: false },
    { icon: "newspaper", name: "Noticias", checked: false },
    { icon: "futbol", name: "Deportes", checked: false },
    { icon: "laptop", name: "Tecnología", checked: false },
    { icon: "theater-masks", name: "Entretenimiento", checked: false },
    { icon: "music", name: "Música", checked: false },
    { icon: "flask", name: "Ciencias", checked: false },
    { icon: "utensils", name: "Comida", checked: false },
  ]);
  // useEffect Se utiliza para cargar las categorías previamente seleccionadas al montar el componente
  useEffect(() => {
    // Cargar categorías seleccionadas previamente desde AsyncStorage para que se queden guardadas
    const loadSelectedCategories = async () => {
      try {
        const selectedCategoriesString = await AsyncStorage.getItem(
          "selectedCategories"
        );
        if (selectedCategoriesString) {
          const selectedCategories = JSON.parse(selectedCategoriesString);
          const updatedCategories = categories.map((category) => ({
            ...category,
            checked: selectedCategories.includes(category.name),
          }));
          setCategories(updatedCategories);
        }
      } catch (error) {
        console.error("Error loading selected categories:", error);
      }
    };

    loadSelectedCategories();
  }, []);

  const toggleCheckbox = async (index) => {
    const updatedCategories = [...categories];
    updatedCategories[index].checked = !updatedCategories[index].checked;
    setCategories(updatedCategories);

    // Filtrar las categorías seleccionadas y guardarlas en AsyncStorage
    const selectedCategories = updatedCategories
      .filter((category) => category.checked)
      .map((category) => category.name);
    try {
      // Guardar el array de categorías seleccionadas en AsyncStorage
      await AsyncStorage.setItem(
        "selectedCategories",
        JSON.stringify(selectedCategories)
      );
    } catch (error) {
      console.error("Error saving selected categories:", error);
    }
  };

  // Renderizar la interfaz con las categorías y sus iconos
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your Category</Text>
      <ScrollView style={styles.scrollView}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} onPress={() => toggleCheckbox(index)}>
            <View style={styles.categoryItem}>
              <CheckBox
                checked={category.checked}
                onPress={() => toggleCheckbox(index)}
              />
              <Icon
                name={category.icon}
                type="font-awesome-5"
                color="#000000"
              />
              <Text style={styles.categoryText}>{category.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

// Estilos para los componentes visuales de la pantalla
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#527a8d",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 70,
    marginBottom: 50,
    color: "black",
  },
  scrollView: {
    flexGrow: 1,
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 18,
    marginLeft: 10,
    color: "black",
  },
});

export default CategoryScreen;

// Paulo Esteban Maza Rivera - 20460351
