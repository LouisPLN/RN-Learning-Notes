import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

// components
import Button from "./Button";
import { INote } from "utils/interfaces/note";

const ButtonDetail = ({
  setHideScreen,
  currentNote,
  setCurrentNote,
}: {
  setHideScreen: any;
  currentNote: INote;
  setCurrentNote: any;
}) => {
  const handlePress = () => {
    setHideScreen(true);
    setCurrentNote(currentNote);
  };
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Entypo name="dots-three-horizontal" size={15} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonDetail;
