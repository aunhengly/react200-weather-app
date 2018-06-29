const prod = require('./prod');
const dev = require('./dev');

module.exports = process.env.NODE_ENV === 'production' ? prod : dev;