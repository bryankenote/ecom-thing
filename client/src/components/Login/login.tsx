import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

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
			<div className={styles.login}>
				<label className={styles.logintitle}>
					<b>Login</b>
				</label>
			</div>

			<div className={styles.input}>
				<label>Username</label>
				<input type="text" onChange={handleUserChange} />
			</div>

			<div className={styles.input}>
				<label>Password</label>
				<input type="password" onChange={handlePasswordChange} />
			</div>

			<div className={styles.input}>
				<Link to="/catalog">Submit</Link>
			</div>
		</div>
	);
}

export default Login;
