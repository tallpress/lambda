lambdaGateway = require('../gateways/lambda'),

exports.calculate = function(req, res) {
    const body = req.body;

    lambdaGateway.geneticAlgo(
        body.target,
        body.population_size,
        body.mutation_rate,
        body.epochs,
        body.good_sample_size,
        body.random_sample_size
    ).then(response => {
        const responseBody = JSON.parse(response.Payload).body;
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json({
            status: response.StatusCode,
            response: {
                epochs: JSON.parse(responseBody.epochs),
            },
        })
    }).catch((error) => {
        const status = 500;
        res.status(status).json({ status: status, message: error.message });
    })
};

exports.epochFormat = function(req, res) {
    let toFormat = req.body.to_format

    var occourances = {};
    toFormat.forEach(string => {
        occourances[string] ? occourances[string]++ : occourances[string] = 1
    });

    frequencies = {}
    for (var i in occourances) {
        frequencies[occourances[i]] ? frequencies[occourances[i]].push(i) : frequencies[occourances[i]] = [i]
    }

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json({
        frequencies: frequencies
    });
    return
}
