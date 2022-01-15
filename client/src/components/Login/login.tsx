import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
	const [username, setUserName] = useState('');
	const handleUserChange = (event) => {
		setUserName(event.target.value);
	};

	const [password, setPassword] = useState('');
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	return (
		<div>
			<label>
				<b>Username</b>
			</label>
			<input type="text" onChange={handleUserChange} />

			<label>
				<b>Password</b>
			</label>
			<input type="password" onChange={handlePasswordChange} />

			<Link to="/catalog">Submit Credentials</Link>
		</div>
	);
}

export default Login;
