import React from 'react';
import UserTracks from '../components/UserTracks';
import { useContext } from 'react';
import { UserContext } from '../App';

function UserPage() {
	const { user } = useContext(UserContext);

	return (
		<div id="user">
			<UserTracks user={user} />
		</div>
	);
}

export default UserPage;
