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
    inquirer.prompt([
        {
            type:'list',
            name:'chooseEmployee',
            Messsage:'Choose one.',
            Choices:[
                        'View Employees',
                        'View Role',
                        'Add Employee',
                        'Update Currnet Employee'
                    ]
        }
    ]).then ((option) => {
        switch(option.chooseEmployee){
            case 'View Employees': seeAllEmployees();
            break;
            
            case 'View department': seeDepartment();
            break;
        
            case 'View Role': seeRole();
            break;

            case 'Add Emplyee': addEmployee();
            break;

            case 'Update Currnet Employee': employeeUpdate();
            break;
        }
            
    })
};

const seeDepartment = () => {
    const query = `SELECT name FROM department`
    connection.query(query, (err, res) =>{
        if (err) throw err
        console.table(res)
        employeeUpdate()
    });
};

const seeRole = () => {

};

const addEmployee = () => {

};

const seeAllEmployees = () => {

};

employeeUpdate()