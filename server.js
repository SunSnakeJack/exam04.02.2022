const express = require('express');
const app = express();
const cors = require('cors')

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(cors());

//parse request of content type  - application/json
app.use(express.json())

//parse request of content type - application/
app.use(express.urlencoded({ extended:true}))

const db = require('./app/models')
db.sequelize.sync({force:false}).then(() => {
    console.log('Database syncing....   Success');
})

app.get('/', (req, res) => {
    res.send('Default Route')
})

require('./app/routes/employee.route')(app)
require('./app/routes/company.route')(app)
require('./app/routes/project.route')(app)

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})  

//timestamp 2021-03-11 22:51:50.505325312

