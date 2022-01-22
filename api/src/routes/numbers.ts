import express from 'express';
import { fetchNumbers, insertNumber, updateNumber, deleteNumber } from '../services/numbers';

const router = express.Router();

router.post('/', async (req, res, next) => {
	try {
		const { number } = req.body;
		res.json(await insertNumber(number));
	} catch (err) {
		console.error(req.url, err);
		next(err);
	}
});

router.get('/', async (req, res, next) => {
	try {
		res.json(await fetchNumbers());
	} catch (err) {
		console.error(req.url, err);
		next(err);
	}
});

router.put('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const { number } = req.body;
		res.json(await updateNumber(id, number));
	} catch (err) {
		console.error(req.url, err);
		next(err);
	}
});

router.delete('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		res.json(await deleteNumber(id));
	} catch (err) {
		console.error(req.url, err);
		next(err);
	}
});

export default router;
