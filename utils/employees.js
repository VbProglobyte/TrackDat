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


// EMPLOYEE ADD
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
const addEmployee = () => {
    db.query(`SELECT id, title FROM roles`,(err, data)=>{
      const roleChoices = data.map(roles =>({
        value: roles.id,
        name: roles.title,
      }));
      db.query(`SELECT id, first_name, last_name FROM employees`,(err,data)=>{
        const managerChoies = data.map(employees =>({
          value: employees.id,
          name: employees.first_name + " " + employees.last_name,
        }))
        managerChoies.push({
          value: null,
          name: "No manager",
        })
      inquirer.prompt([
      {
        name: 'empFirst',
        type: 'input',
        message: 'Please enter employees First Name:'
      },
      {
        name: 'empLast',
        type: 'input',
        message: 'Please eneter employees Last Name:'
      },
      {
        name: 'empRole',
        type: 'list',
        message: 'Please enter employees role:',
        choices: roleChoices
      },
      {
        name: 'managerId',
        type: 'list',
        message: 'Please choose the manager: ',
        choices: managerChoies
      }
    
      ])
      .then((response) => {
        console.log(response);
        db.query(`INSERT INTO employees (first_name, last_name, roles_id, manager_id) VALUES ('${response.empFirst}', '${response.empLast}', ${response.empRole}, ${response.managerId});`, (err, res) => {
            if (err) throw err;
            console.log('Employee added')
            companyQuestions();
          });
      });
    })
    })
};

// UPDATE EMPLOYEE
// -- WHEN I choose to update an employee role
// -- THEN I am prompted to select an employee to update and their new role and this information is updated in the database
const updateEmployeeRole = () => {
    // mainMenu();
}
module.exports = employees;