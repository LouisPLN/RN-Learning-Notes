import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { INote } from "../utils/interfaces/note";
import { NoteContext } from "utils/context";

// components

const ButtonEdit = ({
  currentNote,
  setHideDetailsScreen,
}: {
  currentNote: INote;
  setHideDetailsScreen: any;
}) => {
  const navigation = useNavigation();

  const { setCurrentNote } = useContext(NoteContext);

  const handlePress = () => {
    setCurrentNote(currentNote);
    setHideDetailsScreen(false);
    navigation.navigate("UpdateNoteScreen");
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
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
