import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// components
import { HomeScreen } from "@screens";

const Stack = createNativeStackNavigator();

const NoteStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default NoteStack;
