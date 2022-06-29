import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { StackRoute, TabRoute } from "@routes";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TabRoute />
    </SafeAreaView>
  );
}
