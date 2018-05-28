const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/searched/:city', (req, res) => {
    var city = encodeURI(req.params.city)
    console.log(city + " ", city);
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=88127b9fdae6f66172ce2151fbb93e45`)
        .then(response => res.send(response.data))
        .catch(error => console.log(error));

})

module.exports = app;
