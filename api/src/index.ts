import express from 'express';
import initDB from './services/db';
import numbersRouter from './routes/numbers';

initDB();

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.use('/numbers', numbersRouter);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
