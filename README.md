# My Employee Tracker 3000

## Description

- The employee-tracker-3000 was crated to get some practical experience creating a 'Content Management System' that will allow the users to easily interact with the information that we will store in the database. The packages that we will be using are Node.js, Inquirer, and MySQL packages. We will be using MySQL/Sequelize to create, read, update and delete elements in the tables that we created in the DB. We used Inquirer because it uses JavaScript instead of sql syntax to communicate with the DB. The outcome is a CLI that the user will interact with to retrieve data, that will allow them to betterm make business decissions.

## Installation

- To install this project and make it part of your repos, all you have to do in clone our provided repo and install the packages requried. For this application, we used inquirer, mysql2, an nodemon. The last is not necessary, but it helps with the development process because it keeps you from quiting and starting the app.

## Usage

- The first thing you have to do when you start the application is to log in to your MySQL using the command 'mysql -u root -p'. Next, you run the 'SOURCE db/schema.sql' command to load your schema. Then, you run 'SOURCE db/seed.sql' to add data to your tables.

- The way you use this application is by running 'node index.js'. The CLI will then prompt you with some business-related questions. For example, the first question asks, 'What do you want to do?' and provides you with a list of choices to choose from. Among these choices are queries that correspond to how the data will be returned or entered. For instance, choice 2, 'View all Roles,' will display a table of all the roles/titles that exist in the 'business_db.' The other choices include queries where you provide information. For instance, 'Add a Department' allows you to add a new department to the 'departments' table. After you've gone through all the questions, you'll have a better understanding of your business operations.

# Images

![Alt text](images/want-to-do.jpg);
![Alt text](images/view-all-departments.jpg);
![Alt text](images/view-all-roles.jpg);
![Alt text](images/view-all-employees.jpg);

## Credits

- GitHub url: https://github.com/Sal1316/my-employee-tracker-3000

- Video walkthrough link: https://drive.google.com/file/d/1gcqs9qXyCJw3O-VxuzYg7T-dDynaMXzD/view
