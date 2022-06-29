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
      paddingVertical: 20,
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
      width: 8,
      borderRadius: 20,
      backgroundColor: '#F8CB2E',
    },

    noteText: {
      fontSize: 16,
      color: '#fff',
      marginLeft: 5,
      paddingVertical: 10,
    }
  });

  return styles;
};

export default useStyles;
