import { query } from './db';

export const fetchProducts = () => {
	return query(`SELECT * FROM products`);
};
