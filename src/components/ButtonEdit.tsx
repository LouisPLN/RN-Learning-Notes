import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// components

const ButtonEdit = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("NewNoteScreen")}
      style={{
        zIndex: 99,
        position: "absolute",
        top: 20,
        right: 10,
        height: 20,
        width: 20,
      }}
    >
      <FontAwesome5 name="pen" size={15} color="white" />
    </TouchableOpacity>
  );
};

export default ButtonEdit;
