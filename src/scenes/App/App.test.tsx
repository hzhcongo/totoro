import React from 'react';
import App from './App';
import { ReactTestRenderer } from 'react-test-renderer';
import {
  createRenderer,
  setupTestEnvironment,
  tearDownTestEnvironment
} from "../../utilities/TestUtilities"

beforeAll(() => {
  setupTestEnvironment();
})

afterAll(() => {
  tearDownTestEnvironment();
})

describe("Snapshots", () => {
  test("Initial render", () => {
    let testRenderer: ReactTestRenderer = createRenderer(<App />);
    expect(testRenderer.root).toMatchSnapshot();
  });
})

describe("Functional", () => {

  test("Train button clicked", () => {
    let testRenderer: ReactTestRenderer = createRenderer(<App />);

    const inst = testRenderer.root;
    const button = inst.findByProps({ id: "takesATrainBtn" });
    button.props.onClick();
    expect(window.alert).toBeCalledWith("takesATrain");
  });

  test("House button clicked", () => {
    let testRenderer: ReactTestRenderer = createRenderer(<App />);

    const inst = testRenderer.root;
    const button = inst.findByProps({ id: "findsAHouseBtn" });
    button.props.onClick();
    expect(window.alert).toBeCalledWith("takesATrain");
  });
})