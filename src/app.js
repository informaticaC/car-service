const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const router = require('./Routes');
const errorHandler = require('./utils/errorHandler');
require('dotenv').config();


//Aplicación
const app = express();


//Middlewares
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());

app.use(router);
app.get('/', (req, res) => {
    return res.send("Welcome to Grabieliten express app!");
});
app.get('/api/v1', (req, res) => {
    return res.send("Here you will find the nice Car Service App, but not yet...");
})

//app.use('/api/v1', router);

//middlewares después de la rutas
app.use(errorHandler);

module.exports = app;