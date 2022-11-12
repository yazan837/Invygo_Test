import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { fireEvent, render, screen } from "@testing-library/react-native";

import Registration from "../src/screens/Registration";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { act, create } from "react-test-renderer";
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.useFakeTimers();

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
  const onSubmitTest = jest.fn(() => null);
  const { getByTestId } = render(
    <Provider store={store}>
      <NavigationContainer>
        <Registration onSubmitTest={onSubmitTest} />
      </NavigationContainer>
    </Provider>
  );

  const button = getByTestId(/submit-test/);

  act(() => fireEvent.press(button));
  it("Fires the assigned event on press", async () => {
    () => expect(onSubmitTest.mock.calls.length).toBe(1);
  });
});
