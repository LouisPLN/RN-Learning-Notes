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
import { INote } from "../utils/interfaces/note";
import { NoteContext } from "../utils/context";
import ButtonLogout from "../components/ButtonLogout";

const MyNoteScreen = () => {
  const styles = useStyles();
  const { allMyNotes } = useContext(NoteContext);
  const [hideDetailsScreen, setHideDetailsScreen] = useState(false);

  return (
    <SafeAreaView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.parent}>
          {!hideDetailsScreen ? (
            <Text style={styles.title}>🙋‍♂️ Mes notes</Text>
          ) : (
            <Text style={styles.title}>🔍 Détails</Text>
          )}
          <ButtonLogout />
        </View>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          {!hideDetailsScreen ? (
            <Notes
              setHideDetailsScreen={setHideDetailsScreen}
              notesList={allMyNotes}
            />
          ) : (
            <DetailsScreen setHideDetailsScreen={setHideDetailsScreen} />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MyNoteScreen;
