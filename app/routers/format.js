const express = require('express')

const router = express.Router();

router.post('/genetic-algorithm', async (req, res) => {
    let toFormatArg = JSON.parse(req.body.to_format)
    var frequencies = [];
    toFormatArg.forEach(string => {
        frequencies[string] ? frequencies[string]++ : frequencies[string] = 1
    });


    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json({
        sorted_data: frequencies
    });
});

module.exports = router;
