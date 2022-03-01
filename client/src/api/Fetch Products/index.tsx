export async function fetchProducts(): Promise<any> {
	const results = await fetch('/products', { method: 'GET' });
	return await results.json();
}
