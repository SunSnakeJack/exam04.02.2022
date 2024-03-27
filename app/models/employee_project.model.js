module.exports = (sequelize, Datatype) => {
    const db = require('../models')
    const Employee = db.employee
    const Project = db.project
    const employee_project = sequelize.define("Employee_project", {
        employeeId: {
            type: Datatype.INTEGER,
            references:{
                model: Employee,
                key: 'id'
            }
        },
        projectId: {
            type: Datatype.INTEGER,
            references:{
                model: Project,
                key: 'id'
            }
        }
    })
    return employee_project;
}   