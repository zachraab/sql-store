DROP DATABASE IF EXISTS zach_sql_store_db;

CREATE DATABASE zach_sql_store_db;

-- Create the table (if it doesn't already exist)
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY, -- Added ID as the primary key
    email VARCHAR(255) NOT NULL UNIQUE, -- Ensured email is unique
    username VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    isadmin BOOLEAN NOT NULL
);

-- Seed database
INSERT INTO users (email, username, password, isadmin) VALUES
('john.doe@example.com', 'johndoe', 'password123', 0),
('jane.doe@example.com', 'janedoe', 'securepass456', 1),
('admin@example.com', 'adminuser', 'adminpassword', 1),
('user1@example.com', 'user1', 'mypassword', 0),
('user2@example.com', 'user2', 'anotherpassword', 0),
('moderator@example.com', 'moderator', 'modpassword', 1);

SELECT * FROM users;
