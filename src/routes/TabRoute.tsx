import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// components
import { HomeScreen, MyNoteScreen, NewNoteScreen } from "../screens";
import { Entypo, Ionicons } from "@expo/vector-icons";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

const TabRoute = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#fff",
          borderRadius: 10,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: () => <Entypo name="list" size={30} />,
        }}
      />
      <Tab.Screen
        name="NewNoteScreen"
        component={NewNoteScreen}
        options={{
          tabBarIcon: () => <Entypo name="plus" size={30} />,
        }}
      />
      <Tab.Screen
        name="MyNoteScreen"
        component={MyNoteScreen}
        options={{
          tabBarIcon: () => <Ionicons name="person-sharp" size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoute;
