import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { LocalizationContext } from '../../../localization';
import Product, { product } from '../../Generic/Product';
import style from './style.module.css';

interface IProductDetail {
	onAdd: (product: product, quantity: number) => void;
}
interface ILocationState {
	item: product;
}

function ProductDetail(props: IProductDetail) {
	const location = useLocation();
	const { item } = location.state as ILocationState;
	const strings = useContext(LocalizationContext);

	const [itemQuantity, setItemQuantity] = useState<number>(1);

	const handleItemQuantityChange = (event) => {
		const quantity = parseInt(event.target.value);
		if (quantity === 0) {
			return;
		} else {
			setItemQuantity(quantity);
		}
	};

	const addToCart = () => {
		props.onAdd(item, itemQuantity);
	};

	return (
		<div>
			<Product item={item} />
			<button className={style.addToCart} onClick={addToCart}>
				{strings.addToCart}
			</button>
			<input
				className={style.input}
				type="number"
				value={itemQuantity}
				onChange={handleItemQuantityChange}
			></input>
		</div>
	);
}

export default ProductDetail;
