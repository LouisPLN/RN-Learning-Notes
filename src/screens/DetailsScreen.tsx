import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

// styles
import useStyles from "../utils/DefaultStyles";

// components
import Button from "../components/Button";
import Notes from "../components/Notes";
import { INote } from "../utils/interfaces/note";
import ButtonEdit from "../components/ButtonEdit";

// utils
import { getDateFormated } from "../utils/GetFormatDate";
import { randomColorTheme } from "../utils/RandomColor";

const DetailsScreen = ({
  setHideScreen,
  note,
  setCurrentNote,
}: {
  setHideScreen: any;
  note: INote;
  setCurrentNote: any;
}) => {
  const styles = useStyles();

  return (
    <View>
      <View style={styles.goBackContainer}>
        <MaterialIcons name="keyboard-arrow-left" size={20} color="white" />
        <Text style={styles.goBack} onPress={() => setHideScreen(false)}>
          Retour
        </Text>
      </View>
      <View style={styles.noteDetailContainer}>
        <View
          style={{
            height: "100%",
            width: 6,
            borderRadius: 20,
            backgroundColor: randomColorTheme(),
          }}
        ></View>
        <View style={styles.noteDetailParent}>
          <ButtonEdit />
          {note?.image && (
            <Image style={styles.detailImage} source={{ uri: note?.image }} />
          )}
          <Text style={styles.detailTitle}>{note.title}</Text>
          <View style={styles.hr}></View>
          <View style={styles.tagsParent}>
            {note?.tags?.map((tag: string, index: React.Key) => {
              return (
                <Text key={index} style={styles.detailTags}>
                  #{tag}{" "}
                </Text>
              );
            })}
          </View>
          <Text style={styles.detailText}>{note.text}</Text>
          <View style={styles.parentDetail}>
            <Text style={styles.detailAuthor}>
              par {note.author !== "" ? note.author : "Anonyme"}
            </Text>
            <Text style={styles.detailDate}>
              {getDateFormated(note.creation_date)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;
