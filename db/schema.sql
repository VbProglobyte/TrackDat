-- /////////////////////////////////// company database
DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;
-- /////////////////////////////////// departments
CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);
-- had to rework these VVV departments works 
-- /////////////////////////////////// roles
CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
    ON DELETE CASCADE,
    PRIMARY KEY (id)
);
-- /////////////////////////////////// employees 
CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
    ON DELETE CASCADE,
    PRIMARY KEY (id)
);


