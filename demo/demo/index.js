const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');

require("./db/config") //database connection
const port = process.env.PORT || 3000;
require('dotenv').config()





// Demo api 
app.get('/', function (res, res) {
    res.send('hello');
})

const routes = require('./routes.js/allroutes');
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

app.listen(port, (req, res) => {
    console.log(`Server is running at ${port} `)
})
