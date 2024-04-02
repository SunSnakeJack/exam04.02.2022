module.exports = (app) => {
    const university = require('../controllers/university.controller')

    const router = require('express').Router()
    
    //Retrieve all employee with setting
    router.get("/", university.findAll)
    //Insert data to employee with setting   
    router.post("/create", university.create)
    // //Retrieve an employee with setting 
    router.get("/findone/:id", university.findOne)
    // //Update an employee with id 
    router.put("/update/:id", university.update)
    // //Delete an employee with id 
    router.delete("/delete/:id", university.delete)
    
    app.use("/universities", router)
}