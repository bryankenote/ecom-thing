import express from 'express';
import { fetchProduct, fetchProducts, insertProduct } from '../services/products';

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		res.json(await fetchProducts());
	} catch (err) {
		console.error(req.url, err);
		next(err);
	}
});

router.get('/:title', async (req, res, next) => {
	const { title } = req.params;
	try {
		res.json(await fetchProduct(title));
	} catch (err) {
		console.error(req.url, err);
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const { title, description, price, category, image } = req.body;
		res.json(await insertProduct(title, description, price, category, image));
	} catch (err) {
		console.log(req.url, err);
		next(err);
	}
});

export default router;
