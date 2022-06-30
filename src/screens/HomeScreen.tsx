import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

// components
import useStyles from "../utils/DefaultStyles";
import Notes from "../components/Notes";

const HomeScreen = () => {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.all}>
      <View style={styles.container}>
        <View style={styles.parent}>
          <Text style={styles.title}>📌 Les notes partagés</Text>
        </View>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <Notes />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
