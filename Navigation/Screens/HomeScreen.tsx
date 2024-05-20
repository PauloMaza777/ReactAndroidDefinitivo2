import React, { useRef } from "react";
import {
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";

const logo2 = require("../../imagenes/logo2.png"); //Logo

export type RootStackParamList = {
  Login: undefined;
  UserScreen: undefined;
};

// Componente principal
const HomeScreen = (): React.JSX.Element => {
  const drawerRef = useRef<DrawerLayoutAndroid>(null); // Referencia del cajón

  // Vista del cajón con contenido
  const navigationView = () => (
    <SafeAreaView style={styles.safeAreaNavigation}>
      <View style={[styles.drawerContent, styles.navigationContainer]}>
        <TouchableOpacity style={styles.drawerButton} onPress={() => {}}>
          <Icon type="material" name="person" size={35} color="black" />
          <Text style={styles.drawerButtonText}>Perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.drawerContent2, styles.navigationContainer]}>
        <TouchableOpacity style={styles.drawerButton} onPress={() => {}}>
          <Icon type="material" name="group" size={30} color="black" />
          <Text style={styles.drawerButtonText}>Comunidad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerButton} onPress={() => {}}>
          <Icon type='material' name='campaign' size={30} color="black" />
          <Text style={styles.drawerButtonText}>Foros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerButton} onPress={() => {}}>
          <Icon type='material' name='menu-book' size={30} color="black" />
          <Text style={styles.drawerButtonText}>Biblioteca</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerButton} onPress={() => {}}>
          <Icon type='material' name='category' size={30} color="black" />
          <Text style={styles.drawerButtonText}>Categorias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerButton} onPress={() => {}}>
          <Icon type='material' name='settings' size={30} color="black" />
          <Text style={styles.drawerButtonText}>Configuración</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <DrawerLayoutAndroid
        ref={drawerRef} // Referencia del cajón
        drawerWidth={300} // Ancho del cajón
        renderNavigationView={navigationView} // Contenido del cajón
      >
        <TouchableOpacity style={styles.drawerButton} onPress={() => drawerRef.current?.openDrawer()}>
          <Icon type='material' name='density-medium' size={30} color="black" />
        </TouchableOpacity>
        <ScrollView>
          <View style={styles.container}>
            <Image style={styles.logo} source={logo2} />
          </View>

          <View style={styles.container2}>
            <Boton1 texto="CATEGORÍAS" />
            <Boton1 texto="NOTICIAS" />
            <Boton1 texto="PÓDCASTS" />
            <Boton1 texto="ESPORTS" />
          </View>
        </ScrollView>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
};

// Componente de botón personalizado
const Boton1 = ({ texto }: { texto: string }) => (
  <TouchableOpacity style={styles.button} onPress={() => {}}>
    <Text style={styles.buttonText}>{texto}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  safeAreaNavigation: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
  container3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  button: {
    backgroundColor: "purple",
    borderRadius: 50,
    padding: 8,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
  drawerContent: {
    marginTop: 200,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
  drawerContent2: {
    justifyContent: "center",
    // alignItems: 'center',
    backgroundColor: "#ecf0f1",
  },
  drawerText: {
    fontSize: 16,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1", // Agregamos el estilo para el contenido del cajón
  },
  drawerButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  drawerButtonText: {
    marginLeft: 20,
    fontSize: 18,
  },
});

export default HomeScreen;
