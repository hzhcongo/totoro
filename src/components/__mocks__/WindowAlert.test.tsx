import {
	setupTestEnvironment,
	tearDownTestEnvironment
} from "../../utilities/TestUtilities";

beforeAll(() => {
	setupTestEnvironment();
})

afterAll(() => {
	tearDownTestEnvironment();
})

test("should warn in console", () => {
	window.alert("alert message");
	expect(window.alert).toBeCalledWith("alert message");
	expect(console.warn).toBeCalledWith("window.alert(\"alert message\") called");
});
