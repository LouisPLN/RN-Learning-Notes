import { View, Text, SafeAreaView } from "react-native";
import React from "react";

// components
import useStyles from "../utils/DefaultStyles";

const MyNoteScreen = () => {
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.parent}>
          <Text style={styles.title}>🙋‍♂️ Mes notes</Text>
        </View>
        <View style={styles.notesContainer}>
          <View style={styles.note}>
            <View style={styles.borderColor}></View>
            <Text style={styles.noteText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              qui!
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyNoteScreen;
