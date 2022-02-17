export default {
	numbers: `
    CREATE TABLE IF NOT EXISTS numbers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      number INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )  ENGINE=INNODB;
`,
	products: `
	CREATE TABLE IF NOT EXISTS products (
	  id INT AUTO_INCREMENT PRIMARY KEY,
	  title VARCHAR(255),
	  price DECIMAL(10, 2),
	  description VARCHAR(1000),
	  category VARCHAR(255),
	  image VARCHAR(255),
	  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	)  ENGINE=INNODB;
`,
};
