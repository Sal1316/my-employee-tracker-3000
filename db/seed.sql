INSERT INTO department ( dept_id, dept_name)
VALUES ( 100,'Engineering' ),
      (200,'Operations'  ),
      (300,'Finance'  );

       
INSERT INTO role ( role_id, dept_id, title, salary )
VALUES (1, 100, 'Engineer', 125009.04),
      (2, 200, 'CSR', 40093.98),
      (3, 300, 'Analyst', 79900.78);

       
INSERT INTO employee (dept_id, role_id, employee_id, f_name, l_name, title, salary, reports_to)
VALUES (100, 1, 'E001','Sal', 'Ceja', 'Developer', 140000.45, 'Sal.' ),
      (200, 2, 'O001','Al', 'Pal', 'CSR', 60450.34, 'Sal' ),
      (300, 3, 'F001','Blue', 'Clue', 'Analyst', 114600.54, 'Sal' ),
      (100, 1, 'E001','Bob', 'Cross', 'Developer', 140000.54, 'Blue' ),
      (200, 2, 'O001','Stu', 'Pal', 'CSR', 66450.23, 'Sal' ),
      (300, 3, 'F001','Kevin', 'Plue', 'Analyst', 123600.45, 'Sal' ),
      (100, 1, 'E001','Smit', 'Cpii', 'Developer', 134000.55, 'Stu' ),
      (200, 2, 'O001','Cloe', 'Toe', 'CSR', 64550.54, 'Sal' ),
      (300, 3, 'F001','Steff', 'Pleth', 'Analyst', 153600.21, 'Sal' );

 
       
       
-- Employee Ids start with 'E001' for eng, 'O001' for Ops, 'F001' for finance.

-- BUGS: 