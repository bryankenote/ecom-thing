import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LocalizationContext } from '../../../localization';
import style from './style.module.css';

function Login() {
	const strings = useContext(LocalizationContext);

	const [username, setUserName] = useState<string>('');
	const handleUserChange: React.ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		setUserName(event.target.value);
	};

	const [password, setPassword] = useState<string>('');
	const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		setPassword(event.target.value);
	};

	return (
		<div className={style.Login}>
			<label className={style.loginTitle}>{strings.login}</label>

			<label>{strings.username}</label>
			<input type="text" onChange={handleUserChange} />

			<label>{strings.password}</label>
			<input type="password" onChange={handlePasswordChange} />

			<Link
				className={`${style.input} ${
					!username || !password ? style.disabled : ''
				}`}
				to="/catalog"
			>
				{strings.submit}
			</Link>
		</div>
	);
}

export default Login;
