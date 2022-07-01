import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { Feather } from "@expo/vector-icons";

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
          <TouchableOpacity style={{ position: "absolute", right: 0 }}>
            <Feather name="power" size={25} color="white" />
          </TouchableOpacity>
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
