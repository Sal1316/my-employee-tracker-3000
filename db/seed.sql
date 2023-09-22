INSERT INTO department ( dept_name, dept_id)
VALUES ('Engineering', 100 ),
      ('Operations', 200 ),
      ('Finance', 300 ),

       
INSERT INTO role ( title, role_id, dept, salary )
VALUES ('Engineer', 101, "ROLE", 105093),
      ('CSr', 102, "ROLE", 40093),
      ('Analyst', 103, 'ROLE', 79900),

       
INSERT INTO employee (employee_id, f_name, l_name, title, dept_name, salary, reports_to)
VALUES ('E001','Sal', 'Ceja', 'Developer', 'Engineering', 140000, 'No one.' ),
      ('O001','Al', 'Pal', 'CSR', 'Operations', 60450, 'Sal' ),
      ('F001','Blue', 'Clue', 'Analyst', 'Finance', 114600, 'Sal' ),
      ('E001','Bob', 'Cross', 'Developer', 'Engineering', 140000, 'Blue' ),
      ('O001','Stu', 'Pal', 'CSR', 'Operations', 66450, 'Sal' ),
      ('F001','Kevin', 'Plue', 'Analyst', 'Finance', 123600, 'Sal' ),
      ('E001','Smit', 'Cpii', 'Developer', 'Engineering', 134000, 'Stu' ),
      ('O001','Cloe', 'Toe', 'CSR', 'Operations', 64550, 'Sal' ),
      ('F001','Steff', 'Pleth', 'Analyst', 'Finance', 153600, 'Sal' ),
      FOREIGN KEY (role_id) REFERENCES role(id),
      FOREIGN KEY (manager_id) REFERENCES employee(id)
 
       
       
-- Employee Ids start with 'E001' for eng, 'O001' for Ops, 'F001' for finance.