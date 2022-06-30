import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";

// components
import useStyles from "../utils/DefaultStyles";
import Notes from "../components/Notes";
import { getAllNotes, getStoredNotes } from "../services/noteApi";
import { INote } from "utils/interfaces/note";

const HomeScreen = () => {
  const styles = useStyles();
  const [notesList, setNotesList] = useState([] as INote[]);

  const getData = async () => {
    const data = await getAllNotes();
    setNotesList(data);
  };

  const getStoredData = async () => {
    const data = await getStoredNotes();
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
          <Text style={styles.title}>📌 Les notes partagés</Text>
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

export default HomeScreen;
