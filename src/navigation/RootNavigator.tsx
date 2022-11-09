import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Registration from "../screens/Registration";
import SearchList from "../screens/SearchList";
import Report from "../screens/Report";
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
        <RootStack.Screen
          name={"Registration Screen"}
          component={Registration}
        />
        <RootStack.Screen name={"Report Screen"} component={Report} />
        <RootStack.Screen name={"Search Screen"} component={SearchList} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
