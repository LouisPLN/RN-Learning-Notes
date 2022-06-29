import { View, Text, SafeAreaView } from "react-native";
import React from "react";

// components
import useStyles from "../utils/DefaultStyles";

const NewNoteScreen = () => {
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.parent}>
          <Text style={styles.title}>🖍 Créer une note</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewNoteScreen;
