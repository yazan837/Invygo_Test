import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";

import Registration from "../src/screens/Registration";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";

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
});
