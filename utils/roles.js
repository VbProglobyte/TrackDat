//////////////////////////////////////////////////////////////////
const inquirer = require("inquirer");
// Import and require mysql2
const mysql = require('mysql2');
// console table PKG
const cTable = require('console.table');
// PORT environment
const PORT = process.env.PORT || 3001;
// connection file that i seperated to be gitignored
const db = require('./utils/connection')


// ROLE ADD 
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
                // mainMenu();
            });
        });
}

addRole()
module.exports = roles;