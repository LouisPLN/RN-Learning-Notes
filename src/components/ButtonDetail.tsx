import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Entypo } from "@expo/vector-icons";

// components
import { INote } from "../utils/interfaces/note";
import { NoteContext } from "utils/context";

const ButtonDetail = ({
  setHideDetailsScreen,
  currentNote,
}: {
  setHideDetailsScreen: any;
  currentNote: INote;
}) => {
  const { setCurrentNote } = useContext(NoteContext);
  const handlePress = () => {
    setHideDetailsScreen(true);
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
