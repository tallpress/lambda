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
    geneticAlgo: async(target, populationSize, mutationRate, epochs) => {
        const params = {
            FunctionName: 'geneticAlgo',
            Payload: JSON.stringify({
                target: target,
                population_size: populationSize,
                mutation_rate: mutationRate,
                epochs: epochs,
            })
        };
        return await invokeLambdaFunction(awsLambda, params);;
    },
}
