INSERT INTO departments (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO roles (title, salary, departments_id)
        --    ///////////////////////////// sales
VALUES ("Sales Lead", 115000.50, 1),
       ("Sales", 95000.50, 1),
         --    ///////////////////////////// engineering 
       ("Senior Engineer", 125000.50, 2),
       ("Junior Engineer", 100000.50, 2),
        --    ///////////////////////////// accounting 
       ("Chief Accounting Officer", 95000.50, 3),
       ("Accountant", 80000.50, 3),
        --    ///////////////////////////// legal
       ("Head of Legal", 150000.50, 4),
       ("Lawyer", 115000.50, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
        --    ///////////////////////////// sales
VALUES ("Janet", "Sallead", 1, null),
       ("Andy", "Solice", 2, 1),
        --    ///////////////////////////// engineering 
       ("Steve", "Tesla", 3, 1),
       ("Mary", "Mathis", 4, null),
        --    ///////////////////////////// accounting 
       ("Alice", "Cash", 5, 4),
       ("Felix", "Finance", 6, 4),
        --    ///////////////////////////// legal
       ("Kyle", "Advocaten", 7, null),
       ("Juan", "Legalis", 8, 7);