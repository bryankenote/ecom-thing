import React, { useContext } from 'react';
import { LocalizationContext } from '../../../localization';

interface IProduct {
	item: {
		title: string;
		img: string;
		price: number;
	};
}

function Product(props: IProduct) {
	const strings = useContext(LocalizationContext);
	return (
		<div>
			<h2>{props.item.title}</h2>
			<img src={props.item.img} alt="" />
			<h3>
				{strings.price}: {props.item.price}
			</h3>
		</div>
	);
}

export default Product;
