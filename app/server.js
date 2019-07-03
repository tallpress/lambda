require('dotenv').config();
const express = require('express'),
    path = require('path'),
    geneticAlgoRoutes = require('./routers/geneticAlgo')
    cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: true }))
app.use(express.urlencoded({ extended: true }));
app.use('/genetic-algorithm', geneticAlgoRoutes);

const port = process.env.APPLICATION_PORT
app.listen(port);
console.log(`Application is running on http://localhost:${port}`)
