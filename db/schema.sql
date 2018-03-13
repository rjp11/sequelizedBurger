drop database if exists burgers_db;

create database burgers_db;

use burgers_db;

CREATE TABLE burgers (
		id INTEGER (11) AUTO_INCREMENT NOT NULL,
		burger_name VARCHAR(55) NOT NULL,
		devoured BOOLEAN NOT NULL,
		createdAt	TIMESTAMP NOT NULL,
		PRIMARY KEY (id)
	);
