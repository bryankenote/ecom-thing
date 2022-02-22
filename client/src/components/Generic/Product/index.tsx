import React, { useContext } from 'react';
import { LocalizationContext } from '../../../localization';

export type product = {
	id: number;
	title: string;
	description: string;
	price: number;
	category: string;
	image: string;
};
interface IProduct {
	item: product;
}

function Product(props: IProduct) {
	const strings = useContext(LocalizationContext);
	return (
		<div>
			<h2>{props.item.title}</h2>
			<img src={props.item.image} alt={props.item.title} />
			<h3>
				{strings.price}: {props.item.price}
			</h3>
		</div>
	);
}

export default Product;
