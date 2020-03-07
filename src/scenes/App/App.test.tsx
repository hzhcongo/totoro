import React from "react";
import App from "./App";
import renderer, { ReactTestRenderer } from "react-test-renderer";
import {
  createRenderer,
  setupTestEnvironment,
  tearDownTestEnvironment
} from "../../utilities/TestUtilities";

beforeAll(() => {
  setupTestEnvironment();
});

afterAll(() => {
  tearDownTestEnvironment();
});

describe("Snapshots", () => {
  test("Initial render", () => {
    let testRenderer: ReactTestRenderer = createRenderer(<App />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  test("After train button clicked", () => {
    let testRenderer: ReactTestRenderer = createRenderer(<App />);

    const inst = testRenderer.root;
    const button = inst.findByProps({
      id:"takesATrainBtn",
      variant:"contained",
      color:"primary",
      size:"large"
		});
    renderer.act(() => {
      button.props.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
