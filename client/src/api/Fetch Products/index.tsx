export async function fetchProducts() {
	const results = await fetch('/products', { method: 'GET' });
	return await results.json();
}
