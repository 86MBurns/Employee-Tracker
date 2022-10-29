DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
    id INT,
    name VARCHAR(100)
);

CREATE TABLE roles(
    id INT, 
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);

CREATE TABLE employee(
    id INT,
    first_name VARCHAR(30),
    Last_name VARCHAR(30),
    roles_id INT,
    manager_id INT
);