const express = require('express'),
    validationSchema = require('./helpers/validationSchemas').calculate,
    lambdaGateway = require('../gateways/lambda'),
    expressJoi = require('express-joi-validator');

const router = express.Router();
const validateRequest = validationSchema.genetic_algorithm;

router.post('/genetic-algorithm', expressJoi(validateRequest), async (req, res) => {
    const body = req.body;
    lambdaResponse = await lambdaGateway.geneticAlgo(
        body.target,
        body.population_size,
        body.mutation_rate,
        body.epochs
    );
    res.json(lambdaResponse);
});

module.exports = router;
