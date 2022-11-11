import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import React from "react";
import Details from "../src/screens/Details";

describe("Testing Details screen", () => {
  test("screen contains information about selected user", async () => {
    const component = (
      <NavigationContainer>
        <Details />
      </NavigationContainer>
    );

    render(component);
  });
});
