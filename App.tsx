import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

// routes
import { TabRoute } from "@routes";

// components
import useStyles from "./src/utils/DefaultStyles";
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  const styles = useStyles();

  const [hideScreen, setHideScreen] = useState(true);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.all}>
        {hideScreen ? (
          <LoginScreen setHideScreen={setHideScreen} />
        ) : (
          <TabRoute />
        )}
      </SafeAreaView>
    </NavigationContainer>
  );
}
