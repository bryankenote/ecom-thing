import mysql from 'mysql2/promise';
import tables from './tables';
import config from '../config';

const init = async () => {
	const promises = [];
	for (const createTable of Object.values(tables)) {
		promises.push(query(createTable));
	}
	await Promise.all(promises);
	console.log('Finished intializing tables');
};

export async function query(sql: string, params?: { [param: string]: any }) {
	const connection = await mysql.createConnection(config.db);
	const [results] = await connection.execute(sql, params);

	return results;
}

export default init;
