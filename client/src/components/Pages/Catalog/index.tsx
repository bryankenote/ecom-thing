import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LocalizationContext } from '../../../localization';
import Product, { product } from '../../Generic/Product';
import Pager from '../../Generic/Pager';
import { fetchProducts } from '../../../api/fetchProducts';
import style from './style.module.css';

function Catalog() {
	const strings = useContext(LocalizationContext);

	const [searchText, setSearchText] = useState<string>('');
	const [products, setProducts] = useState<product[]>([]);
	const [totalProducts, setTotalProducts] = useState<number>(0);
	const [productsPerPage, setProductsPerPage] = useState<number>(5);

	const totalPages = Math.ceil(totalProducts / productsPerPage);

	const handleSearchTextChange: React.ChangeEventHandler<HTMLInputElement> = (
		event,
	) => {
		setSearchText(event.target.value);
	};

	const handleProductsPerPageChange: React.ChangeEventHandler<
		HTMLInputElement
	> = (event) => {
		setProductsPerPage(Number(event.target.value));
	};

	const handleSearchProducts = async () => {
		const { products, total } = await fetchProducts({
			limit: productsPerPage,
		});
		setTotalProducts(total);
		setProducts(products);
	};

	const handlePageChange = async (pageNumber: number) => {
		const offset = pageNumber * productsPerPage - productsPerPage;
		const { products } = await fetchProducts({
			limit: productsPerPage,
			offset,
		});
		setProducts(products);
	};

	return (
		<div>
			<header>
				<h1>{strings.catalogHeader}</h1>
			</header>
			<div className={style.inputContainer}>
				<div>
					<input
						type="text"
						value={searchText}
						onChange={handleSearchTextChange}
					/>
					<button onClick={handleSearchProducts}>
						{strings.search}
					</button>
				</div>

				<div>
					<label>{strings.productsPerPage}</label>
					<input
						type="number"
						value={productsPerPage}
						onChange={handleProductsPerPageChange}
						className={style.productNumberInput}
					/>
				</div>
			</div>
			<div>
				{products.map((item, index) => (
					<div key={index}>
						<Product item={item} />
						<Link to="/product" state={{ item }}>
							{strings.viewProduct}
						</Link>
					</div>
				))}
			</div>
			{products.length > 0 && (
				<Pager
					onPageChange={handlePageChange}
					totalPages={totalPages}
				/>
			)}
		</div>
	);
}

export default Catalog;
