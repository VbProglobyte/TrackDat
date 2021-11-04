//////////////////////////////////////////////////////////////////
const inquirer = require("inquirer");
// Import and require mysql2
const mysql = require('mysql2');
// PORT environment
const PORT = process.env.PORT || 3001;

// Connect to database PORT ////////////////////////////////////////////////////////
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'VallyB784839_2601',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

// Welcome MESSAGE w/ instructions 
const welcome = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'welcome',
      message: '\nYou will be able to access and edit information about employees, roles and departments. Press ENTER to start.\n',
    },
  ])
    .then(startPrompts)
};


//inquirer prompt for questions - ADD
// MAIN MENU =========================================
// -- WHEN I start the application
// -- THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
function mainMenu() {
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
    })
};
// VIEW ALL EMPLOYEES
// -- WHEN I choose to view all employees
// -- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
const viewAllEmployees = () => {
  mainMenu();
}
// VIEW ALL ROLES
// -- WHEN I choose to view all roles
// -- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
const viewAllRoles = () => {
  mainMenu();
}
// VIEW ALL DEPARTMENTS
// -- WHEN I choose to view all departments
// -- THEN I am presented with a formatted table showing department names and department ids
const viewAllDepartments = () => {
  mainMenu();
}
// ADD DEPARTMENT 
// -- WHEN I choose to add a department
// -- THEN I am prompted to enter the name of the department and that department is added to the database
const addDepartment = () => {
  mainMenu();
}
// ADD ROLE
// -- WHEN I choose to add a role
// -- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
const addRole = () => {
  mainMenu();
}
// ADD EMPLOYEE 
// -- WHEN I choose to add an employee
// -- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
const addEmployee = () => {
  mainMenu();
}
// UPDATE EMPLOYEE
// -- WHEN I choose to update an employee role
// -- THEN I am prompted to select an employee to update and their new role and this information is updated in the database
const updateEmployeeRole = () => {
  mainMenu();
}


//     app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });

mainMenu();

// INITIALIZATION 
const init = () => welcome()

init();