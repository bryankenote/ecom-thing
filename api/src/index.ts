import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import initDB from './services/db';
import productsRouter from './routes/products';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

initDB();

const app = express();
const port = process.env.PORT ?? 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

app.use('/api/v1/products', productsRouter);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
