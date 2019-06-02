const express = require('express'),
    validationSchema = require('./helpers/validationSchemas').calculate,
    lambdaGateway = require('../gateways/lambda'),
    expressJoi = require('express-joi-validator');

const router = express.Router();
const validateRequest = validationSchema.genetic_algorithm;

router.post('/genetic-algorithm', expressJoi(validateRequest), async (req, res) => {
    const body = req.body;

    const handleResponse = async (response) => {
        const responseBody = JSON.parse(response.Payload).body;
        res.json({
            status: response.StatusCode,
            response: {
                percent_correct: responseBody.correct_percentage,
                algorithm_output: responseBody.result
            },
        })
    }

    await lambdaGateway.geneticAlgo(
        body.target,
        body.population_size,
        body.mutation_rate,
        body.epochs
    ).then((response) => handleResponse(response))
    .catch((error) => {
        const status = 500;
        res.status(status).json({status: status, message: error.message});
    })
});

module.exports = router;
