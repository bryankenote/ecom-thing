import express from 'express';
import {
	deleteProduct,
	updateProduct,
	fetchProduct,
	fetchProducts,
	insertProduct,
	importProduct,
} from '../services/products';

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		res.json(await fetchProducts());
	} catch (err) {
		console.error(req.url, err);
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	const { id } = req.params;
	try {
		res.json(await fetchProduct(id));
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

router.post('/import', async (req, res, next) => {
	try {
		const { products } = req.body;
		res.json(await importProduct(products));
	} catch (err) {
		console.log(req.url, err);
		next(err);
	}
});

router.put('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const { title, description, price, category, image } = req.body;
		res.json(await updateProduct(id, title, description, price, category, image));
	} catch (err) {
		console.log(req.url, err);
		next(err);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		res.json(await deleteProduct(id));
	} catch (err) {
		console.log(req.url, err);
		next(err);
	}
});

export default router;
