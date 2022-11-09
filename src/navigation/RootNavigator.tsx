import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Registration from "../screens/Registration";

const RootStack = createStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name={"Registration Screen"}
          component={Registration}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
