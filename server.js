const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const chalk = require("chalk");

const db = require("./db");

async function startApp() {
  try {
    const userChoice = await inquirer.prompt({
      type: "list",
      name: "action",
      message: "Select a choice to start business plan?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
      ],
    });

    switch (userChoice.action) {
      case "View all departments":
        const department = await db.getAllDepartments();
        break;

      case "View all roles":
        break;

      case "View all employees":
        break;

      case "Add a department":
        break;

      case "Add a role":
        break;

      case "Add an employee":
        break;

      case "Update an employee role":
        // Call the function to update an employee's role from db.js
        // Prompt the user to select an employee and a new role, then update the database
        break;

      case "Exit":
        console.log("Exiting the program.");
        break;

      default:
        console.log("Invalid choice. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

startApp();

//
//
//

//
//
//
//

//
//
//
//

/*
const app = express();
const port = process.env.PORT || 3001

//Middleware: 
// app.use()

// mysql Connection: 
const db = mysql.createConnection({
      host: 'localhost',
      user: 'root',  // MySQL username,
      password: 'Helifino',// MySQL password
      database: 'movie_db'
},
      console.log(`COnnEcted to thE mOvie_db dAtabAse.`)
)

app.get('/api/movies', (req, res) => {
      const articles = [];
      // code to retrieve a movie...
      res.json(articles);
});

app.post('/articles', (req, res) => {
      // code to add a a movie...
      res.json(req.body);
});

app.put('/articles/:id', (req, res) => {
      const { id } = req.params;
      // code to update a movie...
      res.json(req.body);
});

app.delete('/articles/:id', (req, res) => {
      const { id } = req.params;
      // code to delete a movie...
      res.json({ deleted: id });
});

app.listen(3000, () => console.log('server started'));
*/
