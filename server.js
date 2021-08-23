// Require Express
const express = require('express');
//require Logger middleware
const logger = require('./middleware/logger')
//init express
const app = express()
//use middleware
app.use(logger)
//parse data 
app.use(express.json())

//serve the static files
app.use(express.static(__dirname + "/public"))

// starting the server 
const PORT = 5000;
app.listen(PORT,(err)=>{
    err
    ? console.log(err)
    :console.log(`the server is running on port ${PORT}...`)
})