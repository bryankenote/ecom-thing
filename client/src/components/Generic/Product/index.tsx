import React, { useContext } from 'react';
import { LocalizationContext } from '../../../localization';

export type product = {
	title: string;
	img: string;
	price: number;
};
interface IProduct {
	item: product;
}

function Product(props: IProduct) {
	const strings = useContext(LocalizationContext);
	return (
		<div>
			<h2>{props.item.title}</h2>
			<img src={props.item.img} alt={props.item.title} />
			<h3>
				{strings.price}: {props.item.price}
			</h3>
		</div>
	);
}

export default Product;
