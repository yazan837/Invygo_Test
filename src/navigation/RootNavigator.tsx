import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Registration from "../screens/Registration";
import Search from "../screens/SearchList";
import Report from "../screens/Report";
import Details from "../screens/Details";
type NavigationType = {
  Registration: { name: string };
  SearchList: undefined;
  Report: undefined;
};
const RootStack = createStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name={"Search Screen"} component={Search} />
        <RootStack.Screen name={"Details Screen"} component={Details} />
        <RootStack.Screen
          name={"Registration Screen"}
          component={Registration}
        />
        <RootStack.Screen name={"Report Screen"} component={Report} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
