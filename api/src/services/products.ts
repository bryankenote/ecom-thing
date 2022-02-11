import { query } from './db';

export const fetchProducts = () => {
	return query(`SELECT * FROM products`);
};

export const fetchProduct = (id: string) => {
	return query(`SELECT * FROM products WHERE id=(?)`, [id]);
};

export const insertProduct = (
	title: string,
	description: string,
	price: number,
	category: string,
	image: string,
) => {
	return query(
		`INSERT INTO products (title, description, price, category, image) VALUES (?, ?, ?, ?, ?)`,
		[title, description, price, category, image],
	);
};

export const updateProduct = (
	id: string,
	title: string,
	description: string,
	price: number,
	category: string,
	image: string,
) => {
	return query(
		`UPDATE products SET title=(?), description=(?), price=(?), category=(?), image=(?) WHERE id=(?)`,
		[title, description, price, category, image, id],
	);
};

export const deleteProduct = (id: string) => {
	return query(`DELETE FROM products WHERE id=(?)`, [id]);
};
