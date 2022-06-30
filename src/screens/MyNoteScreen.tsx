import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useContext, useState } from "react";

// components
import useStyles from "../utils/DefaultStyles";
import DetailsScreen from "./DetailsScreen";
import Notes from "../components/Notes";
import { INote } from "utils/interfaces/note";
import { NoteContext } from "../utils/context";

const MyNoteScreen = () => {
  const styles = useStyles();
  const { allMyNotes } = useContext(NoteContext);
  const [currentNote, setCurrentNote] = useState({} as INote);
  const [hideScreen, setHideScreen] = useState(false);

  return (
    <SafeAreaView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.parent}>
          {!hideScreen ? (
            <Text style={styles.title}>🙋‍♂️ Mes notes</Text>
          ) : (
            <Text style={styles.title}>🔍 Détails</Text>
          )}
        </View>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          {!hideScreen ? (
            <Notes
              setCurrentNote={setCurrentNote}
              setHideScreen={setHideScreen}
              notesList={allMyNotes}
            />
          ) : (
            <DetailsScreen
              setHideScreen={setHideScreen}
              note={currentNote}
              setCurrentNote={setCurrentNote}
            />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MyNoteScreen;
