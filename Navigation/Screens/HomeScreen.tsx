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
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";

const logo2 = require("../../imagenes/logo2.png"); //Logo

// Componente principal
const HomeScreen = (): React.JSX.Element => {
  const drawerRef = useRef<DrawerLayoutAndroid>(null); // Referencia del cajón
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Vista del cajón con contenido
  const navigationView = () => (
    <SafeAreaView style={styles.safeAreaNavigation}>
      <View style={[styles.drawerContent, styles.navigationContainer]}>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => {
            navigation.navigate("UserScreen");
          }}
        >
          <Icon
            type="material"
            name="person"
            size={35}
            color="black"
            style={styles.button}
          />
          <Text style={styles.drawerButtonText}>Perfil</Text>
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.drawerContent2,
          styles.navigationContainer,
          styles.IconStyle,
        ]}
      >
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => {
            navigation.navigate("GroupScreen");
          }}
        >
          <Icon type="material" name="group" size={30} color="black" />
          <Text style={styles.drawerButtonText}>Comunidad</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => {
            navigation.navigate("ForoScreen");
          }}
        >
          <Icon type="material" name="campaign" size={30} color="black" />
          <Text style={styles.drawerButtonText}>Foros</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => {
            navigation.navigate("LibraryScreen");
          }}
        >
          <Icon type="material" name="menu-book" size={30} color="black" />
          <Text style={styles.drawerButtonText}>Biblioteca</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => {
            navigation.navigate("CategoryScreen");
          }}
        >
          <Icon type="material" name="category" size={30} color="black" />
          <Text style={styles.drawerButtonText}>Categorias</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => {
            navigation.navigate("SettingsScreen");
          }}
        >
          <Icon type="material" name="settings" size={30} color="black" />
          <Text style={styles.drawerButtonText}>Configuración</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contactUser}
          onPress={() => {
            navigation.navigate("ContactScreen");
          }}
        >
          <Icon
            type="material"
            name="notifications-active"
            size={30}
            color="black"
          />
          <Text style={styles.drawerButtonText}>Contacto</Text>
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
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => drawerRef.current?.openDrawer()}
        >
          <Icon type="material" name="density-medium" size={30} color="black" />
        </TouchableOpacity>
        <ScrollView>
          <View style={styles.container}>
            <Image style={styles.logo} source={logo2} />
          </View>

          <View style={styles.container2}>
            <Text style={styles.buttonText}>NOTICIAS</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("NoticeScreen");
              }}
            >
              <Text style={styles.buttonText}>Agregar Tema</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container2}>
            <Text style={styles.buttonText}>E-SPORTS</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("EsportsScreen");
              }}
            >
              <Text style={styles.buttonText}>Agregar Tema</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#527a8d",
  },
  safeAreaNavigation: {
    flex: 1,
    // "#3f6c77"
    backgroundColor: "#5d8da2",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50,
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
    borderRadius: 10,
    padding: 5,
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
  },
  drawerContent2: {
    justifyContent: "center",
    // alignItems: 'center',
  },
  drawerText: {
    fontSize: 16,

  },
  navigationContainer: {
    backgroundColor: "#5d8da2", // Agregamos el estilo para el contenido del cajón
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
  IconStyle: {
    marginLeft: 10,
  },
  contactUser: {
    marginTop: 65,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default HomeScreen;
