import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// components
import { NewsScreen, UserNoteScreen } from "@screens";

const TabRoute = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Fil d'actualités">
        <Tab.Screen name="Fil d'actualités" component={NewsScreen} />
        <Tab.Screen name="Mes notes" component={UserNoteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabRoute;
