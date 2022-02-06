import express from 'express';
import { fetchProducts } from '../services/products';

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		res.json(await fetchProducts());
	} catch (err) {
		console.error(req.url, err);
		next(err);
	}
});

export default router;
