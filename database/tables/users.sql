CREATE TABLE users (
	id INT PRIMARY KEY,
	login NVARCHAR(255),
	password NVARCHAR(255)
);

INSERT INTO users (id, login, password)
VALUES (1, 'admin', 'admin')