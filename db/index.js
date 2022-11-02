const connection = require('connection');

class DB {
    constructor(connection){
        this.connection = connection;
    }
    getAllDepartments(){
        return this.connection.promis().query('SELECT * FROM department;')
    }
    getAllRoles(){
        return this.connection.promis().query('SELECT role.id, role.title, department.name AS department FROM role JOIN department ON role.department_id = deparment.id;')
    }
    getAllEmployees(){
        return this.connection.promis().query('SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;')
    }
    getEmployeeById(id){
        return this.connection.promis().query('SETLECT *FROM employee WHERE "id"= ?, [id];')
    }
}

module.exports = new DB(connection);