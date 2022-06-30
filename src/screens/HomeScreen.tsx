import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

// components
import useStyles from "../utils/DefaultStyles";

// services
import { getAllNotes, updateNoteById, postNote } from "../services/noteApi";

// interface
import { INote } from "utils/interfaces/note";

const HomeScreen = () => {
  const styles = useStyles();

  // constants
  const [notesList, setNotesList] = useState([]);

  // functions
  const getNotes = async () => {
    const allNotes = await getAllNotes();
    setNotesList(allNotes);
  };

  // initialization
  useEffect(() => {
    getNotes();
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
          <View style={styles.notesContainer}>
            {notesList?.map((note: INote, index: React.Key) => {
              return (
                <View key={index} style={styles.note}>
                  <View style={styles.borderColor}></View>
                  <View style={styles.content}>
                    <Text style={styles.noteTitle}>{note.title}</Text>
                    <View style={styles.hr}></View>
                    {/* <Text key={index} style={styles.noteTags}>
                      #{note?.tags}
                    </Text> */}
                    {note?.tags?.map((tag: string, index: React.Key) => {
                      return (
                        <View style={styles.tagsParent}>
                          <Text key={index} style={styles.noteTags}>
                            #{tag}
                          </Text>
                        </View>
                      );
                    })}
                    <Text style={styles.noteText}>{note.text}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
