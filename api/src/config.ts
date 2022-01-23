const { env } = process;

const config = {
	db: {
		host: env.DB_HOST || 'mysql_server',
		user: env.DB_USER || 'test_user',
		password: env.DB_PASSWORD || 'secret',
		database: env.DB_NAME || 'test_db',
	},
};

export default config;
