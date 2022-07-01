import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect, useContext } from "react";

// components
import useStyles from "../utils/DefaultStyles";
import Notes from "../components/Notes";
import { NoteContext } from "../utils/context";
import { INote } from "../utils/interfaces/note";
import DetailsScreen from "./DetailsScreen";
import Filters from "../components/Filters";

const HomeScreen = ({ navigation }: { navigation: any }) => {
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

          {/* <Text
            style={{ color: "white" }}
            onPress={() => {
              navigation.navigate("DetailScreen", { note });
            }}
          >
            Aller à la page détail
          </Text> */}
        </View>
        {!hideScreen && (
          <View style={{ width: "100%" }}>
            <Filters />
            <View style={styles.hr}></View>
          </View>
        )}

        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          {!hideScreen ? (
            <Notes
              setCurrentNote={setCurrentNote}
              setHideScreen={setHideScreen}
              notesList={allNotes}
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

export default HomeScreen;
