const inquirer = require("inquirer");
// Import and require mysql2
const mysql = require('mysql2');
// PORT environment
const PORT = process.env.PORT || 3001;

//DEPARTMENT ADD
const addDepartment = () => {
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

addDepartment()