import { query } from './db';

export const insertNumber = (number: number | string) => {
	return query(`INSERT INTO numbers (number) VALUES (?)`, [number]);
};

export const fetchNumbers = () => {
	return query(`SELECT * FROM numbers`);
};

export const updateNumber = (id: string, number: number | string) => {
	return query(`UPDATE numbers SET number=(?) WHERE id=(?)`, [number, id]);
};

export const deleteNumber = (id: string) => {
	return query(`DELETE FROM numbers WHERE id=(?)`, [id]);
};
