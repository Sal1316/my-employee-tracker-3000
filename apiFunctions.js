function viewAllDeparments(db) {
  db.query(`SELECT * FROM deparment`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log("viewAllDeparments:\n", result);
  });
}
function viewAllRoles(db) {
  db.query(`SELECT * FROM role`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log("viewAllRoles:", result);
  });
}
function viewAllEmployees(db) {
  db.query(`SELECT * FROM employee`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log("viewAllEmployees:", result);
  });
}
function addADepartment(db, deptData) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "name",
        message: "Choose the department.",
        choices: ["Enginnering", "Operations", "Finance"],
      },
    ])
    .then((answers) => {
      db.query(
        `INSERT INTO department (name)
          VALUES(?, ?)`,
        deptData, // this replaces the question marks.
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
        name: "name",
        message: "Choose the department.",
        choices: ["Enginnering", "Operations", "Finance"],
      },
    ])
    .then((answers) => {
      db.query(
        `INSERT INTO department 
        VALUES(?, ?)`,
        deptData, // this replaces the question marks.
        (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log("addADepartment success:", result);
        }
      );
    });
}
function addEmployee(db, deptData) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "name",
        message: "Choose the department.",
        choices: ["Enginnering", "Operations", "Finance"],
      },
    ])
    .then((answers) => {
      db.query(
        `INSERT INTO department 
          VALUES(?, ?)`,
        deptData, // this replaces the question marks.
        (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log("addADepartment success:", result);
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
        message: "Choose the department.",
        choices: ["Enginnering", "Operations", "Finance"],
      },
    ])
    .then((answers) => {
      db.query(
        `INSERT INTO department 
        VALUES(?, ?)`,
        deptData, // this replaces the question marks.
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
  viewAllDeparments,
  viewAllRoles,
  viewAllEmployees,
  addADepartment,
  addARole,
  addEmployee,
  updateEmployee,
};

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
