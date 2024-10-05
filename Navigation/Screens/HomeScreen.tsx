// Paulo Esteban Maza Rivera - 20460351
// Interfaz principal en donde se mostraran todos los componentes utilizados

import React, { useEffect, useRef, useState } from "react";
import {
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { useUser } from "./UserContext";
import { StackNavigationProp } from "@react-navigation/stack";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const logo2 = require("../../imagenes/logo2.png");

type HomeScreenProps = StackNavigationProp<RootStackParamList, "HomeScreen">;
type HomeScreenRoute = RouteProp<RootStackParamList, "HomeScreen">;

type HomeProps = {
  navigation: HomeScreenProps;
  route: HomeScreenRoute;
};

// Modelo de Noticia
interface Notice {
  id: string;
  title: string;
  author: string;
  date: string;
  description: string;
}
// Modelo de E-sport
interface Esport {
  id: string;
  title: string;
  author: string;
  date: string;
  description: string;
}

// Componente principal HomeScreen
function HomeScreen({ navigation }: HomeProps): React.JSX.Element {
  const drawerRef = useRef<DrawerLayoutAndroid>(null);
  const { user } = useUser();

  const [notices, setNotices] = useState<Notice[]>([]);
  const [esports, setEsports] = useState<Esport[]>([]);

  const noticeItem = ({ item }: { item: Notice }) => (
    <TouchableOpacity
      onPress={() => navigation.push("DetailsScreen", { notice: item })}
    >
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <View style={styles.containerFire}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemAuthor}>{item.author}</Text>
          <Text style={styles.itemDate}>{item.date}</Text>
          <Text style={styles.itemDesc}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const esportItem = ({ item }: { item: Esport }) => (
    <TouchableOpacity
      onPress={() => navigation.push("DetailsScreenDos", { esport: item })}
    >
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <View style={styles.containerFire}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemAuthor}>{item.author}</Text>
          <Text style={styles.itemDate}>{item.date}</Text>
          <Text style={styles.itemDesc}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  // useEffect para mostrar las publicaciónes de la colección noticias
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "noticias"));
        const fetchedNotices: Notice[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          fetchedNotices.push({
            id: doc.id,
            title: data.title,
            author: data.author,
            date: data.date,
            description: data.description,
          });
        });
        setNotices(fetchedNotices);
      } catch (e) {
        console.error("Error fetching notices: ", e);
      }
    };

    fetchNotices();

    navigation.addListener("focus", () => {
      fetchNotices();
    });
  }, [navigation]);

  // useEffect para mostrar las publicaciónes de la colección E-Sport
  useEffect(() => {
    const fetchEsports = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "esport"));
        const fetchedEsports: Esport[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          fetchedEsports.push({
            id: doc.id,
            title: data.title,
            author: data.author,
            date: data.date,
            description: data.description,
          });
        });
        setEsports(fetchedEsports);
      } catch (e) {
        console.error("Error fetching esport: ", e);
      }
    };

    fetchEsports();

    navigation.addListener("focus", () => {
      fetchEsports();
    });
  }, [navigation]);

  // Renderizar la interfaz con todos los componentes y con los datos de la base de datos
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container3}>
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
            color="#ffffffA0"
            style={styles.button}
          />
          <Text style={styles.drawerButtonText}>
            Bienvenido{"\n"}
            {user ? user : "Perfil"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Image style={styles.logo} source={logo2} />
      </View>
      <View style={styles.container2}>
        <Text style={styles.buttonTextT}>NOTICIAS</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("NoticeScreen");
          }}
        >
          <Text style={styles.buttonText}>Agregar Tema</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={notices}
        style={styles.lista}
        renderItem={noticeItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.container2}>
        <Text style={styles.buttonTextT}>E-SPORTS</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("EsportsScreen");
          }}
        >
          <Text style={styles.buttonText}>Agregar Tema</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={esports}
        style={styles.lista}
        renderItem={esportItem}
        keyExtractor={(item) => item.id}
      />

      {/* Desde aqui comienza los botones que antes estaban en el drawerLayoutAndroid */}

      {/* <View
          style={[
            styles.drawerContent2,
            styles.navigationContainer,
            styles.IconStyle,
          ]}
        > */}
      {/* <TouchableOpacity
            style={styles.drawerButton}
            onPress={() => {
              navigation.navigate("GroupScreen");
            }}
          >
            <Icon type="material" name="group" size={30} color="#ffffffA0" />
            <Text style={styles.drawerButtonText}>Comunidad</Text>
          </TouchableOpacity> */}

      {/* <TouchableOpacity
            style={styles.drawerButton}
            onPress={() => {
              navigation.navigate("ForoScreen");
            }}
          >
            <Icon type="material" name="campaign" size={30} color="#ffffffA0" />
            <Text style={styles.drawerButtonText}>Foros</Text>
          </TouchableOpacity> */}

      {/* <TouchableOpacity
            style={styles.drawerButton}
            onPress={() => {
              navigation.navigate("LibraryScreen");
            }}
          >
            <Icon
              type="material"
              name="menu-book"
              size={30}
              color="#ffffffA0"
            />
            <Text style={styles.drawerButtonText}>Biblioteca</Text>
          </TouchableOpacity> */}

      {/* </View> */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => {
            navigation.navigate("CategoryScreen");
          }}
        >
          <Icon type="material" name="category" size={30} color="#0000009f" />
          <Text style={styles.navButtonText}>Categorías</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => {
            navigation.navigate("SettingsScreen");
          }}
        >
          <Icon type="material" name="settings" size={30} color="#0000009f" />
          <Text style={styles.navButtonText}>Configuración</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => {
            navigation.navigate("ContactScreen");
          }}
        >
          <Icon
            type="material"
            name="notifications-active"
            size={30}
            color="#0000009f"
          />
          <Text style={styles.navButtonText}>Contacto</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Estilos para los componentes visuales de la pantalla
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#527a8d",
  },
  safeAreaNavigation: {
    flex: 0,
    backgroundColor: "#ffffff",
    marginTop: 105,
  },
  container: {
    height: "20%",
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
  },
  container3: {
    flexDirection: "row",
    alignItems: "center",
  },
  container4: {
    flexDirection: "row",
    alignItems: "center",
  },
  container5: {
    flexDirection: "column",
    alignItems: "center",
  },
  container6: {
    flexDirection: "row-reverse",
    alignItems: "center",
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
    color: "white",
    padding: 5,
    paddingHorizontal: 10,
  },
  buttonTextT: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#ffffff78",
    padding: 5,
    paddingHorizontal: 10,
  },
  drawerContent: {
    marginTop: 2,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  drawerContent2: {
    justifyContent: "center",
  },
  navigationContainer: {
    backgroundColor: "#5d8da2",
  },
  drawerButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  drawerButtonText: {
    marginLeft: 20,
    fontSize: 18,
    color: "#0000009f",
  },
  IconStyle: {
    marginLeft: 10,
  },
  contactUser: {
    marginTop: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    alignSelf: "center",
    marginBottom: 30,
  },
  itemAuthor: {
    fontWeight: "bold",
    fontSize: 14,
    color: "black",
  },
  itemDate: {
    fontWeight: "bold",
    fontSize: 14,
    color: "black",
    alignSelf: "flex-end",
    marginBottom: 30,
  },
  itemDesc: {
    fontWeight: "bold",
    fontSize: 14,
    color: "black",
    marginBottom: 30,
  },
  lista: {
    maxHeight: 200,
    backgroundColor: "#527a8d",
    marginTop: 10,
  },
  containerFire: {
    flexDirection: "column",
    flexGrow: 9,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    backgroundColor: "#5d8da2",
  },
  bottomNavBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#ffffff",
    paddingVertical: 10,
  },
  navButton: {
    alignItems: "center",
  },
  navButtonText: {
    fontSize: 12,
    color: "#0000009f",
    marginTop: 5,
  },
});

export default HomeScreen;

// Paulo Esteban Maza Rivera - 20460351
