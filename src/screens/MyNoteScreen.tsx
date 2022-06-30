import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useContext } from "react";

// components
import useStyles from "../utils/DefaultStyles";

// components
import Notes from "../components/Notes";
import { INote } from "utils/interfaces/note";
import { NoteContext } from "../utils/context";

const MyNoteScreen = () => {
  const styles = useStyles();
  const { allMyNotes } = useContext(NoteContext);

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
          <Notes notesList={allMyNotes} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MyNoteScreen;
