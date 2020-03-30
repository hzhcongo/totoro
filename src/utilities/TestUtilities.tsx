import { ReactElement } from "react";
import renderer, { ReactTestRenderer } from "react-test-renderer";
import WindowAlert from "components/__mocks__/WindowAlert";

let spyWindowAlert: jest.SpyInstance;
let spyError: jest.SpyInstance;
let spyWarn: jest.SpyInstance;

/**
 * This function is to be added before all tests
 */
export function setupTestEnvironment(): void {
  spyWindowAlert = jest.spyOn(window, "alert");
  spyError = jest.spyOn(console, "error");
  spyWarn = jest.spyOn(console, "warn");

  spyWindowAlert.mockImplementation(WindowAlert);
}

/**
 * This function is to be added after all tests
 */
export function tearDownTestEnvironment(): void {
  spyWindowAlert.mockRestore();
  spyError.mockRestore();
  spyWarn.mockRestore();
}

export function createRenderer(element: ReactElement): ReactTestRenderer {
  let testRenderer: ReactTestRenderer = null as any;

  renderer.act(() => {
    testRenderer = renderer.create(element);
  });

  return testRenderer;
}
