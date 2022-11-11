import { render } from "@testing-library/react-native";
import React from "react";
import { Provider } from "react-redux";
import RootNavigator from "../src/navigation/RootNavigator";
import { store } from "../src/redux/store";

jest.useFakeTimers();

describe("Testing react navigation", () => {
  test("Main Entry point for the application", async () => {
    const component = (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
    render(component);
  });
});
