import { useState } from 'react';
import { useEffect } from 'react';
import fetchUserTracks from '../api/fetchUserTracks';
import Tracklist from './Tracklist';

function UserTracks({ user }) {
	const [userTracks, setUserTracks] = useState([]);

	useEffect(() => {
		if (user.username) {
			console.log(user);
			fetchUserTracks(user).then((data) => {
				setUserTracks(data);
			});
		}
	}, [user]);

	return <Tracklist tracks={userTracks} />;
}

export default UserTracks;
