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
    geneticAlgo: async() => {
        var params = {
            FunctionName: 'geneticAlgo',
        };
        const result = await invokeLambdaFunction(awsLambda, params);
        console.log(result)
        return result;
    },
}
