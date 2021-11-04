//////////////////////////////////////////////////////////////////
const inquirer = require("inquirer");
// Import and require mysql2
const mysql = require('mysql2');
// console table PKG
const cTable = require('console.table');
// PORT environment
const PORT = process.env.PORT || 3001;

// VIEW ALL ROLES
// -- WHEN I choose to view all roles
// -- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
const viewAllRoles = () => {
    db.query("SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id", (err, res) => {
        if(err) throw err;
        console.table(res);
    mainMenu();
  })};
  


  const addRole = () => {
    inquirer.prompt({

        type: "input",
        name: "newDepartment",
        message: "What department would you like to add?"
    })
        .then((answer) => {
            connection.query(`INSERT INTO department (name)VALUES ("${answer.deptName}");`, (err, res) => {
                if (err) return err;
                console.log("\n DEPARTMENT ADDED...\n ");
                mainMenu();
            });
        });
}

addRole()
module.exports = roles;