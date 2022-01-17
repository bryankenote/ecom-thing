import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { LocalizationContext } from '../../localization';

interface ILocationState {
	item: {
		title: string;
		img: string;
		price: number;
	};
}

function Product() {
	const strings = useContext(LocalizationContext);
	const location = useLocation();
	const { item } = location.state as ILocationState;
	return (
		<div>
			<h2>{item.title}</h2>
			<img src={item.img} alt="" />
			<h3>
				{strings.price}: {item.price}
			</h3>
		</div>
	);
}

export default Product;
