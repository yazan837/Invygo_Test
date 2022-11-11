import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import React from "react";
import { create } from "react-test-renderer";
import Search from "../src/screens/SearchList";

describe("Testing Search Screen", () => {
  test("screen contains a list of all the RSVP'd users", async () => {
    const component = (
      <NavigationContainer>
        <Search />
      </NavigationContainer>
    );

    render(component);
  });
  const tree = create(
    <NavigationContainer>
      <Search />
    </NavigationContainer>
  );
  test("test Search page ui", () => {
    expect(tree).toMatchSnapshot();
  });
});
