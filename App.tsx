import React from "react";
import {
  // DrawerLayoutAndroid,
  // Text,
  StyleSheet,
  // View,
  // Image,
  SafeAreaView,
  // ScrollView,
  // TouchableOpacity,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Navigation/Screens/Login";
import UserScreen from "./Navigation/Screens/UserScreen";
import HomeScreen from "./Navigation/Screens/HomeScreen";
import SettingsScreen from "./Navigation/Screens/SettingsScreen";
import ForoScreen from "./Navigation/Screens/ForoScreen";
import GroupScreen from "./Navigation/Screens/GroupScreen";
import LibraryScreen from "./Navigation/Screens/LibraryScreen";
import CategoryScreen from "./Navigation/Screens/CategoryScreen";
import ContactScreen from "./Navigation/Screens/ContactScreen";
import NoticeScreen from "./Navigation/Screens/Notice";
import EsportsScreen from "./Navigation/Screens/EsportsScreen";

const Stack = createStackNavigator<RootStackParamList>();

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
};

// Componente principal
const App = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.safeArea}>
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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

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

export default App;
