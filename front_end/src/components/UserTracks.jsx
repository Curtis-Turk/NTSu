import { useState } from 'react';
import { useEffect } from 'react';
import fetchUserTracks from '../api/fetchUserTracks';
import Tracklist from './Tracklist';

function UserTracks({ user }) {
	const [userTracks, setUserTracks] = useState([]);

	useEffect(() => {
		if (user.username) {
			fetchUserTracks(user).then((data) => {
				console.log('fetching tracks', data);
				setUserTracks(data);
				console.log(data);
			});
		}
	}, [user]);

	return <Tracklist tracks={userTracks} />;
}

export default UserTracks;
