module.exports = (sequelize, Datatype) => {
    const db = require('./index')
    const Student = db.student
    const University = db.university
    const Student_University = sequelize.define("student_university", {      
        studentId: {
            type: Datatype.INTEGER,
            references: Student,
            referencesKey: 'key'
        },
        universityId: {
            type: Datatype.INTEGER,
            references: University,
            referencesKey: 'key'
        }
    })
    return Student_University;
}   