const config = require('../config/db');

const Datatype = require('sequelize');
const sequelize = new Datatype(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
       host: config.HOST,
       dialect: config.dialect,
       pool:{
          max: config.pool.max,
          min: config.pool.min,
          acquire: config.pool.acquire,
          idle: config.pool.idle
       }
    }
)

const db = {};
db.Datatype = Datatype;
db.sequelize = sequelize;

db.student = require("./student.model")(sequelize, Datatype)
db.university = require("./university.model")(sequelize, Datatype)
db.student_university = require("./student_university.model")(sequelize, Datatype)

//Many to Many 
db.student.belongsToMany(db.university,{
    through: "student_university"
})
db.university.belongsToMany(db.student,{
    through: "student_university"
})

module.exports = db


