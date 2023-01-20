import Login from '../components/Login';
import Signup from '../components/Signup';
import { useState } from 'react';

function LoginPage() {
	return (
		<div id="login">
			<Login />
			<Signup />
		</div>
	);
}

export default LoginPage;
