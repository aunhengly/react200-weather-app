const keys = require('../src/config/keys');

require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const axios = require('axios');


const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/searched/:city', (req, res) => {
    var city = encodeURI(req.params.city);
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${keys.weatherApi}`)
        .then(response => res.send(response.data))
        .catch(error => console.log(error));
});

module.exports = app;
