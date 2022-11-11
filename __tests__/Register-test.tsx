import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";

import Registration from "../src/screens/Registration";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { create } from "react-test-renderer";

describe("Testing Registration screen", () => {
  test("screen contains a registration form ", async () => {
    const component = (
      <Provider store={store}>
        <NavigationContainer>
          <Registration />
        </NavigationContainer>
      </Provider>
    );

    render(component);
  });
  const tree = create(
    <Provider store={store}>
      <NavigationContainer>
        <Registration />
      </NavigationContainer>
    </Provider>
  );
  test("test Registration page ui", () => {
    expect(tree).toMatchSnapshot();
  });
});
