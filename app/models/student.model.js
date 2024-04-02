module.exports = (sequelize, Datatype) => {
    const Student = sequelize.define("student", {
        id: {
            type: Datatype.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Datatype.STRING,
            allowNull: false
        }
    })
    return Student;
}   