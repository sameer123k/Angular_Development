
const mongoose = require('mongoose');
require("dotenv").config()
const mongoString = (process.env.MONGODB_URL)
const database = mongoose.connection
mongoose.connect(mongoString);


database.once('connected', () => {
    console.log('Database Connected');
})

module.exports = mongoose;