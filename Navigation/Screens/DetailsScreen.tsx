import React, { useEffect, useState } from "react";
import { Notice } from "../model/Notices";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

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
    <SafeAreaView>
      {notice && (
        <View>
          <Text>{notice.title}</Text>
          <Text>Autor del Tema {notice.author}</Text>
          <Text>{notice.date}</Text>
          <Text>{notice.description}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});

export default DetailsScreen;
