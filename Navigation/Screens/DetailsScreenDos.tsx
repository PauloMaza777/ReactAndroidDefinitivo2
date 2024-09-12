import React, { useEffect, useState } from "react";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Esport } from "../model/Esport";

const logo2 = require("../../imagenes/logo2.png"); //Logo

export type Params = {
  esport: Esport;
};

export type Props = {
  route: RouteProp<RootStackParamList, "DetailsScreenDos">;
  navigation: StackNavigationProp<RootStackParamList, "DetailsScreenDos">;
};

function DetailsScreen({ route }: Props): React.JSX.Element {
  const [esport, setEsport] = useState<Esport>();
  useEffect(() => {
    setEsport(route.params.esport);
  }, [route]);

  return (
    <SafeAreaView style={styles.safeArea}>
      {esport && (
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.container}>
            <Image style={styles.logo} source={logo2} />

            <Text style={styles.textInput}>TITULO: {esport.title}</Text>
            <Text style={styles.textInput}>AUTOR: {esport.author}</Text>
            <Text style={styles.textInput}>FECHA: {esport.date}</Text>
            <Text style={styles.textInput}>DESCRIPCIÓN: {esport.description}</Text>
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
});

export default DetailsScreen;
