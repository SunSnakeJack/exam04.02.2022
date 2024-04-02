module.exports = (app) => {
    const student = require('../controllers/student.controller')

    const router = require('express').Router()
    
    //Retrieve all employee with setting
    router.get("/", student.findAll)
    //Insert data to employee with setting   
    router.post("/create", student.create)
    // //Retrieve an employee with setting 
    router.get("/findone/:id", student.findOne)
    // //Update an employee with id 
    router.put("/update/:id", student.update)
    // //Delete an employee with id 
    router.delete("/delete/:id", student.delete)
    
    app.use("/students", router)
}