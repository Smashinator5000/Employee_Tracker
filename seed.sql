USE employee_trackerdb;

INSERT INTO department(id, name) VALUES (1, "Engineers");
INSERT INTO department(id, name) VALUES (2, "Sales");
INSERT INTO department(id, name) VALUES (3, "Human Resources");
INSERT INTO department(id, name) VALUES (4, "Cleaning Services");

INSERT INTO role(id, title, salary, department_id) VALUES (1, "Software Engineer", 70000.00, 1);
INSERT INTO role(id, title, salary, department_id) VALUES (2, "Lead Engineer", 120000.00, 1);
INSERT INTO role(id, title, salary, department_id) VALUES (3, "Sales Manager", 100000.00, 2);
INSERT INTO role(id, title, salary, department_id) VALUES (4, "Sales Associate", 50000.00, 2);
INSERT INTO role(id, title, salary, department_id) VALUES (5, "HR Manager", 100000.00, 3);
INSERT INTO role(id, title, salary, department_id) VALUES (6, "HR Associate", 50000.00, 3);
INSERT INTO role(id, title, salary, department_id) VALUES (7, "Head Janitor", 30000.00, 4);
INSERT INTO role(id, title, salary, department_id) VALUES (8, "Janitor", 15000.00, 4);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id) VALUES (1, "Lauren", "Wood", 2, 1);
INSERT INTO employee(id, first_name, last_name, role_id, manager_id) VALUES (2, "Ashley", "Bartholomew", 1, null);
INSERT INTO employee(id, first_name, last_name, role_id, manager_id) VALUES (3, "Alex", "Dorr", 3, 2);
INSERT INTO employee(id, first_name, last_name, role_id, manager_id) VALUES (4, "Tre", "Gushiken", 6, 3);
INSERT INTO employee(id, first_name, last_name, role_id, manager_id) VALUES (5, "Tynika", "Arizana", 4, null);
INSERT INTO employee(id, first_name, last_name, role_id, manager_id) VALUES (6, "John", "Lochridge", 2, 2);
INSERT INTO employee(id, first_name, last_name, role_id, manager_id) VALUES (7, "Kelly", "Caeser", 7, null);
INSERT INTO employee(id, first_name, last_name, role_id, manager_id) VALUES (8, "Erin", "McGeever", 5, 3);