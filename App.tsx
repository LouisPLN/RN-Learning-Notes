import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// routes
import { TabRoute } from "@routes";

// components
import useStyles from "./src/utils/DefaultStyles";

export default function App() {
  const styles = useStyles();

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.all}>
        <TabRoute />
      </SafeAreaView>
    </NavigationContainer>
  );
}
