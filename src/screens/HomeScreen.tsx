import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect, useContext } from "react";
// components
import useStyles from "../utils/DefaultStyles";
import Notes from "../components/Notes";
import { NoteContext } from "../utils/context";
import { getAllNotes, getStoredNotes } from "../services/noteApi";
import { INote } from "utils/interfaces/note";
import DetailsScreen from "./DetailsScreen";


const HomeScreen = () => {
  const styles = useStyles();
  const { allNotes } = useContext(NoteContext);
  const [currentNote, setCurrentNote] = useState({} as INote);
  const [hideScreen, setHideScreen] = useState(false);

  return (
    <SafeAreaView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.parent}>
          {!hideScreen ? (
            <Text style={styles.title}>📌 Les notes partagés</Text>
          ) : (
            <Text style={styles.title}>🔍 Détails</Text>
          )}
        </View>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <Notes notesList={allNotes} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
