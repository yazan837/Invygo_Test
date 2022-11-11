import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import React from "react";
import { create } from "react-test-renderer";
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
  const tree = create(
    <NavigationContainer>
      <Details />
    </NavigationContainer>
  );
  test("test Details page ui", () => {
    expect(tree).toMatchSnapshot();
  });
});
