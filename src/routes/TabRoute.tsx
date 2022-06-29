import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// components
import { HomeScreen, MyNoteScreen, NewNoteScreen } from "@screens";
import { Entypo, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabRoute = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
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
          borderRadius: 15,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Entypo name="list" size={30} />,
        }}
      />
      <Tab.Screen
        name="NewNoteScreen"
        component={NewNoteScreen}
        options={{
          tabBarIcon: () => <Entypo name="plus" size={30} color="black" />,
        }}
      />
      <Tab.Screen
        name="MyNoteScreen"
        component={MyNoteScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person-sharp" size={30} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoute;
