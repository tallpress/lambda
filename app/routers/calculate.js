const express = require('express'),
    validationSchema = require('./helpers/validationSchemas').calculate,
    lambdaGateway = require('../gateways/lambda'),
    expressJoi = require('express-joi-validator');

const router = express.Router();
const validateRequest = validationSchema.genetic_algorithm;

router.post('/genetic-algorithm', expressJoi(validateRequest), async (req, res) => {
    const body = req.body;
    await lambdaGateway.geneticAlgo(
        body.target,
        body.population_size,
        body.mutation_rate,
        body.epochs,
        body.good_sample_size,
        body.random_sample_size
    ).then(async (response) => {
        const responseBody = JSON.parse(response.Payload).body;

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json({
            status: response.StatusCode,
            response: {
                epochs: JSON.parse(responseBody.epochs),
            },
        })
    })
    .catch((error) => {
        const status = 500;
        res.status(status).json({status: status, message: error.message});
    })
});

module.exports = router;
