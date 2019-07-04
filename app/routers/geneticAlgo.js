const express = require('express'),
    validationSchema = require('./helpers/validationSchemas').genetic_algorithm,
    lambdaGateway = require('../gateways/lambda'),
    expressJoi = require('express-joi-validator');

const router = express.Router();

router.post('/epoch/format', async (req, res) => {
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
});

const validateCalculate = validationSchema.calculate;
router.post('/calculate', expressJoi(validateCalculate), async (req, res) => {
    response = [{
        correct_percentage: 0,
        result:
            ['JrlVrER',
                'kPtXaop',
                'tAMWgVk',
                'BrlVrEQ',
                'tvMWKVG',
                'ttTGJpp',
                'tvMWKVk',
                'tvMWKsk',
                'BrlVrER',
                'HvMWKVk',
                'uryGrER',
                'kilQahR',
                'tvMWKVp',
                'kPtUahf',
                'tRlQJpN',
                'DPtQahf',
                'teOWMVk',
                'kPtQahf',
                'BrsVrER',
                'tdLNJpp',
                'kPyQaEf',
                'BvMnrZk',
                'tRLWJpp',
                'BrlVrEX',
                'tMCGJhp',
                'kvMWFXk',
                'tuPGJpF',
                'tRLGKpp',
                'BrlVrER',
                'sPEWahG',
                'hRLGJpp',
                'SPtEahV',
                'UPtGJqf',
                'dRLGcVk',
                'eRfVtpp',
                'OvMWKVk',
                'BrEVJER',
                'tgNpKVk',
                'BrlVrrR',
                'BrlVlER',
                'kPtQahf',
                'tRLGJxp',
                'tRLxKRk',
                'YvMWKrk',
                'RdAQahR',
                'tvMOPHk',
                'tvMWKVk',
                'tvMWbVk',
                'kPtyahf',
                'kPtQJhv',
                'tEMWKVk',
                'tRLGJpp',
                'FvMLLVk',
                'tRLGyxp',
                'krtQbhf',
                'tvlWKVk',
                'kHtQahf',
                'BrlWFER',
                'BrlWrER',
                'tbrfJVp',
                'tRLGJpR',
                'kPtQahf',
                'tLMWKVz',
                'tpUGJpp',
                'tRLGJpp',
                'tvMWKlk',
                'kPtQdhf',
                'BRLGJpW',
                'tRLGUpc',
                'tvLGJpk',
                'MRLGLpz',
                'tvMWRVX',
                'BrlVHER',
                'BrlVrgR',
                'tRLGJhu',
                'BPlVrER',
                'tvMVgVk',
                'tRMWKbk',
                'BrlVrsR',
                'kPtQanF',
                'kRLGJMV',
                'OPXQaff',
                'tvyWKsk',
                'BPlVXEc',
                'tRLGJmJ',
                'jrtoaaf',
                'BrlOrmR',
                'BrKVrER',
                'tvMWKEk',
                'tvMWxVv',
                'BrlVrwR',
                'tvMWKVl',
                'kvtQaVf',
                'tRZGrEp',
                'kPtQrhf',
                'tvMWWpp',
                'kttEahY',
                'tvMWQpk',
                'BrkVrVR',
                'kPtQahf']
    },
    {
        correct_percentage: 0,
        result:
            ['tvMWlsk',
                'tvMWKsA',
                'YvtXaop',
                'tvLGKpp',
                'BvMWKsk',
                'XpiGKpp',
                'kPtWaop',
                'QvMWKsk',
                'tRLGKIp',
                'tvMWKsk',
                'tRMGKpp',
                'tvyWKsP',
                'tvMSKsk',
                'kPtXaoU',
                'khtRatp',
                'tvyycyk',
                'kPtDaop',
                'cItXasb',
                'zLjWKsk',
                'tvMWKsk',
                'tRuGKpp',
                'kPZXaor',
                'kPtXaoG',
                'tRLGKop',
                'tRLWKSM',
                'tRLGKpp',
                'tvMWlsk',
                'tvMWKsk',
                'lvMWKsj',
                'tFyWKsk',
                'tPcWaST',
                'kvyWKsk',
                'tRLeKpp',
                'VvLGTpp',
                'tvyWKsk',
                'UvtbKsk',
                'tvyWKsk',
                'tvEWKsk',
                'kPkXaoK',
                'tvMWKvP',
                'tRXWKpI',
                'tvMWKXk',
                'kRLGKop',
                'tvyWKIv',
                'tyLGKsk',
                'tvMJKsk',
                'sweXKop',
                'zPteaoM',
                'tvyWKZk',
                'tvtXisk',
                'tRyzKpp',
                'kJtXKop',
                'kPtXSNp',
                'tvyWKck',
                'kntWJsp',
                'tRLGKpp',
                'tvyKWsk',
                'HHZpKsk',
                'tRLTKpp',
                'kPfXsEp',
                'ePtXaop',
                'kPtawVp',
                'tvrWKup',
                'tNyXKsk',
                'eULGKpp',
                'tvMWKsk',
                'lvyWKHk',
                'twykKsk',
                'tRLGKpU',
                'tPtWask',
                'tRLGKpD',
                'tvMWKsx',
                'tvMjKsk',
                'tPLXaop',
                'tRLGppp',
                'kiyWKyk',
                'tvMWKTk',
                'tpyWKsO',
                'tvyWKsk',
                'khpXaMk',
                'tPyWKsC',
                'kPtXapp',
                'kPtWajp',
                'jeMWKsk',
                'tvCWKsq',
                'tRLSKpp',
                'tRLXKsp',
                'lvMCKsk',
                'SNyhKsk',
                'kPkXamp',
                'tRLGjpp',
                'ttsWKsk',
                'TvMWmzk',
                'ZzyWjsk',
                'tvMWKLk',
                'tvyfQsk',
                'tvMWwsk',
                'kvMWKsk',
                'tvyWKvq',
                'kPtLaoL']
    }]
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json({
        status: response.StatusCode,
        response: {
            epochs: response,
        },
    })
    return
    const body = req.body;
    await lambdaGateway.geneticAlgo(
        body.target,
        body.population_size,
        body.mutation_rate,
        body.epochs,
        body.good_sample_size,
        body.random_sample_size
    ).then(async (response) => {
        const responseBody = JSON.parse(response.Payload).body;
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json({
            status: response.StatusCode,
            response: {
                epochs: JSON.parse(responseBody.epochs),
            },
        })
    })
        .catch((error) => {
            const status = 500;
            res.status(status).json({ status: status, message: error.message });
        })
});

module.exports = router;
