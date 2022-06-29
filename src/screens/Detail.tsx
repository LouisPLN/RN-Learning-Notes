import { View, Text } from "react-native";
import React from "react";

const DetailScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate("Detail")}>Detail</Text>
    </View>
  );
};

export default DetailScreen;
