const aws = require('aws-sdk');
var lambda = new aws.Lambda();

lambda.config.update({
    'region': process.env.AWS_REGION
});

module.exports = {
    geneticAlgo: function() {

        var params = {
            FunctionName: 'geneticAlgo',
        };
        lambda.invoke(params, function (err, data) {
            if (err) console.log(err, err.stack);
            else console.log(data);
        });
    },
}
