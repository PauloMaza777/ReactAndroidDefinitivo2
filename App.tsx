// Paulo Esteban Maza Rivera - 20460351
// Este interfaz se encarga de la configuración y navegación entre todas las pantallas de la aplicación

import React from "react";
import {
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Navigation/Screens/LoginScreen";
import UserScreen from "./Navigation/Screens/UserScreen";
import HomeScreen from "./Navigation/Screens/HomeScreen";
import SettingsScreen from "./Navigation/Screens/SettingsScreen";
import ForoScreen from "./Navigation/Screens/ForoScreen";
import GroupScreen from "./Navigation/Screens/GroupScreen";
import LibraryScreen from "./Navigation/Screens/LibraryScreen";
import CategoryScreen from "./Navigation/Screens/CategoryScreen";
import ContactScreen from "./Navigation/Screens/ContactScreen";
import NoticeScreen from "./Navigation/Screens/NoticeScreen";
import EsportsScreen from "./Navigation/Screens/EsportsScreen";
import RegisterScreen from "./Navigation/Screens/RegisterScreen";

import { UserProvider } from "./Navigation/Screens/UserContext";
import DetailsScreen, {
  Params as ProductDetailsParams,
} from "./Navigation/Screens/DetailsScreen";
import DetailsScreenDos, {
  Params as ProductDetailsParamsDos,
} from "./Navigation/Screens/DetailsScreenDos";
// import { CategoriesProvider } from "./Navigation/Screens/CategoryContext";

const Stack = createStackNavigator<RootStackParamList>();

//Declaración de las pantallas
export type RootStackParamList = {
  Login: undefined;
  UserScreen: undefined;
  HomeScreen: undefined;
  GroupScreen: undefined;
  ForoScreen: undefined;
  LibraryScreen: undefined;
  CategoryScreen: undefined;
  SettingsScreen: undefined;
  ContactScreen: undefined;
  NoticeScreen: undefined;
  EsportsScreen: undefined;
  DetailsScreen: ProductDetailsParams;
  DetailsScreenDos: ProductDetailsParamsDos;
  RegisterScreen: undefined;
};

// Componente principal App
const App = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="UserScreen" component={UserScreen} />
            <Stack.Screen name="GroupScreen" component={GroupScreen} />
            <Stack.Screen name="ForoScreen" component={ForoScreen} />
            <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
            <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
            <Stack.Screen name="ContactScreen" component={ContactScreen} />
            <Stack.Screen name="NoticeScreen" component={NoticeScreen} />
            <Stack.Screen name="EsportsScreen" component={EsportsScreen} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            <Stack.Screen name="DetailsScreenDos" component={DetailsScreenDos}/>
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </SafeAreaView>
  );
};

// Estilos para los componentes visuales de la pantalla
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;

// Paulo Esteban Maza Rivera - 20460351
