import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
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
import { NoteContext } from "utils/context";

const DetailsScreen = ({
  setHideDetailsScreen,
}: {
  setHideDetailsScreen: any;
}) => {
  const styles = useStyles();
  const { currentNote } = useContext(NoteContext);

  return (
    <View>
      <View style={styles.goBackContainer}>
        <MaterialIcons name="keyboard-arrow-left" size={20} color="white" />
        <Text style={styles.goBack} onPress={() => setHideDetailsScreen(false)}>
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
          <ButtonEdit
            currentNote={currentNote}
            setHideDetailsScreen={setHideDetailsScreen}
          />
          {currentNote?.image && (
            <Image
              style={styles.detailImage}
              source={{ uri: currentNote?.image }}
            />
          )}
          <Text style={styles.detailTitle}>{currentNote.title}</Text>
          <View style={styles.hr}></View>
          <View style={styles.tagsParent}>
            {currentNote?.tags?.map((tag: string, index: React.Key) => {
              return (
                <Text key={index} style={styles.detailTags}>
                  #{tag}{" "}
                </Text>
              );
            })}
          </View>
          <Text style={styles.detailText}>{currentNote.text}</Text>
          <View style={styles.parentDetail}>
            <Text style={styles.detailAuthor}>
              par {currentNote.author !== "" ? currentNote.author : "Anonyme"}
            </Text>
            <Text style={styles.detailDate}>
              {getDateFormated(currentNote.creation_date)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;
