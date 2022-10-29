DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
    id INT,
    name VARCHAR(100)
);

CREATE TABLE role(
    id INT, 
    title VARCHAR(30),
    salary DECIMAL,
     FOREIGN KEY (department_id) REFERENCES (id)
);

CREATE TABLE employee(
    id INT,
    first_name VARCHAR(30),
    Last_name VARCHAR(30),
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);