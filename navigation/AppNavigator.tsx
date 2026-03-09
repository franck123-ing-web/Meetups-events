import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EventListScreen from "../screens/EventListScreen";
import EventDetailScreen from "../screens/EventDetailScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Events"
          component={EventListScreen}
          options={{ title: "Meetups Events" }}
        />
        <Stack.Screen
          name="EventDetail"
          component={EventDetailScreen}
          options={{ title: "Détails de l'événement" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}