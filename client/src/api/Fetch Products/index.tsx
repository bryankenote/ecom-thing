export async function fetchProducts() {
	const results = await fetch('/products', { method: 'GET' });
	console.log(await results.json());
}
