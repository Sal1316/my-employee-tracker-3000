const mysql = require("mysql2");
const inquirer = require("inquirer");
const chalk = require("chalk");
const {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addADepartment,
  addARole,
  addEmployee,
  updateEmployeeRole,
} = require("./apiFunctions");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Helifino",
    database: "business_db",
  },
  console.log(`\u{1F680} Connected to the business_db database. \u{1F680}`)
);

// application starts with npm start index.js
const questions = [
  {
    type: "list",
    name: "action",
    message: "what do you want to do?",
    choices: [
      "View all Departments",
      "View all Roles",
      "View all Employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
    ],
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(answers); // once the user finishes every single question, we will get a promise (.then) with the answers obj.

  switch (answers.action) {
    case "View all Departments":
      viewAllDepartments(db); // not sure why db is an argument here.
      break;
    case "View all Roles":
      viewAllRoles(db);
      break;
    case "View all Employees":
      viewAllEmployees(db);
      break;
    //
    case "Add a department":
      addADepartment(db);
      break;
    case "Add a role":
      addARole(db);
      break;
    case "Add an employee":
      addEmployee(db);
      break;
    case "Update an employee role":
      updateEmployeeRole(db);
      break;
    //
    default:
      console.log("Later!");
      db.end();
      break;
  }
});
