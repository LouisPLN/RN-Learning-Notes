import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Entypo } from "@expo/vector-icons";

import { deleteNoteById } from "../services/noteApi";
import { NoteContext } from "../utils/context";
import { INote } from "../utils/interfaces/note";

// components

const ButtonDelete = ({ noteId }: { noteId: string }) => {
  const { allMyNotes, setAllMyNotes } = useContext(NoteContext);
  const handlePress = () => {
    const newList = allMyNotes.filter(
      (note: Partial<INote>) => note._id !== noteId
    );
    setAllMyNotes(newList);
    deleteNoteById(noteId);
  };
  return (
    <View>
      <TouchableOpacity onPress={handlePress} style={{ marginLeft: 5 }}>
        <Entypo name="cross" size={15} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonDelete;
