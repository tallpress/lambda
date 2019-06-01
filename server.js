const express = require('express');
const path = require('path');
const router = express.Router();

require('dotenv').config()

var app = express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

var port = process.env.APPLICATION_PORT
app.listen(port);
console.log(`Application is running on http://localhost:${port}`)
