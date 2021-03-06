import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";

// components
import NewNote from "../components/forms/NewNote";

// style
import useStyles from "../utils/DefaultStyles";
import ButtonLogout from "../components/ButtonLogout";

const NewNoteScreen = () => {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.parent}>
          <Text style={styles.title}>🖍 Créer une note</Text>
          <ButtonLogout />
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
