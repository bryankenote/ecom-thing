import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LocalizationContext } from '../localization';
import style from './style.module.css';

function TopBar() {
	const strings = useContext(LocalizationContext);
	return (
		<div className={style.TopContainer}>
			<Link to="/catalog">{strings.catalog}</Link>
			<Link to="/checkout">{strings.checkout}</Link>
		</div>
	);
}

export default TopBar;
