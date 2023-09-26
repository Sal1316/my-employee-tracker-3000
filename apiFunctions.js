const inquirer = require("inquirer");

// Working
function viewAllDepartments(db) {
  db.query(`SELECT * FROM department`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log("viewAllDepartments:\n", result);
  });
}
// Working
function viewAllRoles(db) {
  db.query(`SELECT * FROM role`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log("viewAllRoles:", result);
  });
}
// Working
function viewAllEmployees(db) {
  db.query(`SELECT * FROM employee`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log("viewAllEmployees:", result);
  });
}

// Working
function addADepartment(db, deptData) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "dept_name",
        message: "Enter the name of the department to Add.",
        validate: (input) => {
          if (input.trim() === "") {
            return "You need to input something for department name.";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "dept_id",
        message: "Enter the department ID:",
        validate: (input) => {
          const deptId = parseInt(input);
          if (isNaN(deptId) || deptId <= 0) {
            return "Please enter a valid positive integer for the department ID.";
          }
          return true;
        },
      },
    ])
    .then((answers) => {
      const { dept_name, dept_id } = answers;
      console.log("department name: ", dept_name);
      console.log("department dept_id: ", dept_id);

      db.query(
        `INSERT INTO department(dept_name, dept_id)
          VALUES(?, ?)`, // the (name) is the column you want to insert data in the department table.
        [dept_name, dept_id], // this replaces the question marks.
        (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log("addADepartment success:", result);
        }
      );
    });
}
function addARole(db, deptData) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Choose a role to Add.",
        choices: ["Engineer", "CSR", "Analyst"],
      },
      {
        type: "input",
        name: "title",
        message: "Enter the role title.",
      },
      {
        type: "list",
        name: "role_id",
        message: "Enter role id",
        choices: [1, 2, 3],
      },
      {
        type: "list",
        name: "dept_id",
        message: "Enter the department id.",
        choices: [100, 200, 300],
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
      const { title, role_id, dept_id, salary } = answers;
      db.query(
        `INSERT INTO role(title, role_id, dept_id, salary)
        VALUES(?, ?, ?, ?)`,
        [title, role_id, dept_id, salary],
        (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log("addARole success:", result);
        }
      );
    });
}
function addEmployee(db, deptData) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employee",
        message: "Add an Employee.",
        choices: ["Engineer", "CSR", "Analyst"],
      },
      {
        type: "input",
        name: "employee_id",
        message: "Enter Employee Id.",
      },
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
        name: "dept_id",
        message: "Add an Employee's department id.",
        choices: [100,200,300],
      },
      {
        type: "input",
        name: "salary",
        message: "Add Employee's salary.",
      },
      {
        type: "list",
        name: "reports_to",
        message: "Add Employee's salary.",
        chices: ["Sal", "Stu", "Blue"],
      },
      
    ])
    .then((answers) => {
      const { employee } = answers;
      db.query(
        `INSERT INTO employee(employee_id, f_name, l_name, title, dept_id, salary, reports_to)
          VALUES(?, ?, ?, ?, ?, ?, ?)`,
        [employee_id, f_name, l_name, title, dept_id, salary, reports_to], // this replaces the question marks.
        (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log("addEmployee success:", result);
        }
      );
    });
}
function updateEmployee(db, deptData) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "name",
        message: "Update an Employee.",
        choices: ["Engineer", "CSR", "Analyst"],
      },
    ])
    .then((answers) => {
      const {
        employee_id,
        f_name,
        l_name,
        title,
        dept_id,
        salary,
        reports_to,
      } = answers;
      db.query(
        `UPDATE INTO employee(employee_id, f_name, l_name, title, dept_id, salary, reports_to)
        VALUES(?, ?)`,
        [employee_id, f_name, l_name, title, dept_id, salary, reports_to], // this replaces the question marks.
        (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log("addADepartment success:", result);
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
  updateEmployee,
};
//
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
