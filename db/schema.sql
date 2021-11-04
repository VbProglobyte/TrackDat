DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name: VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  employee_name VARCHAR(30) NOT NULL
  department INT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  FIRST_name VARCHAR(30) NOT NULL,
  LAST_name VARCHAR(30) NOT NULL,
  ROLE_ID: INT,
  MANAGER_ID: INT,
);


