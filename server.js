const express = require ('express');
const fs = require ('fs');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
let employees = [];
let roles = [];

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'RubberDucky',
    database: 'schema_db'
});

const employeeUpdate = () =>{

}

const seeDepartment = () => {

}

const seeRole = () => {

}

const addEmployee = () => {

}

employeeUpdate()