require('dotenv').config();
const express = require('express'),
    path = require('path'),
    calculateRoutes = require('./routers/calculate');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/calculate', calculateRoutes);

const port = process.env.APPLICATION_PORT
app.listen(port);
console.log(`Application is running on http://localhost:${port}`)
