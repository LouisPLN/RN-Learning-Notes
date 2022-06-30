import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect, useContext } from "react";
// components
import useStyles from "../utils/DefaultStyles";
import Notes from "../components/Notes";
import { NoteContext } from "../utils/context";

const HomeScreen = () => {
  const styles = useStyles();
  const { allNotes } = useContext(NoteContext);

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
          <Notes notesList={allNotes} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
