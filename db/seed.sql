-- done
INSERT INTO department (department)
VALUES ('Engineering'),
       ('Operations'),
       ('Finance');

-- done      
INSERT INTO role ( title, department, salary )
VALUES ('Engineer', 'Engineering',  125009.04),
       ('CSR', 'Operations', 40093.98),
       ('Analyst', 'Finance', 79900.78);

-- done       
INSERT INTO employee (f_name, l_name, title, department, salary, manager)
VALUES ('Sal', 'Ceja', 'Developer', 'Engineering', 140000.45, 'Sal' ),
       ('Bob', 'Cross', 'Developer', 'Engineering', 140000.54, 'Blue' ),
       ('Al', 'Pal', 'CSR', 'Operations', 60450.34, 'Jen' ),
       ('Stu', 'Pal', 'CSR', 'Operations', 66450.23,  'Sal' ),
       ('Blue', 'Clue', 'Analyst', 'Finance', 114600.54, 'Sal' ),
       ('Kevin', 'Plue', 'Analyst', 'Finance', 123600.45, 'Sal' );
 
       
       
-- BUGS: 