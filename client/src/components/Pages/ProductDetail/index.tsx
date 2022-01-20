import React from 'react';
import { useLocation } from 'react-router-dom';
import Product from '../../Generic/Product';

interface ILocationState {
	item: {
		title: string;
		img: string;
		price: number;
	};
}

function ProductDetail() {
	const location = useLocation();
	const { item } = location.state as ILocationState;
	return <Product item={item} />;
}

export default ProductDetail;
