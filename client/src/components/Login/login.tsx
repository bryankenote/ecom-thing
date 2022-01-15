import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
	const [username, setUserName] = useState<string>('');
	const handleUserChange = (event) => {
		setUserName(event.target.value);
	};

	const [password, setPassword] = useState<string>('');
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	return (
		<div className="login">
			<label>
				<b>Login</b>
			</label>

			<label>Username</label>
			<input type="text" onChange={handleUserChange} />

			<label>Password</label>
			<input type="password" onChange={handlePasswordChange} />

			<Link to="/catalog">Submit</Link>
		</div>
	);
}

export default Login;
