import { query } from './db';

export const fetchProducts = () => {
	return query(`SELECT * FROM products`);
};

export const fetchProduct = (title: string | number) => {
	return query(`SELECT * FROM products WHERE title=(?)`, [title]);
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
