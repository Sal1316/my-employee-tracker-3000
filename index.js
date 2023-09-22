const mysql = require("mysql2");
const inquirer = require("inquirer");
const chalk = require("chalk");
const {
  viewAllDeparments,
  viewAllRoles,
  viewAllEmployees,
  addADepartment,
  addARole,
  addEmployee,
  updateEmployee,
} = require("./apiFunctions");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Helifino",
    database: "business_db",
  },
  console.log(`Connected to the business_db database.`)
);

// application starts with npm start index.js
const questions = [
  {
    type: "list",
    name: "action",
    message: "what do you want to do?",
    choices: ["View all Dept", "View all Roles", "View all Employees"],
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(answers); // once the user finishes every single question, we will get a promise (.then) with the answers obj.

  switch (answers.name) {
    case "View all Dept":
      viewAllDeparments(db); // not sure why db is an argument here.
      break;

    case "View all Roles":
      viewAllRoles(db);
      break;

    case "View all Employees":
      viewAllEmployees(db);
      break;

    default:
      console.log("Later!");
      db.end();
      break;
  }
});

app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));
