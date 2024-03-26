const db = require('../models/index')
const Employee = db.employee
const Setting = db.setting

exports.findAll = (req, res) => {
    try {
        Employee.findAll({
            attributes: ["id", "name", "position"],
            include: [{
                model: Setting,
                attributes: ["theme"]
            }]
        })
            .then(employee => {
                // res.send(employee)
                // res.json(employee)
                res.status(200).json(employee)
            })
            .catch(error => {
                console.log(error.message)
            })
    } catch (e) {
        console.log(e)
    }
}

exports.create = (req, res) => {
    try {
        if (!req.body.name || !req.body.position) {
            res.status(400).json({ message: "คือมึงยังไม่ได้ใส่อะไรเข้าไป!! ไอน้ำตกหมู!!" })
            return;
        }

        const employeeObj = {
            name: req.body.name,
            position: req.body.position
        }

        Employee.create(employeeObj)
            .then(data => {
                Setting.create({
                    theme: req.body.theme,
                    employeeId: data.id
            })
                res.status(200).json({ message: "message  Employee create." })
            })
            .catch(error => {
                res.status(400).json({ message: error.message })
            })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.findOne = (req, res) => {
    try {
        const id = req.params.id
        Employee.findByPk(id)
            .then(data => {
                res.status(200).json(data)
            })
            .catch(error => {
                res.status(400).json({ message: error.message })
            })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
}

exports.update = (req, res) => {
    try {
        // const id = req.params.id
        const employeeObj = {
            name: req.body.name,
            position: req.body.position
        }
        Employee.update(employeeObj, {
            where: { id: req.params.id },
        })
            .then(data => {
                  if(data ==1){
                    res.status(200).json({message: "Updated Successfully"})
                  }
            })
            .catch(error => {
                res.status(400).json({ message: error.message})
            })
    } catch {
        res.status(500).json({ message: error.message })
    }
}

exports.delete = (req, res) => {
    try {

        Employee.destroy({where: {id:req.params.id}})
        .then(data =>{
            if(data ==1){
                res.status(200).json({message: "Delete Successfully"})
              }
        })
        .catch(error => {
            res.status(400).json({ message: error.message})
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}