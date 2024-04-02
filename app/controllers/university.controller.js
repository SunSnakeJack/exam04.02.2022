const db = require('../models/index')
const Student_university = db.student_university
const Student = db.student
const University = db.university

exports.findAll = (req, res) => {
    try {
        University.findAll({
            attributes:["id","name","degree"]
        })
            .then(student => {
                res.status(200).json(student)
            })
            .catch(error => {
                res.status(400).json({ message: error.message })
            })
    } catch (e) {
        res.status(500).json({ message: error.message })
    }
}

exports.create = (req, res) => {
    try {
        if (!req.body.name) {
            res.status(400).json({ message: "คือมึงยังไม่ได้ใส่อะไรเข้าไป!! ไอน้ำตกหมู!!" })
            return;
        }

        const universityObj = {
            id: req.body.id,
            name: req.body.name,
            degree: req.body.degree
        }

        University.create(universityObj)
            .then(data => {
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
        University.findByPk(id,
            {
                attributes:["id","name","degree"],
                include:[{
                    model: Student,
                    attributes: ["name"]
                }]
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(error => {
                res.status(400).json({ message: error.message })
            })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.update = (req, res) => {
    try {
        // const id = req.params.id
        const universityObj = {
            name: req.body.name
        }
        University.update(universityObj, {
            where: { id: req.params.id },
        })
            .then(data => {
                if (data == 1) {
                    res.status(200).json({ message: "Updated Successfully" })
                }
            })
            .catch(error => {
                res.status(400).json({ message: error.message })
            })
    } catch {
        res.status(500).json({ message: error.message })
    }
}

exports.delete = (req, res) => {
    try {

        University.destroy({ where: { id: req.params.id } })
            .then(data => {
                if (data == 1) {
                    res.status(200).json({ message: "Delete Successfully" })
                }
            })
            .catch(error => {
                res.status(400).json({ message: error.message })
            })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}