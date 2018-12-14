import { Permissions, Notifications } from "expo";
// import axios from "axios";

// const PUSH_ENDPOINT = "http://localhost:3000/";

export default async function registerForPushNotificationsAsync() {
	const { status: existingStatus } = await Permissions.getAsync(
		Permissions.NOTIFICATIONS
	);
	let finalStatus = existingStatus;

	// only ask if permissions have not already been determined, because
	// iOS won't necessarily prompt the user a second time.
	if (existingStatus !== "granted") {
		// Android remote notification permissions are granted during the app
		// install, so this will only ask on iOS
		const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
		finalStatus = status;
	}

	// Stop here if the user did not grant permissions
	if (finalStatus !== "granted") {
		return;
	}

	// Get the token that uniquely identifies this device
	let token = await Notifications.getExpoPushTokenAsync();
	return token;
	// POST the token to your backend server from where you can retrieve it to send push notifications.
	/* return fetch(PUSH_ENDPOINT, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			token: {
				value: token
			},
			user: {
				username: "Brent"
			}
		})
	});
	axios
		.post("http://localhost:3000/", JSON.stringify(token))
		.then(response => {
			console.log("token de notif enregistré");
		})
		.catch(err); */
}
