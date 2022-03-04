import { product } from '../../components/Generic/Product';

export async function fetchProducts(): Promise<product[]> {
	const results = await fetch('/products', { method: 'GET' });
	return await results.json();
}
