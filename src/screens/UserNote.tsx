import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getAllNotes, updateNoteById, postNote } from "@services/noteApi";
import { INote } from "utils/interfaces/note";

const DetailScreen = ({ navigation }: { navigation: any }) => {
  // constants
  const [notesList, setNotesList] = useState([]);
  // functions
  const getNotes = async () => {
    const allNotes = await getAllNotes();
    setNotesList(allNotes);
  };

  // initialization
  useEffect(() => {
    // getNotes();
  }, []);

  return (
    <View>
      <Text onPress={() => navigation.navigate("Detail")}>Detail</Text>
      {notesList?.map((note: INote, index: React.Key | null | undefined) => {
        return <Text key={index}>{note.title}</Text>;
      })}
    </View>
  );
};

export default DetailScreen;
