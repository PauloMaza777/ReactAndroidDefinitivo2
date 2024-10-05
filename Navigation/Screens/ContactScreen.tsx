// Paulo Esteban Maza Rivera - 20460351
// Interfaz para el usuario tenga un apartado para comunicarse con el soporte de la aplicación

import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";

//Componente principal ContactScreen
const ContactScreen = () => {
  // Renderizar la interfaz con los botones y sus iconos para el contacto
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Me</Text>
      <TouchableOpacity style={styles.socialMediaContainer}>
        <Icon type="font-awesome" name="facebook" size={30} color="#3b5998" />
        <Text style={styles.socialMediaText}>Facebook Paulo Maza</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialMediaContainer}>
        <Icon type="font-awesome" name="whatsapp" size={30} color="#25D366" />
        <Text style={styles.socialMediaText}>WhatsApp 3123194578</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialMediaContainer}>
        <Icon type="font-awesome" name="twitter" size={30} color="#1DA1F2" />
        <Text style={styles.socialMediaText}>Twitter @Esteban988yt</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialMediaContainer}>
        <Icon type="font-awesome" name="instagram" size={30} color="#C13584" />
        <Text style={styles.socialMediaText}>Instagram Paulo Maza</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialMediaContainer}>
        <Icon type="font-awesome" name="youtube" size={30} color="#ff0000" />
        <Text style={styles.socialMediaText}>YouTube Esteban988YT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialMediaContainer}>
        <Icon type="font-awesome" name="twitch" size={30} color="#7900be" />
        <Text style={styles.socialMediaText}>Twitch Esteban988YT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialMediaContainer}>
        <Icon
          type="font-awesome-5"
          name="kickstarter-k"
          size={30}
          color="#0ecd41"
        />
        <Text style={styles.socialMediaText}>Kick Esteban988YT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialMediaContainer}>
        <Icon type="font-awesome-5" name="github" size={30} color="#14034c" />
        <Text style={styles.socialMediaText}>Github PauloMaza777</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialMediaContainer}>
        <Icon type="font-awesome-5" name="discord" size={30} color="#1a29d5" />
        <Text style={styles.socialMediaText}>Discord paulomaza</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactScreen;

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
    marginBottom: 20,
    color: "black",
  },
  socialMediaContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  socialMediaText: {
    marginLeft: 10,
    fontSize: 18,
    color: "black",
  },
  contactButton: {
    backgroundColor: "purple",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  contactButtonText: {
    color: "white",
    fontSize: 18,
  },
});

// Paulo Esteban Maza Rivera - 20460351
