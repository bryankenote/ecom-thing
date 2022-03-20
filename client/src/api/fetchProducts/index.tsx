import { product } from '../../components/Generic/Product';
import { createQueryString } from '../util';

export async function fetchProducts({
	limit,
	offset,
}: {
	limit?: number | null | undefined;
	offset?: number | null | undefined;
}): Promise<{ products: product[]; total: number }> {
	const results = await fetch(
		'/api/v1/products' + createQueryString({ limit, offset }),
		{ method: 'GET' },
	);
	return await results.json();
}
