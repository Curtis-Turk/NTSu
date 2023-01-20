import Login from '../components/Login';
import Signup from '../components/Signup';
import { useState } from 'react';

function LoginPage() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<div id="login">
			<Login setIsLoggedIn={setIsLoggedIn} />
			<Signup setIsLoggedIn={setIsLoggedIn} />
		</div>
	);
}

export default LoginPage;
