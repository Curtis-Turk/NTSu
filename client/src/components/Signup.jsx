import { useState } from 'react';

function Signup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [signupMessage, setSignupMessage] = useState('');

	const signupUser = async (e) => {
		e.preventDefault();

		const response = await fetch('http://localhost:3001/user/signup', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: { 'Content-Type': 'application/json' },
		}).then((response) => {
			return response.json();
		});
		setSignupMessage(response.message);
	};

	return (
		<form onSubmit={signupUser}>
			<h3>Signup</h3>
			{signupMessage ? <h4> {signupMessage} </h4> : null}
			<label htmlFor="email">Email</label>
			<input
				type="email"
				id="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label htmlFor="password">Password</label>
			<input
				type="password"
				id="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button type="submit">Signup</button>
		</form>
	);
}

export default Signup;
