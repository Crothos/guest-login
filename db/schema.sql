DROP DATABASE IF EXISTS checkin_db;
CREATE DATABASE checkin_db;

USE checkin_db;

CREATE TABLE host (
    id INT NOT NULL,
    name VARCHAR(100) NOT NULL
);