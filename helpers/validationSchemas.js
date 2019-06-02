const joi = require('joi');

module.exports = {
    calculate: {
        body: {
            target: joi.string().required(),
            mutation_rate: joi.number().precision(2).min(0).max(1).required(),
            population_size: joi.number().integer().min(1).max(10000).required(),
            epochs: joi.number().integer().min(1).max(1000).required(),
        },
    }
}
