const inquirer = require("inquirer");

// Working
function viewAllDepartments(db) {
  db.query(`SELECT * FROM department`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log("viewAllDepartments: Success \u{1F680}", result);
  });
}
// Working
function viewAllRoles(db) {
  db.query(`SELECT * FROM role`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log("viewAllRoles: Success \u{1F680}", result);
  });
}
// Working
function viewAllEmployees(db) {
  db.query(`SELECT * FROM employee`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log("viewAllEmployees: Success \u{1F680}", result);
  });
}

// Working
function addADepartment(db, deptData) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "Enter the name of the department to Add.",
        validate: (input) => {
          if (input.trim() === "") {
            return "You need to input something for department name.";
          }
          return true;
        },
      },
    ])
    .then((answers) => {
      const { department } = answers;

      db.query(
        `INSERT INTO department(department)
          VALUES(?)`, // the (name) is the column you want to insert data in the department table.
        [department], // this replaces the question marks.
        (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log("addADepartment success:", result);
        }
      );
      
    });
}
// Working
function addARole(db, deptData) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "title",
        message: "Choose a job role/title.",
        choices: [
          "Engineer",
          "Developer",
          "Operations Manager",
          "CSR",
          "Analyst",
          "Accountant",
          "Sales Manager",
          "Sales Person",
        ],
      },
      {
        type: "list",
        name: "department",
        message: "Which department does the role belong to?",
        choices: ["Engineering", "Operations", "Finance"],
      },
      {
        type: "input",
        name: "salary",
        message: "Enter the salary.",
        validate: (input) => {
          const deptId = parseInt(input);
          if (isNaN(deptId) || deptId <= 0) {
            return "Please enter a valid positive integer for the Salary";
          }
          return true;
        },
      },
    ])
    .then((answers) => {
      const { title, department, salary } = answers;
      db.query(
        `INSERT INTO role(title, department, salary)
        VALUES(?, ?, ?)`,
        [title, department, salary],
        (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log("addARole success:", result);
        }
      );
    });
}
// Working
function addEmployee(db, deptData) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "f_name",
        message: "Enter Employee's first name.",
      },
      {
        type: "input",
        name: "l_name",
        message: "Enter Employee's last name",
      },
      {
        type: "input",
        name: "title",
        message: "Enter Employee's title",
      },
      {
        type: "list",
        name: "department",
        message: "Enter Employee's department",
        choices: [
          "Engineering",
          "Operations",
          "Finance",
          "Sales",
          "Marketing",
          "Service",
        ],
      },
      {
        type: "input",
        name: "salary",
        message: "Add Employee's salary.",
      },
      {
        type: "list",
        name: "manager",
        message: "Direct manager.",
        choices: [NULL, "Sal", "Jen", "Blue"],
      },
    ])
    .then((answers) => {
      const { f_name, l_name, title, salary, department, manager } = answers;
      db.query(
        `INSERT INTO employee(f_name, l_name, title, salary, department, manager )
          VALUES(?, ?, ?, ?, ?, ?)`,
        [f_name, l_name, title, salary, department, manager], // this replaces the question marks.
        (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log("addEmployee success:", result);
        }
      );
    });
}
// Working
function updateEmployeeRole(db, deptData) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message: "Enter the employee Id.",
      },
      {
        type: "list",
        name: "title",
        message: "Select the employee's new role/title.",
        choices: [
          "Engineer",
          "Developer",
          "Operations Manager",
          "CSR",
          "Analyst",
          "Accountant",
          "Sales Manager",
          "Sales Person",
          "Owner",
        ],
      },
    ])
    .then((answers) => {
      const { id, title } = answers;

      db.query(
        `UPDATE employee SET title=? WHERE id=?`,
        [title, id], // this replaces the question marks.
        (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log(
            "\u{1F680} updateEmployeeRole success: \u{1F680}",
            result
          );
        }
      );
    });
}

module.exports = {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addADepartment,
  addARole,
  addEmployee,
  updateEmployeeRole,
};
/* BUGS: 
- addARole should only use, name, salary, and department for the role
- addEmployes should only use, first name, last name, role, and manager as inputs.






*/
//
//
//
//
//

//

//

//

// this acts like a controler file that contains all the logic for how and what to do in the backend.
/*
Original Code: 
function addADepartment(db, deptData) {
  inquirer.prompt(); // only run when funct gets called.
  db.query(
    `INSERT INTO department 
    VALUES(?, ?, ?)`,
    deptData, // this replaces the question marks.
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("addADepartment:", result);
    }
  );
}
function addARole() {
  inquirer.prompt();
  db.query(
    `INSERT INTO role 
    VALUES(?, ?, ?)`,
    deptData,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("addARole:", result);
    }
  );
}
function addEmployee() {
  inquirer.prompt();
  db.query(
    `INSERT INTO employee 
    VALUES(?, ?, ?)`,
    deptData,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("addAEmployee:", result);
    }
  );
}
function updateEmployee() {
  inquirer.prompt();
  db.query(
    `UPDATE employee Where id = ?
    VALUES(?, ?, ?)`,
    deptData,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("updateEmployee:", result);
    }
  );
}


*/
