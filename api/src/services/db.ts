import mysql from 'mysql2/promise';
import tables from './tables';
import config from '../config';

let connection: mysql.Connection;

const init = async () => {
	await Promise.all(Object.values(tables).map((sql) => query(sql)));
	console.log('Finished intializing tables');
};

export async function query(sql: string, params?: { [param: string]: any }) {
	connection = connection ?? (await mysql.createConnection(config.db));
	const [results] = await connection.query(sql, params);

	return results;
}

export default init;
