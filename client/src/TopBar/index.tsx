import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { LocalizationContext } from '../localization';
import style from './style.module.css';

const TOP_BAR_PATHS = new Set(['/catalog', '/product', '/checkout']);

function TopBar() {
	const strings = useContext(LocalizationContext);
	const location = useLocation();
	return TOP_BAR_PATHS.has(location.pathname) ? (
		<div className={style.TopContainer}>
			<Link to="/catalog">{strings.catalog}</Link>
			<Link to="/checkout">{strings.checkout}</Link>
		</div>
	) : null;
}

export default TopBar;
