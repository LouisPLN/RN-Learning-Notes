import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

// routes
import { TabRoute } from "@routes";

// components
import useStyles from "./src/utils/DefaultStyles";
import LoginScreen from "./src/screens/LoginScreen";
import {
  getAllNotes,
  getStoredNotes,
  getMyStoredNotes,
  getAllMyNotes,
  getAllTags,
  getStoredTags,
  getMyStoredUserInfo,
} from "./src/services/noteApi";
import { INote } from "utils/interfaces/note";

import { LoginContext, NoteContext, TagContext } from "./src/utils/context";

export default function App() {
  const styles = useStyles();

  const [hideScreen, setHideScreen] = useState(true);
  const [allNotes, setAllNotes] = useState([] as INote[]);
  const [allMyNotes, setAllMyNotes] = useState([] as INote[]);
  const [allTags, setAllTags] = useState([] as string[]);
  const [userName, setUserName] = useState("");

  const getData = async () => {
    const notes = await getAllNotes();
    setAllNotes(notes);
    const myNotes = await getAllMyNotes();
    setAllMyNotes(myNotes);
    const tags = await getAllTags();
    setAllTags(tags);
  };

  const getStoredData = async () => {
    const notes = await getStoredNotes();
    setAllNotes(notes);
    const myNotes = await getMyStoredNotes();
    setAllMyNotes(myNotes);
    const tags = await getStoredTags();
    setAllTags(tags);
    const userInfo = await getMyStoredUserInfo();
    setUserName(userInfo);
    if (userInfo.length !== 0) setHideScreen(false);
  };

  useEffect(() => {
    getStoredData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <LoginContext.Provider value={{ userName, setUserName }}>
      <NoteContext.Provider
        value={{ allNotes, setAllNotes, allMyNotes, setAllMyNotes }}
      >
        <TagContext.Provider value={{ allTags, setAllTags }}>
          <NavigationContainer>
            <SafeAreaView style={styles.all}>
              {hideScreen ? (
                <LoginScreen setHideScreen={setHideScreen} />
              ) : (
                <TabRoute />
              )}
            </SafeAreaView>
          </NavigationContainer>
        </TagContext.Provider>
      </NoteContext.Provider>
    </LoginContext.Provider>
  );
}
