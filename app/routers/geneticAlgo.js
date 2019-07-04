const express = require('express'),
    validationSchema = require('./helpers/validationSchemas').genetic_algorithm,
    controller = require('../controllers/geneticAlgo')
    expressJoi = require('express-joi-validator');

const router = express.Router();
const validateCalculate = validationSchema.calculate;

router.post('/calculate', expressJoi(validateCalculate), controller.calculate)

router.post('/epoch/format', controller.epochFormat);

module.exports = router;
