const express = require('express');
const path = require('path');
require('dotenv').config()
const validator = require('./helpers/requestValidation');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

validateRequest = validator.validate

app.post('/', validateRequest, function(req, res){
    res.json(req.body)
});

var port = process.env.APPLICATION_PORT
app.listen(port);
console.log(`Application is running on http://localhost:${port}`)
