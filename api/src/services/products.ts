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

export async function importProduct(productArray: Array<any>) {
	const importProducts = productArray.map((product) => {
		return Object.values(product);
	});
	await query(`TRUNCATE TABLE products`);
	return query(`INSERT INTO products (id, title, price, description, category, image) VALUES ?`, [
		importProducts,
	]);
}

export const updateProduct = (
	id: string,
	title?: string,
	description?: string,
	price?: number,
	category?: string,
	image?: string,
) => {
	return query(
		`UPDATE products p SET title=COALESCE(?, p.title), description=COALESCE(?, p.description), price=COALESCE(?, p.price), category=COALESCE(?, p.category), image=COALESCE(?, p.image) WHERE id=(?)`,
		[title ?? null, description ?? null, price ?? null, category ?? null, image ?? null, id],
	);
};

export const deleteProduct = (id: string) => {
	return query(`DELETE FROM products WHERE id=(?)`, [id]);
};
