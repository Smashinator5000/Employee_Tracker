DROP DATABASE IF EXISTS employee_trackerdb;

CREATE DATABASE employee_trackerdb;

USE employee_trackerdb;

CREATE TABLE `department` (
    id INT(30) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE `role` (
    id INT(30) AUTO_INCREMENT NOT NULL,
    `title` VARCHAR(30) NOT NULL,
    `salary` DECIMAL (10, 3),
    `department_id` INT,
    PRIMARY KEY (id)
);
CREATE TABLE `employee` (
    id INT(30) AUTO_INCREMENT NOT NULL,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR (30) NOT NULL,
    `role_id` INT ,
    `manager_id` INT ,
    PRIMARY KEY (id)
);




