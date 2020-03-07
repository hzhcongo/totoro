import React from "react";
import renderer, { ReactTestRenderer } from "react-test-renderer";
import {
  createRenderer,
  setupTestEnvironment,
  tearDownTestEnvironment
} from "../utilities/TestUtilities";
import { RouterButton } from "./RouterButton";
import { MemoryRouter } from "react-router-dom";

beforeAll(() => {
	setupTestEnvironment();
})

afterAll(() => {
	tearDownTestEnvironment();
})

describe("Snapshots", () => {
	test("Initial render", () => {
    let testRenderer: ReactTestRenderer = createRenderer(
			<MemoryRouter>
				<RouterButton
					id="testRouterBtnId"
					displayText="testDisplayText"
					route="/testRouter"
				/>
			</MemoryRouter>
		);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe("Functional", () => {
  test("Router button clicked", () => {
    let testRenderer: ReactTestRenderer = createRenderer(
			<MemoryRouter>
				<RouterButton
					id="testRouterBtnId"
					displayText="testDisplayText"
					route="/testRouter"
				/>
			</MemoryRouter>
		);

    const inst = testRenderer.root;
    const button = inst.findByProps({
      id:"testRouterBtnId",
      variant:"contained",
      color:"primary",
      size:"large"
		});
    renderer.act(() => {
      button.props.onClick();
		});
		//TODO: ACTUALLY TEST IF BUTTON ROUTES
  });
});
