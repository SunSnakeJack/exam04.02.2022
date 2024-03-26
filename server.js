const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

//parse request of content type - application/json
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

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})


