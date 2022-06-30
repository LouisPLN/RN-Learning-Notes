import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

// styles
import useStyles from "../utils/DefaultStyles";

// services
import { getAllNotes } from "../services/noteApi";

// utils
import { getDateFormated } from "../utils/GetFormatDate";

// interface
import { INote } from "utils/interfaces/note";

const Notes = ({ notesList }: { notesList: INote[] }) => {
  const styles = useStyles();

  return (
    <View style={styles.notesContainer}>
      {notesList?.reverse().map((note: INote, index: React.Key) => {
        return (
          <View key={index} style={styles.note}>
            <View style={styles.borderColor}></View>
            <View style={styles.content}>
              <Text style={styles.noteTitle}>{note.title}</Text>
              <View style={styles.hr}></View>
              {/* <Text key={index} style={styles.noteTags}>
                      #{note?.tags}
                    </Text> */}
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
              <Text style={styles.noteCreated}>
                {getDateFormated(note.creation_date)}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Notes;
