USE company_db;
-- ///////////////////////////////////////////////////////////// employee select (id, first name, last name, roles, manager)
SELECT * FROM employees;

SELECT id, first_name, last_name FROM employees WHERE manager_id IS NULL;

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES (first_name, last_name, roles_id, manager_id);
-- ///////////////////////////////// employee update
UPDATE employees
SET roles_id =
WHERE id = ;
-- //////////////////////////////// roles select
SELECT * roles; 
-- all
SELECT title, roles.id AS roles_id, departments.name AS departments, salary
FROM roles
JOIN departments ON roles.departments_id = departments.id;
-- //////////////////////////////////////// department select (title, salary, department id)
INSERT INTO roles (title, salary, departments_id)
VALUES (title, salary, departments_id);

SELECT * departments;

INSERT INTO departments (name)
VALUES (name);