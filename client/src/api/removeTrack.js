const removeTrack = async (track, user) => {
	if (user.username) {
		return fetch('http://localhost:3001/track/remove', {
			method: 'POST',
			body: JSON.stringify({ track: track, user: user.username }),
			headers: {
				'Content-Type': 'application/json',
				authorization: 'Bearer ' + user.token,
			},
		}).then((response) => response.json());
	}
	return { message: 'User not logged in' };
};

export default removeTrack;
