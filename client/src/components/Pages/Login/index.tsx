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
		<div>
			<div className={style.login}>
				<label className={style.loginTitle}>
					<b>{strings.login}</b>
				</label>
			</div>

			<div className={style.input}>
				<label>{strings.username}</label>
				<input type="text" onChange={handleUserChange} />
			</div>

			<div className={style.input}>
				<label>{strings.password}</label>
				<input type="password" onChange={handlePasswordChange} />
			</div>

			<div
				className={`${style.input} ${
					!username || !password ? style.disabled : ''
				}`}
			>
				<Link to="/catalog">{strings.submit}</Link>
			</div>
		</div>
	);
}

export default Login;
