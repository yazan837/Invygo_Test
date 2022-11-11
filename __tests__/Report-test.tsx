import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";

import Report from "../src/screens/Report";
import { create } from "react-test-renderer";

describe("Testing Report Screen", () => {
  test("screen contains useful reports regarding the event ", async () => {
    const component = (
      <NavigationContainer>
        <Report />
      </NavigationContainer>
    );
    render(component);
  });
  const tree = create(
    <NavigationContainer>
      <Report />
    </NavigationContainer>
  );
  test("test Report page ui", () => {
    expect(tree).toMatchSnapshot();
  });
});
