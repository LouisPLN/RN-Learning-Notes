import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";

// components
import UpdateNote from "../components/forms/UpdateNote";

// style
import useStyles from "../utils/DefaultStyles";
import ButtonLogout from "../components/ButtonLogout";
import { NoteContext } from "utils/context";

const UpdateNoteScreen = ({ route }: { route: any }) => {
  const styles = useStyles();

  const { currentNote } = useContext(NoteContext);

  return (
    <SafeAreaView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.parent}>
          <Text style={styles.title}>🖍 Modifier {currentNote.title}</Text>
          <ButtonLogout />
        </View>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <UpdateNote />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default UpdateNoteScreen;
