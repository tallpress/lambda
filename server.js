require('dotenv').config();
const express = require('express'),
    path = require('path'),
    expressJoi = require('express-joi-validator'),
    validator = require('./helpers/validationSchemas'),
    lambdaGateway = require('./gateways/lambda');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

validateRequest = validator.calculate;
app.post('/calculate', expressJoi(validateRequest), async(req, res) => {
    let body = req.body;
    lambdaResponse = await lambdaGateway.geneticAlgo(
        body.target,
        body.population_size,
        body.mutation_rate,
        body.epochs
    );
    res.json(lambdaResponse);
});

var port = process.env.APPLICATION_PORT
app.listen(port);
console.log(`Application is running on http://localhost:${port}`)
