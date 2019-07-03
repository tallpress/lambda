const aws = require('aws-sdk');
const awsLambda = new aws.Lambda();

const invokeLambdaFunction = (lambdaInstance, params) => new Promise((resolve, reject) => {
    lambdaInstance.invoke(params, (error, data) => {
        if (error) {
            reject(error);
        } else {
            resolve(data);
        }
    });
});

module.exports = {
    geneticAlgo:
        async(target, populationSize, mutationRate, epochs, good_sample_size, random_sample_size) => {
            const params = {
                FunctionName: 'geneticAlgo',
                Payload: JSON.stringify({
                    target: target,
                    population_size: populationSize,
                    mutation_rate: mutationRate,
                    epochs: epochs,
                    good_sample_size: good_sample_size,
                    random_sample_size: random_sample_size
                })
            };
            return await invokeLambdaFunction(awsLambda, params);
    },
}
