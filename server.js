//////////////////////////////////////////////////////////////////
const inquirer = require("inquirer");
// Import and require mysql2
const mysql = require('mysql2');
// console table PKG
const cTable = require('console.table');
// PORT environment
const PORT = process.env.PORT || 3000;
// connection file that i seperated to be gitignored />>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const db = require('./utils/connection')
// utils 
// const departments = require('./utils/departments');
// const employees = require('./utils/employees');
// const roles = require('./utils/roles');

// Connect to database PORT ////////////////////////////////////////////////////////


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
      "EXIT"
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

        case "EXIT":
          db.end(); // exit db prompt 
          break;

        default: // suggested by chris 
          break;
      }
      // mainMenu();
    });

};

// VIEW ALL DEPARTMENTS
// -- WHEN I choose to view all departments
// -- THEN I am presented with a formatted table showing department names and department ids
const viewAllDepartments = () => {
  db.query(`SELECT * FROM departments;`, (err, res) => {
    if (err) throw err;
    console.table(res)
    mainMenu(); // takes you back to the main menu
  });
};

// VIEW ALL ROLES -- not working for some reason
// -- WHEN I choose to view all roles
// -- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
const viewAllRoles = () => {
  db.query(`SELECT * FROM roles;`, (err, res) => {
    if (err) throw err;
    console.table(res)
    mainMenu();
  })
};

// VIEW ALL EMPLOYEES
// -- WHEN I choose to view all employees
// -- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
const viewAllEmployees = () => {
  db.query(`SELECT * FROM employees;`, (err, res) => {
    if (err) throw err;
    console.table(res)
    mainMenu();
  })
};

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
// ROLE ADD /////////////////////////////////////////////////////////
const addRole = () => {
  inquirer.prompt({

    type: "input",
    name: "roles",
    message: "What roles would you like to add?"
  })
    .then((answer) => {
      db.query(`INSERT INTO roles (name)VALUES ("${answer.rolesTitle}");`, (err, res) => {
        if (err) return err;
        console.log("\n DEPARTMENT ADDED...\n ");
      });
      mainMenu();
    });
};


// got help from BCS with this - data.map 
const addEmployee = () => {
  db.query(`SELECT id, title FROM roles`, (err, data) => {
    const roleList = data.map(roles => ({
      value: roles.id,
      name: roles.title,
    }));
    db.query(`SELECT id, first_name, last_name FROM employees`, (err, data) => {
      const managerList = data.map(employees => ({
        value: employees.id,
        name: employees.first_name + " " + employees.last_name, // concat the fn with the ln
      }))
      managerList.push({
        value: null,
        name: "No manager",
      })
      inquirer.prompt([
        {
          type: 'input',
          name: 'employeesFirst',
          message: 'What is the employees first name?'
        },
        {
          type: 'input',
          name: 'employeesLast',
          message: 'What is the employees last name?'
        },
        {
          type: 'list',
          name: 'employeesRole',
          message: 'What is the employees role?',
          choices: roleList
        },
        {
          type: 'list',
          name: 'managerId',
          message: 'What is the manager ID? Enter null if N/A',
          choices: managerList
        }

      ])
        .then((answer) => {
          console.log(answer);
          db.query(`INSERT INTO employees (first_name, last_name, roles_id, manager_id) VALUES ('${answer.employeesFirst}', '${answer.employeesLast}', ${answer.employeesRole}, ${answer.managerId});`, (err, res) => {
            if (err) throw err;
            console.log('Employee has been added')
            // mainMenu();
          });
        });
    })
  })
};
// INITIALIZATION 
const init = () => welcome()

init();
