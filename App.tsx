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
import { UserProvider } from "./Navigation/Screens/UserContext";

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
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
