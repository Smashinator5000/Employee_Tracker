const mysql = require('mysql');
const inquirer = require('inquirer');
const table = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employee_trackerdb',
});

connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});


//function for startin app
function start() {
    inquirer
        .prompt({
            name: "userInput",
            type: "list",
            message: "Choose one!",
            choices: [
                "Add a Department",
                "Add a Role",
                "Add an Employee",
                "View Departments",
                "View Roles",
                "View Employees",
                "Update Employee Role",
                "Exit"
            ],
        }).then((answer) => {
            switch (answer.userInput) {
                case "Add a Department":
                    addDepartment();
                    break;

                case "Add a Role":
                    addRole();
                    break;

                case "Add an Employee":
                    addEmployee();
                    break;

                case "View Departments":
                    viewDepartment();
                    break;

                case "View Roles":
                    viewRole();
                    break;

                case "View Employees":
                    viewEmployee();
                    break;

                case "Update Employee Role":
                    updateEmpRole();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        });
};
//function to accomplish task specific to their answer
//create function to create departments, roles and employees
const addDepartment = () => {
    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What department would you like to add?",
            },
        ])
        .then((answer) => {
            connection.query(
                "INSERT INTO department (name) VALUES (?)",
                [answer.name],
                function (err, res) {
                    if (err) throw err;
                    console.table(res);
                    start();
                }
            );
        });
};

const addRole = () => {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What job title do you want to add?",
            },
            {
                name: "salary",
                type: "input",
                message: "What is the salary for this position?",
            },
            {
                name: "departmentid",
                type: "input",
                message: "What is the Department-ID for this position?",
            },
        ]).then((answer) => {
            connection.query(
                "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
                [answer.title, answer.salary, answer.departmentid],
                function (err, res) {
                    if (err) throw err;
                    console.table(res);
                    start();
                }
            );
        });
};

function addEmployee() {

    inquirer
        .prompt([
            {
                type: "input",
                name: "firstname",
                message: "What is the employee's first name?",
            },
            {
                name: "lastname",
                type: "input",
                message: "What is the employee's last name?",
            },
            {
                name: "roleid",
                type: "number",
                message: "Enter the employee's role.",
           
            },
            {
                name: "managerid",
                type: "input",
                message: "Enter the employee's manager's id.",
            },
        ]).then((answer) => {
            connection.query(
                "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
                [answer.firstname, answer.lastname, answer.roleid, answer.managerid],
                function (err, res) {
                    if (err) throw err;
                    console.table(res);
                    start();
                }
            );
        });
}

//way to look at departments, roles and employees
const viewDepartment = () => {
    connection.query(
        "SELECT * FROM department",
        function (error, results, fields) {
            if (error) throw error;
            console.table(results);
            start();
        }
    );
};

const viewRole = () => {
    connection.query("SELECT * FROM role", function (error, results, fields) {
        if (error) throw error;
        console.table(results);
        start();
    });
};

const viewEmployee = () => {
    let sql = "SELECT * FROM employee_trackerdb.employee";
    connection.query(sql, (error, results) => {
        if (error) throw error;
        console.table(results);
        start();
    });
};
//update employee roles
const updateEmpRole = () => {

    inquirer
        .prompt([
            {
                name: "name",
                type: "list",
                message: "Which employee would you like to update?",
                choices: function () {
                    let employees = results.map((employee) => ({
                        name: employee.first_name + " " + employee.last_name,
                        value: employee.id,
                    }));
                    return employees;
                },
            },
            {
                name: "newrole",
                type: "list",
                message: "What is the employee's new role ID?",
                choices: function () {
                    let roles = results.map((role) => ({
                        name: role.title,
                        value: role.id,
                    }));
                    return roles;

                },
            },
        ])
        .then((answer) => {
            connection.query(
                "UPDATE employee SET employee.role_id = ? WHERE employee.id = ?",
                [answer.newrole, answer.name],
                (err, results) => {
                    if (err) throw err;
                    console.table(results);
                    start();
                }
            );
        });
}

start()