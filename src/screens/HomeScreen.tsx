import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";

// components
import useStyles from "../utils/DefaultStyles";
import Notes from "../components/Notes";
import { NoteContext } from "../utils/context";
import { INote } from "../utils/interfaces/note";
import DetailsScreen from "./DetailsScreen";
import Filters from "../components/Filters";
import ButtonLogout from "components/ButtonLogout";
import { getAllNotes } from "services/noteApi";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const styles = useStyles();
  const { allNotes, setAllNotes, reloadNote, setReloadNote } =
    useContext(NoteContext);
  const [hideDetailsScreen, setHideDetailsScreen] = useState(false);

  const handleRefresh = async () => {
    const notes = await getAllNotes();
    setAllNotes(notes);
  };

  return (
    <SafeAreaView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.parent}>
          {!hideDetailsScreen ? (
            <Text style={styles.title}>📌 Les notes partagés</Text>
          ) : (
            <Text style={styles.title}>🔍 Détails</Text>
          )}
          <ButtonLogout />
        </View>
        {!hideDetailsScreen && (
          <View style={{ width: "100%" }}>
            <Filters />
            <View style={styles.hr}></View>
          </View>
        )}

        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
          // refreshControl={
          //   <RefreshControl refreshing={reloadNote} onRefresh={handleRefresh} />
          // }
        >
          {!hideDetailsScreen ? (
            <Notes
              setHideDetailsScreen={setHideDetailsScreen}
              notesList={allNotes}
            />
          ) : (
            <DetailsScreen setHideDetailsScreen={setHideDetailsScreen} />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
