var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/flybox');

module.exports.Fly = require('./fly.js');