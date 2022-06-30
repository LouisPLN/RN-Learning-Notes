import { View, TextInput, ScrollView } from "react-native";
import React from "react";

//components
import Button from "./Button";

// style
import useStyles from "../utils/DefaultStyles";

const NewNote = () => {
  const styles = useStyles();

  return (
    <View style={styles.createNoteContainer}>
      <TextInput
        style={styles.input}
        placeholder="Titre de votre note"
        placeholderTextColor="#909090"
      />
      <TextInput
        style={styles.input}
        placeholder="Mots clés de votre note"
        placeholderTextColor="#909090"
      />
      <TextInput
        style={styles.inputText}
        multiline={true}
        placeholder="Rédiger ma note"
        placeholderTextColor="#909090"
      />
      <Button>Créer ma note</Button>
    </View>
  );
};

export default NewNote;
