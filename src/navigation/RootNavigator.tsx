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
  Search: undefined;
  Report: undefined;
  Details: { name: string };
  SearchStack: undefined;
};
const RootStack = createStackNavigator<NavigationType>();
const Drawer = createDrawerNavigator<NavigationType>();
export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Registration" component={Registration} />
        <Drawer.Screen name="SearchStack" component={SearchStack} />
        <Drawer.Screen name="Report" component={Report} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function SearchStack() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: true }}
      />
    </RootStack.Navigator>
  );
}
