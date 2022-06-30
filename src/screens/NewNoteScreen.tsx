import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";

// components
import NewNote from "../components/NewNote";

// style
import useStyles from "../utils/DefaultStyles";

const NewNoteScreen = () => {
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.parent}>
          <Text style={styles.title}>🖍 Créer une note</Text>
        </View>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <NewNote />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NewNoteScreen;
