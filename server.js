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
// utils 
// const departments = require('./utils/departments');
// const employees = require('./utils/employees');
// const roles = require('./utils/roles');

db.connect(function (err) {
  if (err) throw err;
  console.log("--connected--")
  // welcome();
});

// Welcome MESSAGE w/ instructions 
const welcome = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'welcome',
      message: '\nYou will be able to access and edit information about employees, roles and departments. Press ENTER to start.\n',
    },
  ])
    .then(mainMenu);
};


//inquirer prompt for questions - ADD
// MAIN MENU =========================================
// -- WHEN I start the application
// -- THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
const mainMenu = () => {
  //prompting user 
  console.log("Main Menu");
  inquirer.prompt({
    name: "menu",
    type: "list",
    message: "Main Menu",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
    ]
  })
    //.then switch statement - trying this out 
    .then((answer) => {
      switch (answer.menu) {
        case "View all departments":
          viewAllDepartments();
          break;

        case "View all roles":
          viewAllRoles();
          break;

        case "View all employees":
          viewAllEmployees();
          break;

        case "Add a department":
          addDepartment();
          break;

        case "Add a role":
          addRole();
          break;

        case "Add an employee":
          addEmployee();
          break;

        case "Update an employee role":
          updateEmployeeRole();
          break;
      }
      // mainMenu();
    })

};

// VIEW ALL DEPARTMENTS
// -- WHEN I choose to view all departments
// -- THEN I am presented with a formatted table showing department names and department ids
const viewAllDepartments = () => {
  db.query(`SELECT * FROM departments;`, (err, res) => {
    if (err) throw err;
    console.table(res);
    mainMenu(); // takes you back to the main menu
  });
};

// VIEW ALL ROLES
// -- WHEN I choose to view all roles
// -- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
const viewAllRoles = () => {
  db.query(`SELECT * FROM roles;`, (err, res) => {
    if (err) throw err;
    console.table(res);
    mainMenu();
  })
};

// VIEW ALL EMPLOYEES
// -- WHEN I choose to view all employees
// -- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
const viewAllEmployees = () => {
  db.query(`SELECT * FROM employees;`, (err, res) => {
    if (err) throw err;
    console.table(res);
    mainMenu();
  })
};


// INITIALIZATION 
const init = () => welcome()

init();