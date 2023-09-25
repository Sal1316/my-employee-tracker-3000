DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;
USE business_db;

CREATE TABLE department (
  dept_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,  
  dept_id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (dept_id) REFERENCES department(dept_id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dept_id INT NOT NULL,
  role_id INT NOT NULL,
  employee_id VARCHAR(30) NOT NULL,
  f_name VARCHAR(30) NOT NULL,
  l_name VARCHAR(30) NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  reports_to VARCHAR(30) NOT NULL,
  FOREIGN KEY (dept_id) REFERENCES department(dept_id),
  FOREIGN KEY (role_id) REFERENCES role(role_id)
);


/*

 Dept id's and names:

  100 - enginering
  200 - operations
  300 - finance

- DECIMAL(6, 2) --- 5 is the precission and 2 is the scale. 
  Means 5 is the number of Significal digits and Scale represents the number 
  of digits stored after the decimal
  ex, ($ 123,456.74)

*/