import { WindowAlert } from "../../components/__mocks__/WindowAlert";

// TODO: CREATE TEST BOILERPLATE LIKE configureEnvironment()
let spyWindowAlert: jest.SpyInstance;
let spyError: jest.SpyInstance;
let spyWarn: jest.SpyInstance;

beforeAll(() => {
	spyWindowAlert = jest.spyOn(window, "alert");
	spyError = jest.spyOn(console, "error");
	spyWarn = jest.spyOn(console, "warn");

	spyWindowAlert.mockImplementation(WindowAlert);
})

afterAll(() => {
	spyWindowAlert.mockRestore();
	spyError.mockRestore();
	spyWarn.mockRestore();
})

test("should warn in console", () => {
	window.alert("alert message");
	expect(window.alert).toBeCalledWith("alert message");
	expect(console.warn).toBeCalledWith("window.alert(\"alert message\") called");
});
