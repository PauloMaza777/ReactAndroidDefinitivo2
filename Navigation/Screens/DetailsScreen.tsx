import React, { useEffect, useState } from "react";
import { Notice } from "../model/Notices";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Importar AsyncStorage

const logo2 = require("../../imagenes/logo2.png"); //Logo

export type Params = {
  notice: Notice;
};

export type Props = {
  route: RouteProp<RootStackParamList, "DetailsScreen">;
  navigation: StackNavigationProp<RootStackParamList, "DetailsScreen">;
};

function DetailsScreen({ route }: Props): React.JSX.Element {
  const [notice, setNotice] = useState<Notice>();
  const [comment, setComment] = useState(""); // Estado para el nuevo comentario
  const [comments, setComments] = useState<string[]>([]); // Lista de comentarios

  useEffect(() => {
    setNotice(route.params.notice);
    loadComments(); // Cargar comentarios al iniciar la pantalla
  }, [route]);

  // Cargar comentarios de AsyncStorage
  const loadComments = async () => {
    try {
      const savedComments = await AsyncStorage.getItem(`comments-${route.params.notice.id}`);
      if (savedComments !== null) {
        setComments(JSON.parse(savedComments));
      }
    } catch (error) {
      console.log("Error al cargar los comentarios:", error);
    }
  };

  // Guardar comentarios en AsyncStorage
  const saveComments = async (newComments: string[]) => {
    try {
      await AsyncStorage.setItem(`comments-${route.params.notice.id}`, JSON.stringify(newComments));
    } catch (error) {
      console.log("Error al guardar los comentarios:", error);
    }
  };

  // Función para agregar un comentario a la lista
  const handleAddComment = () => {
    if (comment.trim()) {
      const newComments = [...comments, comment];
      setComments(newComments);
      saveComments(newComments); // Guardar los comentarios en AsyncStorage
      setComment(""); // Limpiar el campo de comentario después de enviar
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {notice && (
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.container}>
            <Image style={styles.logo} source={logo2} />

            <Text style={styles.textInput}>TITULO: {notice.title}</Text>
            <Text style={styles.textInput}>AUTOR: {notice.author}</Text>
            <Text style={styles.textInput}>FECHA: {notice.date}</Text>
            <Text style={styles.textInput}>DESCRIPCIÓN: {notice.description}</Text>
          </View>

          {/* Sección de comentarios */}
          <View style={styles.commentSection}>
            <Text style={styles.commentTitle}>Comentarios</Text>
            
            <TextInput
              style={styles.commentInput}
              placeholder="Escribe un comentario..."
              placeholderTextColor="#ffffff78"
              value={comment}
              onChangeText={setComment}
            />
            
            <TouchableOpacity style={styles.commentButton} onPress={handleAddComment}>
              <Text style={styles.commentButtonText}>Enviar Comentario</Text>
            </TouchableOpacity>

            {/* Mostrar comentarios */}
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <View key={index} style={styles.commentBox}>
                  <Text style={styles.commentText}>{comment}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.noComments}>Aún no hay comentarios.</Text>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

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
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
    margin: 12,
    fontSize: 18,
    color: "#ffffff78",
  },
  // Estilos para la sección de comentarios
  commentSection: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ffffff50",
    marginTop: 20,
  },
  commentTitle: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
  },
  commentInput: {
    backgroundColor: "#3e606f",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  commentButton: {
    backgroundColor: "#4caf50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  commentButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  commentBox: {
    backgroundColor: "#3e606f",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  commentText: {
    color: "#fff",
  },
  noComments: {
    color: "#ffffff78",
    textAlign: "center",
  },
});

export default DetailsScreen;
