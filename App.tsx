import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

// routes
import { TabRoute } from "./src/routes";

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
import { INote } from "./src/utils/interfaces/note";

import { LoginContext, NoteContext, TagContext } from "./src/utils/context";

export default function App() {
  const styles = useStyles();

  const [hideLoginScreen, setHideLoginScreen] = useState(true);
  const [allNotes, setAllNotes] = useState([] as INote[]);
  const [allMyNotes, setAllMyNotes] = useState([] as INote[]);
  const [allTags, setAllTags] = useState([] as string[]);
  const [userName, setUserName] = useState("");
  const [currentNote, setCurrentNote] = useState({} as INote);
  const [reloadNote, setReloadNote] = useState(false);

  const getData = async () => {
    const notes = await getAllNotes();
    setAllNotes(notes);
    const myNotes = await getAllMyNotes(userName);
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
    if (userInfo.length !== 0) setHideLoginScreen(false);
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

  useEffect(() => {
    getData();
  }, [reloadNote]);

  return (
    <LoginContext.Provider
      value={{ userName, setUserName, hideLoginScreen, setHideLoginScreen }}
    >
      <NoteContext.Provider
        value={{
          allNotes,
          setAllNotes,
          allMyNotes,
          setAllMyNotes,
          currentNote,
          setCurrentNote,
          reloadNote,
          setReloadNote,
        }}
      >
        <TagContext.Provider value={{ allTags, setAllTags }}>
          <NavigationContainer>
            <SafeAreaView style={styles.all}>
              {hideLoginScreen ? <LoginScreen /> : <TabRoute />}
            </SafeAreaView>
          </NavigationContainer>
        </TagContext.Provider>
      </NoteContext.Provider>
    </LoginContext.Provider>
  );
}
