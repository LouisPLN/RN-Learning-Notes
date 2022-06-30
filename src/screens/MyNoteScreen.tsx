import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";

// components
import useStyles from "../utils/DefaultStyles";
// services
import { getAllNotesByAuthor, getMyStoredNotes } from "../services/noteApi";
// components
import Notes from "../components/Notes";
import { INote } from "utils/interfaces/note";

const MyNoteScreen = () => {
  const styles = useStyles();
  const [notesList, setNotesList] = useState([] as INote[]);

  const getData = async () => {
    const data = await getAllNotesByAuthor();
    setNotesList(data);
  };

  const getStoredData = async () => {
    const data = await getMyStoredNotes();
    setNotesList(data);
  };

  useEffect(() => {
    getStoredData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.parent}>
          <Text style={styles.title}>🙋‍♂️ Mes notes</Text>
        </View>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <Notes notesList={notesList} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MyNoteScreen;
