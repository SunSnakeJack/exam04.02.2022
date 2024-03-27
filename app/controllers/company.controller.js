const db = require('../models/index')
const Employee = db.employee
const Company = db.company
const Setting = db.setting

exports.findAll = (req, res) => {
    Company.findAll({
        include: [{
            model:Employee,
            attributes: ["name","position"]
        }]
    })
        .then(data => res.status(200).send(data))
        .catch(error => res.status(400).json({ message: error.message }))
}
