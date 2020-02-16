/**
 * A mock window.alert() that displays a console warning during testing
 * due to the default test environment (jsdom) not implementing window.alert
 *
 * @param alertMessage String alert message
 */
// TODO: CONFIGURE A BETTER TEST ENVIRONMENT?
// TODO: DO UP A BETTER MOCK ALERT COMPONENT?
export function WindowAlert(alertMessage: string) {
	console.warn('window.alert("' + alertMessage + '") called');
}

export default WindowAlert;
