import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LocalizationContext } from '../../../localization';
import styles from './Login.module.css';

function Login() {
	const strings = useContext(LocalizationContext);

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
				<label className={styles.loginTitle}>
					<b>{strings.login}</b>
				</label>
			</div>

			<div className={styles.input}>
				<label>{strings.username}</label>
				<input type="text" onChange={handleUserChange} />
			</div>

			<div className={styles.input}>
				<label>{strings.password}</label>
				<input type="password" onChange={handlePasswordChange} />
			</div>

			<div
				className={`${styles.input} ${
					!username || !password ? styles.disabled : ''
				}`}
			>
				<Link to="/catalog">{strings.submit}</Link>
			</div>
		</div>
	);
}

export default Login;
