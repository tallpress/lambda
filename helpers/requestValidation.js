module.exports = {
    validate: function(req, res, next) {
        let body = req.body;
        if (!body.population_size || !body.mutation_rate || !body.target || !body.epochs) {
            return res.status(500).send({
                error: "missing values"
            });
        }
        next();
    }
}
