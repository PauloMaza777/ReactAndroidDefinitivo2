import React, { useEffect, useState } from "react";
import { Notice } from "../model/Notices";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from "react-native";

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
  useEffect(() => {
    setNotice(route.params.notice);
  }, [route]);

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
