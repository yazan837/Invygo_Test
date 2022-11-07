import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { LoginScreen } from "../screens/LogIn";
const RootStack = createStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name={"LoginScreen"} component={LoginScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
