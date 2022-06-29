import { View, Text } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate("Detail")}>Home</Text>
    </View>
  );
};

export default HomeScreen;
