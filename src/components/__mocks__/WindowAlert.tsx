/**
 * A mock window.alert() that displays a console warning during testing
 * due to the default test environment (jsdom) not implementing window.alert
 *
 * @param alertMessage String alert message
 */
export function WindowAlert(alertMessage: string) {
	console.warn('window.alert("' + alertMessage + '") called');
}

export default WindowAlert;
