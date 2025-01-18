DROP DATABASE IF EXISTS zach_sql_store_db;
CREATE DATABASE zach_sql_store_db;
USE zach_sql_store_db;


DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL
);
INSERT INTO users (email, first_name, last_name)
VALUES
    ('john.doe@example.com', 'John', 'Doe'),
    ('jane.smith@example.com', 'Jane', 'Smith'),
    ('alice.johnson@example.com', 'Alice', 'Johnson'),
    ('bob.brown@example.com', 'Bob', 'Brown'),
    ('charlie.davis@example.com', 'Charlie', 'Davis'),
    ('emily.wilson@example.com', 'Emily', 'Wilson'),
    ('david.miller@example.com', 'David', 'Miller'),
    ('susan.moore@example.com', 'Susan', 'Moore'),
    ('michael.taylor@example.com', 'Michael', 'Taylor'),
    ('lisa.jones@example.com', 'Lisa', 'Jones');


DROP TABLE IF EXISTS products;
CREATE TABLE IF NOT EXISTS products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    stock INT NOT NULL
);
INSERT INTO products (product_name, price, stock)
VALUES
    ('Apple', 1, 100),
    ('Banana', 0.5, 150),
    ('Orange', 0.8, 120),
    ('Grapes', 2, 80),
    ('Pineapple', 3, 50),
    ('Mango', 1.5, 200),
    ('Strawberry', 2.5, 60),
    ('Blueberry', 3, 40),
    ('Peach', 1.2, 90),
    ('Watermelon', 5, 30);
