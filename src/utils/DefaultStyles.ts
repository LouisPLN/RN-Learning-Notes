import { StyleSheet } from "react-native";
import React from "react";

const useStyles = () => {
  const styles = StyleSheet.create({

    all : {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flex:1,
      backgroundColor: "#101010",
    },

    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: '95%',
      paddingVertical: 20,
    },

    parent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      width: '100%',
      paddingVertical: 20,
      borderBottomWidth: 1,
      borderBottomColor: "#505050",
    },

    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: "#fff",
    },

    notesContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: '100%',
      paddingTop: 20,
      paddingBottom: 100,
    },

    note: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: '100%',
      marginVertical: 5,
      borderRadius: 5,
      backgroundColor: '#505050'
    },

    borderColor: {
      height: '100%',
      width: 6,
      borderRadius: 20,
      backgroundColor: '#F8CB2E',
    },

    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'flex-start',
      paddingVertical: 10,
      width: '90%',
      marginLeft: 10,
    },

    noteTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 5,
    },

    hr: {
      width: '100%',
      height: 1,
      marginVertical:5,
      backgroundColor: '#808080'
    },

    tagsParent : {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignContent: 'center',
    },

    noteTags: {
      fontSize: 14,
      color: '#99FEFF',
      marginBottom: 5,
    },

    noteText: {
      fontSize: 16,
      color: '#fff',
    }
  });

  return styles;
};

export default useStyles;
