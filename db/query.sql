USE company_db;
-- ///////////////////////////////////////////////////////////// employee select (id, first name, last name, role, manager)
SELECT * FROM employee;

SELECT id, first_name, last_name FROM employee WHERE manager_id IS NULL;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (first_name, last_name, role_id, manager_id);
-- ///////////////////////////////// employee update
UPDATE employee
SET role_id =
WHERE id = ;
-- //////////////////////////////// role select
SELECT * role; 
-- all
-- //////////////////////////////////////// department select (title, salary, department id)
INSERT INTO role (title, salary, department_id)
VALUES (title, salary, department_id);

SELECT * department;

INSERT INTO department (name)
VALUES (name);