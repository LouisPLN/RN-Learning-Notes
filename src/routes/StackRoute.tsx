import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// components
import { NoteScreen } from "@screens";

const StackRoute = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Fil d'actualités">
        <Stack.Screen name="Nouvelle note" component={NoteScreen} />
        {/* <Stack.Screen name="Détail" component={DetailScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoute;
