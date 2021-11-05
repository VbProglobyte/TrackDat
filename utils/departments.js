const inquirer = require("inquirer");
// Import and require mysql2
const mysql = require('mysql2');
// PORT environment
const PORT = process.env.PORT || 3001;
// VIEW ALL DEPARTMENTS
// -- WHEN I choose to view all departments
// -- THEN I am presented with a formatted table showing department names and department ids
const viewAllDepartments = () => {
    db.query("SELECT department.id, department.name AS department FROM department", (err, res) => {
        if (err) throw err;
        console.table(res);
        // mainMenu();
    })
};
viewAllDepartments();
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
                // mainMenu();
            });
        });
}

addDepartment()

module.exports = departments;