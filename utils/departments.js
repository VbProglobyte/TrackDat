const inquirer = require("inquirer");
// Import and require mysql2
const mysql = require('mysql2');
// console table PKG
const cTable = require('console.table');
// PORT environment
const PORT = process.env.PORT || 3001;
// connection file that i seperated to be gitignored
const db = require('./utils/connection')

  
//DEPARTMENT ADD //////////////////////////////////////////////////////////////////////
const addDepartment = () => {
    console.log("New Department");
    inquirer.prompt({
  
      type: "input",
      name: "deptName",
      message: "What department would you like to add?"
  
    })
      .then(answer => {
        db.query(`INSERT INTO departments (name) VALUES ('${answer.deptName}');`, (err, res) => {
          if (err) return err;
          console.log(res);
          console.log("\n NEW DEPARTMENT ADDED...\n ");
          mainMenu(); // takes you back to the main menu
        });
        
      });
  };
  
addDepartment()

module.exports = departments;

