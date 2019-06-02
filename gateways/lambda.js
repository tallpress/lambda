const aws = require('aws-sdk');
var awsLambda = new aws.Lambda();

awsLambda.config.update({
    'region': process.env.AWS_REGION
});

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
        var params = {
            FunctionName: 'geneticAlgo',
            Payload: JSON.stringify({
                target: target,
                population_size: populationSize,
                mutation_rate: mutationRate,
                epochs: epochs,
            })
        };
        const result = await invokeLambdaFunction(awsLambda, params);
        console.log(result)
        return result;
    },
}
