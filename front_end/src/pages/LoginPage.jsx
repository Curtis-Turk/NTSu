import Login from '../components/Login';
import Signup from '../components/Signup';
import { useState } from 'react';

function LoginPage() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({});

	return (
		<div id="login">
			<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
			<Signup setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
		</div>
	);
}

export default LoginPage;
