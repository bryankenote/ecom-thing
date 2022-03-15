import { product } from '../../components/Generic/Product';

export async function fetchProducts(): Promise<product[]> {
	const results = await fetch('/api/v1/products', { method: 'GET' });
	return await results.json();
}
