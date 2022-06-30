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

    button: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: '100%',
      height: 60,
      marginTop: 5,
      borderRadius: 10,
      backgroundColor: '#EF2F88',
    },

    textButton: {
      fontSize: 16,
      color: '#fff',
    },

       // ALL NOTES SCREEN

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
      marginVertical:10,
      backgroundColor: '#808080'
    },

    tagsParent : {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 10,
    },

    noteTags: {
      fontSize: 14,
      color: '#99FEFF',
    },

    noteText: {
      fontSize: 16,
      color: '#fff',
      marginBottom: 15,
    },

    parentDetail : {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },

    noteAuthor: {
      fontSize: 12,
      color: "#fff",
    },

    noteCreated: {
      fontSize: 10,
      fontStyle: 'italic',
      color: "#fff",
    },

    // NEW NOTE SCREEN

    createNoteContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: '100%',
      paddingTop: 20,
      paddingBottom: 100,
    },

    input: {
      width: '100%',
      height: 60,
      paddingHorizontal: 14,
      marginVertical: 5,
      borderRadius: 5,
      color: '#fff',
      backgroundColor: '#505050',
    },

    inputText: {
      width: '100%',
      height: 130,
      paddingHorizontal: 14,
      paddingTop: 18,
      paddingBottom: 18,
      marginVertical: 5,
      borderRadius: 5,
      color: '#fff',
      backgroundColor: '#505050',
    },

    // LOGIN SCREEN

    inputLogin: {
      width: '100%',
      height: 60,
      paddingHorizontal: 14,
      marginTop: 20,
      marginBottom: 5,
      borderRadius: 5,
      color: '#fff',
      backgroundColor: '#505050',
    },

    textLogin: {
      marginTop: 20,
      textAlign: 'center',
      color: "#fff",
      fontSize: 16,
    },

    // NEW NOTE

    goBackContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      width: '100%',
      paddingVertical: 20,
      borderBottomWidth: 1,
      borderBottomColor: "#505050",
    },

    goBack: {
      color: "#fff",
      fontSize: 16,
    },

    // DETAIL SCREEN

    noteDetailContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "flex-start",
      width: '100%',
    },

    detailImage: {
      width: '100%',
    },

    detailTitle: {
      marginVertical: 20,
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: "center",
      color: '#fff',
    },

    detailText: {
      marginVertical: 20,
      fontSize: 18,
      textAlign: "left",
      color: '#fff',
    },

    detailTags: {
      fontSize: 18,
      color: '#99FEFF',
    },

    detailAuthor: {
      fontSize: 16,
      textAlign: "left",
      color: '#fff',
    },

    detailDate: {
      fontSize: 16,
      textAlign: "right",
      fontStyle: 'italic',
      color: '#fff',
    },
  });

  return styles;
};

export default useStyles;
