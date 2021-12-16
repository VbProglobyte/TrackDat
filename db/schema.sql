-- /////////////////////////////////// company database
DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;
-- /////////////////////////////////// departments
CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- connects to department id * in ROLE table 
  name VARCHAR(30) NOT NULL
);
-- /////////////////////////////////// roles
CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- connects to role id * in EMPLOYEE table 
  employees_name VARCHAR(30) NOT NULL,
  department INT,
  title VARCHAR(30),
  salary DECIMAL NOT NULL,
  DEPARTMENT_id INT
);
-- /////////////////////////////////// employees 
CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- connects to manager id * in EMPLOYEE table 
  FIRST_name VARCHAR(30) NOT NULL,
  LAST_name VARCHAR(30) NOT NULL,
  ROLES_ID INT,
  MANAGER_ID INT
);


