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
		<div>
			<div className="logindiv">
				<label className="loginLabel">
					<b>Login</b>
				</label>
			</div>

			<div className="logindiv">
				<label>Username</label>
				<input type="text" onChange={handleUserChange} />
			</div>

			<div className="logindiv">
				<label>Password</label>
				<input type="password" onChange={handlePasswordChange} />
			</div>

			<div className="logindiv">
				<Link to="/catalog">Submit</Link>
			</div>
		</div>
	);
}

export default Login;
