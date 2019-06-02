const express = require('express');
const path = require('path');
const expressJoi = require('express-joi-validator');
const validator = require('./helpers/validationSchemas')
require('dotenv').config();

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

validateRequest = validator.calculate;
app.post('/calculate', expressJoi(validateRequest), function(req, res) {
    res.json(req.body);
});

var port = process.env.APPLICATION_PORT
app.listen(port);
console.log(`Application is running on http://localhost:${port}`)
