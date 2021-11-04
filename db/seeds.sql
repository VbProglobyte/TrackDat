INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 115000, 1),
       ("Sales", 95000, 1),
    --    /////////////////////////////
       ("Senior Engineer", 125000, 2),
       ("Junior Engineer", 100000, 2),
    --    /////////////////////////////
       ("Chief Accounting Officer", 95000, 3),
       ("Accountant", 80000, 3),
        --    /////////////////////////////
       ("Head of Legal", 150000, 4),
       ("Lawyer", 115000, 4)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Janet", "Sallead", 1, null),
       ("Andy", "Solice", 2, 1),
        --    /////////////////////////////
       ("Steve", "Tesla", 3, 1),
       ("Mary", "Mathis", 4, null),
        --    /////////////////////////////
       ("Alice", "Cash", 5, 4),
       ("Felix", "Finance", 6, 4),
        --    /////////////////////////////
       ("Kyle", "Advocaten", 7, null),
       ("Juan", "Legalis", 8, 7);