//////////////////////////////////////////////////////////////////
const inquirer = require("inquirer");
// Import and require mysql2
const mysql = require('mysql2');
// console table PKG
const cTable = require('console.table');
// PORT environment
const PORT = process.env.PORT || 3001;

// VIEW ALL EMPLOYEES
// -- WHEN I choose to view all employees
// -- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
const viewAllEmployees = () => {
    db.query("SELECT employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(e.first_name, ' ' ,e.last_name) AS manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id LEFT JOIN employee e on employee.manager_id = e.id;", (err, res) => {
        if(err) throw err;
        console.table(res);
        // mainMenu();
    })};
    

  const addEmployee = () => {
    inquirer.prompt({

        type: "input",
        name: "newEmployee",
        message: "What employee would you like to add?"
    })
        .then((answer) => {
            connection.query(`INSERT INTO Employee (name)VALUES ("${answer.deptName}");`, (err, res) => {
                if (err) return err;
                console.log("\n EMPLOYEE ADDED...\n ");
                // mainMenu();
            });
        });
};

addEmployee()
// UPDATE EMPLOYEE
// -- WHEN I choose to update an employee role
// -- THEN I am prompted to select an employee to update and their new role and this information is updated in the database
const updateEmployeeRole = () => {
    // mainMenu();
  }
module.exports = employees;