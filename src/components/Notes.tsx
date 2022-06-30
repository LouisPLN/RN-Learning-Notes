import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

// styles
import useStyles from "../utils/DefaultStyles";

// services
import { getAllNotes } from "../services/noteApi";

import Detail from "./Detail";

// utils
import { getDateFormated } from "../utils/GetFormatDate";

// interface
import { INote } from "utils/interfaces/note";

// screen
import DetailsScreen from "../screens/DetailsScreen";

const Notes = ({
  notesList,
  setHideScreen,
  setCurrentNote,
}: {
  notesList: INote[];
  setHideScreen: any;
  setCurrentNote: any;
}) => {
  const styles = useStyles();

  return (
    <View style={styles.notesContainer}>
      {notesList?.reverse().map((note: INote, index: React.Key) => {
        return (
          <View key={index} style={styles.note}>
            <View style={styles.borderColor}></View>
            <View style={styles.content}>
              <View style={styles.parentDetail}>
                <Text style={styles.noteTitle}>{note.title}</Text>
                <Detail
                  currentNote={note}
                  setCurrentNote={setCurrentNote}
                  setHideScreen={setHideScreen}
                />
              </View>
              <View style={styles.hr}></View>
              <View style={styles.tagsParent}>
                {note?.tags?.map((tag: string, index: React.Key) => {
                  return (
                    <Text key={index} style={styles.noteTags}>
                      #{tag}{" "}
                    </Text>
                  );
                })}
              </View>
              <Text style={styles.noteText}>{note.text}</Text>
              <View style={styles.parentDetail}>
                <Text style={styles.noteAuthor}>
                  par {note.author !== "" ? note.author : "Anonyme"}
                </Text>
                <Text style={styles.noteCreated}>
                  {getDateFormated(note.creation_date)}
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Notes;
