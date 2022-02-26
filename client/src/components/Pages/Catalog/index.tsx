import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LocalizationContext } from '../../../localization';
import Product from '../../Generic/Product';
import { fetchProducts } from '../../../api/Fetch Products';

function Catalog() {
	const strings = useContext(LocalizationContext);

	const [text, setText] = useState('');

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		setText(event.target.value);
	};

	const [product, setProducts] = useState<
		{
			id: number;
			title: string;
			price: number;
			description: string;
			category: string;
			image: string;
		}[]
	>([]);

	const handleClick = async () => {
		let productJson = await fetchProducts();
		setProducts(productJson);
	};

	return (
		<div>
			<header>
				<h1>{strings.catalogHeader}</h1>
			</header>
			<input type="text" value={text} onChange={handleChange} />
			<button onClick={handleClick}>{strings.search}</button>
			<div>
				{product.map((item, index) => (
					<div key={index}>
						<Product item={item} />
						<Link to="/product" state={{ item }}>
							{strings.viewProduct}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default Catalog;
